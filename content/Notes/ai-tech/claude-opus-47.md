---
title: "Claude Opus 4.7: Advanced Software Engineering & Cyber Safeguards"
tags: [AI, Claude, Anthropic, Opus-47, model-release, April-2026]
keywords: [Claude Opus 4.7, Claude 4.7, Anthropic, software engineering, cyber safeguards]
description: "Anthropic releases Claude Opus 4.7 on April 16, 2026 — notable improvement in advanced software engineering, 3.3x higher-resolution vision, new xhigh effort level."
created: 2026-04-21
updated: 2026-04-21
---

## Overview

Anthropic released **Claude Opus 4.7** on April 16, 2026 — a direct upgrade to Opus 4.6 at the same price ($5 / $25 per million input/output tokens).

**Key improvements:**
- Notable gains on advanced software engineering tasks
- 3.3x higher-resolution vision (up to 3.75 megapixels)
- Better file-system memory across multi-session agent work
- State-of-the-art on Finance Agent evaluation
- State-of-the-art on GDPval-AA (third-party knowledge work evaluation)

## What's New

### Advanced Software Engineering
Users report being able to hand off their hardest coding work — the kind that previously needed close supervision — to Opus 4.7 with confidence.

**Capabilities:**
- Handles complex, long-running tasks with rigor and consistency
- Pays precise attention to instructions
- Devises ways to verify its own outputs before reporting back

### Vision Upgrade
Opus 4.7 can accept images up to **2,576 pixels on the long edge (~3.75 megapixels)** — more than 3x prior Claude models.

**Use cases:**
- Computer-use agents reading dense screenshots
- Data extraction from complex diagrams
- Pixel-perfect visual references

### New Effort Level: xhigh
A new `xhigh` ("extra high") effort level sits between `high` and `max`, giving finer control over reasoning vs latency tradeoff.

**Claude Code default changed to xhigh** for all plans.

## Cyber Safeguards

Opus 4.7 is the first model released with **automated cyber safeguards** — a first step toward eventual broad release of Mythos-class models.

**Safeguards automatically detect and block:**
- Prohibited cybersecurity requests
- High-risk cybersecurity uses

**Legitimate uses still allowed:**
- Vulnerability research
- Penetration testing
- Red-teaming

**Join the Cyber Verification Program** for legitimate cybersecurity use.

## Claude Design

Also announced: **Claude Design** — a new Anthropic Labs product for collaborating with Claude to create visual outputs:
- Designs
- Prototypes
- Slides
- One-pagers

## Claude Code Updates

### /ultrareview Command
New slash command produces dedicated review sessions that read through changes and flags:
- Bugs
- Design issues
- Things a careful reviewer would catch

**Pro and Max users get 3 free ultrareviews.**

### Auto Mode Extended
Auto mode extended to **Max users** — Claude makes decisions on your behalf, enabling longer tasks with fewer interruptions.

## Migration Notes

**Two changes affecting token usage:**

1. **Updated tokenizer** — same input maps to ~1.0–1.35x more tokens depending on content
2. **More thinking at higher effort** — particularly on later turns in agentic settings

**Control token usage via:**
- Effort parameter
- Task budgets
- Prompting for conciseness

## Pricing

| Tier | Input | Output |
|------|-------|--------|
| Opus 4.7 | $5 / 1M tokens | $25 / 1M tokens |

Same as Opus 4.6.

## Availability

- Claude API
- Amazon Bedrock
- Google Vertex AI
- Microsoft Foundry
- Claude.ai products

## Related

- [[mcp-model-context-protocol]]
- [[april-2026-frontier-models]] — includes Claude Mythos 5 (withheld)
- [[ai-agent-frameworks]]

## Sources
- [Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
- [Claude 4.7 Benchmarks](https://llm-stats.com/blog/research/claude-opus-4-7-launch)
- [Anthropic rolls out Claude Opus 4.7](https://www.cnbc.com/2026/04/16/anthropic-claude-opus-4-7-model-mythos.html)
