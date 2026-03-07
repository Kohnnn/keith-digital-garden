---
title: Alpha Compositing
tags: [portfolio, blog, external, ciechanow, interactive, graphics]
draft: false
description: Interactive alpha blending lab for layer order, opacity, and overlap behavior.
created: 2019-07-24
updated: 2026-03-07
aliases: [Portfolio/Stuffs/Alpha-Compositing]
cssclasses: [external-canvas-note, note-lab]
---

# Alpha Compositing

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/alpha-compositing/" target="_blank" rel="noopener noreferrer">Alpha Compositing by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Transparency only looks simple when you ignore the background and the stack order. Once two semi-transparent layers start overlapping, the pixel becomes a negotiation. These smaller states turn that negotiation into something you can read, not just vaguely sense.</p>

<div class="interactive-sim" data-sim-scene="alpha-compositing">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Alpha compositing experiment"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-a">layer A alpha</label>
      <input id="alpha-a" data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.64" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-b">layer B alpha</label>
      <input id="alpha-b" data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-mix">separation mix</label>
      <input id="alpha-mix" data-control="mix" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset layers</button>
  </div>
</div>

## Blend states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Balanced overlap</h3>
    <p>When the layers are similarly opaque, the intersection reads like a negotiated mixture rather than a clear winner.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="alpha-compositing">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Balanced alpha compositing comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>alpha A</label>
          <input data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.58" />
        </div>
        <div class="interactive-sim-control">
          <label>alpha B</label>
          <input data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.56" />
        </div>
        <div class="interactive-sim-control">
          <label>mix</label>
          <input data-control="mix" type="range" min="0" max="1" step="0.01" value="0.48" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Dominant foreground</h3>
    <p>Raise one layer enough and the overlap stops feeling mixed. It starts feeling tinted by the dominant surface.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="alpha-compositing">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Dominant alpha layer comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>alpha A</label>
          <input data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.86" />
        </div>
        <div class="interactive-sim-control">
          <label>alpha B</label>
          <input data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.34" />
        </div>
        <div class="interactive-sim-control">
          <label>mix</label>
          <input data-control="mix" type="range" min="0" max="1" step="0.01" value="0.42" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare C</span>
    <h3>Separated layers</h3>
    <p>Pull the layers apart and the eye stops reasoning about blend altogether. It just sees two independent surfaces.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="alpha-compositing">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Separated alpha layers comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>alpha A</label>
          <input data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.62" />
        </div>
        <div class="interactive-sim-control">
          <label>alpha B</label>
          <input data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.62" />
        </div>
        <div class="interactive-sim-control">
          <label>mix</label>
          <input data-control="mix" type="range" min="0" max="1" step="0.01" value="0.9" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

<div class="analysis-panel">
  <span class="casefile-label">Analysis</span>
  <p>The original article is memorable because it treats compositing as math with consequences, not an art-tool checkbox. The key habit here is to stop saying “these colors blend” and instead ask “which surface remains visible after weighted stacking over a real background?” That question scales much better to charts, UI layers, and overlays.</p>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Alpha is weighted visibility</h3>
    <p>The overlap is not a simple average. It is the result of partial survival through the stack.</p>
  </div>
  <div class="observation-card">
    <h3>Background matters</h3>
    <p>The same alpha pair can look cleaner or muddier depending on what sits beneath the layers.</p>
  </div>
  <div class="observation-card">
    <h3>Separation changes reasoning</h3>
    <p>Once shapes stop overlapping, the brain stops solving a compositing problem and starts reading layout instead.</p>
  </div>
</div>

## Try this reading sequence

<ol class="experiment-list">
  <li>Begin with the balanced overlap state so your eye learns the mixed region.</li>
  <li>Raise one alpha aggressively and watch the intersection shift from blend to dominance.</li>
  <li>Then move the layers apart and notice how quickly the compositing question disappears.</li>
</ol>

## Limits

- Does not cover blend modes or full premultiplied-alpha pipelines
- Uses a compact 2-layer teaching setup rather than a production rendering stack
- Designed for intuition about stacking, not exhaustive graphics pipeline detail

## Related Notes

- [[Color Spaces]]
- [[Lights and Shadows]]
- [[Mesh Transforms]]
