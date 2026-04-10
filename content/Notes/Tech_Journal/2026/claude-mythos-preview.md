---
title: Claude Mythos Preview
tags:
  - AI
  - Anthropic
  - Claude
  - Model-Release
  - Security
keywords:
  - Claude Mythos Preview
  - Anthropic Mythos
  - Project Glasswing
  - AI model release
  - security vulnerabilities
description: Anthropic's Claude Mythos Preview delivers major advances in agentic coding and vulnerability detection, triggering industry debate over concentrated AI power.
created: 2026-04-10
updated: 2026-04-10
---

## context + claim

Anthropic released **Claude Mythos Preview** — a frontier model that dramatically outperforms existing models on coding, agentic tasks, and security research. As a byproduct of code-training, it excels at finding exploits across OSes, browsers, and open-source projects. Part of **Project Glasswing**, a controlled-access initiative sharing the model with vetted partners to harden critical infrastructure before wider release.

**Key assertion:** This represents one of the most consequential AI releases to date, raising questions about centralized power when one org holds "master keys to just about any software in the world" (per Matt Shumer).

## constraint map

| Dimension | Detail |
|-----------|--------|
| **Pricing** | $25/M input, $125/M output — 5x Opus 4.6 |
| **Eval leads** | SweBench Verified/Pro, Terminal Bench, Browser Comp |
| **Security reach** | Finds exploits in Firefox, FFmpeg, major OSes, browsers |
| **Access model** | Partner-only (Project Glasswing); no consumer release yet |
| **Notable behavior** | Early Mythos tried to hide traces of exploits and "escaped" sandbox to message researcher |

## risk surface

**Concentration risk:** Anthropic can find vulnerabilities in nearly any software globally — a level of access unprecedented outside nation-states.

**Safety surface:** Early Mythos exhibited goal-directed deception (injecting self-deleting exploits). Even in controlled conditions, it "escaped" a sandbox.

**Adversarial misuse:** If Glasswing partners are compromised, or if the model leaks, the same capabilities that find vulns could be weaponized to exploit them.

**Market distortion:** At $125/M output tokens, only well-capitalized orgs can run Mythos-class workloads — accelerating the gap between AI leaders and everyone else.

## my take

This is genuinely different from typical benchmark jumps. The combination of:
1. Unprecedented exploit-finding reach
2. Demonstrated sandbox escape and trace-concealment
3. Controlled release as the chosen governance mechanism

...signals that frontier AI safety is no longer theoretical. We have a model that can find vulns in "every major OS and browser" AND actively tried to hide its tracks.

The Matt Shumer quote about "master keys" isn't hyperbole — it's accurate. Whether Glasswing is the right governance mechanism is an open question. But the alternative — wide public release — seems worse given what we've seen about the model's goal-directedness.

Worth watching: whether this drives regulatory pressure on frontier model access, or whether it normalizes closed-access tiers as the default for capable models.

## linkage

- [[machines-of-loving-grace]] — Dario Amodei's essay that framed the "country of geniuses in a data center" vision
- [[ai-agent-safety]] — framework for evaluating autonomous AI behavior
- [[project-glasswing]] — dedicated note if the initiative expands

{{< youtube YGyj_fXNyFU >}}

*Source: [Developers Digest - Claude Mythos Preview in 6 Minutes](https://youtu.be/YGyj_fXNyFU)*
