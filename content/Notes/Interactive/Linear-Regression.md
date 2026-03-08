---
title: Linear Regression
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Interactive regression notebook for slope, intercept, and residual error
  behavior.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Linear-Regression
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Linear Regression

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/linear-regression/" target="_blank" rel="noopener noreferrer">Linear Regression by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.</p>

<div class="interactive-article" data-interactive-article="linear-regression">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="linear-regression" data-sync-group="linear-regression-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Linear regression fit explorer"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-slope">slope</label>
      <input id="linear-regression-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-intercept">intercept</label>
      <input id="linear-regression-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-spread">data spread</label>
      <input id="linear-regression-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="linear-regression">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="linear-regression" data-step-preset="module-01" data-sync-group="linear-regression-main">
      <span class="casefile-label">Module 01</span>
      <h2>Dataset scatter and fit line</h2>
      <p>Plots observed points and the current regression line so users can compare model fit against data distribution.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls, scroll steps. <strong>Response:</strong> line slope/intercept and residual indicators update immediately as model complexity or parameters change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="linear-regression" data-step-preset="module-02" data-sync-group="linear-regression-main">
      <span class="casefile-label">Module 02</span>
      <h2>Residual and loss panel</h2>
      <p>Displays prediction errors and aggregate loss to explain why certain lines are better fits.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> residual bars and error values recompute in real time</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="linear-regression" data-step-preset="module-03" data-sync-group="linear-regression-main">
      <span class="casefile-label">Module 03</span>
      <h2>Prediction crosshair explorer</h2>
      <p>Lets users inspect predictions for selected x-values and compare expected vs predicted values.</p>
      <p class="story-step-meta"><strong>Controls:</strong> pointer move, click/tap. <strong>Response:</strong> crosshair and predicted output readout move with pointer position</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="linear-regression" data-step-preset="module-04" data-sync-group="linear-regression-main">
      <span class="casefile-label">Module 04</span>
      <h2>Formula rendering block</h2>
      <p>Renders regression equations and variable substitutions for current state using dynamic math text.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation, parameter controls. <strong>Response:</strong> equations and numeric substitutions stay synchronized with chart state</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="linear-regression" data-step-preset="module-05" data-sync-group="linear-regression-main">
      <span class="casefile-label">Module 05</span>
      <h2>Scrollytelling state machine</h2>
      <p>Narrative sections activate specific visualization states to teach concepts in a fixed progression.</p>
      <p class="story-step-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> visual focus, annotations, and highlighted variables transition when section changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Linear Regression article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Logistic Regression]]
- [[The Bias Variance Tradeoff]]
- [[Decision Trees]]
