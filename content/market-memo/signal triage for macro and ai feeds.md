---
title: signal triage for macro and ai feeds
tags:
  - market-memo
  - process
  - macro
  - ai
keywords:
  - signal
  - noise
  - triage
  - macro
  - ai
note_id: 260330TJ01
cssclasses:
  - tech-journal
description: practical filter for separating actionable signal from ambient noise in recurring macro and ai intelligence feeds.
created: 2026-03-30
updated: 2026-03-30
---

# signal triage for macro and ai feeds

*see also:* [[liquidity regime framework]] · [[decision boundary checklist for weekly publishing]]

## intake funnel

Most feeds are ambient noise. The first job isn't to read everything — it's to filter fast and accurately.

**Layer 1: Source classification**
I tag sources by reliability and horizon before I read the content:
- Economic data releases — high signal for the session, short half-life.
- Central bank communications — medium signal, multi-day echo.
- Industry reports and research — variable, depends on incentive alignment of the source.
- Social media and narrative feeds — low signal alone, useful as sentiment temperature.
- AI tooling news — high noise ratio, signal often buried in hype.

**Layer 2: Claim extraction**
After source classification, I extract the actual claim, not the framing. The headline almost never matches the substance. I ask: what is the specific assertion? What would change my mind about it?

**Layer 3: Confidence grading**
- **Confirmed** — multiple independent sources, consistent with observable market behavior.
- **Likely** — one credible source, plausible mechanism, no contradicting evidence.
- **Possible** — interesting angle, but missing key confirmation.
- **Noise** — narrative without mechanism, or mechanism without evidence.

## time-horizon sorting

I sort everything into buckets based on actionable horizon:

**Trade week (1–5 days)** — primarily data releases and positioning shifts. I care about the direction, not the story.

**Month (5–30 days)** — policy signals and trend confirmation. I care about whether the narrative is gaining or losing institutional sponsorship.

**Quarter (30–90 days)** — regime shifts and structural resets. I care about whether the framework needs updating.

Anything that can't be placed in one of these buckets usually isn't actionable yet, regardless of how interesting it sounds.

## escalation rule

A signal gets promoted to publication when:
1. It changes a position-relevant view, not just adds texture.
2. It survives at least one disconfirming check.
3. It can be stated clearly without the hedging that comes from uncertainty.

If I can't state it cleanly, I hold it as a working note until the signal strengthens or the uncertainty resolves.

## ai feed specific problems

AI news has structural overhype problems that macro feeds don't:

- Vendor announcements are not market signals.
- Benchmark results are not deployment reality.
- Demo quality is not product quality.
- Regulatory concern is not regulatory action.

I apply a higher bar to AI signals before treating them as regime-relevant. Most of what lands in AI feeds is either already priced or won't arrive for years.

## my take

Signal triage is a discipline, not a talent. The people who are best at it aren't smarter — they just have stricter filters and faster rejection.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[liquidity regime framework]]</li>
    <li>[[decision boundary checklist for weekly publishing]]</li>
    <li>[[ai compute bottlenecks chips power and deployment lag]]</li>
  </ul>
</div>

## ending questions

which signal type has the highest rate of reversal within 30 days of publication?

#
