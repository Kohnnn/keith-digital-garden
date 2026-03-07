---
title: Sound
tags: [portfolio, blog, external, ciechanow, interactive, waves]
draft: false
description: Interactive damped-wave sandbox for frequency, amplitude, and envelope decay behavior.
created: 2022-10-18
updated: 2026-03-07
aliases: [Portfolio/Stuffs/Sound]
cssclasses: [external-canvas-note, note-lab]
---

# Sound

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/sound/" target="_blank" rel="noopener noreferrer">Sound by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Sound becomes legible once you stop treating the waveform as decoration. Frequency controls density, amplitude controls vertical energy, and damping reshapes the whole envelope. The point of the smaller comparisons below is to make those three jobs easier to separate.</p>

<div class="interactive-sim" data-sim-scene="sound">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Sound wave simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-frequency">frequency</label>
      <input id="sound-frequency" data-control="frequency" type="range" min="0.4" max="8" step="0.05" value="2.4" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-amplitude">amplitude</label>
      <input id="sound-amplitude" data-control="amplitude" type="range" min="0.1" max="1" step="0.01" value="0.62" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-damping">damping</label>
      <input id="sound-damping" data-control="damping" type="range" min="0" max="5" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset wave</button>
  </div>
</div>

## Regime compare

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Low-frequency body</h3>
    <p>Slower oscillation lets the envelope dominate your reading of the shape.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="sound">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Low-frequency sound comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>frequency</label>
          <input data-control="frequency" type="range" min="0.4" max="8" step="0.05" value="0.9" />
        </div>
        <div class="interactive-sim-control">
          <label>amplitude</label>
          <input data-control="amplitude" type="range" min="0.1" max="1" step="0.01" value="0.72" />
        </div>
        <div class="interactive-sim-control">
          <label>damping</label>
          <input data-control="damping" type="range" min="0" max="5" step="0.05" value="0.45" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Dense oscillation</h3>
    <p>Higher frequency compresses more cycles into the same space and makes local wiggle more important.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="sound">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="High-frequency sound comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>frequency</label>
          <input data-control="frequency" type="range" min="0.4" max="8" step="0.05" value="6.1" />
        </div>
        <div class="interactive-sim-control">
          <label>amplitude</label>
          <input data-control="amplitude" type="range" min="0.1" max="1" step="0.01" value="0.58" />
        </div>
        <div class="interactive-sim-control">
          <label>damping</label>
          <input data-control="damping" type="range" min="0" max="5" step="0.05" value="0.45" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare C</span>
    <h3>Heavy damping</h3>
    <p>Strong damping erases the far side of the signal and turns the waveform into a quickly dying event.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="sound">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Damped sound comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>frequency</label>
          <input data-control="frequency" type="range" min="0.4" max="8" step="0.05" value="2.8" />
        </div>
        <div class="interactive-sim-control">
          <label>amplitude</label>
          <input data-control="amplitude" type="range" min="0.1" max="1" step="0.01" value="0.74" />
        </div>
        <div class="interactive-sim-control">
          <label>damping</label>
          <input data-control="damping" type="range" min="0" max="5" step="0.05" value="3.3" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

<div class="analysis-panel">
  <span class="casefile-label">Analysis</span>
  <p>The original article is strong because it keeps translating an invisible phenomenon into a visible one. The useful move here is to read damping as a shape control, not a small tweak. Frequency changes local texture. Amplitude changes scale. Damping changes the fate of the whole waveform.</p>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Frequency packs information</h3>
    <p>More cycles in the same width make the signal feel sharper even before you think about loudness.</p>
  </div>
  <div class="observation-card">
    <h3>Amplitude is local energy</h3>
    <p>Vertical scale changes the strength of the event, but it does not decide how long the event survives.</p>
  </div>
  <div class="observation-card">
    <h3>Damping is narrative</h3>
    <p>The envelope tells you whether the wave is sustaining, decaying, or disappearing almost immediately.</p>
  </div>
</div>

## Try this reading sequence

<ol class="experiment-list">
  <li>Keep damping low and sweep frequency. Train your eye to separate density from intensity.</li>
  <li>Freeze frequency at a middle value, then move amplitude and damping independently. Notice which one changes the story of the waveform.</li>
  <li>Return to the default view and use the compare states as anchors so the main sim feels less abstract.</li>
</ol>

## Limits

- No resonance, reflection, or material model
- Built to expose waveform morphology, not full acoustics
- The second line is a teaching aid, not a physically complete harmonic system

## Related Notes

- [[Exploring GPGPU on iOS]]
- [[Color Spaces]]
- [[Tesseract]]
