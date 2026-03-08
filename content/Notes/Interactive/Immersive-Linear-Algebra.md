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
  Immersive linear algebra learning site (access currently unavailable from this
  audit environment) intended to teach vectors, transforms, and geometric
  intuition interactively.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Immersive-Linear-Algebra
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Immersive Linear Algebra

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://immersivemath.com/ila/index.html" target="_blank" rel="noopener noreferrer">Immersive Linear Algebra by J. Strom, K. Astrom, and T. Akenine-Moller</a></p>
</div>

<p class="note-lede">Immersive linear algebra learning site (access currently unavailable from this audit environment) intended to teach vectors, transforms, and geometric intuition interactively.</p>

<div class="interactive-article" data-interactive-article="immersive-linear-algebra">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Vector and basis scene</h2>
    <p>Likely demonstrates vectors and basis changes in geometric space.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected real-time updates of vectors/basis when controls change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="immersive-linear-algebra:module-01" data-sim-module="immersive-linear-algebra:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Vector and basis scene interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-01-scale">scale</label>
      <input id="immersive-linear-algebra-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-01-rotation">rotation</label>
      <input id="immersive-linear-algebra-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Linear transform controls</h2>
    <p>Likely demonstrates rotation, scaling, and shearing via matrix parameters.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected geometry updates from matrix parameter changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="immersive-linear-algebra:module-02" data-sim-module="immersive-linear-algebra:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Linear transform controls interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-02-scale">scale</label>
      <input id="immersive-linear-algebra-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-02-rotation">rotation</label>
      <input id="immersive-linear-algebra-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · chart/plot module</span>
    <h2>Matrix-to-geometry mapping panel</h2>
    <p>Likely links matrix entries to transformed objects and coordinate effects.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> unknown due access block. <strong>Response:</strong> expected synchronized formula and geometry updates</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="immersive-linear-algebra:module-03" data-sim-module="immersive-linear-algebra:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Matrix-to-geometry mapping panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-03-slack">slack</label>
      <input id="immersive-linear-algebra-module-03-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-03-damping">damping</label>
      <input id="immersive-linear-algebra-module-03-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="immersive-linear-algebra-module-03-drive">drive</label>
      <input id="immersive-linear-algebra-module-03-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>
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
    <p>Immersive Linear Algebra works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Tesseract]]
- [[Curves and Surfaces]]
- [[Linear Regression]]
