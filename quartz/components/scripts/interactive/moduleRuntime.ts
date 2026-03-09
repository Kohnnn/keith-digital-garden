import { INTERACTIVE_ARTICLES, INTERACTIVE_MODULE_SCENE_MAP } from "./articleRegistry"
import type { ModuleControlDefinition, ModuleSceneDescriptor } from "./moduleRegistry"
import { mountGeneratedModuleScene } from "./richModuleScenes"
import type { SceneDefinition, SimController } from "./storyRuntime"

type ControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const ACTION_CONTROL_IDS = new Set(["reset", "pause-toggle", "cycle", "shuffle"])
const MODULE_RESET_EVENT = "interactive-sim-reset"

const isControlElement = (node: Element | null): node is ControlElement =>
  !!node &&
  (node instanceof HTMLInputElement ||
    node instanceof HTMLSelectElement ||
    node instanceof HTMLTextAreaElement)

const getControlElements = (root: HTMLElement, controlId: string) =>
  Array.from(root.querySelectorAll<Element>(`[data-control="${controlId}"]`)).filter(
    isControlElement,
  )

const dispatchControlUpdate = (element: ControlElement) => {
  const eventName =
    element instanceof HTMLSelectElement ||
    (element instanceof HTMLInputElement && element.type === "radio")
      ? "change"
      : "input"
  element.dispatchEvent(new Event(eventName, { bubbles: true }))
}

const readControlValue = (element: ControlElement): boolean | number | string => {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") return element.checked
    if (element.type === "radio") return element.value
    if (element.type === "range" || element.type === "number") return Number(element.value)
  }

  return element.value
}

const writeControlValue = (element: ControlElement, value: boolean | number | string) => {
  if (element instanceof HTMLInputElement) {
    if (element.type === "checkbox") {
      element.checked = Boolean(value)
      return
    }
    if (element.type === "radio") {
      element.checked = String(value) === element.value
      return
    }
  }

  element.value = String(value)
}

const applyPresetToRoot = (
  root: HTMLElement,
  preset: Record<string, boolean | number | string>,
  dispatch = true,
) => {
  for (const [controlId, value] of Object.entries(preset)) {
    if (ACTION_CONTROL_IDS.has(controlId)) continue
    const elements = getControlElements(root, controlId)
    if (elements.length === 0) continue
    for (const element of elements) {
      writeControlValue(element, value)
      if (dispatch) {
        dispatchControlUpdate(element)
      }
    }
  }
}

const updatePauseButtons = (pauseGroup: string, paused: boolean) => {
  const roots = document.querySelectorAll<HTMLElement>(
    `.interactive-sim[data-sim-pause-group="${pauseGroup}"]`,
  )
  for (const root of roots) {
    root.dataset.paused = paused ? "true" : "false"
    const button = root.querySelector<HTMLButtonElement>('button[data-control="pause-toggle"]')
    if (!button) continue
    button.textContent = paused ? "resume motion" : "pause motion"
    button.setAttribute("aria-pressed", paused ? "true" : "false")
  }
}

const updateRootPauseButton = (root: HTMLElement, paused: boolean) => {
  root.dataset.paused = paused ? "true" : "false"
  const button = root.querySelector<HTMLButtonElement>('button[data-control="pause-toggle"]')
  if (!button) return
  button.textContent = paused ? "resume motion" : "pause motion"
  button.setAttribute("aria-pressed", paused ? "true" : "false")
}

const sanitizeDomToken = (value: string) =>
  value.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "")

const controlDomId = (sceneId: string, controlId: string) =>
  `${sanitizeDomToken(sceneId)}-${controlId}`

const buildControlNode = (sceneId: string, control: ModuleControlDefinition) => {
  if (control.kind === "action") {
    const button = document.createElement("button")
    button.type = "button"
    button.dataset.control = control.id
    button.textContent = control.label
    return button
  }

  if (control.kind === "choice") {
    const wrapper = document.createElement("div")
    wrapper.className = "interactive-sim-control"
    const label = document.createElement("label")
    label.textContent = control.label
    wrapper.appendChild(label)

    const choices = document.createElement("div")
    choices.className = "interactive-choice-group"
    const name = controlDomId(sceneId, control.id)
    control.options.forEach((option, index) => {
      const choiceLabel = document.createElement("label")
      choiceLabel.className = "interactive-choice-pill"
      choiceLabel.htmlFor = `${name}-${index}`

      const input = document.createElement("input")
      input.id = `${name}-${index}`
      input.type = "radio"
      input.name = name
      input.value = option
      input.dataset.control = control.id
      input.checked = option === control.value

      const text = document.createElement("span")
      text.textContent = option

      choiceLabel.append(input, text)
      choices.appendChild(choiceLabel)
    })

    wrapper.appendChild(choices)
    return wrapper
  }

  const wrapper = document.createElement("div")
  wrapper.className = "interactive-sim-control"
  const id = controlDomId(sceneId, control.id)

  if (control.kind === "toggle") {
    const label = document.createElement("label")
    label.className = "interactive-toggle-row"
    label.htmlFor = id

    const input = document.createElement("input")
    input.id = id
    input.type = "checkbox"
    input.dataset.control = control.id
    input.checked = control.value

    const text = document.createElement("span")
    text.textContent = control.label
    label.append(input, text)
    wrapper.appendChild(label)
    return wrapper
  }

  const label = document.createElement("label")
  label.htmlFor = id
  label.textContent = control.label

  const input = document.createElement("input")
  input.id = id
  input.type = "range"
  input.dataset.control = control.id
  input.min = String(control.min)
  input.max = String(control.max)
  input.step = String(control.step)
  input.value = String(control.value)

  wrapper.append(label, input)
  return wrapper
}

const stageClassForScene = (scene: ModuleSceneDescriptor) =>
  scene.layout === "chart" ? "stage-short" : "stage-medium"

const ensureModuleMedia = (stage: HTMLElement, scene: ModuleSceneDescriptor) => {
  if (scene.renderer === "canvas") {
    stage.querySelector("svg.sim-svg")?.remove()
    if (!stage.querySelector("canvas.sim-canvas")) {
      const canvas = document.createElement("canvas")
      canvas.className = "sim-canvas"
      canvas.setAttribute("aria-label", `${scene.title} interactive module`)
      stage.appendChild(canvas)
    }
    return
  }

  stage.querySelector("canvas.sim-canvas")?.remove()
  if (!stage.querySelector("svg.sim-svg")) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.classList.add("sim-svg")
    svg.setAttribute("aria-label", `${scene.title} interactive module`)
    stage.appendChild(svg)
  }
}

export const ensureModuleSceneShell = (root: HTMLElement) => {
  const sceneId = root.dataset.simScene
  if (!sceneId) return null

  const scene = INTERACTIVE_MODULE_SCENE_MAP[sceneId]
  if (!scene || scene.noteOnly) return null

  root.dataset.simModule = scene.sceneId
  if (scene.sharedGroup) root.dataset.simShared = scene.sharedGroup
  else delete root.dataset.simShared

  if (scene.pauseGroup) {
    root.dataset.simPauseGroup = scene.pauseGroup
    root.dataset.paused ||= "false"
  } else {
    delete root.dataset.simPauseGroup
  }

  let stage = root.querySelector<HTMLElement>(".interactive-sim-stage")
  if (!stage) {
    stage = document.createElement("div")
    root.prepend(stage)
  }
  stage.className = `interactive-sim-stage ${stageClassForScene(scene)}`
  ensureModuleMedia(stage, scene)

  let controls = root.querySelector<HTMLElement>(".interactive-sim-controls")
  if (!controls && scene.controls.length > 0) {
    controls = document.createElement("div")
    root.appendChild(controls)
  }

  if (controls) {
    controls.className = "interactive-sim-controls"
    if (controls.childElementCount === 0) {
      scene.controls.forEach((control) =>
        controls!.appendChild(buildControlNode(scene.sceneId, control)),
      )
    }
  }

  return scene
}

let propagatingSharedControls = false

const syncSharedControl = (
  sourceRoot: HTMLElement,
  controlId: string,
  value: boolean | number | string,
) => {
  if (propagatingSharedControls || ACTION_CONTROL_IDS.has(controlId)) return
  const sharedGroup = sourceRoot.dataset.simShared
  if (!sharedGroup) return

  propagatingSharedControls = true
  try {
    const peers = document.querySelectorAll<HTMLElement>(
      `.interactive-sim[data-sim-shared="${sharedGroup}"]`,
    )
    for (const peer of peers) {
      if (peer === sourceRoot) continue
      const controls = getControlElements(peer, controlId)
      for (const control of controls) {
        writeControlValue(control, value)
        dispatchControlUpdate(control)
      }
    }
  } finally {
    propagatingSharedControls = false
  }
}

const resolveResetTargets = (root: HTMLElement, scene: ModuleSceneDescriptor) => {
  if (scene.resetScope === "shared" && scene.sharedGroup) {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        `.interactive-sim[data-sim-shared="${scene.sharedGroup}"]`,
      ),
    )
  }

  if (scene.resetScope === "pause-group" && scene.pauseGroup) {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        `.interactive-sim[data-sim-pause-group="${scene.pauseGroup}"]`,
      ),
    )
  }

  return [root]
}

const restoreModuleDefaults = (root: HTMLElement, scene: ModuleSceneDescriptor) => {
  const targets = resolveResetTargets(root, scene)
  for (const target of targets) {
    const sceneId = target.dataset.simScene
    const targetScene = (sceneId && INTERACTIVE_MODULE_SCENE_MAP[sceneId]) || scene
    applyPresetToRoot(target, targetScene.defaultPreset)
    target.dispatchEvent(new CustomEvent(MODULE_RESET_EVENT))
  }

  if (scene.pauseGroup && scene.resetScope === "pause-group") {
    updatePauseButtons(scene.pauseGroup, false)
  } else if (
    scene.controls.some((control) => control.kind === "action" && control.id === "pause-toggle")
  ) {
    updateRootPauseButton(root, false)
  }
}

export const buildGeneratedSceneRegistry = (
  articles = INTERACTIVE_ARTICLES,
): Record<string, SceneDefinition> =>
  Object.fromEntries(
    articles
      .flatMap((article) => article.modules)
      .filter((scene) => !scene.noteOnly)
      .map((scene) => [
        scene.sceneId,
        {
          id: scene.sceneId,
          renderer: scene.renderer,
          mount: (root: HTMLElement): SimController | null =>
            mountGeneratedModuleScene(root, scene),
          presets: {
            baseline: scene.defaultPreset,
          },
        } satisfies SceneDefinition,
      ]),
  )

export const setupModuleArticles = () => {
  const roots = document.querySelectorAll<HTMLElement>(".interactive-sim[data-sim-module]")
  for (const root of roots) {
    const sceneId = root.dataset.simScene
    if (!sceneId) continue
    const scene = INTERACTIVE_MODULE_SCENE_MAP[sceneId]
    if (!scene) continue

    applyPresetToRoot(root, scene.defaultPreset, false)

    if (scene.pauseGroup) {
      updatePauseButtons(scene.pauseGroup, root.dataset.paused === "true")
    } else if (
      scene.controls.some((control) => control.kind === "action" && control.id === "pause-toggle")
    ) {
      updateRootPauseButton(root, root.dataset.paused === "true")
    }

    const onInput = (event: Event) => {
      const control = (event.target as HTMLElement | null)?.closest("[data-control]") ?? null
      if (!isControlElement(control)) return
      const controlId = control.dataset.control
      if (!controlId || ACTION_CONTROL_IDS.has(controlId)) return
      syncSharedControl(root, controlId, readControlValue(control))
    }

    const onClick = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const resetButton = target.closest<HTMLButtonElement>('button[data-control="reset"]')
      if (resetButton) {
        restoreModuleDefaults(root, scene)
        return
      }

      const pauseButton = target.closest<HTMLButtonElement>('button[data-control="pause-toggle"]')
      if (pauseButton) {
        const paused = root.dataset.paused === "true"
        if (scene.pauseGroup) {
          updatePauseButtons(scene.pauseGroup, !paused)
        } else {
          updateRootPauseButton(root, !paused)
        }
      }
    }

    root.addEventListener("input", onInput)
    root.addEventListener("change", onInput)
    root.addEventListener("click", onClick)
    window.addCleanup(() => {
      root.removeEventListener("input", onInput)
      root.removeEventListener("change", onInput)
      root.removeEventListener("click", onClick)
    })
  }
}

export const getModuleResetEventName = () => MODULE_RESET_EVENT
