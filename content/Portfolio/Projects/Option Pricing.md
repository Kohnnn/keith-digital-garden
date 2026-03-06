---
title: Option Pricing
tags: [portfolio, project, finance, derivatives]
draft: false
description: Case study note on Black-Scholes assumptions and practical extensions.
created: 2026-01-30
updated: 2026-03-06
cssclasses: [portfolio-page, casefile-page]
---

# Option Pricing

A practical derivatives toolkit that moves from baseline valuation to richer volatility and jump assumptions.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Coverage</span>
    <strong>Five model lenses</strong>
    <p>From Black-Scholes to Heston and Merton jump diffusion.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Output</span>
    <strong>Live Streamlit app</strong>
    <p>Scenario checks and fast comparisons without opening a notebook.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Use case</span>
    <strong>Explainer plus tool</strong>
    <p>Built to teach, compare assumptions, and support quick review decisions.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Model builder and explainer</p>
  </div>
  <div>
    <span class="casefile-label">Stack</span>
    <p>Python, Streamlit, numerical methods, simulation</p>
  </div>
  <div>
    <span class="casefile-label">Demo</span>
    <p><a href="https://kietvo-option-pricing-model.streamlit.app/" target="_blank" rel="noopener noreferrer">Streamlit app</a></p>
  </div>
</div>

## Problem

- Needed a reusable options reference that connects theory to actual trading and risk decisions.
- Wanted a faster way to compare model assumptions instead of treating Black-Scholes as the only lens.
- The project became both a learning tool and a live app for scenario checks.

## Model comparison

| Model                 | Best used for                               | Main tradeoff                                      |
| --------------------- | ------------------------------------------- | -------------------------------------------------- |
| Black-Scholes         | Fast baseline valuation                     | Assumes constant volatility and log-normal returns |
| Binomial tree         | Early exercise intuition and discrete steps | Slower and more parameter sensitive                |
| Monte Carlo           | Flexible scenario generation                | Computationally heavier                            |
| Heston                | Stochastic volatility context               | More calibration overhead                          |
| Merton jump diffusion | Gap-risk and jump intuition                 | Added model complexity                             |

## Greeks in practice

<div class="confidence-grid">
  <div class="confidence-card">
    <strong>Delta</strong>
    <p>Directional exposure and hedge intuition.</p>
  </div>
  <div class="confidence-card">
    <strong>Gamma</strong>
    <p>Convexity and how quickly delta can change.</p>
  </div>
  <div class="confidence-card">
    <strong>Theta</strong>
    <p>Time decay and the cost of waiting.</p>
  </div>
  <div class="confidence-card">
    <strong>Vega</strong>
    <p>Sensitivity to volatility repricing.</p>
  </div>
  <div class="confidence-card">
    <strong>Rho</strong>
    <p>Rate sensitivity in longer-dated contracts.</p>
  </div>
</div>

## Product links

<div class="repo-grid">
  <div class="repo-card">
    <span class="casefile-label">App</span>
    <h3><a href="https://kietvo-option-pricing-model.streamlit.app/" target="_blank" rel="noopener noreferrer">Streamlit demo</a></h3>
    <p>Interactive valuation surface for spot, strike, time, rates, and volatility inputs.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Code</span>
    <h3><a href="https://github.com/Kohnnn/option-pricing-model" target="_blank" rel="noopener noreferrer">GitHub repo</a></h3>
    <p>Implementation for model comparison, numerical methods, and scenario experimentation.</p>
  </div>
</div>

## Inputs tracked

- Spot price
- Strike
- Time to expiry
- Risk-free rate
- Volatility

## Where it helps in practice

- Quick relative-value checks
- Sensitivity framing via Greeks
- Stress-testing directional and volatility exposures

## Limits and extensions

- Constant-volatility assumptions break under real surfaces
- Jump risk and skew matter during event-driven periods
- Extensions include implied-volatility work, stochastic volatility, and jump-aware processes

## Next iteration

- Add worked examples with parameter sweeps and Greek interpretation.
- Add a compact notebook for sensitivity visualization.
