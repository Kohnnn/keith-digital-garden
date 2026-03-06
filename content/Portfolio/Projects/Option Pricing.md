---
title: Option Pricing
tags: [portfolio, project, finance, derivatives]
draft: false
description: Case study note on Black-Scholes assumptions and practical extensions.
created: 2026-01-30
updated: 2026-03-06
---

# Option Pricing

A compact map of Black-Scholes mechanics, practical limits, and extension paths.

## problem

- Needed a reusable option-pricing reference that is practical, not purely textbook.
- Wanted a bridge from formula inputs to trading and risk decisions.

## model core

- Use Black-Scholes as a baseline valuation lens.
- Treat assumptions as testable constraints, not universal truths.

## inputs

- Spot price (S)
- Strike (K)
- Time to expiry (T)
- Risk free rate (r)
- Volatility (sigma)

## greeks

- Delta, Gamma, Theta, Vega, Rho

## limits

- Constant volatility
- Log normal price assumption
- No transaction costs
- European style exercise

## where it helps in practice

- Quick relative-value checks
- Sensitivity framing via Greeks
- Stress-testing directional and volatility exposures

## extensions

- Implied volatility
- Stochastic volatility (Heston)
- Volatility surface context (smile and skew)
- Scenario analysis under non-constant volatility

## use cases

- Options trading
- Risk management
- Quant strategy design

## next iteration

- Add worked examples with parameter sweeps and Greek interpretation.
- Add a compact notebook for sensitivity visualization.
