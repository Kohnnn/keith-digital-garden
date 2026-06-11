---
title: "non ergodicity and path dependence why averages lie"
tags:
  - thoughtpieces
  - probability
  - statistics
  - risk
  - philosophy
  - tail-risk
keywords:
  - non-ergodicity
  - path dependence
  - ensemble average
  - time average
  - ruin
  - Kelly
  - ergodicity
draft: false
description: Most financial models assume ergodicity — that ensemble averages and time averages converge. They don't. Understanding non-ergodicity changes everything about sizing, risk, and survival.
created: 2022-03-22
updated: 2022-03-22
note_id: 220322TP18
cssclasses:
  - thoughtpiece
---

# non ergodicity and path dependence why averages lie

An ergodic system is one where averaging across many people at one point in time gives the same result as averaging across many time periods for one person. Coin flips are ergodic. Markets are not.

This seemingly technical distinction has profound implications: most financial advice, most risk models, and most trading strategies implicitly assume ergodicity. They give you the ensemble average and claim it applies to your individual path. It doesn't.

*see also:* [[gn13-non-ergodicity]] · [[gn15-risk-of-ruin]] · [[gn20-expected-value-edge-variance]] · [[gn17-position-sizing]]

## the ensemble trap

Imagine a game: 100 people each bet $100 on a coin flip. Half win (get $200), half lose (get $0). The ensemble average across all players is $100 — breakeven. But the time average for any individual player is different: after one flip you either have $200 or $0. The ensemble average doesn't describe your experience.

Now imagine 10 rounds. If you must bet your entire capital each round, most people will go to zero at some point, even though the ensemble average remains positive. The system is non-ergodic — the average across people doesn't match any individual's experience.

## the ruin problem

Non-ergodicity creates the ruin problem: even if a strategy has positive expected value in the ensemble sense, any individual following it can still go to zero if they hit the wrong sequence.

This is why Kelly sizing exists. Kelly maximizes long-term growth by accounting for non-ergodicity — it sizes bets so that no single loss eliminates you from the game. The key insight: if you go to zero, you stop being part of the ensemble. The survivors create their own statistics.

## path dependence

In non-ergodic systems, the order of outcomes matters. Two traders with the same strategy and the same final P&L can have completely different psychological experiences depending on whether the winning streak came first or last.

Path dependence also means:
- A 50% drawdown requires 100% gain to recover — the path matters
- Trading full Kelly (aggressive) means you'll likely hit a -50% drawdown at some point, even with positive edge
- Backtests that randomize trade order (Monte Carlo) are essential because the actual sequence will differ

## implications for position sizing

If trading were ergodic, you could maximize expected value without worrying about sequence. Since it's not:
- Fixed fractional sizing (risk % per trade) is ergodic-friendly because it accounts for changing account size
- Martingale (doubling after losses) is anti-ergodic — it guarantees eventual ruin
- Full Kelly maximizes growth but accepts 30-50% drawdowns — you must survive those
- Half-Kelly is the standard compromise: 75% of maximum growth with 50% less drawdown risk

## my take

Non-ergodicity is the single most important statistical concept traders don't know. Every time I see someone say "this strategy averages 20% annually" I think: that ensemble average doesn't describe your individual timeline. The question isn't the average return — it's the probability that your specific path survives long enough to realize that average.

I size for the worst path, not the average path. The average path is a fiction. The worst path is preparation.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn20-expected-value-edge-variance]]</li>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
  </ul>
</div>

## ending questions
is your position sizing designed for the average path or the worst path? if the answer isn't "worst path," you haven't accounted for non-ergodicity.
