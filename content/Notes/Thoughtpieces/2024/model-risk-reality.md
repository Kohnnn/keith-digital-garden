---
title: "model risk when your system meets reality"
tags:
  - thoughtpieces
  - risk
  - systems
  - backtest
  - out-of-distribution
  - overfitting
keywords:
  - model risk
  - overfitting
  - out-of-distribution
  - regime change
  - parameter instability
  - forward testing
  - walk-forward validation
draft: false
description: Every model will eventually face conditions outside its training domain. Model risk is the silent killer of trading systems — invisible until it's catastrophic.
created: 2024-11-05
updated: 2024-11-05
note_id: 241105TP22
cssclasses:
  - thoughtpiece
---

# model risk when your system meets reality

A trading model is a simplification of reality. It captures certain patterns and ignores others. As long as the market conditions stay within the model's training domain, it works. Once conditions move outside that domain, the model breaks — often spectacularly.

This is model risk: the gap between backtest and forward test, between theory and practice.

*see also:* [[gn38-backtest-science-validation]] · [[gn18-non-stationarity]] · [[gn43-statistics-edge-evaluation]] · [[gn29-regime-identification]]

## the three types of model risk

**Overfitting:** Your model fits noise instead of signal. Backtests look perfect. Forward tests collapse. This happens when you have too many parameters or too few trades.

**Regime change:** Your model works in the training regime but a different regime emerges. Example: a mean reversion model works great in 2020-2021 (ranging, low rates) but fails in 2022 (trending, rising rates).

**Out-of-distribution events:** Your model has never seen an event of this magnitude. A 10% move in a single day. A 30% drawdown. A correlation structure that's never happened before.

## detecting model risk in backtest

Red flags in backtests:
- Win rate too high (>75%) — you've overfit
- Sharpe ratio too good (>2.0) — probably overfit
- Every year is profitable — you've fit the noise
- Removing top 5 trades collapses returns — lucky events, not edge
- Maximum drawdown is shallow — you haven't tested worst case

These aren't disqualifications. They're warnings. A 70% win rate is fine. An 85% win rate is suspicious.

## walk-forward validation

The gold standard for testing: divide your data into non-overlapping periods. Optimize on period 1, test on period 2. Optimize on period 2, test on period 3. Etc.

Walk-forward testing shows you:
- Does the model learn from new data?
- Do the optimal parameters change over time?
- Does the forward test performance stay close to in-sample performance?

If forward test performance is dramatically worse than in-sample, your model is overfitted.

## the parameter stability question

Do your model's optimal parameters change over time?

If the optimal Donchian channel is always 20 periods, that's stable — good sign. If it oscillates between 5 and 50 periods, that's unstable — you're fitting noise.

Stable parameters across different time periods = likely real edge. Changing parameters = you're optimizing for what worked, not what will work.

## out-of-distribution testing

Your model will eventually see something unprecedented. What happens then?

Test your model on extreme events:
- Take your backtest data and remove the 10% most extreme days
- Run the model on those extreme days
- How does it perform?

If it falls apart on extreme days, you have model risk. You need additional safeguards (wider stops, smaller size) for extreme conditions.

## the importance of forward testing

Backtests are hypotheses. Forward tests are data.

Always paper trade a new model for at least 30 trades before risking real money. Better: 100+ trades. Track:
- Is the forward test win rate close to backtest win rate?
- Is the forward test average win/loss close to backtest?
- How big are the slippage and execution differences?

If forward tests are dramatically worse than backtests across multiple models, the problem isn't the models — it's your execution or market conditions have shifted.

## regime filters reduce model risk

A model that works in all regimes is rare. Most models work in trending or ranging, not both.

Add a regime filter:
- Only take breakouts in trending markets
- Only take reversals in ranging markets
- When regime is unclear, don't trade

This won't prevent all model failures, but it reduces them by not forcing the model to work outside its domain.

## my take

Every model I deploy expects to fail at some point. The question is not "will this break" but "when will this break and how much will it cost."

I run multiple models with different failure modes:
- One model fails in choppy markets
- One model fails in strong trends
- One model fails in low volatility
- Together, they're more robust than any single model

I also keep monthly walk-forward validation running. If forward test performance drops below 50% of backtest performance, I stop and investigate. Better to catch overfitting early than to find out live.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn38-backtest-science-validation]]</li>
    <li>[[gn18-non-stationarity]]</li>
    <li>[[gn43-statistics-edge-evaluation]]</li>
    <li>[[gn29-regime-identification]]</li>
    <li>[[gn17-position-sizing]]</li>
  </ul>
</div>

## ending questions
if your backtest Sharpe is 2.0 and forward test is 0.5, is the model bad or is it overfit? assume overfit until proven otherwise.
