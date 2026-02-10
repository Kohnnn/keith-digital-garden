---
title: “they introduce kernel bugs on purpose”
tags:
  - tech-journal
  - policy
  - 2021
keywords:
  - release
  - tooling
  - stack
  - latency
  - workflow
draft: true
description: “They introduce kernel bugs on purpose” as a signal about broader shifts.
created: 2021-04-21
updated: 2021-04-21
note_id: 210421TJ02
cssclasses:
  - tech-journal
---

# “they introduce kernel bugs on purpose”

“they introduce kernel bugs on purpose” frames a decision surface that keeps repeating across the stack ([source](https://lore.kernel.org/linux-nfs/YH+zwQgBBGUJdiVK@unreal/)). I see it as a reminder that incentives, not features, are doing the heavy lifting. The rest is noise.

## context + claim
“they introduce kernel bugs on purpose” shifts the center of gravity toward a new default. My claim is simple: this is a habit-forming change, not a one-off event. If teams internalize the behavior, the market follows.

## evidence stack
- The visible change is only the surface; the incentive change is the durable part.
- Adoption pressure shows up before the tooling catches up, which creates short-term friction.
- The second-order effects are where I expect real compounding.

## decision boundary
If this lowers operational burden without a quality tradeoff, I treat it as a real shift. If it adds fragility or hidden cost, I treat it as a temporary spike.

## my take
I am leaning cautious: treat the change as real, but do not calcify it until the operational story holds.

<div class="note-micro">
  <span class="inline-note">friction point</span>
  <span class="inline-note">default drift</span>
</div>

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#tech-journal</li>
        <li>#policy</li>
        <li>#2021</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[M1 Pro and the Laptop Reset]]</li>
        <li>[[GitHub Copilot Investigation]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What would make this feel durable instead of episodic?

#
