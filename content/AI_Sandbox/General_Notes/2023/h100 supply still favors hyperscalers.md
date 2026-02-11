---
title: h100 supply still favors hyperscalers
tags:
  - general-note
  - hardware
  - ai
  - 2023
  - chips
keywords:
  - h100
  - hyperscaler
  - gpu
  - supply
  - nvidia
draft: true
description: H100 shipments remain concentrated at hyperscalers while startups wait for allocations.
created: 2023-11-30
updated: 2023-11-30
note_id: 231130GN24
cssclasses:
  - general-note
---

# h100 supply still favors hyperscalers

*see also:* [[Compute Bottlenecks]] · [[Latency Budget]]

Nvidia still prioritizes cloud providers for H100 delivery, leaving startups and research labs on multi-month waits even as demand for inference clusters surges across industries ([Reuters](https://www.reuters.com/technology/nvidia-h100-gpu-price-2023-05-22/)).

## scene cut
The latest earnings call reiterated that A100/H100 chip deliveries are gated by large orders; smaller buyers now queue behind hyperscalers with contractual volume commitments.

## signal braid
- This mirrors the supply squeeze detailed in [[h100 supply chase splits hpc buyers]] and feels connected to the chip supply pause tracked in [[chip inventory rebuild keeps fabs patient]].
- The scarcity reinforces the compute prioritization strategy that clouds use to lock in AI workloads allocated through Bedrock and SageMaker - see [[amazon bedrock enters general availability]].
- Startups now map their roadmaps to whoever has wafer reservations, not their product cycle.

## risk surface
- Startups that can’t access H100 may overspend on legacy hardware, creating a second wave of technical debt.
- Hyperscalers may hoard capacity, leaving governments and universities underpowered for strategic workloads.
- The supply bottleneck invites pressure for export controls, similar to the geopolitics in [[nvidia export limits reshape ai hardware race]].

## my take
I now assume every talk about democratizing compute budgets includes a hidden footnote: "unless you are an enterprise-scale customer." Access is still a privilege.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#hardware</li>
        <li>#ai</li>
        <li>#2023</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[h100 supply chase splits hpc buyers]]</li>
        <li>[[chip inventory rebuild keeps fabs patient]]</li>
        <li>[[amazon bedrock enters general availability]]</li>
        <li>[[nvidia export limits reshape ai hardware race]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What signal would convince Nvidia to open a dedicated queue for research labs outside the hyperscaler pool?

#
