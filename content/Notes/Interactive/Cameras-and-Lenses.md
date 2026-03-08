---
title: Cameras and Lenses
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - optics
draft: false
description: >-
  Interactive thin-lens lab for focal length, aperture, and object-distance
  focus behavior.
created: "2020-12-07"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Cameras-and-Lenses
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Cameras and Lenses

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/cameras-and-lenses/" target="_blank" rel="noopener noreferrer">Cameras and Lenses by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.</p>

<div class="interactive-article" data-interactive-article="cameras-and-lenses">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="cameras-and-lenses-main" data-sim-scene="cameras-and-lenses">
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
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="cameras-and-lenses">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="cameras-and-lenses" data-step-preset="module-01" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 01</span>
      <h2>Cameras and Lenses</h2>
      <p>Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="cameras-and-lenses" data-step-preset="module-02" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 02</span>
      <h2>Recording Light</h2>
      <p>In the simulation below you can witness how light from different directions hits one point on the surface of the sensor: Clearly, to obtain a discernible image we have to limit ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="cameras-and-lenses" data-step-preset="module-03" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 03</span>
      <h2>Glass</h2>
      <p>You can adjust the thickness of this pane with the gray slider below: When you look at the stick through the surface of a thick glass straight on , everything looks normal.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="cameras-and-lenses" data-step-preset="module-04" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 04</span>
      <h2>Waves</h2>
      <p>Waves It’s impossible to talk about wave propagation without involving the time component, so the simulations in this section are animated - you can play and pause them by click...</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="cameras-and-lenses" data-step-preset="module-05" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 05</span>
      <h2>Manipulating Rays</h2>
      <p>You can drag the demo around to see it from different viewpoints: For some reason the rays passing through glass at an angle are deflected off their paths .</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="cameras-and-lenses" data-step-preset="module-06" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 06</span>
      <h2>Aberrations</h2>
      <p>Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="cameras-and-lenses" data-step-preset="module-07" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 07</span>
      <h2>Further Watching and Reading</h2>
      <p>Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="cameras-and-lenses" data-step-preset="module-08" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 08</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="cameras-and-lenses" data-step-preset="module-09" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 09</span>
      <h2>The slider below controls the flow of time:</h2>
      <p>The slider below controls the flow of time: The longer the time of collection of photons the more of them are hitting the detectors and the brighter the resulting pixels in the ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="cameras-and-lenses" data-step-preset="module-10" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 10</span>
      <h2>For the next demo we will also double</h2>
      <p>For the next demo we will also double the resolution to an astonishing 1 kilopixel arranged in a 32x32 grid: Note that the individual sensors themselves still only see the inten...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="cameras-and-lenses" data-step-preset="module-11" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 11</span>
      <h2>Drag around the demo to see it from other directions:</h2>
      <p>You can drag around the demo to see it from other directions: Let’s try to see what sort of picture would be taken by a sensor that is placed near the objects without any enclos...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="cameras-and-lenses" data-step-preset="module-12" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 12</span>
      <h2>The first slider controls the diameter of the</h2>
      <p>The first slider controls the diameter of the hole, while the second one controls the distance between the opening and the sensor: While not shown here, the inner sides of the w...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="cameras-and-lenses" data-step-preset="module-13" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 13</span>
      <h2>Observe what happens to the taken image as</h2>
      <p>Observe what happens to the taken image as we tweak the diameter of the hole with the first slider, or change the distance between the opening and the sensor with the second one...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="cameras-and-lenses" data-step-preset="module-14" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 14</span>
      <h2>The red slider controls the position of the</h2>
      <p>The red slider controls the position of the source and the gray slider controls the thickness.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="cameras-and-lenses" data-step-preset="module-15" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 15</span>
      <h2>Globally pause all the following demonstrations</h2>
      <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="cameras-and-lenses" data-step-preset="module-16" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 16</span>
      <h2>In the simulation above notice the difference in</h2>
      <p>In the simulation above notice the difference in sharpness between the red and green spheres.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="cameras-and-lenses" data-step-preset="module-17" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 17</span>
      <h2>The black slider controls the aperture, the blue</h2>
      <p>The black slider controls the aperture, the blue slider controls the focal length, and the red slider changes the position of the object relative to the camera.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="cameras-and-lenses" data-step-preset="module-18" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 18</span>
      <h2>Make the sides non-parallel by using the slider: What we</h2>
      <p>You can make the sides non-parallel by using the slider: What we perceive as white light is a combination of lights of different wavelengths.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="cameras-and-lenses" data-step-preset="module-19" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 19</span>
      <h2>Control the amount of dispersion the lens material introduces: Chromatic</h2>
      <p>Using the slider you can control the amount of dispersion the lens material introduces: Chromatic aberration may be corrected with an achromatic lens , usually in the form of a ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="cameras-and-lenses" data-step-preset="module-20" data-sync-group="cameras-and-lenses-main">
      <span class="casefile-label">Module 20</span>
      <h2>The simple act of pressing the shutter button</h2>
      <p>The simple act of pressing the shutter button in a camera app on a smartphone or on the body of a high-end DSLR is effortless, but it's at this moment when, through carefully gu...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Cameras and Lenses article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Lights and Shadows]]
- [[Color Spaces]]
- [[GPS]]
