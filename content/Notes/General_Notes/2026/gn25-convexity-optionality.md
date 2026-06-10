---
title: "convexity and optionality why asymmetry is the only edge that lasts"
tags:
  - general-notes
  - options
  - convexity
  - asymmetry
  - risk
  - antifragile
keywords:
  - convexity
  - optionality
  - asymmetric payoff
  - antifragile
  - option theory
  - facing risk
draft: false
description: Convexity — having more upside than downside in a bet — is the closest thing to a free lunch in finance. Here's how to build convex positions and portfolios.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN25
cssclasses:
  - general-note
---

# convexity and optionality why asymmetry is the only edge that lasts

The most durable edge in finance is convexity — positions where your upside is structurally larger than your downside. Convex strategies don't need to predict the future. They need to be positioned so that if they're right, they win big, and if they're wrong, they lose small.

This is the science of being wrong gracefully.

*see also:* [[gn19-barbell-strategy]] · [[gn12-extremistan-vs-mediocristan]] · [[gn15-risk-of-ruin]]

## concave vs convex

A **convex** position: limited downside, unlimited upside. Buying a call option is convex. Your maximum loss is the premium paid. Your potential gain is unlimited.

A **concave** position: limited upside, unlimited downside. Selling a naked call is concave. Your maximum gain is the premium received. Your potential loss is unlimited.

Most retail traders run concave strategies without knowing it. They sell options for income, run leveraged ETFs, or carry trades with small positive carry and catastrophic tail risk. These strategies look good on paper until they aren't.

## sources of convexity

**Long options.** The purest convex instrument. You pay a premium for the right, not the obligation, to buy or sell. The payoff is inherently asymmetric.

**Venture capital / startup investing.** You lose 100% on most bets, but the winners return 50-100x. Convex if the portfolio is diversified enough to capture the power law.

**Trend following.** Limited downside (fixed stop loss) with potentially unlimited upside (open-ended trend). Convex when sized correctly.

**Non-linear positions.** Any position whose payoff curve bends positively — meaning small changes produce disproportionately large gains on the upside and small losses on the downside.

## concave traps

The most seductive concave strategies:

- **Short volatility.** You collect premium 95% of the time and blow up 5% of the time. Looks great until it isn't.
- **Carry trades.** Borrowing short, lending long. Positive carry every day until the day it unwinds catastrophically.
- **Highly leveraged bond portfolios.** A 50bp rate move can wipe out years of excess yield.

Every one of these has the same profile: smooth positive returns interrupted by sudden massive losses. The equity curve looks great until it ends permanently.

## my take

I structure my entire portfolio for convexity. The core (cash, index funds) is not convex — it's linear with slight positive drift. But the active portion is explicitly built around asymmetric payoff profiles.

Every position gets a simple test: what's the largest I can lose, and what's the largest I can gain? If the ratio is below 1:3 — if I'm risking $1 to make less than $3 — the position gets rejected regardless of conviction.

The most useful mental model: think of every position as an option. Even if you don't trade options, your positions have option-like properties. A stock you buy has natural convexity to the upside (capped downside at zero, unlimited upside). A short position has natural concavity (limited upside at zero, unlimited downside). Size accordingly.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn19-barbell-strategy]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn17-position-sizing]]</li>
  </ul>
</div>

## ending questions
is your portfolio net convex or net concave? what happens to it in a 3-sigma event?
