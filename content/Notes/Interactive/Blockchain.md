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
updated: "2026-03-26"
aliases: []
cssclasses:
  - external-canvas-note
  - interactive-bridge
---

# Blockchain

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Core route · cryptography</p>
  <h2>Hashing, chaining, and the tamper cascade.</h2>
  <p>
    This lab turns blockchain mechanics into an editable sandbox. Fill block fields, mine a nonce,
    and watch how altering one block invalidates everything downstream. It builds intuition for
    chained state before moving into signatures and privacy.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/blockchain/" target="_blank" rel="noopener noreferrer">Open Blockchain</a>
    <a class="kitchen-cta" href="./Blockchain-101-Combined-Flow">Open guided route</a>
  </div>
</div>

## At a glance

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
    <span class="casefile-label">Time and level</span>
    <p>About 10 to 15 minutes. Beginner friendly. It is the clearest first stop in the cryptography sequence because the failure mode is visible immediately.</p>
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
- Use [[Notes/Interactive/Blockchain-101-Combined-Flow|Blockchain 101 Combined Flow]] for the cleanest sequence through the rest of the family
- Continue through [[Notes/Interactive/Public-Private-Keys|Public / Private Keys]] when you want signatures and authenticity after chained state
- Continue via [[Interactive]] or [[Visual Notes]]
