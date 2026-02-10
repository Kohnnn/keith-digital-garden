---
title: element suspended from play store exposes platform choke points
tags:
  - general-note
  - platforms
  - security
  - messaging
  - 2021
keywords:
  - platforms
  - gatekeeping
  - distribution
  - messaging
  - risk
draft: true
description: A temporary suspension highlighted the fragility of app store dependence.
created: 2021-01-29
updated: 2021-01-29
note_id: 210129GN01
cssclasses:
  - general-note
---

# element suspended from play store exposes platform choke points

Element reported being suspended from the Google Play Store without warning, cutting off Android
distribution until the issue was resolved ([Element](https://twitter.com/element_hq/status/1355290296947499013)).
The incident shows how a single gatekeeper can interrupt critical communications tooling. I read it
as a reminder that distribution risk is a security risk.

## evidence stack
- A single policy decision removed a key distribution channel, which immediately affected users.
- The appeal process is opaque, so the remediation path is uncertain.
- Messaging apps are infrastructure for communities; distribution disruption is not a trivial outage.

## risk surface
- Enterprises and communities lose continuity when app store access is interrupted.
- Developers shift focus from product to compliance and appeals.
- Alternatives fragment the user base, reducing interoperability.

## decision boundary
If alternative distribution paths become standard and easy for non-technical users, I will treat
store suspensions as an inconvenience rather than a systemic risk. Until then, the platform choke
point remains a critical dependency.

## my take
Distribution is governance. If a platform can cut the pipeline without explanation, it controls the
ecosystem more than the developers do.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#platforms</li>
        <li>#security</li>
        <li>#messaging</li>
        <li>#2021</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[Trust in Platforms]]</li>
        <li>[[Apple vs Epic Ruling]]</li>
        <li>[[open banking trust debates spurs regulation]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
How much resilience do I need before trusting a single app store to distribute my core tools?

#
