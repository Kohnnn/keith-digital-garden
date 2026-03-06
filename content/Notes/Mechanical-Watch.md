---
title: Mechanical Watch
tags: [portfolio, blog, external, ciechanow, interactive, engineering]
draft: false
description: Interactive watch-train sandbox for gear ratio effects and long-run phase behavior.
created: 2022-05-04
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Mechanical-Watch]
cssclasses: [external-canvas-note, note-lab]
---

# Mechanical Watch

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/mechanical-watch/" target="_blank" rel="noopener noreferrer">Mechanical Watch by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">This scene compresses watch logic into visible ratio transfer. Use the main movement view to tune train speed and ratio, then compare a slow stable setup with a more aggressive high-ratio run.</p>

<div class="interactive-sim" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="watch-speed">train speed</label>
      <input id="watch-speed" data-control="speed" type="range" min="0.2" max="4" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="watch-ratio">gear ratio</label>
      <input id="watch-ratio" data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset movement</button>
  </div>
</div>

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Slow transmission</h3>
    <p>Lower speed and moderate ratio make it easier to track where each wheel hands motion to the next.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Slow watch train comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="0.85" />
        </div>
        <div class="interactive-sim-control">
          <label>ratio</label>
          <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="0.72" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Fast train</h3>
    <p>Higher ratio and speed expose how quickly tiny cadence differences accumulate over time.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="mechanical-watch">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Fast watch train comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.2" max="4" step="0.05" value="3.1" />
        </div>
        <div class="interactive-sim-control">
          <label>ratio</label>
          <input data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="1.5" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Ratios cascade</h3>
    <p>Each gear does not just pass motion along. It transforms cadence for every wheel downstream.</p>
  </div>
  <div class="observation-card">
    <h3>Direction flips</h3>
    <p>Meshing contacts invert direction, which is why even a simple train feels richer than a single spinning disk.</p>
  </div>
  <div class="observation-card">
    <h3>Drift reveals itself later</h3>
    <p>Short runs look stable. Longer runs expose how quickly phase differences build.</p>
  </div>
</div>

## Limits

- No escapement or spring torque model
- No backlash or friction losses
- Focused on visible kinematics rather than full horology

## Related notes

- [[Gears]]
- [[Internal Combustion Engine]]
- [[Bicycle]]
