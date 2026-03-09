import assert from "node:assert/strict"
import test from "node:test"

import {
  auditInteractiveNote,
  detectGeneratedFallbackMarkers,
  extractModuleOrder,
} from "./interactiveCoverage"
import type { InteractiveArticleDescriptor } from "../quartz/components/scripts/interactive/moduleRegistry"

const article: InteractiveArticleDescriptor = {
  id: "demo-article",
  title: "Demo",
  author: "Example",
  url: "https://example.com",
  lead: "Demo lead",
  about: [],
  moduleCount: 3,
  modules: [
    {
      sceneId: "demo-article:module-01",
      articleId: "demo-article",
      moduleId: "module-01",
      index: 1,
      title: "One",
      kind: "interactive",
      description: "",
      controlsSummary: "",
      responseSummary: "",
      renderer: "canvas",
      family: "demo",
      visual: "demo",
      layout: "inline",
      noteOnly: false,
      controls: [],
      defaultPreset: {},
      gestures: [],
    },
    {
      sceneId: "demo-article:module-02",
      articleId: "demo-article",
      moduleId: "module-02",
      index: 2,
      title: "Two",
      kind: "interactive",
      description: "",
      controlsSummary: "",
      responseSummary: "",
      renderer: "canvas",
      family: "demo",
      visual: "demo",
      layout: "inline",
      noteOnly: false,
      controls: [],
      defaultPreset: {},
      gestures: [],
    },
    {
      sceneId: "demo-article:module-03",
      articleId: "demo-article",
      moduleId: "module-03",
      index: 3,
      title: "Three",
      kind: "interactive",
      description: "",
      controlsSummary: "",
      responseSummary: "",
      renderer: "canvas",
      family: "demo",
      visual: "demo",
      layout: "inline",
      noteOnly: true,
      controls: [],
      defaultPreset: {},
      gestures: [],
    },
  ],
}

test("extractModuleOrder reads authored module placeholders in order", () => {
  const markdown = `
<div class="interactive-sim" data-sim-scene="demo-article:module-01" data-sim-module="demo-article:module-01"></div>
<div class="interactive-sim" data-sim-scene="demo-article:module-02" data-sim-module="demo-article:module-02"></div>
`

  assert.deepEqual(extractModuleOrder(markdown), [
    "demo-article:module-01",
    "demo-article:module-02",
  ])
})

test("detectGeneratedFallbackMarkers flags generator-era scaffolding", () => {
  const markdown = `
<span class="casefile-label">Module 01</span>
<p><strong>Controls:</strong> sliders</p>

## What to notice
`

  assert.deepEqual(detectGeneratedFallbackMarkers(markdown), [
    "generated module badge",
    "generated controls summary",
    "generated what-to-notice section",
  ])
})

test("auditInteractiveNote reports count, order, and fallback mismatches", () => {
  const markdown = `
<span class="casefile-label">Module 01</span>
<div class="interactive-sim" data-sim-scene="demo-article:module-02" data-sim-module="demo-article:module-02"></div>
<div class="interactive-sim" data-sim-scene="demo-article:module-99" data-sim-module="demo-article:module-99"></div>
`

  const audit = auditInteractiveNote(article, markdown)
  assert.deepEqual(audit.expectedModules, ["demo-article:module-01", "demo-article:module-02"])
  assert.deepEqual(audit.missingModules, ["demo-article:module-01"])
  assert.deepEqual(audit.extraModules, ["demo-article:module-99"])
  assert.deepEqual(audit.firstOrderMismatch, {
    index: 0,
    expected: "demo-article:module-01",
    actual: "demo-article:module-02",
  })
  assert.deepEqual(audit.fallbackMarkers, ["generated module badge"])
})
