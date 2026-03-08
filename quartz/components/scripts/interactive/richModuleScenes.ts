import * as d3 from "d3"

import { applyBasisTransform, gpsGeometryScore, qrBitAt, resolveElasticCollision } from "./geometryMath"
import { bicycleTurnRadius, crankSliderPosition, gearPairAngles, watchHandAngles } from "./kinematics"
import {
  bestSplit1D,
  biasVarianceCurve,
  buildPrecisionRecallCurve,
  buildRocCurve,
  doubleDescentCurve,
  ensembleVote,
  fitLinearRegression,
  meanSquaredError,
  sigmoid,
  type ClassifiedSample,
} from "./mlMath"
import type { ModuleSceneDescriptor } from "./moduleRegistry"
import type { SimController } from "./storyRuntime"
import {
  applyRequest,
  decayServerLoad,
  firstFitAllocation,
  fragmentationRatio,
  nextRoundRobinServer,
  pickLeastConnections,
  type MemoryBlock,
  type ServerState,
} from "./systemMath"

const TAU = Math.PI * 2

type PointerState = {
  dragging: boolean
  x: number
  y: number
  nx: number
  ny: number
  clickCount: number
  path: Array<{ x: number; y: number }>
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const seeded = (seed: number) => Math.sin(seed * 12.9898) * 43758.5453

const noise = (seed: number) => seeded(seed) - Math.floor(seeded(seed))

const ensureCanvas = (root: HTMLElement) => {
  const stage = root.querySelector<HTMLElement>(".interactive-sim-stage")
  if (!stage) return null
  stage.querySelector("svg.sim-svg")?.remove()
  let canvas = stage.querySelector<HTMLCanvasElement>("canvas.sim-canvas")
  if (!canvas) {
    canvas = document.createElement("canvas")
    canvas.className = "sim-canvas"
    stage.appendChild(canvas)
  }
  return canvas
}

const ensureSvg = (root: HTMLElement) => {
  const stage = root.querySelector<HTMLElement>(".interactive-sim-stage")
  if (!stage) return null
  stage.querySelector("canvas.sim-canvas")?.remove()
  let svg = stage.querySelector<SVGSVGElement>("svg.sim-svg")
  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.classList.add("sim-svg")
    stage.appendChild(svg)
  }
  const width = Math.max(stage.clientWidth, 320)
  const height = Math.max(stage.clientHeight, 260)
  svg.setAttribute("width", String(width))
  svg.setAttribute("height", String(height))
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
  return { svg, width, height }
}

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  canvas.width = Math.max(1, Math.round(rect.width * dpr))
  canvas.height = Math.max(1, Math.round(rect.height * dpr))
  return {
    dpr,
    width: rect.width,
    height: rect.height,
  }
}

const hasGesture = (scene: ModuleSceneDescriptor, gesture: string) => scene.gestures.includes(gesture)

const getControlElement = (root: HTMLElement, controlId: string) => {
  const radio = root.querySelector<HTMLInputElement>(
    `input[type="radio"][data-control="${controlId}"]:checked`,
  )
  if (radio) return radio
  return root.querySelector<HTMLElement>(`[data-control="${controlId}"]`)
}

const getNumber = (root: HTMLElement, controlId: string, fallback: number) => {
  const element = getControlElement(root, controlId)
  if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
    return fallback
  }
  const value = Number(element.value)
  return Number.isFinite(value) ? value : fallback
}

const getBoolean = (root: HTMLElement, controlId: string, fallback = false) => {
  const element = getControlElement(root, controlId)
  if (element instanceof HTMLInputElement && element.type === "checkbox") {
    return element.checked
  }
  return fallback
}

const getChoice = (root: HTMLElement, controlId: string, fallback: string) => {
  const element = getControlElement(root, controlId)
  if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
    return element.value
  }
  return fallback
}

const collectControlIds = (scene: ModuleSceneDescriptor) =>
  scene.controls
    .filter((control) => control.kind !== "action")
    .map((control) => control.id)

const buildPointerState = (): PointerState => ({
  dragging: false,
  x: 0,
  y: 0,
  nx: 0.5,
  ny: 0.5,
  clickCount: 0,
  path: [],
})

const attachStagePointer = (
  root: HTMLElement,
  target: HTMLElement,
  pointer: PointerState,
  redraw: () => void,
) => {
  const update = (event: PointerEvent) => {
    const rect = target.getBoundingClientRect()
    pointer.x = event.clientX - rect.left
    pointer.y = event.clientY - rect.top
    pointer.nx = clamp(pointer.x / Math.max(rect.width, 1), 0, 1)
    pointer.ny = clamp(pointer.y / Math.max(rect.height, 1), 0, 1)
    if (pointer.dragging) {
      pointer.path.push({ x: pointer.nx, y: pointer.ny })
      if (pointer.path.length > 80) {
        pointer.path.shift()
      }
    }
  }

  const onPointerDown = (event: PointerEvent) => {
    update(event)
    pointer.dragging = true
    pointer.path = [{ x: pointer.nx, y: pointer.ny }]
    target.setPointerCapture(event.pointerId)
    redraw()
  }

  const onPointerMove = (event: PointerEvent) => {
    update(event)
    if (pointer.dragging || root.dataset.pointerHover === "true") {
      redraw()
    }
  }

  const onPointerUp = (event: PointerEvent) => {
    update(event)
    pointer.dragging = false
    try {
      target.releasePointerCapture(event.pointerId)
    } catch {
      // Ignore release errors when the pointer was never captured.
    }
    redraw()
  }

  const onClick = (event: MouseEvent) => {
    const rect = target.getBoundingClientRect()
    pointer.x = event.clientX - rect.left
    pointer.y = event.clientY - rect.top
    pointer.nx = clamp(pointer.x / Math.max(rect.width, 1), 0, 1)
    pointer.ny = clamp(pointer.y / Math.max(rect.height, 1), 0, 1)
    pointer.clickCount += 1
    redraw()
  }

  target.addEventListener("pointerdown", onPointerDown)
  target.addEventListener("pointermove", onPointerMove)
  target.addEventListener("pointerup", onPointerUp)
  target.addEventListener("pointerleave", onPointerUp)
  target.addEventListener("click", onClick)

  return () => {
    target.removeEventListener("pointerdown", onPointerDown)
    target.removeEventListener("pointermove", onPointerMove)
    target.removeEventListener("pointerup", onPointerUp)
    target.removeEventListener("pointerleave", onPointerUp)
    target.removeEventListener("click", onClick)
  }
}

const registerActivity = (root: HTMLElement, start: () => void, stop: () => void) => {
  let visible = document.visibilityState !== "hidden"
  let inView = true
  let observer: IntersectionObserver | null = null

  const sync = () => {
    if (visible && inView) {
      start()
    } else {
      stop()
    }
  }

  const onVisibility = () => {
    visible = document.visibilityState !== "hidden"
    sync()
  }

  document.addEventListener("visibilitychange", onVisibility)
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting)
        sync()
      },
      { threshold: 0.08 },
    )
    observer.observe(root)
  }
  sync()

  return () => {
    document.removeEventListener("visibilitychange", onVisibility)
    observer?.disconnect()
    stop()
  }
}

const drawSceneBadge = (
  ctx: CanvasRenderingContext2D,
  scene: ModuleSceneDescriptor,
  width: number,
  values: Record<string, boolean | number | string>,
) => {
  ctx.save()
  ctx.fillStyle = "rgba(6, 9, 15, 0.72)"
  ctx.fillRect(18, 16, Math.min(width - 36, 320), 44)
  ctx.fillStyle = "#eae0cf"
  ctx.font = "600 12px monospace"
  ctx.fillText(scene.title, 28, 34)
  ctx.fillStyle = "rgba(234,224,207,0.78)"
  ctx.font = "11px monospace"
  const summary = Object.entries(values)
    .slice(0, 3)
    .map(([key, value]) => `${key}=${typeof value === "number" ? value.toFixed(2) : String(value)}`)
    .join("  ")
  ctx.fillText(summary, 28, 50)
  ctx.restore()
}

const paintBackdrop = (ctx: CanvasRenderingContext2D, width: number, height: number, hue = 210) => {
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, `hsl(${hue} 46% 10%)`)
  gradient.addColorStop(1, "hsl(220 32% 5%)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
}

const getChoiceFromValues = (
  values: Record<string, boolean | number | string>,
  key: string,
  fallback: string,
) => {
  const value = values[key]
  return typeof value === "string" ? value : fallback
}

const readSceneValues = (root: HTMLElement, scene: ModuleSceneDescriptor) =>
  Object.fromEntries(
    scene.controls
      .filter((control) => control.kind !== "action")
      .map((control) => {
        if (control.kind === "range") {
          return [control.id, getNumber(root, control.id, control.value)] as const
        }
        if (control.kind === "toggle") {
          return [control.id, getBoolean(root, control.id, control.value)] as const
        }
        return [control.id, getChoice(root, control.id, control.value)] as const
      }),
  )

const drawFlowBody = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 204)
  const angle = ((Number(values.angle ?? values.aoa ?? 4) as number) * Math.PI) / 180
  const speed = Number(values.speed ?? values.flow ?? values.time ?? 1)
  const detail = Number(values.detail ?? values.pressure ?? values.density ?? 0.55)
  const cx = width * 0.48
  const cy = height * 0.55
  const chord = width * 0.38
  const thickness = height * 0.11

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(angle)
  ctx.beginPath()
  ctx.moveTo(-chord * 0.5, 0)
  ctx.quadraticCurveTo(-chord * 0.12, -thickness, chord * 0.48, -thickness * 0.2)
  ctx.quadraticCurveTo(chord * 0.56, -thickness * 0.05, chord * 0.5, 0)
  ctx.quadraticCurveTo(chord * 0.44, thickness * 0.28, -chord * 0.5, 0)
  const fill = ctx.createLinearGradient(-chord * 0.5, 0, chord * 0.5, 0)
  fill.addColorStop(0, "rgba(255,255,255,0.88)")
  fill.addColorStop(0.4, "rgba(247,210,116,0.94)")
  fill.addColorStop(1, "rgba(233,138,87,0.92)")
  ctx.fillStyle = fill
  ctx.fill()
  ctx.restore()

  const rows = 14
  for (let row = 0; row < rows; row += 1) {
    const y = height * (0.18 + row * 0.045)
    ctx.beginPath()
    for (let step = 0; step <= 44; step += 1) {
      const t = step / 44
      const x = 24 + t * (width - 48)
      const wave =
        Math.sin(t * 8 + row * 0.7 + phase * (0.8 + speed * 0.25)) * 8 * detail +
        Math.sin(t * 16 + row * 0.25) * 2.8
      const suction = Math.exp(-Math.pow((x - cx) / (chord * 0.55), 2)) * 42 * Math.sin(angle)
      const offset = y + wave - suction * (y < cy ? 1 : -0.55)
      if (step === 0) ctx.moveTo(x, offset)
      else ctx.lineTo(x, offset)
    }
    ctx.strokeStyle =
      scene.visual === "pressure-map" || scene.visual === "boundary-layer"
        ? `hsla(${190 - row * 4} 90% ${42 + row * 1.2}% / 0.55)`
        : `rgba(115, 197, 255, ${0.18 + row * 0.022})`
    ctx.lineWidth = row % 3 === 0 ? 1.35 : 0.8
    ctx.stroke()
  }

  if (scene.visual === "pressure-map" || scene.visual === "boundary-layer") {
    for (let index = 0; index < 22; index += 1) {
      const arcX = cx - chord * 0.46 + (index / 21) * chord * 0.94
      const pressure = Math.sin(index * 0.4 + phase * 0.8) * 0.35 + Math.sin(angle) * 0.8
      ctx.strokeStyle = pressure > 0 ? "rgba(236,119,79,0.75)" : "rgba(104,176,255,0.72)"
      ctx.beginPath()
      ctx.moveTo(arcX, cy)
      ctx.lineTo(arcX, cy - pressure * 40)
      ctx.stroke()
    }
  }
}

const drawMechanicalTrain = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 28)
  const speed = Number(values.speed ?? values.wind ?? values.energy ?? 1)
  const ratio = Number(values.ratio ?? values.train ?? values.scale ?? 0.92)
  const impulse = Number(values.impulse ?? values.lock ?? values.release ?? 0.55)
  const gears = [
    { x: width * 0.24, y: height * 0.56, r: 56, teeth: 52, color: "#f5d26f" },
    { x: width * 0.44, y: height * 0.42, r: 38, teeth: 28, color: "#78c6ff" },
    { x: width * 0.6, y: height * 0.56, r: 28, teeth: 16, color: "#ef8b69" },
    { x: width * 0.77, y: height * 0.4, r: 20, teeth: 14, color: "#bde68f" },
  ]

  for (let index = 0; index < gears.length; index += 1) {
    const gear = gears[index]
    const drive = gearPairAngles(phase * speed * (0.85 + ratio * 0.4), gears[0].teeth, gear.teeth)
    const angle = index === 0 ? drive.driverAngle : drive.drivenAngle * (index * 0.35 + 1)
    ctx.save()
    ctx.translate(gear.x, gear.y)
    ctx.rotate(angle)
    ctx.strokeStyle = gear.color
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.arc(0, 0, gear.r, 0, TAU)
    ctx.stroke()
    for (let tooth = 0; tooth < gear.teeth; tooth += 1) {
      const a = (tooth / gear.teeth) * TAU
      ctx.beginPath()
      ctx.moveTo(Math.cos(a) * (gear.r - 6), Math.sin(a) * (gear.r - 6))
      ctx.lineTo(Math.cos(a) * (gear.r + 8), Math.sin(a) * (gear.r + 8))
      ctx.strokeStyle = "rgba(234,224,207,0.42)"
      ctx.lineWidth = 1.6
      ctx.stroke()
    }
    ctx.fillStyle = "rgba(234,224,207,0.16)"
    ctx.beginPath()
    ctx.arc(0, 0, gear.r * 0.24, 0, TAU)
    ctx.fill()
    ctx.restore()
  }

  if (scene.visual === "mainspring") {
    ctx.save()
    ctx.translate(width * 0.24, height * 0.56)
    ctx.rotate(-phase * speed * 0.42)
    for (let turn = 0; turn < 24; turn += 1) {
      const radius = 6 + turn * 1.6
      const a = turn * 0.55 + impulse * 2.5
      ctx.strokeStyle = turn % 2 === 0 ? "#f5d26f" : "rgba(234,224,207,0.55)"
      ctx.lineWidth = 1.35
      ctx.beginPath()
      ctx.arc(0, 0, radius, a, a + 0.48)
      ctx.stroke()
    }
    ctx.restore()
  }

  if (scene.visual === "escapement") {
    const beat = Math.sin(phase * speed * 2.6)
    ctx.strokeStyle = "#ef8b69"
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(width * 0.72, height * 0.56)
    ctx.lineTo(width * 0.83, height * 0.56 + beat * 24)
    ctx.stroke()
    ctx.strokeStyle = "#73c5ff"
    ctx.beginPath()
    ctx.moveTo(width * 0.72, height * 0.56)
    ctx.lineTo(width * 0.83, height * 0.56 - beat * 24)
    ctx.stroke()
  }

  if (scene.visual === "click-ratchet") {
    const engaged = Math.sin(phase * speed * 1.3 + impulse * 2.1) > 0
    ctx.strokeStyle = engaged ? "#ef8b69" : "#73c5ff"
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.moveTo(width * 0.18, height * 0.24)
    ctx.lineTo(width * 0.31, height * 0.18 + (engaged ? 18 : 0))
    ctx.stroke()
  }

  const hands = watchHandAngles(phase * speed, ratio)
  const centerX = width * 0.84
  const centerY = height * 0.7
  ctx.strokeStyle = "#eae0cf"
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.arc(centerX, centerY, 44, 0, TAU)
  ctx.stroke()
  for (const [angle, length, color] of [
    [hands.escapeWheel, 18, "#73c5ff"],
    [hands.minuteWheel, 28, "#f5d26f"],
    [hands.hourWheel, 16, "#ef8b69"],
  ] as const) {
    ctx.strokeStyle = color
    ctx.lineWidth = 3.2
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + Math.cos(angle) * length, centerY + Math.sin(angle) * length)
    ctx.stroke()
  }
}

const drawOrbitSystem = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 222)
  const time = Number(values.time ?? values.speed ?? 1)
  const altitude = Number(values.altitude ?? values.height ?? 0.58)
  const inclination = Number(values.inclination ?? values.bias ?? 0.45)
  const earthX = width * 0.28
  const earthY = height * 0.5
  const earthR = Math.min(width, height) * 0.19

  ctx.fillStyle = "#153f68"
  ctx.beginPath()
  ctx.arc(earthX, earthY, earthR, 0, TAU)
  ctx.fill()
  ctx.strokeStyle = "rgba(118,198,255,0.4)"
  ctx.beginPath()
  ctx.arc(earthX, earthY, earthR, 0, TAU)
  ctx.stroke()

  const receiver = {
    x: scene.visual === "trilateration" ? pointer.nx * width : width * 0.7,
    y: scene.visual === "trilateration" ? pointer.ny * height : height * 0.62,
  }

  const satellites = Array.from({ length: 4 }, (_, index) => {
    const a = phase * time * 0.3 + index * (TAU / 4) + inclination
    return {
      x: earthX + Math.cos(a) * (earthR + altitude * 120 + index * 8),
      y: earthY + Math.sin(a * 0.86) * (earthR + altitude * 80),
    }
  })

  satellites.forEach((satellite, index) => {
    ctx.strokeStyle = "rgba(115,197,255,0.28)"
    ctx.beginPath()
    ctx.moveTo(earthX, earthY)
    ctx.lineTo(satellite.x, satellite.y)
    ctx.stroke()
    ctx.fillStyle = index % 2 === 0 ? "#73c5ff" : "#f5d26f"
    ctx.beginPath()
    ctx.arc(satellite.x, satellite.y, 6, 0, TAU)
    ctx.fill()
    if (scene.visual === "trilateration" || scene.visual === "signal-timeline") {
      const range = Math.hypot(satellite.x - receiver.x, satellite.y - receiver.y)
      ctx.strokeStyle = `rgba(239, 139, 105, ${0.16 + index * 0.07})`
      ctx.beginPath()
      ctx.arc(receiver.x, receiver.y, range, 0, TAU)
      ctx.stroke()
    }
  })

  ctx.fillStyle = "#ef8b69"
  ctx.beginPath()
  ctx.arc(receiver.x, receiver.y, 7, 0, TAU)
  ctx.fill()

  if (scene.visual === "signal-timeline") {
    const baseY = height * 0.82
    satellites.forEach((satellite, index) => {
      const barWidth = 26
      const barX = width * 0.54 + index * 34
      const distance = Math.hypot(satellite.x - receiver.x, satellite.y - receiver.y)
      const progress = clamp(distance / 220, 0, 1)
      ctx.fillStyle = "rgba(234,224,207,0.18)"
      ctx.fillRect(barX, baseY - 90, barWidth, 90)
      ctx.fillStyle = index % 2 === 0 ? "#73c5ff" : "#f5d26f"
      ctx.fillRect(barX, baseY - progress * 90, barWidth, progress * 90)
    })
  }

  const geometry = gpsGeometryScore(
    satellites.map((satellite) => ({ x: satellite.x / width, y: satellite.y / height })),
    { x: receiver.x / width, y: receiver.y / height },
  )
  ctx.fillStyle = "rgba(234,224,207,0.9)"
  ctx.font = "12px monospace"
  ctx.fillText(`geometry=${geometry.toFixed(3)}`, width - 136, 34)
}

const drawColorOrOptics = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 298)
  const a = clamp(Number(values.red ?? values.input ?? values.exposure ?? 0.55), 0, 1)
  const b = clamp(Number(values.green ?? values.gamma ?? values.mix ?? 0.45), 0, 1.5)
  const c = clamp(Number(values.blue ?? values.white ?? values.detail ?? 0.68), 0, 1.5)
  const space = getChoiceFromValues(values, "space", "sRGB")

  if (scene.visual === "layer-composite") {
    ctx.fillStyle = `rgba(115,197,255,${0.2 + a * 0.5})`
    ctx.fillRect(width * 0.16, height * 0.2, width * 0.28, height * 0.36)
    ctx.fillStyle = `rgba(239,139,105,${0.2 + b * 0.4})`
    ctx.fillRect(width * 0.32, height * 0.3, width * 0.28, height * 0.34)
    ctx.fillStyle = `rgba(245,210,111,${0.2 + c * 0.38})`
    ctx.beginPath()
    ctx.arc(width * 0.56, height * 0.44, height * 0.14, 0, TAU)
    ctx.fill()
  } else if (scene.visual === "rgb-cube") {
    const cube = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ] as const
    const yaw = Number(values.yaw ?? 0.42) * TAU + pointer.nx * 0.8
    const pitch = Number(values.pitch ?? 0.3) * Math.PI + pointer.ny * 0.5
    const projected = cube.map(([x, y, z]) => {
      const cy = Math.cos(yaw)
      const sy = Math.sin(yaw)
      const cp = Math.cos(pitch)
      const sp = Math.sin(pitch)
      const rx = x * cy - z * sy
      const rz = x * sy + z * cy
      const ry = y * cp - rz * sp
      return {
        x: width * 0.43 + rx * 70,
        y: height * 0.54 + ry * 70,
      }
    })
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ]
    edges.forEach(([left, right], index) => {
      ctx.strokeStyle = index % 3 === 0 ? "#73c5ff" : index % 3 === 1 ? "#f5d26f" : "#ef8b69"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(projected[left].x, projected[left].y)
      ctx.lineTo(projected[right].x, projected[right].y)
      ctx.stroke()
    })
  } else {
    const gradient = ctx.createLinearGradient(width * 0.12, height * 0.24, width * 0.88, height * 0.24)
    gradient.addColorStop(0, `rgba(${Math.round(255 * a)}, 90, 120, 0.95)`)
    gradient.addColorStop(0.5, `rgba(90, ${Math.round(255 * b)}, 180, 0.95)`)
    gradient.addColorStop(1, `rgba(70, 120, ${Math.round(255 * c)}, 0.95)`)
    ctx.fillStyle = gradient
    ctx.fillRect(width * 0.12, height * 0.18, width * 0.76, height * 0.14)

    ctx.strokeStyle = "rgba(234,224,207,0.22)"
    ctx.beginPath()
    ctx.arc(width * 0.36, height * 0.66, height * 0.22, 0, TAU)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(width * 0.18, height * 0.8)
    ctx.lineTo(width * 0.56, height * 0.42)
    ctx.lineTo(width * 0.82, height * 0.76)
    ctx.closePath()
    ctx.strokeStyle = "rgba(115,197,255,0.78)"
    ctx.stroke()
  }

  ctx.fillStyle = "rgba(234,224,207,0.9)"
  ctx.font = "12px monospace"
  ctx.fillText(space, width - 72, 34)
}

const drawGeometryScene = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 165)
  const scale = Number(values.scale ?? values.curvature ?? values.zoom ?? 1)
  const rotate = Number(values.rotation ?? values.angle ?? 0.3) * TAU + pointer.nx * 0.8
  const shear = Number(values.shear ?? values.focus ?? values.depth ?? 0.2)

  if (scene.visual === "turn-kinematics") {
    const wheelBase = 2.4
    const steer = Number(values.steer ?? values.angle ?? 18)
    const radius = bicycleTurnRadius(wheelBase, steer)
    const cx = width * 0.38
    const cy = height * 0.58
    ctx.strokeStyle = "rgba(115,197,255,0.35)"
    ctx.beginPath()
    ctx.arc(cx + radius * 18, cy, Math.abs(radius) * 18, Math.PI * 0.86, Math.PI * 1.16)
    ctx.stroke()
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate((steer * Math.PI) / 180)
    ctx.strokeStyle = "#f5d26f"
    ctx.lineWidth = 7
    ctx.beginPath()
    ctx.moveTo(-52, 0)
    ctx.lineTo(52, 0)
    ctx.stroke()
    ctx.restore()
  } else if (scene.visual === "engine-cycle") {
    const piston = crankSliderPosition(34, 88, phase * 60)
    ctx.strokeStyle = "#eae0cf"
    ctx.strokeRect(width * 0.34, height * 0.18, width * 0.2, height * 0.46)
    ctx.fillStyle = "#73c5ff"
    ctx.fillRect(width * 0.36, height * 0.28 + piston * 0.38, width * 0.16, 36)
    ctx.strokeStyle = "#ef8b69"
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.arc(width * 0.44, height * 0.76, 36, 0, TAU)
    ctx.stroke()
  } else {
    const points = Array.from({ length: 16 }, (_, ix) =>
      Array.from({ length: 16 }, (_, iy) => {
        const x = -1 + (ix / 15) * 2
        const y = -1 + (iy / 15) * 2
        const z =
          Math.sin(x * 2.2 + phase * 0.6) * 0.22 * scale +
          Math.cos(y * 1.9 + rotate) * 0.26 * scale +
          shear * x * y * 0.12
        return { x, y, z }
      }),
    )
    points.forEach((row) => {
      ctx.beginPath()
      row.forEach((point, index) => {
        const px = width * 0.48 + (point.x + point.z * 0.7) * 96
        const py = height * 0.58 + (point.y - point.z * 0.6) * 74
        if (index === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      })
      ctx.strokeStyle = "rgba(115,197,255,0.48)"
      ctx.lineWidth = 1.2
      ctx.stroke()
    })
    for (let column = 0; column < points[0].length; column += 1) {
      ctx.beginPath()
      points.forEach((row, index) => {
        const point = row[column]
        const px = width * 0.48 + (point.x + point.z * 0.7) * 96
        const py = height * 0.58 + (point.y - point.z * 0.6) * 74
        if (index === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      })
      ctx.strokeStyle = "rgba(245,210,111,0.34)"
      ctx.lineWidth = 1
      ctx.stroke()
    }
  }
}

const drawAudioOrShadow = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 238)
  const amplitude = Number(values.amplitude ?? values.volume ?? values.energy ?? 0.6)
  const frequency = Number(values.frequency ?? values.depth ?? values.angle ?? 1.4)

  if (scene.visual === "shadow-volume") {
    ctx.fillStyle = "rgba(255,255,255,0.06)"
    ctx.fillRect(width * 0.16, height * 0.22, width * 0.18, height * 0.34)
    ctx.fillStyle = "rgba(245,210,111,0.85)"
    ctx.beginPath()
    ctx.arc(width * 0.18, height * 0.18, 14, 0, TAU)
    ctx.fill()
    ctx.fillStyle = "rgba(8,12,18,0.55)"
    ctx.beginPath()
    ctx.moveTo(width * 0.34, height * 0.24)
    ctx.lineTo(width * 0.88, height * 0.12)
    ctx.lineTo(width * 0.88, height * 0.82)
    ctx.lineTo(width * 0.34, height * 0.56)
    ctx.closePath()
    ctx.fill()
  } else {
    for (let line = 0; line < 5; line += 1) {
      ctx.beginPath()
      for (let step = 0; step <= 220; step += 1) {
        const x = 24 + (step / 220) * (width - 48)
        const y =
          height * 0.5 +
          Math.sin(step * 0.045 * frequency + phase * 2.2 + line * 0.6) * 24 * amplitude -
          line * 18
        if (step === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = line % 2 === 0 ? "#73c5ff" : "#ef8b69"
      ctx.lineWidth = 2 - line * 0.18
      ctx.stroke()
    }
  }
}

const drawQrOrCollision = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
  scene: ModuleSceneDescriptor,
) => {
  paintBackdrop(ctx, width, height, 144)
  if (scene.visual === "collision-resolve") {
    const massRatio = Number(values.mass ?? 1.1)
    const restitution = Number(values.restitution ?? 0.8)
    const angle = Number(values.angle ?? 18)
    const collision = resolveElasticCollision(
      { x: 1.1, y: 0.3 },
      { x: -0.25, y: 0 },
      { x: 1, y: 0 },
      1,
      massRatio,
      restitution,
    )
    const leftX = width * 0.24 + Math.sin(phase) * 48
    const rightX = width * 0.66 - Math.sin(phase) * 32
    ctx.fillStyle = "#73c5ff"
    ctx.beginPath()
    ctx.arc(leftX, height * 0.52, 36, 0, TAU)
    ctx.fill()
    ctx.fillStyle = "#ef8b69"
    ctx.beginPath()
    ctx.arc(rightX, height * 0.52 + angle * 0.18, 28 + massRatio * 6, 0, TAU)
    ctx.fill()
    ctx.strokeStyle = "rgba(234,224,207,0.78)"
    ctx.beginPath()
    ctx.moveTo(leftX, height * 0.52)
    ctx.lineTo(leftX + collision.nextA.x * 56, height * 0.52 + collision.nextA.y * 56)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(rightX, height * 0.52 + angle * 0.18)
    ctx.lineTo(
      rightX + collision.nextB.x * 56,
      height * 0.52 + angle * 0.18 + collision.nextB.y * 56,
    )
    ctx.stroke()
  } else {
    const size = 21
    const cell = Math.min(width, height) * 0.58 / size
    const offsetX = width * 0.22
    const offsetY = height * 0.18
    const scan = Math.round(Number(values.scan ?? 10))
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const bit = qrBitAt(size, x, y)
        ctx.fillStyle = bit ? "#f3ebdd" : "rgba(9,13,18,0.86)"
        ctx.fillRect(offsetX + x * cell, offsetY + y * cell, cell - 0.8, cell - 0.8)
      }
    }
    ctx.strokeStyle = "#ef8b69"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(offsetX, offsetY + scan * cell)
    ctx.lineTo(offsetX + size * cell, offsetY + scan * cell)
    ctx.stroke()
    ctx.fillStyle = "rgba(115,197,255,0.35)"
    ctx.fillRect(offsetX + pointer.nx * size * cell, offsetY, cell * 0.9, size * cell)
  }
}

const drawGenericCanvas = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  values: Record<string, boolean | number | string>,
) => {
  paintBackdrop(ctx, width, height, 192)
  const energy = Number(values.energy ?? values.detail ?? values.scale ?? 0.55)
  for (let index = 0; index < 20; index += 1) {
    const radius = 18 + index * 9
    const angle = phase * (0.2 + index * 0.01)
    ctx.strokeStyle =
      index % 2 === 0
        ? `rgba(115,197,255,${0.12 + energy * 0.16})`
        : `rgba(245,210,111,${0.12 + energy * 0.14})`
    ctx.beginPath()
    ctx.arc(width * 0.48, height * 0.54, radius, angle, angle + Math.PI * (0.55 + energy * 0.3))
    ctx.stroke()
  }
}

const linePath = d3
  .line<{ x: number; y: number }>()
  .x((point) => point.x)
  .y((point) => point.y)

const renderAxis = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
) => {
  selection
    .append("line")
    .attr("x1", 48)
    .attr("y1", height - 36)
    .attr("x2", width - 24)
    .attr("y2", height - 36)
    .attr("stroke", "rgba(234,224,207,0.3)")
  selection
    .append("line")
    .attr("x1", 48)
    .attr("y1", 24)
    .attr("x2", 48)
    .attr("y2", height - 36)
    .attr("stroke", "rgba(234,224,207,0.3)")
}

const renderRegressionFit = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
) => {
  const slope = Number(values.slope ?? 0.6)
  const intercept = Number(values.intercept ?? 0.1)
  const spread = Number(values.spread ?? 0.35)
  const points = Array.from({ length: 14 }, (_, index) => ({
    x: -1 + (2 * index) / 13,
    y: 0.7 * (-1 + (2 * index) / 13) + 0.2 + (noise(index + spread) - 0.5) * spread * 1.8,
  }))
  const fit = fitLinearRegression(points)
  const mse = meanSquaredError(points, slope, intercept)
  const xScale = d3.scaleLinear().domain([-1.2, 1.2]).range([56, width - 24])
  const yScale = d3.scaleLinear().domain([-1.5, 1.5]).range([height - 44, 28])

  selection
    .append("path")
    .datum(points)
    .attr(
      "d",
      d3
        .line<{ x: number; y: number }>()
        .x((point) => xScale(point.x))
        .y((point) => yScale(point.y)),
    )
    .attr("fill", "none")
    .attr("stroke", "rgba(115,197,255,0.3)")
    .attr("stroke-dasharray", "4 6")
  selection
    .append("line")
    .attr("x1", xScale(-1))
    .attr("y1", yScale(-slope + intercept))
    .attr("x2", xScale(1))
    .attr("y2", yScale(slope + intercept))
    .attr("stroke", "#e6b85c")
    .attr("stroke-width", 2.6)
  selection
    .append("line")
    .attr("x1", xScale(-1))
    .attr("y1", yScale(-fit.slope + fit.intercept))
    .attr("x2", xScale(1))
    .attr("y2", yScale(fit.slope + fit.intercept))
    .attr("stroke", "#73c5ff")
    .attr("stroke-width", 1.4)
  selection
    .selectAll("circle.sample")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx", (point) => xScale(point.x))
    .attr("cy", (point) => yScale(point.y))
    .attr("r", 4)
    .attr("fill", "#f3ebdd")
  selection
    .append("text")
    .attr("x", 56)
    .attr("y", 18)
    .attr("fill", "#eae0cf")
    .attr("font-size", 12)
    .text(`mse=${mse.toFixed(3)} best=${fit.slope.toFixed(2)}/${fit.intercept.toFixed(2)}`)

  return { points, fit, xScale, yScale }
}

const renderRegressionResidual = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
) => {
  const { points, xScale } = renderRegressionFit(selection, width, height, values)
  const slope = Number(values.slope ?? 0.6)
  const intercept = Number(values.intercept ?? 0.1)
  const yScale = d3.scaleLinear().domain([-1.5, 1.5]).range([height - 44, 28])
  selection
    .selectAll("line.residual")
    .data(points)
    .enter()
    .append("line")
    .attr("x1", (point) => xScale(point.x))
    .attr("x2", (point) => xScale(point.x))
    .attr("y1", (point) => yScale(point.y))
    .attr("y2", (point) => yScale(point.x * slope + intercept))
    .attr("stroke", "rgba(239,139,105,0.72)")
    .attr("stroke-width", 1.2)
}

const renderHysteresis = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
  scene: ModuleSceneDescriptor,
) => {
  const slack = Number(values.slack ?? 0.18)
  const damping = Number(values.damping ?? 0.78)
  const drive = Number(values.drive ?? 1.1)
  const xScale = d3.scaleLinear().domain([-1.2, 1.2]).range([56, width - 28])
  const yScale = d3.scaleLinear().domain([-1.2, 1.2]).range([height - 40, 26])
  const data = d3.range(-1, 1.02, 0.04).map((x) => ({
    x,
    y: Math.tanh((x - slack) * 3.4) * damping * 0.8 + Math.sin(x * drive * 3) * 0.06,
  }))
  const reverse = d3.range(1, -1.02, -0.04).map((x) => ({
    x,
    y: Math.tanh((x + slack) * 3.4) * damping * 0.8 + Math.sin(x * drive * 3 + 1) * 0.06,
  }))
  selection
    .append("path")
    .datum(data.map((point) => ({ x: xScale(point.x), y: yScale(point.y) })))
    .attr("d", linePath)
    .attr("fill", "none")
    .attr("stroke", "#73c5ff")
    .attr("stroke-width", 2.2)
  selection
    .append("path")
    .datum(reverse.map((point) => ({ x: xScale(point.x), y: yScale(point.y) })))
    .attr("d", linePath)
    .attr("fill", "none")
    .attr("stroke", "#ef8b69")
    .attr("stroke-width", 2.2)

  if (scene.visual === "trajectory-editor") {
    selection
      .append("path")
      .datum(
        pointer.path.map((point) => ({
          x: 56 + point.x * (width - 84),
          y: 26 + point.y * (height - 68),
        })),
      )
      .attr("d", linePath)
      .attr("fill", "none")
      .attr("stroke", "#f5d26f")
      .attr("stroke-width", 2.4)
  }
}

const renderLinearAlgebra = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
) => {
  const scale = Number(values.scale ?? 1.1)
  const shear = Number(values.shear ?? 0.25)
  const rotation = Number(values.rotation ?? 24)
  const vector = applyBasisTransform(
    { x: 1.15, y: 0.9 },
    { scaleX: scale, scaleY: Math.max(0.4, 2 - scale), shear, rotationDegrees: rotation },
  )
  const origin = { x: width * 0.26, y: height * 0.7 }
  selection
    .append("line")
    .attr("x1", origin.x)
    .attr("y1", origin.y)
    .attr("x2", origin.x + vector.x * 90)
    .attr("y2", origin.y - vector.y * 90)
    .attr("stroke", "#73c5ff")
    .attr("stroke-width", 3)
  selection
    .append("line")
    .attr("x1", origin.x)
    .attr("y1", origin.y)
    .attr("x2", origin.x + scale * 74)
    .attr("y2", origin.y + shear * -52)
    .attr("stroke", "#f5d26f")
    .attr("stroke-width", 3)
  selection
    .append("line")
    .attr("x1", origin.x)
    .attr("y1", origin.y)
    .attr("x2", origin.x + Math.sin((rotation * Math.PI) / 180) * 62)
    .attr("y2", origin.y - Math.cos((rotation * Math.PI) / 180) * 62)
    .attr("stroke", "#ef8b69")
    .attr("stroke-width", 3)
}

const buildSamples = (separation: number, noiseAmount: number, imbalance: number): ClassifiedSample[] =>
  Array.from({ length: 36 }, (_, index) => {
    const actual = index / 35 > imbalance
    const center = actual ? 0.35 + separation * 0.4 : 0.65 - separation * 0.4
    return {
      actual,
      score: clamp(center + (noise(index + noiseAmount) - 0.5) * noiseAmount * 0.8, 0.01, 0.99),
    }
  })

const renderMlCurves = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  scene: ModuleSceneDescriptor,
  values: Record<string, boolean | number | string>,
) => {
  const threshold = Number(values.threshold ?? 0.52)
  const imbalance = Number(values.imbalance ?? 0.35)
  const noiseAmount = Number(values.noise ?? 0.12)
  const xScale = d3.scaleLinear().domain([0, 1]).range([56, width - 24])
  const yScale = d3.scaleLinear().domain([0, 1]).range([height - 42, 26])

  if (scene.visual === "tree-split") {
    const points = Array.from({ length: 18 }, (_, index) => ({
      feature: index / 17,
      label: Math.sin(index * 0.42) + noiseAmount * 2 > 0.3,
    }))
    const split = bestSplit1D(points)
    selection
      .selectAll("circle.tree-sample")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (point) => xScale(point.feature))
      .attr("cy", (point) => yScale(point.label ? 0.78 : 0.22))
      .attr("r", 4)
      .attr("fill", (point) => (point.label ? "#73c5ff" : "#ef8b69"))
    selection
      .append("line")
      .attr("x1", xScale(split.threshold))
      .attr("x2", xScale(split.threshold))
      .attr("y1", 26)
      .attr("y2", height - 42)
      .attr("stroke", "#f5d26f")
      .attr("stroke-width", 2.4)
    return
  }

  if (scene.visual === "ensemble-vote") {
    const treeCount = clamp(Math.round(Number(values.trees ?? 5)), 3, 7)
    const votes = [true, true, false, true, false, true, false].slice(0, treeCount)
    const y = height * 0.46
    votes.forEach((vote, index) => {
      selection
        .append("circle")
        .attr("cx", 86 + index * 44)
        .attr("cy", y)
        .attr("r", 15)
        .attr("fill", vote ? "#73c5ff" : "#ef8b69")
    })
    selection
      .append("text")
      .attr("x", 56)
      .attr("y", 28)
      .attr("fill", "#eae0cf")
      .text(`ensemble=${ensembleVote(votes) ? "positive" : "negative"}`)
    return
  }

  if (scene.visual === "double-descent") {
    const capacity = Number(values.capacity ?? 1.2)
    const interpolation = Number(values.data ?? values.width ?? 1)
    const curve = d3.range(0.15, 3.05, 0.08).map((point) => ({
      x: point,
      y: doubleDescentCurve(point * capacity, interpolation),
    }))
    const curveX = d3.scaleLinear().domain([0, 3]).range([56, width - 24])
    const curveY = d3.scaleLinear().domain([0, 3]).range([height - 42, 26])
    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<{ x: number; y: number }>()
          .x((point) => curveX(point.x))
          .y((point) => curveY(point.y)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.4)
    return
  }

  if (scene.visual === "bias-variance") {
    const complexity = Number(values.complexity ?? 0.9)
    const curve = d3.range(0.15, 2.05, 0.06).map((point) => {
      const curvePoint = biasVarianceCurve(point * complexity)
      return { x: point, bias: curvePoint.bias, variance: curvePoint.variance }
    })
    const curveX = d3.scaleLinear().domain([0, 2]).range([56, width - 24])
    const curveY = d3.scaleLinear().domain([0, 2]).range([height - 42, 26])
    ;[
      { key: "bias" as const, color: "#73c5ff" },
      { key: "variance" as const, color: "#ef8b69" },
    ].forEach(({ key, color }) => {
      selection
        .append("path")
        .datum(curve)
        .attr(
          "d",
          d3
            .line<{ x: number; bias: number; variance: number }>()
            .x((point) => curveX(point.x))
            .y((point) => curveY(point[key])),
        )
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", 2.3)
    })
    return
  }

  if (scene.visual === "dataset-partition") {
    const splits = [
      { label: "train", width: 0.62, color: "#73c5ff" },
      { label: "validation", width: 0.18, color: "#f5d26f" },
      { label: "test", width: 0.2, color: "#ef8b69" },
    ]
    let cursor = 56
    splits.forEach((split) => {
      const barWidth = (width - 80) * split.width
      selection
        .append("rect")
        .attr("x", cursor)
        .attr("y", height * 0.42)
        .attr("width", barWidth)
        .attr("height", 36)
        .attr("fill", split.color)
      selection
        .append("text")
        .attr("x", cursor + 8)
        .attr("y", height * 0.42 + 22)
        .attr("fill", "#10161f")
        .text(split.label)
      cursor += barWidth
    })
    return
  }

  if (scene.visual === "ml-threshold") {
    const samples = buildSamples(0.7, noiseAmount, imbalance)
    const thresholds = d3.range(0.05, 0.96, 0.05)
    const curve =
      scene.articleId === "precision-recall"
        ? buildPrecisionRecallCurve(samples, thresholds).map((point) => ({
            x: point.recall,
            y: point.precision,
          }))
        : buildRocCurve(samples, thresholds).map((point) => ({
            x: point.fpr,
            y: point.tpr,
          }))
    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<{ x: number; y: number }>()
          .x((point) => xScale(point.x))
          .y((point) => yScale(point.y)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.4)
    selection
      .append("line")
      .attr("x1", xScale(threshold))
      .attr("x2", xScale(threshold))
      .attr("y1", 26)
      .attr("y2", height - 42)
      .attr("stroke", "#f5d26f")
      .attr("stroke-dasharray", "4 5")
    return
  }

  const weight = Number(values.weight ?? 2.4)
  const bias = Number(values.bias ?? -0.4)
  const logistic = d3.range(-3, 3.05, 0.1).map((x) => ({
    x,
    y: sigmoid(weight * x + bias),
  }))
  const logisticX = d3.scaleLinear().domain([-3, 3]).range([56, width - 24])
  selection
    .append("path")
    .datum(logistic)
    .attr(
      "d",
      d3
        .line<{ x: number; y: number }>()
        .x((point) => logisticX(point.x))
        .y((point) => yScale(point.y)),
    )
    .attr("fill", "none")
    .attr("stroke", "#73c5ff")
    .attr("stroke-width", 2.4)
  selection
    .append("line")
    .attr("x1", 56)
    .attr("x2", width - 24)
    .attr("y1", yScale(threshold))
    .attr("y2", yScale(threshold))
    .attr("stroke", "#f5d26f")
    .attr("stroke-dasharray", "4 5")
}

const renderQueueBalance = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
) => {
  const traffic = Number(values.traffic ?? 1.3)
  const power = Number(values.power ?? 1.2)
  let cursor = 0
  let servers: ServerState[] = Array.from({ length: 4 }, (_, index) => ({
    id: `srv-${index + 1}`,
    queue: 0,
    load: 0.18 + index * 0.04,
  }))
  Array.from({ length: 18 }, (_, index) => ({
    id: `req-${index}`,
    weight: 0.18 + noise(index + traffic) * traffic,
  })).forEach((request) => {
    const target =
      power > 1.15 ? pickLeastConnections(servers) : servers[nextRoundRobinServer(servers, cursor)]
    cursor += 1
    if (!target) return
    servers = servers.map((server) =>
      server.id === target.id ? applyRequest(server, request) : decayServerLoad(server, 0.86),
    )
  })
  servers.forEach((server, index) => {
    const x = 72 + index * 64
    selection
      .append("rect")
      .attr("x", x)
      .attr("y", height * 0.34)
      .attr("width", 34)
      .attr("height", server.load * 120)
      .attr("fill", "#73c5ff")
    selection
      .append("text")
      .attr("x", x)
      .attr("y", height * 0.34 - 10)
      .attr("fill", "#eae0cf")
      .text(server.id)
  })
}

const renderMemory = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
  values: Record<string, boolean | number | string>,
) => {
  const requestSize = Math.round(Number(values.request ?? 4))
  const blocks = Array.from({ length: 9 }, (_, index) => ({
    id: index,
    size: 2 + (index % 4),
    used: index % 3 === 0,
  })) satisfies MemoryBlock[]
  const next = firstFitAllocation(blocks, requestSize) ?? blocks
  const frag = fragmentationRatio(next)
  let cursor = 56
  next.forEach((block, index) => {
    const blockWidth = block.size * 22
    selection
      .append("rect")
      .attr("x", cursor)
      .attr("y", height * 0.46)
      .attr("width", blockWidth)
      .attr("height", 36)
      .attr("fill", block.used ? "#ef8b69" : "#73c5ff")
      .attr("opacity", 0.82)
    selection
      .append("text")
      .attr("x", cursor + 6)
      .attr("y", height * 0.46 + 22)
      .attr("fill", "#10161f")
      .attr("font-size", 11)
      .text(`${index}`)
    cursor += blockWidth + 6
  })
  selection
    .append("text")
    .attr("x", 56)
    .attr("y", 28)
    .attr("fill", "#eae0cf")
    .text(`fragmentation=${frag.toFixed(2)}`)
}

const drawCanvasScene = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  phase: number,
  scene: ModuleSceneDescriptor,
  values: Record<string, boolean | number | string>,
  pointer: PointerState,
) => {
  switch (scene.visual) {
    case "flow-body":
    case "velocity-field":
    case "pressure-map":
    case "boundary-layer":
    case "particle-box":
      drawFlowBody(ctx, width, height, phase, values, scene)
      break
    case "mechanical-train":
    case "mainspring":
    case "escapement":
    case "click-ratchet":
      drawMechanicalTrain(ctx, width, height, phase, values, scene)
      break
    case "orbit-constellation":
    case "trilateration":
    case "signal-timeline":
      drawOrbitSystem(ctx, width, height, phase, values, pointer, scene)
      break
    case "chromaticity":
    case "transfer-curve":
    case "rgb-cube":
    case "layer-composite":
      drawColorOrOptics(ctx, width, height, phase, values, pointer, scene)
      break
    case "curve-surface":
    case "projection-lab":
    case "turn-kinematics":
    case "optics-lab":
    case "engine-cycle":
      drawGeometryScene(ctx, width, height, phase, values, pointer, scene)
      break
    case "sound-wave":
    case "shadow-volume":
      drawAudioOrShadow(ctx, width, height, phase, values, scene)
      break
    case "qr-grid":
    case "collision-resolve":
      drawQrOrCollision(ctx, width, height, phase, values, pointer, scene)
      break
    default:
      drawGenericCanvas(ctx, width, height, phase, values)
      break
  }

  drawSceneBadge(ctx, scene, width, values)
}

const renderSvgScene = (
  root: HTMLElement,
  scene: ModuleSceneDescriptor,
  pointer: PointerState,
) => {
  const meta = ensureSvg(root)
  if (!meta) return
  const { svg, width, height } = meta
  const values = readSceneValues(root, scene)
  const selection = d3.select(svg)
  selection.selectAll("*").remove()
  selection.append("rect").attr("width", width).attr("height", height).attr("fill", "#070b11")
  renderAxis(selection, width, height)

  switch (scene.visual) {
    case "regression-fit":
      renderRegressionFit(selection, width, height, values)
      break
    case "regression-residual":
      renderRegressionResidual(selection, width, height, values)
      break
    case "regression-formula":
      renderRegressionFit(selection, width, height, values)
      selection
        .append("text")
        .attr("x", 56)
        .attr("y", height - 12)
        .attr("fill", "#eae0cf")
        .text(
          `y = ${Number(values.slope ?? 0.6).toFixed(2)}x + ${Number(values.intercept ?? 0.1).toFixed(2)}`,
        )
      break
    case "trajectory-editor":
    case "hysteresis-plot":
      renderHysteresis(selection, width, height, values, pointer, scene)
      break
    case "basis-transform":
      renderLinearAlgebra(selection, width, height, values)
      break
    case "queue-balance":
      renderQueueBalance(selection, width, height, values)
      break
    case "memory-fragmentation":
      renderMemory(selection, width, height, values)
      break
    case "tree-split":
    case "ensemble-vote":
    case "ml-threshold":
    case "double-descent":
    case "bias-variance":
    case "dataset-partition":
      renderMlCurves(selection, width, height, scene, values)
      break
    default:
      renderMlCurves(selection, width, height, scene, values)
      break
  }

  selection
    .append("text")
    .attr("x", 56)
    .attr("y", 18)
    .attr("fill", "#eae0cf")
    .attr("font-size", 12)
    .text(scene.title)
}

const mountCanvasModule = (root: HTMLElement, scene: ModuleSceneDescriptor): SimController | null => {
  const canvas = ensureCanvas(root)
  if (!canvas) return null
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  const pointer = buildPointerState()
  const controlIds = collectControlIds(scene)
  const listeners: Array<() => void> = []
  let phase = 0
  let raf = 0

  const render = () => {
    const metrics = resizeCanvas(canvas)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(metrics.dpr, metrics.dpr)
    const values = readSceneValues(root, scene)
    drawCanvasScene(ctx, metrics.width, metrics.height, phase, scene, values, pointer)
  }

  const tick = () => {
    if (root.dataset.paused !== "true") {
      phase += 0.018
    }
    render()
    raf = window.requestAnimationFrame(tick)
  }

  const animated =
    hasGesture(scene, "play/pause") ||
    [
      "flow-body",
      "velocity-field",
      "pressure-map",
      "boundary-layer",
      "particle-box",
      "mechanical-train",
      "mainspring",
      "escapement",
      "orbit-constellation",
      "signal-timeline",
      "sound-wave",
    ].includes(scene.visual)

  for (const controlId of controlIds) {
    const elements = root.querySelectorAll<HTMLElement>(`[data-control="${controlId}"]`)
    for (const element of elements) {
      const handler = () => render()
      element.addEventListener("input", handler)
      element.addEventListener("change", handler)
      listeners.push(() => {
        element.removeEventListener("input", handler)
        element.removeEventListener("change", handler)
      })
    }
  }

  const resetButton = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  const onReset = () => {
    pointer.path = []
    pointer.clickCount = 0
    pointer.nx = 0.5
    pointer.ny = 0.5
    render()
  }
  resetButton?.addEventListener("click", onReset)
  if (resetButton) {
    listeners.push(() => resetButton.removeEventListener("click", onReset))
  }

  const onResize = () => render()
  window.addEventListener("resize", onResize)
  listeners.push(() => window.removeEventListener("resize", onResize))

  if (hasGesture(scene, "drag") || hasGesture(scene, "hover") || hasGesture(scene, "click/tap")) {
    root.dataset.pointerHover = hasGesture(scene, "hover") ? "true" : "false"
    listeners.push(attachStagePointer(root, canvas, pointer, render))
  }

  let detachActivity: (() => void) | null = null
  if (animated) {
    detachActivity = registerActivity(
      root,
      () => {
        cancelAnimationFrame(raf)
        tick()
      },
      () => {
        cancelAnimationFrame(raf)
        raf = 0
      },
    )
  } else {
    render()
  }

  return {
    destroy: () => {
      cancelAnimationFrame(raf)
      detachActivity?.()
      listeners.forEach((dispose) => dispose())
    },
  }
}

const mountSvgModule = (root: HTMLElement, scene: ModuleSceneDescriptor): SimController | null => {
  const pointer = buildPointerState()
  const controlIds = collectControlIds(scene)
  const listeners: Array<() => void> = []

  const render = () => renderSvgScene(root, scene, pointer)
  for (const controlId of controlIds) {
    const elements = root.querySelectorAll<HTMLElement>(`[data-control="${controlId}"]`)
    for (const element of elements) {
      const handler = () => render()
      element.addEventListener("input", handler)
      element.addEventListener("change", handler)
      listeners.push(() => {
        element.removeEventListener("input", handler)
        element.removeEventListener("change", handler)
      })
    }
  }

  const stage = root.querySelector<HTMLElement>(".interactive-sim-stage")
  if (
    stage &&
    (hasGesture(scene, "drag") || hasGesture(scene, "hover") || hasGesture(scene, "click/tap"))
  ) {
    root.dataset.pointerHover = hasGesture(scene, "hover") ? "true" : "false"
    listeners.push(attachStagePointer(root, stage, pointer, render))
  }

  const resetButton = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  const onReset = () => {
    pointer.path = []
    pointer.clickCount = 0
    render()
  }
  resetButton?.addEventListener("click", onReset)
  if (resetButton) {
    listeners.push(() => resetButton.removeEventListener("click", onReset))
  }

  const onResize = () => render()
  window.addEventListener("resize", onResize)
  listeners.push(() => window.removeEventListener("resize", onResize))
  render()

  return {
    destroy: () => {
      listeners.forEach((dispose) => dispose())
    },
  }
}

export const mountGeneratedModuleScene = (root: HTMLElement, scene: ModuleSceneDescriptor) =>
  scene.renderer === "canvas" ? mountCanvasModule(root, scene) : mountSvgModule(root, scene)
