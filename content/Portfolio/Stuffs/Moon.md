---
title: Moon
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive lunar phase renderer for directional lighting, terminator motion, and contrast.
created: 2024-12-17
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Moon

> [!info] Source
> Original article: [Moon](https://ciechanow.ski/moon/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="moon-phase">lunar phase</label>
      <input id="moon-phase" data-control="phase" type="range" min="0" max="1" step="0.001" value="0.15" />
    </div>
    <button data-control="reset" type="button">reset phase</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use a moderate phase angle to compare terminator placement against a neutral baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Move phase toward crescent conditions to inspect grazing-light contrast.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.1" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Move phase toward full illumination to examine broad lit-surface behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.9" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Use asymmetric phase positions to compare waxing-like and waning-like shading states.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.3" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Push phase toward edge illumination to stress terminator readability.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.02" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run extended mid-high phase sweeps and compare stability of perceived surface relief.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>lunar phase</label>
      <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.64" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

The renderer is implemented locally with WebGL for sphere shading and a Canvas overlay for metadata.
The phase slider rotates the directional light vector around the moon to mimic waxing/waning behavior.

## Session 1: Intuition

Lunar phases are an illumination problem, not a shape-change problem. The moon keeps its geometry while sunlight direction and observer framing determine the visible lit fraction.

## Session 2: Model

This version uses a shader-based sphere normal calculation and directional light vector. Procedural crater/maria noise creates texture variation without external assets.

## Session 3: Control Lab

Sweep the phase slider slowly and watch the terminator travel across surface features. Compare near-crescent and near-full regions to see how normal direction affects local contrast.

## Session 4: What to Observe

Rim lighting and grazing illumination are strongest near phase transitions. Surface texture appears to reorganize because lighting angle changes how relief information is encoded.

## Session 5: Limits and Simplifications

No real ephemeris, libration, or physically accurate BRDF is applied. This simulation is tuned for fast visual intuition and smooth browser performance.

## Session 6: References

- Primary inspiration: [Moon](https://ciechanow.ski/moon/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into phase and terminator motion with repeatable presets for comparison and testing.

## Why this matters

Lunar phase geometry is a great proxy for directional lighting concepts in graphics and astronomy communication. It sharpens intuition for terminator motion, contrast, and observer framing.

## Try these experiments

1. Hold lunar phase steady and sweep lunar phase from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep lunar phase while keeping lunar phase fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Earth and Sun]]
- [[GPS]]
- [[Lights and Shadows]]
