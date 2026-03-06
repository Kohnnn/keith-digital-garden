---
title: latency targets are now product promises not infra metrics
tags:
  - thoughtpiece
  - ai
  - product
  - 2024
keywords:
  - latency
  - promises
  - product
  - reliability
  - ux
draft: false
description: latency in ai experiences now functions as a direct product promise that shapes user trust and retention.
created: 2024-12-10
updated: 2024-12-10
note_id: 241210TP41
cssclasses:
  - thoughtpiece
---

# latency targets are now product promises not infra metrics

Interactive AI workflows are making latency an explicit user contract; long or volatile responses now feel like broken behavior rather than technical variance ([Google web vitals](https://web.dev/vitals/)).

*see also:* [[latency is becoming cultural not technical]] · [[queue aware batching improves gpu utilization stability]]

## expectation reset
Users compare assistants to real-time interfaces, so perceived delay now influences trust as much as output quality.

## operating consequences
- Product teams set latency SLOs by workflow criticality.
- Routing and cache policy are now UX levers.
- Tail latency failures drive churn in recurring tasks.

## my take
Latency discipline is now part of product truthfulness.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[latency is becoming cultural not technical]]</li>
    <li>[[queue aware batching improves gpu utilization stability]]</li>
    <li>[[prompt cache invalidation strategies reduce tail latency]]</li>
  </ul>
</div>

## ending questions
which user journey should define the primary latency budget for an ai product?

#
