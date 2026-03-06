---
title: Crypto Dashboard
tags: [portfolio, project, crypto, dashboard]
draft: false
description: Case study on cycle-aware crypto dashboards and signal monitoring.
created: 2026-01-30
updated: 2026-03-06
---

# Crypto Dashboard

A dashboard suite for tracking crypto cycle context, liquidity pressure, and allocation-relevant signals.

## problem

- Raw market data was available, but signal interpretation was scattered and slow.
- Needed one place to compare cycle state, breadth, and macro pressure.

## approach

- Build one dashboard layer for structural context and one sandbox layer for quick hypothesis checks.
- Keep indicators interpretable and avoid indicator overload.

## Bitcoin performance

- Log-scale price history with halving markers
- Year to date ROI by asset
- Post-halving ROI curves

## market cap view

- Looker Studio dashboard for market cap structure

## chart sandbox

- CRYPTOCAP:TOTAL3
- FRED:WALCL
- BLS:UNRATE and DOL:USIJC
- BTC dominance vs total (ex stablecoins)

## data source

- Bitcoin price CSV (Google Sheets)

## outcomes

- Faster weekly cycle reads and cleaner transition detection.
- Better separation between structural trend and short-term noise.

## next iteration

- Add alerting thresholds for regime-shift candidates.
- Add a standardized monthly dashboard snapshot for review logs.
