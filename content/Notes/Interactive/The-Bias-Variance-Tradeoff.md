---
title: The Bias Variance Tradeoff
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: "Interactive complexity curve for underfit, overfit, and total error reasoning."
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/The-Bias-Variance-Tradeoff
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# The Bias Variance Tradeoff

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/bias-variance/" target="_blank" rel="noopener noreferrer">The Bias Variance Tradeoff by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.</p>

<div class="interactive-article" data-interactive-article="the-bias-variance-tradeoff">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="the-bias-variance-tradeoff" data-sync-group="the-bias-variance-tradeoff-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bias variance tradeoff curve"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-complexity">model complexity</label>
      <input id="the-bias-variance-tradeoff-complexity" data-control="complexity" type="range" min="0.2" max="3" step="0.02" value="1.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-data">data richness</label>
      <input id="the-bias-variance-tradeoff-data" data-control="data" type="range" min="0.4" max="2.2" step="0.02" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-noise">noise floor</label>
      <input id="the-bias-variance-tradeoff-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="the-bias-variance-tradeoff">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-01" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-expl AI n</h2>
      <p>Explains MLU-expl AI n within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-02" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 02</span>
      <h2>The Bias Variance Tradeoff</h2>
      <p>Specifically, variance measures how much, on average, predictions vary for a given data point : As you can see in the bottom plot, predictions from overfit (high-complexity) mod...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-03" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 03</span>
      <h2>Jared Wilber & Brent Werness, January 2021</h2>
      <p>Explains Jared Wilber & Brent Werness, January 2021 within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-04" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 04</span>
      <h2>LOESS Regression</h2>
      <p>Visualizes decomposition of model error and sensitivity to complexity/smoothing choices.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-05" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 05</span>
      <h2>K-Nearest Neighbors</h2>
      <p>Hover over a point to see its classification to the right, and the K-nearest neighbors used for consideration to the left.</p>
      <p class="story-step-meta"><strong>Controls:</strong> hover. <strong>Response:</strong> hover reveals contextual overlays or future trajectory hints</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-06" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 06</span>
      <h2>What About Double Descent?</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-07" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 07</span>
      <h2>It's Finally Over</h2>
      <p>Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-08" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 08</span>
      <h2>References + Open Source</h2>
      <p>Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-09" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 09</span>
      <h2>These different model realizations are shown in the</h2>
      <p>These different model realizations are shown in the top chart, while the error decomposition (for each point of data) is shown in the bottom chart.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-10" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 10</span>
      <h2>For each level of complexity, we’ll aggregate the</h2>
      <p>For each level of complexity, we’ll aggregate the error decomposition across all data-points, and plot the aggregate errors at their level of complexity.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-11" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 11</span>
      <h2>The plot on the left shows the training</h2>
      <p>The plot on the left shows the training data.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="the-bias-variance-tradeoff" data-step-preset="module-12" data-sync-group="the-bias-variance-tradeoff-main">
      <span class="casefile-label">Module 12</span>
      <h2>The plot on the right shows decision regions</h2>
      <p>The plot on the right shows decision regions based on the current value of K.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The The Bias Variance Tradeoff article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Double Descent]]
- [[Linear Regression]]
- [[Random Forest]]
