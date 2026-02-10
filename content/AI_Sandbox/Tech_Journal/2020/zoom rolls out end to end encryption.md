---
title: zoom rolls out end to end encryption
tags:
  - tech-journal
  - security
  - remote-work
  - 2020
keywords:
  - zoom
  - e2ee
  - meetings
  - security
draft: true
description: Zoom delivered optional end-to-end encryption for all users, addressing spring 2020 trust issues.
created: 2020-10-26
updated: 2020-10-26
note_id: 201026TJ13
cssclasses:
  - tech-journal
---

# zoom rolls out end to end encryption

Zoom started rolling out opt-in end-to-end encryption (E2EE) across free and paid tiers, promising meeting keys on local clients rather than Zoom’s servers ([Zoom Blog](https://blog.zoom.us/end-to-end-encryption-phase-1/)).

## scene cut
Users can toggle E2EE in settings; when active, meetings max at 200 participants and disable cloud recording. Zoom distributes ephemeral session keys to each participant using public-key infrastructure.

## signal braid
- It’s the promised fix to the trust cliff captured in [[zoom security meltdown exposes cryptography gaps]].
- Providing E2EE to free users appeased privacy critics and regulators simultaneously.
- Growth in remote work (see [[remote work normalizes across platforms]]) demanded stronger assurances.

## risk surface
- Features like telephone dial-in and breakout rooms lose functionality under E2EE.
- Clients must stay updated; old versions can’t join encrypted meetings.
- Support load rises because users misconfigure security settings.

## my take
Zoom needed to prove it learned from early missteps. Shipping E2EE to everyone makes the company look like it takes trust as seriously as growth.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#security</li>
        <li>#remote-work</li>
        <li>#2020</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[zoom security meltdown exposes cryptography gaps]]</li>
        <li>[[remote work normalizes across platforms]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
Will Zoom keep pace with enterprise key-management demands now that E2EE is table stakes?

#
