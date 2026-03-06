---
title: Mesh Transforms
tags: [portfolio, blog, external, ciechanow, interactive, graphics]
draft: false
description: Interactive affine transform lab for rotation, scaling, shear order, and grid deformation.
created: 2014-05-14
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Mesh-Transforms]
cssclasses: [external-canvas-note, note-lab]
---

# Mesh Transforms

> [!info] Source
> Original article: [Mesh Transforms](https://ciechanow.ski/mesh-transforms/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="mesh-transforms">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mesh transform matrix sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mesh-rotate">rotation</label>
      <input id="mesh-rotate" data-control="rotate" type="range" min="-180" max="180" step="1" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="mesh-scale">scale</label>
      <input id="mesh-scale" data-control="scale" type="range" min="0.4" max="1.8" step="0.01" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mesh-shear">shear</label>
      <input id="mesh-shear" data-control="shear" type="range" min="-1.5" max="1.5" step="0.01" value="0" />
    </div>
    <button data-control="reset" type="button">reset transform</button>
  </div>
</div>

## Session 1: Intuition

Most graphics motion comes from a few linear transforms composed in different orders. Seeing the grid deform makes matrix effects tangible.

## Session 2: Model

The mesh is transformed by shear and scale, then rotated into display space. Horizontal and vertical line families are drawn separately to expose anisotropy introduced by transform choices.

## Session 3: Control Lab

Apply shear first to create directional slant, then rotate to inspect orientation sensitivity. Increase scale only after structure is clear so amplification effects stay interpretable.

## Session 4: What to Observe

Order matters in transform pipelines. Even when values look similar, changing composition sequence can produce distinct geometry.

## Session 5: Limits and Simplifications

This is a 2D affine sandbox, not a full 3D matrix pipeline with perspective division. It is optimized for visual debugging of core transform intuition.

## Session 6: References

- Primary inspiration: [Mesh Transforms](https://ciechanow.ski/mesh-transforms/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into affine composition order with repeatable presets for comparison and testing.

## Why this matters

Affine transforms are everywhere in graphics, UI layout, and interaction tooling. Clear transform-order intuition prevents common matrix bugs and alignment errors.

## Try these experiments

1. Hold scale steady and sweep rotation from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep scale while keeping rotation fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Drawing Bezier Curves]]
- [[Curves and Surfaces]]
- [[Tesseract]]
