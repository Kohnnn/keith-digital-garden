---
title: AI Agents Development
tags: [portfolio, project, ai]
draft: false
description: Case study on local AI workflows for research automation and analyst support.
created: 2026-01-30
updated: 2026-03-13
cssclasses: [portfolio-page, casefile-page]
---

# AI Agents Development

Automation casefile for turning research intake, monitoring, retrieval, and publishing into faster analyst operations with explicit human review.

<div class="proof-strip">
  <div class="proof-card">
    <span class="proof-label">Origin</span>
    <strong>AI as a productivity multiplier</strong>
    <p>The work started from using AI heavily in daily tasks, then pushing toward more reliable research workflows.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Stack</span>
    <strong>Local RAG and workflow tooling</strong>
    <p>Ollama, Postgres or Supabase, Docker, browser automation, and webhooks tied into one analyst-support stack.</p>
  </div>
  <div class="proof-card">
    <span class="proof-label">Guardrail</span>
    <strong>Human review stays in the loop</strong>
    <p>The point is better throughput and cleaner monitoring, not blind autonomy for investment-facing work.</p>
  </div>
</div>

## Summary

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Role</span>
    <p>Workflow designer, integrator, and evaluator for research-support systems.</p>
  </div>
  <div>
    <span class="casefile-label">Use cases</span>
    <p>Monitoring, retrieval, drafting, publishing, and local knowledge-base support.</p>
  </div>
  <div>
    <span class="casefile-label">Focus</span>
    <p>Reduce research drag and context switching while keeping confidence and failure modes visible.</p>
  </div>
</div>

## Why this started

- AI became a real productivity multiplier in daily work, especially for coding, drafting, and structuring messy tasks.
- The first lesson was that generic chatbots were useful but not persistent or contextual enough for recurring professional workflows.
- The next step was local and semi-local systems: retrieval, monitoring, and task-specific agents that fit an analyst desk better than one general chat window.

## Public versus local AI

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Public AI agents</div>
    <p>Easy to access, lightweight, and usable without local compute, but often constrained by older models and paywalled features.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Local RAG stack</div>
    <p>Open-source models, local knowledge bases, and no per-call token cost, with better control over prompts and retrieval.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Tradeoff</div>
    <p>Local systems require setup skill and hardware, but they support far more tailored research workflows.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Practical outcome</div>
    <p>The useful middle ground is targeted automation with a human gate, not a fantasy of full self-running investment research.</p>
  </div>
</div>

## Local workflow stack

<div class="decision-map">
  <div class="decision-card">
    <strong>Ingest</strong>
    Pull notes, websites, screenshots, and structured data into a consistent collection layer.
  </div>
  <div class="decision-card">
    <strong>Retrieve</strong>
    Use vector storage and database-backed context to fetch the smallest useful slice for the task.
  </div>
  <div class="decision-card">
    <strong>Draft or monitor</strong>
    Generate summaries, detect page changes, or scaffold memo-ready output with task-specific prompts.
  </div>
  <div class="decision-card">
    <strong>Review and publish</strong>
    Keep a human checkpoint before anything decision-relevant leaves the workflow.
  </div>
</div>

## Repo cluster

<div class="repo-grid">
  <div class="repo-card">
    <span class="casefile-label">Local stack</span>
    <h3><a href="https://github.com/Kohnnn/deepseek-local-ai-starter-kit" target="_blank" rel="noopener noreferrer">deepseek-local-ai-starter-kit</a></h3>
    <p>Local-first base for model serving, retrieval, and self-hosted AI experiments, updated around newer open models.</p>
  </div>
  <div class="repo-card">
    <span class="casefile-label">Monitoring</span>
    <h3><a href="https://github.com/Kohnnn/gemini-vision-AI-website-monitor" target="_blank" rel="noopener noreferrer">gemini-vision-AI-website-monitor</a></h3>
    <p>Website and visual-change monitoring workflow for recurring corporate or coverage checks.</p>
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

## Research workflow applications

<div class="signal-grid">
  <div class="signal-card">
    <div class="signal-label">Monitoring</div>
    <p>Browser and screenshot workflows for recurring website or company-update checks.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Retrieval</div>
    <p>Local-first context retrieval from notes, docs, and structured databases.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Drafting</div>
    <p>Memo scaffolds and first-pass summaries that reduce blank-page time without replacing judgment.</p>
  </div>
  <div class="signal-card">
    <div class="signal-label">Publishing</div>
    <p>Workflow support for moving completed notes into cleaner public or shared surfaces.</p>
  </div>
</div>

## Operating constraints

- High-end local models depend heavily on GPU VRAM and setup discipline.
- Retrieval quality, confidence, and failure visibility matter more than raw prompt cleverness.
- Anything investment-facing still needs explicit human review before it is trusted.

## Outcomes

- Lower context-switching overhead during research-heavy periods.
- Faster first-pass synthesis on recurring market or company topics.
- Cleaner pipeline from monitoring to notes to public documentation.

## See also

- [[Portfolio/Projects/Tech Docs|Tech docs index]]
- [[Portfolio/Projects/Investment Strategy|Market cycle playbook]]
