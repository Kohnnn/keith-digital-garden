---
title: Earth and Sun
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive earth and sun orbital explainer.
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

#
