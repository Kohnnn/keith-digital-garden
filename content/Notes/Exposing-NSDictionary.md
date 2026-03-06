---
title: Exposing NSDictionary
tags: [portfolio, blog, external, ciechanow, interactive, ios]
draft: false
description: Interactive hash-table occupancy lab for key distribution, load factor, and collisions.
created: 2014-04-08
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Exposing-NSDictionary]
cssclasses: [external-canvas-note, note-lab]
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
