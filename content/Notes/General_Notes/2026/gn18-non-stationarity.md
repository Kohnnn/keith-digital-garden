---
title: "non-stationarity why markets change and models fail"
tags:
  - general-notes
  - statistics
  - non-stationarity
  - regime-change
  - market-structure
  - modeling
keywords:
  - non-stationarity
  - regime change
  - market structure
  - model failure
  - structural breaks
  - adaptation
draft: false
description: Markets are non-stationary — their statistical properties change over time. This is the fundamental reason financial models fail, and why adaptation matters more than optimization.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN18
cssclasses:
  - general-note
---

# non-stationarity why markets change and models fail

Non-stationarity is the most underappreciated constraint in finance. It means the statistical properties of the data — mean, variance, correlation, skew — change over time. The distribution that generated last year's returns is not the same one generating this year's.

This single fact explains more failed strategies than any other cause.

*see also:* [[gn12-extremistan-vs-mediocristan]] · [[gn13-non-ergodicity]] · [[gn11-edge-decay-why-strategies-die]]

## stationary vs non-stationary

A stationary process has constant statistical properties over time. Mean, variance, and autocorrelation don't shift. Physics has stationary processes. Coin flips are stationary. Weather patterns are approximately stationary over short timescales.

Financial markets are not stationary. Volatility clusters. Correlations change. Regimes flip. The average return of the S&P 500 over the next 10 years depends critically on where we are in the cycle — valuations, monetary policy, economic structure — none of which are constant.

## what breaks

Almost every quantitative tool assumes stationarity:

- **Backtesting.** Assumes past relationships predict future ones. When the regime changes, the backtest becomes irrelevant.
- **Risk models.** VaR, standard deviation, correlation matrices — all estimated from historical data that may not represent the forward distribution.
- **Machine learning.** ML models learn patterns from training data. If the test distribution differs from training (and it will), performance degrades.
- **Portfolio optimization.** Mean-variance optimization produces portfolios that are exquisitely tuned to past correlations that will not persist.

The practical problem: you can't estimate the probability of a regime change from the data within the current regime, because regime changes are — by definition — outside the distribution you've observed.

## detection methods

You cannot predict regime changes, but you can detect them early:

- **Rolling statistics.** If your 20-day volatility has tripled, you are in a different volatility regime even if price hasn't moved much.
- **Correlation breakdowns.** If assets that were uncorrelated suddenly move together, something structural has changed.
- **Strategy performance.** If a strategy that has worked for 50 trades suddenly loses 10 in a row, it may be regime change — not bad luck.

## response strategies

**Regime filters.** Only trade when the current regime matches your strategy's preferred conditions. Sit out the rest.

**Multi-strategy approach.** Maintain a portfolio of strategies, each optimized for different regimes. When regime shifts, the active strategy changes automatically.

**Adaptive sizing.** Reduce position size when regimes are uncertain or transitioning. Increase when the regime is clear and aligned with your strategy.

**Simplify.** Simpler models with fewer parameters degrade less under non-stationarity than complex, overfit models. The relationship is direct: degrees of freedom = vulnerability to regime change.

## my take

I treat non-stationarity as the null hypothesis. Every model is wrong by default — the question is only how wrong, and whether I can detect when the error crosses a threshold.

The most practical adaptation: I track three rolling statistics — 20-day volatility regime, 60-day correlation to SPX, and 90-day strategy Sharpe. When any of these shift beyond a standard deviation from its 1-year average, I reduce size by 50% and investigate before adding risk again.

Most of my worst trades came during undetected regime shifts. The losses came not from bad analysis but from applying a model that no longer fit the environment. The market had changed. I hadn't noticed.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn11-edge-decay-why-strategies-die]]</li>
    <li>[[gn16-multiple-testing-problem]]</li>
  </ul>
</div>

## ending questions
would your current strategy survive a 3x increase in volatility and a simultaneous breakdown of your asset correlations? if not, what's the hedge?
