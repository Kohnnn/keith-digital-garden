---
title: "position sizing the only lever that matters"
tags:
  - general-notes
  - risk-management
  - position-sizing
  - kelly
  - money-management
  - trading
keywords:
  - position sizing
  - kelly criterion
  - risk management
  - volatility adjustment
  - portfolio allocation
draft: false
description: Position sizing is the single most impactful variable in trading performance. This note covers Kelly, fractional Kelly, volatility-adjusted sizing, and why size kills more accounts than bad entries.
created: 2026-06-09
updated: 2026-06-09
note_id: 260609GN17
cssclasses:
  - general-note
---

# position sizing the only lever that matters

The entry signal gets all the attention. The exit logic gets the technical analysis. But position sizing — how much you risk on each trade — is the single variable that determines whether you survive long enough for your edge to matter.

I have never met a trader who blew up because they had good entries and bad position sizing. I have met dozens who blew up because they had great entries and terrible sizing.

*see also:* [[gn15-risk-of-ruin]] · [[gn13-non-ergodicity]] · [[gn16-multiple-testing-problem]]

## why size dominates returns

The math is straightforward. Your total return equals:
- (Average win size × win rate × position size) − (Average loss size × loss rate × position size)

Position size multiplies both sides of the equation. If you double your size, you double your gains and your losses. The ratio stays the same but the variance explodes.

The issue is that losses compound asymmetrically (the 50% loss / 100% gain problem). Variance destroys compound growth even when the arithmetic EV is unchanged.

## three sizing frameworks

**Fixed fractional.** Risk a fixed percentage of capital on each trade. 1% per trade is the standard starting point. Simple, robust, but ignores differences in trade quality.

**Kelly criterion.** Size bets proportional to your edge divided by your odds. Maximizes long-term growth. Sensitive to estimation error — if you overestimate your edge by 2x, Kelly can destroy you.

**Volatility-adjusted.** Size inversely proportional to current volatility (measured by ATR or standard deviation). This is what most professionals use. During low volatility, you size up. During high volatility, you size down. The risk per trade stays constant in dollar terms.

## the hidden cost of sizing mistakes

Over-sizing by 2x does not double your returns. It quadruples your variance, increases drawdown by 4x, and increases risk of ruin exponentially. The relationship between size and risk is not linear — it is exponential in the tail.

Under-sizing by 50% reduces returns by 25% but reduces risk of ruin by orders of magnitude. This is the best trade in finance: giving up a quarter of your potential return for near-certain survival.

## my take

I use a hybrid approach. Every position has a base risk of 0.5% of capital. I adjust up (to 1%) when conviction is high and market conditions align. I adjust down (to 0.25%) during high volatility or when the trade setup is marginal.

The rule I never break: *never exceed 2% risk on a single position, ever.* Not for the best setup of the year, not when I'm feeling invincible, not when I have inside information. 2% is the absolute ceiling.

Because I know: the trade that breaks the rule will be the one that hits the black swan.

The multipliers:
- 0.5% base: standard position
- 1.0% high conviction: only with aligned regime confirmation
- 0.25% low conviction: testing, learning, or questionable setup
- 0%: no conviction — sit out

Most of my edge comes not from picking the right trades, but from being alive to take the next one.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn15-risk-of-ruin]]</li>
    <li>[[gn13-non-ergodicity]]</li>
    <li>[[gn16-multiple-testing-problem]]</li>
    <li>[[gn12-extremistan-vs-mediocristan]]</li>
  </ul>
</div>

## ending questions
what was your largest position as a percentage of total capital, and what was the outcome? would you make the same bet again?
