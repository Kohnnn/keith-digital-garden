---
title: Precision & Recall
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Classification-metrics explainer that links confusion matrix outcomes to
  precision/recall tradeoffs.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Precision-Recall
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Precision & Recall

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/precision-recall/" target="_blank" rel="noopener noreferrer">Precision & Recall by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.</p>

<div class="interactive-article" data-interactive-article="precision-recall">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Confusion matrix sandbox</h2>
    <p>Shows TP/FP/TN/FN partitions and how they move as threshold or decision rules change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> matrix counts and category highlights update instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="precision-recall:module-01" data-sim-module="precision-recall:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Confusion matrix sandbox interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-module-01-threshold">threshold</label>
      <input id="precision-recall-module-01-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-01-imbalance">imbalance</label>
      <input id="precision-recall-module-01-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-01-noise">noise</label>
      <input id="precision-recall-module-01-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · chart/plot module</span>
    <h2>Precision-recall metric panel</h2>
    <p>Calculates and displays precision and recall from the live confusion state.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> metric values and explanatory labels update in real time</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="precision-recall:module-02" data-sim-module="precision-recall:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Precision-recall metric panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-module-02-threshold">threshold</label>
      <input id="precision-recall-module-02-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-02-imbalance">imbalance</label>
      <input id="precision-recall-module-02-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-02-noise">noise</label>
      <input id="precision-recall-module-02-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Threshold tradeoff explorer</h2>
    <p>Illustrates that improving one metric can reduce the other depending on threshold choice.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> classification boundary and both metrics change together</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="precision-recall:module-03" data-sim-module="precision-recall:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Threshold tradeoff explorer interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-module-03-threshold">threshold</label>
      <input id="precision-recall-module-03-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-03-imbalance">imbalance</label>
      <input id="precision-recall-module-03-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-03-noise">noise</label>
      <input id="precision-recall-module-03-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · algorithm walkthrough module</span>
    <h2>Formula explanation panel</h2>
    <p>Shows equations and numerator/denominator contributions for each metric.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation. <strong>Response:</strong> equation highlights track currently emphasized confusion terms</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="precision-recall:module-04" data-sim-module="precision-recall:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Formula explanation panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-module-04-threshold">threshold</label>
      <input id="precision-recall-module-04-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-04-imbalance">imbalance</label>
      <input id="precision-recall-module-04-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-04-noise">noise</label>
      <input id="precision-recall-module-04-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Scrollytelling transitions</h2>
    <p>Maps narrative sections to curated examples of precision-recall tradeoffs.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> active examples and visual highlights advance with reading progress</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="precision-recall:module-05" data-sim-module="precision-recall:module-05" data-sim-pause-group="precision-recall-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Scrollytelling transitions interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-module-05-threshold">threshold</label>
      <input id="precision-recall-module-05-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-05-imbalance">imbalance</label>
      <input id="precision-recall-module-05-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-module-05-noise">noise</label>
      <input id="precision-recall-module-05-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
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
    <p>Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Precision & Recall works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Logistic Regression]]
- [[ROC AUC]]
- [[Train-Test-and-Validation-Sets]]
