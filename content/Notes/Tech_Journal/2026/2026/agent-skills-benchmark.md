---
title: "Agent Skills: Ideal vs Reality"
tags: [AI, agents, skills, benchmarking, retrieval]
keywords: [LLM agents, skill retrieval, skill usage benchmark, Terminal-Bench, UCSB]
description: "Skills help agents in idealized settings, but benefits collapse under realistic retrieval conditions — query-specific refinement recovers performance."
created: 2026-04-10
updated: 2026-04-10
---

## context + claim

Agent platforms (Claude Code, Codex, etc.) let you add skills — reusable knowledge artifacts encoding domain workflows. But benchmarks show idealized conditions: hand-crafted skills, direct context injection. What happens when agents must retrieve from 34k noisy skills?

**Key finding:** Performance gains from skills degrade to near-zero under realistic retrieval. Query-specific skill refinement recovers most of the gap.

## constraint map

**Setup:**
- 34k real-world skills in pool
- Progressive realism: hand-crafted → retrieved → noisy retrieved
- Models: Claude Opus 4.6, GPT-4o, Qwen3

**Findings:**
- Ideal conditions: skills help significantly
- Realistic retrieval: pass rates approach no-skill baselines
- Query-specific refinement: recovers lost performance when initial skills have reasonable relevance
- Claude Opus 4.6 on Terminal-Bench 2.0: 57.7% → 65.5% with retrieval + refinement

![Skill Usage Benchmark Setup](https://arxiv.org/html/2604.04323v1/x1.png)

**Refinement strategies:**
- Query-specific: adapt skill to user's exact query
- Query-agnostic: general improvements to skill quality
- Query-specific wins when starting point is decent

## my take

This confirms what practitioners know: skills work great in demos, fragile in production. The 8% improvement on Terminal-Bench is real but highlights how far we are from reliable skill retrieval.

The insight that "even when you find relevant skills, they're not tailored to the task" is key. Skills encode general knowledge; tasks require specific instantiation.

Interesting that this is from UCSB, MIT, and IBM — not a lab paper. Independent benchmarking of lab products.

## linkage

- [Terminal-Bench 2.0 Paper](https://arxiv.org/html/2604.04323v1) — agent terminal benchmark
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — Anthropic's coding agent
- [Skill Retrieval Research](https://arxiv.org/abs/2406.12300) — retrieval augmented agents
