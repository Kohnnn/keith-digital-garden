---
title: Reading QR codes without a computer!
tags:
  - portfolio
  - blog
  - external
  - interactive
  - computation
  - visualization
draft: false
description: >-
  Interactive QR decoding notebook for masks, modules, and error-correction
  intuition.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Reading-QR-Codes-without-a-Computer
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Reading QR codes without a computer!

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://qr.blinry.org/" target="_blank" rel="noopener noreferrer">Reading QR codes without a computer! by blinry</a></p>
</div>

<p class="note-lede">Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.</p>

<div class="interactive-article" data-interactive-article="reading-qr-codes-without-a-computer">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="reading-qr-codes-without-a-computer" data-sync-group="reading-qr-codes-without-a-computer-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="QR decoding grid"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-mask">mask pattern</label>
      <input id="reading-qr-codes-without-a-computer-mask" data-control="mask" type="range" min="0" max="7" step="1" value="3" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-noise">noise</label>
      <input id="reading-qr-codes-without-a-computer-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.08" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-scan">scan line</label>
      <input id="reading-qr-codes-without-a-computer-scan" data-control="scan" type="range" min="0" max="20" step="1" value="10" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="reading-qr-codes-without-a-computer">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="reading-qr-codes-without-a-computer" data-step-preset="module-01" data-sync-group="reading-qr-codes-without-a-computer-main">
      <span class="casefile-label">Module 01</span>
      <h2>QR structure map</h2>
      <p>Highlights finder, timing, alignment, and data regions so users can see the physical layout of a QR symbol.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation, click/tap. <strong>Response:</strong> selected region is highlighted and explained in context</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="reading-qr-codes-without-a-computer" data-step-preset="module-02" data-sync-group="reading-qr-codes-without-a-computer-main">
      <span class="casefile-label">Module 02</span>
      <h2>Mask and format decoding panel</h2>
      <p>Explains how format bits encode error correction and mask patterns, then applies mask logic.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step navigation, toggle. <strong>Response:</strong> module grid updates from masked to unmasked state</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="reading-qr-codes-without-a-computer" data-step-preset="module-03" data-sync-group="reading-qr-codes-without-a-computer-main">
      <span class="casefile-label">Module 03</span>
      <h2>Data bit extraction path</h2>
      <p>Shows traversal order through data modules and conversion from modules to bitstream.</p>
      <p class="story-step-meta"><strong>Controls:</strong> playback controls, step buttons. <strong>Response:</strong> current read position advances and extracted bitstream grows</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="reading-qr-codes-without-a-computer" data-step-preset="module-04" data-sync-group="reading-qr-codes-without-a-computer-main">
      <span class="casefile-label">Module 04</span>
      <h2>Error-correction walkthrough</h2>
      <p>Demonstrates Reed-Solomon style correction conceptually for damaged or uncertain modules.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step controls. <strong>Response:</strong> corrected bytes and confidence indicators update per correction step</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="reading-qr-codes-without-a-computer" data-step-preset="module-05" data-sync-group="reading-qr-codes-without-a-computer-main">
      <span class="casefile-label">Module 05</span>
      <h2>Payload reconstruction panel</h2>
      <p>Maps decoded bytes to text/message content so users can verify final decode result manually.</p>
      <p class="story-step-meta"><strong>Controls:</strong> step controls. <strong>Response:</strong> decoded message output updates as more blocks are processed</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Reading QR codes without a computer! article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Exposing NSDictionary]]
- [[Color Spaces]]
- [[Immersive Linear Algebra]]
