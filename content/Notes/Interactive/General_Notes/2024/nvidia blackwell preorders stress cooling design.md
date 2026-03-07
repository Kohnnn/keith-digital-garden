---
title: nvidia blackwell preorders stress cooling design
tags:
  - generalnote
  - ai
  - hardware
  - 2024
keywords:
  - blackwell
  - cooling
  - datacenter
  - rack
  - capex
draft: false
description: blackwell demand is now constrained as much by thermal engineering as by chip allocation.
created: 2024-04-02
updated: 2024-04-02
note_id: 240402GN111
cssclasses:
  - general-note
---

# nvidia blackwell preorders stress cooling design

Blackwell preorders were loud, but the quieter constraint is rack-level thermals and facility retrofits, not just chip availability ([NVIDIA](https://www.nvidia.com/en-us/data-center/blackwell-platform/)). The bottleneck moved from procurement to physical plant readiness.

<div class="inline-ref">
  <span class="inline-note">ref</span>
  <a class="ref-link external" href="https://www.nvidia.com/en-us/data-center/blackwell-platform/" rel="nofollow"><span class="indicator-hook"></span>nvidia.com</a>
  <span class="ref-title">blackwell platform overview</span>
  <span class="ref-meta">2024-03-18</span>
</div>

*see also:* [[h100 supply still favors hyperscalers]] · [[ai workloads raise energy demand data]]

## context plus claim
Air cooling assumptions that worked for older clusters are failing under newer density targets. Operators now face a sequencing problem: power, liquid cooling, then compute.

## signal braid
- Hardware demand remains strong, but deployment lead times widen.
- Cooling retrofits increase total project risk and financing complexity.
- Facilities with prebuilt thermal headroom gain pricing power.

## my take
Compute strategy now starts in facilities engineering. Teams that ignore cooling constraints are planning fiction.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[h100 supply still favors hyperscalers]]</li>
    <li>[[ai workloads raise energy demand data]]</li>
    <li>[[power purchase agreements enter software roadmaps]]</li>
  </ul>
</div>

## ending questions
which retrofit sequence best minimizes downtime when moving from air to liquid cooling at scale?

#
