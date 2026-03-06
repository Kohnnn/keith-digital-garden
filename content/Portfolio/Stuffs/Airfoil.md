---
title: Airfoil
tags: [portfolio, blog, external, ciechanow, interactive, physics]
draft: false
description: Interactive lift sandbox for angle-of-attack, flow speed, and streamline intuition.
created: 2024-02-27
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Airfoil

> [!info] Source
> Original article: [Airfoil](https://ciechanow.ski/airfoil/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-aoa">angle of attack</label>
      <input id="airfoil-aoa" data-control="aoa" type="range" min="-20" max="20" step="0.5" value="3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-speed">flow speed</label>
      <input id="airfoil-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="1.4" />
    </div>
    <button data-control="reset" type="button">reset flow</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Mirror a neutral cruise-like setup so lift asymmetry changes stay easy to compare.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="1.6" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Drop angle of attack and flow speed to inspect weak-circulation behavior near stall recovery.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="-12" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Push angle and speed upward to examine aggressive streamline bending and transport density.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="12" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="2.4" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Pair low angle with high speed to separate circulation shape from advection intensity.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="-8" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="2.2" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit values to stress-test how the flow field behaves at extreme incidence.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="-18" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="2.7" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a sustained mid-high case to watch whether wake patterns stay coherent over time.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>angle of attack</label>
      <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label>flow speed</label>
      <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="2" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

This native version uses a custom particle advection loop and potential-flow-inspired velocity field.
Controls let you tune angle of attack and incoming flow speed directly in your own blog page.

## Session 1: Intuition

Lift perception improves when you track flow structure rather than static wing shape. Angle and speed alter circulation patterns that reshape streamlines around the airfoil body.

## Session 2: Model

The simulation combines a potential-flow-inspired field with particle advection and streamline tracing. It is not CFD, but it preserves directional effects useful for conceptual reasoning.

## Session 3: Control Lab

Keep speed fixed and vary angle of attack. Then hold angle and increase speed to compare transport intensity. Reset often to isolate parameter influence.

## Session 4: What to Observe

As angle rises, asymmetry around the profile becomes more visible. Higher speed accelerates pattern transport but does not automatically increase structural asymmetry by itself.

## Session 5: Limits and Simplifications

No turbulence model, compressibility term, or boundary-layer solver is present. The goal is interactive interpretation, not wind-tunnel-grade numerical accuracy.

## Session 6: References

- Primary inspiration: [Airfoil](https://ciechanow.ski/airfoil/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into potential-flow intuition with repeatable presets for comparison and testing.

## Why this matters

Airflow intuition helps when tuning game physics, flight visualizations, and sensor-driven control loops. Understanding how angle and speed interact prevents shallow one-variable explanations of lift behavior.

## Try these experiments

1. Hold flow speed steady and sweep angle of attack from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep flow speed while keeping angle of attack fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Cameras and Lenses]]
- [[Lights and Shadows]]
- [[Earth and Sun]]
