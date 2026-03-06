---
title: Sound
tags: [portfolio, blog, external, ciechanow, interactive, waves]
draft: false
description: Interactive damped-wave sandbox for frequency, amplitude, and envelope decay behavior.
created: 2022-10-18
updated: 2026-02-24
aliases: [Portfolio/Stuffs/Sound]
cssclasses: [external-canvas-note, note-lab]
---

# Sound

> [!info] Source
> Original article: [Sound](https://ciechanow.ski/sound/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

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

## Session 1: Intuition

Sound becomes easier to read when we separate three levers: how quickly a wave oscillates, how tall it is, and how fast it fades through a medium. This page turns those ideas into controls so you can feel cause and effect directly.

## Session 2: Model

The simulation draws a damped sinusoid and a second phase-shifted component. The first line represents a main signal; the second line acts as a companion harmonic. Damping is implemented as an exponential envelope so energy falls off with distance.

## Session 3: Control Lab

Start with damping near zero and sweep frequency from low to high. Then raise damping and watch the right side collapse while the left side remains energetic. Finally push amplitude up and compare how visual energy scales relative to frequency changes.

## Session 4: What to Observe

At fixed damping, frequency mostly changes density of oscillation. At fixed frequency, amplitude changes vertical energy. Damping is the strongest shape control because it changes the whole envelope rather than local wiggles.

## Session 5: Limits and Simplifications

This is a teaching model, not an acoustic solver. It does not simulate pressure coupling, boundaries, or material resonance. The goal is interpretability: clear sliders tied to clear wave morphology.

## Session 6: References

- Primary inspiration: [Sound](https://ciechanow.ski/sound/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into damped-wave morphology with repeatable presets for comparison and testing.

## Why this matters

Wave controls map directly to audio synthesis, signal processing, and visualization work. Separating frequency, amplitude, and damping makes waveform behavior easier to predict.

## Try these experiments

1. Hold amplitude steady and sweep frequency from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep amplitude while keeping frequency fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Exploring GPGPU on iOS]]
- [[Color Spaces]]
- [[Tesseract]]
