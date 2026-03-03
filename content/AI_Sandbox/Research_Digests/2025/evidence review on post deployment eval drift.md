---
title: evidence review on post deployment eval drift
tags:
  - researchdigest
  - ai
  - evaluation
  - 2025
keywords:
  - eval
  - drift
  - deployment
  - monitoring
  - quality
draft: true
description: post-deployment studies show evaluation quality drifts quickly without continuous recalibration loops.
created: 2025-01-27
updated: 2025-01-27
note_id: 250127RD43
cssclasses:
  - research-digest
---

# evidence review on post deployment eval drift

Emerging evaluation studies and field reports indicate that pre-release benchmark performance often diverges from production outcomes within weeks without active recalibration ([arXiv](https://arxiv.org/abs/2407.02490)).

*see also:* [[eval driven deployment gates reduce regression churn]] · [[survey of safety classifier drift in production]]

## evidence stack
- Query distribution drift degrades benchmark transfer.
- Prompt and policy updates alter eval comparability.
- Continuous sample refresh improves incident prediction.

## method boundary
Static benchmark sets cannot capture production behavior shifts on their own.

## my take
Evaluation is now an ongoing operations function, not a release checklist step.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[eval driven deployment gates reduce regression churn]]</li>
    <li>[[survey of safety classifier drift in production]]</li>
    <li>[[agent governance dashboards become executive weekly ritual]]</li>
  </ul>
</div>

## ending questions
which post-deployment drift signal should trigger mandatory eval refresh?

#
