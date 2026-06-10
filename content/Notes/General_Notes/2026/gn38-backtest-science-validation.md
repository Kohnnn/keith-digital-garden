---
title: "backtest science avoiding statistical delusion"
tags:
  - general-notes
  - statistics
  - backtest
  - validation
  - data
  - methodology
keywords:
  - overfitting
  - look-ahead bias
  - data snooping
  - walk-forward
  - Monte Carlo
  - sample size
  - non-stationarity
  - robustness
draft: false
description: How to backtest rigorously without fooling yourself — covering survivor bias, overfitting, out-of-distribution risk, and the statistical traps that make most backtests unreliable.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN38
cssclasses:
  - general-note
---

# backtest science avoiding statistical delusion

A backtest is not a prediction of future performance. It's an estimate of how a strategy would have performed under past conditions, contaminated by multiple biases that all push the result in the optimistic direction. Treating a backtest as proof of edge is the most expensive mistake a quantitative trader can make.

This note consolidates the Turtle Wiki's backtest validation, statistics, and meta-thinking concepts into a rigorous testing framework.

*see also:* [[gn16-multiple-testing-problem]] · [[gn18-non-stationarity]] · [[gn20-expected-value-edge-variance]] · [[gn35-epistemology-knowledge-limits]]

## the backtest pyramid

Rigorous backtesting operates in layers. Each layer catches errors the previous one misses:

1. **Data integrity:** Clean data, no survivorship bias, no look-ahead, proper corporate action adjustments
2. **Execution realism:** Slippage, commissions, spread, market impact — conservative estimates
3. **Statistical validity:** Sufficient sample size, out-of-sample testing, significance testing
4. **Robustness:** Walk-forward, Monte Carlo, parameter sensitivity, regime variation
5. **Forward test:** Small live capital, minimum 3-6 months before conviction

Most retail backtests stop at Layer 1 or 2. That's why most retail strategies fail live.

## the big biases

**Look-ahead bias:** Using information that wasn't available at the time of the decision. Classic example: computing a moving average using the close of the current bar and entering on the same close. In reality, you'd enter on the next bar's open. Fix: always lag indicators by at least one bar.

**Survivorship bias:** Only including assets that still exist. A backtest of "buy all S&P 500 stocks" from 2000 ignores all the companies that went bankrupt. Fix: use point-in-time index composition data.

**Hindsight bias:** When you manually backtest, you unconsciously select better entries because you already know where price went. Fix: code the rules exactly and run them mechanically.

**Repaint:** Indicators whose past values change as new data comes in (e.g., some zigzag indicators, fractal-based signals). Fix: test with only confirmed data — use the close of the completed bar.

**Overfitting:** Adding parameters until the strategy perfectly fits past noise. Classic sign: a 90% win rate in backtest that evaporates in forward test. Fix: fewer parameters, walk-forward validation, regularization.

## out-of-distribution (OOD) risk

The most dangerous bias: your model performs well within the distribution it was trained on but fails catastrophically when the market regime changes.

OOD examples:
- A mean reversion strategy trained on low-volatility 2023 data breaks in high-volatility 2024
- A trend-following strategy trained on trending 2020-2021 breaks in ranging 2022
- An options strategy trained on low-VIX environment breaks when VIX spikes

The broken leg exception: if a model sees a person with a broken leg and predicts they won't run, it's usually right — until the person is Usain Bolt in the Olympics. Your model can't distinguish "usually right" from "always right."

Fix: train on multiple market regimes. If your backtest only covers one regime, you haven't tested it at all.

## sample size and statistical significance

With 30 trades, the 95% confidence interval for win rate is roughly ±15%. A strategy showing 60% win rate on 30 trades could have a true win rate anywhere from 45% to 75%. That's not a conclusion — it's a guess.

Rules of thumb:
- 30-100 trades: directional indication only, not conviction
- 100-300 trades: rough estimate of performance, enough for initial filtering
- 300-1000 trades: reasonable confidence for deployment at small size
- 1000+ trades: statistically meaningful across multiple regimes

Also test by removing the single best trade. If your strategy's edge disappears without its largest win, you don't have an edge — you have a lottery ticket.

## robustness testing

**Walk-forward optimization:** Optimize parameters on an in-sample period, test on the next out-of-sample period, slide forward, repeat. The walk-forward analysis (WFA) tells you if your strategy's parameters are stable or just fit to noise. If optimal parameters vary wildly between periods, your strategy is not robust.

**Monte Carlo simulation:** Randomize the order of your trade results and simulate thousands of possible equity curves. This tells you the range of possible outcomes — not just the single backtest path. If 20% of Monte Carlo paths show >50% drawdown, your strategy is too risky for your risk tolerance regardless of the backtest P&L.

**Parameter sensitivity:** Vary each parameter by ±20% and see if performance holds. If a slight change in your entry threshold or stop distance destroys performance, your strategy is curve-fitted.

**Cross-validation:** Train on Period A, test on Period B. Then swap. If performance is wildly different, the strategy hasn't found a genuine pattern.

## forward testing protocol

Even excellent backtests fail in live trading. The forward test (paper or small capital) catches:
- Slippage that's larger than modeled
- Order book mechanics the backtest didn't capture
- Psychological pressure that changes execution quality

Forward test rules:
- Run minimum 3 months or 100 signals, whichever is longer
- Use the exact same rules as the backtest (no tweaking mid-test)
- Track execution quality separately from strategy performance
- Only size up after the forward test confirms the backtest

## my take

I've stopped trusting backtests that don't pass three tests: (1) walk-forward holds up, (2) parameter sensitivity is flat (±20% doesn't break it), and (3) Monte Carlo shows acceptable worst-case drawdown. Even then, I start at minimum size and scale only after a 6-month forward test.

The most important question is never "did the backtest show profit?" — that's the wrong question. The question is "how wrong could the backtest be, and will I survive if it is?"

Design for the gap between backtest and reality. That gap is where accounts get blown.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn16-multiple-testing-problem]]</li>
    <li>[[gn18-non-stationarity]]</li>
    <li>[[gn20-expected-value-edge-variance]]</li>
    <li>[[gn35-epistemology-knowledge-limits]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
  </ul>
</div>

## ending questions
what is your largest backtest's out-of-sample performance vs in-sample? if you haven't measured it, you don't know if you have an edge or an overfit.
