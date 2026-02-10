---
title: all in on server side sqlite
tags:
  - tech-journal
  - database
  - infrastructure
  - software
  - 2022
keywords:
  - sqlite
  - server
  - ops
  - durability
  - scale
draft: true
description: An essay argued for SQLite as a server-side default.
created: 2022-05-09
updated: 2025-01-24
note_id: 220509TJ01
cssclasses:
  - tech-journal
---

# all in on server side sqlite

## scene cut
A writeup argued for SQLite as a server-side default, using Litestream as the durability layer ([source](https://fly.io/blog/all-in-on-sqlite-litestream/)). The piece framed simplicity as an operational advantage.

## signal braid
- Simpler databases reduce operational overhead.
- Durability can be added without heavy infrastructure.
- Scale choices should follow actual demand.
- The simplicity argument aligns with [[use one big server]].

## single-line take
Most stacks should earn the right to add complexity.

## link hop
This links to [[use one big server]] and [[State of HTTP in 2022]] and [[I Wrote a SQL Engine in Python]].

## open loop
Which workloads truly need distributed databases on day one?

# all in on server side sqlite