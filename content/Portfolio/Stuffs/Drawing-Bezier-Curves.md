---
title: Drawing Bezier Curves
tags: [portfolio, blog, external, ciechanow, interactive, curves]
draft: false
description: Interactive de Casteljau playground for cubic Bezier construction and parameter tracing.
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

## Interactive Lab 2: Baseline Comparator

Use a centered parameter state for clean de Casteljau stage comparisons.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Set t near the start of the segment to inspect early interpolation behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Set t near the end of the segment to mirror endpoint-side interpolation.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.88" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Use an off-center t value to observe asymmetric influence of inner control points.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.33" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Push t near edge values to inspect numerical sensitivity around endpoints.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.02" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Cycle around a mid-high t region to compare continuity of construction steps.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="drawing-bezier-curves">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier construction playground"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>curve parameter t</label>
      <input data-control="t" type="range" min="0" max="1" step="0.001" value="0.66" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
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

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into de Casteljau interpolation with repeatable presets for comparison and testing.

## Why this matters

Bezier construction is foundational in vector graphics, fonts, and UI path animation. Seeing interpolation stages clearly helps you debug handles instead of guessing final shape outcomes.

## Try these experiments

1. Hold curve parameter t steady and sweep curve parameter t from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep curve parameter t while keeping curve parameter t fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Curves and Surfaces]]
- [[Mesh Transforms]]
- [[Tesseract]]
