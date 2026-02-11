---
title: nvidia grace hopper systems begin shipping
tags:
  - tech-journal
  - hardware
  - ai
  - 2023
  - chips
keywords:
  - gracehopper
  - gh200
  - supply
  - hpc
  - grace
draft: true
description: Nvidia started delivering Grace Hopper superchips, fusing Arm CPUs with Hopper GPUs for memory-heavy AI work.
created: 2023-09-19
updated: 2023-09-19
note_id: 230919TJ06
cssclasses:
  - tech-journal
---

# nvidia grace hopper systems begin shipping

*see also:* [[Compute Bottlenecks]] · [[Latency Budget]]

Nvidia confirmed GH200 systems are shipping to early customers, finally putting the Grace CPU + Hopper GPU combo into racks for mixture-of-expert workloads and giant vector databases ([Nvidia](https://blogs.nvidia.com/blog/2023/09/19/grace-hopper-announcement/)). The launch shows that memory bandwidth, not just FLOPS, drives AI differentiation.

## scene cut
Partners like Dell and Supermicro announced baseboards with NVLink-C2C, linking Grace CPUs directly to Hopper GPUs with 900 GB/s of bandwidth and up to 480 GB of LPDDR5X memory per CPU. It’s a datacenter-native sandwich.

## signal braid
- GH200 hits the same scarcity wall as H100; see [[h100 supply chase splits hpc buyers]] for procurement headaches.
- Cloud platforms gain an alternative to x86 hosts, echoing what [[apple silicon m1 shakes pc industry]] did for laptops.
- Nvidia is clearly chasing inference workloads that hate PCIe bottlenecks; this helps vector DBs and retrieval augmented generation stay hot.

## risk surface
- Customers must rewrite low-level kernels to exploit shared memory, which slows adoption.
- Any firmware bug now spans CPU and GPU, raising blast radius.
- Supply remains limited; the chip still depends on TSMC’s advanced packaging line.

## my take
I’ve wanted a way to collapse CPU-GPU data tax; Grace Hopper is the cleanest version so far, and I expect hyperscalers to hoard them.

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
        <li>[[apple silicon m1 shakes pc industry]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
Which workloads will justify a Grace-first architecture before the rest of the market retools HPC code?

#
