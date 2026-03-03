---
title: Bicycle
tags: [portfolio, blog, external, ciechanow, interactive, mechanics]
draft: false
description: Interactive bicycle mechanics explainer by Bartosz Ciechanowski.
created: 2023-03-28
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Bicycle

> [!info] Source
> Original article: [Bicycle](https://ciechanow.ski/bicycle/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="bicycle">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Bicycle kinematics simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bike-steer">steering angle</label>
      <input id="bike-steer" data-control="steer" type="range" min="-35" max="35" step="0.5" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="bike-speed">velocity</label>
      <input id="bike-speed" data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="1.5" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>

The scene runs a local bicycle model with wheelbase-constrained heading dynamics.
Steering and velocity are interactive, and the trail helps inspect turn radius behavior over time.

## Session 1: Intuition
Bike turning behavior emerges from geometry constraints, not arbitrary arc drawing. Steering angle, wheelbase, and velocity combine to produce curvature over time.

## Session 2: Model
This scene integrates a compact kinematic bicycle equation. Heading evolves from steer input and wheelbase, while position advances in heading direction.

## Session 3: Control Lab
At low speed, sweep steering to inspect path curvature. Then increase velocity while keeping steering fixed and compare how quickly heading accumulates.

## Session 4: What to Observe
Identical steering values produce different visual outcomes over different run durations. Trail visualization makes integration effects explicit and easy to compare.

## Session 5: Limits and Simplifications
No tire slip, lean dynamics, or stability controller is modeled. This is a pure planar kinematic interpretation useful for intuition and quick prototyping.

## Session 6: References
- Primary inspiration: [Bicycle](https://ciechanow.ski/bicycle/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
