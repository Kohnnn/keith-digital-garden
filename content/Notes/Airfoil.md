---
title: Airfoil
tags: [portfolio, blog, external, ciechanow, interactive, physics]
draft: false
description: Interactive lift sandbox for angle-of-attack, flow speed, and streamline intuition.
created: 2024-02-27
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Airfoil]
cssclasses: [external-canvas-note, note-lab]
---

# Airfoil

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/airfoil/" target="_blank" rel="noopener noreferrer">Airfoil by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">This is a browser-first lift intuition lab. Use the main view to sweep angle of attack, then compare a calmer cruise setup with a more aggressive high-angle case.</p>

<div class="interactive-sim" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-aoa">angle of attack</label>
      <input id="airfoil-aoa" data-control="aoa" type="range" min="-20" max="20" step="0.5" value="3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-speed">flow speed</label>
      <input id="airfoil-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="1.4" />
    </div>
    <button data-control="reset" type="button">reset flow</button>
  </div>
</div>

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Neutral cruise</h3>
    <p>Low angle and steady flow make it easier to read asymmetry without stall-like drama.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Neutral airfoil comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>angle</label>
          <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="0" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="1.5" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>High-angle push</h3>
    <p>Increase angle and speed to inspect sharper streamline bending and a more dramatic wake.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="airfoil">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="High-angle airfoil comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>angle</label>
          <input data-control="aoa" type="range" min="-20" max="20" step="0.5" value="11" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="2.2" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Asymmetry first</h3>
    <p>Angle of attack changes the field shape more directly than speed does.</p>
  </div>
  <div class="observation-card">
    <h3>Speed as transport</h3>
    <p>Higher speed makes the pattern move faster, but geometry still decides the larger shape.</p>
  </div>
  <div class="observation-card">
    <h3>Not CFD</h3>
    <p>This scene is tuned for conceptual reasoning, not for accurate boundary-layer or stall prediction.</p>
  </div>
</div>

## Limits

- No turbulence or compressibility model
- No pressure solver or quantitative lift output
- Built for intuition and browser clarity

## Related notes

- [[Lights and Shadows]]
- [[Cameras and Lenses]]
- [[Earth and Sun]]
