---
title: The Bias Variance Tradeoff
tags:
  - portfolio
  - interactive
  - curiosity
  - machine-learning
draft: false
description: >-
  Interactive bias-variance decomposition that connects model complexity with
  underfitting/overfitting behavior.
created: "2026-03-08"
updated: "2026-03-24"
aliases:
  - Portfolio/Stuffs/The-Bias-Variance-Tradeoff
cssclasses:
  - external-canvas-note
  - interactive-bridge
---

# The Bias Variance Tradeoff

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Curiosity shelf · model intuition</p>
  <h2>Underfitting vs. overfitting as a complexity knob.</h2>
  <p>
    This explainer turns bias-variance decomposition into something you can feel. Adjust model
    complexity and watch training and validation errors pull apart, then bring them back together
    once the right level of flexibility becomes obvious.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/bias-variance/" target="_blank" rel="noopener noreferrer">Open The Bias-Variance Tradeoff</a>
  </div>
</div>

## What you'll notice

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Why this matters</span>
    <p>The bias-variance tradeoff is foundational but often abstract. This makes the decomposition visible: watch error components separate, then recombine as you tune complexity.</p>
  </div>
  <div>
    <span class="casefile-label">What to try first</span>
    <p>Start underfit, then slowly increase model complexity until training error drops while validation error starts climbing. The gap between them is the tradeoff made tangible.</p>
  </div>
  <div>
    <span class="casefile-label">Where it lives</span>
    <p>The maintained version lives at the route linked here, while this garden note keeps the embed, context, and backlinks together.</p>
  </div>
</div>

## Embed

<div class="external-canvas-wrap">
  <iframe
    src="https://kohnnn.github.io/interactive-explanation/bias-variance/"
    title="The Bias-Variance Tradeoff interactive"
    loading="lazy"
    allow="fullscreen"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

## Reading path

- Open the live interactive: <https://kohnnn.github.io/interactive-explanation/bias-variance/>
- Continue via [[Interactive]] or [[Visual Notes]]
