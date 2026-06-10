---
title: "regime identification how markets switch between modes"
tags:
  - general-notes
  - trading
  - regime-shift
  - market-structure
  - state-detection
keywords:
  - regime
  - market state
  - trending
  - ranging
  - volatility
  - transition
draft: false
description: Markets operate in distinct regimes — trending, ranging, transitioning, high-vol, low-vol. Identifying which regime you're in is more important than predicting the next price move.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN29
cssclasses:
  - general-note
---

# regime identification how markets switch between modes

Markets do not move randomly in all directions. They operate in distinct modes — regimes — where different strategies work and others fail. A strategy that crushes in trending markets gets destroyed in range-bound markets. A strategy that profits from mean reversion implodes during strong trends.

The most important skill is not predicting the next price. It's identifying which regime you're in and adjusting your strategy accordingly.

*see also:* [[gn18-non-stationarity]] · [[gn12-extremistan-vs-mediocristan]] · [[gn21-three-layer-trading-system]]

## the four main regimes

**Trend (Low vol + Directional bias):** Price making consistent higher highs and higher lows (or lower lows and lower highs). Trend followers thrive. Mean reversion kills you.

**Range (Low vol + No directional bias):** Price bounces between support and resistance. Mean reversion and grid trading work. Breakout systems fail repeatedly on false breaks.

**Transition (High vol + Directional change):** Price breaking out of range, early stages of trend, or losing trend momentum. Volatility high, signals ambiguous. Best to reduce size and wait for regime clarity.

**Extremistan (High vol + Fat tails):** Black swan events, panic selling, structural breaks. Convex positioning wins. Leverage dies. Your regular risk management is insufficient.

## identification signals

**For Trending:** Price above/below key moving averages (50, 100, 200 day). Higher highs, higher lows. Volume increasing on directional moves. ADX > 25.

**For Ranging:** Price bouncing between defined levels. Lower volume on breakout attempts. Failures to close above/below key levels. Bollinger Bands narrow.

**For Transition:** Wide range bars. High volume but ambiguous direction. Price unable to hold moves. Volatility spiking. This is the hardest regime to identify in real-time.

**For Extremistan:** VIX > 30 (in equity context). Intraday ranges wider than usual daily ranges. Volume spikes on panic selling. On-chain metrics showing capitulation (MVRV < 1, exchange inflows spiking).

## practical application

Once you identify the regime, your position sizing and strategy choice should match:

- **Trending:** Full size, trend-following strategy, wide stops (capture the move)
- **Ranging:** Half size, mean reversion, tight stops (scalp the bounce)
- **Transition:** Quarter size, no directional bets, wait for regime to clarify
- **Extremistan:** Barbell (mostly cash, some convex upside), stop normal strategies

## my take

I check the regime at the start of each week and whenever I see a volatility spike. The frequency of regime checks matters — too frequent and you overreact to noise; too infrequent and you're trading the wrong strategy in the current environment.

I use a simple 3-indicator combo: trend (EMA 100), volatility (ATR), and momentum (ADX). If these three don't agree on the regime, I reduce size by 50% and wait.

The biggest mistake traders make: they develop a strategy for one regime and apply it to all others. A trend follower who keeps shorting range bottoms. A mean reversion trader who keeps fading strong breakouts. The strategy is fine — it's in the wrong regime.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn18-non-stationarity]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn21-three-layer-trading-system]]</li>
    <li>[[gn25-convexity-optionality]]</li>
  </ul>
</div>

## ending questions
what regime is your current market in? is your position sizing and strategy matched to that regime, or are you fighting it?
