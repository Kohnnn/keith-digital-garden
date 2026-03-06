---
title: GPS
tags: [portfolio, blog, external, ciechanow, interactive, satellites]
draft: false
description: Interactive trilateration lab for satellite geometry, noise, and position uncertainty.
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

## Interactive Lab 2: Baseline Comparator

Start from moderate phase and noise for a stable trilateration baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="3.14" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="0.36" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower noise to inspect tight intersection geometry and confidence sharpening.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="1.26" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="0.1" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Increase noise and phase shift to reveal broader feasible regions.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="5.34" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="1.64" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix low phase with higher noise to separate geometry effects from uncertainty effects.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="1.57" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="1.56" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Push near-edge noise values to stress positional ambiguity in the solution.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="0.31" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="1.92" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run mid-high noise over several phase sweeps and compare estimate consistency.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>orbital phase</label>
      <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="3.9" />
    </div>
    <div class="interactive-sim-control">
      <label>measurement noise</label>
      <input data-control="noise" type="range" min="0" max="2" step="0.01" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
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

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into trilateration confidence geometry with repeatable presets for comparison and testing.

## Why this matters

GPS-style trilateration informs mapping, tracking, and sensor-fusion interfaces. Geometry-first intuition clarifies why accuracy shifts with satellite distribution and noise.

## Try these experiments

1. Hold measurement noise steady and sweep orbital phase from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep measurement noise while keeping orbital phase fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Earth and Sun]]
- [[Moon]]
- [[Cameras and Lenses]]
