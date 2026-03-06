---
title: Cameras and Lenses
tags: [portfolio, blog, external, ciechanow, interactive, optics]
draft: false
description: Interactive thin-lens lab for focal length, aperture, and object-distance focus behavior.
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

## Interactive Lab 2: Baseline Comparator

Use a neutral thin-lens setup to compare focus movement against a stable baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.9" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.82" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Pull toward short focal and near object ranges to inspect close-focus behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.48" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.4" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.48" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Push focal distance and aperture scale higher to examine magnification and blur tradeoffs.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="1.32" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.89" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="1.17" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix short focal with distant objects to separate framing effects from focus placement.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.62" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.82" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.71" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Test near-edge optical settings to expose where focus shifts become visually abrupt.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.27" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.96" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="1.34" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Hold a mid-high optics configuration and compare image-plane stability over adjustments.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>focal length</label>
      <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="1.04" />
    </div>
    <div class="interactive-sim-control">
      <label>aperture scale</label>
      <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label>object distance</label>
      <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.88" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
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

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into thin-lens focus geometry with repeatable presets for comparison and testing.

## Why this matters

Lens geometry underpins photography software, AR framing, and camera simulation. A solid thin-lens mental model makes focus, framing, and blur decisions easier to reason about.

## Try these experiments

1. Hold aperture scale steady and sweep focal length from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep aperture scale while keeping focal length fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Lights and Shadows]]
- [[Color Spaces]]
- [[Airfoil]]
