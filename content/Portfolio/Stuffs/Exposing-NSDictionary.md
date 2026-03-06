---
title: Exposing NSDictionary
tags: [portfolio, blog, external, ciechanow, interactive, ios]
draft: false
description: Interactive hash-table occupancy lab for key distribution, load factor, and collisions.
created: 2014-04-08
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Exposing NSDictionary

> [!info] Source
> Original article: [Exposing NSDictionary](https://ciechanow.ski/exposing-nsdictionary/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="dict-keys">keys inserted</label>
      <input id="dict-keys" data-control="keys" type="range" min="4" max="320" step="1" value="120" />
    </div>
    <div class="interactive-sim-control">
      <label for="dict-buckets">bucket count</label>
      <input id="dict-buckets" data-control="buckets" type="range" min="4" max="64" step="1" value="24" />
    </div>
    <div class="interactive-sim-control">
      <label for="dict-seed">hash seed</label>
      <input id="dict-seed" data-control="seed" type="range" min="0" max="1" step="0.01" value="0.41" />
    </div>
    <button data-control="reset" type="button">reset table</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use balanced key/bucket settings as a baseline occupancy profile.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="162" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="34" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower key pressure to inspect low-load collision behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="67" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="13" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.2" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise key pressure against buckets to surface hotspot formation quickly.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="257" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="55" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix moderate keys with shifted seed to isolate distribution sensitivity.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="99" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="49" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.4" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-limit load conditions to stress collision and clustering behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="20" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="61" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a steady mid-high load and compare occupancy repeatability across seeds.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exposing-nsdictionary">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Hash bucket occupancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>keys inserted</label>
      <input data-control="keys" type="range" min="4" max="320" step="1" value="194" />
    </div>
    <div class="interactive-sim-control">
      <label>bucket count</label>
      <input data-control="buckets" type="range" min="4" max="64" step="1" value="43" />
    </div>
    <div class="interactive-sim-control">
      <label>hash seed</label>
      <input data-control="seed" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Dictionary performance depends on distribution quality, not just average complexity claims. Bucket occupancy is where collisions become visible.

## Session 2: Model

The simulation hashes synthetic keys into a configurable bucket array and charts occupancy. A collision counter tracks overfilled buckets relative to ideal one-key-per-slot behavior.

## Session 3: Control Lab

Raise key count at fixed buckets to force collisions. Then increase bucket count and compare load factor reduction. Finally vary seed to inspect distribution sensitivity.

## Session 4: What to Observe

Two tables can share the same load factor but still show different hotspot profiles. Distribution quality and resize policy both matter.

## Session 5: Limits and Simplifications

This is a conceptual occupancy model. It does not replicate Objective-C runtime object headers, probe sequences, or exact hashing internals.

## Session 6: References

- Primary inspiration: [Exposing NSDictionary](https://ciechanow.ski/exposing-nsdictionary/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into hash occupancy patterns with repeatable presets for comparison and testing.

## Why this matters

Hash-table behavior affects caching, indexing, and request routing performance. Visualizing collisions and bucket pressure makes map/dictionary tradeoffs concrete.

## Try these experiments

1. Hold bucket count steady and sweep keys inserted from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep bucket count while keeping keys inserted fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Exposing NSMutableArray]]
- [[Exposing Floating Point]]
- [[Exploring GPGPU on iOS]]
