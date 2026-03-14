---
title: VNIBB
tags: [portfolio, project, product, finance]
draft: false
description: Flagship finance-product casefile for a Vietnam-first analytics platform.
created: 2026-03-06
updated: 2026-03-13
cssclasses: [portfolio-page, casefile-page]
---

# VNIBB

Flagship casefile for the Vietnam-market product layer that grew out of the same dashboard, screening, and research habits shown elsewhere in this portfolio.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Product</span>
    <strong>Vietnam-first market surface</strong>
    <p>Built for local investors instead of forcing a generic US-market template onto Vietnamese workflows.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">System</span>
    <strong>Multi-repo architecture</strong>
    <p>Core product, web app, API, and widget layer are split cleanly so the platform can expand without becoming brittle.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Surface</span>
    <strong>40-plus widgets</strong>
    <p>Reusable analytics components for comparison, navigation, and research-heavy market review.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Product designer, frontend builder, and research-surface architect.</p>
  </div>
  <div>
    <span class="casefile-label">Product thesis</span>
    <p>A better Vietnam-market interface should feel like a research tool, not a broker page with extra widgets.</p>
  </div>
  <div>
    <span class="casefile-label">Live surface</span>
    <p><a href="https://vnibb-web.vercel.app/" target="_blank" rel="noopener noreferrer">vnibb-web.vercel.app</a></p>
  </div>
</div>

## Why this project exists

- Earlier finance-dashboard and screening work made the problem obvious: local-market analysis was still fragmented across tabs, spreadsheets, and weak retail interfaces.
- Vietnamese investors and analysts need faster comparison, clearer navigation, and surfaces built around how local-market research actually happens.
- VNIBB is the product answer: a Vietnam-first platform built from the same instinct that drove the earlier dashboard and casefile work.

## Product arc

<div class="decision-map">
  <div class="decision-card">
    <strong>Legacy starting point</strong>
    Earlier dashboard and screening work proved the need for better investor-facing surfaces.
  </div>
  <div class="decision-card">
    <strong>VNIBB core</strong>
    The product shell defines positioning, user flow, and how the modules fit into one platform.
  </div>
  <div class="decision-card">
    <strong>Data and service layer</strong>
    The API separates data access and backend logic from the interface so the surface can evolve cleanly.
  </div>
  <div class="decision-card">
    <strong>Widget system</strong>
    Reusable components make it possible to build new analytics views without rebuilding the whole interface.
  </div>
</div>

## What shipped

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Widget library</div>
    <p>40-plus widgets designed for Vietnamese market workflows and reusable analytics surfaces.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Screener layer</div>
    <p>Equity filtering and comparison flow that reflects how local investors actually shortlist ideas.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Analytics layer</div>
    <p>Charts and tables built for fast interpretation rather than raw data dumping.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">AI-ready direction</div>
    <p>Architecture and navigation designed so future AI-assisted research can sit on top of the same product spine.</p>
  </div>
</div>

## Repo cluster

<div class="repo-grid">
  <div class="repo-card">
    <span class="casefile-label">Core</span>
    <h3><a href="https://github.com/Kohnnn/vnibb" target="_blank" rel="noopener noreferrer">vnibb</a></h3>
    <p>Product shell, direction, and the overall integration surface.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Frontend</span>
    <h3><a href="https://github.com/Kohnnn/vnibb-web" target="_blank" rel="noopener noreferrer">vnibb-web</a></h3>
    <p>User-facing analytics experience, navigation, and interface logic.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Backend</span>
    <h3><a href="https://github.com/Kohnnn/vnibb-api" target="_blank" rel="noopener noreferrer">vnibb-api</a></h3>
    <p>Data services, API wiring, and backend integration.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Components</span>
    <h3><a href="https://github.com/Kohnnn/vnibb-widgets" target="_blank" rel="noopener noreferrer">vnibb-widgets</a></h3>
    <p>Reusable chart and analytics widgets for finance surfaces that need to scale.</p>
  </div>
</div>

## Why it matters in this portfolio

<div class="portfolio-matrix">
  <div class="matrix-card">
    <strong>Finance product design</strong>
    <p>Moves the portfolio from research notes and dashboards into an investor-facing product with its own logic.</p>
  </div>
  <div class="matrix-card">
    <strong>Vietnam-market positioning</strong>
    <p>Shows a concrete commitment to local-market needs rather than repackaging imported market conventions.</p>
  </div>
  <div class="matrix-card">
    <strong>System thinking</strong>
    <p>Proves the build is architected as a reusable platform, not as a single-page demo.</p>
  </div>
  <div class="matrix-card">
    <strong>Continuation of the earlier arc</strong>
    <p>Connects legacy dashboard and screening instincts to a more serious product direction.</p>
  </div>
</div>

## Next iteration

- Add stronger public screenshots and user-flow documentation.
- Harden API and widget documentation for external review.
- Connect the strongest analytics surfaces to the rest of the research-note workflow.
