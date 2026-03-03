---
title: survey of carbon aware scheduling for ai workloads
tags:
  - researchdigest
  - ai
  - energy
  - 2024
keywords:
  - carbon
  - scheduling
  - workloads
  - energy
  - datacenters
draft: true
description: carbon aware scheduling studies show meaningful emissions reduction when ai jobs can shift across time and regions.
created: 2024-11-24
updated: 2024-11-24
note_id: 241124RD30
cssclasses:
  - research-digest
---

# survey of carbon aware scheduling for ai workloads

Carbon-aware computing research indicates that flexible batch workloads can reduce emissions intensity by aligning compute windows with cleaner grid intervals ([Google Carbon Intelligent Computing](https://cloud.google.com/sustainability/region-carbon)). AI training and large inference batches are prime candidates.

*see also:* [[power purchase agreements enter software roadmaps]] · [[europe power pricing reshapes data center siting]]

## evidence stack
- Time-shifting non-urgent jobs lowers carbon intensity without hardware changes.
- Regional workload routing amplifies benefits when network constraints permit.
- Savings shrink when strict latency SLAs eliminate scheduling flexibility.

## practical boundary
Carbon-aware routing succeeds only when teams expose workload classes by urgency and maintain visibility into energy mix signals.

## my take
The main barrier is organizational, not technical. Most stacks can schedule cleaner compute, but few product teams classify workload urgency rigorously enough.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[power purchase agreements enter software roadmaps]]</li>
    <li>[[europe power pricing reshapes data center siting]]</li>
    <li>[[data center power futures rise in constrained regions]]</li>
  </ul>
</div>

## ending questions
which workload class should be moved first to maximize emissions reduction with minimal user impact?

#
