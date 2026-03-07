---
title: Earth and Sun
tags: [portfolio, blog, external, ciechanow, interactive, astronomy]
draft: false
description: Interactive orbit-tilt model for seasonal illumination and hemispheric contrast intuition.
created: 2019-10-16
updated: 2026-03-07
aliases: [Portfolio/Stuffs/Earth-and-Sun]
cssclasses: [external-canvas-note, note-lab]
---

# Earth and Sun

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/earth-and-sun/" target="_blank" rel="noopener noreferrer">Earth and Sun by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Seasonality is a geometry story before it is a climate story. Distance from the sun is the popular explanation, but axial tilt does most of the visual work. The compare states below are meant to make that argument harder to miss.</p>

<div class="interactive-sim" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="earth-day">orbital day</label>
      <input id="earth-day" data-control="day" type="range" min="0" max="365" step="1" value="90" />
    </div>
    <div class="interactive-sim-control">
      <label for="earth-tilt">axial tilt</label>
      <input id="earth-tilt" data-control="tilt" type="range" min="0" max="35" step="0.1" value="23.5" />
    </div>
    <button data-control="reset" type="button">reset orbit</button>
  </div>
</div>

## Seasonal states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Near equinox</h3>
    <p>Moderate orbital position with standard tilt keeps the hemispheres closer to balance.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Earth equinox comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>day</label>
          <input data-control="day" type="range" min="0" max="365" step="1" value="80" />
        </div>
        <div class="interactive-sim-control">
          <label>tilt</label>
          <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="23.5" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Solstice asymmetry</h3>
    <p>At the same tilt, a different orbital position makes the hemispheric contrast obvious and dramatic.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Earth solstice comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>day</label>
          <input data-control="day" type="range" min="0" max="365" step="1" value="172" />
        </div>
        <div class="interactive-sim-control">
          <label>tilt</label>
          <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="23.5" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare C</span>
    <h3>No-tilt stress test</h3>
    <p>Flatten the axis and the seasonal contrast almost disappears, even though the orbit still advances.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="earth-and-sun">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Zero-tilt Earth comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>day</label>
          <input data-control="day" type="range" min="0" max="365" step="1" value="172" />
        </div>
        <div class="interactive-sim-control">
          <label>tilt</label>
          <input data-control="tilt" type="range" min="0" max="35" step="0.1" value="0" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

<div class="analysis-panel">
  <span class="casefile-label">Analysis</span>
  <p>The best habit to carry over from the original article is resisting the easy story. “Closer means hotter” is tidy, but the tilt comparison exposes why it is incomplete. The useful mental model is not Earth moving nearer or farther. It is a rotating axis presenting each hemisphere to the incoming light at different angles over the year.</p>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Tilt writes the contrast</h3>
    <p>The stronger the tilt, the easier it is to see why one hemisphere receives a very different lighting story.</p>
  </div>
  <div class="observation-card">
    <h3>Day-of-year is the clock</h3>
    <p>The orbital day slider is useful because it reveals seasonality as a cycle rather than an isolated snapshot.</p>
  </div>
  <div class="observation-card">
    <h3>Distance is secondary here</h3>
    <p>The geometry already explains the core visual effect without needing a more complicated energy model.</p>
  </div>
</div>

## Try this reading sequence

<ol class="experiment-list">
  <li>Compare equinox and solstice at the same tilt to isolate the seasonal clock.</li>
  <li>Then compare solstice against the zero-tilt state to isolate the role of axial orientation.</li>
  <li>Return to the main sim and scrub through the year only after those contrasts feel obvious.</li>
</ol>

## Limits

- No atmospheric scattering or radiative transfer
- Built for orbital geometry intuition, not full climate modeling
- Keeps the story compact so the tilt effect remains visually central

## Related Notes

- [[Moon]]
- [[GPS]]
- [[Airfoil]]
