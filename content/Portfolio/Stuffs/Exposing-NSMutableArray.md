---
title: Exposing NSMutableArray
tags: [portfolio, blog, external, ciechanow, interactive, ios]
draft: false
description: Interactive dynamic-array growth lab for reserve, multiplier, and reallocation behavior.
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

## Interactive Lab 2: Baseline Comparator

Start with moderate reserve and growth for a clear capacity-step baseline.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="251" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="1.75" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="33" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Use low reserve and mild growth to inspect frequent reallocation patterns.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="101" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="14" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Increase growth and item count to study larger but fewer capacity jumps.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="400" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="2.21" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="51" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Combine high reserve with lower growth to separate front-loaded space from resize cadence.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="151" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="2.08" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="26" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Push near-edge growth settings to expose aggressive capacity behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="26" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="2.33" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="61" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Track a mid-high run and compare long-run spare-capacity patterns.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsmutablearray">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Dynamic array growth simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>items pushed</label>
      <input data-control="items" type="range" min="1" max="500" step="1" value="300" />
    </div>
    <div class="interactive-sim-control">
      <label>growth factor</label>
      <input data-control="growth" type="range" min="1.1" max="2.4" step="0.01" value="1.94" />
    </div>
    <div class="interactive-sim-control">
      <label>initial reserve</label>
      <input data-control="reserve" type="range" min="1" max="64" step="1" value="36" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
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
