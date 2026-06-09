---
title: "edge decay why strategies die"
tags:
  - edge-decay
  - general-notes
  - trading
  - strategy
  - regime-change
  - adaptation
keywords:
  - edge decay
  - strategy lifecycle
  - alpha decay
  - market efficiency
  - adaptation
draft: false
description: Every edge has a shelf life. This note breaks down why strategies stop working — from crowding and market efficiency to regime shifts and arbitrage closure.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN11
cssclasses:
  - general-note
---

# edge decay why strategies die

Every trader eventually faces it: the strategy that printed money for six months stops working. The edge didn't disappear — it decayed. Understanding *why* edges decay is more important than finding new ones, because it tells you when to adapt and when to hold.

*see also:* [[gn09-second-order-thinking]] · [[gn10-inversion]] · [[gn08-mental-models-for-better-thinking]]

## the lifecycle of an edge

Every exploitable pattern in markets follows a predictable arc:

1. **Discovery** — someone notices a statistical anomaly or structural inefficiency
2. **Exploitation** — early adopters capture the excess return
3. **Crowding** — the pattern gets published, backtested, and traded by more participants
4. **Decay** — the edge compresses as arbitrageurs compete it away
5. **Death** — the pattern no longer produces statistically significant returns

The timeline varies. A simple calendar effect might die in months. A structural edge tied to regulation or institutional plumbing can last years. The fastest decay happens in retail-accessible markets with low barriers to entry.

## why edges decay

**crowding.** The most obvious mechanism. When enough traders use the same signal, the trade becomes expensive to enter. Slippage increases. The fill quality deteriorates. The edge that existed at small scale disappears at scale.

**market efficiency.** Markets are discovery machines. Every profitable pattern that gets published teaches the market to price it in. The market becomes more efficient specifically *in the dimension that was being exploited*.

**regime change.** Markets are non-stationary. The statistical relationships that held in a low-volatility, low-rate environment break when the macro regime shifts. The edge didn't die — the environment it depended on stopped existing.

**arbitrage closure.** This is the most brutal form. When the edge is pure arbitrage (price discrepancy between two related instruments), the act of trading it closes the gap. The more you trade it, the faster it dies. Paradoxically, the edge is strongest when it's hardest to execute at scale.

## the signal that kills itself

Some edges are self-referential. A pattern that works because "enough traders believe it works" can collapse when belief shifts. Technical analysis levels are the classic example — they work until the level breaks, then they reverse their role. The same pattern becomes its own graveyard.

## detecting decay early

By the time your equity curve shows the problem, the edge has been dead for weeks. Leading indicators:

- **Fill quality drops** — more slippage on entries and exits
- **Win rate stays but R:R compresses** — winners get smaller
- **More false signals** — the pattern triggers but doesn't resolve
- **Correlation with other strategies increases** — everyone is trading the same thing
- **Strategy starts losing in its best environments** — the edge was regime-dependent

## my take

Most traders spend their energy *finding* edges when they should be *monitoring* edge decay. The question isn't "does this strategy work?" — it's "is this strategy still working?" The difference is continuous measurement versus one-time validation.

I keep a simple decay log for every strategy: monthly Sharpe ratio, slippage trend, and correlation to the nearest competing strategy. When all three degrade simultaneously, I cut position size by half before I understand why. By the time I understand, it's usually too late to act.

The best traders I know don't look for permanent edges. They look for edges that are currently alive and measure their half-life. Strategies are not assets — they are options with expiration dates.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn09-second-order-thinking]]</li>
    <li>[[gn10-inversion]]</li>
    <li>[[gn08-mental-models-for-better-thinking]]</li>
  </ul>
</div>

## ending questions
what is the half-life of your best edge right now? how would you know when it's dead?
