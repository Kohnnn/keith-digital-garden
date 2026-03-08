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
  Interactive ranking notebook for ROC curves, threshold motion, and AUC
  interpretation.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/ROC-AUC
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# ROC & AUC

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/roc-auc/" target="_blank" rel="noopener noreferrer">ROC & AUC by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.</p>

<div class="interactive-article" data-interactive-article="roc-auc">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="roc-auc" data-sync-group="roc-auc-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="ROC and AUC curve"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="roc-auc-threshold">threshold</label>
      <input id="roc-auc-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.5" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-separation">class separation</label>
      <input id="roc-auc-separation" data-control="separation" type="range" min="0.1" max="1.2" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label for="roc-auc-noise">score noise</label>
      <input id="roc-auc-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.1" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="roc-auc">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="roc-auc" data-step-preset="module-01" data-sync-group="roc-auc-main">
      <span class="casefile-label">Module 01</span>
      <h2>ROC curve canvas</h2>
      <p>Plots TPR vs FPR as threshold sweeps across classifier scores.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> active point moves on ROC curve while TPR/FPR values update</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="roc-auc" data-step-preset="module-02" data-sync-group="roc-auc-main">
      <span class="casefile-label">Module 02</span>
      <h2>AUC interpretation overlay</h2>
      <p>Shades area under the ROC curve and ties it to ranking quality intuition.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation, threshold control. <strong>Response:</strong> highlighted area and explanatory annotations change with scenario</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="roc-auc" data-step-preset="module-03" data-sync-group="roc-auc-main">
      <span class="casefile-label">Module 03</span>
      <h2>Classifier comparison view</h2>
      <p>Compares multiple ROC traces to show stronger/weaker classifier behavior.</p>
      <p class="story-step-meta"><strong>Controls:</strong> toggle/select control. <strong>Response:</strong> selected model trace and corresponding AUC readout update</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="roc-auc" data-step-preset="module-04" data-sync-group="roc-auc-main">
      <span class="casefile-label">Module 04</span>
      <h2>Threshold sweep panel</h2>
      <p>Shows how moving threshold changes confusion behavior and curve location.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> point trajectory and confusion-derived metrics animate through threshold space</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="roc-auc" data-step-preset="module-05" data-sync-group="roc-auc-main">
      <span class="casefile-label">Module 05</span>
      <h2>Scrollytelling transitions</h2>
      <p>Controls teaching sequence from raw confusion concepts to ROC/AUC interpretation.</p>
      <p class="story-step-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> scene state and highlights switch at each narrative step</p>
    </section>
    </div>
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
    <p>The ROC & AUC article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Precision Recall]]
- [[Logistic Regression]]
- [[Linear Regression]]
