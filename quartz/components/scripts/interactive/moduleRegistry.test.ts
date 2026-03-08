import assert from "node:assert/strict"
import test from "node:test"

import { GENERATED_INTERACTIVE_ARTICLES } from "./generatedModuleRegistry"
import { buildModuleSceneMap, getArticleModuleCount, isGeneratedModuleSceneId } from "./moduleRegistry"

test("generated registry exposes module-level scene ids", () => {
  const sceneMap = buildModuleSceneMap(GENERATED_INTERACTIVE_ARTICLES)
  assert.ok(isGeneratedModuleSceneId("airfoil:module-01"))
  assert.equal(sceneMap["airfoil:module-01"]?.articleId, "airfoil")
  assert.equal(sceneMap["mechanical-watch:module-25"]?.moduleId, "module-25")
})

test("anchor article counts match the detailed inventory", () => {
  const byId = Object.fromEntries(GENERATED_INTERACTIVE_ARTICLES.map((article) => [article.id, article]))
  assert.equal(getArticleModuleCount(byId.airfoil), 24)
  assert.equal(getArticleModuleCount(byId["mechanical-watch"]), 25)
  assert.equal(getArticleModuleCount(byId.gps), 26)
  assert.equal(getArticleModuleCount(byId["color-spaces"]), 25)
  assert.equal(getArticleModuleCount(byId["hysteresis-slack"]), 11)
  assert.equal(getArticleModuleCount(byId["linear-regression"]), 5)
})
