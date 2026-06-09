---
title: "expected value is not enough why edge needs variance control"
tags:
  - general-notes
  - probability
  - expected-value
  - edge
  - trading
  - risk
keywords:
  - expected value
  - EV
  - edge analysis
  - variance
  - risk adjusted returns
  - trading strategy
draft: false
description: EV positive is necessary but not sufficient. A strategy with positive EV can still ruin you if variance and path dependence aren't controlled. This note explains when EV lies.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN20
cssclasses:
  - general-note
---

# expected value is not enough why edge needs variance control

Most traders stop at "is the expected value positive?" That is the first question. It is not the last — and it may not even be the most important one. A strategy with positive EV can still destroy you if the variance is high enough and the tail risk is left unmanaged.

*see also:* [[gn13-non-ergodicity]] · [[gn15-risk-of-ruin]] · [[gn17-position-sizing]] · [[gn12-extremistan-vs-mediocristan]]

## when EV lies

Consider three strategies, all with the same positive EV of $10 per trade:

| Strategy | Trade structure | Max drawdown | Ruin risk |
|----------|----------------|-------------|-----------|
| A | 60% win $20 / 40% lose $5 | 15% | ~0% |
| B | 30% win $50 / 70% lose $10 | 35% | 3% |
| C | 5% win $300 / 95% lose $5 | 60% | 18% |

All have $10 EV. But strategy C will kill you if you hit the wrong sequence early, and strategy B is uncomfortable but survivable.

EV ignores sequence. EV ignores path. EV ignores the difference between surviving and blowing up.

## edge is more than EV

The Turtle Trading wiki distinguishes between edge and EV. Edge is the structural advantage — *why* you have positive expected value. EV is the mathematical expression of that edge.

Edge matters because it determines whether the EV is likely to persist. A statistical anomaly found by data mining has EV in-sample but no structural edge. A risk premium that compensates you for providing liquidity has both edge and EV — and the EV is more likely to survive out of sample.

## the three dimensions of edge

**Structural edge.** You are providing a service the market needs — liquidity, insurance, capital, execution. The edge exists because of market structure, not pattern recognition. Most durable.

**Behavioral edge.** You are exploiting systematic errors in other participants' decision-making. Works as long as human psychology doesn't change. Durable but crowds over time.

**Statistical edge.** You found a pattern in historical data. No structural rationale. Least durable — likely to be noise amplified by multiple testing.

## my take

I evaluate strategies in order: structural rationale first, then backtest evidence, then forward test. A strategy with strong structural rationale and mediocre backtest gets a chance. A strategy with perfect backtest and no structural rationale gets ignored.

EV positive is the admission ticket. But it does not guarantee entry, and it certainly does not guarantee survival. The difference between a good trader and a lucky one is knowing which EV is real and which is noise.

I've also stopped optimizing for EV alone. I optimize for *survivable EV* — positive expected returns that I can actually collect given my drawdown tolerance and account size. A strategy that produces 30% returns with 40% drawdown is worse for me than one that produces 15% with 10% drawdown, even though the raw EV is higher.

The best edge in the world is worthless if you lose it on the wrong sequence.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn16-multiple-testing-problem]]</li>
  </ul>
</div>

## ending questions
does your strategy have structural rationale, or just a backtest that looks good? how would you know if the edge is real?
