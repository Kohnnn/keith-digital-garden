---
title: "risk management frameworks how to structure the van gogh problem"
tags:
  - general-notes
  - risk-management
  - portfolio
  - sizing
  - diversification
  - allocation
keywords:
  - risk management
  - portfolio construction
  - kelly criterion
  - diversification
  - correlation
  - sizing
draft: false
description: Risk management is not about avoiding losses. It's about accepting them at a rate your capital can sustain. Multiple frameworks exist — Kelly, fixed fractional, volatility-adjusted.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN32
cssclasses:
  - general-note
---

# risk management frameworks how to structure the van gogh problem

Van Gogh was a great painter but a poor money manager. He took maximum risk on every decision. If he had structured his life for sustainable optionality instead of maximal returns, he'd have had more security to paint.

The same applies to traders. Your risk management framework determines whether you're playing a one-time game (and can afford to go all-in) or an iterated game (and must preserve capital across many decisions).

*see also:* [[gn15-risk-of-ruin]] · [[gn17-position-sizing]] · [[gn25-convexity-optionality]]

## framework 1: kelly criterion

Kelly Criterion = (Win% × Avg Win) - (Loss% × Avg Loss) / Avg Win

This gives you the optimal percentage of capital to risk per trade to maximize long-term growth.

**Weakness:** Assumes you know your true edge (you don't). Kelly typically overestimates because backtests are optimistic. Use half-Kelly or quarter-Kelly to be safe.

**Example:** 55% win rate, 2:1 RR. Kelly = (0.55 × 2) - (0.45 × 1) / 2 = 0.325 = risk 32.5% per trade. Use 8-10% instead (quarter Kelly) to account for uncertainty.

## framework 2: fixed fractional (2% rule)

Risk 2% of capital on each trade. This is simple, conservative, and survives long drawdowns. If you hit 20 consecutive losses (unlikely but possible), you've lost ~33% (0.98^20 ≈ 0.67).

**Strength:** Simple, forces discipline, easy to scale.

**Weakness:** Too conservative for small accounts, doesn't account for strategy variance.

## framework 3: volatility-adjusted (ATR-based)

Position size = (Account × Risk%) / (Stop distance × ATR)

In low-volatility markets, you can take bigger positions. In high-volatility, you take smaller positions automatically. The risk per trade stays constant.

**Strength:** Adapts to market conditions. Avoids blow-ups in black swan events.

**Weakness:** Requires calculation on each trade.

## framework 4: time-based (round-robin)

If you run multiple strategies, allocate capital to each and rotate through them. This provides implicit diversification and prevents any single strategy from dominating your capital.

**Strength:** Diversifies alpha sources, prevents over-concentration.

**Weakness:** Underutilizes capital if some strategies are generating strong returns.

## diversification: the unglamorous workhorse

Diversification is boring but powerful. A portfolio of uncorrelated +50% year strategies with -30% correlations will have higher Sharpe than any single +100% year strategy.

Diversification reduces risk in two ways:
1. Independent losses offset each other
2. Different strategies thrive in different regimes

A balanced portfolio: 40% directional (long equities), 30% relative value (market neutral), 20% macro (currency/rates), 10% tail hedges (long vol, out-of-money calls).

## my take

I use a hybrid approach: fixed 2% per trade + volatility adjustment + portfolio diversification across strategies.

My capital allocation:
- 50% passive (index funds, bonds) — low maintenance
- 30% tactical (active trading, rotating strategies) — 2% risk/trade
- 15% strategic bets (conviction positions, 1-3 year horizon) — sized for 5-10% account risk if wrong
- 5% tail hedges (long vol, long gold, long BTC) — insurance

Within the 30% tactical bucket, I rotate between four strategies: trend following, mean reversion, stat arb, and momentum. No strategy gets more than 10% of capital. When one underperforms, I reduce and wait for regime shift.

This approach doesn't optimize for maximum returns. It optimizes for maximum returns *per unit of psychological stress*, which is what matters for longevity.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn25-convexity-optionality]]</li>
    <li>[[gn29-regime-identification]]</li>
  </ul>
</div>

## ending questions
which framework are you using right now? if the answer is "none," that's the problem to fix before anything else.
