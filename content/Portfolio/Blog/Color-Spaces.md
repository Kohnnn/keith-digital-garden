---
title: Color Spaces
tags: [portfolio, blog, external, ciechanow, interactive, color]
draft: false
description: Interactive color spaces explainer.
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

#
