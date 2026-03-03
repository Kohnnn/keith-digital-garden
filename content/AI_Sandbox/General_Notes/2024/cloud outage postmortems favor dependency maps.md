---
title: cloud outage postmortems favor dependency maps
tags:
  - generalnote
  - cloud
  - reliability
  - 2024
keywords:
  - outage
  - postmortem
  - dependencies
  - reliability
  - cloud
draft: true
description: 2024 postmortems increasingly point to hidden dependencies rather than isolated service failures.
created: 2024-06-03
updated: 2024-06-03
note_id: 240603GN113
cssclasses:
  - general-note
---

# cloud outage postmortems favor dependency maps

Recent cloud incidents keep reinforcing the same lesson: teams understand individual services but underestimate transitive dependencies and shared control planes ([Google SRE](https://sre.google/sre-book/postmortem-culture/)). Outage analysis is shifting from blame to graph topology.

<div class="inline-ref">
  <span class="inline-note">ref</span>
  <a class="ref-link external" href="https://sre.google/sre-book/postmortem-culture/" rel="nofollow"><span class="indicator-hook"></span>sre.google</a>
  <span class="ref-title">postmortem culture and systems thinking</span>
  <span class="ref-meta">2024-05-29</span>
</div>

*see also:* [[aws outage shows redundant design limits]] · [[private ai gateways become default enterprise pattern]]

## context plus claim
Dependency maps are becoming first-class operational assets. Without them, fallback plans fail because teams do not know what is actually coupled.

## signal braid
- Modern outages are increasingly multi-service and cascading.
- Shared auth, policy, and networking layers dominate failure blast radius.
- Teams with precomputed dependency graphs recover faster.

## my take
Reliability engineering is now graph engineering. Static runbooks without live dependency context are obsolete.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[aws outage shows redundant design limits]]</li>
    <li>[[private ai gateways become default enterprise pattern]]</li>
    <li>[[agentic observability stacks become standard]]</li>
  </ul>
</div>

## ending questions
which dependency edge class causes the most expensive surprise during cascading outages?

#
