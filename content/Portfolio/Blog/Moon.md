---
title: Moon
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive moon orbit and lighting explainer by Bartosz Ciechanowski.
created: 2024-12-17
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Moon

> [!info] Source
> Original article: [Moon](https://ciechanow.ski/moon/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="moon-phase">lunar phase</label>
      <input id="moon-phase" data-control="phase" type="range" min="0" max="1" step="0.001" value="0.15" />
    </div>
    <button data-control="reset" type="button">reset phase</button>
  </div>
</div>

The renderer is implemented locally with WebGL for sphere shading and a Canvas overlay for metadata.
The phase slider rotates the directional light vector around the moon to mimic waxing/waning behavior.

## Session 1: Intuition
Lunar phases are an illumination problem, not a shape-change problem. The moon keeps its geometry while sunlight direction and observer framing determine the visible lit fraction.

## Session 2: Model
This version uses a shader-based sphere normal calculation and directional light vector. Procedural crater/maria noise creates texture variation without external assets.

## Session 3: Control Lab
Sweep the phase slider slowly and watch the terminator travel across surface features. Compare near-crescent and near-full regions to see how normal direction affects local contrast.

## Session 4: What to Observe
Rim lighting and grazing illumination are strongest near phase transitions. Surface texture appears to reorganize because lighting angle changes how relief information is encoded.

## Session 5: Limits and Simplifications
No real ephemeris, libration, or physically accurate BRDF is applied. This simulation is tuned for fast visual intuition and smooth browser performance.

## Session 6: References
- Primary inspiration: [Moon](https://ciechanow.ski/moon/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
