---
title: "game theory for traders reading the room"
tags:
  - general-notes
  - game-theory
  - strategy
  - psychology
  - cooperation
  - competition
keywords:
  - prisoner's dilemma
  - tit for tat
  - zero sum
  - Nash equilibrium
  - iterated games
  - reputation
  - cooperation
draft: false
description: Game theory concepts applied to trading and markets — when to cooperate, when to compete, and how to read strategic interactions in a zero-sum or positive-sum environment.
created: 2026-02-20
updated: 2026-02-20
note_id: 260220GN41
cssclasses:
  - general-note
---

# game theory for traders reading the room

Game theory studies how decisions are made when outcomes depend on what other people choose. Trading is the ultimate game-theoretic environment: every order you place interacts with orders from millions of other participants, each acting in their own self-interest.

This note extracts the Turtle Wiki's game theory hub into a trader's guide to strategic thinking.

*see also:* [[gn23-game-theory-markets]] · [[gn22-behavioral-finance-traps]] · [[gn12-extremistan-vs-mediocristan]]

## zero-sum vs positive-sum

Most people assume trading is zero-sum — for every winner, there's a loser. This is true for futures, forex, and options (one person's gain is another's loss). But it's not entirely true for equities and bonds, which have underlying value creation.

A stock goes up because the company generates real profits over time. The buyer and seller can both be correct depending on their timeframes. The seller at $100 might be happy to lock in gains, while the buyer at $100 might be even happier when it's $150.

The game theory insight: know whether you're in a zero-sum or positive-sum game, because the strategies differ. In a zero-sum game, someone must be wrong. In a positive-sum game, both can be right if timeframes differ.

## the prisoner's dilemma in markets

The classic prisoner's dilemma: two criminals are interrogated separately. If both stay silent, they both get 1 year. If one confesses and the other stays silent, the confessor goes free and the silent gets 10 years. If both confess, both get 5 years.

In markets, this maps to cooperation vs defection:
- Two large traders could both benefit by not front-running each other (cooperation)
- But each has an incentive to trade first (defection)
- The Nash equilibrium is both defect — both trade early, reducing collective profit

The fix: iterated games. When the same players interact repeatedly, cooperation emerges because defection today is punished by defection tomorrow.

## tit-for-tat: the winning strategy

In Robert Axelrod's famous tournament, the simplest strategy won: Tit-for-Tat — start by cooperating, then do whatever the other player did last turn.

Characteristics of Tit-for-Tat:
- **Nice:** Never defects first
- **Retaliating:** Punishes defection immediately
- **Forgiving:** Returns to cooperation if the other player does
- **Clear:** Easy for other players to understand

In trading, Tit-for-Tat translates to: start by assuming good faith (the move is real), but if the market fakes you out, respond immediately (cut the trade). If it shows genuine follow-through, re-engage.

## one-shot vs iterated games

The type of game changes the optimal strategy:

**One-shot (single interaction):** Defect. There's no future consequence for cheating. This describes some market situations like a one-time insider trade or a pump-and-dump.

**Iterated (repeated interaction):** Cooperate initially, then reciprocate. This describes most professional trading relationships — brokers, counterparties, even your relationship with the market itself. If you chase bad trades (defection), the market punishes you consistently (drawdown).

Key insight: treat your relationship with the market as an iterated game, not a one-shot. The market will remember how you've behaved and respond accordingly — not literally, but through the statistical properties of your trading outcomes.

## reputation as an asset

In iterated games, reputation matters. A trader known for cutting losses quickly and honoring commitments gets better execution, tighter spreads, and more counterparty trust.

Reputation is built through:
- Consistent behavior (predictable responses to market conditions)
- Honoring risk limits (not blowing through stops)
- Taking responsibility for mistakes

The market doesn't have feelings, but it has statistical penalties for bad behavior. The trader who routinely ignores stops and hopes for reversals develops a negative reputation with their own account.

## my take

The most useful game theory insight for my trading: the market is not trying to beat me personally. It's a complex system of millions of individual strategies interacting. My job is not to beat "the market" — it's to find a strategy that has positive expectancy within this game.

I think in terms of iterated games. My 10,000th trade matters more than any single trade. Every trade is one move in a long sequence. This perspective makes short-term losses irrelevant and process everything.

The market doesn't know I exist. Game theory helped me realize that's a feature, not a bug.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn23-game-theory-markets]]</li>
    <li>[[gn22-behavioral-finance-traps]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
    <li>[[gn13-non-ergodicity]]</li>
  </ul>
</div>

## ending questions
are you treating the market as a one-shot or an iterated game? your answer determines whether you optimize for the next trade or for the next 10,000 trades.
