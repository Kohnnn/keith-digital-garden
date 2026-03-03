---
title: GPS
tags: [portfolio, blog, external, ciechanow, interactive, satellites]
draft: false
description: Interactive GPS and triangulation explainer by Bartosz Ciechanowski.
created: 2022-01-18
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# GPS

> [!info] Source
> Original article: [GPS](https://ciechanow.ski/gps/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-time">orbital phase</label>
      <input id="gps-time" data-control="time" type="range" min="0" max="6.283" step="0.01" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-noise">measurement noise</label>
      <input id="gps-noise" data-control="noise" type="range" min="0" max="2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset receiver</button>
  </div>
</div>

## Session 1: Intuition
Navigation is less about seeing one satellite and more about intersecting constraints from several. Each circle in this scene is a distance estimate from a satellite. The receiver sits where those constraints agree best.

## Session 2: Model
Satellites move on orbital paths, then produce noisy distance rings around their current positions. The receiver estimate is visualized as a draggable target so you can probe stability and sensitivity under different error levels.

## Session 3: Control Lab
Drag the receiver, then increase measurement noise. Rings stop converging cleanly and the feasible region broadens. Lower noise and the same geometry tightens into a sharper intersection zone.

## Session 4: What to Observe
Geometry matters as much as noise. If satellites cluster in one region, uncertainty stretches along weakly constrained directions. Better angular diversity produces stronger positional confidence.

## Session 5: Limits and Simplifications
Clock bias, relativistic corrections, atmospheric delay, and filtering are omitted. This is a visual trilateration laboratory, tuned for interactive understanding rather than geodetic precision.

## Session 6: References
- Primary inspiration: [GPS](https://ciechanow.ski/gps/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
