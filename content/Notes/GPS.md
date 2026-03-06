---
title: GPS
tags: [portfolio, blog, external, ciechanow, interactive, satellites]
draft: false
description: Interactive trilateration lab for satellite geometry, noise, and position uncertainty.
created: 2022-01-18
updated: 2026-03-06
aliases: [Portfolio/Stuffs/GPS]
cssclasses: [external-canvas-note, note-lab]
---

# GPS

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gps/" target="_blank" rel="noopener noreferrer">GPS by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">GPS is easiest to understand as a geometry problem. Drag the receiver, change the noise, and watch the circles stop agreeing with one another.</p>

<div class="interactive-sim" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-time">satellite spread</label>
      <input id="gps-time" data-control="time" type="range" min="0" max="6.283" step="0.01" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-noise">measurement noise</label>
      <input id="gps-noise" data-control="noise" type="range" min="0" max="2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset receiver</button>
  </div>
</div>

## Confidence compare

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Tight geometry</h3>
    <p>Lower noise and better spread produce a much smaller feasible region.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Low-noise GPS comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>spread</label>
          <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="1.24" />
        </div>
        <div class="interactive-sim-control">
          <label>noise</label>
          <input data-control="noise" type="range" min="0" max="2" step="0.01" value="0.08" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Noisy geometry</h3>
    <p>Higher noise widens the plausible area even if the receiver itself has not moved much.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="gps">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="High-noise GPS comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>spread</label>
          <input data-control="time" type="range" min="0" max="6.283" step="0.01" value="4.92" />
        </div>
        <div class="interactive-sim-control">
          <label>noise</label>
          <input data-control="noise" type="range" min="0" max="2" step="0.01" value="1.62" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Angular diversity</h3>
    <p>Spread-out satellites constrain the receiver better than clustered satellites.</p>
  </div>
  <div class="observation-card">
    <h3>Noise as area</h3>
    <p>Uncertainty does not feel like a point. It becomes a region that can stretch in specific directions.</p>
  </div>
  <div class="observation-card">
    <h3>Drag the receiver</h3>
    <p>The most useful interaction is moving the receiver and watching which satellites stop helping.</p>
  </div>
</div>

## Limits

- No clock-bias correction
- No atmospheric delay model
- Intended for trilateration intuition, not real navigation precision

## Related notes

- [[Moon]]
- [[Earth and Sun]]
- [[Cameras and Lenses]]
