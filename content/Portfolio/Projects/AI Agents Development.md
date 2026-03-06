---
title: AI Agents Development
tags: [portfolio, project, ai]
draft: false
description: Case study on AI-agent workflows for research automation.
created: 2026-01-30
updated: 2026-03-06
---

# AI Agents Development

A practical system for turning repetitive research operations into semi-automated agent workflows.

## problem

- Research workflows were fragmented across tabs, files, and manual copy/paste.
- Monitoring large universes and summarizing deltas consumed too much analyst time.

## approach

- Use public agents for fast drafting and exploration.
- Use local RAG stack for repeatable retrieval, version control, and private workflows.
- Keep a human-in-the-loop review step before any investment-facing output.

## stack

- Ollama + open-source models
- Vector store via Postgres/Supabase
- Dockerized local services
- Webhook/FastAPI inference endpoints

## workflow design

- Ingestion -> chunking -> embedding -> retrieval
- Prompt templates by task type (screening, update memo, risk summary)
- Structured outputs to reduce hallucination and improve scan speed

## outcomes

- Faster synthesis cycles on recurring topics.
- Better consistency in memo structure and coverage quality.
- Lower context-switching overhead during research-heavy weeks.

## repo

https://github.com/Kohnnn/deepseek-local-ai-starter-kit

## next iteration

- Add benchmark harness for retrieval accuracy and summary drift.
- Add confidence tagging on generated outputs.

## see also

- [[Portfolio/Projects/Tech Docs|Tech docs index]]
- [[Portfolio/Projects/Investment Strategy|Market cycle playbook]]
