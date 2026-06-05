---
title: "cs336 language modeling from scratch"
tags:
  - education
  - llm
  - stanford
  - transformers
keywords:
  - CS336
  - language modeling
  - transformer
  - Percy Liang
  - Tatsunori Hashimoto
draft: true
created: 2026-06-05
updated: 2026-06-05
note_id: TJ-2026-06-05-002
cssclasses:
  - tech-journal
  - analysis
---

# cs336 language modeling from scratch

Stanford's CS336 is the most practical transformer course I've seen in a while. Two instructors — Tatsunori Hashimoto and Percy Liang — walk students through building a full language model from raw Python and PyTorch. No HuggingFace Trainer, no premade tokenizers, no shortcuts.

## the coursework

The course is modeled after OS classes that build a kernel from scratch. Same philosophy: you don't understand transformers until you've written every layer yourself.

| Assignment | What you build |
|------------|---------------|
| 1 — Basics | Tokenizer, transformer blocks, optimizer, training loop from zero |
| 2 — Systems | Profiling, Triton FlashAttention2, distributed training |
| 3 — Scaling | Fit scaling laws to find optimal model size for your compute budget |
| 4 — Data | Take raw Common Crawl dumps → clean pretraining corpus with filtering and dedup |
| 5 — Alignment | SFT + reinforcement learning for math reasoning, optional DPO for safety |

## why it's notable

Most ML courses teach you to call `transformers.Trainer()` and call it a day. CS336 goes the other way: implement the tokenizer, the attention mechanism, the optimizer, the training loop, the data pipeline, and the alignment stage yourself.

The implementation load is heavy. Assignment 1 alone expects you to write:
- A byte-pair encoding tokenizer
- Multi-head causal attention
- A full transformer stack with residual streams
- An AdamW optimizer
- A distributed training loop

The Triton kernel assignment (A2) is particularly brutal — you implement your own FlashAttention in Triton and benchmark it against the reference.

## my take

Courses like this are becoming rare. As AI tooling gets better, the temptation to skip the implementation layer grows. CS336 is the antidote: a reminder that deep understanding still comes from building, not prompting.

If you can follow along with the assignments (they're public on GitHub), doing even the first two will teach you more about how LLMs actually work than reading every "Attention is All You Need" explainer on the internet.

---

## references

- [CS336 course website](https://cs336.stanford.edu/)
- [Assignment 1 — Basics](https://github.com/stanford-cs336/assignment1-basics)
- [Lecture playlist](https://www.youtube.com/playlist?list=PLoROMvodv4rMqXOcazWaTUHhq-yembLCV)

---

**related notes**: `ai agents as teaching assistants, not code generators` (GN), `nvidia rtx spark and the shape of local ai` (TJ)