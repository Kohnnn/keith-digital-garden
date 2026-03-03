---
title: Mechanical Watch
tags: [portfolio, blog, external, ciechanow, interactive, engineering]
draft: false
description: Interactive mechanical watch explainer by Bartosz Ciechanowski.
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

#
