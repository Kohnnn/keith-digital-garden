---
title: Exposing Floating Point
tags: [portfolio, blog, external, ciechanow, interactive, computation]
draft: false
description: Interactive Float32 visualizer for sign/exponent/mantissa behavior across numeric scales.
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

## Interactive Lab 2: Baseline Comparator

Start from a mid-scale value to compare bit transitions with minimal bias.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.010001" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Move value and step low to inspect precision behavior close to zero.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="-1.28" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.000201" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Push value magnitude and delta upward to observe exponent-driven spacing changes.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="51.2" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.250001" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Mix small value with larger delta to separate ULP density from jump size.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="2.56" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.030001" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use edge numeric ranges to expose abrupt representational boundaries.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="61.44" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.9" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run repeated mid-high probes and compare whether mantissa movement stays predictable.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="floating-point">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Floating-point bit decomposition"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>value</label>
      <input data-control="value" type="range" min="-64" max="64" step="0.01" value="10.24" />
    </div>
    <div class="interactive-sim-control">
      <label>delta step</label>
      <input data-control="step" type="range" min="0.000001" max="1" step="0.000001" value="0.050001" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
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

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into Float32 precision boundaries with repeatable presets for comparison and testing.

## Why this matters

Floating-point behavior drives correctness in rendering, simulation, and finance code. Bit-level intuition helps you avoid subtle precision bugs and unstable comparisons.

## Try these experiments

1. Hold delta step steady and sweep value from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep delta step while keeping value fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Color Spaces]]
- [[Exposing NSDictionary]]
- [[Exposing NSMutableArray]]
