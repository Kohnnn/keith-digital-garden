---
title: "non-ergodicity why average outcomes dont apply to you"
tags:
  - general-notes
  - statistics
  - risk
  - ergodicity
  - probability
  - trading
keywords:
  - non-ergodicity
  - ergodic
  - ensemble averages
  - time averages
  - expected value
  - risk of ruin
draft: false
description: The most dangerous assumption in finance — that ensemble averages equal time averages. Why expected value is not enough and how non-ergodicity changes everything about position sizing.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN13
cssclasses:
  - general-note
---

# non-ergodicity why average outcomes dont apply to you

The single most dangerous assumption in quantitative finance is ergodicity — the idea that the average outcome across many people (ensemble average) equals the average outcome for one person over time (time average). In non-ergodic systems — and markets are non-ergodic — these two averages can be radically different, and confusing them kills accounts.

*see also:* [[gn12-extremistan-vs-mediocristan]] · [[gn08-mental-models-for-better-thinking]] · [[skin-in-the-game-trading]]

## the coin flip trap

Here's the classic example. You have $100 and I offer you a bet: each round you bet 50% of your capital on a coin flip. Heads you win 80% of your bet. Tails you lose 50%. The ensemble EV of each round is positive: (0.5 × +0.8 + 0.5 × -0.5) = +15% per round.

If 1000 people each play one round, most will profit. The *ensemble average* is positive.

But if one person plays 1000 rounds in sequence, that person goes to zero. Because a 50% loss followed by an 80% gain does not net positive — it nets negative. The geometric return is negative even though the arithmetic EV is positive.

The difference between the two averages is non-ergodicity.

## why markets are non-ergodic

Markets are non-ergodic for three structural reasons:

**path dependence.** Where you are depends on where you've been. A 50% drawdown requires a 100% gain to recover. Losses compound asymmetrically with gains. The order of returns matters.

**risk of ruin.** You can only play the game if you're still in it. If you go to zero, you don't get to participate in the "long-run average" that the EV promised. Ruin is absorbing — once it happens, all future scenarios are cancelled.

**non-stationarity.** The statistical properties of the market change over time. The distribution that generated your backtest results is not the same distribution that will generate future returns. Ensemble averages from past data tell you little about your personal time average going forward.

## the expected value illusion

EV is the most overused metric in trading. Everyone optimizes for it. But EV only matters if you can survive to realize it.

Consider two strategies:

| Strategy | EV/trade | Risk of ruin (1000 trades) |
|----------|----------|--------------------------|
| A | +0.5% | 0% |
| B | +2.0% | 15% |

Strategy B has 4x the EV. But over 1000 trades, there's a 15% chance you blow up and realize exactly zero of that EV. If you survive, you win. If you don't, the EV was never yours.

In a non-ergodic system, EV is not a personal expectation — it's a population statistic. Your personal expectation is lower, possibly zero.

## the ergodicity economics insight

Ole Peters' ergodicity economics formalizes this: the correct decision criterion is not expected value but the *time-average growth rate*. If the time-average growth rate is negative, the strategy is a losing one even if the ensemble EV is positive.

The Kelly criterion is the practical solution to this problem. Kelly maximizes the geometric growth rate of your capital — your time average — not the arithmetic EV. It explicitly accounts for the non-ergodic nature of repeated bets.

## my take

I stopped thinking in terms of "expected value per trade" years ago. What matters is the expected growth rate of my total capital over the next N trades, accounting for variance, sequence risk, and the possibility of ruin.

This changes everything:
- Position sizing becomes more important than entry signals
- The best strategy is not the one with highest Sharpe but the one that keeps you in the game longest
- Diversification is not about correlation — it's about reducing the probability of path-dependent ruin
- Leverage is not a multiplier of returns — it's a multiplier of non-ergodicity risk

Most traders optimize ensemble statistics they can never personally achieve. The market doesn't care about your expected value. It cares about your survival.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[skin-in-the-game-trading]]</li>
    <li>[[gn08-mental-models-for-better-thinking]]</li>
  </ul>
</div>

## ending questions
if you ran your current strategy 1000 times, what's the probability you'd be richer vs ruined? is your position sizing consistent with that answer?
