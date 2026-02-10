---
title: apple google contact tracing framework
tags:
  - research-digest
  - health
  - privacy
  - 2020
keywords:
  - exposure
  - api
  - bluetooth
  - privacy
draft: true
description: Apple and Google's joint API aimed to balance public health and user data protection.
created: 2020-04-10
updated: 2020-04-10
note_id: 200410RD01
cssclasses:
  - research-digest
---

# apple google contact tracing framework

The two giants jointly built an Exposure Notification API that promised Bluetooth-based proximity tracking while keeping data off servers ([Apple Google Exposure](https://www.apple.com/covid19/contacttracing)). It became a template for how platform-level consent can coexist with public-health mandates.

## scene cut
Their design splits matching and verification: tokens live only on devices, and users control whether to upload diagnoses. Public health authorities still need to build apps, but the API provides the privacy scaffolding.

## evidence stack
- Bluetooth rotating identifiers avoid giving governments a permanent ID, which mirrors the concerns in [[social cooling]].
- The API limited any central authority from reconstructing location sequences, making it more palatable to European regulators.
- Rolling out on Android and iOS simultaneously reduced fragmentation and installation friction.
- Open-source reference apps let researchers inspect the privacy properties before adoption.

## constraint map
- Bluetooth range varies drastically, so the definition of a "contact" was noisy.
- Not every country trusted Apple/Google; some built independent systems.
- Without widespread testing, exposure notifications hit a limit in usefulness.

## linkage anchor
This digest links to [[telehealth surge rewrites medical delivery]] because both show how software is trying to replace physical triage, and it also ties back to [[social cooling]] since trust in surveillance still matters.

## my take
The API shows privacy and public health can be siblings if engineered carefully. Adoption depends on how quickly governments can integrate these patterns.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#health</li>
        <li>#privacy</li>
        <li>#2020</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[social cooling]]</li>
        <li>[[telehealth surge rewrites medical delivery]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
Can exposure-tracking systems prove they are privacy-preserving before people opt in en masse?

#
