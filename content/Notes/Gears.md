---
title: Gears
tags: [portfolio, blog, external, ciechanow, interactive, mechanics]
draft: false
description: Interactive gear-train sandbox for ratio transfer, direction inversion, and phase drift.
created: 2020-02-12
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Gears]
cssclasses: [external-canvas-note, note-lab]
---

# Gears

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gears/" target="_blank" rel="noopener noreferrer">Gears by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The gear scene is a clean ratio calculator disguised as an animation. Drive one wheel, change the idler size, and the output speed changes immediately.</p>

<div class="interactive-sim" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-drive">drive velocity</label>
      <input id="gears-drive" data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-idler">idler scale</label>
      <input id="gears-idler" data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset train</button>
  </div>
</div>

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Balanced train</h3>
    <p>Start here if you want the ratio logic without too much phase drift.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Balanced gear train comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>drive</label>
          <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.4" />
        </div>
        <div class="interactive-sim-control">
          <label>idler</label>
          <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.05" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Fast output change</h3>
    <p>Push the ratio and drive together to see the output wheel diverge quickly from the input cadence.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="gears">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="High-ratio gear comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>drive</label>
          <input data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="2.4" />
        </div>
        <div class="interactive-sim-control">
          <label>idler</label>
          <input data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1.58" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Speed versus torque</h3>
    <p>Gear choices trade one kind of mechanical advantage for another.</p>
  </div>
  <div class="observation-card">
    <h3>Direction inversion</h3>
    <p>Every meshing contact flips rotation, which is why idlers matter even when they do not change the target ratio much.</p>
  </div>
  <div class="observation-card">
    <h3>Phase matters over time</h3>
    <p>Small speed differences feel small at first, then become impossible to ignore.</p>
  </div>
</div>

## Limits

- No contact deformation or load transfer
- No lubrication or efficiency model
- Kinematic ratio intuition only

## Related notes

- [[Mechanical Watch]]
- [[Bicycle]]
- [[Internal Combustion Engine]]
