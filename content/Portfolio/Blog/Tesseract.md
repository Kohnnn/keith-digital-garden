---
title: Tesseract
tags: [portfolio, blog, external, ciechanow, interactive, math]
draft: false
description: Interactive tesseract visualization explainer.
created: 2019-12-10
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Tesseract

> [!info] Source
> Original article: [Tesseract](https://ciechanow.ski/tesseract/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="tesseract">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tesseract projection simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="tesseract-spin">spin speed</label>
      <input id="tesseract-spin" data-control="spin" type="range" min="0.2" max="4" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="tesseract-depth">w-depth</label>
      <input id="tesseract-depth" data-control="depth" type="range" min="1.4" max="3.6" step="0.02" value="2.2" />
    </div>
    <button data-control="reset" type="button">reset projection</button>
  </div>
</div>

## Session 1: Intuition
Higher-dimensional objects are hard to grasp because we only see projections. A tesseract visualization is therefore a camera problem: how 4D structure collapses into a 2D view.

## Session 2: Model
Vertices are generated as all sign combinations of four coordinates. The scene applies a 4D rotation, then projects to 3D and finally to 2D. Edge connectivity is preserved by bit-flip adjacency.

## Session 3: Control Lab
Increase spin to reveal repeated topological motifs. Adjust w-depth to change projection distortion. Low depth exaggerates perspective; higher depth flattens it.

## Session 4: What to Observe
Apparent edge crossings in 2D do not imply actual intersections in 4D. What looks tangled can remain perfectly structured in the source space.

## Session 5: Limits and Simplifications
This implementation focuses on projection literacy, not exact algebraic formalism for all rotation planes. It still preserves core adjacency and dimensional intuition.

## Session 6: References
- Primary inspiration: [Tesseract](https://ciechanow.ski/tesseract/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
