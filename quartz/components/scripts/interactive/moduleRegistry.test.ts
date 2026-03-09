import assert from "node:assert/strict"
import test from "node:test"

import { INTERACTIVE_ARTICLES, INTERACTIVE_MODULE_SCENE_MAP } from "./articleRegistry"
import {
  buildModuleSceneMap,
  getArticleModuleCount,
  isGeneratedModuleSceneId,
} from "./moduleRegistry"
import { WAVE1A_ANCHOR_ARTICLE_SET } from "./wave1aRegistry"

test("generated registry exposes module-level scene ids", () => {
  const sceneMap = buildModuleSceneMap(INTERACTIVE_ARTICLES)
  assert.ok(isGeneratedModuleSceneId("airfoil:module-01"))
  assert.equal(sceneMap["airfoil:module-01"]?.articleId, "airfoil")
  assert.equal(sceneMap["mechanical-watch:module-25"]?.moduleId, "module-25")
})

test("anchor article counts match the detailed inventory", () => {
  const byId = Object.fromEntries(INTERACTIVE_ARTICLES.map((article) => [article.id, article]))
  assert.equal(getArticleModuleCount(byId.airfoil), 24)
  assert.equal(getArticleModuleCount(byId["mechanical-watch"]), 25)
  assert.equal(getArticleModuleCount(byId.gps), 26)
  assert.equal(getArticleModuleCount(byId["color-spaces"]), 25)
  assert.equal(getArticleModuleCount(byId["hysteresis-slack"]), 11)
  assert.equal(getArticleModuleCount(byId["linear-regression"]), 5)
})

test("wave 1A anchors resolve through explicit implementation keys and authored controls", () => {
  for (const sceneId of [
    "mechanical-watch:module-02",
    "airfoil:module-20",
    "gps:module-24",
    "color-spaces:module-15",
  ]) {
    const scene = INTERACTIVE_MODULE_SCENE_MAP[sceneId]
    assert.ok(scene)
    assert.equal(scene.implementationKey, sceneId)
    assert.ok(WAVE1A_ANCHOR_ARTICLE_SET.has(scene.articleId))
    assert.ok(scene.proseAnchor?.startsWith(scene.moduleId))
  }

  assert.deepEqual(
    INTERACTIVE_MODULE_SCENE_MAP["mechanical-watch:module-02"]?.controls.map(
      (control) => control.id,
    ),
    ["pause-toggle"],
  )
  assert.deepEqual(
    INTERACTIVE_MODULE_SCENE_MAP["gps:module-02"]?.controls.map((control) => control.id),
    ["reset"],
  )
  assert.deepEqual(
    INTERACTIVE_MODULE_SCENE_MAP["color-spaces:module-23"]?.controls.map((control) => control.id),
    ["reset"],
  )
  assert.equal(INTERACTIVE_MODULE_SCENE_MAP["gps:module-24"]?.resetScope, "pause-group")
})
