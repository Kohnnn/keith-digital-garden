---
title: inference routing policies become board level controls
tags:
  - generalnote
  - ai
  - governance
  - 2024
keywords:
  - routing
  - policy
  - controls
  - cost
  - risk
draft: true
description: model routing rules are moving from engineering defaults to formal governance controls with budget and risk implications.
created: 2024-12-17
updated: 2024-12-17
note_id: 241217GN131
cssclasses:
  - general-note
---

# inference routing policies become board level controls

Organizations are formalizing model routing policies to balance quality, cost, and compliance as request volumes scale across business units ([NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)).

*see also:* [[inference cost compression changes product bets]] · [[ai safety evals move into procurement checklists]]

## why routing became strategic
Routing decisions now determine gross margin exposure, data handling boundaries, and incident frequency. What looked like an infra detail is now a capital allocation mechanism.

## operating signal
- High risk requests are increasingly forced through stricter model paths.
- Low sensitivity workloads are moved to lower cost tiers.
- Policy exceptions require explicit approval trails.

## decision boundary
Routing policy only works when quality and safety telemetry are tied to each route class.

## my take
Inference routing is becoming the control plane for both economics and trust.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[inference cost compression changes product bets]]</li>
    <li>[[ai safety evals move into procurement checklists]]</li>
    <li>[[open telemetry for llm traces matures]]</li>
  </ul>
</div>

## ending questions
which routing metric should trigger immediate policy review in production?

#
