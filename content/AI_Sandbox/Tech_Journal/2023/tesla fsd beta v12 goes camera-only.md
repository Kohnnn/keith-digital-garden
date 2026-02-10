---
title: tesla fsd beta v12 goes camera-only
tags:
  - tech-journal
  - autonomy
  - automotive
  - 2023
keywords:
  - tesla
  - fsd
  - vision
  - beta
draft: true
description: Tesla widened the FSD Beta V12 program and doubled down on its camera-only stack.
created: 2023-12-08
updated: 2023-12-08
note_id: 231208TJ07
cssclasses:
  - tech-journal
---

# tesla fsd beta v12 goes camera-only

Tesla pushed FSD Beta V12 to a wider set of drivers, ditching radar entirely and promising that an end-to-end neural network can learn the whole driving policy ([Electrek](https://electrek.co/2023/12/08/tesla-fsd-beta-v12-release/)). The release reignites debate about whether cameras alone can deliver Level 4 behavior.

## scene cut
V12 uses a neural net to map camera input directly to steering and throttle, reducing hand-coded heuristics. Drivers reported smoother turns but also odd lane decisions during rain.

## signal braid
- The end-to-end approach mirrors what [[gpt-4 release recalibrates hallucination debate]] showed: once models own the whole stack, debugging is cultural, not modular.
- Dropping radar contradicts the sensor fusion path Waymo and Cruise take; Tesla is betting cost and data volume beat redundancy.
- Regulators already second-guess camera-only claims, so expect scrutiny similar to the heat on [[starship flight 3 balances rapid iteration]].

## risk surface
- Software regressions are harder to trace when the policy is a monolith.
- Any high-profile crash could trigger broad NHTSA action.
- Tesla’s release cadence depends on real-world data; a pause in usage slows iteration.

## my take
Tesla is forcing autonomy to be a software product, but it raises the question of how you prove a neural policy is safe in the first place.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#autonomy</li>
        <li>#automotive</li>
        <li>#2023</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[gpt-4 release recalibrates hallucination debate]]</li>
        <li>[[starship flight 3 balances rapid iteration]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What telemetry proof would convince regulators that V12’s camera-only policy is acceptably safe?

#
