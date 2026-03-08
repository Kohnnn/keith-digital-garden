import test from "node:test"
import assert from "node:assert/strict"

import {
  buildArticleDefinition,
  dedupeSteps,
  resolvePresetTargets,
  resolveStepDefinition,
} from "./storyModel"

test("story model dedupes duplicate steps", () => {
  const steps = dedupeSteps([
    { id: "overview", sceneId: "airfoil", presetId: "overview", syncGroup: "main" },
    { id: "overview", sceneId: "airfoil", presetId: "overview", syncGroup: "main" },
    { id: "pressure", sceneId: "airfoil", presetId: "pressure", syncGroup: "main" },
  ])

  assert.equal(steps.length, 2)
})

test("story model builds sync groups and resolves targets", () => {
  const article = buildArticleDefinition("airfoil", "airfoil", [
    { id: "overview", sceneId: "airfoil", presetId: "overview", syncGroup: "main" },
    { id: "pressure", sceneId: "airfoil", presetId: "pressure", syncGroup: "main" },
    { id: "compare", sceneId: "airfoil", presetId: "compare-a", syncGroup: "compare" },
  ])

  assert.deepEqual(article.syncGroups, ["main", "compare"])
  assert.equal(resolveStepDefinition(article, "pressure")?.presetId, "pressure")
  assert.equal(resolvePresetTargets(article, article.steps[0]).length, 2)
})
