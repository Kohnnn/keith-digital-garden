---
title: Crypto Dashboard
tags: [portfolio, project, crypto, dashboard]
draft: false
description: Case study on cycle-aware crypto dashboards and signal monitoring.
created: 2026-01-30
updated: 2026-03-12
cssclasses: [portfolio-page, casefile-page, market-report]
---

# Crypto Dashboard

A casefile for the desk surface used to track cycle context, liquidity pressure, and market-state transitions in one review loop.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Cadence</span>
    <strong>Weekly and monthly review surface</strong>
    <p>Built for recurring state checks instead of one-off chart snapshots.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Lens</span>
    <strong>Structure over noise</strong>
    <p>The dashboard is organized to separate regime change from local volatility.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Reuse</span>
    <strong>Memo-linked output</strong>
    <p>Reads can be folded straight back into the playbook, watchlists, and market reports.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Research designer, dashboard builder, and signal curator</p>
  </div>
  <div>
    <span class="casefile-label">Focus</span>
    <p>Cycle state, liquidity context, breadth, and review cadence</p>
  </div>
  <div>
    <span class="casefile-label">Tools</span>
    <p>TradingView, Looker Studio, Google Sheets, public macro and crypto data</p>
  </div>
</div>

## Signal ribbon

<div class="signal-strip">
  <span class="signal-token">BTC structure</span>
  <span class="signal-token">total3 breadth</span>
  <span class="signal-token">liquidity pulse</span>
  <span class="signal-token">dominance shifts</span>
  <span class="signal-token">macro pressure</span>
</div>

## Problem

- Raw data was easy to access, but interpretation was fragmented across tabs and inconsistent chart setups.
- Needed a repeatable review surface that separates structural cycle state from noisy short-term fluctuations.
- The dashboard had to support both ongoing monitoring and post-review documentation.

## Dashboard surfaces

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Bitcoin performance</div>
    <p>Log-scale history, halving context, and post-halving comparison curves.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Market cap view</div>
    <p>Looker Studio surface for structure, composition, and capital rotation.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Chart sandbox</div>
    <p>Rapid hypothesis layer using TOTAL3, WALCL, unemployment, and dominance views.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Review output</div>
    <p>Monthly and weekly snapshots that can be folded back into the market memos.</p>
  </div>
</div>

## Market-state explainer

<div class="market-aside">
  <p>The dashboard is designed to answer one question quickly: is the current move structural enough to change positioning, or is it noise inside the existing phase?</p>
</div>

## Review loop

<div class="decision-map">
  <div class="decision-card">
    <strong>Monitor</strong>
    Track BTC structure, breadth, macro liquidity, and dominance shifts in one surface.
  </div>
  <div class="decision-card">
    <strong>Interpret</strong>
    Separate structural phase change from short-term volatility.
  </div>
  <div class="decision-card">
    <strong>Document</strong>
    Turn the dashboard read into a memo, watchlist adjustment, or risk note.
  </div>
  <div class="decision-card">
    <strong>Reuse</strong>
    Feed the output back into the market cycle playbook and future review cadence.
  </div>
</div>

## Outcomes

- Faster weekly and monthly cycle reads
- Better separation between structural trend and local volatility
- More consistent language when documenting market-state changes
- Cleaner input surface for the market cycle playbook

## Connected outputs

- [[Portfolio/Projects/Investment Strategy|Market cycle playbook]]
- [[Portfolio/Blog|Research notes]]
- [[Portfolio/Resume|Experience log]]

## Sources

- Bitcoin price history and custom CSV staging
- CRYPTOCAP market-cap data
- FRED and labor-market data for macro context

## Next iteration

- Add alerting thresholds for regime-shift candidates.
- Add a standardized monthly dashboard snapshot for review logs.
