import {
  mountBiasVarianceScene,
  mountDecisionTreesScene,
  mountDoubleDescent2Scene,
  mountDoubleDescentScene,
  mountHysteresisSlackScene,
  mountImmersiveLinearAlgebraScene,
  mountLinearRegressionScene,
  mountLoadBalancingScene,
  mountLogisticRegressionScene,
  mountMemoryAllocationScene,
  mountPrecisionRecallScene,
  mountRandomForestScene,
  mountReadingQrCodesScene,
  mountRigidBodyCollisionsScene,
  mountRocAucScene,
  mountTrainValidationScene,
} from "./interactive/additionalScenes"
import { GENERATED_SCENE_PRESETS } from "./interactive/generatedPresets"
import {
  setupStoryArticles,
  type SceneDefinition,
  type SimController,
} from "./interactive/storyRuntime"
import { buildGeneratedSceneRegistry, setupModuleArticles } from "./interactive/moduleRuntime"

const DEG = Math.PI / 180

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  canvas.width = Math.max(1, Math.round(rect.width * dpr))
  canvas.height = Math.max(1, Math.round(rect.height * dpr))
  return { dpr, width: canvas.width, height: canvas.height }
}

const setFallback = (root: HTMLElement, message: string) => {
  root.setAttribute("data-fallback", message)
}

const formatRangeValue = (input: HTMLInputElement) => {
  const step = Number(input.step)
  if (!Number.isFinite(step) || step <= 0) return input.value
  if (step >= 1) return String(Math.round(Number(input.value)))
  const decimals = Math.min(6, Math.max(0, Math.ceil(-Math.log10(step))))
  return Number(input.value).toFixed(decimals)
}

const setupRangeOutputs = (root: HTMLElement) => {
  const ranges = root.querySelectorAll<HTMLInputElement>(
    '.interactive-sim-control input[type="range"]',
  )
  const updates: Array<() => void> = []
  for (const range of ranges) {
    const parent = range.closest(".interactive-sim-control")
    if (!parent) continue
    let output = parent.querySelector<HTMLOutputElement>("output.sim-range-output")
    if (!output) {
      output = document.createElement("output")
      output.className = "sim-range-output"
      output.setAttribute("for", range.id)
      parent.appendChild(output)
    }
    const update = () => {
      output!.value = formatRangeValue(range)
      output!.textContent = output!.value
    }
    updates.push(update)
    update()
    range.addEventListener("input", update)
    window.addCleanup(() => range.removeEventListener("input", update))
  }

  const onResetClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null
    if (!target) return
    const button = target.closest('button[data-control="reset"]')
    if (!button) return
    window.requestAnimationFrame(() => {
      for (const update of updates) {
        update()
      }
    })
  }

  root.addEventListener("click", onResetClick)
  window.addCleanup(() => root.removeEventListener("click", onResetClick))
}

const registerSceneActivity = (
  root: HTMLElement,
  start: () => void,
  stop: () => void,
): (() => void) => {
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
      { threshold: 0.05 },
    )
    observer.observe(root)
  }

  sync()

  return () => {
    document.removeEventListener("visibilitychange", onVisibility)
    observer?.disconnect()
  }
}

const mountMoon = (root: HTMLElement): SimController | null => {
  const glCanvas = root.querySelector<HTMLCanvasElement>(".sim-webgl")
  const overlayCanvas = root.querySelector<HTMLCanvasElement>(".sim-overlay")
  const slider = root.querySelector<HTMLInputElement>('input[data-control="phase"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!glCanvas || !overlayCanvas || !slider || !reset) return null

  const gl = glCanvas.getContext("webgl", { antialias: true, alpha: false })
  if (!gl) {
    setFallback(root, "WebGL is unavailable in this browser. Use a WebGL-capable browser.")
    return null
  }

  const vsSource = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = 0.5 * (aPos + 1.0);
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `

  const fsSource = `
    precision mediump float;
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform float uPhase;
    uniform float uTime;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
      vec2 p = (vUv * 2.0 - 1.0) * aspect;
      float r = length(p);
      if (r > 0.95) {
        gl_FragColor = vec4(0.01, 0.02, 0.03, 1.0);
        return;
      }

      float z = sqrt(max(0.0, 0.95 * 0.95 - dot(p, p)));
      vec3 n = normalize(vec3(p, z));
      float phaseAngle = uPhase * 6.2831853;
      vec3 lightDir = normalize(vec3(cos(phaseAngle), 0.18, sin(phaseAngle)));
      float diffuse = max(dot(n, lightDir), 0.0);

      vec2 uv = n.xy * 3.2 + vec2(uTime * 0.006, 0.0);
      float craters = fbm(uv * 8.0);
      float maria = fbm(uv * 2.0);
      float textureMix = clamp(0.65 + craters * 0.35 - maria * 0.2, 0.3, 1.2);

      vec3 darkSide = vec3(0.08, 0.1, 0.13);
      vec3 litSide = vec3(0.79, 0.8, 0.78) * textureMix;
      vec3 color = mix(darkSide, litSide, diffuse);

      float rim = smoothstep(0.9, 0.95, r);
      color += rim * 0.08;

      gl_FragColor = vec4(color, 1.0);
    }
  `

  const compileShader = (type: number, source: string) => {
    const shader = gl.createShader(type)
    if (!shader) return null
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader)
      return null
    }
    return shader
  }

  const vs = compileShader(gl.VERTEX_SHADER, vsSource)
  const fs = compileShader(gl.FRAGMENT_SHADER, fsSource)
  if (!vs || !fs) return null

  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

  const aPos = gl.getAttribLocation(program, "aPos")
  const uResolution = gl.getUniformLocation(program, "uResolution")
  const uPhase = gl.getUniformLocation(program, "uPhase")
  const uTime = gl.getUniformLocation(program, "uTime")

  let phase = Number(slider.value)
  let raf = 0
  let running = false

  const drawOverlay = () => {
    const { dpr } = resizeCanvas(overlayCanvas)
    const ctx = overlayCanvas.getContext("2d")
    if (!ctx) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, overlayCanvas.clientWidth, overlayCanvas.clientHeight)
    ctx.fillStyle = "rgba(234, 224, 207, 0.78)"
    ctx.font = '500 14px "IBM Plex Mono", monospace'
    const date = new Date().toLocaleDateString("en-GB")
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    ctx.fillText(date, overlayCanvas.clientWidth - 120, 24)
    ctx.fillText(time, overlayCanvas.clientWidth - 76, 44)
  }

  const render = (t: number) => {
    if (!running) return
    const { width, height } = resizeCanvas(glCanvas)
    gl.viewport(0, 0, width, height)
    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)
    gl.uniform2f(uResolution, width, height)
    gl.uniform1f(uPhase, phase)
    gl.uniform1f(uTime, t)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    drawOverlay()
    if (running) {
      raf = requestAnimationFrame(render)
    }
  }

  const onInput = () => {
    phase = clamp(Number(slider.value), 0, 1)
  }
  const onReset = () => {
    phase = 0.15
    slider.value = String(phase)
  }
  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(render)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  slider.addEventListener("input", onInput)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      slider.removeEventListener("input", onInput)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    },
  }
}

type Particle = { x: number; y: number; age: number }

const mountAirfoil = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const alphaInput = root.querySelector<HTMLInputElement>('input[data-control="aoa"]')
  const speedInput = root.querySelector<HTMLInputElement>('input[data-control="speed"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !alphaInput || !speedInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  const particles: Particle[] = []
  const count = 900
  for (let i = 0; i < count; i++) {
    particles.push({ x: Math.random(), y: Math.random(), age: Math.random() * 200 })
  }

  let alpha = Number(alphaInput.value) * DEG
  let speed = Number(speedInput.value)
  let raf = 0
  let running = false
  let last = performance.now()

  const flow = (x: number, y: number) => {
    const c = Math.cos(-alpha)
    const s = Math.sin(-alpha)
    const xr = x * c - y * s
    const yr = x * s + y * c
    const r2 = xr * xr + yr * yr + 1e-4
    const radius = 0.18
    const inv = (radius * radius) / (r2 * r2)
    const gamma = alpha * 1.7
    const ux = speed * (1 - inv * (xr * xr - yr * yr)) - (gamma * yr) / (2 * Math.PI * r2)
    const uy = speed * (-2 * inv * xr * yr) + (gamma * xr) / (2 * Math.PI * r2)
    return {
      x: ux * c + uy * s,
      y: -ux * s + uy * c,
    }
  }

  const drawWing = (w: number, h: number) => {
    const cx = w * 0.5
    const cy = h * 0.53
    const chord = w * 0.52
    const thick = h * 0.13
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(alpha)
    ctx.beginPath()
    ctx.moveTo(-chord * 0.52, 0)
    ctx.bezierCurveTo(
      -chord * 0.42,
      -thick * 0.95,
      chord * 0.18,
      -thick * 0.68,
      chord * 0.5,
      -thick * 0.08,
    )
    ctx.bezierCurveTo(
      chord * 0.52,
      -thick * 0.04,
      chord * 0.52,
      thick * 0.04,
      chord * 0.5,
      thick * 0.08,
    )
    ctx.bezierCurveTo(chord * 0.18, thick * 0.68, -chord * 0.42, thick * 0.95, -chord * 0.52, 0)
    ctx.closePath()
    ctx.fillStyle = "#e2bc22"
    ctx.strokeStyle = "rgba(15, 20, 30, 0.85)"
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  const draw = (now: number) => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const dt = Math.min((now - last) * 0.001, 0.033)
    last = now

    ctx.fillStyle = "#f1efe9"
    ctx.fillRect(0, 0, w, h)

    const cx = w * 0.5
    const cy = h * 0.53

    ctx.strokeStyle = "rgba(19, 108, 176, 0.22)"
    ctx.lineWidth = 1
    for (let sy = 0.12; sy <= 0.88; sy += 0.05) {
      let x = -0.95
      let y = sy * 2 - 1
      ctx.beginPath()
      for (let i = 0; i < 140; i++) {
        const f = flow(x * 1.35, y)
        x += f.x * dt * 0.22
        y += f.y * dt * 0.22
        const px = cx + x * w * 0.34
        const py = cy + y * h * 0.42
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    ctx.fillStyle = "rgba(16, 20, 30, 0.45)"
    for (const p of particles) {
      const xN = p.x * 2 - 1
      const yN = p.y * 2 - 1
      const f = flow(xN * 1.35, yN)
      p.x += f.x * dt * 0.23
      p.y += f.y * dt * 0.23
      p.age += 1
      if (p.x > 1.1 || p.x < -0.1 || p.y > 1.1 || p.y < -0.1 || p.age > 420) {
        p.x = -0.02
        p.y = Math.random()
        p.age = 0
      }
      ctx.fillRect(p.x * w, p.y * h, 1.8, 1.8)
    }

    drawWing(w, h)
    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const onAlpha = () => {
    alpha = clamp(Number(alphaInput.value), -25, 25) * DEG
  }
  const onSpeed = () => {
    speed = clamp(Number(speedInput.value), 0.4, 2.8)
  }
  const onReset = () => {
    alpha = 3 * DEG
    speed = 1.4
    alphaInput.value = "3"
    speedInput.value = "1.4"
    for (const p of particles) {
      p.x = Math.random()
      p.y = Math.random()
      p.age = Math.random() * 200
    }
  }

  const start = () => {
    running = true
    if (raf === 0) {
      last = performance.now()
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  alphaInput.addEventListener("input", onAlpha)
  speedInput.addEventListener("input", onSpeed)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      alphaInput.removeEventListener("input", onAlpha)
      speedInput.removeEventListener("input", onSpeed)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountBicycle = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const steerInput = root.querySelector<HTMLInputElement>('input[data-control="steer"]')
  const speedInput = root.querySelector<HTMLInputElement>('input[data-control="speed"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !steerInput || !speedInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  const state = {
    x: 0,
    y: 0,
    heading: 0,
    steer: Number(steerInput.value) * DEG,
    speed: Number(speedInput.value),
  }
  const wheelBase = 0.24
  const trail: { x: number; y: number }[] = []
  let raf = 0
  let running = false
  let last = performance.now()

  const resetState = () => {
    state.x = -0.45
    state.y = 0
    state.heading = 0
    state.steer = 0
    state.speed = 1.5
    steerInput.value = "0"
    speedInput.value = "1.5"
    trail.length = 0
  }

  const drawBike = (w: number, h: number) => {
    const scale = Math.min(w, h) * 0.75
    const toPx = (x: number, y: number) => ({ x: w * 0.5 + x * scale, y: h * 0.55 - y * scale })

    const rear = { x: state.x, y: state.y }
    const front = {
      x: state.x + Math.cos(state.heading) * wheelBase,
      y: state.y + Math.sin(state.heading) * wheelBase,
    }

    if (
      trail.length === 0 ||
      Math.hypot(rear.x - trail[trail.length - 1].x, rear.y - trail[trail.length - 1].y) > 0.006
    ) {
      trail.push({ ...rear })
      if (trail.length > 900) trail.shift()
    }

    ctx.fillStyle = "#f5f3ed"
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = "rgba(111, 143, 163, 0.3)"
    ctx.lineWidth = 1
    for (let gx = -6; gx <= 6; gx++) {
      const x = w * 0.5 + gx * 42
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, h)
      ctx.stroke()
    }

    ctx.strokeStyle = "rgba(15, 63, 108, 0.85)"
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < trail.length; i++) {
      const p = toPx(trail[i].x, trail[i].y)
      if (i === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()

    const rearPx = toPx(rear.x, rear.y)
    const frontPx = toPx(front.x, front.y)
    const frameTop = toPx((rear.x + front.x) * 0.5, (rear.y + front.y) * 0.5 + 0.08)

    ctx.strokeStyle = "#0f2845"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(rearPx.x, rearPx.y)
    ctx.lineTo(frameTop.x, frameTop.y)
    ctx.lineTo(frontPx.x, frontPx.y)
    ctx.lineTo(rearPx.x, rearPx.y)
    ctx.stroke()

    ctx.fillStyle = "#fdfdfd"
    ctx.strokeStyle = "#0f141e"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(rearPx.x, rearPx.y, 22, 0, Math.PI * 2)
    ctx.arc(frontPx.x, frontPx.y, 22, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    const handle = toPx(
      front.x + Math.cos(state.heading + state.steer) * 0.06,
      front.y + Math.sin(state.heading + state.steer) * 0.06,
    )
    ctx.strokeStyle = "#b08f1d"
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(frontPx.x, frontPx.y)
    ctx.lineTo(handle.x, handle.y)
    ctx.stroke()
  }

  const loop = (now: number) => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const dt = Math.min((now - last) * 0.001, 0.033)
    last = now

    state.heading += (state.speed / wheelBase) * Math.tan(state.steer) * dt * 0.28
    state.x += Math.cos(state.heading) * state.speed * dt * 0.18
    state.y += Math.sin(state.heading) * state.speed * dt * 0.18

    if (Math.abs(state.x) > 0.95 || Math.abs(state.y) > 0.85) {
      resetState()
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    drawBike(canvas.clientWidth, canvas.clientHeight)
    if (running) {
      raf = requestAnimationFrame(loop)
    }
  }

  const onSteer = () => {
    state.steer = clamp(Number(steerInput.value), -35, 35) * DEG
  }
  const onSpeed = () => {
    state.speed = clamp(Number(speedInput.value), 0.4, 3.2)
  }

  const start = () => {
    running = true
    if (raf === 0) {
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  steerInput.addEventListener("input", onSteer)
  speedInput.addEventListener("input", onSpeed)
  reset.addEventListener("click", resetState)
  resetState()

  return {
    destroy: () => {
      steerInput.removeEventListener("input", onSteer)
      speedInput.removeEventListener("input", onSpeed)
      reset.removeEventListener("click", resetState)
      detachActivity()
      stop()
    },
  }
}

const mountSound = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const freqInput = root.querySelector<HTMLInputElement>('input[data-control="frequency"]')
  const ampInput = root.querySelector<HTMLInputElement>('input[data-control="amplitude"]')
  const dampInput = root.querySelector<HTMLInputElement>('input[data-control="damping"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !freqInput || !ampInput || !dampInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let freq = Number(freqInput.value)
  let amp = Number(ampInput.value)
  let damping = Number(dampInput.value)
  let t = 0
  let raf = 0
  let running = false

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    t += 0.016

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#090d13"
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = "rgba(112, 191, 242, 0.2)"
    ctx.lineWidth = 1
    for (let y = h * 0.2; y <= h * 0.8; y += h * 0.08) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }

    const drawWave = (phase: number, color: string, gain: number) => {
      ctx.beginPath()
      for (let x = 0; x <= w; x += 2) {
        const xN = x / w
        const envelope = Math.exp(-damping * xN)
        const y =
          h * 0.5 +
          Math.sin((xN * freq * 2 * Math.PI - t * (0.8 + gain) + phase) * (1 + gain * 0.2)) *
            amp *
            h *
            0.28 *
            envelope
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.stroke()
    }

    drawWave(0, "rgba(140, 211, 255, 0.95)", 0.9)
    drawWave(Math.PI * 0.4, "rgba(255, 174, 124, 0.65)", 0.5)

    ctx.fillStyle = "rgba(234, 224, 207, 0.84)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`f=${freq.toFixed(2)}  a=${amp.toFixed(2)}  d=${damping.toFixed(2)}`, 14, 22)

    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const onFreq = () => {
    freq = clamp(Number(freqInput.value), 0.4, 8)
  }
  const onAmp = () => {
    amp = clamp(Number(ampInput.value), 0.1, 1)
  }
  const onDamp = () => {
    damping = clamp(Number(dampInput.value), 0, 5)
  }
  const onReset = () => {
    freq = 2.4
    amp = 0.62
    damping = 1.1
    freqInput.value = String(freq)
    ampInput.value = String(amp)
    dampInput.value = String(damping)
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  freqInput.addEventListener("input", onFreq)
  ampInput.addEventListener("input", onAmp)
  dampInput.addEventListener("input", onDamp)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      freqInput.removeEventListener("input", onFreq)
      ampInput.removeEventListener("input", onAmp)
      dampInput.removeEventListener("input", onDamp)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountMechanicalWatch = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const speedInput = root.querySelector<HTMLInputElement>('input[data-control="speed"]')
  const ratioInput = root.querySelector<HTMLInputElement>('input[data-control="ratio"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !speedInput || !ratioInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let speed = Number(speedInput.value)
  let ratio = Number(ratioInput.value)
  let angle = 0
  let raf = 0
  let running = false

  const drawGear = (x: number, y: number, r: number, teeth: number, a: number, color: string) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(a)
    ctx.beginPath()
    for (let i = 0; i < teeth * 2; i++) {
      const th = (i / (teeth * 2)) * Math.PI * 2
      const rr = i % 2 === 0 ? r * 1.14 : r
      const px = Math.cos(th) * rr
      const py = Math.sin(th) * rr
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.fillStyle = color
    ctx.strokeStyle = "rgba(15, 20, 30, 0.85)"
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = "#f5efe2"
    ctx.fill()
    ctx.restore()
  }

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f4f0e8"
    ctx.fillRect(0, 0, w, h)

    const cx = w * 0.5
    const cy = h * 0.52
    const r1 = Math.min(w, h) * 0.13
    const r2 = r1 * ratio
    const r3 = r1 * 0.75

    drawGear(
      cx - r1 - r2 + 8,
      cy,
      r2,
      Math.max(8, Math.floor(24 * ratio)),
      -angle / ratio,
      "#c5a03b",
    )
    drawGear(cx, cy, r1, 24, angle, "#b9c8d0")
    drawGear(cx + r1 + r3 - 8, cy, r3, 18, -angle * 1.35, "#94b4c1")

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`speed: ${speed.toFixed(2)}x`, 14, 24)
    ctx.fillText(`ratio: ${ratio.toFixed(2)}`, 14, 42)

    angle += 0.03 * speed
    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const onSpeed = () => {
    speed = clamp(Number(speedInput.value), 0.2, 4)
  }
  const onRatio = () => {
    ratio = clamp(Number(ratioInput.value), 0.4, 1.8)
  }
  const onReset = () => {
    speed = 1
    ratio = 0.95
    speedInput.value = String(speed)
    ratioInput.value = String(ratio)
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  speedInput.addEventListener("input", onSpeed)
  ratioInput.addEventListener("input", onRatio)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      speedInput.removeEventListener("input", onSpeed)
      ratioInput.removeEventListener("input", onRatio)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountGPS = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const timeInput = root.querySelector<HTMLInputElement>('input[data-control="time"]')
  const noiseInput = root.querySelector<HTMLInputElement>('input[data-control="noise"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !timeInput || !noiseInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  canvas.tabIndex = 0
  let t = Number(timeInput.value)
  let noise = Number(noiseInput.value)
  let rx = 0.1
  let ry = 0.1
  let dragging = false
  let raf = 0
  let running = false

  const satPos = (phase: number, radius: number) => ({
    x: Math.cos(phase) * radius,
    y: Math.sin(phase) * radius,
  })

  const toPx = (w: number, h: number, x: number, y: number) => ({
    x: w * 0.5 + x * w * 0.42,
    y: h * 0.55 - y * h * 0.42,
  })

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    ctx.fillStyle = "#0b1017"
    ctx.fillRect(0, 0, w, h)

    const sats = [satPos(t + 0.2, 0.95), satPos(t + 2.5, 0.82), satPos(t + 4.1, 1.04)]

    const rp = toPx(w, h, rx, ry)
    for (const sat of sats) {
      const sp = toPx(w, h, sat.x, sat.y)
      const dist = Math.hypot(sat.x - rx, sat.y - ry) * w * 0.42
      const err = dist * noise * 0.06
      ctx.strokeStyle = "rgba(125, 197, 250, 0.26)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(sp.x, sp.y, dist + err, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = "#f2ca53"
      ctx.beginPath()
      ctx.arc(sp.x, sp.y, 5, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.fillStyle = "#91d2ff"
    ctx.beginPath()
    ctx.arc(rp.x, rp.y, 6, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "rgba(234,224,207,0.82)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText("Drag receiver dot to inspect trilateration stability", 14, 22)
    ctx.fillText(`noise=${noise.toFixed(2)}`, 14, 40)

    t += 0.01
    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const pointerToNormalized = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    return { x: (x - 0.5) / 0.42, y: (0.55 - y) / 0.42 }
  }

  const onPointerDown = (event: PointerEvent) => {
    const p = pointerToNormalized(event)
    if (Math.hypot(p.x - rx, p.y - ry) < 0.1) {
      dragging = true
      canvas.setPointerCapture(event.pointerId)
    }
  }

  const onPointerMove = (event: PointerEvent) => {
    if (!dragging) return
    const p = pointerToNormalized(event)
    rx = clamp(p.x, -1, 1)
    ry = clamp(p.y, -1, 1)
  }

  const onPointerUp = (event: PointerEvent) => {
    dragging = false
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId)
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.shiftKey ? 0.03 : 0.015
    if (event.key === "ArrowUp") {
      event.preventDefault()
      ry = clamp(ry + step, -1, 1)
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      ry = clamp(ry - step, -1, 1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      rx = clamp(rx - step, -1, 1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      rx = clamp(rx + step, -1, 1)
    }
  }

  const onTime = () => {
    t = Number(timeInput.value)
  }
  const onNoise = () => {
    noise = clamp(Number(noiseInput.value), 0, 2)
  }
  const onReset = () => {
    t = 0
    noise = 0.35
    rx = 0.1
    ry = 0.1
    timeInput.value = "0"
    noiseInput.value = "0.35"
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  canvas.addEventListener("pointerdown", onPointerDown)
  canvas.addEventListener("pointermove", onPointerMove)
  canvas.addEventListener("pointerup", onPointerUp)
  canvas.addEventListener("pointerleave", onPointerUp)
  canvas.addEventListener("keydown", onKeyDown)
  timeInput.addEventListener("input", onTime)
  noiseInput.addEventListener("input", onNoise)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      canvas.removeEventListener("pointerdown", onPointerDown)
      canvas.removeEventListener("pointermove", onPointerMove)
      canvas.removeEventListener("pointerup", onPointerUp)
      canvas.removeEventListener("pointerleave", onPointerUp)
      canvas.removeEventListener("keydown", onKeyDown)
      timeInput.removeEventListener("input", onTime)
      noiseInput.removeEventListener("input", onNoise)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountCurvesAndSurfaces = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const tensionInput = root.querySelector<HTMLInputElement>('input[data-control="tension"]')
  const twistInput = root.querySelector<HTMLInputElement>('input[data-control="twist"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !tensionInput || !twistInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  canvas.tabIndex = 0
  const points = [
    { x: 0.12, y: 0.76 },
    { x: 0.3, y: 0.22 },
    { x: 0.68, y: 0.82 },
    { x: 0.86, y: 0.28 },
  ]
  let tension = Number(tensionInput.value)
  let twist = Number(twistInput.value)
  let dragIndex = -1
  let raf = 0
  let running = false
  let keyboardIndex = 0

  const toPx = (w: number, h: number, p: { x: number; y: number }) => ({ x: p.x * w, y: p.y * h })

  const bezier = (u: number) => {
    const t1 = 1 - u
    const b0 = t1 * t1 * t1
    const b1 = 3 * t1 * t1 * u
    const b2 = 3 * t1 * u * u
    const b3 = u * u * u
    return {
      x: points[0].x * b0 + points[1].x * b1 + points[2].x * b2 + points[3].x * b3,
      y: points[0].y * b0 + points[1].y * b1 + points[2].y * b2 + points[3].y * b3,
    }
  }

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f2efe7"
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = "rgba(111, 143, 163, 0.4)"
    ctx.lineWidth = 1
    for (let i = 1; i <= 9; i++) {
      const y = (i / 10) * h
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }

    ctx.beginPath()
    const p0 = toPx(w, h, points[0])
    const p1 = toPx(w, h, points[1])
    const p2 = toPx(w, h, points[2])
    const p3 = toPx(w, h, points[3])
    ctx.moveTo(p0.x, p0.y)
    ctx.lineTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.lineTo(p3.x, p3.y)
    ctx.strokeStyle = "rgba(15, 40, 69, 0.25)"
    ctx.stroke()

    ctx.beginPath()
    for (let i = 0; i <= 180; i++) {
      const p = bezier(i / 180)
      const px = p.x * w
      const py = p.y * h
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.strokeStyle = "#0f3f6c"
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.strokeStyle = "rgba(176, 143, 29, 0.38)"
    ctx.lineWidth = 1.4
    for (let i = 0; i <= 32; i++) {
      const u = i / 32
      const p = bezier(u)
      const n = {
        x: Math.cos((u * 4 + twist) * Math.PI) * 0.03 * tension,
        y: Math.sin((u * 6 + twist) * Math.PI) * 0.03 * tension,
      }
      ctx.beginPath()
      ctx.moveTo(p.x * w, p.y * h)
      ctx.lineTo((p.x + n.x) * w, (p.y + n.y) * h)
      ctx.stroke()
    }

    for (let i = 0; i < points.length; i++) {
      const pp = toPx(w, h, points[i])
      const isActive = i === dragIndex || i === keyboardIndex
      ctx.fillStyle = isActive ? "#c77f2e" : "#0f2845"
      ctx.beginPath()
      ctx.arc(pp.x, pp.y, 6, 0, Math.PI * 2)
      ctx.fill()
    }

    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const pickPoint = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const w = rect.width
    const h = rect.height
    for (let i = 0; i < points.length; i++) {
      const px = points[i].x * w
      const py = points[i].y * h
      if (Math.hypot(px - x, py - y) < 18) {
        return i
      }
    }
    return -1
  }

  const onDown = (event: PointerEvent) => {
    dragIndex = pickPoint(event)
    if (dragIndex >= 0) canvas.setPointerCapture(event.pointerId)
  }
  const onMove = (event: PointerEvent) => {
    if (dragIndex < 0) return
    const rect = canvas.getBoundingClientRect()
    points[dragIndex].x = clamp((event.clientX - rect.left) / rect.width, 0.03, 0.97)
    points[dragIndex].y = clamp((event.clientY - rect.top) / rect.height, 0.05, 0.95)
  }
  const onUp = (event: PointerEvent) => {
    if (dragIndex >= 0 && canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId)
    }
    dragIndex = -1
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key >= "1" && event.key <= "4") {
      keyboardIndex = Number(event.key) - 1
      return
    }

    const step = event.shiftKey ? 0.02 : 0.01
    if (event.key === "ArrowUp") {
      event.preventDefault()
      points[keyboardIndex].y = clamp(points[keyboardIndex].y - step, 0.05, 0.95)
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      points[keyboardIndex].y = clamp(points[keyboardIndex].y + step, 0.05, 0.95)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      points[keyboardIndex].x = clamp(points[keyboardIndex].x - step, 0.03, 0.97)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      points[keyboardIndex].x = clamp(points[keyboardIndex].x + step, 0.03, 0.97)
    }
  }

  const onTension = () => {
    tension = clamp(Number(tensionInput.value), 0.1, 2)
  }
  const onTwist = () => {
    twist = clamp(Number(twistInput.value), -1, 1)
  }
  const onReset = () => {
    points[0] = { x: 0.12, y: 0.76 }
    points[1] = { x: 0.3, y: 0.22 }
    points[2] = { x: 0.68, y: 0.82 }
    points[3] = { x: 0.86, y: 0.28 }
    tension = 1
    twist = 0
    keyboardIndex = 0
    tensionInput.value = "1"
    twistInput.value = "0"
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  canvas.addEventListener("pointerdown", onDown)
  canvas.addEventListener("pointermove", onMove)
  canvas.addEventListener("pointerup", onUp)
  canvas.addEventListener("pointerleave", onUp)
  canvas.addEventListener("keydown", onKeyDown)
  tensionInput.addEventListener("input", onTension)
  twistInput.addEventListener("input", onTwist)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      canvas.removeEventListener("pointerdown", onDown)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerup", onUp)
      canvas.removeEventListener("pointerleave", onUp)
      canvas.removeEventListener("keydown", onKeyDown)
      tensionInput.removeEventListener("input", onTension)
      twistInput.removeEventListener("input", onTwist)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountGears = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const driveInput = root.querySelector<HTMLInputElement>('input[data-control="drive"]')
  const idlerInput = root.querySelector<HTMLInputElement>('input[data-control="idler"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !driveInput || !idlerInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let drive = Number(driveInput.value)
  let idler = Number(idlerInput.value)
  let ang = 0
  let raf = 0

  const drawGear = (x: number, y: number, r: number, teeth: number, a: number, fill: string) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(a)
    ctx.beginPath()
    for (let i = 0; i < teeth * 2; i++) {
      const th = (i / (teeth * 2)) * Math.PI * 2
      const rr = i % 2 === 0 ? r * 1.12 : r
      const px = Math.cos(th) * rr
      const py = Math.sin(th) * rr
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.strokeStyle = "#102031"
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2)
    ctx.fillStyle = "#f3ebdd"
    ctx.fill()
    ctx.restore()
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#ece8dc"
    ctx.fillRect(0, 0, w, h)

    const rA = Math.min(w, h) * 0.12
    const rB = rA * idler
    const rC = rA * 0.75
    const y = h * 0.55
    const xA = w * 0.27
    const xB = xA + rA + rB - 4
    const xC = xB + rB + rC - 4

    drawGear(xA, y, rA, 24, ang, "#b48f21")
    drawGear(xB, y, rB, Math.max(10, Math.floor(24 * idler)), -ang * (rA / rB), "#9ab3c0")
    drawGear(xC, y, rC, 16, ang * (rA / rC), "#6f8fa3")

    ctx.fillStyle = "#0f3f6c"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`drive=${drive.toFixed(2)}`, 16, 22)
    ctx.fillText(`idler=${idler.toFixed(2)}`, 16, 40)

    ang += 0.024 * drive
    raf = requestAnimationFrame(draw)
  }

  const onDrive = () => {
    drive = clamp(Number(driveInput.value), 0.2, 3.2)
  }
  const onIdler = () => {
    idler = clamp(Number(idlerInput.value), 0.5, 1.8)
  }
  const onReset = () => {
    drive = 1.2
    idler = 1
    driveInput.value = "1.2"
    idlerInput.value = "1"
  }

  driveInput.addEventListener("input", onDrive)
  idlerInput.addEventListener("input", onIdler)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      driveInput.removeEventListener("input", onDrive)
      idlerInput.removeEventListener("input", onIdler)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountEarthAndSun = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const dayInput = root.querySelector<HTMLInputElement>('input[data-control="day"]')
  const tiltInput = root.querySelector<HTMLInputElement>('input[data-control="tilt"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !dayInput || !tiltInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let day = Number(dayInput.value)
  let tilt = Number(tiltInput.value) * DEG
  let raf = 0

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#050910"
    ctx.fillRect(0, 0, w, h)

    const cx = w * 0.5
    const cy = h * 0.52
    const orbitX = w * 0.35
    const orbitY = h * 0.26

    ctx.strokeStyle = "rgba(111, 143, 163, 0.32)"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.ellipse(cx, cy, orbitX, orbitY, 0, 0, Math.PI * 2)
    ctx.stroke()

    const a = (day / 365) * Math.PI * 2
    const ex = cx + Math.cos(a) * orbitX
    const ey = cy + Math.sin(a) * orbitY

    ctx.beginPath()
    ctx.arc(cx, cy, 30, 0, Math.PI * 2)
    const grad = ctx.createRadialGradient(cx, cy, 8, cx, cy, 30)
    grad.addColorStop(0, "#f8e6a5")
    grad.addColorStop(1, "#d68d2a")
    ctx.fillStyle = grad
    ctx.fill()

    ctx.save()
    ctx.translate(ex, ey)
    ctx.rotate(tilt)
    ctx.beginPath()
    ctx.arc(0, 0, 16, 0, Math.PI * 2)
    ctx.fillStyle = "#6fbad7"
    ctx.fill()

    ctx.strokeStyle = "rgba(16, 20, 30, 0.7)"
    ctx.beginPath()
    ctx.moveTo(0, -16)
    ctx.lineTo(0, 16)
    ctx.stroke()
    ctx.restore()

    ctx.strokeStyle = "rgba(255, 238, 180, 0.44)"
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(ex, ey)
    ctx.stroke()

    ctx.fillStyle = "rgba(234,224,207,0.82)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`day ${Math.round(day)}`, 14, 22)
    ctx.fillText(`tilt ${(tilt / DEG).toFixed(1)}deg`, 14, 40)

    day += 0.45
    if (day > 365) day = 0
    dayInput.value = String(day.toFixed(2))
    raf = requestAnimationFrame(draw)
  }

  const onDay = () => {
    day = clamp(Number(dayInput.value), 0, 365)
  }
  const onTilt = () => {
    tilt = clamp(Number(tiltInput.value), 0, 35) * DEG
  }
  const onReset = () => {
    day = 90
    tilt = 23.5 * DEG
    dayInput.value = "90"
    tiltInput.value = "23.5"
  }

  dayInput.addEventListener("input", onDay)
  tiltInput.addEventListener("input", onTilt)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      dayInput.removeEventListener("input", onDay)
      tiltInput.removeEventListener("input", onTilt)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountTesseract = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const spinInput = root.querySelector<HTMLInputElement>('input[data-control="spin"]')
  const depthInput = root.querySelector<HTMLInputElement>('input[data-control="depth"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !spinInput || !depthInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  const vertices: number[][] = []
  for (let i = 0; i < 16; i++) {
    vertices.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1])
  }
  const edges: [number, number][] = []
  for (let i = 0; i < 16; i++) {
    for (let b = 0; b < 4; b++) {
      const j = i ^ (1 << b)
      if (i < j) edges.push([i, j])
    }
  }

  let spin = Number(spinInput.value)
  let depth = Number(depthInput.value)
  let phase = 0
  let raf = 0

  const rotate4d = (v: number[], a: number) => {
    const c = Math.cos(a)
    const s = Math.sin(a)
    const x = v[0] * c - v[3] * s
    const w = v[0] * s + v[3] * c
    const y = v[1] * c - v[2] * s
    const z = v[1] * s + v[2] * c
    return [x, y, z, w]
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#070c13"
    ctx.fillRect(0, 0, w, h)

    const projected = vertices.map((v) => {
      const r = rotate4d(v, phase)
      const w4 = 1 / (depth - r[3] * 0.65)
      const x3 = r[0] * w4
      const y3 = r[1] * w4
      const z3 = r[2] * w4
      const zp = 1 / (3.2 - z3)
      return {
        x: w * 0.5 + x3 * zp * w * 0.3,
        y: h * 0.52 + y3 * zp * h * 0.3,
        z: z3,
      }
    })

    ctx.strokeStyle = "rgba(110, 182, 231, 0.56)"
    ctx.lineWidth = 1.4
    for (const [a, b] of edges) {
      const p0 = projected[a]
      const p1 = projected[b]
      ctx.beginPath()
      ctx.moveTo(p0.x, p0.y)
      ctx.lineTo(p1.x, p1.y)
      ctx.stroke()
    }

    for (const p of projected) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, 2.4 + (p.z + 1) * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(234, 224, 207, 0.85)"
      ctx.fill()
    }

    ctx.fillStyle = "rgba(234,224,207,0.82)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`spin=${spin.toFixed(2)} depth=${depth.toFixed(2)}`, 14, 22)

    phase += 0.016 * spin
    raf = requestAnimationFrame(draw)
  }

  const onSpin = () => {
    spin = clamp(Number(spinInput.value), 0.2, 4)
  }
  const onDepth = () => {
    depth = clamp(Number(depthInput.value), 1.4, 3.6)
  }
  const onReset = () => {
    spin = 1.2
    depth = 2.2
    spinInput.value = "1.2"
    depthInput.value = "2.2"
  }

  spinInput.addEventListener("input", onSpin)
  depthInput.addEventListener("input", onDepth)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      spinInput.removeEventListener("input", onSpin)
      depthInput.removeEventListener("input", onDepth)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountColorSpaces = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const rInput = root.querySelector<HTMLInputElement>('input[data-control="r"]')
  const gInput = root.querySelector<HTMLInputElement>('input[data-control="g"]')
  const bInput = root.querySelector<HTMLInputElement>('input[data-control="b"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !rInput || !gInput || !bInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let r = Number(rInput.value)
  let g = Number(gInput.value)
  let b = Number(bInput.value)

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#10141c"
    ctx.fillRect(0, 0, w, h)

    const gradR = ctx.createLinearGradient(0, 0, w * 0.5, 0)
    gradR.addColorStop(0, `rgb(0,${Math.round(g * 255)},${Math.round(b * 255)})`)
    gradR.addColorStop(1, `rgb(255,${Math.round(g * 255)},${Math.round(b * 255)})`)
    ctx.fillStyle = gradR
    ctx.fillRect(w * 0.06, h * 0.1, w * 0.58, h * 0.16)

    const gradG = ctx.createLinearGradient(0, 0, w * 0.5, 0)
    gradG.addColorStop(0, `rgb(${Math.round(r * 255)},0,${Math.round(b * 255)})`)
    gradG.addColorStop(1, `rgb(${Math.round(r * 255)},255,${Math.round(b * 255)})`)
    ctx.fillStyle = gradG
    ctx.fillRect(w * 0.06, h * 0.34, w * 0.58, h * 0.16)

    const gradB = ctx.createLinearGradient(0, 0, w * 0.5, 0)
    gradB.addColorStop(0, `rgb(${Math.round(r * 255)},${Math.round(g * 255)},0)`)
    gradB.addColorStop(1, `rgb(${Math.round(r * 255)},${Math.round(g * 255)},255)`)
    ctx.fillStyle = gradB
    ctx.fillRect(w * 0.06, h * 0.58, w * 0.58, h * 0.16)

    const color = `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`
    ctx.fillStyle = color
    ctx.fillRect(w * 0.72, h * 0.18, w * 0.2, h * 0.4)
    ctx.strokeStyle = "rgba(234,224,207,0.6)"
    ctx.strokeRect(w * 0.72, h * 0.18, w * 0.2, h * 0.4)

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
    ctx.fillStyle = "rgba(234,224,207,0.9)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `RGB(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`,
      w * 0.06,
      h * 0.86,
    )
    ctx.fillText(`Luma ${luma.toFixed(3)}`, w * 0.72, h * 0.64)
  }

  const onR = () => {
    r = clamp(Number(rInput.value), 0, 1)
    draw()
  }
  const onG = () => {
    g = clamp(Number(gInput.value), 0, 1)
    draw()
  }
  const onB = () => {
    b = clamp(Number(bInput.value), 0, 1)
    draw()
  }
  const onReset = () => {
    r = 0.56
    g = 0.34
    b = 0.82
    rInput.value = "0.56"
    gInput.value = "0.34"
    bInput.value = "0.82"
    draw()
  }

  const onResize = () => {
    draw()
  }

  rInput.addEventListener("input", onR)
  gInput.addEventListener("input", onG)
  bInput.addEventListener("input", onB)
  reset.addEventListener("click", onReset)
  window.addEventListener("resize", onResize)
  draw()

  return {
    destroy: () => {
      rInput.removeEventListener("input", onR)
      gInput.removeEventListener("input", onG)
      bInput.removeEventListener("input", onB)
      reset.removeEventListener("click", onReset)
      window.removeEventListener("resize", onResize)
    },
  }
}

const mountAlphaCompositing = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const aInput = root.querySelector<HTMLInputElement>('input[data-control="alphaA"]')
  const bInput = root.querySelector<HTMLInputElement>('input[data-control="alphaB"]')
  const blendInput = root.querySelector<HTMLInputElement>('input[data-control="mix"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !aInput || !bInput || !blendInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let alphaA = Number(aInput.value)
  let alphaB = Number(bInput.value)
  let mix = Number(blendInput.value)

  const drawChecker = (w: number, h: number) => {
    const s = 18
    for (let y = 0; y < h; y += s) {
      for (let x = 0; x < w; x += s) {
        ctx.fillStyle = (x / s + y / s) % 2 === 0 ? "#e2ddd2" : "#cfc8ba"
        ctx.fillRect(x, y, s, s)
      }
    }
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    drawChecker(w, h)

    const r = Math.min(w, h) * 0.22
    const ax = w * (0.42 - mix * 0.1)
    const bx = w * (0.58 + mix * 0.1)
    const cy = h * 0.52

    ctx.globalAlpha = alphaA
    ctx.fillStyle = "#0f3f6c"
    ctx.beginPath()
    ctx.arc(ax, cy, r, 0, Math.PI * 2)
    ctx.fill()

    ctx.globalAlpha = alphaB
    ctx.fillStyle = "#b08f1d"
    ctx.beginPath()
    ctx.arc(bx, cy, r, 0, Math.PI * 2)
    ctx.fill()

    ctx.globalAlpha = 1
    ctx.fillStyle = "#0f141e"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`A=${alphaA.toFixed(2)} B=${alphaB.toFixed(2)} mix=${mix.toFixed(2)}`, 14, 22)
  }

  const onA = () => {
    alphaA = clamp(Number(aInput.value), 0, 1)
    draw()
  }
  const onB = () => {
    alphaB = clamp(Number(bInput.value), 0, 1)
    draw()
  }
  const onMix = () => {
    mix = clamp(Number(blendInput.value), 0, 1)
    draw()
  }
  const onReset = () => {
    alphaA = 0.64
    alphaB = 0.55
    mix = 0.5
    aInput.value = "0.64"
    bInput.value = "0.55"
    blendInput.value = "0.5"
    draw()
  }

  const onResize = () => {
    draw()
  }

  aInput.addEventListener("input", onA)
  bInput.addEventListener("input", onB)
  blendInput.addEventListener("input", onMix)
  reset.addEventListener("click", onReset)
  window.addEventListener("resize", onResize)
  draw()

  return {
    destroy: () => {
      aInput.removeEventListener("input", onA)
      bInput.removeEventListener("input", onB)
      blendInput.removeEventListener("input", onMix)
      reset.removeEventListener("click", onReset)
      window.removeEventListener("resize", onResize)
    },
  }
}

const mountFloatingPoint = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const valueInput = root.querySelector<HTMLInputElement>('input[data-control="value"]')
  const stepInput = root.querySelector<HTMLInputElement>('input[data-control="step"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !valueInput || !stepInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let value = Number(valueInput.value)
  let step = Number(stepInput.value)

  const floatToBits = (v: number) => {
    const view = new DataView(new ArrayBuffer(4))
    view.setFloat32(0, v)
    const bits = view.getUint32(0)
    return bits.toString(2).padStart(32, "0")
  }

  const drawBits = (bits: string, x: number, y: number, cellW: number) => {
    for (let i = 0; i < bits.length; i++) {
      const b = bits[i]
      if (i === 0) ctx.fillStyle = "rgba(176, 143, 29, 0.25)"
      else if (i < 9) ctx.fillStyle = "rgba(15, 63, 108, 0.24)"
      else ctx.fillStyle = "rgba(111, 143, 163, 0.22)"
      ctx.fillRect(x + i * cellW, y, cellW - 1, 26)

      ctx.fillStyle = "#0f141e"
      ctx.font = '500 11px "IBM Plex Mono", monospace'
      ctx.fillText(b, x + i * cellW + cellW * 0.35, y + 17)
    }
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f3efe5"
    ctx.fillRect(0, 0, w, h)

    const bits = floatToBits(value)
    const sign = bits.slice(0, 1)
    const exp = bits.slice(1, 9)
    const man = bits.slice(9)

    const x = w * 0.05
    const cellW = (w * 0.9) / 32
    drawBits(bits, x, h * 0.22, cellW)

    ctx.fillStyle = "#0f3f6c"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`value=${value.toFixed(6)} step=${step.toFixed(6)}`, x, h * 0.15)
    ctx.fillText(`sign=${sign}`, x, h * 0.42)
    ctx.fillText(`exponent=${exp} (${parseInt(exp, 2)})`, x + 110, h * 0.42)
    ctx.fillText(`mantissa=${man}`, x, h * 0.54)

    const nextValue = value + step
    ctx.fillText(`next representable probe: ${Math.fround(nextValue).toPrecision(8)}`, x, h * 0.66)
  }

  const onValue = () => {
    value = clamp(Number(valueInput.value), -64, 64)
    draw()
  }
  const onStep = () => {
    step = clamp(Number(stepInput.value), 0.000001, 1)
    draw()
  }
  const onReset = () => {
    value = 0.1
    step = 0.01
    valueInput.value = "0.1"
    stepInput.value = "0.01"
    draw()
  }

  const onResize = () => {
    draw()
  }

  valueInput.addEventListener("input", onValue)
  stepInput.addEventListener("input", onStep)
  reset.addEventListener("click", onReset)
  window.addEventListener("resize", onResize)
  draw()

  return {
    destroy: () => {
      valueInput.removeEventListener("input", onValue)
      stepInput.removeEventListener("input", onStep)
      reset.removeEventListener("click", onReset)
      window.removeEventListener("resize", onResize)
    },
  }
}

const mountNavalArchitecture = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const loadInput = root.querySelector<HTMLInputElement>('input[data-control="load"]')
  const densityInput = root.querySelector<HTMLInputElement>('input[data-control="density"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !loadInput || !densityInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let load = Number(loadInput.value)
  let density = Number(densityInput.value)
  let phase = 0
  let raf = 0

  const drawHull = (cx: number, cy: number, w: number, h: number, roll: number) => {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(roll)
    ctx.beginPath()
    ctx.moveTo(-w * 0.55, 0)
    ctx.quadraticCurveTo(-w * 0.5, h * 0.35, -w * 0.4, h * 0.42)
    ctx.lineTo(w * 0.4, h * 0.42)
    ctx.quadraticCurveTo(w * 0.53, h * 0.25, w * 0.55, 0)
    ctx.lineTo(w * 0.42, -h * 0.45)
    ctx.lineTo(-w * 0.35, -h * 0.45)
    ctx.closePath()
    ctx.fillStyle = "#0f2845"
    ctx.strokeStyle = "rgba(234, 224, 207, 0.75)"
    ctx.lineWidth = 2
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = "#eae0cf"
    ctx.fillRect(-w * 0.25, -h * 0.62, w * 0.38, h * 0.17)
    ctx.restore()
  }

  const drawArrow = (x0: number, y0: number, x1: number, y1: number, color: string) => {
    const angle = Math.atan2(y1 - y0, x1 - x0)
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1 - Math.cos(angle - 0.45) * 9, y1 - Math.sin(angle - 0.45) * 9)
    ctx.lineTo(x1 - Math.cos(angle + 0.45) * 9, y1 - Math.sin(angle + 0.45) * 9)
    ctx.closePath()
    ctx.fillStyle = color
    ctx.fill()
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const waterline = h * 0.58
    ctx.fillStyle = "#e7edf2"
    ctx.fillRect(0, 0, w, waterline)
    ctx.fillStyle = "#9fc4da"
    ctx.fillRect(0, waterline, w, h - waterline)
    ctx.strokeStyle = "rgba(15, 63, 108, 0.65)"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, waterline)
    ctx.lineTo(w, waterline)
    ctx.stroke()

    const buoyancy = clamp(0.1 + (load / Math.max(density, 0.2)) * 0.22, 0.08, 0.38)
    const hullY = waterline - h * buoyancy
    const roll = Math.sin(phase) * 0.08
    drawHull(w * 0.5, hullY, w * 0.5, h * 0.22, roll)

    const centerX = w * 0.5
    drawArrow(centerX, hullY - 24, centerX, hullY + 26, "#b65432")
    drawArrow(centerX + 26, hullY + 34, centerX + 26, hullY - 30, "#2a7eb4")

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`load=${load.toFixed(2)}  fluid density=${density.toFixed(2)}`, 12, 22)
    ctx.fillText("red: weight  blue: buoyancy", 12, 40)

    phase += 0.018 + load * 0.004
    raf = requestAnimationFrame(draw)
  }

  const onLoad = () => {
    load = clamp(Number(loadInput.value), 0, 2)
  }
  const onDensity = () => {
    density = clamp(Number(densityInput.value), 0.3, 2)
  }
  const onReset = () => {
    load = 0.9
    density = 1
    loadInput.value = "0.9"
    densityInput.value = "1"
  }

  loadInput.addEventListener("input", onLoad)
  densityInput.addEventListener("input", onDensity)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      loadInput.removeEventListener("input", onLoad)
      densityInput.removeEventListener("input", onDensity)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountInternalCombustionEngine = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const rpmInput = root.querySelector<HTMLInputElement>('input[data-control="rpm"]')
  const compressionInput = root.querySelector<HTMLInputElement>('input[data-control="compression"]')
  const sparkInput = root.querySelector<HTMLInputElement>('input[data-control="spark"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !rpmInput || !compressionInput || !sparkInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let rpm = Number(rpmInput.value)
  let compression = Number(compressionInput.value)
  let spark = Number(sparkInput.value) * DEG
  let theta = 0
  let raf = 0

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f0ece3"
    ctx.fillRect(0, 0, w, h)

    const crankX = w * 0.36
    const crankY = h * 0.7
    const r = h * 0.13
    const rod = h * 0.26
    const pinX = crankX + Math.cos(theta) * r
    const pinY = crankY + Math.sin(theta) * r
    const pistonX = w * 0.65
    const pistonY = crankY - Math.sqrt(Math.max(0, rod * rod - (pinX - pistonX) ** 2))

    const cylTop = h * 0.18
    const cylH = h * 0.46
    const cylW = w * 0.18
    ctx.fillStyle = "#d6dde3"
    ctx.strokeStyle = "#0f2845"
    ctx.lineWidth = 2
    ctx.fillRect(pistonX - cylW * 0.5, cylTop, cylW, cylH)
    ctx.strokeRect(pistonX - cylW * 0.5, cylTop, cylW, cylH)

    const pistonH = h * 0.065
    const squeeze = 1 + compression * 0.35
    ctx.fillStyle = "#9caab3"
    ctx.fillRect(pistonX - cylW * 0.46, pistonY - pistonH * 0.5, cylW * 0.92, pistonH / squeeze)

    ctx.strokeStyle = "#374554"
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(pinX, pinY)
    ctx.lineTo(pistonX, pistonY)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(crankX, crankY, r, 0, Math.PI * 2)
    ctx.strokeStyle = "#b08f1d"
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(crankX, crankY)
    ctx.lineTo(pinX, pinY)
    ctx.stroke()

    const phase = ((theta % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
    const sparkDelta = Math.abs(phase - spark)
    if (sparkDelta < 0.13) {
      const flameAlpha = 1 - sparkDelta / 0.13
      ctx.fillStyle = `rgba(223, 132, 38, ${0.6 * flameAlpha})`
      ctx.beginPath()
      ctx.ellipse(pistonX, cylTop + cylH * 0.16, cylW * 0.34, cylH * 0.1, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`rpm=${rpm.toFixed(0)}  compression=${compression.toFixed(2)}`, 12, 22)
    ctx.fillText(`spark=${(spark / DEG).toFixed(1)}deg`, 12, 40)

    theta += (rpm / 60) * Math.PI * 2 * 0.016
    raf = requestAnimationFrame(draw)
  }

  const onRpm = () => {
    rpm = clamp(Number(rpmInput.value), 200, 5000)
  }
  const onCompression = () => {
    compression = clamp(Number(compressionInput.value), 0.5, 1.5)
  }
  const onSpark = () => {
    spark = clamp(Number(sparkInput.value), 0, 360) * DEG
  }
  const onReset = () => {
    rpm = 1400
    compression = 1
    spark = 35 * DEG
    rpmInput.value = "1400"
    compressionInput.value = "1"
    sparkInput.value = "35"
  }

  rpmInput.addEventListener("input", onRpm)
  compressionInput.addEventListener("input", onCompression)
  sparkInput.addEventListener("input", onSpark)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      rpmInput.removeEventListener("input", onRpm)
      compressionInput.removeEventListener("input", onCompression)
      sparkInput.removeEventListener("input", onSpark)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountCamerasAndLenses = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const focalInput = root.querySelector<HTMLInputElement>('input[data-control="focal"]')
  const apertureInput = root.querySelector<HTMLInputElement>('input[data-control="aperture"]')
  const objectInput = root.querySelector<HTMLInputElement>('input[data-control="object"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !focalInput || !apertureInput || !objectInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let focal = Number(focalInput.value)
  let aperture = Number(apertureInput.value)
  let objectDist = Number(objectInput.value)
  let raf = 0

  const drawRay = (
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
  ) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f1efe8"
    ctx.fillRect(0, 0, w, h)

    const axisY = h * 0.56
    const lensX = w * 0.52
    const sensorX = w * 0.86
    const objX = lensX - objectDist * w * 0.34
    const objH = h * 0.18

    ctx.strokeStyle = "rgba(111, 143, 163, 0.58)"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, axisY)
    ctx.lineTo(w, axisY)
    ctx.stroke()

    ctx.strokeStyle = "#0f3f6c"
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(lensX, axisY - h * 0.2 * aperture)
    ctx.lineTo(lensX, axisY + h * 0.2 * aperture)
    ctx.stroke()

    ctx.strokeStyle = "#0f2845"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(objX, axisY)
    ctx.lineTo(objX, axisY - objH)
    ctx.stroke()

    const doN = Math.max(0.2, objectDist)
    const diN = 1 / Math.max(0.0001, 1 / focal - 1 / doN)
    const imageX = lensX + diN * w * 0.2
    const imageH = (diN / doN) * objH

    ctx.strokeStyle = "#b08f1d"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(sensorX, axisY - h * 0.26)
    ctx.lineTo(sensorX, axisY + h * 0.26)
    ctx.stroke()

    drawRay(
      objX,
      axisY - objH,
      lensX,
      axisY - objH,
      imageX,
      axisY + imageH,
      "rgba(18,115,181,0.68)",
    )
    drawRay(objX, axisY - objH, lensX, axisY, imageX, axisY + imageH, "rgba(181,128,32,0.65)")

    ctx.strokeStyle = "#1a2c3a"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(imageX, axisY)
    ctx.lineTo(imageX, axisY + imageH)
    ctx.stroke()

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `f=${focal.toFixed(2)}  aperture=${aperture.toFixed(2)}  object=${objectDist.toFixed(2)}`,
      12,
      22,
    )
    ctx.fillText(`image distance ~ ${diN.toFixed(2)}`, 12, 40)

    raf = requestAnimationFrame(draw)
  }

  const onFocal = () => {
    focal = clamp(Number(focalInput.value), 0.2, 1.6)
  }
  const onAperture = () => {
    aperture = clamp(Number(apertureInput.value), 0.3, 1)
  }
  const onObject = () => {
    objectDist = clamp(Number(objectInput.value), 0.25, 1.4)
  }
  const onReset = () => {
    focal = 0.65
    aperture = 0.7
    objectDist = 0.8
    focalInput.value = "0.65"
    apertureInput.value = "0.7"
    objectInput.value = "0.8"
  }

  focalInput.addEventListener("input", onFocal)
  apertureInput.addEventListener("input", onAperture)
  objectInput.addEventListener("input", onObject)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      focalInput.removeEventListener("input", onFocal)
      apertureInput.removeEventListener("input", onAperture)
      objectInput.removeEventListener("input", onObject)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountLightsAndShadows = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const angleInput = root.querySelector<HTMLInputElement>('input[data-control="angle"]')
  const heightInput = root.querySelector<HTMLInputElement>('input[data-control="height"]')
  const softInput = root.querySelector<HTMLInputElement>('input[data-control="softness"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !angleInput || !heightInput || !softInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let angle = Number(angleInput.value) * DEG
  let height = Number(heightInput.value)
  let softness = Number(softInput.value)
  let raf = 0

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const groundY = h * 0.7
    ctx.fillStyle = "#141a24"
    ctx.fillRect(0, 0, w, groundY)
    ctx.fillStyle = "#232d3b"
    ctx.fillRect(0, groundY, w, h - groundY)

    const sourceX = w * 0.2 + Math.cos(angle) * w * 0.16
    const sourceY = groundY - height * h * 0.5

    const block = {
      x: w * 0.56,
      y: groundY - h * 0.2,
      w: w * 0.1,
      h: h * 0.2,
    }

    const projectToGround = (x: number, y: number) => {
      const t = (groundY - sourceY) / Math.max(1e-5, y - sourceY)
      return sourceX + (x - sourceX) * t
    }

    const xShadowL = projectToGround(block.x, block.y)
    const xShadowR = projectToGround(block.x + block.w, block.y)

    for (let i = 0; i < 7; i++) {
      const spread = i * softness * 8
      const alpha = 0.18 - i * 0.02
      if (alpha <= 0) break
      ctx.fillStyle = `rgba(5, 8, 12, ${alpha})`
      ctx.beginPath()
      ctx.moveTo(block.x - spread * 0.1, groundY)
      ctx.lineTo(block.x + block.w + spread * 0.1, groundY)
      ctx.lineTo(xShadowR + spread, groundY)
      ctx.lineTo(xShadowL - spread, groundY)
      ctx.closePath()
      ctx.fill()
    }

    ctx.fillStyle = "#b9c7d2"
    ctx.fillRect(block.x, block.y, block.w, block.h)
    ctx.fillStyle = "#ffd87f"
    ctx.beginPath()
    ctx.arc(sourceX, sourceY, 9, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = "rgba(255, 216, 127, 0.5)"
    ctx.beginPath()
    ctx.moveTo(sourceX, sourceY)
    ctx.lineTo(block.x, block.y)
    ctx.moveTo(sourceX, sourceY)
    ctx.lineTo(block.x + block.w, block.y)
    ctx.stroke()

    ctx.fillStyle = "rgba(234,224,207,0.85)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `angle ${(angle / DEG).toFixed(1)}deg  height ${height.toFixed(2)}  softness ${softness.toFixed(2)}`,
      12,
      22,
    )

    raf = requestAnimationFrame(draw)
  }

  const onAngle = () => {
    angle = clamp(Number(angleInput.value), 5, 175) * DEG
  }
  const onHeight = () => {
    height = clamp(Number(heightInput.value), 0.2, 1)
  }
  const onSoft = () => {
    softness = clamp(Number(softInput.value), 0, 1)
  }
  const onReset = () => {
    angle = 42 * DEG
    height = 0.75
    softness = 0.3
    angleInput.value = "42"
    heightInput.value = "0.75"
    softInput.value = "0.3"
  }

  angleInput.addEventListener("input", onAngle)
  heightInput.addEventListener("input", onHeight)
  softInput.addEventListener("input", onSoft)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      angleInput.removeEventListener("input", onAngle)
      heightInput.removeEventListener("input", onHeight)
      softInput.removeEventListener("input", onSoft)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountMeshTransforms = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const rotateInput = root.querySelector<HTMLInputElement>('input[data-control="rotate"]')
  const scaleInput = root.querySelector<HTMLInputElement>('input[data-control="scale"]')
  const shearInput = root.querySelector<HTMLInputElement>('input[data-control="shear"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !rotateInput || !scaleInput || !shearInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let rotate = Number(rotateInput.value) * DEG
  let scale = Number(scaleInput.value)
  let shear = Number(shearInput.value)
  let raf = 0

  const transform = (x: number, y: number) => {
    const sx = (x + shear * y) * scale
    const sy = y * scale
    return {
      x: sx * Math.cos(rotate) - sy * Math.sin(rotate),
      y: sx * Math.sin(rotate) + sy * Math.cos(rotate),
    }
  }

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    const cx = w * 0.5
    const cy = h * 0.55
    const span = Math.min(w, h) * 0.34
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#eef0eb"
    ctx.fillRect(0, 0, w, h)

    ctx.strokeStyle = "rgba(111, 143, 163, 0.25)"
    ctx.lineWidth = 1
    for (let i = -10; i <= 10; i++) {
      ctx.beginPath()
      for (let j = -10; j <= 10; j++) {
        const p = transform(i / 10, j / 10)
        const px = cx + p.x * span
        const py = cy + p.y * span
        if (j === -10) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    ctx.strokeStyle = "rgba(15, 63, 108, 0.62)"
    for (let j = -10; j <= 10; j++) {
      ctx.beginPath()
      for (let i = -10; i <= 10; i++) {
        const p = transform(i / 10, j / 10)
        const px = cx + p.x * span
        const py = cy + p.y * span
        if (i === -10) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `rot ${(rotate / DEG).toFixed(1)}deg  scale ${scale.toFixed(2)}  shear ${shear.toFixed(2)}`,
      12,
      22,
    )

    raf = requestAnimationFrame(draw)
  }

  const onRotate = () => {
    rotate = clamp(Number(rotateInput.value), -180, 180) * DEG
  }
  const onScale = () => {
    scale = clamp(Number(scaleInput.value), 0.4, 1.8)
  }
  const onShear = () => {
    shear = clamp(Number(shearInput.value), -1.5, 1.5)
  }
  const onReset = () => {
    rotate = 0
    scale = 1
    shear = 0
    rotateInput.value = "0"
    scaleInput.value = "1"
    shearInput.value = "0"
  }

  rotateInput.addEventListener("input", onRotate)
  scaleInput.addEventListener("input", onScale)
  shearInput.addEventListener("input", onShear)
  reset.addEventListener("click", onReset)
  raf = requestAnimationFrame(draw)

  return {
    destroy: () => {
      rotateInput.removeEventListener("input", onRotate)
      scaleInput.removeEventListener("input", onScale)
      shearInput.removeEventListener("input", onShear)
      reset.removeEventListener("click", onReset)
      cancelAnimationFrame(raf)
    },
  }
}

const mountDrawingBezierCurves = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const tInput = root.querySelector<HTMLInputElement>('input[data-control="t"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !tInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  canvas.tabIndex = 0
  const pts = [
    { x: 0.12, y: 0.8 },
    { x: 0.28, y: 0.2 },
    { x: 0.74, y: 0.85 },
    { x: 0.9, y: 0.32 },
  ]
  let t = Number(tInput.value)
  let drag = -1
  let raf = 0
  let running = false
  let keyboardIndex = 0

  const lerp = (a: { x: number; y: number }, b: { x: number; y: number }, u: number) => ({
    x: a.x + (b.x - a.x) * u,
    y: a.y + (b.y - a.y) * u,
  })

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f3efe4"
    ctx.fillRect(0, 0, w, h)

    const p = pts.map((v) => ({ x: v.x * w, y: v.y * h }))
    ctx.strokeStyle = "rgba(15, 40, 69, 0.35)"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(p[0].x, p[0].y)
    ctx.lineTo(p[1].x, p[1].y)
    ctx.lineTo(p[2].x, p[2].y)
    ctx.lineTo(p[3].x, p[3].y)
    ctx.stroke()

    ctx.beginPath()
    for (let i = 0; i <= 180; i++) {
      const u = i / 180
      const q0 = lerp(pts[0], pts[1], u)
      const q1 = lerp(pts[1], pts[2], u)
      const q2 = lerp(pts[2], pts[3], u)
      const r0 = lerp(q0, q1, u)
      const r1 = lerp(q1, q2, u)
      const s = lerp(r0, r1, u)
      const x = s.x * w
      const y = s.y * h
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = "#0f3f6c"
    ctx.lineWidth = 3
    ctx.stroke()

    const q0 = lerp(pts[0], pts[1], t)
    const q1 = lerp(pts[1], pts[2], t)
    const q2 = lerp(pts[2], pts[3], t)
    const r0 = lerp(q0, q1, t)
    const r1 = lerp(q1, q2, t)
    const s = lerp(r0, r1, t)

    ctx.strokeStyle = "rgba(176, 143, 29, 0.7)"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(q0.x * w, q0.y * h)
    ctx.lineTo(q1.x * w, q1.y * h)
    ctx.lineTo(q2.x * w, q2.y * h)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(r0.x * w, r0.y * h)
    ctx.lineTo(r1.x * w, r1.y * h)
    ctx.stroke()

    ctx.fillStyle = "#b08f1d"
    ctx.beginPath()
    ctx.arc(s.x * w, s.y * h, 5, 0, Math.PI * 2)
    ctx.fill()

    for (let i = 0; i < p.length; i++) {
      const isActive = i === drag || i === keyboardIndex
      ctx.fillStyle = isActive ? "#c77533" : "#0f2845"
      ctx.beginPath()
      ctx.arc(p[i].x, p[i].y, 6, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`t=${t.toFixed(3)}`, 12, 22)

    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const pick = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    for (let i = 0; i < pts.length; i++) {
      const px = pts[i].x * rect.width
      const py = pts[i].y * rect.height
      if (Math.hypot(px - x, py - y) < 20) return i
    }
    return -1
  }

  const onDown = (event: PointerEvent) => {
    drag = pick(event)
    if (drag >= 0) canvas.setPointerCapture(event.pointerId)
  }
  const onMove = (event: PointerEvent) => {
    if (drag < 0) return
    const rect = canvas.getBoundingClientRect()
    pts[drag].x = clamp((event.clientX - rect.left) / rect.width, 0.03, 0.97)
    pts[drag].y = clamp((event.clientY - rect.top) / rect.height, 0.05, 0.95)
  }
  const onUp = (event: PointerEvent) => {
    if (drag >= 0 && canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId)
    }
    drag = -1
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key >= "1" && event.key <= "4") {
      keyboardIndex = Number(event.key) - 1
      return
    }

    const step = event.shiftKey ? 0.02 : 0.01
    if (event.key === "ArrowUp") {
      event.preventDefault()
      pts[keyboardIndex].y = clamp(pts[keyboardIndex].y - step, 0.05, 0.95)
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      pts[keyboardIndex].y = clamp(pts[keyboardIndex].y + step, 0.05, 0.95)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      pts[keyboardIndex].x = clamp(pts[keyboardIndex].x - step, 0.03, 0.97)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      pts[keyboardIndex].x = clamp(pts[keyboardIndex].x + step, 0.03, 0.97)
    }
  }

  const onT = () => {
    t = clamp(Number(tInput.value), 0, 1)
  }
  const onReset = () => {
    pts[0] = { x: 0.12, y: 0.8 }
    pts[1] = { x: 0.28, y: 0.2 }
    pts[2] = { x: 0.74, y: 0.85 }
    pts[3] = { x: 0.9, y: 0.32 }
    t = 0.5
    keyboardIndex = 0
    tInput.value = "0.5"
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  canvas.addEventListener("pointerdown", onDown)
  canvas.addEventListener("pointermove", onMove)
  canvas.addEventListener("pointerup", onUp)
  canvas.addEventListener("pointerleave", onUp)
  canvas.addEventListener("keydown", onKeyDown)
  tInput.addEventListener("input", onT)
  reset.addEventListener("click", onReset)

  return {
    destroy: () => {
      canvas.removeEventListener("pointerdown", onDown)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerup", onUp)
      canvas.removeEventListener("pointerleave", onUp)
      canvas.removeEventListener("keydown", onKeyDown)
      tInput.removeEventListener("input", onT)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const mountExposingNSDictionary = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const keysInput = root.querySelector<HTMLInputElement>('input[data-control="keys"]')
  const bucketsInput = root.querySelector<HTMLInputElement>('input[data-control="buckets"]')
  const seedInput = root.querySelector<HTMLInputElement>('input[data-control="seed"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !keysInput || !bucketsInput || !seedInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let keys = Number(keysInput.value)
  let buckets = Number(bucketsInput.value)
  let seed = Number(seedInput.value)

  const hash = (i: number) => {
    const v = Math.sin((i + 1) * (12.9898 + seed * 37.719)) * 43758.5453
    return v - Math.floor(v)
  }

  const render = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f2efe6"
    ctx.fillRect(0, 0, w, h)

    const counts = new Array(Math.max(1, Math.floor(buckets))).fill(0)
    for (let i = 0; i < Math.floor(keys); i++) {
      const b = Math.min(counts.length - 1, Math.floor(hash(i) * counts.length))
      counts[b] += 1
    }

    const maxCount = Math.max(...counts, 1)
    const barW = (w * 0.9) / counts.length
    const baseY = h * 0.82
    let collisions = 0
    for (let i = 0; i < counts.length; i++) {
      const c = counts[i]
      if (c > 1) collisions += c - 1
      const bh = (c / maxCount) * h * 0.52
      ctx.fillStyle = c <= 1 ? "#6f8fa3" : "#b08f1d"
      ctx.fillRect(w * 0.05 + i * barW, baseY - bh, barW - 2, bh)
    }

    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `keys=${Math.floor(keys)} buckets=${Math.floor(buckets)} load=${(keys / Math.max(1, buckets)).toFixed(2)}`,
      12,
      22,
    )
    ctx.fillText(`collisions=${collisions}`, 12, 40)
  }

  const onKeys = () => {
    keys = clamp(Number(keysInput.value), 4, 320)
    render()
  }
  const onBuckets = () => {
    buckets = clamp(Number(bucketsInput.value), 4, 64)
    render()
  }
  const onSeed = () => {
    seed = clamp(Number(seedInput.value), 0, 1)
    render()
  }
  const onReset = () => {
    keys = 120
    buckets = 24
    seed = 0.41
    keysInput.value = "120"
    bucketsInput.value = "24"
    seedInput.value = "0.41"
    render()
  }

  keysInput.addEventListener("input", onKeys)
  bucketsInput.addEventListener("input", onBuckets)
  seedInput.addEventListener("input", onSeed)
  reset.addEventListener("click", onReset)
  render()

  return {
    destroy: () => {
      keysInput.removeEventListener("input", onKeys)
      bucketsInput.removeEventListener("input", onBuckets)
      seedInput.removeEventListener("input", onSeed)
      reset.removeEventListener("click", onReset)
    },
  }
}

const mountExposingNSMutableArray = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const itemsInput = root.querySelector<HTMLInputElement>('input[data-control="items"]')
  const growthInput = root.querySelector<HTMLInputElement>('input[data-control="growth"]')
  const reserveInput = root.querySelector<HTMLInputElement>('input[data-control="reserve"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !itemsInput || !growthInput || !reserveInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let items = Number(itemsInput.value)
  let growth = Number(growthInput.value)
  let reserve = Number(reserveInput.value)

  const render = () => {
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "#f1eee5"
    ctx.fillRect(0, 0, w, h)

    let capacity = Math.max(1, Math.floor(reserve))
    const samples: { index: number; capacity: number }[] = []
    for (let i = 0; i < Math.floor(items); i++) {
      if (i >= capacity) {
        capacity = Math.max(capacity + 1, Math.ceil(capacity * growth))
      }
      if (i % 4 === 0 || i === Math.floor(items) - 1) {
        samples.push({ index: i, capacity })
      }
    }

    const maxCap = Math.max(...samples.map((s) => s.capacity), 1)
    const chartX = w * 0.08
    const chartY = h * 0.82
    const chartW = w * 0.84
    const chartH = h * 0.6

    ctx.strokeStyle = "rgba(15, 40, 69, 0.25)"
    ctx.strokeRect(chartX, chartY - chartH, chartW, chartH)

    ctx.strokeStyle = "#0f3f6c"
    ctx.lineWidth = 2
    ctx.beginPath()
    for (let i = 0; i < samples.length; i++) {
      const x = chartX + (samples[i].index / Math.max(1, items - 1)) * chartW
      const y = chartY - (samples[i].capacity / maxCap) * chartH
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()

    const waste = Math.max(0, capacity - items)
    ctx.fillStyle = "#0f2845"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(`items=${Math.floor(items)} capacity=${capacity} waste=${waste}`, 12, 22)
    ctx.fillText(`growth=${growth.toFixed(2)} reserve=${Math.floor(reserve)}`, 12, 40)
  }

  const onItems = () => {
    items = clamp(Number(itemsInput.value), 1, 500)
    render()
  }
  const onGrowth = () => {
    growth = clamp(Number(growthInput.value), 1.1, 2.4)
    render()
  }
  const onReserve = () => {
    reserve = clamp(Number(reserveInput.value), 1, 64)
    render()
  }
  const onReset = () => {
    items = 180
    growth = 1.65
    reserve = 8
    itemsInput.value = "180"
    growthInput.value = "1.65"
    reserveInput.value = "8"
    render()
  }

  itemsInput.addEventListener("input", onItems)
  growthInput.addEventListener("input", onGrowth)
  reserveInput.addEventListener("input", onReserve)
  reset.addEventListener("click", onReset)
  render()

  return {
    destroy: () => {
      itemsInput.removeEventListener("input", onItems)
      growthInput.removeEventListener("input", onGrowth)
      reserveInput.removeEventListener("input", onReserve)
      reset.removeEventListener("click", onReset)
    },
  }
}

const mountExploringGPGPUOnIOS = (root: HTMLElement): SimController | null => {
  const canvas = root.querySelector<HTMLCanvasElement>(".sim-canvas")
  const particlesInput = root.querySelector<HTMLInputElement>('input[data-control="particles"]')
  const forceInput = root.querySelector<HTMLInputElement>('input[data-control="force"]')
  const dampingInput = root.querySelector<HTMLInputElement>('input[data-control="damping"]')
  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  if (!canvas || !particlesInput || !forceInput || !dampingInput || !reset) return null

  const ctx = canvas.getContext("2d")
  if (!ctx) {
    setFallback(root, "Canvas API is unavailable in this browser.")
    return null
  }

  let count = Math.floor(Number(particlesInput.value))
  let force = Number(forceInput.value)
  let damping = Number(dampingInput.value)
  let px = new Float32Array(0)
  let py = new Float32Array(0)
  let vx = new Float32Array(0)
  let vy = new Float32Array(0)
  let time = 0
  let raf = 0
  let running = false

  const reseed = () => {
    px = new Float32Array(count)
    py = new Float32Array(count)
    vx = new Float32Array(count)
    vy = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      px[i] = Math.random()
      py[i] = Math.random()
      vx[i] = (Math.random() - 0.5) * 0.002
      vy[i] = (Math.random() - 0.5) * 0.002
    }
  }

  const draw = () => {
    if (!running) return
    const { dpr } = resizeCanvas(canvas)
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = "rgba(7, 11, 17, 0.2)"
    ctx.fillRect(0, 0, w, h)

    for (let i = 0; i < count; i++) {
      const x = px[i] * 2 - 1
      const y = py[i] * 2 - 1
      const ax = (-y + Math.sin(y * 8 + time) * 0.4) * force * 0.00035
      const ay = (x + Math.cos(x * 8 - time) * 0.4) * force * 0.00035
      vx[i] = vx[i] * damping + ax
      vy[i] = vy[i] * damping + ay
      px[i] += vx[i]
      py[i] += vy[i]

      if (px[i] < 0 || px[i] > 1 || py[i] < 0 || py[i] > 1) {
        px[i] = Math.random()
        py[i] = Math.random()
        vx[i] = 0
        vy[i] = 0
      }

      ctx.fillStyle = "rgba(145, 210, 255, 0.68)"
      ctx.fillRect(px[i] * w, py[i] * h, 1.6, 1.6)
    }

    ctx.fillStyle = "rgba(234,224,207,0.86)"
    ctx.font = '500 12px "IBM Plex Mono", monospace'
    ctx.fillText(
      `particles=${count} force=${force.toFixed(2)} damping=${damping.toFixed(3)}`,
      12,
      22,
    )
    ctx.fillText("CPU implementation inspired by GPU-style parallel updates", 12, 40)

    time += 0.016
    if (running) {
      raf = requestAnimationFrame(draw)
    }
  }

  const onParticles = () => {
    count = Math.floor(clamp(Number(particlesInput.value), 100, 4000))
    reseed()
  }
  const onForce = () => {
    force = clamp(Number(forceInput.value), 0.1, 3)
  }
  const onDamping = () => {
    damping = clamp(Number(dampingInput.value), 0.85, 0.999)
  }
  const onReset = () => {
    count = 1400
    force = 1.1
    damping = 0.965
    particlesInput.value = "1400"
    forceInput.value = "1.1"
    dampingInput.value = "0.965"
    reseed()
  }

  const start = () => {
    running = true
    if (raf === 0) {
      raf = requestAnimationFrame(draw)
    }
  }

  const stop = () => {
    running = false
    cancelAnimationFrame(raf)
    raf = 0
  }

  const detachActivity = registerSceneActivity(root, start, stop)

  particlesInput.addEventListener("input", onParticles)
  forceInput.addEventListener("input", onForce)
  dampingInput.addEventListener("input", onDamping)
  reset.addEventListener("click", onReset)
  reseed()
  ctx.fillStyle = "#070b11"
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

  return {
    destroy: () => {
      particlesInput.removeEventListener("input", onParticles)
      forceInput.removeEventListener("input", onForce)
      dampingInput.removeEventListener("input", onDamping)
      reset.removeEventListener("click", onReset)
      detachActivity()
      stop()
    },
  }
}

const generatedModuleSceneRegistry = buildGeneratedSceneRegistry()

const sceneRegistry: Record<string, SceneDefinition> = {
  moon: {
    id: "moon",
    renderer: "canvas",
    mount: mountMoon,
    presets: GENERATED_SCENE_PRESETS.moon ?? {},
  },
  airfoil: {
    id: "airfoil",
    renderer: "canvas",
    mount: mountAirfoil,
    presets: GENERATED_SCENE_PRESETS.airfoil ?? {},
  },
  bicycle: {
    id: "bicycle",
    renderer: "canvas",
    mount: mountBicycle,
    presets: GENERATED_SCENE_PRESETS.bicycle ?? {},
  },
  sound: {
    id: "sound",
    renderer: "canvas",
    mount: mountSound,
    presets: GENERATED_SCENE_PRESETS.sound ?? {},
  },
  "mechanical-watch": {
    id: "mechanical-watch",
    renderer: "canvas",
    mount: mountMechanicalWatch,
    presets: GENERATED_SCENE_PRESETS["mechanical-watch"] ?? {},
  },
  gps: {
    id: "gps",
    renderer: "canvas",
    mount: mountGPS,
    presets: GENERATED_SCENE_PRESETS.gps ?? {},
  },
  "curves-and-surfaces": {
    id: "curves-and-surfaces",
    renderer: "canvas",
    mount: mountCurvesAndSurfaces,
    presets: GENERATED_SCENE_PRESETS["curves-and-surfaces"] ?? {},
  },
  gears: {
    id: "gears",
    renderer: "canvas",
    mount: mountGears,
    presets: GENERATED_SCENE_PRESETS.gears ?? {},
  },
  "earth-and-sun": {
    id: "earth-and-sun",
    renderer: "canvas",
    mount: mountEarthAndSun,
    presets: GENERATED_SCENE_PRESETS["earth-and-sun"] ?? {},
  },
  tesseract: {
    id: "tesseract",
    renderer: "canvas",
    mount: mountTesseract,
    presets: GENERATED_SCENE_PRESETS.tesseract ?? {},
  },
  "color-spaces": {
    id: "color-spaces",
    renderer: "canvas",
    mount: mountColorSpaces,
    presets: GENERATED_SCENE_PRESETS["color-spaces"] ?? {},
  },
  "alpha-compositing": {
    id: "alpha-compositing",
    renderer: "canvas",
    mount: mountAlphaCompositing,
    presets: GENERATED_SCENE_PRESETS["alpha-compositing"] ?? {},
  },
  "floating-point": {
    id: "floating-point",
    renderer: "canvas",
    mount: mountFloatingPoint,
    presets: GENERATED_SCENE_PRESETS["floating-point"] ?? {},
  },
  "naval-architecture": {
    id: "naval-architecture",
    renderer: "canvas",
    mount: mountNavalArchitecture,
    presets: GENERATED_SCENE_PRESETS["naval-architecture"] ?? {},
  },
  "internal-combustion-engine": {
    id: "internal-combustion-engine",
    renderer: "canvas",
    mount: mountInternalCombustionEngine,
    presets: GENERATED_SCENE_PRESETS["internal-combustion-engine"] ?? {},
  },
  "cameras-and-lenses": {
    id: "cameras-and-lenses",
    renderer: "canvas",
    mount: mountCamerasAndLenses,
    presets: GENERATED_SCENE_PRESETS["cameras-and-lenses"] ?? {},
  },
  "lights-and-shadows": {
    id: "lights-and-shadows",
    renderer: "canvas",
    mount: mountLightsAndShadows,
    presets: GENERATED_SCENE_PRESETS["lights-and-shadows"] ?? {},
  },
  "mesh-transforms": {
    id: "mesh-transforms",
    renderer: "canvas",
    mount: mountMeshTransforms,
    presets: GENERATED_SCENE_PRESETS["mesh-transforms"] ?? {},
  },
  "drawing-bezier-curves": {
    id: "drawing-bezier-curves",
    renderer: "canvas",
    mount: mountDrawingBezierCurves,
    presets: GENERATED_SCENE_PRESETS["drawing-bezier-curves"] ?? {},
  },
  "exposing-nsdictionary": {
    id: "exposing-nsdictionary",
    renderer: "canvas",
    mount: mountExposingNSDictionary,
    presets: GENERATED_SCENE_PRESETS["exposing-nsdictionary"] ?? {},
  },
  "exposing-nsmutablearray": {
    id: "exposing-nsmutablearray",
    renderer: "canvas",
    mount: mountExposingNSMutableArray,
    presets: GENERATED_SCENE_PRESETS["exposing-nsmutablearray"] ?? {},
  },
  "exploring-gpgpu-on-ios": {
    id: "exploring-gpgpu-on-ios",
    renderer: "canvas",
    mount: mountExploringGPGPUOnIOS,
    presets: GENERATED_SCENE_PRESETS["exploring-gpgpu-on-ios"] ?? {},
  },
  "hysteresis-slack": {
    id: "hysteresis-slack",
    renderer: "svg",
    mount: mountHysteresisSlackScene,
    presets: GENERATED_SCENE_PRESETS["hysteresis-slack"] ?? {},
  },
  "immersive-linear-algebra": {
    id: "immersive-linear-algebra",
    renderer: "svg",
    mount: mountImmersiveLinearAlgebraScene,
    presets: GENERATED_SCENE_PRESETS["immersive-linear-algebra"] ?? {},
  },
  "load-balancing": {
    id: "load-balancing",
    renderer: "svg",
    mount: mountLoadBalancingScene,
    presets: GENERATED_SCENE_PRESETS["load-balancing"] ?? {},
  },
  "memory-allocation": {
    id: "memory-allocation",
    renderer: "svg",
    mount: mountMemoryAllocationScene,
    presets: GENERATED_SCENE_PRESETS["memory-allocation"] ?? {},
  },
  "reading-qr-codes-without-a-computer": {
    id: "reading-qr-codes-without-a-computer",
    renderer: "canvas",
    mount: mountReadingQrCodesScene,
    presets: GENERATED_SCENE_PRESETS["reading-qr-codes-without-a-computer"] ?? {},
  },
  "rigid-body-collisions": {
    id: "rigid-body-collisions",
    renderer: "canvas",
    mount: mountRigidBodyCollisionsScene,
    presets: GENERATED_SCENE_PRESETS["rigid-body-collisions"] ?? {},
  },
  "decision-trees": {
    id: "decision-trees",
    renderer: "svg",
    mount: mountDecisionTreesScene,
    presets: GENERATED_SCENE_PRESETS["decision-trees"] ?? {},
  },
  "double-descent": {
    id: "double-descent",
    renderer: "svg",
    mount: mountDoubleDescentScene,
    presets: GENERATED_SCENE_PRESETS["double-descent"] ?? {},
  },
  "double-descent-2": {
    id: "double-descent-2",
    renderer: "svg",
    mount: mountDoubleDescent2Scene,
    presets: GENERATED_SCENE_PRESETS["double-descent-2"] ?? {},
  },
  "linear-regression": {
    id: "linear-regression",
    renderer: "svg",
    mount: mountLinearRegressionScene,
    presets: GENERATED_SCENE_PRESETS["linear-regression"] ?? {},
  },
  "logistic-regression": {
    id: "logistic-regression",
    renderer: "svg",
    mount: mountLogisticRegressionScene,
    presets: GENERATED_SCENE_PRESETS["logistic-regression"] ?? {},
  },
  "precision-recall": {
    id: "precision-recall",
    renderer: "svg",
    mount: mountPrecisionRecallScene,
    presets: GENERATED_SCENE_PRESETS["precision-recall"] ?? {},
  },
  "random-forest": {
    id: "random-forest",
    renderer: "svg",
    mount: mountRandomForestScene,
    presets: GENERATED_SCENE_PRESETS["random-forest"] ?? {},
  },
  "roc-auc": {
    id: "roc-auc",
    renderer: "svg",
    mount: mountRocAucScene,
    presets: GENERATED_SCENE_PRESETS["roc-auc"] ?? {},
  },
  "the-bias-variance-tradeoff": {
    id: "the-bias-variance-tradeoff",
    renderer: "svg",
    mount: mountBiasVarianceScene,
    presets: GENERATED_SCENE_PRESETS["the-bias-variance-tradeoff"] ?? {},
  },
  "train-test-and-validation-sets": {
    id: "train-test-and-validation-sets",
    renderer: "svg",
    mount: mountTrainValidationScene,
    presets: GENERATED_SCENE_PRESETS["train-test-and-validation-sets"] ?? {},
  },
  ...generatedModuleSceneRegistry,
}

const mountByScene = (root: HTMLElement): SimController | null => {
  const sceneId = root.dataset.simScene
  if (!sceneId) return null
  return sceneRegistry[sceneId]?.mount(root) ?? null
}

const setupInteractiveSims = () => {
  const mounted: SimController[] = []
  const nodes = document.querySelectorAll<HTMLElement>(".interactive-sim[data-sim-scene]")
  for (const root of nodes) {
    setupRangeOutputs(root)
    const controller = mountByScene(root)
    if (controller) mounted.push(controller)
  }

  setupModuleArticles()
  setupStoryArticles(sceneRegistry)

  window.addCleanup(() => {
    for (const controller of mounted) {
      controller.destroy()
    }
  })
}

document.addEventListener("nav", () => {
  setupInteractiveSims()
})
