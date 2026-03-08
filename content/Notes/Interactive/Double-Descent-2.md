---
title: Double Descent 2
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Interactive second-pass double-descent view for interpolation width and data
  scaling.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Double-Descent-2
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Double Descent 2

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/double-descent2/" target="_blank" rel="noopener noreferrer">Double Descent 2 by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.</p>

<div class="interactive-article" data-interactive-article="double-descent-2">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="double-descent-2" data-sync-group="double-descent-2-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Double descent variant curve"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-capacity">capacity</label>
      <input id="double-descent-2-capacity" data-control="capacity" type="range" min="0.2" max="3.2" step="0.02" value="1.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-width">interpolation width</label>
      <input id="double-descent-2-width" data-control="width" type="range" min="0.2" max="1.8" step="0.02" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-noise">noise</label>
      <input id="double-descent-2-noise" data-control="noise" type="range" min="0" max="0.6" step="0.01" value="0.14" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="double-descent-2">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="double-descent-2" data-step-preset="module-01" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-expl AI n</h2>
      <p>Explains MLU-expl AI n within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="double-descent-2" data-step-preset="module-02" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 02</span>
      <h2>Double Descent</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="double-descent-2" data-step-preset="module-03" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 03</span>
      <h2>Part 2: A Mathematical Explanation</h2>
      <p>Explains Part 2: A Mathematical Explanation within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="double-descent-2" data-step-preset="module-04" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 04</span>
      <h2>Brent Werness & Jared Wilber , December 2021</h2>
      <p>Explains Brent Werness & Jared Wilber , December 2021 within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="double-descent-2" data-step-preset="module-05" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 05</span>
      <h2>A Sketch of the Mathematics</h2>
      <p>Explains A Sketch of the Mathematics within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="double-descent-2" data-step-preset="module-06" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 06</span>
      <h2>Our Piecewise Linear Model</h2>
      <p>Explains Our Piecewise Linear Model within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="double-descent-2" data-step-preset="module-07" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 07</span>
      <h2>Below The Interpolation Threshold</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="double-descent-2" data-step-preset="module-08" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 08</span>
      <h2>At The Interpolation Threshold</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="double-descent-2" data-step-preset="module-09" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 09</span>
      <h2>To Infinity! (But Not Beyond)</h2>
      <p>Explains To Infinity! (But Not Beyond) within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="double-descent-2" data-step-preset="module-10" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 10</span>
      <h2>Summary</h2>
      <p>Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="double-descent-2" data-step-preset="module-11" data-sync-group="double-descent-2-main">
      <span class="casefile-label">Module 11</span>
      <h2>Resources + Open Source:</h2>
      <p>Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Double Descent 2 article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Double Descent]]
- [[The Bias Variance Tradeoff]]
- [[Random Forest]]
