export type LabeledPoint = {
  x: number
  y: number
}

export type ClassifiedSample = {
  score: number
  actual: boolean
}

export type ConfusionMatrix = {
  tp: number
  fp: number
  tn: number
  fn: number
}

export type SplitCandidate = {
  threshold: number
  impurity: number
  leftCount: number
  rightCount: number
}

export const fitLinearRegression = (points: LabeledPoint[]) => {
  if (points.length === 0) {
    return { slope: 0, intercept: 0 }
  }

  const sumX = points.reduce((total, point) => total + point.x, 0)
  const sumY = points.reduce((total, point) => total + point.y, 0)
  const meanX = sumX / points.length
  const meanY = sumY / points.length

  let numerator = 0
  let denominator = 0
  for (const point of points) {
    const dx = point.x - meanX
    numerator += dx * (point.y - meanY)
    denominator += dx * dx
  }

  const slope = denominator === 0 ? 0 : numerator / denominator
  const intercept = meanY - slope * meanX
  return { slope, intercept }
}

export const predictLinear = (x: number, slope: number, intercept: number) => slope * x + intercept

export const meanSquaredError = (
  points: LabeledPoint[],
  slope: number,
  intercept: number,
): number => {
  if (points.length === 0) return 0
  const error = points.reduce((total, point) => {
    const residual = point.y - predictLinear(point.x, slope, intercept)
    return total + residual * residual
  }, 0)
  return error / points.length
}

export const sigmoid = (value: number) => 1 / (1 + Math.exp(-value))

export const buildConfusionMatrix = (
  samples: ClassifiedSample[],
  threshold: number,
): ConfusionMatrix => {
  const matrix: ConfusionMatrix = { tp: 0, fp: 0, tn: 0, fn: 0 }

  for (const sample of samples) {
    const predicted = sample.score >= threshold
    if (predicted && sample.actual) matrix.tp += 1
    if (predicted && !sample.actual) matrix.fp += 1
    if (!predicted && !sample.actual) matrix.tn += 1
    if (!predicted && sample.actual) matrix.fn += 1
  }

  return matrix
}

export const precision = (matrix: ConfusionMatrix) => {
  const denominator = matrix.tp + matrix.fp
  return denominator === 0 ? 1 : matrix.tp / denominator
}

export const recall = (matrix: ConfusionMatrix) => {
  const denominator = matrix.tp + matrix.fn
  return denominator === 0 ? 1 : matrix.tp / denominator
}

export const falsePositiveRate = (matrix: ConfusionMatrix) => {
  const denominator = matrix.fp + matrix.tn
  return denominator === 0 ? 0 : matrix.fp / denominator
}

export const buildPrecisionRecallCurve = (samples: ClassifiedSample[], thresholds: number[]) =>
  thresholds.map((threshold) => {
    const matrix = buildConfusionMatrix(samples, threshold)
    return {
      threshold,
      precision: precision(matrix),
      recall: recall(matrix),
    }
  })

export const buildRocCurve = (samples: ClassifiedSample[], thresholds: number[]) =>
  thresholds.map((threshold) => {
    const matrix = buildConfusionMatrix(samples, threshold)
    return {
      threshold,
      tpr: recall(matrix),
      fpr: falsePositiveRate(matrix),
    }
  })

export const giniImpurity = (labels: boolean[]) => {
  if (labels.length === 0) return 0
  const positiveRate = labels.filter(Boolean).length / labels.length
  const negativeRate = 1 - positiveRate
  return 1 - positiveRate * positiveRate - negativeRate * negativeRate
}

export const bestSplit1D = (points: Array<{ feature: number; label: boolean }>): SplitCandidate => {
  if (points.length < 2) {
    return {
      threshold: points[0]?.feature ?? 0,
      impurity: 0,
      leftCount: points.length,
      rightCount: 0,
    }
  }

  const sorted = [...points].sort((left, right) => left.feature - right.feature)
  let best: SplitCandidate = {
    threshold: sorted[0].feature,
    impurity: Number.POSITIVE_INFINITY,
    leftCount: 0,
    rightCount: sorted.length,
  }

  for (let index = 1; index < sorted.length; index++) {
    const left = sorted.slice(0, index)
    const right = sorted.slice(index)
    const threshold = (sorted[index - 1].feature + sorted[index].feature) / 2
    const impurity =
      (left.length / sorted.length) * giniImpurity(left.map((point) => point.label)) +
      (right.length / sorted.length) * giniImpurity(right.map((point) => point.label))

    if (impurity < best.impurity) {
      best = {
        threshold,
        impurity,
        leftCount: left.length,
        rightCount: right.length,
      }
    }
  }

  return best
}

export const ensembleVote = (predictions: boolean[]) => {
  const positiveVotes = predictions.filter(Boolean).length
  return positiveVotes >= Math.ceil(predictions.length / 2)
}

export const biasVarianceCurve = (complexity: number) => {
  const normalized = Math.max(0.05, complexity)
  const bias = 1 / normalized
  const variance = normalized * normalized * 0.12
  return {
    bias,
    variance,
    total: bias + variance,
  }
}

export const doubleDescentCurve = (capacity: number, interpolationPoint: number) => {
  const distance = capacity - interpolationPoint
  const base = 0.18 + 1 / Math.max(capacity, 0.25)
  const spike = Math.exp(-(distance * distance) / 0.18) * 1.7
  const secondDescent = capacity > interpolationPoint ? 0.45 / Math.max(capacity, 0.25) : 0
  return base + spike + secondDescent
}
