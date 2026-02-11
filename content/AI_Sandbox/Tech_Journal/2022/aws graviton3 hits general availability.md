---
title: aws graviton3 hits general availability
tags:
  - tech-journal
  - cloud
  - hardware
  - 2022
  - ai
keywords:
  - graviton3
  - aws
  - arm
  - ec2
  - div
draft: true
description: AWS opened Graviton3 instances to all customers, promising 25% better perf-per-watt than Graviton2.
created: 2022-05-23
updated: 2022-05-23
note_id: 220523TJ09
cssclasses:
  - tech-journal
---

# aws graviton3 hits general availability

*see also:* [[LLMs]] · [[Model Behavior]]

Amazon announced that C7g and other Graviton3-powered instances are generally available, extending its homegrown Arm CPU strategy and widening customer adoption ([AWS News](https://aws.amazon.com/blogs/aws/new-c7g-graviton3-instances/)).

## scene cut
Graviton3 brings DDR5, hardware crypto acceleration, and 2x floating point throughput. AWS priced the instances below comparable Intel nodes, making them attractive for containers and serverless backends.

## signal braid
- Graviton’s rise mirrors Apple’s silicon push in [[apple silicon m1 shakes pc industry]]; Arm economics now reach data centers.
- The perf-per-watt story fits the energy narratives I track in [[chip inventory rebuild keeps fabs patient]].
- Customers now expect managed services (Lambda, Aurora) to expose Graviton options early.

## risk surface
- Porting x86 workloads to Arm still costs time; heterogeneous fleets complicate operations.
- AWS has to support two instruction sets, raising maintenance overhead.
- If Arm licensing changes, Amazon loses pricing certainty.

## my take
Graviton3 proves AWS can design chips at the scale of a silicon vendor and use pricing to nudge adoption faster than competitors.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#cloud</li>
        <li>#hardware</li>
        <li>#2022</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[apple silicon m1 shakes pc industry]]</li>
        <li>[[chip inventory rebuild keeps fabs patient]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
How quickly will AWS shift managed services to Graviton-first defaults now that GA is live?

#
