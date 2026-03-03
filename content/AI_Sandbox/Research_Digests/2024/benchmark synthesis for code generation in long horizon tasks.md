---
title: benchmark synthesis for code generation in long horizon tasks
tags:
  - researchdigest
  - ai
  - coding
  - 2024
keywords:
  - benchmark
  - coding
  - horizon
  - agents
  - evaluation
draft: true
description: long-horizon coding benchmarks reveal bigger gaps in planning and recovery than in isolated function generation.
created: 2024-12-12
updated: 2024-12-12
note_id: 241212RD34
cssclasses:
  - research-digest
---

# benchmark synthesis for code generation in long horizon tasks

Long-duration coding evaluations show models perform far better on local completion than on multi-step planning, debugging loops, and constraint tracking over time ([SWE-bench](https://www.swebench.com/)).

*see also:* [[meta analysis on llm judge reliability across domains]] · [[structured output contracts reduce agent failure rates]]

## evidence map
- Success rates fall sharply as task length and dependency count rise.
- Recovery quality after first error predicts final completion more than initial generation quality.
- Tool-use constraints strongly affect benchmark outcomes.

## method boundary
Useful benchmarks need realistic repository context, failing tests, and noisy requirements rather than curated single-file prompts.

## my take
The frontier problem is not writing snippets. It is maintaining coherent intent over long execution arcs.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[meta analysis on llm judge reliability across domains]]</li>
    <li>[[structured output contracts reduce agent failure rates]]</li>
    <li>[[stateful agents gain safer rollback controls]]</li>
  </ul>
</div>

## ending questions
which long-horizon benchmark signal best predicts real developer productivity gains?

#
