---
title: "glm 5.2 becomes the new open weights leader"
tags:
  - ai-models
  - open-weights
  - glm
  - reasoning
  - agent-performance
keywords:
  - GLM-5.2
  - open weights model benchmark
  - Z AI
  - Artificial Analysis Intelligence Index
draft: true
created: 2026-06-18
updated: 2026-06-18
note_id: TJ-2026-06-18-001
cssclasses:
  - tech-journal
  - analysis
---

Z AI dropped GLM-5.2 and it's now the top open-weights model on the Artificial Analysis Intelligence Index v4.1 — scoring 51, beating MiniMax-M3 (44), DeepSeek V4 Pro max (44), and Kimi K2.6 (43). Same architecture as GLM-5.1 (744B total / 40B active) but 11 points higher. That's a big jump for a point-release.

## What changed

The gains are concentrated in scientific reasoning. CritPt jumped +16 to 21%, HLE (Hard Level Evaluation) +12 to 40%. GPQA Diamond hit 89%. TerminalBench v2.1 improved +16 to 78%. These aren't incremental — they're the kind of leaps that suggest genuine data or training improvements, not just prompt-tuning.

The real story is GDPval-AA v2, their agentic benchmark where GLM-5.2 scored 1524 — ahead of MiniMax-M3 (1418) and DeepSeek V4 Pro max (1328), and *level* with GPT-5.5 xhigh reasoning (1514). GDPval-AA v2 uses 250-turn trajectories with a rotating panel of frontier-model judges. That's a serious eval.

## Token efficiency trade-off

GLM-5.2 uses 43k output tokens per task (37k reasoning), up from 5.1's 26k. It's the least token-efficient among open-weights peers at its intelligence level — MiniMax-M3 uses 24k, Kimi K2.6 uses 35k. Cost per task is ~$0.46, putting it on the Pareto frontier for intelligence vs cost, but off the most attractive quadrant for token efficiency.

## Context window

1M tokens now, up from 200K. Licensed MIT. Pricing at $1.40/$4.40/$0.26 per 1M input/output/cache tokens. Available on Z AI's API plus DeepInfra, Novita, Nebius, Baseten, Fireworks.

## My take

The gap between open-weights and proprietary keeps shrinking. GLM-5.2 matching GPT-5.5 on agentic benchmarks is the kind of number that makes you question how long the proprietary moat lasts. The token inefficiency is real but overrated — if the model actually solves the task, 43k vs 24k tokens doesn't matter. What matters is that an open model with MIT license is doing what 5.2 does. We're past the point where "just use the API" is the obvious answer for serious work.

## References
- [Artificial Analysis article](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
- [Z AI GLM-5.2 page](https://artificialanalysis.ai/models/glm-5-2)
