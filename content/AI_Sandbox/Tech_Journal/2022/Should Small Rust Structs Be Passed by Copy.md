---
title: should small rust structs be passed by copy
tags:
  - tech-journal
  - rust
  - performance
  - systems
  - 2022
keywords:
  - rust
  - copy
  - borrow
  - perf
  - structs
draft: true
description: A post clarified when copy beats borrow in Rust.
created: 2022-12-31
updated: 2025-04-25
note_id: 221231TJ13
cssclasses:
  - tech-journal
---

# should small rust structs be passed by copy

## context shard
A Rust performance note explained when passing small structs by copy is faster than borrowing ([source](https://www.forrestthewoods.com/blog/should-small-rust-structs-be-passed-by-copy-or-by-borrow/)). It reframed intuition about ownership and performance.

## signal stack
- Rust performance requires empirical thinking.
- Copy can be cheaper than references in tight loops.
- ABI and optimization details matter.
- The low-level mindset echoes [[CPU Branch Prediction Evolution]].

## take line
Performance intuition is unreliable without measurements.

## link trail
This links to [[CPU Branch Prediction Evolution]] and [[I Wrote a SQL Engine in Python]] and [[Why I'm Still Using Python]].

## open loop
Which performance assumptions are we still carrying from other languages?

#
