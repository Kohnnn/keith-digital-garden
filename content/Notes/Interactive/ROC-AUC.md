---
title: ROC & AUC
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Model-evaluation explainer for ROC curves and AUC interpretation under
  changing classification thresholds.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/ROC-AUC
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# ROC & AUC

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/roc-auc/" target="_blank" rel="noopener noreferrer">ROC & AUC by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.</p>

<div class="interactive-article" data-interactive-article="roc-auc">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · chart/plot module</span>
    <h2>ROC curve canvas</h2>
    <p>Plots TPR vs FPR as threshold sweeps across classifier scores.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> active point moves on ROC curve while TPR/FPR values update</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="roc-auc:module-01" data-sim-module="roc-auc:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="ROC curve canvas interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-module-01-threshold">threshold</label>
      <input id="roc-auc-module-01-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-01-imbalance">imbalance</label>
      <input id="roc-auc-module-01-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-01-noise">noise</label>
      <input id="roc-auc-module-01-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>AUC interpretation overlay</h2>
    <p>Shades area under the ROC curve and ties it to ranking quality intuition.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation, threshold control. <strong>Response:</strong> highlighted area and explanatory annotations change with scenario</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="roc-auc:module-02" data-sim-module="roc-auc:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="AUC interpretation overlay interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-module-02-threshold">threshold</label>
      <input id="roc-auc-module-02-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-02-imbalance">imbalance</label>
      <input id="roc-auc-module-02-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-02-noise">noise</label>
      <input id="roc-auc-module-02-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · chart/plot module</span>
    <h2>Classifier comparison view</h2>
    <p>Compares multiple ROC traces to show stronger/weaker classifier behavior.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> toggle/select control. <strong>Response:</strong> selected model trace and corresponding AUC readout update</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="roc-auc:module-03" data-sim-module="roc-auc:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Classifier comparison view interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-module-03-threshold">threshold</label>
      <input id="roc-auc-module-03-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-03-imbalance">imbalance</label>
      <input id="roc-auc-module-03-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-03-noise">noise</label>
      <input id="roc-auc-module-03-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Threshold sweep panel</h2>
    <p>Shows how moving threshold changes confusion behavior and curve location.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> point trajectory and confusion-derived metrics animate through threshold space</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="roc-auc:module-04" data-sim-module="roc-auc:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Threshold sweep panel interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-module-04-threshold">threshold</label>
      <input id="roc-auc-module-04-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-04-imbalance">imbalance</label>
      <input id="roc-auc-module-04-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-04-noise">noise</label>
      <input id="roc-auc-module-04-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
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
    <p>Controls teaching sequence from raw confusion concepts to ROC/AUC interpretation.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> scene state and highlights switch at each narrative step</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="roc-auc:module-05" data-sim-module="roc-auc:module-05" data-sim-pause-group="roc-auc-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Scrollytelling transitions interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-module-05-threshold">threshold</label>
      <input id="roc-auc-module-05-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-05-imbalance">imbalance</label>
      <input id="roc-auc-module-05-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-module-05-noise">noise</label>
      <input id="roc-auc-module-05-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
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
    <p>Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>ROC & AUC works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Precision Recall]]
- [[Logistic Regression]]
- [[Linear Regression]]
