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
  Interactive linear regression lesson connecting line fitting, error
  minimization, and prediction behavior.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Linear-Regression
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Linear Regression

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/linear-regression/" target="_blank" rel="noopener noreferrer">Linear Regression by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.</p>

<div class="interactive-article" data-interactive-article="linear-regression">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · chart/plot module</span>
    <h2>Dataset scatter and fit line</h2>
    <p>Plots observed points and the current regression line so users can compare model fit against data distribution.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls, scroll steps. <strong>Response:</strong> line slope/intercept and residual indicators update immediately as model complexity or parameters change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="linear-regression:module-01" data-sim-module="linear-regression:module-01" data-sim-shared="linear-regression-core" data-sim-pause-group="linear-regression-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Dataset scatter and fit line interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-module-01-slope">slope</label>
      <input id="linear-regression-module-01-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-01-intercept">intercept</label>
      <input id="linear-regression-module-01-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-01-spread">spread</label>
      <input id="linear-regression-module-01-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Residual and loss panel</h2>
    <p>Displays prediction errors and aggregate loss to explain why certain lines are better fits.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> residual bars and error values recompute in real time</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="linear-regression:module-02" data-sim-module="linear-regression:module-02" data-sim-shared="linear-regression-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Residual and loss panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-module-02-slope">slope</label>
      <input id="linear-regression-module-02-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-02-intercept">intercept</label>
      <input id="linear-regression-module-02-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-02-spread">spread</label>
      <input id="linear-regression-module-02-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Prediction crosshair explorer</h2>
    <p>Lets users inspect predictions for selected x-values and compare expected vs predicted values.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> pointer move, click/tap. <strong>Response:</strong> crosshair and predicted output readout move with pointer position</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="linear-regression:module-03" data-sim-module="linear-regression:module-03" data-sim-shared="linear-regression-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Prediction crosshair explorer interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-module-03-slope">slope</label>
      <input id="linear-regression-module-03-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-03-intercept">intercept</label>
      <input id="linear-regression-module-03-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-03-spread">spread</label>
      <input id="linear-regression-module-03-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · algorithm walkthrough module</span>
    <h2>Formula rendering block</h2>
    <p>Renders regression equations and variable substitutions for current state using dynamic math text.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation, parameter controls. <strong>Response:</strong> equations and numeric substitutions stay synchronized with chart state</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="linear-regression:module-04" data-sim-module="linear-regression:module-04" data-sim-shared="linear-regression-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Formula rendering block interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-module-04-slope">slope</label>
      <input id="linear-regression-module-04-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-04-intercept">intercept</label>
      <input id="linear-regression-module-04-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-04-spread">spread</label>
      <input id="linear-regression-module-04-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Scrollytelling state machine</h2>
    <p>Narrative sections activate specific visualization states to teach concepts in a fixed progression.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> visual focus, annotations, and highlighted variables transition when section changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="linear-regression:module-05" data-sim-module="linear-regression:module-05" data-sim-shared="linear-regression-core" data-sim-pause-group="linear-regression-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Scrollytelling state machine interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="linear-regression-module-05-slope">slope</label>
      <input id="linear-regression-module-05-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-05-intercept">intercept</label>
      <input id="linear-regression-module-05-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="linear-regression-module-05-spread">spread</label>
      <input id="linear-regression-module-05-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
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
    <p>Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Linear Regression works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Logistic Regression]]
- [[The Bias Variance Tradeoff]]
- [[Decision Trees]]
