---
title: Memory Allocation
tags:
  - portfolio
  - blog
  - external
  - interactive
  - systems
  - memory
draft: false
description: >-
  Allocator internals walkthrough from naive malloc/free to fragmentation and
  bookkeeping, with timeline-driven memory visualizations.
created: "2026-03-08"
updated: 2026-03-26
aliases:
  - Portfolio/Stuffs/Memory-Allocation
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
  - interactive-bridge
---

# Memory Allocation

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Long-tail route · systems internals</p>
  <h2>Use this when heap behavior should stop hiding behind the API.</h2>
  <p>Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.</p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/memory-allocation/" target="_blank" rel="noopener noreferrer">Open Memory Allocation</a>
    <a class="kitchen-cta" href="./Load-Balancing">Open systems companion</a>
  </div>
</div>

## At a glance

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Live interactive</span>
    <p>The maintained version lives at the route linked here, with this garden note keeping the embed and editorial framing.</p>
  </div>
  <div>
    <span class="casefile-label">Best companion</span>
    <p>Pair it with [[Load-Balancing]] when you want another systems route where hidden structure determines real performance.</p>
  </div>
  <div>
    <span class="casefile-label">Time and level</span>
    <p>About 10 to 15 minutes. Intermediate. It stays approachable if you treat it as a visual map of fragmentation and bookkeeping.</p>
  </div>
</div>

## Reading path

- Open the live interactive: <https://kohnnn.github.io/interactive-explanation/memory-allocation/>
- Continue through [[Load-Balancing]] or [[Exploring-GPGPU-on-iOS]] when you want nearby compute-and-systems routes
- Move through the local archive via [[Interactive]] or [[Visual Notes]]
