---
title: Cameras and Lenses
tags: [portfolio, blog, external, ciechanow, interactive, optics]
draft: false
description: Interactive thin-lens lab for focal length, aperture, and object-distance focus behavior.
created: 2020-12-07
updated: 2026-03-06
aliases: [Portfolio/Stuffs/Cameras-and-Lenses]
cssclasses: [external-canvas-note, note-lab]
---

# Cameras and Lenses

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/cameras-and-lenses/" target="_blank" rel="noopener noreferrer">Cameras and Lenses by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The main view acts like a focus-plane workbench. Change focal length, aperture, and object distance together, then compare how the image plane shifts in shorter and longer lens setups.</p>

<div class="interactive-sim" data-sim-scene="cameras-and-lenses">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Camera lens ray model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lens-focal">focal length</label>
      <input id="lens-focal" data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.65" />
    </div>
    <div class="interactive-sim-control">
      <label for="lens-aperture">aperture scale</label>
      <input id="lens-aperture" data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.7" />
    </div>
    <div class="interactive-sim-control">
      <label for="lens-object">object distance</label>
      <input id="lens-object" data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.8" />
    </div>
    <button data-control="reset" type="button">reset optics</button>
  </div>
</div>

## Compare states

<div class="lab-compare-grid">
  <div class="lab-compare-card">
    <span class="casefile-label">Compare A</span>
    <h3>Wide and close</h3>
    <p>Shorter focal lengths keep more of the scene controlled while shrinking the image distance.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Wide lens comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>focal</label>
          <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="0.45" />
        </div>
        <div class="interactive-sim-control">
          <label>aperture</label>
          <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.45" />
        </div>
        <div class="interactive-sim-control">
          <label>object</label>
          <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="0.48" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
  <div class="lab-compare-card">
    <span class="casefile-label">Compare B</span>
    <h3>Longer and shallow</h3>
    <p>Longer focal lengths push the image plane and make aperture changes feel more dramatic.</p>
    <div class="interactive-sim interactive-sim-secondary" data-sim-scene="cameras-and-lenses">
      <div class="interactive-sim-stage stage-short">
        <canvas class="sim-canvas" aria-label="Telephoto lens comparison"></canvas>
      </div>
      <div class="interactive-sim-controls">
        <div class="interactive-sim-control">
          <label>focal</label>
          <input data-control="focal" type="range" min="0.2" max="1.6" step="0.01" value="1.25" />
        </div>
        <div class="interactive-sim-control">
          <label>aperture</label>
          <input data-control="aperture" type="range" min="0.3" max="1" step="0.01" value="0.86" />
        </div>
        <div class="interactive-sim-control">
          <label>object</label>
          <input data-control="object" type="range" min="0.25" max="1.4" step="0.01" value="1.12" />
        </div>
        <button data-control="reset" type="button">reset compare</button>
      </div>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>Focus is geometry</h3>
    <p>The image sharpens only when the refracted rays land on the sensor plane together.</p>
  </div>
  <div class="observation-card">
    <h3>Aperture affects tolerance</h3>
    <p>Wider apertures make misalignment show up faster, which is why the scene feels shallower.</p>
  </div>
  <div class="observation-card">
    <h3>Focal length changes the game</h3>
    <p>Longer lenses alter both framing and the amount of sensor movement needed for focus.</p>
  </div>
</div>

## Limits

- Thin-lens model only
- No aberration or diffraction model
- Built for geometric optics intuition, not lens design

## Related notes

- [[Lights and Shadows]]
- [[Color Spaces]]
- [[GPS]]
