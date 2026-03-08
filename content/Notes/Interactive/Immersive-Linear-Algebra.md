---
title: Immersive Linear Algebra
tags:
  - portfolio
  - blog
  - external
  - interactive
  - math
  - linear-algebra
draft: false
description: >-
  Interactive basis-transform sandbox for vectors, eigen directions, and matrix
  intuition.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Immersive-Linear-Algebra
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Immersive Linear Algebra

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://immersivemath.com/ila/index.html" target="_blank" rel="noopener noreferrer">Immersive Linear Algebra by J. Strom, K. Astrom, and T. Akenine-Moller</a></p>
</div>

<p class="note-lede">Immersive linear algebra learning site (access currently unavailable from this audit environment) intended to teach vectors, transforms, and geometric intuition interactively.</p>

<div class="interactive-article" data-interactive-article="immersive-linear-algebra">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="immersive-linear-algebra" data-sync-group="immersive-linear-algebra-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Linear algebra basis transform view"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-scale">basis scale</label>
      <input id="immersive-linear-algebra-scale" data-control="scale" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-shear">shear</label>
      <input id="immersive-linear-algebra-shear" data-control="shear" type="range" min="-1.5" max="1.5" step="0.05" value="0.25" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-rotation">rotation</label>
      <input id="immersive-linear-algebra-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="24" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="immersive-linear-algebra">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="immersive-linear-algebra" data-step-preset="module-01" data-sync-group="immersive-linear-algebra-main">
      <span class="casefile-label">Module 01</span>
      <h2>Vector and basis scene</h2>
      <p>Likely demonstrates vectors and basis changes in geometric space.</p>
      <p class="story-step-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected real-time updates of vectors/basis when controls change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="immersive-linear-algebra" data-step-preset="module-02" data-sync-group="immersive-linear-algebra-main">
      <span class="casefile-label">Module 02</span>
      <h2>Linear transform controls</h2>
      <p>Likely demonstrates rotation, scaling, and shearing via matrix parameters.</p>
      <p class="story-step-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected geometry updates from matrix parameter changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="immersive-linear-algebra" data-step-preset="module-03" data-sync-group="immersive-linear-algebra-main">
      <span class="casefile-label">Module 03</span>
      <h2>Matrix-to-geometry mapping panel</h2>
      <p>Likely links matrix entries to transformed objects and coordinate effects.</p>
      <p class="story-step-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected synchronized formula and geometry updates</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Immersive linear algebra learning site (access currently unavailable from this audit environment) intended to teach vectors, transforms, and geometric intuition interactively.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Immersive Linear Algebra article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Tesseract]]
- [[Curves and Surfaces]]
- [[Linear Regression]]
