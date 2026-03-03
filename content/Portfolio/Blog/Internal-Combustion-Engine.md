---
title: Internal Combustion Engine
tags: [portfolio, blog, external, ciechanow, interactive, engines]
draft: false
description: Interactive internal combustion engine explainer.
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

#
