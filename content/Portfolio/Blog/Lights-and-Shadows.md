---
title: Lights and Shadows
tags: [portfolio, blog, external, ciechanow, interactive, rendering]
draft: false
description: Interactive light and shadow rendering explainer.
created: 2020-07-01
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Lights and Shadows

> [!info] Source
> Original article: [Lights and Shadows](https://ciechanow.ski/lights-and-shadows/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="shadow-angle">light angle</label>
      <input id="shadow-angle" data-control="angle" type="range" min="5" max="175" step="1" value="42" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-height">light height</label>
      <input id="shadow-height" data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-soft">penumbra softness</label>
      <input id="shadow-soft" data-control="softness" type="range" min="0" max="1" step="0.01" value="0.3" />
    </div>
    <button data-control="reset" type="button">reset light</button>
  </div>
</div>

## Session 1: Intuition
Shadows are projections of occlusion, not objects by themselves. Move the light and the projection geometry changes immediately.

## Session 2: Model
The scene casts rays from a movable source through blocker edges onto a ground plane. Multiple offset passes approximate penumbra softness to make edge behavior easier to inspect.

## Session 3: Control Lab
Lower light height and observe long shadows. Raise it and compare compression. Increase softness to transition from hard-edged umbra to wider blended penumbra.

## Session 4: What to Observe
Angle and height interact. Similar angles can produce very different footprints at different elevations because ray-ground intersections shift non-linearly.

## Session 5: Limits and Simplifications
No full global illumination, area-light integration, or volumetric scattering is modeled. The focus is direct-light projection geometry.

## Session 6: References
- Primary inspiration: [Lights and Shadows](https://ciechanow.ski/lights-and-shadows/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

#
