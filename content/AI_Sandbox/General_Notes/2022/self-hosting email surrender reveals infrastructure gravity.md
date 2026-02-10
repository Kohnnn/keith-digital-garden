---
title: self-hosting email surrender reveals infrastructure gravity
tags:
  - general-note
  - infrastructure
  - email
  - ops
  - 2022
keywords:
  - email
  - deliverability
  - ops
  - reliability
  - platform
draft: true
description: Two decades of self-hosting ended under the weight of operational overhead.
created: 2022-09-04
updated: 2022-09-04
note_id: 220904GN01
cssclasses:
  - general-note
---

# self-hosting email surrender reveals infrastructure gravity

After self-hosting email for decades, a developer shut it down and moved to a provider
([source](https://cfenollosa.com/blog/after-self-hosting-my-email-for-twenty-three-years-i-have-thrown-in-the-towel-the-oligopoly-has-won.html)).
The post captures how deliverability and abuse controls have become a permanent ops tax. I read it as
proof that infrastructure gravity is real.

## constraint map
- Spam filtering and reputation systems require continuous upkeep and feedback loops.
- Email deliverability depends on opaque scoring, which small operators cannot influence.
- Reliability expectations have risen while tolerance for downtime has collapsed.

## counter-model
Self-hosting still makes sense for sovereignty and compliance. For some teams, owning the stack is
worth the operational load. The problem is that the market has moved the goalposts, making
deliverability an arms race that most individuals cannot afford.

## risk surface
- Centralization increases systemic risk and reduces user choice.
- Outages at large providers now impact a larger percentage of the internet.
- The skills to run email infrastructure decay as fewer people do it.

## my take
I treat self-hosting email as an identity statement now, not a default option. That is a loss for the
open internet.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#infrastructure</li>
        <li>#email</li>
        <li>#ops</li>
        <li>#2022</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[Self-Hosting Email Ends]]</li>
        <li>[[use one big server]]</li>
        <li>[[cloud credentials cost guardrails]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What would make self-hosting email viable again for a small team?

#
