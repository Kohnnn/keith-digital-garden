---
title: "multiple testing problem why your backtest is lying"
tags:
  - general-notes
  - statistics
  - backtesting
  - overfitting
  - data-mining
  - multiple-testing
keywords:
  - multiple testing
  - backtest overfitting
  - data mining
  - false discovery
  - p-hacking
  - out of sample
draft: false
description: The multiple testing problem explains why most backtested strategies are false discoveries. If you test enough variants, you will find one that works — but it almost certainly won't work going forward.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN16
cssclasses:
  - general-note
---

# multiple testing problem why your backtest is lying

If I test 1000 random trading strategies on the same historical data, roughly 50 of them will show statistically significant results at the 95% confidence level. Not because they work — but because random chance produces false positives at the rate of the significance threshold you chose.

This is the multiple testing problem, and it is the single most common reason backtested strategies fail in live trading.

*see also:* [[gn12-extremistan-vs-mediocristan]] · [[gn13-non-ergodicity]] · [[gn15-risk-of-ruin]]

## how it works

Every hypothesis test has a false positive rate. If you set alpha at 0.05, there is a 5% chance of finding a "significant" result when none exists.

Test 1 strategy: 5% false positive chance.
Test 100 strategies: 99.4% chance of at least one false positive.
Test 1000 strategies: you will find dozens of "profitable" strategies that are entirely random.

This is before any optimization. The moment you start tweaking parameters — changing the moving average length, adjusting the stop loss distance, filtering by volatility — you are effectively running thousands of tests on the same data.

## the deflated Sharpe ratio

Marcos López de Prado introduced the deflated Sharpe ratio, which adjusts the observed Sharpe ratio for the number of trials conducted.

The adjustment is brutal. A strategy with a Sharpe of 1.5 looks excellent in isolation. When you account for testing 200 variants, the deflated Sharpe drops to 0.3 — indistinguishable from noise.

The formula is not complex, but the implication is: unless you know the number of tests conducted to produce a strategy, you cannot trust its reported performance.

## the three signs of multiple testing

You can't observe the testing process after the fact, but you can see its fingerprints in the results:

**Too many parameters.** Each parameter is a dimension the data was searched over. A strategy with 5 parameters and no obvious economic rationale was probably found by search, not by reasoning.

**Performance too clean.** Real strategies have equity curves with drawdowns, variance, and fat tails. If the backtest looks too smooth — high Sharpe, low drawdown, consistent returns — it is probably overfit.

**Strategy fails in similar regimes.** An overfit strategy doesn't just fail in out-of-sample data. It specifically fails in market conditions that *look like* the training data but differ in subtle ways the overfit parameters cannot handle.

## defense strategies

**Out-of-sample testing.** Split your data. Train on years 1-8, test on years 9-10. The performance gap between training and testing is your overfit estimate.

**Walk-forward analysis.** Optimize on rolling windows. If the optimal parameters drift wildly from window to window, the strategy is fitting noise.

**Purged k-fold cross-validation.** Standard cross-validation leaks information in time series. Purged CV removes data adjacent to the training set to prevent leakage.

**Simplicity constraint.** Fewer parameters, fewer degrees of freedom, less room for overfit. Occam's razor applies directly to strategy development.

## my take

I assume every backtest I see is overfit until proven otherwise. The question is not "does this backtest show profit?" — it's "what is the probability this result could have been produced by a random process tested N times?"

The best defense is economic rationale. A strategy that exploits a structural feature of markets (risk premia, institutional flow imbalances, regulatory constraints) is more likely to work than one found by parameter scanning. I will trust a simple strategy with Sharpe 0.8 and a clear economic story over a complex one with Sharpe 2.0 and no explanation.

And I never forget: the market does not owe you a living just because your backtest looks good.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn11-edge-decay-why-strategies-die]]</li>
  </ul>
</div>

## ending questions
how many variants of your current strategy did you test before landing on this version? now deflate your Sharpe by that number.
