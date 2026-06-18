---
title: "Frontier: LLM Inference Simulator"
tags: [AI, inference, simulation, MoE, systems, distributed]
keywords: [Frontier simulator, LLM inference, MoE, disaggregated architecture, expert parallelism]
description: "A high-fidelity simulator for the next generation of LLM inference — MoE models, disaggregated architectures, cross-cluster expert routing."
created: 2026-04-10
updated: 2026-04-10
---

## context + claim

LLM inference is getting complex. MoE models, disaggregated architectures (prefill/decode separation), expert parallelism — existing simulators assume dense co-located models and can't handle these new paradigms.

Frontier is a new simulator built from scratch for this landscape.

## constraint map

**Problem:**
- Existing simulators designed for dense co-located models
- Can't model MoE expert routing dynamics
- Can't model disaggregated attention/FFN separation
- Can't model cross-cluster communication

**Frontier's approach:**
- Unified framework for co-located AND disaggregated systems
- Native MoE support with expert parallelism (EP)
- Simulates cross-cluster expert routing
- Advanced pipelining strategies for latency hiding
- Refined operator models for accuracy

**Key capabilities:**
- Model prefill/decode (PD) separation
- Model attention/FFN (AF) disaggregation
- Expert routing in MoE across clusters
- Heterogeneous scaling simulation

## my take

This is systems infrastructure work that enables future research. Good simulators let you explore design spaces cheaply before committing to implementation. Frontier fills a real gap as inference systems diverge from the "one big GPU" model.

Authors from the Hong Kong University of Science and Technology and NVIDIA — strong systems pedigree.

## linkage

- [[moe-architecture]] — mixture of experts deep dive
- [[inference-optimization]] — serving efficiency techniques
- [[distributed-llm]] — multi-node inference patterns
