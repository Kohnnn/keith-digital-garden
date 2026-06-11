---
title: "breakout and mean reversion the two core strategies explained"
tags:
  - general-notes
  - breakout
  - mean-reversion
  - strategy
  - price-action
  - technical-analysis
keywords:
  - breakout
  - mean reversion
  - trend following
  - range trading
  - Donchian
  - Bollinger Bands
  - momentum
  - contrarian
draft: false
description: The two fundamental trading strategies — trend following (breakout) and mean reversion — their mechanics, when each works, when each fails, and how to combine them.
created: 2024-08-05
updated: 2024-08-05
note_id: 240805GN45
cssclasses:
  - general-note
---

# breakout and mean reversion the two core strategies explained

Every trading strategy falls into one of two categories: trend following (you bet the move continues) or mean reversion (you bet the move reverts). Everything else — patterns, indicators, systems, algorithms — is a variation on these two themes.

Understanding which regime you're in determines which strategy to use. Using the wrong one in the wrong regime is how accounts get blown.

*see also:* [[gn30-setup-patterns]] · [[gn24-donchian-turtle-system]] · [[gn29-regime-identification]] · [[gn39-market-structure-order-flow]]

## trend following (breakout)

Trend following bets that once price moves in a direction, it will continue moving in that direction. The edge comes from human psychology: FOMO, herding, and delayed reaction to new information.

**When it works:** Trending markets with strong directional movement. Low volatility expansion into trending volatility.

**When it fails:** Ranging markets, choppy conditions, frequent false breakouts.

**Key tools:**
- Donchian channels (breakout of N-period high/low)
- Moving averages (price above/below = trend direction)
- ATR (for stop placement and position sizing)
- Trailing stops (to let winners run)

**Win rate is low (30-45%), but R:R is high (1:3+).** You win less than half the time but your winners are much bigger than your losers.

## mean reversion (counter-trend)

Mean reversion bets that price will return to its average after an extreme move. The edge comes from statistical properties — price extremes tend to normalize — and from human overreaction to news.

**When it works:** Ranging markets with defined support and resistance. After sharp but non-fundamental moves.

**When it fails:** Strong trends that don't revert. Breakouts that follow through. A mean reversion trade in a trending market is called "catching a falling knife."

**Key tools:**
- Bollinger Bands (price at outer band = overextended)
- RSI/Stochastics (oversold/overbought levels)
- Support/resistance levels
- Volume analysis (high volume climax often signals exhaustion)

**Win rate is higher (55-70%), but R:R is lower (1:1-1:2).** You win more often but each win is smaller relative to the risk.

## regime detection

The critical skill is knowing which regime you're in. Key signals:

**Trending:**
- Price above/below key moving average (e.g., 50-day, 200-day)
- Higher highs / higher lows (uptrend) or lower highs / lower lows (downtrend)
- ADX above 25
- Breakouts hold and follow through

**Ranging:**
- Price oscillating between clear support/resistance
- ADX below 20
- Multiple false breakouts in both directions
- Bollinger Bands contracting (squeeze)

**Transitioning:**
- The old pattern is breaking down
- Adrenaline spikes (high volume, wide ranges)
- Old support/resistance levels stop working
- This is where most losses happen — reduce size

Use a simple momentum filter (e.g., 50-period EMA slope) to decide which strategy to deploy. If the EMA is sloping up or down with conviction, use trend following. If it's flat, use mean reversion.

## combining them

A complete strategy portfolio includes both approaches:
- Trend following captures large moves (rare but high impact)
- Mean reversion captures day-to-day noise (frequent but low impact)

Don't mix them on the same trade. A breakout entry with a mean reversion exit is confused and usually loses. Keep them separate: know which strategy you're running on each trade and stick to the rules.

## common mistakes

- **Using breakouts in ranges:** You enter every breakout only to see it reverse immediately. Solution: add a regime filter before taking breakout signals.

- **Using mean reversion in trends:** You buy every dip in a downtrend, catching falling knives. Solution: check the higher timeframe trend before taking reversion trades.

- **Not adapting position size:** Trend following needs smaller size (lower win rate, higher volatility). Mean reversion can use larger size (higher win rate, lower volatility).

## my take

I run trend following on daily charts and mean reversion on intraday. The daily trend filter tells me the overall direction. The intraday mean reversion gives me entries. This creates a system where I buy pullbacks in uptrends and sell rallies in downtrends — combining both strategies coherently.

The most important rule: if I can't clearly identify the regime, I don't trade. Indecision about the regime means the market is in a transition phase, which is exactly when both strategies fail.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn30-setup-patterns]]</li>
    <li>[[gn24-donchian-turtle-system]]</li>
    <li>[[gn29-regime-identification]]</li>
    <li>[[gn39-market-structure-order-flow]]</li>
    <li>[[gn21-three-layer-trading-system]]</li>
  </ul>
</div>

## ending questions
which strategy are you running right now — trend following or mean reversion? if you can't answer, you're probably running neither.
