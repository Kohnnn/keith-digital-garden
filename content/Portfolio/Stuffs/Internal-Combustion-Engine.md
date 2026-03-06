---
title: Internal Combustion Engine
tags: [portfolio, blog, external, ciechanow, interactive, engines]
draft: false
description: Interactive crank-slider timing lab for RPM, compression, and spark-phase intuition.
created: 2021-04-29
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Internal Combustion Engine

> [!info] Source
> Original article: [Internal Combustion Engine](https://ciechanow.ski/internal-combustion-engine/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="engine-rpm">rpm</label>
      <input id="engine-rpm" data-control="rpm" type="range" min="200" max="5000" step="10" value="1400" />
    </div>
    <div class="interactive-sim-control">
      <label for="engine-compression">compression factor</label>
      <input id="engine-compression" data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="engine-spark">spark timing</label>
      <input id="engine-spark" data-control="spark" type="range" min="0" max="360" step="1" value="35" />
    </div>
    <button data-control="reset" type="button">reset cycle</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use moderate RPM, compression, and spark timing as a timing baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="2600" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="180" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower RPM and compression to inspect slower crank-cycle coupling.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="1160" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="72" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise RPM and advance timing to observe stronger phase-sensitive behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="4040" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1.35" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="288" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix conservative RPM with aggressive spark timing to isolate phase alignment effects.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="1640" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1.25" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="144" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit settings to probe sensitivity around ignition timing extremes.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="440" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1.45" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="342" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a sustained mid-high cycle and compare perceived timing stability.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>rpm</label>
      <input data-control="rpm" type="range" min="200" max="5000" step="10" value="3080" />
    </div>
    <div class="interactive-sim-control">
      <label>compression factor</label>
      <input data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1.15" />
    </div>
    <div class="interactive-sim-control">
      <label>spark timing</label>
      <input data-control="spark" type="range" min="0" max="360" step="1" value="198" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Combustion engines convert reciprocating motion to rotation. Timing is everything: piston position and ignition phase must align for useful work.

## Session 2: Model

The scene implements a crank-rod-piston chain. RPM drives crank phase, compression adjusts chamber squeeze, and spark timing adds a visible burn pulse around a chosen crank angle.

## Session 3: Control Lab

Hold compression constant and sweep RPM. Then keep RPM fixed and move spark timing to see phase mismatch effects. Finally vary compression to inspect chamber behavior under the same timing.

## Session 4: What to Observe

Small timing offsets can shift when force is delivered relative to crank leverage. This is why ignition maps are often tuned carefully across operating ranges.

## Session 5: Limits and Simplifications

No real thermodynamic cycle, valve overlap, knock model, or torque estimation is included. The objective is mechanism timing intuition.

## Session 6: References

- Primary inspiration: [Internal Combustion Engine](https://ciechanow.ski/internal-combustion-engine/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into crank-cycle timing with repeatable presets for comparison and testing.

## Why this matters

Engine timing concepts map to control systems, simulation, and educational tooling. Visual timing intuition helps explain why small phase changes create large output differences.

## Try these experiments

1. Hold compression factor steady and sweep rpm from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep compression factor while keeping rpm fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Mechanical Watch]]
- [[Gears]]
- [[Bicycle]]
