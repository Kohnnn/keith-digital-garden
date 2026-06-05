---
title: "ai agents as teaching assistants, not code generators"
tags:
  - education
  - ai-policy
  - coding
  - learning
keywords:
  - CS336
  - AI guidelines
  - teaching assistants
  - academic integrity
  - Socratic learning
draft: true
created: 2026-06-05
updated: 2026-06-05
note_id: GN-2026-06-05-001
cssclasses:
  - general-note
  - analysis
---

# ai agents as teaching assistants, not code generators

Stanford's CS336 course dropped an AI policy on June 1 that's worth reading even if you're not in the class. It draws a clean line between helpful guidance and harmful automation.

## the rule

AI agents — ChatGPT, Claude Code, GitHub Copilot — must act as **Teaching Assistants**, not solution generators. They can explain concepts, ask guiding questions, and point to documentation. They cannot write code, complete TODOs, or fix bugs.

**Specifically banned:**
- Writing Python or pseudocode
- Filling in TODO sections
- Refactoring student code into a working solution
- Implementing Triton kernels, distributed training, or scaling-law pipelines
- Running bash commands

**Specifically allowed:**
- Explain error messages from Python, PyTorch, CUDA, and Triton
- Ask Socratic guiding questions to lead the student to the answer
- Point to lecture slides, handouts, and official docs
- Suggest sanity checks, toy examples, and profiler investigations
- Discuss high-level design tradeoffs

## why this line matters

CS336 is an implementation-heavy course. Students write every layer of a transformer — tokenizer, attention, training loop, Triton kernels, distributed data loading. The whole point is the struggle. If an AI writes those components for you, the course stops teaching anything.

The Socratic debugging approach is actually more useful long-term. It teaches *how* to debug, not *what* the fix is. That skill transfers across languages, frameworks, and problems.

## the precedent

This is one of the first explicit "AI as TA" policies from a top CS department. If Stanford holds this line, expect other programs to follow. The age of "AI wrote my homework" is ending — replaced by "AI taught me how to figure it out myself."

The policy also highlights a growing market need: AI tools with educational modes that prioritize explanation over code generation. Cursor, Copilot, and Claude Code could all use a "teach me, don't solve it" toggle.

## my take

I like this policy. It's pragmatic without being Luddite. AI is in the room, you can't ban it, but you can define its role precisely. Make it a tutor, not a ghostwriter.

The test is whether students actually follow it. But the signal is important: the faculty is saying the struggle is the point. That's a healthy message for anyone learning hard technical skills.

---

## references

- [Stanford CS336 AI guidelines](https://docs.google.com/document/d/1SZAlExB1qAc9izHt54gwunNpjKE6wXb8Y7yA_e-baK8)
- [HN discussion](https://news.ycombinator.com/item?id=42582298)
- [CS336 course website](https://cs336.stanford.edu/)

---

**related notes**: `cs336 language modeling from scratch` (TJ), `a 10 year old xeon is all you need` (TJ)