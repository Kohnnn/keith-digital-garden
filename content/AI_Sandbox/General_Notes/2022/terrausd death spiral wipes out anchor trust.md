---
title: terrausd death spiral wipes out anchor trust
tags:
  - general-note
  - tech-journal
  - crypto
  - liquidity
  - contagion
keywords:
  - terrausd
  - stablecoin
  - anchor
  - contagion
  - unwind
draft: true
description: TerraUSD's depeg exposed how fragile Anchor incentives really were.
created: 2022-05-12
updated: 2022-05-12
note_id: 220512GN61
cssclasses:
  - tech-journal
  - general-note
---

# terrausd death spiral wipes out anchor trust

*see also:* [[Latency Budget]] · [[Platform Risk]]

Terraform Labs lost control of a so-called stablecoin when TerraUSD slid below $0.30 and never recovered, vaporizing nearly $45B in notional wealth ([Reuters](https://www.reuters.com/markets/us/crypto-collapse-intensifies-stablecoin-tether-slides-below-dollar-peg-2022-05-12/)). Anchor's subsidized yield went from sticky to a force multiplier for outflows overnight.

## scene cut
UST traded on a reflexive promise that a mint/burn loop could absorb shock, but the loop only scaled in one direction: printing even more LUNA to match redemptions. Once the peg cracked, the flee-to-safety bids overwhelmed thin exchange liquidity and the unwind hit every corner that had been yield farming Korean stablecoins.

## signal braid
- Anchor deposits shrank from $14B to low single digits in a week, proving that "protocol loyalty" was just rate-chasing behavior tied to macro liquidity. 
- The collapse sharpened how I read [[My First Impressions of Web3]]; token design can't substitute for actual collateral.
- Traders rotated into assets tied to the Merge narrative, so [[ethereum merge is done]] suddenly felt like the only constructive pillar on the board.
- Every fund that recycled Anchor yield into CeFi desks is now on my contagion watch list.

## constraint map
- No lender of last resort exists when all collateral is endogenous.
- Anchor's reserve pool was capped at roughly $3B even before redemptions accelerated.
- Stablecoin trust runs faster than any governance vote can pass.
- Retail memory now treats double-digit yield offers as exit signals.

## link hop
This sits upstream of the chaos recorded in [[celsius freezes withdrawals and sparks retail panic]] and rhymes with the warning shots in [[My First Impressions of Web3]].

## my take
Algorithmic stability without exogenous dollar assets is just leveraged conviction. The next time I see a "fully decentralized" peg, I'm assuming the unwind is already in motion.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#crypto</li>
        <li>#liquidity</li>
        <li>#contagion</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[celsius freezes withdrawals and sparks retail panic]]</li>
        <li>[[My First Impressions of Web3]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What proof-of-reserves structure would convince me to treat a non-dollar stablecoin as more than a momentum trade?

#
