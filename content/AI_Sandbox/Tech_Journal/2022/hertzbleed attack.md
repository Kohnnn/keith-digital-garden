---
title: hertzbleed attack
tags:
  - tech-journal
  - security
  - hardware
  - research
  - 2022
keywords:
  - sidechannel
  - cpu
  - security
  - research
  - timing
draft: true
description: Hertzbleed showed timing attacks still matter in modern CPUs.
created: 2022-06-14
updated: 2025-02-06
note_id: 220614TJ01
cssclasses:
  - tech-journal
---

# hertzbleed attack

*see also:* [[Latency Budget]] · [[Platform Risk]]

## scene cut
Hertzbleed demonstrated a timing side-channel that can leak secrets from modern CPUs ([source](https://www.hertzbleed.com/)). It reinforced that performance features can create security tradeoffs.

## signal braid
- Side-channel risk persists in modern chips.
- Performance optimizations can leak data.
- Mitigation often requires ecosystem coordination.
- The hardware risk pairs with [[CPU Branch Prediction Evolution]].

## single-line take
Performance features quietly redefine security boundaries.

## link hop
This links to [[CPU Branch Prediction Evolution]] and [[Deceiving Windows Defender Big Stack Bypass]] and [[CHIPS Act Momentum]].

## open loop
Which hardware optimizations are still unmodeled for security risk?

#
