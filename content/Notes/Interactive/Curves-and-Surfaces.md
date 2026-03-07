---
title: Curves and Surfaces
tags: [portfolio, blog, external, ciechanow, interactive, geometry]
draft: false
description: Interactive curve-field playground for control-point edits, normals, and twist behavior.
created: 2021-11-02
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Curves-and-Surfaces]
cssclasses: [external-canvas-note, note-lab]
---

# Curves and Surfaces

> [!info] Source
> Original article: [Curves and Surfaces](https://ciechanow.ski/curves-and-surfaces/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="curves-and-surfaces">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Curves and surfaces sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curve-tension">normal scale</label>
      <input id="curve-tension" data-control="tension" type="range" min="0.1" max="2" step="0.02" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="curve-twist">field twist</label>
      <input id="curve-twist" data-control="twist" type="range" min="-1" max="1" step="0.01" value="0" />
    </div>
    <button data-control="reset" type="button">reset control points</button>
  </div>
</div>

## Session 1: Intuition

A curve is a trajectory, but design work usually depends on what the curve implies locally: direction, curvature, and normal behavior. This page makes that local structure visible and editable.

## Session 2: Model

A cubic Bezier is sampled into many points. A secondary field draws short normal-like segments whose orientation varies with a twist parameter. This creates a bridge from curve editing into surface-thinking.

## Session 3: Control Lab

Drag control points to alter global shape, then change normal scale to amplify local behavior. Add twist to observe how a simple scalar can produce a surface-like flow pattern over the same base curve.

## Session 4: What to Observe

Small handle moves can have large downstream curvature effects. Local continuity and global silhouette are coupled. The normal field makes that coupling more obvious than a line-only rendering.

## Session 5: Limits and Simplifications

This scene does not compute exact curvature tensors or full surface patches. It is an exploratory geometric instrument intended for intuition and quick prototyping.

## Session 6: References

- Primary inspiration: [Curves and Surfaces](https://ciechanow.ski/curves-and-surfaces/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into curve-normal structure with repeatable presets for comparison and testing.

## Why this matters

Curve editing appears in CAD, motion paths, typography, and shader tooling. Reading local curvature and normals lets you make smoother shapes with fewer trial-and-error passes.

## Try these experiments

1. Hold field twist steady and sweep normal scale from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep field twist while keeping normal scale fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Drawing Bezier Curves]]
- [[Mesh Transforms]]
- [[Tesseract]]
