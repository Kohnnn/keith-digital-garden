---
title: "proptrading and the negative edge asymmetry firms face"
tags:
  - market-news
  - prop-trading
  - crypto
  - funding
  - risk
  - strategy
keywords:
  - prop firm
  - funded trading
  - negative EV
  - evaluation
  - trading challenge
draft: false
description: Most prop firm challenges have negative expected value for the trader. Understanding the math behind the evaluation model is essential before you pay for a challenge.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610MN07
cssclasses:
  - market-news
---

# proptrading and the negative edge asymmetry firms face

The prop firm model — pay a fee, pass an evaluation, get funded — sounds like a dream. Trade with someone else's capital, keep most of the profits, and your downside is limited to the challenge fee.

The math is not in your favor. Most prop firm challenges have negative expected value for the trader. The firms are profitable because the rules are structured asymmetrically — the trader bears the risk of variance while the firm captures the upside.

*see also:* [[gn13-non-ergodicity]] · [[gn15-risk-of-ruin]] · [[gn20-expected-value-edge-variance]]

## the structure

A typical evaluation: pay $500 for a $100K account, pass profit target of 10% ($10K), with a maximum drawdown of 8%. You have unlimited time but the evaluation resets if you hit the drawdown limit.

If you pass, you get a funded account where you keep 80-90% of profits up to a certain threshold.

## the negative EV

The problem: your variance is your enemy. Even if you have a positive edge, the probability of hitting the drawdown limit before the profit target is significant — especially with the restrictive rules (consistency targets, trading day minimums, payout caps).

Monte Carlo simulation of a strategy with Sharpe 0.8 on a $100K evaluation with 8% max drawdown and 10% target: pass rate is roughly 25-30%. The expected value of the $500 fee is negative for most traders.

## who wins

The firms win because:
- The pass rate is low enough that most fees are pure profit
- Funded traders who eventually blow up lose the firm nothing (no recourse)
- The best traders subsidize the losses of the many who fail

The traders who win are the ones with high Sharpe strategies, low variance, and the discipline to treat the evaluation as a risk management exercise — not a profit maximization one.

## my take

I don't have a strong opinion on prop firms as an industry. Some are legitimate businesses providing capital to good traders. Others are fee-collection machines disguised as funding.

What I know: if you're going to attempt a prop firm challenge, treat it as a variance minimization problem. Your goal is not to make money on the evaluation. Your goal is to not hit the drawdown limit while slowly grinding toward the profit target. The traders who blast through the evaluation with high risk are the ones who fail — and the firms count on this.

If you have a genuine edge and low variance, prop firms can be a good deal. If you don't, the fees are a tax on hope.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn20-expected-value-edge-variance]]</li>
    <li>[[gn17-position-sizing]]</li>
  </ul>
</div>

## ending questions
does the prop firm you're considering have a positive EV for the trader at your skill level, or are you paying tuition?
