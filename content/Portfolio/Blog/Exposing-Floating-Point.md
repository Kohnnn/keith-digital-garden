---
title: Exposing Floating Point
tags: [portfolio, blog, external, ciechanow, interactive, computation]
draft: false
description: Interactive floating point representation explainer.
created: 2019-01-01
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Exposing Floating Point

> [!info] Source
> Original article: [Exposing Floating Point](https://ciechanow.ski/exposing-floating-point/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="float-value">value</label>
      <input id="float-value" data-control="value" type="range" min="-64" max="64" step="0.01" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="float-step">delta step</label>
      <input id="float-step" data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.01" />
    </div>
    <button data-control="reset" type="button">reset values</button>
  </div>
</div>

## Session 1: Intuition
Floating-point numbers are encoded approximations. What looks continuous in decimal is segmented in binary by sign, exponent, and mantissa fields.

## Session 2: Model
The simulator converts a 32-bit float into its bit layout and displays all field boundaries. A secondary probe shows how adding a small delta changes representation.

## Session 3: Control Lab
Slide near zero with tiny steps, then move to larger magnitudes. Compare how quickly mantissa bits shift and when exponent changes occur. This reveals precision redistribution across scales.

## Session 4: What to Observe
Resolution is non-uniform: values near zero have different spacing behavior than large values. This is why numerical stability checks must consider scale and operation order.

## Session 5: Limits and Simplifications
Only Float32 layout is shown here. No denormal edge-case visualizer or NaN payload decoder is included yet. The focus is representational intuition for day-to-day engineering decisions.

## Session 6: References
- Primary inspiration: [Exposing Floating Point](https://ciechanow.ski/exposing-floating-point/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
