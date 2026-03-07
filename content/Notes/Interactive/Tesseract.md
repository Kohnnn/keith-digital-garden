---
title: Tesseract
tags: [portfolio, blog, external, ciechanow, interactive, math]
draft: false
description: Interactive 4D projection sandbox for spin, depth, and adjacency-preserving structure.
created: 2019-12-10
updated: 2026-03-07
aliases: [Portfolio/Stuffs/Tesseract]
cssclasses: [external-canvas-note, note-lab]
---

# Tesseract

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/tesseract/" target="_blank" rel="noopener noreferrer">Tesseract by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">A tesseract is easier to read as a camera problem than a mystical one. The object itself is stable. What changes is the projection pipeline: how much four-dimensional depth you allow, how quickly the figure rotates, and which visual distortions your eye mistakes for topology.</p>

<div class="interactive-sim" data-sim-scene="tesseract">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tesseract projection simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="tesseract-spin">spin speed</label>
      <input id="tesseract-spin" data-control="spin" type="range" min="0.2" max="4" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="tesseract-depth">w-depth</label>
      <input id="tesseract-depth" data-control="depth" type="range" min="1.4" max="3.6" step="0.02" value="2.2" />
    </div>
    <button data-control="reset" type="button">reset projection</button>
  </div>
</div>

## Projection compare

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Shallow w-depth</h3>
    <p>Bringing the projection depth closer exaggerates perspective and makes the figure feel more volatile.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="tesseract">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Shallow tesseract depth comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>spin</label>
          <input data-control="spin" type="range" min="0.2" max="4" step="0.05" value="1.2" />
        </div>
        <div class="interactive-sim-control">
          <label>w-depth</label>
          <input data-control="depth" type="range" min="1.4" max="3.6" step="0.02" value="1.58" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Distant w-depth</h3>
    <p>Moving the projection surface farther away flattens the drama and reveals the adjacency structure more calmly.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="tesseract">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Distant tesseract depth comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>spin</label>
          <input data-control="spin" type="range" min="0.2" max="4" step="0.05" value="1.2" />
        </div>
        <div class="interactive-sim-control">
          <label>w-depth</label>
          <input data-control="depth" type="range" min="1.4" max="3.6" step="0.02" value="3.2" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

<div class="analysis-panel">
  <span class="casefile-label">Analysis</span>
  <p>The trap with higher-dimensional graphics is to read every strange overlap as a property of the object. Most of the strangeness actually belongs to the projection. That is why this page works best when you compare two depths with the same spin rate: one scene teaches drama, the other teaches structure.</p>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Crossings are suspicious</h3>
    <p>When edges appear to intersect, assume projection artifact first and topology second.</p>
  </div>
  <div class="observation-card">
    <h3>Spin teaches repetition</h3>
    <p>Rotation helps the mind notice persistent relationships that a static frame would hide.</p>
  </div>
  <div class="observation-card">
    <h3>Depth sets the mood</h3>
    <p>Low depth is dramatic and confusing. Higher depth is calmer and better for reading adjacency.</p>
  </div>
</div>

## Try this reading sequence

<ol class="experiment-list">
  <li>Start with the distant-depth comparison to memorize the object’s rough structure.</li>
  <li>Move back to the shallow-depth comparison and watch how the same structure now looks tangled.</li>
  <li>Use the main sim last so the sliders feel like camera controls rather than mystery controls.</li>
</ol>

## Limits

- Focused on projection literacy rather than exhaustive 4D rotation math
- Preserves adjacency intuition, not formal proof-level completeness
- The lesson is visual reasoning under projection, not algebraic rigor

## Related Notes

- [[Curves and Surfaces]]
- [[Mesh Transforms]]
- [[Drawing Bezier Curves]]
