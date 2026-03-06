---
title: Color Spaces
tags: [portfolio, blog, external, ciechanow, interactive, color]
draft: false
description: Interactive RGB sandbox for channel mixing, luminance shifts, and color perception tradeoffs.
created: 2019-02-15
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Color Spaces

> [!info] Source
> Original article: [Color Spaces](https://ciechanow.ski/color-spaces/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-r">red channel</label>
      <input id="color-r" data-control="r" type="range" min="0" max="1" step="0.01" value="0.56" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-g">green channel</label>
      <input id="color-g" data-control="g" type="range" min="0" max="1" step="0.01" value="0.34" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-b">blue channel</label>
      <input id="color-b" data-control="b" type="range" min="0" max="1" step="0.01" value="0.82" />
    </div>
    <button data-control="reset" type="button">reset channels</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Start with balanced channels to establish a neutral luminance reference.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower channels to inspect dark-region sensitivity and hue retention at low energy.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.2" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.15" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.2" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Raise channels to analyze bright-region compression and luma dominance.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.8" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Set asymmetric RGB values to separate vivid hue shifts from brightness shifts.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.3" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.4" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Use near-extreme channel splits to surface clipping-like visual behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.05" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.95" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run mid-high channel mixes and compare perceived stability across subtle slider moves.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>red channel</label>
      <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label>green channel</label>
      <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label>blue channel</label>
      <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

Color spaces are coordinate systems for perception and display. Changing one channel can shift both hue and brightness, so isolated edits are rarely perceptually isolated.

## Session 2: Model

This scene renders three channel-specific gradients and a live sample swatch. Luma is calculated from weighted RGB contributions to expose why equal numeric steps are not equal visual steps.

## Session 3: Control Lab

Push one channel while freezing the others. Then test balanced adjustments across all channels. Compare how quickly luma changes under green-heavy moves versus blue-heavy moves.

## Session 4: What to Observe

Green dominates perceived luminance in common transfer formulas. Strong blue can feel vivid while still contributing less to brightness than expected.

## Session 5: Limits and Simplifications

This page does not include gamma transforms, gamut mapping, or CIE conversions. It is a practical RGB-first surface for intuition before formal colorimetry.

## Session 6: References

- Primary inspiration: [Color Spaces](https://ciechanow.ski/color-spaces/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into perceptual color behavior with repeatable presets for comparison and testing.

## Why this matters

Color-space intuition matters for design systems, video pipelines, and accessibility checks. Understanding channel and luma behavior helps you avoid visual regressions across displays.

## Try these experiments

1. Hold green channel steady and sweep red channel from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep green channel while keeping red channel fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Alpha Compositing]]
- [[Lights and Shadows]]
- [[Exposing Floating Point]]
