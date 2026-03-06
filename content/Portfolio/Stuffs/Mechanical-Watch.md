---
title: Mechanical Watch
tags: [portfolio, blog, external, ciechanow, interactive, engineering]
draft: false
description: Interactive watch-train sandbox for gear ratio effects and long-run phase behavior.
created: 2022-05-04
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Mechanical Watch

> [!info] Source
> Original article: [Mechanical Watch](https://ciechanow.ski/mechanical-watch/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="watch-speed">train speed</label>
      <input id="watch-speed" data-control="speed" type="range" min="0.2" max="4" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="watch-ratio">gear ratio</label>
      <input id="watch-ratio" data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset movement</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use a moderate train setting to compare wheel cadence and phase relationships.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="2.1" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower train speed to inspect slow transmission behavior across the gear chain.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="0.95" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="0.6" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Increase speed and ratio to amplify downstream cadence differences.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="3.25" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.6" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix low speed with high ratio to isolate ratio cascade from drive tempo.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="1.35" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.45" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit ratio/speed values to stress-test phase continuity.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="0.4" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.75" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a mid-high setup over time and compare long-run phase drift.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>train speed</label>
      <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="2.5" />
    </div>
    <div class="interactive-sim-control">
      <label>gear ratio</label>
      <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.3" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Mechanical watches are timing machines built from constrained rotations. If one wheel speeds up, another must compensate through tooth count and radius. This simulation compresses that logic into a visible three-gear train.

## Session 2: Model

Each gear is drawn procedurally with alternating tooth radii. Angular velocity transfers through contact with opposite rotation signs. The idler ratio modifies effective radius, which alters downstream angular speed.

## Session 3: Control Lab

Keep ratio near 1.0 and vary train speed to isolate cadence. Then hold speed constant and sweep ratio from low to high. Watch which wheel becomes dominant and how opposite spins maintain continuity across contact points.

## Session 4: What to Observe

Even with simplified geometry, ratio changes are non-linear in perception because angular displacement accumulates over time. Short tests can hide that; longer runs reveal drift and relative phase changes quickly.

## Session 5: Limits and Simplifications

No escapement, spring torque curve, backlash, or friction losses are modeled. This scene focuses on kinematic transmission, not full horology dynamics.

## Session 6: References

- Primary inspiration: [Mechanical Watch](https://ciechanow.ski/mechanical-watch/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into train cadence and drift with repeatable presets for comparison and testing.

## Why this matters

Watch trains are compact examples of precision transmission and timing control. They are ideal for building intuition about ratio cascades, phase drift, and constrained mechanics.

## Try these experiments

1. Hold gear ratio steady and sweep train speed from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep gear ratio while keeping train speed fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Gears]]
- [[Internal Combustion Engine]]
- [[Bicycle]]
