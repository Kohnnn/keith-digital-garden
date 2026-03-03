---
title: Gears
tags: [portfolio, blog, external, ciechanow, interactive, mechanics]
draft: false
description: Interactive gear mechanics explainer.
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

#
