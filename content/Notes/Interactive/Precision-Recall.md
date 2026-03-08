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
  Interactive threshold chart for precision, recall, and class imbalance
  tradeoffs.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Precision-Recall
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Precision & Recall

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/precision-recall/" target="_blank" rel="noopener noreferrer">Precision & Recall by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.</p>

<div class="interactive-article" data-interactive-article="precision-recall">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="precision-recall" data-sync-group="precision-recall-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Precision recall threshold chart"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="precision-recall-threshold">threshold</label>
      <input id="precision-recall-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-imbalance">class imbalance</label>
      <input id="precision-recall-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="precision-recall-noise">score noise</label>
      <input id="precision-recall-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="precision-recall">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="precision-recall" data-step-preset="module-01" data-sync-group="precision-recall-main">
      <span class="casefile-label">Module 01</span>
      <h2>Confusion matrix sandbox</h2>
      <p>Shows TP/FP/TN/FN partitions and how they move as threshold or decision rules change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> matrix counts and category highlights update instantly</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="precision-recall" data-step-preset="module-02" data-sync-group="precision-recall-main">
      <span class="casefile-label">Module 02</span>
      <h2>Precision-recall metric panel</h2>
      <p>Calculates and displays precision and recall from the live confusion state.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> metric values and explanatory labels update in real time</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="precision-recall" data-step-preset="module-03" data-sync-group="precision-recall-main">
      <span class="casefile-label">Module 03</span>
      <h2>Threshold tradeoff explorer</h2>
      <p>Illustrates that improving one metric can reduce the other depending on threshold choice.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range controls. <strong>Response:</strong> classification boundary and both metrics change together</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="precision-recall" data-step-preset="module-04" data-sync-group="precision-recall-main">
      <span class="casefile-label">Module 04</span>
      <h2>Formula explanation panel</h2>
      <p>Shows equations and numerator/denominator contributions for each metric.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation. <strong>Response:</strong> equation highlights track currently emphasized confusion terms</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="precision-recall" data-step-preset="module-05" data-sync-group="precision-recall-main">
      <span class="casefile-label">Module 05</span>
      <h2>Scrollytelling transitions</h2>
      <p>Maps narrative sections to curated examples of precision-recall tradeoffs.</p>
      <p class="story-step-meta"><strong>Controls:</strong> scroll. <strong>Response:</strong> active examples and visual highlights advance with reading progress</p>
    </section>
    </div>
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
    <p>The Precision & Recall article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Logistic Regression]]
- [[ROC AUC]]
- [[Train-Test-and-Validation-Sets]]
