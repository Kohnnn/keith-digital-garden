---
title: "the statistics of edge expected value and the trap of small samples"
tags:
  - general-notes
  - statistics
  - probability
  - edge
  - EV
  - sample-size
  - monte-carlo
keywords:
  - expected value
  - edge
  - law of large numbers
  - small sample
  - Monte Carlo
  - confidence interval
  - profit factor
  - win rate
  - R:R
draft: false
description: How to rigorously evaluate whether you actually have an edge — expected value calculations, sample size requirements, confidence intervals, and the Monte Carlo framework.
created: 2023-01-20
updated: 2023-01-20
note_id: 230120GN43
cssclasses:
  - general-note
---

# the statistics of edge expected value and the trap of small samples

Most traders evaluate their strategy by looking at total P&L or win rate. Both are nearly useless without sample size and statistical context. A strategy with 10 trades and 80% win rate tells you nothing. A strategy with 1000 trades and 55% win rate might tell you a lot.

This note distills the Turtle Wiki's statistics hub into a practical framework for evaluating whether you actually have an edge.

*see also:* [[gn20-expected-value-edge-variance]] · [[gn16-multiple-testing-problem]] · [[gn38-backtest-science-validation]] · [[gn12-extremistan-vs-mediocristan]]

## the EV formula

Edge = Expected Value = (Win Rate × Average Win) − (Loss Rate × Average Loss)

If EV > 0, you have an edge. If EV < 0, you don't — regardless of how good your win rate looks.

Example: 70% win rate with 1:2 R:R = (0.7 × 1) − (0.3 × 2) = 0.7 − 0.6 = 0.1 — positive EV, but narrow.

Example: 40% win rate with 1:3 R:R = (0.4 × 3) − (0.6 × 1) = 1.2 − 0.6 = 0.6 — higher EV despite lower win rate.

Win rate is a vanity metric. EV is the truth.

## the sample size problem

With 30 trades, the 95% confidence interval for win rate is roughly ±16%. A strategy showing 65% win rate on 30 trades could have a true win rate anywhere from 49% to 81%. That's not a conclusion — it's a guess.

Guidelines:
- 30 trades: directional hint only
- 100 trades: rough estimate
- 300 trades: useful confidence
- 1000+ trades: statistically meaningful

The same applies to EV. With small samples, EV is just a hypothesis. With large samples, it becomes a measurable edge.

## the law of large numbers

More trades = more stable metrics. The standard deviation of your win rate estimate shrinks as 1/sqrt(n). To halve your error margin, you need 4× the sample size.

This is why quants test on hundreds of thousands of trades. It's also why discretionary traders constantly mistake luck for skill — they never get enough reps to distinguish edge from noise.

## Monte Carlo simulation

Monte Carlo reshuffles your trade results randomly thousands of times to show the range of possible outcomes. It answers: "given this distribution of trades, what are the best, worst, and typical outcomes?"

Essential insights from Monte Carlo:
- The actual backtest equity curve is just ONE possible path
- 20% of Monte Carlo paths may show >50% drawdown even with positive EV
- If the worst 5% of paths include ruin, your sizing is too aggressive
- The range matters more than the average

Always run Monte Carlo before sizing up a strategy.

## removing the best trade

A simple robustness test: remove the single best trade from your backtest. If the strategy is still profitable, your edge is distributed. If it becomes a loser, your edge is a single lucky outlier.

Remove the top 5 trades. If performance craters, you don't have an edge — you have a lottery ticket.

## profit factor as a diagnostic

Profit Factor = Gross Profit / Gross Loss

- 1.0-1.5: Realistic for most strategies
- 1.5-2.0: Strong edge, likely real
- 2.0+: Suspicious — likely overfitted or too few trades
- <1.0: No edge

A profit factor of 3.0 on 50 trades is a red flag. A profit factor of 1.3 on 2000 trades is a solid edge.

## my take

I track three numbers on every strategy: EV/trade, profit factor, and Monte Carlo max drawdown. I don't deploy capital until I have 300+ trades in backtest and 100+ in forward test.

The most common mistake I see: traders evaluate their edge based on the last 20 trades. Twenty trades is noise. Edge is measured in hundreds, not dozens. If you can't survive 100 losing trades without changing your strategy, you don't have conviction — you have hope.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn20-expected-value-edge-variance]]</li>
    <li>[[gn16-multiple-testing-problem]]</li>
    <li>[[gn38-backtest-science-validation]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn13-non-ergodicity]]</li>
  </ul>
</div>

## ending questions
what's your EV per trade across your last 200 trades? if you don't know, you don't know if you have an edge.
