---
title: GPS
tags:
  - portfolio
  - blog
  - external
  - interactive
  - satellites
draft: false
description: >-
  End-to-end GPS explainer including trilateration, clock bias, orbital motion,
  satellite visibility, and signal propagation constraints.
created: "2022-01-18"
updated: 2026-03-26
aliases:
  - Portfolio/Stuffs/GPS
cssclasses:
  - external-canvas-note
  - note-lab
  - module-lab
  - interactive-bridge
---

# GPS

<div class="interactive-bridge-hero">
  <p class="kitchen-eyebrow">Core route · invisible systems</p>
  <h2>Timing error, trilateration, and orbital geometry in one mental model.</h2>
  <p>
    GPS feels like magic until you can see the timing problem underneath it. This note connects
    satellites, clock bias, line-of-sight geometry, and signal travel time so the system reads like
    engineering instead of mystery.
  </p>
  <div class="kitchen-cta-row">
    <a class="kitchen-cta primary" href="https://kohnnn.github.io/interactive-explanation/gps/" target="_blank" rel="noopener noreferrer">Open GPS</a>
    <a class="kitchen-cta" href="./Mechanical-Watch">Open timing companion</a>
  </div>
</div>

## At a glance

<div class="casefile-summary">
  <div>
    <span class="casefile-label">Live interactive</span>
    <p>The maintained version lives at the route linked here, with this garden note keeping the embed and editorial framing.</p>
  </div>
  <div>
    <span class="casefile-label">Why this matters</span>
    <p>Positioning systems usually get reduced to a map dot. This shows the hidden timing and geometry that make the map dot possible.</p>
  </div>
  <div>
    <span class="casefile-label">What to try first</span>
    <p>Start with trilateration, then add clock bias and satellite motion. The big jump happens when you see how a tiny timing error turns into a large positioning error.</p>
  </div>
  <div>
    <span class="casefile-label">Time and level</span>
    <p>About 12 to 18 minutes. Intermediate. Best if you want one invisible system made concrete through timing and geometry.</p>
  </div>
</div>

## Embed

<div class="external-canvas-wrap">
  <iframe
    src="https://kohnnn.github.io/interactive-explanation/gps/"
    title="GPS interactive"
    loading="lazy"
    allow="fullscreen"
    referrerpolicy="no-referrer"
  ></iframe>
</div>

## Reading path

- Open the live interactive: <https://kohnnn.github.io/interactive-explanation/gps/>
- Continue through [[Visual Notes]] for more geometry and systems explainers
- Pair it with [[Mechanical-Watch]] if you want another precision-timing system from a completely different domain
