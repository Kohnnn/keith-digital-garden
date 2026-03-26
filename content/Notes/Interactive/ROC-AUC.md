---
title: ROC & AUC
tags:
  - portfolio
  - interactive
  - curiosity
  - machine-learning
draft: false
description: >-
  Interactive ROC and AUC explainer with threshold sweeps and model-evaluation
  intuition.
created: "2026-03-08"
updated: "2026-03-26"
aliases:
  - Portfolio/Stuffs/ROC-AUC
cssclasses:
  - external-canvas-note
  - interactive-bridge
---

# ROC & AUC

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Core route · model intuition</p>
  <h2>Threshold sweeps and AUC as a single interactive flow.</h2>
  <p>
    This lab turns evaluation metrics into something you can drag. Move the classification
    threshold, watch the ROC curve trace out, and connect AUC back to the separation you see in the
    score distributions.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/roc-auc/" target="_blank" rel="noopener noreferrer">Open ROC & AUC</a>
    <a class="kitchen-cta" href="./Precision-Recall">Open metric companion</a>
  </div>
</div>

## At a glance

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Why this matters</span>
    <p>ROC and AUC are often taught as formulas. This makes the curve feel like a direct consequence of score separation, threshold choice, and class balance.</p>
  </div>
  <div>
    <span class="casefile-label">What to try first</span>
    <p>Sweep the threshold and watch the ROC point move. Then shift class balance or overlap to see how AUC reacts and why it can be misleading when used alone.</p>
  </div>
  <div>
    <span class="casefile-label">Time and level</span>
    <p>About 8 to 12 minutes. Beginner friendly. It works well as a first metrics note because the threshold sweep makes the curve feel earned.</p>
  </div>
</div>

## Embed

<div class="external-canvas-wrap">
  <iframe
    src="https://kohnnn.github.io/interactive-explanation/roc-auc/"
    title="ROC & AUC interactive"
    loading="lazy"
    allow="fullscreen"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

## Reading path

- Open the live interactive: <https://kohnnn.github.io/interactive-explanation/roc-auc/>
- Continue through [[Notes/Interactive/Precision-Recall|Precision & Recall]] when you want the companion threshold metric after the ROC view
- Continue via [[Interactive]] or [[Visual Notes]]
