---
title: "fidelity curves for agent telemetry and risk calibration"
tags:
  - research
  - telemetry
  - calibration
  - agents
  - reliability
keywords:
  - agent telemetry calibration
  - reliability curve
  - risk calibration
  - policy compliance metrics
  - false positive control
  - evidence scoring
cssclasses:
  - research-digests
  - analysis
created: 2026-06-30
updated: 2026-06-30
note_id: 300626RD05
draft: true
---

# RD05 — Fidelity Curves for Agent Telemetry and Risk Calibration

Most agent teams track reliability as a number. Enterprise teams need a curve.

---

## Why curves, not scalar scores

A scalar score hides critical regimes. Fidelity varies by task length, tool depth, domain, and prompt entropy. The right dashboard is a family of curves:
- short-horizon tasks
- medium-horizon policy-rich tasks
- high-risk, low-frequency tasks

## Practical risk calibration

Plot expected cost of error, false positive rates on constraint violations, and rollback time against task complexity. The curve tells you where to cap autonomy and where to require human review.

## Recommended setup

1) Standard prompt battery by risk class
2) Segment by context window and tool count
3) Track confidence, not just correctness
4) Tie auto-approval thresholds to curve inflection points

## References
- reliability synthesis notes (2026)
- policy telemetry dashboards, pilot programs
