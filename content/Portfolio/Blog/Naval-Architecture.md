---
title: Naval Architecture
tags: [portfolio, blog, external, ciechanow, interactive, ships]
draft: false
description: Interactive naval architecture and buoyancy explainer.
created: 2021-07-27
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Naval Architecture

> [!info] Source
> Original article: [Naval Architecture](https://ciechanow.ski/naval-architecture/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="naval-architecture">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Naval architecture buoyancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-load">payload load</label>
      <input id="naval-load" data-control="load" type="range" min="0" max="2" step="0.01" value="0.9" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-density">fluid density</label>
      <input id="naval-density" data-control="density" type="range" min="0.3" max="2" step="0.01" value="1" />
    </div>
    <button data-control="reset" type="button">reset hull state</button>
  </div>
</div>

## Session 1: Intuition
A vessel floats by balancing downward weight with upward buoyancy. Changing mass or fluid density shifts that balance and changes draft depth.

## Session 2: Model
This scene uses a compact buoyancy approximation where draft responds to effective load-to-density ratio. Weight and buoyancy vectors are drawn together so force equilibrium remains explicit.

## Session 3: Control Lab
Increase payload at fixed density and observe deeper immersion. Then increase density to restore lift capacity. The same hull geometry can behave very differently in different fluids.

## Session 4: What to Observe
The line between stable float and excessive sink is gradual in this model, which mirrors practical design intuition: margins matter more than single-point calculations.

## Session 5: Limits and Simplifications
No full hydrostatic curve, metacentric height, or wave-body coupling is solved. The simulator is designed as an interactive force-balance notebook.

## Session 6: References
- Primary inspiration: [Naval Architecture](https://ciechanow.ski/naval-architecture/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
