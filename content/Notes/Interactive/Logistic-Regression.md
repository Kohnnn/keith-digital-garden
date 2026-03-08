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
  Interactive logistic regression lesson explaining sigmoid probability mapping,
  classification boundary, and thresholding.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Logistic-Regression
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Logistic Regression

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/logistic-regression/" target="_blank" rel="noopener noreferrer">Logistic Regression by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.</p>

<div class="interactive-article" data-interactive-article="logistic-regression">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · chart/plot module</span>
    <h2>Binary scatter with boundary</h2>
    <p>Shows two classes and the current decision boundary separating predicted labels.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls, scroll steps. <strong>Response:</strong> boundary position/shape updates as parameters change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="logistic-regression:module-01" data-sim-module="logistic-regression:module-01" data-sim-pause-group="logistic-regression-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Binary scatter with boundary interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-01-slope">slope</label>
      <input id="logistic-regression-module-01-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-01-intercept">intercept</label>
      <input id="logistic-regression-module-01-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-01-spread">spread</label>
      <input id="logistic-regression-module-01-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · chart/plot module</span>
    <h2>Sigmoid probability curve</h2>
    <p>Visualizes mapping from linear score to probability through the logistic function.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> curve shape and selected probability marker update continuously</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="logistic-regression:module-02" data-sim-module="logistic-regression:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Sigmoid probability curve interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-02-slope">slope</label>
      <input id="logistic-regression-module-02-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-02-intercept">intercept</label>
      <input id="logistic-regression-module-02-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-02-spread">spread</label>
      <input id="logistic-regression-module-02-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Threshold classifier panel</h2>
    <p>Demonstrates how changing threshold flips predicted classes and confusion outcomes.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> predicted labels, color regions, and confusion counts update in lockstep</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="logistic-regression:module-03" data-sim-module="logistic-regression:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Threshold classifier panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-03-slope">slope</label>
      <input id="logistic-regression-module-03-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-03-intercept">intercept</label>
      <input id="logistic-regression-module-03-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-03-spread">spread</label>
      <input id="logistic-regression-module-03-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · algorithm walkthrough module</span>
    <h2>Equation and odds interpretation block</h2>
    <p>Connects logits, odds, and probabilities with annotated formulas.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation. <strong>Response:</strong> highlighted terms and substituted values follow current teaching step</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="logistic-regression:module-04" data-sim-module="logistic-regression:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Equation and odds interpretation block interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-04-slope">slope</label>
      <input id="logistic-regression-module-04-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-04-intercept">intercept</label>
      <input id="logistic-regression-module-04-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-04-spread">spread</label>
      <input id="logistic-regression-module-04-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Scrollytelling transitions</h2>
    <p>Coordinates text and visual states to progressively introduce classification intuition.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> active scene and annotations switch at section boundaries</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="logistic-regression:module-05" data-sim-module="logistic-regression:module-05" data-sim-pause-group="logistic-regression-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Scrollytelling transitions interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-05-slope">slope</label>
      <input id="logistic-regression-module-05-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-05-intercept">intercept</label>
      <input id="logistic-regression-module-05-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="logistic-regression-module-05-spread">spread</label>
      <input id="logistic-regression-module-05-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
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
    <p>Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Logistic Regression works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Precision Recall]]
- [[ROC AUC]]
- [[Linear Regression]]
