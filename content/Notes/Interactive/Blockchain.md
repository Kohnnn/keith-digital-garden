---
title: Blockchain
tags:
  - portfolio
  - interactive
  - curiosity
  - cryptography
draft: false
description: Interactive blockchain explainer with editable block fields, mining, and tamper cascades.
created: "2026-03-24"
updated: "2026-03-24"
aliases: []
cssclasses:
  - external-canvas-note
  - interactive-bridge
---

# Blockchain

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Curiosity shelf · cryptography</p>
  <h2>Hashing, chaining, and the tamper cascade.</h2>
  <p>
    This lab turns blockchain mechanics into an editable sandbox. Fill block fields, mine a nonce,
    and watch how altering one block invalidates everything downstream. It builds intuition for
    chained state before moving into signatures and privacy.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/blockchain/" target="_blank" rel="noopener noreferrer">Open Blockchain</a>
  </div>
</div>

## What you'll notice

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Why this matters</span>
    <p>Blockchain is often explained with jargon. This makes the core mechanic — chained hashes and tamper propagation — something you can see and break yourself.</p>
  </div>
  <div>
    <span class="casefile-label">What to try first</span>
    <p>Mine a block, then tweak a field in an earlier block and watch the cascade fail. Once that feels obvious, open the distributed view to see how consensus fits into the same model.</p>
  </div>
  <div>
    <span class="casefile-label">Where it lives</span>
    <p>The maintained version lives at the route linked here, while this garden note keeps the embed, context, and backlinks together.</p>
  </div>
</div>

## Embed

<div class="external-canvas-wrap">
  <iframe
    src="https://kohnnn.github.io/interactive-explanation/blockchain/"
    title="Blockchain interactive"
    loading="lazy"
    allow="fullscreen"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

## Reading path

- Open the live interactive: <https://kohnnn.github.io/interactive-explanation/blockchain/>
- Continue via [[Interactive]] or [[Visual Notes]]
