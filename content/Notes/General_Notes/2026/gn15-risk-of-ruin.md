---
title: "risk of ruin is the only metric that matters"
tags:
  - general-notes
  - risk
  - risk-management
  - position-sizing
  - trading
  - survival
keywords:
  - risk of ruin
  - position sizing
  - kelly criterion
  - survival
  - drawdown
  - risk management
draft: false
description: Risk of ruin is the single most important metric in trading. Expected value, Sharpe ratio, win rate — none of them matter if you go to zero. Here's how to calculate and manage it.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN15
cssclasses:
  - general-note
---

# risk of ruin is the only metric that matters

Every trader obsesses over returns. The best traders obsess over not going to zero. Risk of ruin — the probability of losing so much capital you cannot continue trading — is the single most important metric in finance, and almost no one tracks it.

*see also:* [[gn13-non-ergodicity]] · [[gn12-extremistan-vs-mediocristan]] · [[skin-in-the-game-trading]]

## what is risk of ruin

Risk of ruin is the probability that your capital drops below a threshold from which recovery is impossible — either due to account size, margin requirements, or psychological capacity to continue.

It is not the same as drawdown. Drawdown measures how far you are from your peak. Ruin measures whether you can continue at all. A 50% drawdown on a $100K account means you have $50K. A 50% drawdown on a $10K account with $5K minimum trade size means you are functionally ruined even though you still have money.

## the kelly criterion

The Kelly criterion maximizes long-term growth by telling you exactly how much to bet given your edge and odds. The formula: f* = (bp - q) / b, where b is the net odds received, p is the win probability, and q is the loss probability.

The key insight: betting more than Kelly reduces growth rate and dramatically increases risk of ruin. Betting half-Kelly reduces growth by 25% but reduces risk of ruin to near zero over reasonable timeframes.

| Bet size | Growth rate | Risk of ruin (1000 bets) |
|----------|------------|------------------------|
| Full Kelly | Maximum | ~13% |
| 0.5 Kelly | 75% of max | ~0.1% |
| 1.5 Kelly | 75% of max | ~30% |
| 2.0 Kelly | 0% (negative) | ~60% |

Betting more than twice Kelly yields negative expected growth — you are mathematically guaranteed to go to zero even with a positive edge.

## why ruin is path-dependent

Ruin is not just about final outcomes. It is sequence-dependent. A string of losses at the wrong time can destroy an account even if the overall strategy has positive EV.

This is the non-ergodicity problem again. The ensemble average across 1000 traders may be positive, but the individual trader who hits a bad sequence in their first 50 trades never gets to participate in the long-run average.

## the three layers of risk control

**Position level:** Every single trade must have a defined maximum loss. Not a mental stop — a hard one. 0.5-1% of total capital per trade is the standard range.

**Portfolio level:** Maximum sector or strategy exposure. If all your positions correlate, your position-level stops don't protect you from a portfolio-level drawdown.

**Account level:** Hard stop on total drawdown. When you hit it, you stop trading and review. Not reduce size — stop entirely. This prevents the spiral where drawdown causes emotional decisions that cause further drawdown.

## my take

I track one number above all others: the probability that my current strategy and position sizing will draw down more than 30% over the next 100 trades. If that number is above 5%, I reduce size.

The math is uncomfortable. Most retail traders operate at a risk of ruin near 100% — they just haven't hit their bad sequence yet. Every time you risk more than 2% on a single trade, you are accepting a non-trivial probability of eventual ruin. Every time you trade a strategy with less than 50 trades of data, you are flying blind.

Risk of ruin is the tail risk that EV calculations ignore. And in Extremistan, tail risk is the only risk that matters.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[skin-in-the-game-trading]]</li>
    <li>[[gn08-mental-models-for-better-thinking]]</li>
  </ul>
</div>

## ending questions
what is your current risk of ruin over the next 500 trades? if you don't know the number, you are gambling.
