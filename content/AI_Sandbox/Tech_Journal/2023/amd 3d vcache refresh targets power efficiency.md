---
title: amd 3d vcache refresh targets power efficiency
tags:
  - tech-journal
  - hardware
  - 2023
  - chips
  - ai
keywords:
  - amd
  - 3dvcache
  - efficiency
  - power
  - div
draft: true
description: AMD refreshed its 3D V-Cache lineup focusing on lower power usage for data centers.
created: 2023-09-07
updated: 2023-09-07
note_id: 230907TJ23
cssclasses:
  - tech-journal
---

# amd 3d vcache refresh targets power efficiency

*see also:* [[Compute Bottlenecks]] · [[Latency Budget]]

AMD’s 2023 refresh of Epyc 3D V-Cache chips focuses on reducing power draw per core while keeping cache-dense designs for generative workloads ([AMD](https://www.amd.com/en/products/cpu/epyc-9004-series)).

## scene cut
The new SKU trims voltage via adaptive boost and pairs with liquid cooling features, making it attractive for inference racks that pay per-watt tariffs.

## signal braid
- The move complements the energy metrics tracked in [[ai workloads raise energy demand data]].
- AMD still competes with Nvidia’s memory-heavy path described in [[nvidia grace hopper systems begin shipping]].
- The focus on efficiency mirrors the sustainability notice from [[google cloud sovereign ai regions]].

## risk surface
- Efficiency gains might slow performance lifts, forcing buyers to choose between speed and power.
- Liquid cooling integration adds infrastructure costs.
- AMD must convince hyperscalers to shift from GPU-focused procurement.

## my take
Reducing compute power is the lever that keeps AI deployments affordable. I now weigh per-core wattage as heavily as FLOPS.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#hardware</li>
        <li>#2023</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[ai workloads raise energy demand data]]</li>
        <li>[[nvidia grace hopper systems begin shipping]]</li>
        <li>[[google cloud sovereign ai regions]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
Will liquid cooling become standard for AI clusters if efficiency is prioritized over raw clocks?

#
