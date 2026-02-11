---
title: self hosting email ends
tags:
  - tech-journal
  - infrastructure
  - email
  - ops
  - 2022
keywords:
  - email
  - ops
  - reliability
  - vendor
  - scale
draft: true
description: A long-time self-host gave up, signaling ops gravity.
created: 2022-09-04
updated: 2025-05-06
note_id: 220904TJ01
cssclasses:
  - tech-journal
---

# self hosting email ends

*see also:* [[LLMs]] · [[Model Behavior]]

<div class="keyword-row">
  <span class="inline-keyword">email</span>
  <span class="inline-keyword">ops</span>
  <span class="inline-keyword">reliability</span>
  <span class="inline-keyword">vendor</span>
  <span class="inline-keyword">scale</span>
</div>

After self-hosting email for decades, the author decided to stop and move to a provider. The core reason was operational burden and the shrinking viability of going it alone.

I read it as a warning about infrastructure gravity. <span class="inline-note">Reliability is expensive when you are the only on-call</span>.

> [!note] Core claim
> The economics of self-hosting critical infra are getting harder to justify.

> [!question] Reflective question
> Which systems are still worth running yourself?

## signals
- Ops burden pushes even experts to managed services.
- Reliability expectations keep rising.
- Email is a hostile surface for solo admins.
- Vendor lock-in becomes a trade for uptime.

## my take
This is less about email and more about modern ops realities. Small teams are forced to specialize or outsource, and that changes independence assumptions.

<ul class="brain-dump">
  <li><strong>Cost:</strong> Reliability is a hidden tax.</li>
  <li><strong>Trade:</strong> Control is swapped for uptime.</li>
  <li><strong>Signal:</strong> Infrastructure is consolidating.</li>
  <li><strong>Ops:</strong> Burnout is a technical risk factor.</li>
</ul>

## sources
> [!ref] Blog - After self-hosting my email for twenty-three years
> https://cfenollosa.com/blog/after-self-hosting-my-email-for-twenty-three-years-i-have-thrown-in-the-towel-the-oligopoly-has-won.html
> Why it matters: First-person account of ops burden and decision drivers.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#infrastructure</li>
        <li>#email</li>
        <li>#ops</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[Exchange Server Hacks]]</li>
        <li>[[Log4Shell and the Ops Tax]]</li>
      </ul>
    </li>
  </ul>
</div>

# self hosting email ends