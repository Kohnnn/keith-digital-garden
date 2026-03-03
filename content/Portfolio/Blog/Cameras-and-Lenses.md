---
title: Cameras and Lenses
tags: [portfolio, blog, external, ciechanow, interactive, optics]
draft: false
description: Interactive camera optics and lens behavior explainer.
created: 2020-12-07
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Cameras and Lenses

> [!info] Source
> Original article: [Cameras and Lenses](https://ciechanow.ski/cameras-and-lenses/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lens-focal">focal length</label>
      <input id="lens-focal" data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label for="lens-aperture">aperture scale</label>
      <input id="lens-aperture" data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.7" />
    </div>
    <div class="interactive-sim-control">
      <label for="lens-object">object distance</label>
      <input id="lens-object" data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset optics</button>
  </div>
</div>

## Session 1: Intuition
Focus is geometric alignment between lens optics and sensor plane. Move focal length or object distance and the image plane must adapt.

## Session 2: Model
The simulation uses a thin-lens relation with explicit ray drawing. A main object ray set is refracted through the lens and projected onto an image side reference plane.

## Session 3: Control Lab
Start from a stable focus and pull object distance outward. Then vary focal length while keeping object fixed. Observe how image inversion and magnification shift with lens configuration.

## Session 4: What to Observe
Some parameter combinations drive image distance far from the sensor plane. In real cameras this appears as defocus unless sensor-lens spacing changes.

## Session 5: Limits and Simplifications
No aberration model, diffraction, chromatic effects, or full depth-of-field solver is included. This page emphasizes first-order geometric optics.

## Session 6: References
- Primary inspiration: [Cameras and Lenses](https://ciechanow.ski/cameras-and-lenses/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
