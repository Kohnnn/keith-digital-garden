import * as d3 from "d3"

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
import {
  applyBasisTransform,
  gpsGeometryScore,
  qrBitAt,
  resolveElasticCollision,
} from "./geometryMath"
import {
  applyRequest,
  decayServerLoad,
  firstFitAllocation,
  fragmentationRatio,
  nextRoundRobinServer,
  pickLeastConnections,
} from "./systemMath"
import type { SimController } from "./storyRuntime"

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const ensureSVG = (root: HTMLElement) => {
  const stage = root.querySelector<HTMLElement>(".interactive-sim-stage")
  if (!stage) return null
  root.querySelector("canvas.sim-canvas")?.remove()
  let svg = stage.querySelector<SVGSVGElement>("svg.sim-svg")
  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.classList.add("sim-svg")
    stage.appendChild(svg)
  }
  svg.setAttribute("width", String(Math.max(stage.clientWidth, 320)))
  svg.setAttribute("height", String(Math.max(stage.clientHeight, 260)))
  svg.setAttribute(
    "viewBox",
    `0 0 ${Math.max(stage.clientWidth, 320)} ${Math.max(stage.clientHeight, 260)}`,
  )
  return { svg, width: Math.max(stage.clientWidth, 320), height: Math.max(stage.clientHeight, 260) }
}

const getCanvas = (root: HTMLElement) => root.querySelector<HTMLCanvasElement>("canvas.sim-canvas")

const resizeCanvas = (canvas: HTMLCanvasElement) => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const rect = canvas.getBoundingClientRect()
  canvas.width = Math.max(1, Math.round(rect.width * dpr))
  canvas.height = Math.max(1, Math.round(rect.height * dpr))
  return { dpr }
}

const getInput = (root: HTMLElement, controlId: string) =>
  root.querySelector<HTMLInputElement>(`input[data-control="${controlId}"]`)

const bindRedraw = (
  root: HTMLElement,
  controls: string[],
  redraw: () => void,
  onReset?: () => void,
): SimController => {
  const listeners: Array<() => void> = []
  for (const control of controls) {
    const input = getInput(root, control)
    if (!input) continue
    const handler = () => redraw()
    input.addEventListener("input", handler)
    listeners.push(() => input.removeEventListener("input", handler))
  }

  const reset = root.querySelector<HTMLButtonElement>('button[data-control="reset"]')
  const onResetClick = () => {
    onReset?.()
    redraw()
  }
  if (reset) {
    reset.addEventListener("click", onResetClick)
    listeners.push(() => reset.removeEventListener("click", onResetClick))
  }

  const onResize = () => redraw()
  window.addEventListener("resize", onResize)
  listeners.push(() => window.removeEventListener("resize", onResize))
  redraw()

  return {
    destroy: () => {
      for (const dispose of listeners) dispose()
    },
  }
}

const seededValue = (index: number, spread: number, offset = 0) =>
  Math.sin(index * 0.91 + offset) * spread + Math.cos(index * 0.47 + offset) * spread * 0.35

const sampleClassification = (
  separation: number,
  noise: number,
  imbalance: number,
): ClassifiedSample[] =>
  Array.from({ length: 36 }, (_, index) => {
    const actual = index / 35 > imbalance
    const center = actual ? 0.35 + separation * 0.4 : 0.65 - separation * 0.4
    const wobble = seededValue(index, noise * 0.35, separation)
    return {
      actual,
      score: clamp(center + wobble, 0.01, 0.99),
    }
  })

const renderAxis = (
  selection: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  width: number,
  height: number,
) => {
  selection
    .append("line")
    .attr("x1", 48)
    .attr("y1", height - 34)
    .attr("x2", width - 24)
    .attr("y2", height - 34)
    .attr("stroke", "rgba(234,224,207,0.35)")
  selection
    .append("line")
    .attr("x1", 48)
    .attr("y1", 20)
    .attr("x2", 48)
    .attr("y2", height - 34)
    .attr("stroke", "rgba(234,224,207,0.35)")
}

const mountLinearRegression = (root: HTMLElement): SimController | null => {
  const slopeInput = getInput(root, "slope")
  const interceptInput = getInput(root, "intercept")
  const spreadInput = getInput(root, "spread")
  if (!slopeInput || !interceptInput || !spreadInput) return null

  return bindRedraw(root, ["slope", "intercept", "spread"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const slope = Number(slopeInput.value)
    const intercept = Number(interceptInput.value)
    const spread = Number(spreadInput.value)
    const points = Array.from({ length: 14 }, (_, index) => ({
      x: -1 + (2 * index) / 13,
      y: 0.7 * (-1 + (2 * index) / 13) + 0.2 + seededValue(index, spread, 0.5),
    }))
    const fit = fitLinearRegression(points)
    const mse = meanSquaredError(points, slope, intercept)
    const xScale = d3
      .scaleLinear()
      .domain([-1.2, 1.2])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([-1.6, 1.6])
      .range([height - 42, 26])

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
      .attr("stroke", "rgba(111, 143, 163, 0.45)")
      .attr("stroke-width", 1.25)
      .attr("stroke-dasharray", "4 6")

    selection
      .append("line")
      .attr("x1", xScale(-1))
      .attr("y1", yScale(-slope + intercept))
      .attr("x2", xScale(1))
      .attr("y2", yScale(slope + intercept))
      .attr("stroke", "#e6b85c")
      .attr("stroke-width", 2.4)

    selection
      .append("line")
      .attr("x1", xScale(-1))
      .attr("y1", yScale(-fit.slope + fit.intercept))
      .attr("x2", xScale(1))
      .attr("y2", yScale(fit.slope + fit.intercept))
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 1.6)

    selection
      .selectAll("circle.data-point")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (point) => xScale(point.x))
      .attr("cy", (point) => yScale(point.y))
      .attr("r", 4)
      .attr("fill", "#f3ebdd")
      .attr("stroke", "#0f3f6c")

    selection
      .append("text")
      .attr("x", 56)
      .attr("y", 18)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text(`slope=${slope.toFixed(2)} intercept=${intercept.toFixed(2)} mse=${mse.toFixed(3)}`)
  })
}

const mountLogisticRegression = (root: HTMLElement): SimController | null => {
  const weightInput = getInput(root, "weight")
  const biasInput = getInput(root, "bias")
  const thresholdInput = getInput(root, "threshold")
  if (!weightInput || !biasInput || !thresholdInput) return null

  return bindRedraw(root, ["weight", "bias", "threshold"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const weight = Number(weightInput.value)
    const bias = Number(biasInput.value)
    const threshold = Number(thresholdInput.value)
    const xScale = d3
      .scaleLinear()
      .domain([-3, 3])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - 42, 26])
    const values = d3.range(-3, 3.05, 0.1).map((x) => ({ x, y: sigmoid(weight * x + bias) }))

    selection
      .append("path")
      .datum(values)
      .attr(
        "d",
        d3
          .line<{ x: number; y: number }>()
          .x((point) => xScale(point.x))
          .y((point) => yScale(point.y)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.5)

    selection
      .append("line")
      .attr("x1", 56)
      .attr("x2", width - 28)
      .attr("y1", yScale(threshold))
      .attr("y2", yScale(threshold))
      .attr("stroke", "#e6b85c")
      .attr("stroke-dasharray", "6 6")

    const points = d3.range(-2.7, 2.8, 0.3).map((x, index) => ({
      x,
      y: sigmoid(weight * x + bias),
      actual: index % 2 === 0,
    }))
    selection
      .selectAll("circle.sample")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", (point) => xScale(point.x))
      .attr("cy", (point) => yScale(point.y))
      .attr("r", 3.5)
      .attr("fill", (point) => (point.actual ? "#eae0cf" : "#0f3f6c"))
      .attr("stroke", "#73c5ff")
  })
}

const mountPrecisionRecall = (root: HTMLElement): SimController | null => {
  const thresholdInput = getInput(root, "threshold")
  const imbalanceInput = getInput(root, "imbalance")
  const noiseInput = getInput(root, "noise")
  if (!thresholdInput || !imbalanceInput || !noiseInput) return null

  return bindRedraw(root, ["threshold", "imbalance", "noise"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const threshold = Number(thresholdInput.value)
    const imbalance = Number(imbalanceInput.value)
    const noise = Number(noiseInput.value)
    const samples = sampleClassification(0.65, noise, imbalance)
    const curve = buildPrecisionRecallCurve(samples, d3.range(0.05, 0.96, 0.05))
    const point = curve.reduce((best, current) =>
      Math.abs(current.threshold - threshold) < Math.abs(best.threshold - threshold)
        ? current
        : best,
    )
    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - 42, 26])

    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<{ precision: number; recall: number }>()
          .x((entry) => xScale(entry.recall))
          .y((entry) => yScale(entry.precision)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.3)

    selection
      .append("circle")
      .attr("cx", xScale(point.recall))
      .attr("cy", yScale(point.precision))
      .attr("r", 5)
      .attr("fill", "#e6b85c")
  })
}

const mountRocAuc = (root: HTMLElement): SimController | null => {
  const thresholdInput = getInput(root, "threshold")
  const separationInput = getInput(root, "separation")
  const noiseInput = getInput(root, "noise")
  if (!thresholdInput || !separationInput || !noiseInput) return null

  return bindRedraw(root, ["threshold", "separation", "noise"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const threshold = Number(thresholdInput.value)
    const separation = Number(separationInput.value)
    const noise = Number(noiseInput.value)
    const samples = sampleClassification(separation, noise, 0.5)
    const curve = buildRocCurve(samples, d3.range(0.05, 0.96, 0.05))
    const point = curve.reduce((best, current) =>
      Math.abs(current.threshold - threshold) < Math.abs(best.threshold - threshold)
        ? current
        : best,
    )
    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - 42, 26])

    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<{ tpr: number; fpr: number }>()
          .x((entry) => xScale(entry.fpr))
          .y((entry) => yScale(entry.tpr)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.3)

    selection
      .append("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(0))
      .attr("x2", xScale(1))
      .attr("y2", yScale(1))
      .attr("stroke", "rgba(234,224,207,0.25)")
      .attr("stroke-dasharray", "6 6")

    selection
      .append("circle")
      .attr("cx", xScale(point.fpr))
      .attr("cy", yScale(point.tpr))
      .attr("r", 5)
      .attr("fill", "#e6b85c")
  })
}

const mountDecisionTrees = (root: HTMLElement): SimController | null => {
  const thresholdInput = getInput(root, "threshold")
  const noiseInput = getInput(root, "noise")
  const depthInput = getInput(root, "depth")
  if (!thresholdInput || !noiseInput || !depthInput) return null

  return bindRedraw(root, ["threshold", "noise", "depth"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const threshold = Number(thresholdInput.value)
    const noise = Number(noiseInput.value)
    const depth = Number(depthInput.value)
    const samples = Array.from({ length: 16 }, (_, index) => {
      const feature = index / 15
      const label = feature + seededValue(index, noise * 0.25, 0.3) > threshold
      return { feature, label, y: 0.2 + (index % 4) * 0.18 }
    })
    const split = bestSplit1D(samples)
    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([60, width * 0.58])
    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - 38, 28])
    renderAxis(selection, width * 0.62, height)

    selection
      .append("line")
      .attr("x1", xScale(split.threshold))
      .attr("x2", xScale(split.threshold))
      .attr("y1", yScale(0))
      .attr("y2", yScale(1))
      .attr("stroke", "#e6b85c")
      .attr("stroke-dasharray", "6 6")

    selection
      .selectAll("circle.split-point")
      .data(samples)
      .enter()
      .append("circle")
      .attr("cx", (sample) => xScale(sample.feature))
      .attr("cy", (sample) => yScale(sample.y))
      .attr("r", 4)
      .attr("fill", (sample) => (sample.label ? "#73c5ff" : "#eae0cf"))
      .attr("stroke", "#0f3f6c")

    const treeStartX = width * 0.72
    const treeStartY = 54
    selection
      .append("text")
      .attr("x", treeStartX - 24)
      .attr("y", 18)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text(`depth=${depth} best split=${split.threshold.toFixed(2)}`)

    for (let level = 0; level < depth; level++) {
      const nodes = 2 ** level
      for (let node = 0; node < nodes; node++) {
        const x = treeStartX + (node - (nodes - 1) / 2) * (90 / Math.max(level + 1, 1))
        const y = treeStartY + level * 54
        selection.append("circle").attr("cx", x).attr("cy", y).attr("r", 11).attr("fill", "#0f3f6c")
        if (level > 0) {
          const parentNodes = 2 ** (level - 1)
          const parentIndex = Math.floor(node / 2)
          const parentX =
            treeStartX + (parentIndex - (parentNodes - 1) / 2) * (90 / Math.max(level, 1))
          const parentY = treeStartY + (level - 1) * 54
          selection
            .append("line")
            .attr("x1", parentX)
            .attr("y1", parentY)
            .attr("x2", x)
            .attr("y2", y)
            .attr("stroke", "rgba(234,224,207,0.3)")
        }
      }
    }
  })
}

const mountRandomForest = (root: HTMLElement): SimController | null => {
  const treesInput = getInput(root, "trees")
  const featuresInput = getInput(root, "features")
  const noiseInput = getInput(root, "noise")
  if (!treesInput || !featuresInput || !noiseInput) return null

  return bindRedraw(root, ["trees", "features", "noise"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const trees = Number(treesInput.value)
    const features = Number(featuresInput.value)
    const noise = Number(noiseInput.value)
    const votes = Array.from(
      { length: trees },
      (_, index) => seededValue(index, 0.5 + noise, features * 0.2) > 0,
    )
    const outcome = ensembleVote(votes)
    const xScale = d3
      .scaleBand()
      .domain(votes.map((_, index) => String(index)))
      .range([56, width - 28])
      .padding(0.18)
    const yBase = height - 44

    selection
      .selectAll("rect.vote")
      .data(votes)
      .enter()
      .append("rect")
      .attr("x", (_, index) => xScale(String(index)) ?? 56)
      .attr("y", (vote) => (vote ? yBase - 84 : yBase - 28))
      .attr("width", xScale.bandwidth())
      .attr("height", (vote) => (vote ? 84 : 28))
      .attr("fill", (vote) => (vote ? "#73c5ff" : "#eae0cf"))

    selection
      .append("text")
      .attr("x", 56)
      .attr("y", 18)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text(`trees=${trees} features=${features} vote=${outcome ? "positive" : "negative"}`)
  })
}

const mountBiasVariance = (root: HTMLElement): SimController | null => {
  const complexityInput = getInput(root, "complexity")
  const dataInput = getInput(root, "data")
  const noiseInput = getInput(root, "noise")
  if (!complexityInput || !dataInput || !noiseInput) return null

  return bindRedraw(root, ["complexity", "data", "noise"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const complexity = Number(complexityInput.value)
    const data = Number(dataInput.value)
    const noise = Number(noiseInput.value)
    const curve = d3.range(0.2, 3.05, 0.08).map((x) => {
      const metrics = biasVarianceCurve(x / Math.max(data, 0.4))
      return {
        x,
        bias: metrics.bias + noise * 0.15,
        variance: metrics.variance + noise * 0.05,
        total: metrics.total + noise * 0.2,
      }
    })
    const xScale = d3
      .scaleLinear()
      .domain([0.2, 3])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(curve, (entry) => entry.total)! * 1.1])
      .range([height - 42, 26])

    ;(["bias", "variance", "total"] as const).forEach((key, index) => {
      selection
        .append("path")
        .datum(curve)
        .attr(
          "d",
          d3
            .line<(typeof curve)[number]>()
            .x((entry) => xScale(entry.x))
            .y((entry) => yScale(entry[key])),
        )
        .attr("fill", "none")
        .attr("stroke", ["#eae0cf", "#73c5ff", "#e6b85c"][index])
        .attr("stroke-width", key === "total" ? 2.6 : 1.8)
      const active = curve.reduce((best, current) =>
        Math.abs(current.x - complexity) < Math.abs(best.x - complexity) ? current : best,
      )
      selection
        .append("circle")
        .attr("cx", xScale(active.x))
        .attr("cy", yScale(active[key]))
        .attr("r", key === "total" ? 4.5 : 3.5)
        .attr("fill", ["#eae0cf", "#73c5ff", "#e6b85c"][index])
    })
  })
}

const mountDoubleDescentGeneric = (
  root: HTMLElement,
  capacityId: string,
  pivotId: string,
  noiseId: string,
): SimController | null => {
  const capacityInput = getInput(root, capacityId)
  const pivotInput = getInput(root, pivotId)
  const noiseInput = getInput(root, noiseId)
  if (!capacityInput || !pivotInput || !noiseInput) return null

  return bindRedraw(root, [capacityId, pivotId, noiseId], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const capacity = Number(capacityInput.value)
    const pivot = Number(pivotInput.value)
    const noise = Number(noiseInput.value)
    const curve = d3.range(0.2, 3.25, 0.05).map((x) => ({
      x,
      y: doubleDescentCurve(x, pivot) + noise * 0.4,
    }))
    const xScale = d3
      .scaleLinear()
      .domain([0.2, 3.2])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(curve, (entry) => entry.y)! * 1.1])
      .range([height - 42, 26])

    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<(typeof curve)[number]>()
          .x((entry) => xScale(entry.x))
          .y((entry) => yScale(entry.y)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.6)

    selection
      .append("line")
      .attr("x1", xScale(pivot))
      .attr("x2", xScale(pivot))
      .attr("y1", yScale(0))
      .attr("y2", yScale(d3.max(curve, (entry) => entry.y)!))
      .attr("stroke", "rgba(234,224,207,0.35)")
      .attr("stroke-dasharray", "6 6")

    const active = curve.reduce((best, current) =>
      Math.abs(current.x - capacity) < Math.abs(best.x - capacity) ? current : best,
    )
    selection
      .append("circle")
      .attr("cx", xScale(active.x))
      .attr("cy", yScale(active.y))
      .attr("r", 5)
      .attr("fill", "#e6b85c")
  })
}

const mountTrainValidation = (root: HTMLElement): SimController | null => {
  const trainInput = getInput(root, "train")
  const validationInput = getInput(root, "validation")
  const shiftInput = getInput(root, "shift")
  if (!trainInput || !validationInput || !shiftInput) return null

  return bindRedraw(root, ["train", "validation", "shift"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const train = Number(trainInput.value)
    const validation = Number(validationInput.value)
    const test = Math.max(0.05, 1 - train - validation)
    const shift = Number(shiftInput.value)
    const totalWidth = width - 96
    const startX = 48
    const barY = height * 0.4
    const segments = [
      { label: "train", value: train, color: "#73c5ff" },
      { label: "validation", value: validation, color: "#e6b85c" },
      { label: "test", value: test, color: "#eae0cf" },
    ]
    let offset = startX
    for (const segment of segments) {
      const segmentWidth = totalWidth * segment.value
      selection
        .append("rect")
        .attr("x", offset)
        .attr("y", barY)
        .attr("width", segmentWidth)
        .attr("height", 28)
        .attr("fill", segment.color)
      selection
        .append("text")
        .attr("x", offset + 6)
        .attr("y", barY - 8)
        .attr("fill", "#eae0cf")
        .attr("font-size", 12)
        .text(`${segment.label} ${(segment.value * 100).toFixed(0)}%`)
      offset += segmentWidth
    }

    const generalization = [
      { value: 0.78 - shift * 0.4, color: "#73c5ff" },
      { value: 0.7 - shift * 0.75, color: "#e6b85c" },
    ]
    selection
      .selectAll("rect.metric")
      .data(generalization)
      .enter()
      .append("rect")
      .attr("x", 64)
      .attr("y", (_, index) => barY + 64 + index * 32)
      .attr("width", (entry) => totalWidth * clamp(entry.value, 0.1, 0.95))
      .attr("height", 18)
      .attr("fill", (entry) => entry.color)
  })
}

const mountLoadBalancingChart = (root: HTMLElement): SimController | null => {
  const trafficInput = getInput(root, "traffic")
  const powerInput = getInput(root, "power")
  const burstInput = getInput(root, "burst")
  if (!trafficInput || !powerInput || !burstInput) return null

  return bindRedraw(root, ["traffic", "power", "burst"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const traffic = Number(trafficInput.value)
    const power = Number(powerInput.value)
    const burst = Number(burstInput.value)
    const baseServers = Array.from({ length: 4 }, (_, index) => ({
      id: String(index),
      load: 0,
      power: index % 2 === 0 ? 1 : power,
    }))
    let rrServers = baseServers
    let lcServers = baseServers
    let cursor = 0
    const requests = Array.from({ length: 24 }, (_, index) => ({
      id: `r-${index}`,
      cost: 0.8 + Math.abs(seededValue(index, burst * 2 + 0.3, 0.2)) + traffic * 0.55,
    }))

    for (const request of requests) {
      const rrIndex = nextRoundRobinServer(rrServers, cursor++)
      const lcIndex = pickLeastConnections(lcServers)
      rrServers = rrServers.map((server, index) =>
        index === rrIndex ? applyRequest(server, request) : decayServerLoad(server, 0.94),
      )
      lcServers = lcServers.map((server, index) =>
        index === lcIndex ? applyRequest(server, request) : decayServerLoad(server, 0.94),
      )
    }

    const barWidth = 42
    rrServers.forEach((server, index) => {
      const x = 72 + index * 68
      const barHeight = server.load * 32
      selection
        .append("rect")
        .attr("x", x)
        .attr("y", height - 48 - barHeight)
        .attr("width", barWidth)
        .attr("height", barHeight)
        .attr("fill", "#73c5ff")
    })
    lcServers.forEach((server, index) => {
      const x = width * 0.58 + index * 68
      const barHeight = server.load * 32
      selection
        .append("rect")
        .attr("x", x)
        .attr("y", height - 48 - barHeight)
        .attr("width", barWidth)
        .attr("height", barHeight)
        .attr("fill", "#e6b85c")
    })
    selection
      .append("text")
      .attr("x", 72)
      .attr("y", 24)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text("round robin")
    selection
      .append("text")
      .attr("x", width * 0.58)
      .attr("y", 24)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text("least conn")
  })
}

const mountMemoryAllocationChart = (root: HTMLElement): SimController | null => {
  const requestInput = getInput(root, "request")
  const churnInput = getInput(root, "churn")
  const reserveInput = getInput(root, "reserve")
  if (!requestInput || !churnInput || !reserveInput) return null

  return bindRedraw(root, ["request", "churn", "reserve"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const request = Number(requestInput.value)
    const churn = Number(churnInput.value)
    const reserve = Number(reserveInput.value)
    let blocks = [{ start: 0, size: reserve, used: false }]
    for (let index = 0; index < 16; index++) {
      const requestSize = Math.max(1, Math.round(request + seededValue(index, churn * 2, 0.2)))
      blocks = firstFitAllocation(blocks, requestSize).blocks.map((block) =>
        block.used && seededValue(index, churn, 0.8) > 0.35 ? { ...block, used: false } : block,
      )
    }
    const unitWidth = (width - 96) / reserve
    selection
      .selectAll("rect.block")
      .data(blocks)
      .enter()
      .append("rect")
      .attr("x", (block) => 48 + block.start * unitWidth)
      .attr("y", height * 0.42)
      .attr("width", (block) => Math.max(2, block.size * unitWidth - 2))
      .attr("height", 42)
      .attr("fill", (block) => (block.used ? "#73c5ff" : "#0f3f6c"))
      .attr("stroke", "#eae0cf")
      .attr("stroke-width", 1)

    selection
      .append("text")
      .attr("x", 48)
      .attr("y", 24)
      .attr("fill", "#eae0cf")
      .attr("font-size", 12)
      .text(`fragmentation=${fragmentationRatio(blocks).toFixed(2)} blocks=${blocks.length}`)
  })
}

const mountHysteresisSlackChart = (root: HTMLElement): SimController | null => {
  const slackInput = getInput(root, "slack")
  const dampingInput = getInput(root, "damping")
  const driveInput = getInput(root, "drive")
  if (!slackInput || !dampingInput || !driveInput) return null

  return bindRedraw(root, ["slack", "damping", "drive"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()
    renderAxis(selection, width, height)

    const slack = Number(slackInput.value)
    const damping = Number(dampingInput.value)
    const drive = Number(driveInput.value)
    let response = 0
    const curve = d3.range(0, Math.PI * 2.2, 0.045).map((t) => {
      const input = Math.sin(t * drive)
      const delta = input - response
      if (Math.abs(delta) > slack) {
        response += (delta - Math.sign(delta) * slack) * (1 - damping)
      }
      return { x: input, y: response }
    })
    const xScale = d3
      .scaleLinear()
      .domain([-1.2, 1.2])
      .range([56, width - 28])
    const yScale = d3
      .scaleLinear()
      .domain([-1.2, 1.2])
      .range([height - 42, 26])

    selection
      .append("path")
      .datum(curve)
      .attr(
        "d",
        d3
          .line<{ x: number; y: number }>()
          .x((entry) => xScale(entry.x))
          .y((entry) => yScale(entry.y)),
      )
      .attr("fill", "none")
      .attr("stroke", "#73c5ff")
      .attr("stroke-width", 2.5)
  })
}

const mountImmersiveLinearAlgebraChart = (root: HTMLElement): SimController | null => {
  const scaleInput = getInput(root, "scale")
  const shearInput = getInput(root, "shear")
  const rotationInput = getInput(root, "rotation")
  if (!scaleInput || !shearInput || !rotationInput) return null

  return bindRedraw(root, ["scale", "shear", "rotation"], () => {
    const svgMeta = ensureSVG(root)
    if (!svgMeta) return
    const { svg, width, height } = svgMeta
    const selection = d3.select(svg)
    selection.selectAll("*").remove()

    const scale = Number(scaleInput.value)
    const shear = Number(shearInput.value)
    const rotation = (Number(rotationInput.value) * Math.PI) / 180
    const basisX = { x: Math.cos(rotation) * scale, y: Math.sin(rotation) * scale }
    const basisY = {
      x: -Math.sin(rotation) * scale + shear * 0.35,
      y: Math.cos(rotation) * scale,
    }
    const center = { x: width * 0.5, y: height * 0.52 }
    const unit = Math.min(width, height) * 0.16

    for (let grid = -4; grid <= 4; grid++) {
      const start = applyBasisTransform({ x: -4, y: grid }, basisX, basisY)
      const end = applyBasisTransform({ x: 4, y: grid }, basisX, basisY)
      selection
        .append("line")
        .attr("x1", center.x + start.x * unit)
        .attr("y1", center.y - start.y * unit)
        .attr("x2", center.x + end.x * unit)
        .attr("y2", center.y - end.y * unit)
        .attr("stroke", "rgba(234,224,207,0.18)")
      const vStart = applyBasisTransform({ x: grid, y: -4 }, basisX, basisY)
      const vEnd = applyBasisTransform({ x: grid, y: 4 }, basisX, basisY)
      selection
        .append("line")
        .attr("x1", center.x + vStart.x * unit)
        .attr("y1", center.y - vStart.y * unit)
        .attr("x2", center.x + vEnd.x * unit)
        .attr("y2", center.y - vEnd.y * unit)
        .attr("stroke", "rgba(234,224,207,0.18)")
    }

    ;[
      { vector: basisX, color: "#73c5ff", label: "i" },
      { vector: basisY, color: "#e6b85c", label: "j" },
    ].forEach((entry) => {
      selection
        .append("line")
        .attr("x1", center.x)
        .attr("y1", center.y)
        .attr("x2", center.x + entry.vector.x * unit)
        .attr("y2", center.y - entry.vector.y * unit)
        .attr("stroke", entry.color)
        .attr("stroke-width", 3)
      selection
        .append("text")
        .attr("x", center.x + entry.vector.x * unit + 8)
        .attr("y", center.y - entry.vector.y * unit - 8)
        .attr("fill", entry.color)
        .text(entry.label)
    })
  })
}

const mountReadingQrCanvas = (root: HTMLElement): SimController | null => {
  const canvas = getCanvas(root)
  const maskInput = getInput(root, "mask")
  const noiseInput = getInput(root, "noise")
  const scanInput = getInput(root, "scan")
  if (!canvas || !maskInput || !noiseInput || !scanInput) return null
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  return bindRedraw(root, ["mask", "noise", "scan"], () => {
    const { dpr } = resizeCanvas(canvas)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(dpr, dpr)
    const mask = Number(maskInput.value)
    const noise = Number(noiseInput.value)
    const scan = Number(scanInput.value)
    const size = 21
    const cell = Math.min(canvas.clientWidth, canvas.clientHeight) / (size + 2)
    const offsetX = (canvas.clientWidth - cell * size) / 2
    const offsetY = (canvas.clientHeight - cell * size) / 2

    ctx.fillStyle = "#06090f"
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const bit = qrBitAt(size + mask, x, y)
        const noisy = Math.abs(seededValue(x + y * size, noise * 1.8, mask)) > 0.82 ? 1 - bit : bit
        ctx.fillStyle = noisy ? "#eae0cf" : "#0f3f6c"
        ctx.fillRect(offsetX + x * cell, offsetY + y * cell, cell - 1, cell - 1)
      }
    }
    ctx.fillStyle = "rgba(115,197,255,0.35)"
    ctx.fillRect(offsetX, offsetY + scan * cell, cell * size, cell)
  })
}

const mountRigidBodyCollisionsCanvas = (root: HTMLElement): SimController | null => {
  const canvas = getCanvas(root)
  const restitutionInput = getInput(root, "restitution")
  const massInput = getInput(root, "mass")
  const angleInput = getInput(root, "angle")
  if (!canvas || !restitutionInput || !massInput || !angleInput) return null
  const ctx = canvas.getContext("2d")
  if (!ctx) return null

  return bindRedraw(root, ["restitution", "mass", "angle"], () => {
    const { dpr } = resizeCanvas(canvas)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(dpr, dpr)

    const restitution = Number(restitutionInput.value)
    const massRatio = Number(massInput.value)
    const angle = (Number(angleInput.value) * Math.PI) / 180
    const a = {
      position: { x: 0.32, y: 0.55 },
      velocity: { x: Math.cos(angle), y: Math.sin(angle) },
      mass: 1,
    }
    const b = { position: { x: 0.66, y: 0.45 }, velocity: { x: -0.35, y: 0 }, mass: massRatio }
    const collision = resolveElasticCollision(a, b, { x: 1, y: 0 })

    ctx.fillStyle = "#06090f"
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    ctx.strokeStyle = "rgba(234,224,207,0.18)"
    ctx.beginPath()
    ctx.moveTo(canvas.clientWidth * 0.1, canvas.clientHeight * 0.5)
    ctx.lineTo(canvas.clientWidth * 0.9, canvas.clientHeight * 0.5)
    ctx.stroke()

    const drawBody = (x: number, y: number, radius: number, color: string) => {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }
    drawBody(canvas.clientWidth * a.position.x, canvas.clientHeight * a.position.y, 22, "#73c5ff")
    drawBody(canvas.clientWidth * b.position.x, canvas.clientHeight * b.position.y, 26, "#e6b85c")

    ctx.strokeStyle = "#73c5ff"
    ctx.beginPath()
    ctx.moveTo(canvas.clientWidth * a.position.x, canvas.clientHeight * a.position.y)
    ctx.lineTo(
      canvas.clientWidth * (a.position.x + collision.a.x * restitution * 0.15),
      canvas.clientHeight * (a.position.y - collision.a.y * restitution * 0.15),
    )
    ctx.stroke()
    ctx.strokeStyle = "#e6b85c"
    ctx.beginPath()
    ctx.moveTo(canvas.clientWidth * b.position.x, canvas.clientHeight * b.position.y)
    ctx.lineTo(
      canvas.clientWidth * (b.position.x + collision.b.x * restitution * 0.15),
      canvas.clientHeight * (b.position.y - collision.b.y * restitution * 0.15),
    )
    ctx.stroke()
  })
}

const mountGpsPreviewCanvas = (root: HTMLElement): SimController | null => {
  const canvas = getCanvas(root)
  const spreadInput = getInput(root, "time")
  const noiseInput = getInput(root, "noise")
  if (!canvas || !spreadInput || !noiseInput) return null
  const ctx = canvas.getContext("2d")
  if (!ctx) return null
  let time = 0
  let raf = 0

  const draw = () => {
    const { dpr } = resizeCanvas(canvas)
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.scale(dpr, dpr)
    const spread = Number(spreadInput.value)
    const noise = Number(noiseInput.value)
    const satellites = Array.from({ length: 4 }, (_, index) => ({
      x: 0.5 + Math.cos(time + spread + index * 1.4) * 0.28,
      y: 0.5 + Math.sin(time + spread + index * 1.4) * 0.22,
    }))
    const receiver = {
      x: 0.5 + Math.sin(time * 0.35) * 0.08,
      y: 0.5 + Math.cos(time * 0.32) * 0.06,
    }
    const score = gpsGeometryScore(satellites, receiver)

    ctx.fillStyle = "#06090f"
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    satellites.forEach((satellite) => {
      ctx.strokeStyle = "rgba(115,197,255,0.24)"
      ctx.beginPath()
      ctx.arc(
        satellite.x * canvas.clientWidth,
        satellite.y * canvas.clientHeight,
        (score + noise + 0.12) * canvas.clientWidth * 0.18,
        0,
        Math.PI * 2,
      )
      ctx.stroke()
      ctx.fillStyle = "#73c5ff"
      ctx.beginPath()
      ctx.arc(
        satellite.x * canvas.clientWidth,
        satellite.y * canvas.clientHeight,
        6,
        0,
        Math.PI * 2,
      )
      ctx.fill()
    })
    ctx.fillStyle = "#e6b85c"
    ctx.beginPath()
    ctx.arc(receiver.x * canvas.clientWidth, receiver.y * canvas.clientHeight, 7, 0, Math.PI * 2)
    ctx.fill()
    time += 0.018
    raf = requestAnimationFrame(draw)
  }

  const stop = () => cancelAnimationFrame(raf)
  const start = () => {
    stop()
    draw()
  }
  const detach = (() => {
    let visible = document.visibilityState !== "hidden"
    let inView = true
    const sync = () => {
      if (visible && inView) start()
      else stop()
    }
    const onVisibility = () => {
      visible = document.visibilityState !== "hidden"
      sync()
    }
    document.addEventListener("visibilitychange", onVisibility)
    const observer = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting)
      sync()
    })
    observer.observe(root)
    sync()
    return () => {
      document.removeEventListener("visibilitychange", onVisibility)
      observer.disconnect()
      stop()
    }
  })()
  const binding = bindRedraw(root, ["time", "noise"], start)

  return {
    destroy: () => {
      binding.destroy()
      detach()
    },
  }
}

export const mountLinearRegressionScene = (root: HTMLElement) => mountLinearRegression(root)
export const mountLogisticRegressionScene = (root: HTMLElement) => mountLogisticRegression(root)
export const mountPrecisionRecallScene = (root: HTMLElement) => mountPrecisionRecall(root)
export const mountRocAucScene = (root: HTMLElement) => mountRocAuc(root)
export const mountDecisionTreesScene = (root: HTMLElement) => mountDecisionTrees(root)
export const mountRandomForestScene = (root: HTMLElement) => mountRandomForest(root)
export const mountBiasVarianceScene = (root: HTMLElement) => mountBiasVariance(root)
export const mountDoubleDescentScene = (root: HTMLElement) =>
  mountDoubleDescentGeneric(root, "capacity", "data", "noise")
export const mountDoubleDescent2Scene = (root: HTMLElement) =>
  mountDoubleDescentGeneric(root, "capacity", "width", "noise")
export const mountTrainValidationScene = (root: HTMLElement) => mountTrainValidation(root)
export const mountLoadBalancingScene = (root: HTMLElement) => mountLoadBalancingChart(root)
export const mountMemoryAllocationScene = (root: HTMLElement) => mountMemoryAllocationChart(root)
export const mountHysteresisSlackScene = (root: HTMLElement) => mountHysteresisSlackChart(root)
export const mountImmersiveLinearAlgebraScene = (root: HTMLElement) =>
  mountImmersiveLinearAlgebraChart(root)
export const mountReadingQrCodesScene = (root: HTMLElement) => mountReadingQrCanvas(root)
export const mountRigidBodyCollisionsScene = (root: HTMLElement) =>
  mountRigidBodyCollisionsCanvas(root)
export const mountGpsPreviewScene = (root: HTMLElement) => mountGpsPreviewCanvas(root)
