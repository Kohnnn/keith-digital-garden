---
title: Earth and Sun
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive orbit-tilt model for seasonal illumination and hemispheric contrast intuition.
created: 2019-10-16
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Earth-and-Sun]
cssclasses: [external-canvas-note, note-lab]
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
