---
title: Color Spaces
tags: [portfolio, blog, external, ciechanow, interactive, color]
draft: false
description: Interactive RGB sandbox for channel mixing, luminance shifts, and color perception tradeoffs.
created: 2019-02-15
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Color-Spaces]
cssclasses: [external-canvas-note, note-lab]
---

# Color Spaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/color-spaces/" target="_blank" rel="noopener noreferrer">Color Spaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The scene itself is RGB-first, but the note is structured to help bridge from channel sliders to more perceptual thinking. Start with the live swatch, then compare neutral and saturated states.</p>

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

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Neutral mix</h3>
    <p>Balanced channels are the quickest way to separate brightness changes from hue changes.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Neutral RGB comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>red</label>
          <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.5" />
        </div>
        <div class="interactive-sim-control">
          <label>green</label>
          <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.5" />
        </div>
        <div class="interactive-sim-control">
          <label>blue</label>
          <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.5" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Saturated split</h3>
    <p>Asymmetric channels show how vivid color and luminance are related but not identical.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="color-spaces">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Saturated RGB comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>red</label>
          <input data-control="r" type="range" min="0" max="1" step="0.01" value="0.12" />
        </div>
        <div class="interactive-sim-control">
          <label>green</label>
          <input data-control="g" type="range" min="0" max="1" step="0.01" value="0.82" />
        </div>
        <div class="interactive-sim-control">
          <label>blue</label>
          <input data-control="b" type="range" min="0" max="1" step="0.01" value="0.86" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>RGB is a display space</h3>
    <p>The sliders describe emitted channel values, not how humans naturally describe color.</p>
  </div>
  <div class="observation-card">
    <h3>Green dominates brightness</h3>
    <p>Equal numeric changes in RGB do not create equal perceived changes in luminance.</p>
  </div>
  <div class="observation-card">
    <h3>HSV and LAB are mental tools</h3>
    <p>Even without a live conversion view here, it helps to think in hue/value or perceptual distance once the RGB behavior is clear.</p>
  </div>
</div>

## Limits

- No gamma transform controls
- No live gamut mapping or LAB conversion surface
- Focused on RGB intuition as the first layer

## Related notes

- [[Cameras and Lenses]]
- [[Lights and Shadows]]
- [[Alpha Compositing]]
