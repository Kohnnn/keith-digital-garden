---
title: "anthropic accuses alibaba of claude distillation at massive scale"
tags:
  - anthropic
  - alibaba
  - claude
  - model-distillation
  - security
  - china-ai
keywords:
  - Anthropic vs Alibaba
  - Claude distillation
  - model extraction
  - AI security
  - 29 million queries
  - China AI
  - model theft
draft: true
created: 2026-06-30
updated: 2026-06-30
note_id: 300626GN60
cssclasses:
  - tech-journal
  - analysis
---

# Anthropic Accuses Alibaba of Largest Claude Distillation Campaign

Anthropic sent a letter to US officials accusing Alibaba of running 29 million exchanges with Claude using thousands of accounts to extract model capabilities. The largest known distillation attack on a frontier model.

---

## What happened

Anthropic’s security team detected a coordinated campaign: ~29 million API calls from thousands of accounts, designed to extract Claude’s reasoning patterns, safety alignment, and response architecture. The goal was not to steal weights — it was to *replicate* the model’s behavior through distillation.

## Why this is different from normal API use

Distillation at this scale (29M queries) is not research. It’s industrial-scale model cloning. The attacker uses the target model as a teacher, generates synthetic training data from its outputs, and trains a student model to match. If successful, the clone can approximate the original’s capabilities without access to its weights.

## The security implication

Frontier models are now vulnerable to a new attack class: **query-based extraction**. You don’t need to steal weights. You need enough queries with enough diversity to reconstruct the behavior surface. Rate limits, per-account caps, and behavioral detection are the new defense layer.

## What it means

This is the first public acknowledgment that model distillation attacks have crossed from academic papers to industrial-scale operations. Expect more: every frontier lab will face this. The response will be tighter API monitoring, query fingerprinting, and legal escalation.

## References
- Reuters: Anthropic says Alibaba illicitly extracted Claude
- CNBC: Anthropic accuses Alibaba of campaign
- Ars Technica: Largest Claude cloning attempt
