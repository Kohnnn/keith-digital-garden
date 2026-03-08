---
title: Logistic Regression
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Interactive classification notebook for logits, thresholds, and decision
  boundaries.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Logistic-Regression
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Logistic Regression

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/logistic-regression/" target="_blank" rel="noopener noreferrer">Logistic Regression by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.</p>

<div class="interactive-article" data-interactive-article="logistic-regression">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="logistic-regression" data-sync-group="logistic-regression-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Logistic regression threshold explorer"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-weight">weight</label>
      <input id="logistic-regression-weight" data-control="weight" type="range" min="-6" max="6" step="0.1" value="2.4" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-bias">bias</label>
      <input id="logistic-regression-bias" data-control="bias" type="range" min="-3" max="3" step="0.05" value="-0.4" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-threshold">threshold</label>
      <input id="logistic-regression-threshold" data-control="threshold" type="range" min="0.1" max="0.9" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="logistic-regression">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="logistic-regression" data-step-preset="module-01" data-sync-group="logistic-regression-main">
      <span class="casefile-label">Module 01</span>
      <h2>Binary scatter with boundary</h2>
      <p>Shows two classes and the current decision boundary separating predicted labels.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls, scroll steps. <strong>Response:</strong> boundary position/shape updates as parameters change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="logistic-regression" data-step-preset="module-02" data-sync-group="logistic-regression-main">
      <span class="casefile-label">Module 02</span>
      <h2>Sigmoid probability curve</h2>
      <p>Visualizes mapping from linear score to probability through the logistic function.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> curve shape and selected probability marker update continuously</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="logistic-regression" data-step-preset="module-03" data-sync-group="logistic-regression-main">
      <span class="casefile-label">Module 03</span>
      <h2>Threshold classifier panel</h2>
      <p>Demonstrates how changing threshold flips predicted classes and confusion outcomes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> predicted labels, color regions, and confusion counts update in lockstep</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="logistic-regression" data-step-preset="module-04" data-sync-group="logistic-regression-main">
      <span class="casefile-label">Module 04</span>
      <h2>Equation and odds interpretation block</h2>
      <p>Connects logits, odds, and probabilities with annotated formulas.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation. <strong>Response:</strong> highlighted terms and substituted values follow current teaching step</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="logistic-regression" data-step-preset="module-05" data-sync-group="logistic-regression-main">
      <span class="casefile-label">Module 05</span>
      <h2>Scrollytelling transitions</h2>
      <p>Coordinates text and visual states to progressively introduce classification intuition.</p>
      <p class="story-step-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> active scene and annotations switch at section boundaries</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Logistic Regression article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Precision Recall]]
- [[ROC AUC]]
- [[Linear Regression]]
