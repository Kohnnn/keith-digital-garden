---
title: "defi yield farming tokenomics and on-chain valuation"
tags:
  - general-notes
  - crypto
  - defi
  - yield
  - tokenomics
  - on-chain
keywords:
  - defi
  - yield farming
  - TVL
  - tokenomics
  - on-chain analysis
  - stablecoins
draft: false
description: How to evaluate DeFi protocols, read tokenomics, distinguish real yield from inflation, and use on-chain data to separate signal from narrative.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610GN30
cssclasses:
  - general-note
---

# defi yield farming tokenomics and on-chain valuation

Crypto creates more data than any market in history. Every transaction is public. Every wallet is traceable. Yet most participants trade based on narrative. Here's how to actually read on-chain data.

## real yield vs inflationary yield

Most DeFi "yields" are not real. They're token inflation distributed to early depositors. Real yield comes from user fees — actual dollars paid by actual users for actual services.

**Test:** Does the protocol generate revenue from fees (swap fees, lending interest, liquidation penalties)? If yes, check fee/revenue ratio. If fees are < 20% of distributed rewards, the yield is mostly inflation.

## TVL is vanity

Total Value Locked is the most overused metric. High TVL doesn't mean high revenue. A protocol can attract $1B in deposits and earn $0 if there's no borrowing demand. Look at **revenue / TVL** ratio. Anything below 2% annualized means the protocol is subsidizing deposits.

## tokenomics health signals

- **Fee capture:** Does some fee flow back to token holders? If no, the token has no fundamental value driver.
- **Unlock schedule:** Is there a cliff coming? Token unlocks create predictable sell pressure.
- **Emissions rate:** How fast is supply inflating? High inflation > 50% APR in emissions means the token is structurally diluting.
- **Real users:** Unique active wallets paying gas for non-spam transactions. Growing baseline = growing network.

## on-chain metrics that matter

- **MVRV:** Market value vs realized value. > 3 = overvalued, < 1 = undervalued (historically)
- **NUPL:** Net unrealized profit/loss. Maps to market cycle phases
- **Exchange flows:** Net BTC flowing to/from exchanges. Outflows = accumulation, inflows = potential sell pressure
- **Active addresses:** Trending up or down over 90 days

## stablecoin plumbing

Stablecoins are the payment rail of crypto. Monitoring supply growth of USDT/USDC/DAI tells you whether real dollars are entering the ecosystem. Growing stablecoin supply with stagnant BTC = capital waiting on sidelines. Shrinking supply = people leaving.

*see also:* [[gn26-blockchain-trustless]] · [[net-liquidity-macro-indicator]] · [[gn19-barbell-strategy]]

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn26-blockchain-trustless]]</li>
    <li>[[net-liquidity-macro-indicator]]</li>
    <li>[[gn19-barbell-strategy]]</li>
    <li>[[gn25-convexity-optionality]]</li>
  </ul>
</div>
