---
title: Exposing NSMutableArray
tags: [portfolio, blog, external, ciechanow, interactive, ios]
draft: false
description: Deep dive into NSMutableArray internals.
created: 2014-03-05
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Exposing NSMutableArray

> [!info] Source
> Original article: [Exposing NSMutableArray](https://ciechanow.ski/exposing-nsmutablearray/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="arr-items">items pushed</label>
      <input id="arr-items" data-control="items" type="range" min="1" max="500" step="1" value="180" />
    </div>
    <div class="interactive-sim-control">
      <label for="arr-growth">growth factor</label>
      <input id="arr-growth" data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="1.65" />
    </div>
    <div class="interactive-sim-control">
      <label for="arr-reserve">initial reserve</label>
      <input id="arr-reserve" data-control="reserve" type="range" min="1" max="64" step="1" value="8" />
    </div>
    <button data-control="reset" type="button">reset growth</button>
  </div>
</div>

## Session 1: Intuition
Dynamic arrays trade occasional expensive resizes for amortized append speed. Capacity policy controls both memory overhead and relocation frequency.

## Session 2: Model
Given an item count, reserve size, and growth multiplier, this page simulates capacity jumps and plots a step-like trajectory over insertion progress.

## Session 3: Control Lab
Set a low growth factor and increase items to observe many small reallocations. Then raise growth factor and compare fewer jumps but larger spare-capacity regions.

## Session 4: What to Observe
No single growth rule is globally optimal. Workload shape decides whether low waste or low reallocation frequency should dominate policy design.

## Session 5: Limits and Simplifications
Copy cost, allocator fragmentation, and cache effects are not explicitly modeled. This simulator focuses on capacity progression behavior.

## Session 6: References
- Primary inspiration: [Exposing NSMutableArray](https://ciechanow.ski/exposing-nsmutablearray/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
