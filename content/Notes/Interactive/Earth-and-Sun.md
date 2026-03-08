---
title: Earth and Sun
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - astronomy
draft: false
description: >-
  Interactive orbit-tilt model for seasonal illumination and hemispheric
  contrast intuition.
created: "2019-10-16"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Earth-and-Sun
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Earth and Sun

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/earth-and-sun/" target="_blank" rel="noopener noreferrer">Earth and Sun by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Astronomy and orbital-mechanics explanation for seasons, axial tilt, orbital geometry, and timekeeping relationships between Earth and Sun.</p>

<div class="interactive-article" data-interactive-article="earth-and-sun">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="earth-and-sun-main" data-sim-scene="earth-and-sun">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Earth and Sun orbital model"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="earth-day">orbital day</label>
      <input id="earth-day" data-control="day" type="range" min="0" max="365" step="1" value="90" />
    </div>
    <div class="interactive-sim-control">
      <label for="earth-tilt">axial tilt</label>
      <input id="earth-tilt" data-control="tilt" type="range" min="0" max="35" step="0.1" value="23.5" />
    </div>
    <button data-control="reset" type="button">reset orbit</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="earth-and-sun">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="earth-and-sun" data-step-preset="module-01" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 01</span>
      <h2>Earth and Sun</h2>
      <p>You can drag the globe around to see it from different perspectives and use the sliders to change the date and time: It’s hard to talk about Earth and Sun without referencing a ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="earth-and-sun" data-step-preset="module-02" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 02</span>
      <h2>Size</h2>
      <p>Explains Size within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="earth-and-sun" data-step-preset="module-03" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 03</span>
      <h2>Ellipse</h2>
      <p>Explains Ellipse within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="earth-and-sun" data-step-preset="module-04" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 04</span>
      <h2>Orbit</h2>
      <p>As Kepler has discovered, traversal of each of the arc of the pie-slice sections of the orbit takes the same amount of time: At the bottom part of the simulation you can see the...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="earth-and-sun" data-step-preset="module-05" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 05</span>
      <h2>Second Law of Kepler</h2>
      <p>As Kepler has discovered, traversal of each of the arc of the pie-slice sections of the orbit takes the same amount of time: At the bottom part of the simulation you can see the...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="earth-and-sun" data-step-preset="module-06" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 06</span>
      <h2>Orbital Plane</h2>
      <p>You may drag over the demonstration up and down to change the viewing angle: In fact, all planets in the Solar System have very similar orbital planes which is a consequence of ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="earth-and-sun" data-step-preset="module-07" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 07</span>
      <h2>Axial Rotation</h2>
      <p>If you look closely at the simulation of the sidereal and solar day you’ll notice that we didn’t account for two important factors - eccentricity of the orbit and the axial tilt...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="earth-and-sun" data-step-preset="module-08" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 08</span>
      <h2>Axial Tilt</h2>
      <p>If you look closely at the simulation of the sidereal and solar day you’ll notice that we didn’t account for two important factors - eccentricity of the orbit and the axial tilt...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="earth-and-sun" data-step-preset="module-09" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 09</span>
      <h2>Year</h2>
      <p>In the simulation below you can observe the position of the Earth and its axis of rotation at different points of the year: The four colored line segments mark four important po...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="earth-and-sun" data-step-preset="module-10" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 10</span>
      <h2>Everything’s Moving</h2>
      <p>Explains Everything’s Moving within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="earth-and-sun" data-step-preset="module-11" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 11</span>
      <h2>Further Watching and Reading</h2>
      <p>Narrative/reference section in Earth and Sun that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="earth-and-sun" data-step-preset="module-12" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 12</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Earth and Sun that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="earth-and-sun" data-step-preset="module-13" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 13</span>
      <h2>You can adjust that ratio with a slider</h2>
      <p>In the demonstration below you can adjust that ratio with a slider: This ratio is known as eccentricity .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="earth-and-sun" data-step-preset="module-14" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 14</span>
      <h2>At your current viewing scale the Earth is</h2>
      <p>At your current viewing scale the Earth is pretty much invisible, it has a diameter of pixels, so instead its location is shown by an arrow.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="earth-and-sun" data-step-preset="module-15" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 15</span>
      <h2>You can change the time of day by dragging the</h2>
      <p>In the simulation below you can change the time of day by dragging the slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="earth-and-sun" data-step-preset="module-16" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 16</span>
      <h2>Drag around to spin the globe freely in space</h2>
      <p>You can drag around to spin the globe freely in space.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="earth-and-sun" data-step-preset="module-17" data-sync-group="earth-and-sun-main">
      <span class="casefile-label">Module 17</span>
      <h2>See how the precession causes the point of March equinox</h2>
      <p>In the exaggerated simulation below you can see how the precession causes the point of March equinox to change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Astronomy and orbital-mechanics explanation for seasons, axial tilt, orbital geometry, and timekeeping relationships between Earth and Sun.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Earth and Sun article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
