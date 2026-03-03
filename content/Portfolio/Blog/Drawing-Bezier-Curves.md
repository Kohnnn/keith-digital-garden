---
title: Drawing Bezier Curves
tags: [portfolio, blog, external, ciechanow, interactive, curves]
draft: false
description: Interactive Bezier curve drawing explainer.
created: 2014-02-18
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Drawing Bezier Curves

> [!info] Source
> Original article: [Drawing Bezier Curves](https://ciechanow.ski/drawing-bezier-curves/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bezier-t">curve parameter t</label>
      <input id="bezier-t" data-control="t" type="range" min="0" max="1" step="0.001" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset control polygon</button>
  </div>
</div>

## Session 1: Intuition
Bezier curves are interpolation processes, not black-box splines. The curve point comes from repeated linear blends.

## Session 2: Model
Four draggable control points define a cubic segment. The simulator draws first-level, second-level, and final interpolation points, exposing the de Casteljau construction at parameter `t`.

## Session 3: Control Lab
Drag handles to create high curvature, then move `t` from 0 to 1. Watch intermediate segments collapse toward the final point as interpolation depth increases.

## Session 4: What to Observe
The curve always starts at the first point and ends at the last. Internal handles shape tangent behavior and curvature distribution without becoming mandatory pass-through points.

## Session 5: Limits and Simplifications
This page demonstrates a single cubic segment only. No piecewise continuity constraints or spline stitching rules are applied.

## Session 6: References
- Primary inspiration: [Drawing Bezier Curves](https://ciechanow.ski/drawing-bezier-curves/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
