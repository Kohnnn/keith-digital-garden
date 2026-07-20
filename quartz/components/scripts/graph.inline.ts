import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation,
  forceSimulation,
  forceManyBody,
  forceCenter,
  forceLink,
  forceCollide,
  forceRadial,
  zoomIdentity,
  select,
  drag,
  zoom,
} from "d3"
import { Text, Graphics, Application, Container, Circle } from "pixi.js"
import { Group as TweenGroup, Tween as Tweened } from "@tweenjs/tween.js"
import { removeAllChildren } from "./util"
import { FullSlug, SimpleSlug, getFullSlug, resolveRelative, simplifySlug } from "../../util/path"
import type { D3Config } from "../Graph"

type GraphicsInfo = {
  color: string
  gfx: Graphics
  alpha: number
  active: boolean
}

type NodeData = {
  id: SimpleSlug
  text: string
  tags: string[]
} & SimulationNodeDatum

type SimpleLinkData = {
  source: SimpleSlug
  target: SimpleSlug
}

type LinkData = {
  source: NodeData
  target: NodeData
} & SimulationLinkDatum<NodeData>

type LinkRenderData = GraphicsInfo & {
  simulationData: LinkData
}

type NodeRenderData = GraphicsInfo & {
  simulationData: NodeData
  label: Text
}

const localStorageKey = "graph-visited"
const GLOBAL_NODE_LIMIT = 300
const GLOBAL_LINK_LIMIT = 750

export function selectGlobalGraph(
  graphNodeIds: Iterable<SimpleSlug>,
  graphLinks: SimpleLinkData[],
  slug: SimpleSlug,
): { nodeIds: Set<SimpleSlug>; links: SimpleLinkData[] } {
  const nodeIds = new Set(graphNodeIds)
  nodeIds.add(slug)
  const degreeById = new Map<SimpleSlug, number>([...nodeIds].map((id) => [id, 0]))
  const linkedToCurrent = new Set<SimpleSlug>()

  for (const link of graphLinks) {
    degreeById.set(link.source, (degreeById.get(link.source) ?? 0) + 1)
    degreeById.set(link.target, (degreeById.get(link.target) ?? 0) + 1)
    if (link.source === slug) linkedToCurrent.add(link.target)
    if (link.target === slug) linkedToCurrent.add(link.source)
  }

  const orderedNodeIds = [...nodeIds].sort((left, right) => {
    if (left === slug) return -1
    if (right === slug) return 1
    const linkedDifference = Number(linkedToCurrent.has(right)) - Number(linkedToCurrent.has(left))
    if (linkedDifference !== 0) return linkedDifference
    const degreeDifference = (degreeById.get(right) ?? 0) - (degreeById.get(left) ?? 0)
    return degreeDifference || left.localeCompare(right)
  })
  const selectedNodeIds = new Set(orderedNodeIds.slice(0, GLOBAL_NODE_LIMIT))
  const selectedLinks = graphLinks
    .filter((link) => selectedNodeIds.has(link.source) && selectedNodeIds.has(link.target))
    .sort((left, right) => {
      const currentDifference =
        Number(right.source === slug || right.target === slug) -
        Number(left.source === slug || left.target === slug)
      if (currentDifference !== 0) return currentDifference
      const degreeDifference =
        (degreeById.get(right.source) ?? 0) +
        (degreeById.get(right.target) ?? 0) -
        (degreeById.get(left.source) ?? 0) -
        (degreeById.get(left.target) ?? 0)
      return (
        degreeDifference ||
        left.source.localeCompare(right.source) ||
        left.target.localeCompare(right.target)
      )
    })
    .slice(0, GLOBAL_LINK_LIMIT)

  return { nodeIds: selectedNodeIds, links: selectedLinks }
}

function getVisited(): Set<SimpleSlug> {
  return new Set(JSON.parse(localStorage.getItem(localStorageKey) ?? "[]"))
}

function addToVisited(slug: SimpleSlug) {
  const visited = getVisited()
  visited.add(slug)
  localStorage.setItem(localStorageKey, JSON.stringify([...visited]))
}

type TweenNode = {
  update: (time: number) => boolean
  stop: () => void
}

async function renderGraph(graph: HTMLElement, fullSlug: FullSlug) {
  const slug = simplifySlug(fullSlug)
  const visited = getVisited()
  graph.classList.remove("graph-error")
  graph.removeAttribute("role")
  removeAllChildren(graph)

  let {
    drag: enableDrag,
    zoom: enableZoom,
    depth,
    scale,
    repelForce,
    centerForce,
    linkDistance,
    fontSize,
    opacityScale,
    removeTags,
    showTags,
    focusOnHover,
    enableRadial,
  } = JSON.parse(graph.dataset["cfg"]!) as D3Config

  const data: Map<SimpleSlug, ContentDetails> = new Map(
    Object.entries<ContentDetails>(await fetchData).map(([k, v]) => [
      simplifySlug(k as FullSlug),
      v,
    ]),
  )
  const isGlobalGraph = graph.classList.contains("global-graph-container")
  const links: SimpleLinkData[] = []
  const tags = new Set<SimpleSlug>()
  const validLinks = new Set(data.keys())
  const includeTags = showTags && (!isGlobalGraph || data.size <= GLOBAL_NODE_LIMIT)
  const outgoingById = new Map<SimpleSlug, SimpleSlug[]>()
  const incomingById = new Map<SimpleSlug, SimpleSlug[]>()

  const tweens = new Map<string, TweenNode>()
  for (const [source, details] of data.entries()) {
    for (const target of details.links ?? []) {
      if (!validLinks.has(target)) continue
      links.push({ source, target })
      const outgoing = outgoingById.get(source) ?? []
      outgoing.push(target)
      outgoingById.set(source, outgoing)
      const incoming = incomingById.get(target) ?? []
      incoming.push(source)
      incomingById.set(target, incoming)
    }

    if (includeTags) {
      for (const tag of details.tags
        .filter((tag) => !removeTags.includes(tag))
        .map((tag) => simplifySlug(("tags/" + tag) as FullSlug))) {
        tags.add(tag)
        links.push({ source, target: tag })
        const outgoing = outgoingById.get(source) ?? []
        outgoing.push(tag)
        outgoingById.set(source, outgoing)
      }
    }
  }

  let neighbourhood: Set<SimpleSlug>
  let visibleLinks: SimpleLinkData[]
  if (isGlobalGraph) {
    const globalGraph = selectGlobalGraph([...validLinks, ...tags], links, slug)
    neighbourhood = globalGraph.nodeIds
    visibleLinks = globalGraph.links
  } else {
    neighbourhood = new Set<SimpleSlug>()
    const wl: (SimpleSlug | "__SENTINEL")[] = [slug, "__SENTINEL"]
    if (depth >= 0) {
      while (depth >= 0 && wl.length > 0) {
        const cur = wl.shift()!
        if (cur === "__SENTINEL") {
          depth--
          wl.push("__SENTINEL")
        } else {
          neighbourhood.add(cur)
          wl.push(...(outgoingById.get(cur) ?? []), ...(incomingById.get(cur) ?? []))
        }
      }
    } else {
      validLinks.forEach((id) => neighbourhood.add(id))
      if (includeTags) tags.forEach((tag) => neighbourhood.add(tag))
    }
    visibleLinks = links.filter(
      (link) => neighbourhood.has(link.source) && neighbourhood.has(link.target),
    )
  }

  const nodes = [...neighbourhood].map((url) => ({
    id: url,
    text: url.startsWith("tags/") ? "#" + url.substring(5) : (data.get(url)?.title ?? url),
    tags: data.get(url)?.tags ?? [],
  }))
  const nodeById = new Map(nodes.map((node) => [node.id, node]))
  const graphData: { nodes: NodeData[]; links: LinkData[] } = {
    nodes,
    links: visibleLinks.flatMap((link) => {
      const source = nodeById.get(link.source)
      const target = nodeById.get(link.target)
      return source && target ? [{ source, target }] : []
    }),
  }

  const degreeById = new Map<string, number>()
  for (const node of graphData.nodes) {
    degreeById.set(node.id, 0)
  }
  for (const link of graphData.links) {
    degreeById.set(link.source.id, (degreeById.get(link.source.id) ?? 0) + 1)
    degreeById.set(link.target.id, (degreeById.get(link.target.id) ?? 0) + 1)
  }
  const nodeDegree = (id: string) => degreeById.get(id) ?? 0

  const width = graph.offsetWidth
  const height = Math.max(graph.offsetHeight, 250)

  // we virtualize the simulation and use pixi to actually render it
  const simulation: Simulation<NodeData, LinkData> = forceSimulation<NodeData>(graphData.nodes)
    .force("charge", forceManyBody().strength(-100 * repelForce))
    .force("center", forceCenter().strength(centerForce))
    .force("link", forceLink(graphData.links).distance(linkDistance))
    .force("collide", forceCollide<NodeData>((n) => nodeRadius(n)).iterations(3))

  const radius = (Math.min(width, height) / 2) * 0.8
  if (enableRadial) simulation.force("radial", forceRadial(radius).strength(0.2))

  // precompute style prop strings as pixi doesn't support css variables
  const cssVars = [
    "--secondary",
    "--tertiary",
    "--gray",
    "--light",
    "--lightgray",
    "--dark",
    "--darkgray",
    "--bodyFont",
  ] as const
  const computedStyleMap = cssVars.reduce(
    (acc, key) => {
      acc[key] = getComputedStyle(document.documentElement).getPropertyValue(key)
      return acc
    },
    {} as Record<(typeof cssVars)[number], string>,
  )

  // calculate color
  const color = (d: NodeData) => {
    const isCurrent = d.id === slug
    if (isCurrent) {
      return computedStyleMap["--secondary"]
    } else if (visited.has(d.id) || d.id.startsWith("tags/")) {
      return computedStyleMap["--tertiary"]
    } else {
      return computedStyleMap["--gray"]
    }
  }

  function nodeRadius(d: NodeData) {
    const numLinks = nodeDegree(d.id)
    const base = 2.5 + Math.sqrt(numLinks) * 1.6
    return d.id === slug ? base * 1.25 : base
  }

  let hoveredNodeId: string | null = null
  let hoveredNeighbours: Set<string> = new Set()
  const linkRenderData: LinkRenderData[] = []
  const nodeRenderData: NodeRenderData[] = []
  function updateHoverInfo(newHoveredId: string | null) {
    hoveredNodeId = newHoveredId

    if (newHoveredId === null) {
      hoveredNeighbours = new Set()
      for (const n of nodeRenderData) {
        n.active = false
      }

      for (const l of linkRenderData) {
        l.active = false
      }
    } else {
      hoveredNeighbours = new Set()
      for (const l of linkRenderData) {
        const linkData = l.simulationData
        if (linkData.source.id === newHoveredId || linkData.target.id === newHoveredId) {
          hoveredNeighbours.add(linkData.source.id)
          hoveredNeighbours.add(linkData.target.id)
        }

        l.active = linkData.source.id === newHoveredId || linkData.target.id === newHoveredId
      }

      for (const n of nodeRenderData) {
        n.active = hoveredNeighbours.has(n.simulationData.id)
      }
    }
  }

  let dragStartTime = 0
  let dragging = false

  function renderLinks() {
    tweens.get("link")?.stop()
    const tweenGroup = new TweenGroup()

    for (const l of linkRenderData) {
      let alpha = 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      // with full alpha and the rest with default alpha
      if (hoveredNodeId) {
        alpha = l.active ? 1 : 0.2
      }

      l.color = l.active ? computedStyleMap["--gray"] : computedStyleMap["--lightgray"]
      tweenGroup.add(new Tweened<LinkRenderData>(l).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("link", {
      update(time) {
        tweenGroup.update(time)
        return tweenGroup.getAll().some((tw) => tw.isPlaying())
      },
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderLabels() {
    tweens.get("label")?.stop()
    const tweenGroup = new TweenGroup()

    const defaultScale = 1 / scale
    const activeScale = defaultScale * 1.1
    for (const n of nodeRenderData) {
      const nodeId = n.simulationData.id

      if (hoveredNodeId === nodeId) {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: 1,
              scale: { x: activeScale, y: activeScale },
            },
            100,
          ),
        )
      } else {
        tweenGroup.add(
          new Tweened<Text>(n.label).to(
            {
              alpha: n.label.alpha,
              scale: { x: defaultScale, y: defaultScale },
            },
            100,
          ),
        )
      }
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("label", {
      update(time) {
        tweenGroup.update(time)
        return tweenGroup.getAll().some((tw) => tw.isPlaying())
      },
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderNodes() {
    tweens.get("hover")?.stop()

    const tweenGroup = new TweenGroup()
    for (const n of nodeRenderData) {
      let alpha = 1

      // if we are hovering over a node, we want to highlight the immediate neighbours
      if (hoveredNodeId !== null && focusOnHover) {
        alpha = n.active ? 1 : 0.2
      }

      tweenGroup.add(new Tweened<Graphics>(n.gfx, tweenGroup).to({ alpha }, 200))
    }

    tweenGroup.getAll().forEach((tw) => tw.start())
    tweens.set("hover", {
      update(time) {
        tweenGroup.update(time)
        return tweenGroup.getAll().some((tw) => tw.isPlaying())
      },
      stop() {
        tweenGroup.getAll().forEach((tw) => tw.stop())
      },
    })
  }

  function renderPixiFromD3() {
    renderNodes()
    renderLinks()
    renderLabels()
    scheduleRender()
  }

  tweens.forEach((tween) => tween.stop())
  tweens.clear()

  const app = new Application()
  await app.init({
    width,
    height,
    antialias: true,
    autoStart: false,
    autoDensity: true,
    backgroundAlpha: 0,
    preference: "webgl",
    resolution: window.devicePixelRatio,
    eventMode: "static",
  })
  graph.appendChild(app.canvas)

  const stage = app.stage
  stage.interactive = false

  const labelsContainer = new Container<Text>({ zIndex: 3, isRenderGroup: true })
  const nodesContainer = new Container<Graphics>({ zIndex: 2, isRenderGroup: true })
  const linkContainer = new Container<Graphics>({ zIndex: 1, isRenderGroup: true })
  stage.addChild(nodesContainer, labelsContainer, linkContainer)

  for (const n of graphData.nodes) {
    const nodeId = n.id
    const degree = nodeDegree(nodeId)
    const emphasis = nodeId === slug ? 1.2 : 1
    const labelScale = 1 + Math.log2(degree + 1) * 0.2

    const label = new Text({
      interactive: false,
      eventMode: "none",
      text: n.text,
      alpha: 0,
      anchor: { x: 0.5, y: 1.2 },
      style: {
        fontSize: fontSize * 15 * labelScale * emphasis,
        fill: computedStyleMap["--dark"],
        fontFamily: computedStyleMap["--bodyFont"],
      },
      resolution: window.devicePixelRatio * (isGlobalGraph ? 1 : 4),
    })
    label.scale.set(1 / scale)

    let oldLabelOpacity = 0
    const isTagNode = nodeId.startsWith("tags/")
    const gfx = new Graphics({
      interactive: true,
      label: nodeId,
      eventMode: "static",
      hitArea: new Circle(0, 0, nodeRadius(n)),
      cursor: "pointer",
    })
      .circle(0, 0, nodeRadius(n))
      .fill({ color: isTagNode ? computedStyleMap["--light"] : color(n) })
      .on("pointerover", (e) => {
        updateHoverInfo(e.target.label)
        oldLabelOpacity = label.alpha
        if (!dragging) {
          renderPixiFromD3()
        }
      })
      .on("pointerleave", () => {
        updateHoverInfo(null)
        label.alpha = oldLabelOpacity
        if (!dragging) {
          renderPixiFromD3()
        }
      })

    if (isTagNode) {
      gfx.stroke({ width: 2, color: computedStyleMap["--tertiary"] })
    }

    nodesContainer.addChild(gfx)
    labelsContainer.addChild(label)

    const nodeRenderDatum: NodeRenderData = {
      simulationData: n,
      gfx,
      label,
      color: color(n),
      alpha: 1,
      active: false,
    }

    nodeRenderData.push(nodeRenderDatum)
  }

  for (const l of graphData.links) {
    const gfx = new Graphics({ interactive: false, eventMode: "none" })
    linkContainer.addChild(gfx)

    const linkRenderDatum: LinkRenderData = {
      simulationData: l,
      gfx,
      color: computedStyleMap["--lightgray"],
      alpha: 1,
      active: false,
    }

    linkRenderData.push(linkRenderDatum)
  }

  let currentTransform = zoomIdentity
  if (enableDrag) {
    select<HTMLCanvasElement, NodeData | undefined>(app.canvas).call(
      drag<HTMLCanvasElement, NodeData | undefined>()
        .container(() => app.canvas)
        .subject(() => graphData.nodes.find((n) => n.id === hoveredNodeId))
        .on("start", function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(1).restart()
          event.subject.fx = event.subject.x
          event.subject.fy = event.subject.y
          event.subject.__initialDragPos = {
            x: event.subject.x,
            y: event.subject.y,
            fx: event.subject.fx,
            fy: event.subject.fy,
          }
          dragStartTime = Date.now()
          dragging = true
          scheduleRender()
        })
        .on("drag", function dragged(event) {
          const initPos = event.subject.__initialDragPos
          event.subject.fx = initPos.x + (event.x - initPos.x) / currentTransform.k
          event.subject.fy = initPos.y + (event.y - initPos.y) / currentTransform.k
          scheduleRender()
        })
        .on("end", function dragended(event) {
          if (!event.active) simulation.alphaTarget(0)
          event.subject.fx = null
          event.subject.fy = null
          dragging = false
          scheduleRender()

          // if the time between mousedown and mouseup is short, we consider it a click
          if (Date.now() - dragStartTime < 500) {
            const node = graphData.nodes.find((n) => n.id === event.subject.id) as NodeData
            const targ = resolveRelative(fullSlug, node.id)
            window.spaNavigate(new URL(targ, window.location.toString()))
          }
        }),
    )
  } else {
    for (const node of nodeRenderData) {
      node.gfx.on("click", () => {
        const targ = resolveRelative(fullSlug, node.simulationData.id)
        window.spaNavigate(new URL(targ, window.location.toString()))
      })
    }
  }

  if (enableZoom) {
    select<HTMLCanvasElement, NodeData>(app.canvas).call(
      zoom<HTMLCanvasElement, NodeData>()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([0.25, 4])
        .on("zoom", ({ transform }) => {
          currentTransform = transform
          stage.scale.set(transform.k, transform.k)
          stage.position.set(transform.x, transform.y)

          // zoom adjusts opacity of labels too
          const scale = transform.k * opacityScale
          let scaleOpacity = Math.max((scale - 1) / 3.75, 0)
          const activeNodes = nodeRenderData.filter((n) => n.active).flatMap((n) => n.label)

          for (const label of labelsContainer.children) {
            if (!activeNodes.includes(label)) {
              label.alpha = scaleOpacity
            }
          }
          scheduleRender()
        }),
    )
  }

  let frameId: number | undefined
  let stopAnimation = false
  function scheduleRender() {
    if (!stopAnimation && frameId === undefined) {
      frameId = requestAnimationFrame(renderFrame)
    }
  }

  function renderFrame(time: number) {
    frameId = undefined
    if (stopAnimation) return
    for (const n of nodeRenderData) {
      const { x, y } = n.simulationData
      if (!x || !y) continue
      n.gfx.position.set(x + width / 2, y + height / 2)
      n.label.position.set(x + width / 2, y + height / 2)
    }

    for (const l of linkRenderData) {
      const linkData = l.simulationData
      l.gfx.clear()
      l.gfx.moveTo(linkData.source.x! + width / 2, linkData.source.y! + height / 2)
      l.gfx
        .lineTo(linkData.target.x! + width / 2, linkData.target.y! + height / 2)
        .stroke({ alpha: l.alpha, width: 1, color: l.color })
    }

    let hasTweens = false
    for (const tween of tweens.values()) {
      hasTweens = tween.update(time) || hasTweens
    }
    app.renderer.render(stage)
    if (dragging || hasTweens) scheduleRender()
  }

  simulation.on("tick", scheduleRender)
  scheduleRender()
  return () => {
    stopAnimation = true
    simulation.stop()
    simulation.on("tick", null)
    if (frameId !== undefined) cancelAnimationFrame(frameId)
    app.destroy()
  }
}

let localGraphCleanups: (() => void)[] = []
let globalGraphCleanups: (() => void)[] = []

function cleanupLocalGraphs() {
  for (const cleanup of localGraphCleanups) {
    cleanup()
  }
  localGraphCleanups = []
}

function cleanupGlobalGraphs() {
  for (const cleanup of globalGraphCleanups) {
    cleanup()
  }
  globalGraphCleanups = []
}

globalThis.document?.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const slug = e.detail.url
  addToVisited(simplifySlug(slug))

  async function renderLocalGraph() {
    cleanupLocalGraphs()
    const localGraphContainers = document.getElementsByClassName("graph-container")
    for (const container of localGraphContainers) {
      const graph = container as HTMLElement
      try {
        localGraphCleanups.push(await renderGraph(graph, slug))
      } catch {
        removeAllChildren(graph)
        graph.classList.add("graph-error")
        graph.setAttribute("role", "status")
        graph.textContent = "Unable to render graph."
      }
    }
  }

  await renderLocalGraph()
  let themeChangeTimer: number | undefined
  const handleThemeChange = () => {
    if (themeChangeTimer) {
      window.clearTimeout(themeChangeTimer)
    }
    themeChangeTimer = window.setTimeout(() => {
      void renderLocalGraph()
    }, 180)
  }

  document.addEventListener("themechange", handleThemeChange)
  window.addCleanup(() => {
    document.removeEventListener("themechange", handleThemeChange)
    if (themeChangeTimer) {
      window.clearTimeout(themeChangeTimer)
    }
  })

  const containers = [
    ...document.getElementsByClassName("global-graph-outer"),
  ] as HTMLDialogElement[]
  let isGlobalGraphOpening = false
  let globalGraphVersion = 0
  let globalGraphOpener: HTMLElement | null = null
  const containerIcons = [
    ...document.getElementsByClassName("global-graph-icon"),
  ] as HTMLButtonElement[]

  function setGlobalGraphBusy(isBusy: boolean) {
    for (const icon of containerIcons) {
      icon.disabled = isBusy
      icon.setAttribute("aria-busy", String(isBusy))
    }
  }

  function hideGlobalGraph() {
    const opener = globalGraphOpener
    globalGraphOpener = null
    globalGraphVersion++
    setGlobalGraphBusy(false)
    cleanupGlobalGraphs()
    for (const container of containers) {
      container.removeAttribute("aria-busy")
      if (container.open) container.close()
    }
    if (opener?.isConnected) opener.focus()
  }

  async function renderGlobalGraph(
    opener: HTMLElement | null = document.activeElement as HTMLElement | null,
  ) {
    if (isGlobalGraphOpening || containers.some((container) => container.open)) return
    globalGraphOpener = opener
    isGlobalGraphOpening = true
    setGlobalGraphBusy(true)
    const version = globalGraphVersion

    try {
      const slug = getFullSlug(window)
      for (const container of containers) {
        const graphContainer = container.querySelector<HTMLElement>(".global-graph-container")
        const error = container.querySelector<HTMLElement>(".global-graph-error")
        error?.setAttribute("hidden", "")
        if (error) error.textContent = ""
        container.showModal()
        container.setAttribute("aria-busy", "true")
        container.querySelector<HTMLElement>(".global-graph-close")?.focus()

        try {
          if (!graphContainer) throw new Error("Missing graph container")
          const cleanup = await renderGraph(graphContainer, slug)
          if (version === globalGraphVersion && container.open) {
            globalGraphCleanups.push(cleanup)
          } else {
            cleanup()
          }
        } catch {
          if (!container.open || version !== globalGraphVersion) continue
          if (graphContainer) removeAllChildren(graphContainer)
          if (error) {
            error.textContent = "Unable to render the graph. Close this view and try again."
            error.removeAttribute("hidden")
          }
        } finally {
          container.removeAttribute("aria-busy")
        }
      }
    } finally {
      isGlobalGraphOpening = false
      setGlobalGraphBusy(false)
    }
  }

  function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "Escape" && containers.some((container) => container.open)) {
      e.preventDefault()
      hideGlobalGraph()
      return
    }
    if (e.key !== "g" || (!e.ctrlKey && !e.metaKey) || e.shiftKey) return
    e.preventDefault()
    if (containers.some((container) => container.open)) {
      hideGlobalGraph()
    } else {
      void renderGlobalGraph()
    }
  }

  function handleDialogCancel(e: Event) {
    e.preventDefault()
    hideGlobalGraph()
  }

  function handleDialogClick(e: MouseEvent) {
    if (e.target === e.currentTarget) hideGlobalGraph()
  }

  containerIcons.forEach((icon) => {
    const open = () => void renderGlobalGraph(icon)
    icon.addEventListener("click", open)
    window.addCleanup(() => icon.removeEventListener("click", open))
  })

  const closeButtons = document.getElementsByClassName("global-graph-close")
  Array.from(closeButtons).forEach((button) => {
    button.addEventListener("click", hideGlobalGraph)
    window.addCleanup(() => button.removeEventListener("click", hideGlobalGraph))
  })

  containers.forEach((container) => {
    container.addEventListener("cancel", handleDialogCancel)
    container.addEventListener("click", handleDialogClick)
    window.addCleanup(() => {
      container.removeEventListener("cancel", handleDialogCancel)
      container.removeEventListener("click", handleDialogClick)
    })
  })

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => {
    document.removeEventListener("keydown", shortcutHandler)
    hideGlobalGraph()
    cleanupLocalGraphs()
  })
})
