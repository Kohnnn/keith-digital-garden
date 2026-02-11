---
title: use one big server
tags:
  - tech-journal
  - infrastructure
  - operations
  - architecture
  - 2022
keywords:
  - server
  - simplicity
  - ops
  - scale
  - cost
draft: true
description: An essay argued for scaling up before scaling out.
created: 2022-08-02
updated: 2025-03-08
note_id: 220802TJ01
cssclasses:
  - tech-journal
---

# use one big server

*see also:* [[Latency Budget]] · [[Platform Risk]]

## scene cut
An essay argued that many systems should start with one big server rather than premature distributed complexity ([source](https://specbranch.com/posts/one-big-server/)). The piece reframed scale as a sequencing decision.

## signal braid
- Simplicity can outperform distribution early.
- Ops overhead grows faster than performance needs.
- Cost models favor vertical scaling in many cases.
- The ops angle matches [[Self-Hosting Email Ends]].

## single-line take
Most systems should earn their complexity.

## link hop
This links to [[Self-Hosting Email Ends]] and [[State of HTTP in 2022]] and [[Building a VM Inside ChatGPT]].

## open loop
What metrics should trigger the jump to distributed systems?

#
