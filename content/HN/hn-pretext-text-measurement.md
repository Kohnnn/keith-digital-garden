---
title: "HN: Pretext – Fast Text Measurement Without DOM Reflow"
date: 2026-03-30
tags: [hn, javascript, webdev, performance, opensource]
---
# HN: Pretext – Fast Text Measurement Without DOM Reflow

Pretext is a new JavaScript/TypeScript library from Cheng Lou (creator of ReasonML) that measures multiline text layout without triggering expensive DOM reflow. It side-steps `getBoundingClientRect` and `offsetHeight` calls—which cause layout recalculation—by implementing its own text measurement using the browser's font engine as ground truth.

The library serves two primary use cases. First, **measuring paragraph height** without DOM access: call `prepare()` once for text/font normalization and measurement, then repeatedly call `layout()` for pure arithmetic height calculations. In benchmarks, `prepare()` runs once at ~19ms for 500 texts, while subsequent `layout()` calls take just ~0.09ms. This enables virtualized lists, dynamic heights, and preventing layout shift without expensive measurements.

Second, **manual line layout**: APIs like `layoutWithLines()` return actual line text for canvas/SVG rendering, while `walkLineRanges()` provides cursor positions without building strings—useful for text reflow around floated elements.

The library handles all languages including emojis and mixed bidirectional text, with proper support for pre-wrap whitespace. Server-side rendering support is planned.

For web developers, Pretext solves a persistent pain point: measuring text that might wrap requires either accepting a hidden DOM element or accepting reflow. The precomputation approach trades one-time setup cost for fast repeated measurements. This is particularly valuable for chat interfaces, code editors, and any UI where dynamic text content affects layout. The zero-dependency design and simple API make it easy to drop into existing projects.
