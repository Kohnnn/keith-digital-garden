---
title: retrieval quality audits reduce hallucination incidents
tags:
  - generalnote
  - ai
  - quality
  - 2024
keywords:
  - retrieval
  - audits
  - hallucination
  - quality
  - rag
draft: true
description: retrieval audit practices in 2024 helped teams lower hallucination rates in production rag systems.
created: 2024-10-20
updated: 2024-10-20
note_id: 241020GN103
cssclasses:
  - general-note
---

# retrieval quality audits reduce hallucination incidents

Teams that introduced retrieval quality audits in 2024 reported lower hallucination incidents than teams focused only on base model upgrades ([LangChain](https://blog.langchain.dev/)). The key insight is mundane and powerful: context quality often dominates model quality.

*see also:* [[gpt-4 release recalibrates hallucination debate]] · [[postgres vector indexing reaches mainstream ops]]

## evidence stack
- Query expansion and reranking improved answer grounding in many domains.
- Stale document windows were a frequent hidden failure mode.
- Human adjudication of retrieval misses produced better long-term gains than prompt tweaks alone.

## risk surface
- Audit overhead can slow iteration if workflows are manual.
- Teams may optimize for benchmark prompts and miss live traffic variance.
- Weak document governance undermines otherwise strong retrieval pipelines.

## my take
I no longer treat hallucination control as a model-only problem. Retrieval audits are now a first-line reliability practice.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gpt-4 release recalibrates hallucination debate]]</li>
    <li>[[postgres vector indexing reaches mainstream ops]]</li>
    <li>[[enterprise ai adoption metrics show dual speed]]</li>
  </ul>
</div>

## ending questions
which retrieval metric should become the default reliability KPI for rag systems?

#
