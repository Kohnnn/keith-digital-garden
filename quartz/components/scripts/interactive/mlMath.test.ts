import test from "node:test"
import assert from "node:assert/strict"

import {
  bestSplit1D,
  buildConfusionMatrix,
  buildPrecisionRecallCurve,
  buildRocCurve,
  doubleDescentCurve,
  ensembleVote,
  fitLinearRegression,
  meanSquaredError,
  sigmoid,
} from "./mlMath"

test("linear regression fits a straight line", () => {
  const model = fitLinearRegression([
    { x: 0, y: 1 },
    { x: 1, y: 3 },
    { x: 2, y: 5 },
  ])

  assert.ok(Math.abs(model.slope - 2) < 1e-9)
  assert.ok(Math.abs(model.intercept - 1) < 1e-9)
  assert.equal(meanSquaredError([{ x: 2, y: 5 }], model.slope, model.intercept), 0)
})

test("classification helpers derive curves", () => {
  const samples = [
    { score: 0.9, actual: true },
    { score: 0.8, actual: true },
    { score: 0.3, actual: false },
    { score: 0.2, actual: false },
  ]

  const matrix = buildConfusionMatrix(samples, 0.5)
  assert.deepEqual(matrix, { tp: 2, fp: 0, tn: 2, fn: 0 })
  assert.equal(buildPrecisionRecallCurve(samples, [0.5]).length, 1)
  assert.equal(buildRocCurve(samples, [0.5]).length, 1)
  assert.ok(sigmoid(0) > 0.49 && sigmoid(0) < 0.51)
})

test("tree, ensemble, and complexity helpers stay deterministic", () => {
  const split = bestSplit1D([
    { feature: 1, label: false },
    { feature: 2, label: false },
    { feature: 8, label: true },
    { feature: 9, label: true },
  ])

  assert.ok(split.threshold > 2 && split.threshold < 8)
  assert.equal(ensembleVote([true, false, true]), true)
  assert.ok(doubleDescentCurve(1, 1.5) > 0)
})
