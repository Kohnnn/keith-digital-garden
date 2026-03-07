---
title: Lights and Shadows
tags: [portfolio, blog, external, ciechanow, interactive, rendering]
draft: false
description: Interactive lighting geometry lab for angle, elevation, and penumbra softness effects.
created: 2020-07-01
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Lights-and-Shadows]
cssclasses: [external-canvas-note, note-lab]
---

# Lights and Shadows

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/lights-and-shadows/" target="_blank" rel="noopener noreferrer">Lights and Shadows by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">This note treats shadows as geometry instead of atmosphere. Move the light angle, raise or lower the source, then soften the penumbra to see how projection changes.</p>

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

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Long hard shadow</h3>
    <p>Lower the light and reduce softness to get a long, sharp projection footprint.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Hard shadow comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>angle</label>
          <input data-control="angle" type="range" min="5" max="175" step="1" value="34" />
        </div>
        <div class="interactive-sim-control">
          <label>height</label>
          <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.28" />
        </div>
        <div class="interactive-sim-control">
          <label>softness</label>
          <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.12" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Soft elevated source</h3>
    <p>Raise the light and widen softness to compress the footprint and blur the edge.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="lights-and-shadows">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Soft shadow comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>angle</label>
          <input data-control="angle" type="range" min="5" max="175" step="1" value="138" />
        </div>
        <div class="interactive-sim-control">
          <label>height</label>
          <input data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.9" />
        </div>
        <div class="interactive-sim-control">
          <label>softness</label>
          <input data-control="softness" type="range" min="0" max="1" step="0.01" value="0.82" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Projection geometry</h3>
    <p>Shadow length comes from light position and intersection geometry, not from the object changing.</p>
  </div>
  <div class="observation-card">
    <h3>Penumbra as transition</h3>
    <p>Softness widens the edge region rather than changing the core occlusion logic.</p>
  </div>
  <div class="observation-card">
    <h3>Angle and height interact</h3>
    <p>Two lights with similar angles can still produce very different shadows if their elevation changes.</p>
  </div>
</div>

## Limits

- No global illumination
- No volumetric scattering
- Built to show direct-light projection behavior

## Related notes

- [[Airfoil]]
- [[Cameras and Lenses]]
- [[Color Spaces]]
