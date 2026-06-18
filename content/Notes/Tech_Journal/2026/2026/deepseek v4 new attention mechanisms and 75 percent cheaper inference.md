---
title: "deepseek v4 new attention mechanisms and 75 percent cheaper inference"
tags:
  - ai-models
  - deepseek
  - attention-mechanisms
  - efficiency
  - long-context
keywords:
  - DeepSeek V4
  - CSA compressed sparse attention
  - HCA heavily compressed attention
  - long context window
  - cheap LLM inference
draft: true
created: 2026-06-18
updated: 2026-06-18
note_id: TJ-2026-06-18-005
cssclasses:
  - tech-journal
  - analysis
---

A bycloud video breakdown of DeepSeek V4's technical report — the key insight isn't benchmark scores but that they solved the hard problem nobody else is touching: serving 1M context natively at 10-100x cheaper than competitors.

**The headline numbers:** DeepSeek V4 pricing at sh.435/M input, sh.87/M output (75% discount over V3.2). Cash hit at sh.3625/M. Compare: GLM 5.1 is .40/.40. Gemini 3.1 Pro is /2. Opus 4.6 is /5. DeepSeek is likely still making 50-70% margin at those prices — they were with V3.

**The technical story — two new attention mechanisms:**

1. **Compressed Sparse Attention (CSA):** The KV cache grows one entry per token, but most nearby tokens form a single idea. CSA compresses small chunks into a single latent representation. Instead of storing 1M individual entries, you store compressed blocks. Near state-of-the-art retrieval accuracy at 1M context.

2. **Heavily Compressed Attention (HCA):** Even more aggressive compression for tokens further away in the context window. Closer tokens get higher resolution, distant tokens get heavily compressed.

The two mechanisms together mean DeepSeek can serve long-context without the memory blowup that makes everyone else charge premiums for it. While Anthropic is miscounting tokens and charging extra, DeepSeek dropped per-token price by 75%.

**Context:** V4 ranks third on open-weights benchmarks behind Kimi K2.6 and MiniMax-M3. But the report also proposes new attention mechanisms that advance the state of the art. Not benchmark-maxing — infrastructure-maxing. That's the DeepSeek playbook.

**My take:** The V3 surprise was inference efficiency at scale. V4's surprise is long-context efficiency at scale. Two new attention mechanisms in one release is aggressive — most labs iterate on architecture once a year. DeepSeek dropped two. The 1M context native (not stitched together with RAG or sliding window) is the actual competitive advantage. Everyone else is going to need to match this or get undercut on price for the use cases that actually matter — long-document analysis, codebases, agent trajectories.

References: https://www.youtube.com/watch?v=gC76aeibdFA | DeepSeek V4 technical report (58 pages)
