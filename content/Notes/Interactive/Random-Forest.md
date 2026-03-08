---
title: Random Forest
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Interactive ensemble notebook for tree count, feature randomness, and vote
  stability.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Random-Forest
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Random Forest

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/random-forest/" target="_blank" rel="noopener noreferrer">Random Forest by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Interactive random forest lesson for bagging, feature randomness, and majority-vote aggregation.</p>

<div class="interactive-article" data-interactive-article="random-forest">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="random-forest" data-sync-group="random-forest-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Random forest ensemble explorer"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="random-forest-trees">tree count</label>
      <input id="random-forest-trees" data-control="trees" type="range" min="3" max="25" step="1" value="9" />
    </div>
    <div class="interactive-sim-control">
      <label for="random-forest-features">feature subsample</label>
      <input id="random-forest-features" data-control="features" type="range" min="1" max="6" step="1" value="3" />
    </div>
    <div class="interactive-sim-control">
      <label for="random-forest-noise">sample noise</label>
      <input id="random-forest-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="random-forest">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="random-forest" data-step-preset="module-01" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-expl AI n</h2>
      <p>Explains MLU-expl AI n within Random Forest using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="random-forest" data-step-preset="module-02" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 02</span>
      <h2>The Random Forest Algorithm</h2>
      <p>It's your turn Click the remaining data points to see how the random forest makes a prediction.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="random-forest" data-step-preset="module-03" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 03</span>
      <h2>But First: A Theorem From 1785</h2>
      <p>Explains But First: A Theorem From 1785 within Random Forest using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="random-forest" data-step-preset="module-04" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 04</span>
      <h2>Ensemble Learning</h2>
      <p>Explains Ensemble Learning within Random Forest using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="random-forest" data-step-preset="module-05" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 05</span>
      <h2>Random Forest</h2>
      <p>It's your turn Click the remaining data points to see how the random forest makes a prediction.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="random-forest" data-step-preset="module-06" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 06</span>
      <h2>Bagging Method</h2>
      <p>Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="random-forest" data-step-preset="module-07" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 07</span>
      <h2>Feature Selection</h2>
      <p>Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="random-forest" data-step-preset="module-08" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 08</span>
      <h2>Here are trees built from each sample</h2>
      <p>Explains Here are trees built from each sample. within Random Forest using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="random-forest" data-step-preset="module-09" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 09</span>
      <h2>Each tree produces a prediction</h2>
      <p>It's your turn Click the remaining data points to see how the random forest makes a prediction.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="random-forest" data-step-preset="module-10" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 10</span>
      <h2>Majority vote</h2>
      <p>Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="random-forest" data-step-preset="module-11" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 11</span>
      <h2>It's your turn</h2>
      <p>It's your turn Click the remaining data points to see how the random forest makes a prediction.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="random-forest" data-step-preset="module-12" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 12</span>
      <h2>Variance in Composition</h2>
      <p>Visualizes decomposition of model error and sensitivity to complexity/smoothing choices.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="random-forest" data-step-preset="module-13" data-sync-group="random-forest-main">
      <span class="casefile-label">Module 13</span>
      <h2>Play with the scrollers yourself!</h2>
      <p>Play with the scrollers yourself!</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Interactive random forest lesson for bagging, feature randomness, and majority-vote aggregation.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Random Forest article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Decision Trees]]
- [[Train-Test-and-Validation-Sets]]
- [[The Bias Variance Tradeoff]]
