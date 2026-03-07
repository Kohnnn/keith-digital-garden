---
title: Bicycle
tags: [portfolio, blog, external, ciechanow, interactive, mechanics]
draft: false
description: Interactive bicycle kinematics sandbox for steering, velocity, and turning radius intuition.
created: 2023-03-28
updated: 2026-03-07
aliases: [Portfolio/Stuffs/Bicycle]
cssclasses: [external-canvas-note, note-lab]
---

# Bicycle

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/bicycle/" target="_blank" rel="noopener noreferrer">Bicycle by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The interesting part of bicycle motion is not the bike icon moving across the screen. It is the way steering angle quietly turns into curvature. This version keeps one main path view up front, then breaks the geometry into smaller comparison states so you can read what changes and what does not.</p>

<div class="interactive-sim" data-sim-scene="bicycle">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Bicycle kinematics simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bike-steer">steering angle</label>
      <input id="bike-steer" data-control="steer" type="range" min="-35" max="35" step="0.5" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="bike-speed">velocity</label>
      <input id="bike-speed" data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="1.5" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>

## Steering regimes

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Gentle carve</h3>
    <p>Low steering angles reveal how slowly curvature accumulates when geometry stays conservative.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="bicycle">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Gentle bicycle turn comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>steer</label>
          <input data-control="steer" type="range" min="-35" max="35" step="0.5" value="8" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="1.3" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Tight turn</h3>
    <p>Pushing steering harder makes the path close faster and exposes how sensitive the trail is to small angle changes.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="bicycle">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Tight bicycle turn comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>steer</label>
          <input data-control="steer" type="range" min="-35" max="35" step="0.5" value="24" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="1.3" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

<div class="analysis-panel">
  <span class="casefile-label">Analysis</span>
  <p>The original article teaches by isolating a single geometric relationship at a time. That is the right reading pattern here too. First hold speed steady and learn what steering alone does to the radius. Only after that should you bring time back into the picture, because most people confuse faster travel with tighter turning when the underlying curvature has not actually changed.</p>
</div>

## Same steer, different elapsed path

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare C</span>
    <h3>Slow accumulation</h3>
    <p>With the same steering value, lower speed makes the trail feel calmer even though the path logic is unchanged.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="bicycle">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Slow bicycle path comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>steer</label>
          <input data-control="steer" type="range" min="-35" max="35" step="0.5" value="16" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="0.8" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare D</span>
    <h3>Fast accumulation</h3>
    <p>The curve is not fundamentally different, but the visual path closes much more quickly because time passes over more ground.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="bicycle">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Fast bicycle path comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>steer</label>
          <input data-control="steer" type="range" min="-35" max="35" step="0.5" value="16" />
        </div>
        <div class="interactive-sim-control">
          <label>speed</label>
          <input data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="2.6" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Curvature is geometry</h3>
    <p>The path shape comes from steering and wheelbase constraints before anything interesting about dynamics enters the picture.</p>
  </div>
  <div class="observation-card">
    <h3>Speed changes pacing</h3>
    <p>Higher speed mostly changes how quickly the trail is laid down, which is why it often gets mistaken for a different turning rule.</p>
  </div>
  <div class="observation-card">
    <h3>The trail is the teacher</h3>
    <p>Watching the integrated path is more useful than staring at the vehicle, because the accumulated error and curvature become visible.</p>
  </div>
</div>

## Try this reading sequence

<ol class="experiment-list">
  <li>Start at low speed and sweep steering from near-zero to aggressive. Watch when the turn stops feeling like drift and starts feeling like a committed arc.</li>
  <li>Reset to a middle steering value and compare slow versus fast travel. Separate path geometry from time-on-path.</li>
  <li>Use a negative steer value after a positive one to make the left/right symmetry explicit.</li>
</ol>

## Limits

- No lean, slip angle, tire model, or stability corrections
- Built for steering intuition rather than full vehicle dynamics
- Best read as a geometric control toy, not a road-physics simulator

## Related Notes

- [[Gears]]
- [[Mechanical Watch]]
- [[Internal Combustion Engine]]
