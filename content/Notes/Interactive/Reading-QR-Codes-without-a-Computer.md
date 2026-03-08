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
  Stepwise QR decoding tutorial that walks users from visible modules to payload
  extraction without relying on automatic scanner black boxes.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Reading-QR-Codes-without-a-Computer
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Reading QR codes without a computer!

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://qr.blinry.org/" target="_blank" rel="noopener noreferrer">Reading QR codes without a computer! by blinry</a></p>
</div>

<p class="note-lede">Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.</p>

<div class="interactive-article" data-interactive-article="reading-qr-codes-without-a-computer">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>QR structure map</h2>
    <p>Highlights finder, timing, alignment, and data regions so users can see the physical layout of a QR symbol.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation, click/tap. <strong>Response:</strong> selected region is highlighted and explained in context</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="reading-qr-codes-without-a-computer:module-01" data-sim-module="reading-qr-codes-without-a-computer:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="QR structure map interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-01-scale">scale</label>
      <input id="reading-qr-codes-without-a-computer-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-01-rotation">rotation</label>
      <input id="reading-qr-codes-without-a-computer-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · algorithm walkthrough module</span>
    <h2>Mask and format decoding panel</h2>
    <p>Explains how format bits encode error correction and mask patterns, then applies mask logic.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step navigation, toggle. <strong>Response:</strong> module grid updates from masked to unmasked state</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="reading-qr-codes-without-a-computer:module-02" data-sim-module="reading-qr-codes-without-a-computer:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mask and format decoding panel interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-02-scale">scale</label>
      <input id="reading-qr-codes-without-a-computer-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-02-rotation">rotation</label>
      <input id="reading-qr-codes-without-a-computer-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Data bit extraction path</h2>
    <p>Shows traversal order through data modules and conversion from modules to bitstream.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> playback controls, step buttons. <strong>Response:</strong> current read position advances and extracted bitstream grows</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="reading-qr-codes-without-a-computer:module-03" data-sim-module="reading-qr-codes-without-a-computer:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Data bit extraction path interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-03-scale">scale</label>
      <input id="reading-qr-codes-without-a-computer-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-03-rotation">rotation</label>
      <input id="reading-qr-codes-without-a-computer-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · algorithm walkthrough module</span>
    <h2>Error-correction walkthrough</h2>
    <p>Demonstrates Reed-Solomon style correction conceptually for damaged or uncertain modules.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step controls. <strong>Response:</strong> corrected bytes and confidence indicators update per correction step</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="reading-qr-codes-without-a-computer:module-04" data-sim-module="reading-qr-codes-without-a-computer:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Error-correction walkthrough interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-04-scale">scale</label>
      <input id="reading-qr-codes-without-a-computer-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-04-rotation">rotation</label>
      <input id="reading-qr-codes-without-a-computer-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Payload reconstruction panel</h2>
    <p>Maps decoded bytes to text/message content so users can verify final decode result manually.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> step controls. <strong>Response:</strong> decoded message output updates as more blocks are processed</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="reading-qr-codes-without-a-computer:module-05" data-sim-module="reading-qr-codes-without-a-computer:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Payload reconstruction panel interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-05-scale">scale</label>
      <input id="reading-qr-codes-without-a-computer-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="reading-qr-codes-without-a-computer-module-05-rotation">rotation</label>
      <input id="reading-qr-codes-without-a-computer-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>
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
    <p>Reading QR codes without a computer! works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Exposing NSDictionary]]
- [[Color Spaces]]
- [[Immersive Linear Algebra]]
