---
title: "donchian channels and the turtle system"
tags:
  - general-notes
  - trading
  - trend-following
  - turtles
  - breakout
  - system
keywords:
  - donchian channel
  - turtle trading
  - richard dennis
  - breakout system
  - trend following
draft: false
description: The original Turtle Trading system — Donchian channel breakouts, position sizing, and the discipline that turned 23 novices into legendary traders.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN24
cssclasses:
  - general-note
---

# donchian channels and the turtle system

In 1983, Richard Dennis and Bill Eckhardt ran an experiment: take 23 people with no trading experience, teach them a simple trend-following system, and see if they could trade profitably. The result was $175 million in profits over 5 years.

The system was not complex. It was not secret. It was a set of breakout rules based on Donchian channels, strict risk management, and unwavering discipline.

*see also:* [[gn17-position-sizing]] · [[gn21-three-layer-trading-system]] · [[gn23-game-theory-markets]]

## the system

The Turtle system had two entry strategies:

**System 1 (20-day breakout):** Enter long when price exceeds the 20-day high. Enter short when price breaks below the 20-day low. If the trade works, pyramid once on the next 20-day breakout.

**System 2 (55-day breakout):** Same logic, longer timeframe. Fewer trades, bigger trends.

Add 10-day trailing stop loss and 2% risk per trade position sizing. That's most of the system.

## why it worked

The Turtle system works because it exploits fat tails in trend distributions. Most breakout attempts fail. But the ones that succeed — trends that run for months — produce returns that more than compensate for the losses.

The system is designed for Extremistan. It loses frequently (60-70% of trades are losers) but wins big when it wins. The asymmetry is the entire point.

Dennis understood that most traders cannot execute this system despite knowing the rules. The discipline to take every signal — including the losing ones — and maintain consistent position sizing through drawdowns is the true edge.

## the position sizing

The Turtles used volatility-adjusted position sizing based on ATR (Average True Range). Each position was sized so that a 1 ATR move in the underlying represented 1% of account equity. This meant:
- In low volatility, positions were larger
- In high volatility, positions were smaller
- Risk per trade was constant in dollar terms

This is the precursor to modern risk parity. The Turtles were doing it in the 1980s with calculators and paper charts.

## my take

The Turtle experiment is the most important proof that systematic trading works. Not because their system was brilliant — it was simple. Because the combination of a clear edge, proper sizing, and execution discipline consistently outperforms intuition.

I use a modified version of the Turtle approach in my trend following allocation. The core is the same: Donchian breakouts (I use 20 and 50), ATR-based sizing, and a trailing stop. The modifications I've made: additional regime filters (avoid ranging markets) and a correlation cap across positions.

The hardest part is not the system. It's taking the signal when the last 5 trades were losers and your brain is screaming at you to stop. The Turtle advantage was that their selection process screened for people who could follow rules. Most traders who know the system still fail at this.

The system is not the edge. The discipline to execute the system is the edge.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn21-three-layer-trading-system]]</li>
    <li>[[gn23-game-theory-markets]]</li>
    <li>[[gn22-behavioral-finance-traps]]</li>
  </ul>
</div>

## ending questions
could you follow a system that loses 60% of the time, knowing that the 40% that wins will more than compensate? most people can't.
