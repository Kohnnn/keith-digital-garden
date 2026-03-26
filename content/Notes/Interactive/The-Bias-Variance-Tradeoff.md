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
updated: "2026-03-26"
aliases:
  - Portfolio/Stuffs/The-Bias-Variance-Tradeoff
cssclasses:
  - external-canvas-note
  - interactive-bridge
---

# The Bias Variance Tradeoff

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Core route · model intuition</p>
  <h2>Underfitting vs. overfitting as a complexity knob.</h2>
  <p>
    This explainer turns bias-variance decomposition into something you can feel. Adjust model
    complexity and watch training and validation errors pull apart, then bring them back together
    once the right level of flexibility becomes obvious.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/bias-variance/" target="_blank" rel="noopener noreferrer">Open The Bias-Variance Tradeoff</a>
    <a class="kitchen-cta" href="./Train-Test-and-Validation-Sets">Open workflow companion</a>
  </div>
</div>

## At a glance

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
    <span class="casefile-label">Time and level</span>
    <p>About 10 to 15 minutes. Intermediate. It is the cleanest theory note before moving into double descent or more specialized evaluation routes.</p>
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
- Continue through [[Notes/Interactive/Train-Test-and-Validation-Sets|Train, Test, and Validation Sets]] or [[Notes/Interactive/Double-Descent|Double Descent]] when you want the workflow and edge-case follow-ups
- Continue via [[Interactive]] or [[Visual Notes]]
