---
title: Option Pricing
tags: [portfolio, project, finance, derivatives]
draft: false
description: Case study on option-pricing models, Greeks, and practical comparison tools.
created: 2026-01-30
updated: 2026-03-13
cssclasses: [portfolio-page, casefile-page]
---

# Option Pricing

Quant casefile for a derivatives toolkit that moves from Black-Scholes fundamentals to richer model assumptions and practical scenario checks.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Coverage</span>
    <strong>Five model lenses</strong>
    <p>From Black-Scholes to Heston and Merton jump diffusion.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Output</span>
    <strong>Live Streamlit app</strong>
    <p>Interactive checks for spot, strike, time, rates, and volatility without opening a notebook.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Use case</span>
    <strong>Explainer plus tool</strong>
    <p>Built to teach, compare assumptions, and support fast review decisions.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Model builder, explainer, and interface designer for a compact derivatives reference.</p>
  </div>
  <div>
    <span class="casefile-label">Stack</span>
    <p>Python, Streamlit, numerical methods, model comparison, and scenario experimentation.</p>
  </div>
  <div>
    <span class="casefile-label">Demo</span>
    <p><a href="https://kietvo-option-pricing-model.streamlit.app/" target="_blank" rel="noopener noreferrer">Streamlit app</a></p>
  </div>
</div>

## Why I built it

- Black-Scholes is widely taught, but in practice it is only the entry point for how traders and analysts think about options.
- I wanted one place to compare baseline assumptions, practical limitations, and richer alternatives without hiding inside theory-only notes.
- The result became both a learning surface and a quick scenario-check tool.

## Model comparison

| Model                 | Best used for                               | Main tradeoff                                      |
| --------------------- | ------------------------------------------- | -------------------------------------------------- |
| Black-Scholes         | Fast baseline valuation                     | Assumes constant volatility and log-normal returns |
| Binomial tree         | Early exercise intuition and discrete steps | Slower and more parameter sensitive                |
| Monte Carlo           | Flexible scenario generation                | Computationally heavier                            |
| Heston                | Stochastic volatility context               | More calibration overhead                          |
| Merton jump diffusion | Gap-risk and jump intuition                 | Added model complexity                             |

## Core inputs

- Spot price
- Strike price
- Time to expiration
- Risk-free rate
- Volatility

## Greeks in practice

<div class="confidence-grid">
  <div class="confidence-card">
    <strong>Delta</strong>
    <p>Sensitivity to underlying-price changes and the simplest read on directional exposure.</p>
  </div>
  <div class="confidence-card">
    <strong>Gamma</strong>
    <p>How quickly delta changes as the underlying moves, which matters for convexity and hedge stability.</p>
  </div>
  <div class="confidence-card">
    <strong>Theta</strong>
    <p>Time decay and the cost of waiting while an option position remains open.</p>
  </div>
  <div class="confidence-card">
    <strong>Vega</strong>
    <p>Sensitivity to volatility changes and how repricing can move the option even without a directional move.</p>
  </div>
  <div class="confidence-card">
    <strong>Rho</strong>
    <p>Rate sensitivity, most relevant when contracts are longer-dated or rates are moving materially.</p>
  </div>
</div>

## Where it helps in practice

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Financial trading</div>
    <p>Frame relative-value checks and compare what different assumptions imply for the same option.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Risk management</div>
    <p>Use Greeks and scenario comparisons to understand how directional and volatility risk interact.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Investment analysis</div>
    <p>Turn a pricing question into explicit drivers instead of treating the output as a black box.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Algorithmic thinking</div>
    <p>Build intuition for when simple closed forms are enough and when richer simulation or tree methods matter.</p>
  </div>
</div>

## Product links

<div class="repo-grid">
  <div class="repo-card">
    <span class="casefile-label">App</span>
    <h3><a href="https://kietvo-option-pricing-model.streamlit.app/" target="_blank" rel="noopener noreferrer">Streamlit demo</a></h3>
    <p>Interactive valuation surface for comparing inputs, model behavior, and pricing outcomes.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Code</span>
    <h3><a href="https://github.com/Kohnnn/option-pricing-model" target="_blank" rel="noopener noreferrer">GitHub repo</a></h3>
    <p>Implementation for model comparison, numerical methods, and sensitivity experimentation.</p>
  </div>
</div>

## Limits and extensions

- Constant-volatility assumptions break under real surfaces.
- Jump risk, skew, and market frictions matter during event-driven periods.
- The natural extension path is implied-volatility work, richer stochastic-volatility treatment, and more visual sensitivity analysis.

## References used in the study path

- Black and Scholes, 1973
- Merton, 1973
- Cox, Ross, and Rubinstein, 1979
- Hull, 2017
- Gatheral, 2006
- Cont and Tankov, 2009
