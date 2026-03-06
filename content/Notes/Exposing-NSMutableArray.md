---
title: Exposing NSMutableArray
tags: [portfolio, blog, external, ciechanow, interactive, ios]
draft: false
description: Interactive dynamic-array growth lab for reserve, multiplier, and reallocation behavior.
created: 2014-03-05
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Exposing-NSMutableArray]
cssclasses: [external-canvas-note, note-lab]
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

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into capacity growth policies with repeatable presets for comparison and testing.

## Why this matters

Dynamic array growth policy influences memory pressure and append throughput. Seeing resize jumps helps you choose better reserve and growth strategies for real workloads.

## Try these experiments

1. Hold growth factor steady and sweep items pushed from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep growth factor while keeping items pushed fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Exposing NSDictionary]]
- [[Exposing Floating Point]]
- [[Exploring GPGPU on iOS]]
