---
title: Alpha Compositing
tags: [portfolio, blog, external, ciechanow, interactive, graphics]
draft: false
description: Interactive alpha blending lab for layer order, opacity, and overlap behavior.
created: 2019-07-24
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Alpha-Compositing]
cssclasses: [external-canvas-note, note-lab]
---

# Alpha Compositing

> [!info] Source
> Original article: [Alpha Compositing](https://ciechanow.ski/alpha-compositing/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="alpha-compositing">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Alpha compositing experiment"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-a">layer A alpha</label>
      <input id="alpha-a" data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.64" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-b">layer B alpha</label>
      <input id="alpha-b" data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-mix">separation mix</label>
      <input id="alpha-mix" data-control="mix" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset layers</button>
  </div>
</div>

## Session 1: Intuition

Compositing is weighted visibility, not simple color averaging. The order and opacity of layers determine what survives into the final pixel.

## Session 2: Model

Two translucent circles are rendered over a checkerboard background. Alpha values and overlap distance can be changed independently to expose blending behavior in the overlap region.

## Session 3: Control Lab

Set both alphas high and sweep separation. Then lower one alpha while keeping overlap fixed. Track which layer dominates and how the intersection transitions from tinting to masking.

## Session 4: What to Observe

Background context matters: the same alpha pair can look different over light and dark checks. This is why compositing design often needs multiple background tests.

## Session 5: Limits and Simplifications

Blend modes, linear-light workflows, and premultiplied alpha pipelines are not fully represented. The purpose is to make core alpha reasoning visible and immediate.

## Session 6: References

- Primary inspiration: [Alpha Compositing](https://ciechanow.ski/alpha-compositing/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into layer compositing logic with repeatable presets for comparison and testing.

## Why this matters

Alpha compositing decisions affect UI readability, chart overlays, and image tooling every day. Strong intuition about stacking and transparency prevents muddy layers and unexpected color loss.

## Try these experiments

1. Hold layer B alpha steady and sweep layer A alpha from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep layer B alpha while keeping layer A alpha fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Color Spaces]]
- [[Lights and Shadows]]
- [[Mesh Transforms]]
