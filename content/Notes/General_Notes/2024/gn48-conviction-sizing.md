---
title: "conviction and sizing betting what you believe in"
tags:
  - general-notes
  - sizing
  - conviction
  - risk-management
  - psychology
keywords:
  - conviction
  - position size
  - Kelly formula
  - confidence level
  - all-in
  - risk per trade
draft: false
description: How to size positions based on confidence — matching position size to edge strength, using Kelly as a framework, and knowing when you're underconfident vs overconfident.
created: 2024-03-30
updated: 2024-03-30
note_id: 240330GN48
cssclasses:
  - general-note
---

# conviction and sizing betting what you believe in

Position size should reflect your conviction. A setup you're 70% sure about deserves a different size than one you're 55% sure about. Yet most traders use the same size for everything or scale by dollar risk rather than by confidence.

Sizing by conviction aligns your capital allocation with your actual belief — a direct expression of what you think will happen.

*see also:* [[gn17-position-sizing]] · [[gn20-expected-value-edge-variance]] · [[gn15-risk-of-ruin]] · [[gn13-non-ergodicity]]

## the conviction gradient

On a scale of 0-100%:
- 50-55%: barely an edge, barely worth trading (minimum size)
- 55-60%: thin edge, standard size
- 60-70%: decent edge, can increase size
- 70+%: strong conviction, maximum size

Don't think of these as "probability of win on this trade." Think of them as "confidence in the setup's correctness given the regime."

A breakout setup during a trending market might be 65% confidence. The same setup during a transitioning market might be 45% confidence. Your size should reflect that difference.

## conviction vs outcome

The trap: a high-conviction trade that loses. This happens. Conviction is not prediction — it's assessment of edge strength.

High conviction + loss = your analysis was right but randomness went against you. Keep the size.

High conviction + win = your analysis was right and randomness was favorable. Keep the size.

Low conviction + win = luck. Reduce size. Don't assume you're better than you think.

Low conviction + loss = you were right to be cautious. Reduce size further and recalibrate.

Track conviction on each trade. Over time, your conviction calibration will improve — you'll get better at estimating when you actually have an edge.

## kelly formula for sizing

Kelly's formula optimizes position size to maximize long-term growth:

f* = (EV / Payoff) = (Win% × AvgWin - Loss% × AvgLoss) / AvgWin

This gives you the fraction of capital to bet. With EV = 0.1 and AvgWin = 2, Kelly says to risk 5% of account.

The problem: Kelly assumes perfect edge estimation. In reality, your edge estimate has error. A 1% error in edge estimate creates a 10-20% error in Kelly sizing. You're overconfident about your edge, so Kelly tells you to bet too much.

Solution: Use half-Kelly (2.5% instead of 5%). This gives 75% of maximum growth with 50% less drawdown risk.

## the conviction anchor

Instead of calculating precise Kelly, use a simpler framework:

- My base risk per trade is 1% of account (standard position size)
- On 65-70% confidence setups, I use 1×
- On 70%+ confidence setups, I use 1.5×
- On 55-60% confidence setups, I use 0.5×
- On <55% setups, I don't trade

This is easier to implement than calculating Kelly and has the same effect: size scales with conviction.

## conviction calibration

Over 100 trades, you can check if your conviction is calibrated:
- Do your 65% confidence trades actually win ~65% of the time?
- Do your 70% confidence trades actually win ~70%?

If your 70% trades only win 55%, you're overconfident. Your conviction assessment is biased high. Reduce your conviction estimates by 5-10%.

If your 50% trades win 60%, you're underconfident. You're underestimating your edge.

## the all-in trap

Never go all-in on a single trade. Ever.

Even with 90% conviction and a +10:1 payoff, a single loss can't destroy you. When you're all-in and you lose, you're out. The next edge that comes along, you can't take it.

Position size should always leave you with capital to trade after a loss. The money in the market is for the edge you have today. The money on the sidelines is for the edge you'll have tomorrow.

## conviction in pairs

If you have conviction in both direction AND structure, that's stronger than conviction in direction alone:
- "BTC will go up" = conviction in direction (maybe 55%)
- "BTC will break above $65k and test $70k" = conviction in direction AND structure (maybe 65%)

The second deserves larger size because you're betting on a more specific, testable hypothesis. If it breaks $65k, you know you were right about structure. If it doesn't, you know to exit.

## my take

I track conviction on a spreadsheet alongside each trade:
- Entry conviction (1-100)
- Position size relative to base
- Actual outcome
- Calibration check (did this conviction level actually perform?)

Every quarter I review: are my 70% conviction trades winning 70% of the time? If not, I'm either overconfident or underestimating edge. I recalibrate accordingly.

The most important lesson: conviction is honest. You can't fake it. Your real conviction shows up in your position size. If you're sizing full on a setup you're only 55% sure about, you're lying to yourself.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn17-position-sizing]]</li>
    <li>[[gn20-expected-value-edge-variance]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn44-discipline-execution-system]]</li>
  </ul>
</div>

## ending questions
what's your actual conviction on this trade? if your position size doesn't match your answer, you're not being honest with yourself.
