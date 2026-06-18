---
title: "a 10 year old xeon is all you need"
tags:
  - hardware
  - llm
  - inference
  - cpu
  - optimization
keywords:
  - Xeon E5-2620 v4
  - CPU inference
  - Gemma 3
  - speculative decoding
  - llama.cpp
  - memory bandwidth
draft: true
created: 2026-06-05
updated: 2026-06-05
note_id: TJ-2026-06-05-003
cssclasses:
  - tech-journal
  - deep-dive
---

# a 10 year old xeon is all you need

Christina Sørensen — software engineer, NixOS Steering Committee, author of `eza` — ran Gemma 3 inference on a 2016 Intel Xeon E5-2620 v4 and got usable throughput. No GPU. DDR3 RAM. Eight year-old server hardware.

## the machine

- **CPU**: Intel Xeon E5-2620 v4 (Broadwell-EP, 2016) — 8 cores / 16 threads, base 2.1 GHz, AVX2
- **RAM**: 128 GB DDR3
- **GPU**: none

On paper this looks hopeless. In practice, for single-user inference with the right software stack, it works.

## why it works: the memory wall

LLM inference on CPU is bottlenecked by **memory bandwidth**, not compute. Every generated token requires the model weights to flow from RAM through the cache hierarchy to the cores. If your memory bus is fast enough to stream weights at the speed the CPU can consume them, inference works.

The Xeon E5-2620 v4 has four DDR4 channels (just barely). For a 4-bit quantized 26B MoE model with ~3.8B active parameters, that bandwidth is sufficient for a steady token stream.

## the magic spell

The key is aggressive optimization of `llama.cpp`:

```
llama-cli \
  --model gemma-4-26B-A4B-it-Q8_0.gguf \
  --model-draft gemma-4-26B-A4B-it-assistant-Q8_0.gguf \
  --spec-type mtp --draft-max 3 --spec-autotune \
  --cpu-moe --merge-up-gate-experts \
  --flash-attn on --mla-use 3 \
  --mlock --run-time-repack
```

**Speculative decoding** (`--spec-type mtp`) is the key optimization. A small drafter model (easily fits in L3 cache) generates draft tokens cheaply; the big verifier model only checks them. On CPU, speculative decoding is even more valuable than on GPU because compute is cheap relative to memory fetch costs.

**MoE-aware CPU routing** (`--cpu-moe --merge-up-gate-experts`) tunes how expert weights are loaded for the CPU cache hierarchy, minimizing thrashing across 128 experts.

## why this matters for builders

You don't need an H100 to prototype an LLM feature. A spare CPU box from a decade ago is enough to:
- Validate prompt designs
- Test latency characteristics
- Experiment with quantization tradeoffs
- Build and iterate on agent tooling

Once you need to serve real users, the calculus flips to GPUs. But during the "is this even useful?" phase, CPU inference is a zero-cost entry point.

## my take

This is the most practical AI-hardware post of 2026. Every other benchmark is H200 vs B200 vs Trainium2. Sørensen's post is the reminder that most developers already have a perfectly fine inference machine — under their desk, or in a closet.

The real bottleneck isn't hardware. It's knowing which knobs to turn in `llama.cpp`.

---

## references

- [Original post: "A 10 year old Xeon is all you need"](https://point.free/blog/gemma-4-on-a-2016-xeon/)
- [Deepthix commentary](https://deepthix.com/en/blog/un-xeon-de-10-ans-suffit-amplement-1780309818585)
- [TechieMike guide: Run AI models on old hardware](https://www.techiemike.com/running-ai-models-on-old-hardware-a-10-year-old-xeon-is-all-you-need-2/)

---

**related notes**: `nvidia rtx spark and the shape of local ai` (TJ), `ai agents as teaching assistants, not code generators` (GN)