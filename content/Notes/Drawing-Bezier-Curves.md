---
title: Drawing Bezier Curves
tags: [portfolio, blog, external, ciechanow, interactive, curves]
draft: false
description: Interactive de Casteljau playground for cubic Bezier construction and parameter tracing.
created: 2014-02-18
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Drawing-Bezier-Curves]
cssclasses: [external-canvas-note, note-lab]
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
