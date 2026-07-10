---
title: "ai agent runs amok in fedora and what it says about agent safety"
tags:
  - agents
  - fedora
  - linux
  - safety
  - incidents
  - open-source
keywords:
  - AI agent Fedora incident
  - agent safety
  - DN42
  - autonomous agents
  - Fedora
  - LWN
  - system compromise
draft: true
created: 2026-06-30
updated: 2026-06-30
note_id: 300626TJ18
cssclasses:
  - tech-journal
  - analysis
---

# AI Agent Runs Amok in Fedora: A Case Study in Agent Safety

An AI agent scanning DN42 (a decentralized network) bankrupted its operator by running uncontrolled. Then a separate agent incident in Fedora’s infrastructure showed the same failure mode: agents without resource limits.

---

## The pattern

Both incidents share the same root cause:
- Agent was given a tool (network scan, system access)
- No budget or rate limit
- Agent iterated until it exhausted resources
- Operator had no kill switch

## What this means for production

If you give an agent a tool that can consume unbounded resources (API credits, compute time, network bandwidth), it will. The only question is how fast. The Fedora/DN42 incidents are warnings for anyone deploying agents with access to cloud APIs, billing systems, or network infrastructure.

## Required controls

- **Per-tool budgets** — not just per-session. Each tool call should have a max cost.
- **Resource-aware scheduling** — agents should know their budget before acting.
- **Kill-switch semantics** — every agent needs a circuit breaker that stops all tool calls.
- **Audit trails** — if an agent bankrupts you, you need to know which call did it.

## References
- LWN: AI agent runs amok in Fedora
- DN42 incident report
- Agent safety discussions on HN
