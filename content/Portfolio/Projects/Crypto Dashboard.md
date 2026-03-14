---
title: Crypto Dashboard
tags: [portfolio, project, crypto, dashboard]
draft: false
description: Case study on the dashboard used to review crypto market structure, liquidity, and cycle state.
created: 2026-01-30
updated: 2026-03-13
cssclasses: [portfolio-page, casefile-page, market-report]
---

# Crypto Dashboard

Casefile for the review surface I used to bring crypto market structure, macro liquidity, and trading context into one repeatable workflow.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Cadence</span>
    <strong>Recurring review surface</strong>
    <p>Built for weekly and monthly state checks instead of one-off chart snapshots.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Stack</span>
    <strong>Looker Studio plus TradingView</strong>
    <p>Market-cap dashboards, chart sandboxing, and macro overlays live in one working desk.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Goal</span>
    <strong>Structure over noise</strong>
    <p>The dashboard exists to separate regime change from local volatility before positioning changes.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Dashboard builder, signal curator, and market-review operator.</p>
  </div>
  <div>
    <span class="casefile-label">Inputs</span>
    <p>BTC history, CRYPTOCAP data, macro series, and custom chart tracking staged into one review loop.</p>
  </div>
  <div>
    <span class="casefile-label">Use</span>
    <p>Support market reads, memo updates, and the cycle framework without bouncing between scattered tabs.</p>
  </div>
</div>

## Problem

- Crypto data was easy to access but hard to interpret consistently because context lived across too many disconnected charts.
- I needed one surface that could hold BTC structure, market-cap rotation, liquidity context, and risk discussion together.
- The dashboard had to support both live review and later documentation so it could feed the rest of the research system.

## Core modules

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Bitcoin performance</div>
    <p>Price history and structural context built from a staged Bitcoin CSV data source.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Market-cap dashboard</div>
    <p>Looker Studio surface for crypto market composition, capital rotation, and capitalization structure.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Chart sandbox</div>
    <p>TradingView layer for hypothesis checks using dominance, liquidity, breadth, and macro overlays.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Review output</div>
    <p>Dashboard reads fold directly into market notes, watchlist changes, and cycle updates.</p>
  </div>
</div>

## Charts I rely on

<div class="signal-strip">
  <span class="signal-token">BTC price history</span>
  <span class="signal-token">CRYPTOCAP:TOTAL3</span>
  <span class="signal-token">FRED:WALCL</span>
  <span class="signal-token">BLS:UNRATE</span>
  <span class="signal-token">BTC.D ex stables</span>
</div>

## Market-state explainer

<div class="market-aside">
  <p>The core question is simple: is the move structural enough to change positioning, or is it just noise inside the current phase?</p>
</div>

## Review loop

<div class="decision-map">
  <div class="decision-card">
    <strong>Monitor</strong>
    Track BTC structure, breadth, dominance, and macro liquidity in one repeatable surface.
  </div>
  <div class="decision-card">
    <strong>Interpret</strong>
    Decide whether the change is regime-level, confirmation-level, or just local volatility.
  </div>
  <div class="decision-card">
    <strong>Document</strong>
    Turn the read into a market note, watchlist change, or risk comment that can be reviewed later.
  </div>
  <div class="decision-card">
    <strong>Reuse</strong>
    Feed the output back into the cycle playbook and the next market memo instead of starting from zero each week.
  </div>
</div>

## What it improved

- Reduced context switching when reviewing crypto markets.
- Improved consistency in how market-state changes were described.
- Created a cleaner bridge between live monitoring and written market notes.
- Provided the working surface that the cycle playbook could rely on.

## Connected outputs

- [[Portfolio/Projects/Investment Strategy|Market cycle playbook]]
- [[Portfolio/Blog|Research notes]]
- [[Portfolio/Resume|Experience log]]

## Sources

- Bitcoin price history staged through Google Sheets CSV
- CRYPTOCAP market-cap data
- FRED and labor-market data for macro context

## Next iteration

- Add alert thresholds for regime-shift candidates.
- Add standardized snapshot exports for monthly review logs.
