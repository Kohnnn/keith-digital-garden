---
title: Gears
tags: [portfolio, blog, external, ciechanow, interactive, mechanics]
draft: false
description: Interactive gear-train sandbox for ratio transfer, direction inversion, and phase drift.
created: 2020-02-12
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Gears

> [!info] Source
> Original article: [Gears](https://ciechanow.ski/gears/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-drive">drive velocity</label>
      <input id="gears-drive" data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-idler">idler scale</label>
      <input id="gears-idler" data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset train</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use balanced drive and idler settings for a reference gear-train cadence.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.7" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.14" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower drive velocity to inspect slow phase transfer and contact timing.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="0.8" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="0.7" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise drive and idler scale to emphasize ratio-dependent speed conversion.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="2.6" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.6" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix low drive with high idler scale to isolate ratio effects from input speed.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.1" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.48" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit settings to stress-test phase continuity and direction changes.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.74" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a mid-high configuration over longer time to compare accumulated phase drift.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>drive velocity</label>
      <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="2" />
    </div>
    <div class="interactive-sim-control">
      <label>idler scale</label>
      <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.34" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Gear systems convert one rotational signal into another with different speed and torque characteristics. The key variable is not just spin rate but geometry: tooth count and effective radius.

## Session 2: Model

This scene uses procedural tooth profiles with linked angular velocities. The center gear acts as an idler/transfer element. Sign inversion across meshing contacts is preserved so direction changes remain physically intuitive.

## Session 3: Control Lab

Increase drive velocity to inspect phase progression. Then vary idler scale: larger idlers reduce angular speed transfer and alter relative cadence at the output gear.

## Session 4: What to Observe

The train can look stable at short time windows while accumulating substantial phase offsets over longer windows. That long-run drift is important in mechanism design and synchronization tasks.

## Session 5: Limits and Simplifications

No contact deformation, backlash, tooth profile optimization, lubrication, or load transfer is solved here. This is a kinematic demonstration for ratio reasoning.

## Session 6: References

- Primary inspiration: [Gears](https://ciechanow.ski/gears/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into ratio and phase transfer with repeatable presets for comparison and testing.

## Why this matters

Gear-ratio reasoning appears in mechanical simulation, game systems, and timing mechanisms. Understanding transfer and phase helps you predict downstream behavior before building full models.

## Try these experiments

1. Hold idler scale steady and sweep drive velocity from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep idler scale while keeping drive velocity fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Mechanical Watch]]
- [[Bicycle]]
- [[Internal Combustion Engine]]
