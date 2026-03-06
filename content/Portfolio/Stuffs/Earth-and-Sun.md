---
title: Earth and Sun
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive orbit-tilt model for seasonal illumination and hemispheric contrast intuition.
created: 2019-10-16
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Earth and Sun

> [!info] Source
> Original article: [Earth and Sun](https://ciechanow.ski/earth-and-sun/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="earth-day">orbital day</label>
      <input id="earth-day" data-control="day" type="range" min="0" max="365" step="1" value="90" />
    </div>
    <div class="interactive-sim-control">
      <label for="earth-tilt">axial tilt</label>
      <input id="earth-tilt" data-control="tilt" type="range" min="0" max="35" step="0.1" value="23.5" />
    </div>
    <button data-control="reset" type="button">reset orbit</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Begin with a moderate day/tilt state for baseline seasonal geometry.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="183" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="19.3" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower tilt and early-day position to inspect reduced hemispheric contrast.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="55" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="3.5" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise tilt and move through later orbit positions to amplify seasonal asymmetry.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="310" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="30.8" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix low tilt with shifted orbital day to separate phase from inclination effects.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="128" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="7.7" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit tilt values to stress-test illumination interpretation.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="354" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="35" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Hold mid-high tilt and sweep day steadily to compare smooth seasonal transitions.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital day</label>
      <input data-control="day" type="range" min="0" max="365" step="1" value="226" />
    </div>
    <div class="interactive-sim-control">
      <label>axial tilt</label>
      <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="22.8" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Seasonality is not about distance alone. Orbital position and axis orientation jointly decide illumination geometry over the year.

## Session 2: Model

The simulation draws an elliptical-like orbit and rotates the Earth marker by a configurable tilt angle. Day progression moves the planet around the sun while preserving the selected axial inclination.

## Session 3: Control Lab

Move the day slider through a full cycle and hold tilt fixed. Then reduce tilt toward zero and compare the change in seasonal asymmetry. Finally exaggerate tilt to test edge-case behavior.

## Session 4: What to Observe

With low tilt, hemispheric contrast weakens. With higher tilt, seasonal contrast sharpens and illumination direction changes become visually explicit.

## Session 5: Limits and Simplifications

The model does not simulate full radiative transfer, eccentricity corrections, atmospheric effects, or solar declination equations. It is intended as a compact geometric interpretation tool.

## Session 6: References

- Primary inspiration: [Earth and Sun](https://ciechanow.ski/earth-and-sun/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into seasonal illumination geometry with repeatable presets for comparison and testing.

## Why this matters

Seasonal geometry explains many climate, energy, and daylight visualization tasks. Axis tilt and orbital position are easier to communicate when users can manipulate them directly.

## Try these experiments

1. Hold axial tilt steady and sweep orbital day from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep axial tilt while keeping orbital day fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Moon]]
- [[GPS]]
- [[Airfoil]]
