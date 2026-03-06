---
title: Moon
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive lunar phase renderer for directional lighting, terminator motion, and contrast.
created: 2024-12-17
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Moon]
cssclasses: [external-canvas-note, note-lab]
---

# Moon

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/moon/" target="_blank" rel="noopener noreferrer">Moon by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">This version keeps one main phase scrubber up front, then uses smaller compare views to make the terminator movement easier to read. The goal is not astronomical precision. It is lighting intuition.</p>

<div class="interactive-sim" data-sim-scene="moon">
  <div class="interactive-sim-stage">
    <canvas class="sim-webgl" aria-label="Moon WebGL renderer"></canvas>
    <canvas class="sim-overlay" aria-hidden="true"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="moon-phase">phase scrubber</label>
      <input id="moon-phase" data-control="phase" type="range" min="0" max="1" step="0.001" value="0.15" />
    </div>
    <button data-control="reset" type="button">reset phase</button>
  </div>
</div>

## Terminator compare

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Crescent lighting</h3>
    <p>Start near the edge of illumination to see how grazing light exaggerates local relief.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-webgl" aria-label="Crescent moon comparison"></canvas>
        <canvas class="sim-overlay" aria-hidden="true"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>phase</label>
          <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.08" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Gibbous lighting</h3>
    <p>Shift toward a fuller phase to watch contrast flatten and the lit area broaden.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="moon">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-webgl" aria-label="Gibbous moon comparison"></canvas>
        <canvas class="sim-overlay" aria-hidden="true"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>phase</label>
          <input data-control="phase" type="range" min="0" max="1" step="0.001" value="0.72" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Lighting, not shape</h3>
    <p>The moon does not change form. The light direction changes what surface information becomes visible.</p>
  </div>
  <div class="observation-card">
    <h3>Terminator motion</h3>
    <p>Most of the drama comes from the moving boundary between lit and dark regions.</p>
  </div>
  <div class="observation-card">
    <h3>Relief encoding</h3>
    <p>Near-crescent views make shallow surface detail feel deeper because the lighting is more oblique.</p>
  </div>
</div>

## Limits

- No real ephemeris or libration model
- Procedural texture instead of mapped lunar terrain
- Tuned for browser readability, not physical photometry

## Related notes

- [[Earth and Sun]]
- [[GPS]]
- [[Lights and Shadows]]
