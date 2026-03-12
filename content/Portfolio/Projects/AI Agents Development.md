---
title: AI Agents Development
tags: [portfolio, project, ai]
draft: false
description: Case study on AI-agent workflows for research automation.
created: 2026-01-30
updated: 2026-03-12
cssclasses: [portfolio-page, casefile-page]
---

# AI Agents Development

Automation casefile for turning research intake, monitoring, and retrieval into faster analyst operations.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Workflow</span>
    <strong>Research ops over novelty</strong>
    <p>Designed to reduce analyst drag, not to chase full autonomy for its own sake.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Guardrail</span>
    <strong>Human review stays in the loop</strong>
    <p>Every investment-facing output keeps an explicit gate before it leaves the system.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Surface</span>
    <strong>Retrieval, monitoring, publishing</strong>
    <p>The stack is useful because it connects recurring tasks instead of solving a single isolated prompt.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Workflow designer, integrator, and evaluator</p>
  </div>
  <div>
    <span class="casefile-label">Stack</span>
    <p>Ollama, Supabase/Postgres, n8n, Python, browser automation, webhook tooling</p>
  </div>
  <div>
    <span class="casefile-label">Focus</span>
    <p>Research ingestion, retrieval, monitoring, and memo acceleration</p>
  </div>
</div>

## Problem

- Research tasks were fragmented across tabs, spreadsheets, browser checks, and copy-paste summaries.
- Monitoring large universes and capturing deltas for weekly reviews cost more time than the reasoning itself.
- The goal was not full autonomy. It was better analyst throughput with explicit review points.

## Pipeline

<div class="decision-map">
  <div class="decision-card">
    <strong>Ingest</strong>
    Pull notes, websites, screenshots, and structured datasets into a consistent collection layer.
  </div>
  <div class="decision-card">
    <strong>Retrieve</strong>
    Use local RAG or direct database queries to fetch the smallest useful context slice.
  </div>
  <div class="decision-card">
    <strong>Draft</strong>
    Generate summaries, monitor changes, or prep memo scaffolds with task-specific prompts.
  </div>
  <div class="decision-card">
    <strong>Review</strong>
    Keep a human gate before anything investment-facing leaves the system.
  </div>
</div>

## Repo cluster

<div class="repo-grid">
  <div class="repo-card">
    <span class="casefile-label">Local stack</span>
    <h3><a href="https://github.com/Kohnnn/deepseek-local-ai-starter-kit" target="_blank" rel="noopener noreferrer">deepseek-local-ai-starter-kit</a></h3>
    <p>Local-first base for model serving, retrieval, and experiment setup.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Monitoring</span>
    <h3><a href="https://github.com/Kohnnn/gemini-vision-AI-website-monitor" target="_blank" rel="noopener noreferrer">gemini-vision-AI-website-monitor</a></h3>
    <p>Website and visual-change monitoring workflow for recurring research coverage.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Retrieval</span>
    <h3><a href="https://github.com/Kohnnn/n8n-template-and-documentation-for-RAG" target="_blank" rel="noopener noreferrer">n8n-template-and-documentation-for-RAG</a></h3>
    <p>Reusable retrieval and automation templates for research support tasks.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Publishing</span>
    <h3><a href="https://github.com/Kohnnn/obsidian-post-webhook" target="_blank" rel="noopener noreferrer">obsidian-post-webhook</a></h3>
    <p>Bridge between working notes and public or shared research surfaces.</p>
  </div>
</div>

## Workflow cards

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Monitoring</div>
    <p>Browser and screenshot workflows for website or company-update monitoring.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Retrieval</div>
    <p>Local-first retrieval stack for notes, docs, and structured prompts.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Publishing</div>
    <p>Webhook bridge between working notes and public output surfaces.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Ops</div>
    <p>Reusable n8n templates and task-specific prompt structures.</p>
  </div>
</div>

## Operating constraints

<div class="decision-map">
  <div class="decision-card">
    <strong>Human gate</strong>
    Nothing investment-facing should leave the system without review.
  </div>
  <div class="decision-card">
    <strong>Small context</strong>
    Retrieval should fetch the smallest useful slice, not a document dump.
  </div>
  <div class="decision-card">
    <strong>Observable failures</strong>
    Drift, low confidence, and retrieval misses need to be visible.
  </div>
  <div class="decision-card">
    <strong>Reusable outputs</strong>
    Drafts should land in notes, memos, or dashboards that fit the rest of the workflow.
  </div>
</div>

## Outcomes

- Lower context-switching overhead during research-heavy weeks
- Faster first-pass synthesis on recurring market topics
- Better consistency in memo structure and monitoring coverage
- Cleaner separation between drafting help and final human judgment

## Next iteration

- Add benchmark harnesses for retrieval precision and summary drift.
- Add confidence tags and failure-mode logging.
- Tie the strongest workflows directly into the market memo pipeline.

## See also

- [[Portfolio/Projects/Tech Docs|Tech docs index]]
- [[Portfolio/Projects/Investment Strategy|Market cycle playbook]]
