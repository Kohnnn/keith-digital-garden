---
title: Lights and Shadows
tags: [portfolio, blog, external, ciechanow, interactive, rendering]
draft: false
description: Interactive lighting geometry lab for angle, elevation, and penumbra softness effects.
created: 2020-07-01
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Lights and Shadows

> [!info] Source
> Original article: [Lights and Shadows](https://ciechanow.ski/lights-and-shadows/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="shadow-angle">light angle</label>
      <input id="shadow-angle" data-control="angle" type="range" min="5" max="175" step="1" value="42" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-height">light height</label>
      <input id="shadow-height" data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-soft">penumbra softness</label>
      <input id="shadow-soft" data-control="softness" type="range" min="0" max="1" step="0.01" value="0.3" />
    </div>
    <button data-control="reset" type="button">reset light</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use balanced angle, height, and softness for a clean projection baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="90" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower light height and softness to inspect long, hard-edged shadows.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="39" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.32" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.2" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise angle and softness to explore compressed but blurred shadow regions.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="141" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.88" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix shallow angle with higher softness to separate footprint from edge quality.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="56" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.8" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.4" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-edge geometry values to stress penumbra and occlusion behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="14" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.96" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a mid-high lighting setup and compare stability of shadow transitions.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>light angle</label>
      <input data-control="angle" type="range" min="5" max="175" step="1" value="107" />
    </div>
    <div class="interactive-sim-control">
      <label>light height</label>
      <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.72" />
    </div>
    <div class="interactive-sim-control">
      <label>penumbra softness</label>
      <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Shadows are projections of occlusion, not objects by themselves. Move the light and the projection geometry changes immediately.

## Session 2: Model

The scene casts rays from a movable source through blocker edges onto a ground plane. Multiple offset passes approximate penumbra softness to make edge behavior easier to inspect.

## Session 3: Control Lab

Lower light height and observe long shadows. Raise it and compare compression. Increase softness to transition from hard-edged umbra to wider blended penumbra.

## Session 4: What to Observe

Angle and height interact. Similar angles can produce very different footprints at different elevations because ray-ground intersections shift non-linearly.

## Session 5: Limits and Simplifications

No full global illumination, area-light integration, or volumetric scattering is modeled. The focus is direct-light projection geometry.

## Session 6: References

- Primary inspiration: [Lights and Shadows](https://ciechanow.ski/lights-and-shadows/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into occlusion projection geometry with repeatable presets for comparison and testing.

## Why this matters

Light/shadow geometry is central to rendering, UI depth cues, and spatial storytelling. Understanding projection and softness controls leads to more intentional visual design.

## Try these experiments

1. Hold light height steady and sweep light angle from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep light height while keeping light angle fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Color Spaces]]
- [[Alpha Compositing]]
- [[Cameras and Lenses]]
