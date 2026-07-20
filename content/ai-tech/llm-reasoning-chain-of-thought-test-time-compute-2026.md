---
title: "LLM Reasoning Models: Chain-of-Thought and Test-Time Compute Scaling"
date: 2026-03-31
tags: [ai, llm, reasoning, research]
---

# LLM Reasoning Models: Chain-of-Thought and Test-Time Compute Scaling

The defining architectural shift of 2025-2026 in AI isn't scale — it's _how_ models think. The emergence of reasoning-capable models represents a qualitative leap beyond pattern matching, enabled by two complementary techniques: chain-of-thought prompting and test-time compute scaling. Understanding these techniques matters because they explain why the frontier has moved from "what can AI memorize?" to "what can AI reason through?"

## What's New

**Chain-of-thought (CoT) prompting** has evolved from a user-side technique to a fundamental model capability. Early CoT (2022-2023) required explicit prompting ("think step by step") to get models to show their reasoning. By 2025, reasoning models had internalized this process natively. The model generates intermediate reasoning tokens — visible or internal — before producing final outputs. This has three practical effects: higher accuracy on multi-step problems, better calibration (the model knows when it's uncertain), and explainable outputs that let developers audit reasoning paths.

**Test-time compute scaling** is the more profound shift. Traditionally, AI model capability scaled with training compute — more parameters, more training data, more GPU-hours. Test-time scaling decouples inference cost from training cost by allowing models to "think longer" at inference time. OpenAI's o3 demonstrated this dramatically: at high inference compute settings, o3 achieved **87.7% on GPQA** (graduate-level science questions) — a task where random chance yields ~20% and GPT-4 scored around 60%. The key insight is that compute spent during inference (test time) can partially substitute for compute spent during training.

**Extended thinking modes** have now proliferated across providers. Each takes a different approach:

- **OpenAI's deliberative thinking** (GPT-5.4 Thinking): Explicit internal token generation with visible thinking traces in API responses. Thinking tokens are priced at the same rate as output tokens, making deep reasoning a direct cost.
- **Anthropic's extended thinking** (Claude Opus 4.6): Model can spend additional compute on complex problems before responding. Controllable via API parameters, with thinking budget limits.
- **Google's Deep Think** (Gemini 3.1 variants): Multi-tier reasoning with different compute budgets for different problem types. Gemini Deep Think reportedly solved four previously open mathematical problems.

**The efficiency frontier** has shifted. A smaller model with extensive test-time compute can outperform a larger model with less inference compute on reasoning tasks. This has massive economic implications: rather than training ever-larger models (estimated $1B+ for the next frontier by 2028), labs can invest in inference infrastructure and reasoning efficiency.

**Benchmark data** from March 2026 tells a clear story:

| Model             | GPQA  | SWE-bench | ARC-AGI-2 |
| ----------------- | ----- | --------- | --------- |
| Claude Opus 4.6   | 80.8% | 80.8%     | —         |
| Gemini 3.1 Pro    | 94.3% | 80.6%     | 77.1%     |
| GPT-5.4 Pro       | —     | 77.2%     | —         |
| o3 (high compute) | 87.7% | 69.1%     | —         |

Notably, o3's SWE-bench score (69.1%) underperforms newer models on coding tasks despite its reasoning dominance — a reminder that benchmark performance is highly domain-specific.

## Why It Matters

Test-time compute scaling changes the economics and strategy of AI development. Training frontier models is increasingly expensive and energy-intensive. Inference-time compute offers a more modular path: you can improve a model's reasoning without retraining it. This benefits both labs (faster iteration) and users (models can reason harder on hard problems without being "smarter" on easy ones).

The chain-of-thought revolution also has implications for AI safety and interpretability. Visible reasoning traces let developers audit why a model reached a conclusion — not just verify whether it's correct. This doesn't solve the alignment problem, but it makes models more inspectable.

The practical implication for developers: prompt engineering for reasoning tasks has become more nuanced. Simply asking models to "think step by step" no longer differentiates — that's table stakes. The skill is now knowing when to pay for extended compute (hard problems) and when standard inference suffices (routine tasks). Building cost-aware routing into AI pipelines is becoming a core engineering discipline.

## Media & Sources

> **🖼️ Visual:** ![[attachments/ai-tech/2026/test-time-compute-scaling.jpg|Test-Time Compute Scaling Diagram]]

> **🔗 Read:** [Chain-of-Thought Reasoning in Language Models](https://arxiv.org/abs/2201.11903) — original CoT paper from Google Research

> **🔗 Read:** [OpenAI o3 Mini Announcement](https://openai.com/index/openai-o3-mini) — reasoning model technical details

> **🔗 Read:** [ARC-AGI Benchmark](https://arcprize.org/) — abstract reasoning challenge for evaluating AI generalization

> **🔗 Read:** [SWE-Bench Verified](https://www.swebench.com/) — software engineering benchmark for evaluating AI coding agents
