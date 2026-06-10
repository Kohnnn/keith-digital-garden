---
title: "risk management deep dive survival over returns"
tags:
  - general-notes
  - risk
  - management
  - position-sizing
  - drawdown
  - tail-risk
keywords:
  - risk of ruin
  - drawdown management
  - position sizing
  - Kelly criterion
  - ATR
  - tail risk
  - black swan
  - barbell
  - stop loss
draft: false
description: The complete risk management framework — drawdown control, position sizing models, tail risk protection, and why survival is the only thing that matters long-term.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN37
cssclasses:
  - general-note
---

# risk management deep dive survival over returns

Risk management is not a subset of trading. It is trading. Everything else — entries, exits, analysis, indicators — is decoration on top of the single question that determines whether you stay in the game: "if I am wrong, how badly will it hurt?"

This note consolidates the Turtle Wiki's risk management, position sizing, and tail risk concepts into a single operational framework.

*see also:* [[gn32-risk-management-frameworks]] · [[gn15-risk-of-ruin]] · [[gn17-position-sizing]] · [[gn27-drawdown-psychology]] · [[gn19-barbell-strategy]]

## the hierarchy of survival

Risk management operates in layers, and the lower layers must be solid before upper layers matter:

1. **Existential layer:** Never take a risk that can end your trading career. No single trade should have >2% risk of total account. No single event should be capable of a margin call.
2. **Drawdown layer:** Define maximum acceptable drawdown (15-20% is common for systematic traders). When hit, reduce size or stop — no exceptions.
3. **Variance layer:** Position sizing controls the range of outcomes. Small enough that a losing streak is uncomfortable but not devastating.
4. **Optimization layer:** Only after 1-3 are solid should you optimize for returns.

Most traders skip to layer 4. That's why most traders blow up.

## drawdown management

Drawdown is not an error — it's a feature of any strategy with positive expectancy. The question is whether your drawdown limits match your strategy's statistical worst case.

Hard rules (write these when you're thinking clearly, not during drawdown):
- **5% drawdown:** Review all positions. No new trades in underwater markets.
- **10% drawdown:** Halve position sizes. No discretionary trades.
- **15% drawdown:** Stop trading. Minimum 2-week break. Full strategy review.
- **20%+:** This should be impossible if lower layers function. If it happens, fundamental redesign is needed.

Track drawdown separately from P&L. The emotional impact of drawdown is nonlinear — a 10% drawdown feels 2-3x worse than a 10% gain feels good. Pre-commit to rules because your drawdown brain cannot be trusted.

## position sizing frameworks

**Fixed fractional (the standard):** Risk a fixed % of capital per trade (0.5-1.0%). If you have a 10-pip stop and $10K capital at 0.5% risk, your position = ($10K × 0.005) / (10 pips × pip value). Simple, survival-oriented, but doesn't account for win rate or edge.

**Kelly criterion:** Bet size = edge / odds. Maximizes long-term growth but is aggressive — half-Kelly (bet 50% of Kelly suggests) is standard practice. Full Kelly can produce 30-50% drawdowns even with positive edge.

**ATR-based sizing:** Position = (capital × risk%) / (ATR × multiplier). Standardizes risk across assets with different volatility. In high-volatility regimes, reduce size automatically. The 2.5× ATR stop rule: place stops at 2.5× ATR from entry, set risk to 0.5% of capital.

**Martingale (don't):** Doubling down after losses. Mathematically guarantees eventual ruin. Avoid.

## tail risk and black swans

Fat tails are not theoretical in markets — they're empirical. BTC daily returns have kurtosis ~123 (normal distribution = 3). You are not in Mediocristan. You are in Extremistan.

Tail risk strategies:
- **Position sizing is tail risk management:** The best defense against what you cannot predict is having small enough positions that no single event destroys you
- **Barbell strategy:** 90% ultra-safe / 10% high-upside asymmetric bets. The safe portion survives, the risky portion captures tail events
- **Deep out-of-the-money options:** Cheap insurance that expires worthless 95% of the time but pays massively when it hits
- **Cash as a position:** Cash is a tail risk hedge that doesn't cost premium. During euphoria, nobody wants it. During crashes, it's the only thing that works

The Turkey Problem: 1,000 days of stability does not guarantee day 1,001 won't be Thanksgiving. Your backtest is not your edge — it's a hypothesis that needs constant revalidation.

## stop loss mechanics

- **Price stop (hard stop):** Fixed price level, non-negotiable. The minimum requirement for any trade.
- **ATR stop:** 2-3× ATR from entry. Adapts to volatility — wider in high vol, tighter in low vol.
- **Trailing stop:** Moves with price in your favor. Locks profits while letting winners run. Standard: trail below the most recent swing low/high on the higher timeframe.
- **Time stop:** Exit if the thesis hasn't played out within a defined period. Prevents decay in option trades and opportunity cost in trend trades.
- **Signal stop:** Exit when the original entry signal reverses. More discretionary, requires discipline.

Rule: never loosen a stop. You can tighten it (trail it up), but if you move a stop farther from price, you're changing the trade's risk profile mid-flight.

## portfolio-level risk

- **Position correlation:** If your 10 positions are all correlated, you effectively have one position with 10× the risk. Check correlation matrices quarterly.
- **Concentration limits:** Max 20% in any single asset, max 30% in any correlated group, no single sector >40%.
- **Leverage:** Only use leverage if the risk on your total capital is still within drawdown limits. 2× leverage on a 0.5% risk trade is 1% risk — still fine. 10× leverage on a 2% risk trade is 20% risk — insane.
- **Cash buffer:** 10-20% cash at all times. Cash is not "uninvested" — it's an option on future opportunities.

## my take

I run four hard risk rules that never change regardless of market conditions, P&L, or emotional state:

1. Risk 0.5% per trade, never more
2. Max drawdown 15% before stopping entirely
3. No single sector > 30% of capital
4. Minimum 10% cash at all times

These rules were written on a good day. I don't trust my bad-day brain to make sensible risk decisions. The market will eventually hand you a loss that tests every assumption you have. The only question is whether the loss is small enough that you keep trading afterward.

Design for that loss. Everything else is optional.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn32-risk-management-frameworks]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn27-drawdown-psychology]]</li>
    <li>[[gn19-barbell-strategy]]</li>
  </ul>
</div>

## ending questions
what is your max acceptable drawdown? if you don't have a number, you don't have a risk management system — you have a hope.
