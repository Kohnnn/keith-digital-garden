---
title: GPS
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - satellites
draft: false
description: >-
  Interactive trilateration lab for satellite geometry, noise, and position
  uncertainty.
created: "2022-01-18"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/GPS
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# GPS

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gps/" target="_blank" rel="noopener noreferrer">GPS by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.</p>

<div class="interactive-article" data-interactive-article="gps">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="gps-main" data-sim-scene="gps">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS trilateration simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-time">satellite spread</label>
      <input id="gps-time" data-control="time" type="range" min="0" max="6.283" step="0.01" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-noise">measurement noise</label>
      <input id="gps-noise" data-control="noise" type="range" min="0" max="2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset receiver</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="gps">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="gps" data-step-preset="module-01" data-sync-group="gps-main">
      <span class="casefile-label">Module 01</span>
      <h2>GPS</h2>
      <p>Demonstrates satellite geometry and timing calculations used to estimate receiver position and clock bias.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="gps" data-step-preset="module-02" data-sync-group="gps-main">
      <span class="casefile-label">Module 02</span>
      <h2>Simple Positioning</h2>
      <p>Notice that the intersection point of the three spheres lets us pinpoint the position and altitude even as you drag the figurine around: Throughout these examples we’ve been usi...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="gps" data-step-preset="module-03" data-sync-group="gps-main">
      <span class="casefile-label">Module 03</span>
      <h2>Time of Flight</h2>
      <p>In the simulation below you can control the progress of time with the slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="gps" data-step-preset="module-04" data-sync-group="gps-main">
      <span class="casefile-label">Module 04</span>
      <h2>Do you hear me?</h2>
      <p>Explains Do you hear me? within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="gps" data-step-preset="module-05" data-sync-group="gps-main">
      <span class="casefile-label">Module 05</span>
      <h2>Do I hear you?</h2>
      <p>Explains Do I hear you? within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="gps" data-step-preset="module-06" data-sync-group="gps-main">
      <span class="casefile-label">Module 06</span>
      <h2>Leveling Up</h2>
      <p>Explains Leveling Up within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="gps" data-step-preset="module-07" data-sync-group="gps-main">
      <span class="casefile-label">Module 07</span>
      <h2>Higher, Better, Faster, Stronger</h2>
      <p>Explains Higher, Better, Faster, Stronger within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="gps" data-step-preset="module-08" data-sync-group="gps-main">
      <span class="casefile-label">Module 08</span>
      <h2>Orbits</h2>
      <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="gps" data-step-preset="module-09" data-sync-group="gps-main">
      <span class="casefile-label">Module 09</span>
      <h2>GPS Orbits</h2>
      <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="gps" data-step-preset="module-10" data-sync-group="gps-main">
      <span class="casefile-label">Module 10</span>
      <h2>Keplerian Elements</h2>
      <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="gps" data-step-preset="module-11" data-sync-group="gps-main">
      <span class="casefile-label">Module 11</span>
      <h2>Time</h2>
      <p>In the simulation below you can control the progress of time with the slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="gps" data-step-preset="module-12" data-sync-group="gps-main">
      <span class="casefile-label">Module 12</span>
      <h2>Signal Propagation</h2>
      <p>In many cases the receiver will never get the signal unless we put the emitter high enough using the second slider: By putting the emitter at an altitude we can thankfully mitig...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="gps" data-step-preset="module-13" data-sync-group="gps-main">
      <span class="casefile-label">Module 13</span>
      <h2>Drag the view around to see it from different angles:</h2>
      <p>Here’s a current constellation of active satellites, you can drag the view around to see it from different angles: However, the satellites are just a part of what makes GPS poss...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="gps" data-step-preset="module-14" data-sync-group="gps-main">
      <span class="casefile-label">Module 14</span>
      <h2>Drag the landscape itself to change the viewing angle</h2>
      <p>You can also drag the landscape itself to change the viewing angle.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="gps" data-step-preset="module-15" data-sync-group="gps-main">
      <span class="casefile-label">Module 15</span>
      <h2>We’re sending two drones at the same time, the slider</h2>
      <p>In the demonstration below we’re sending two drones at the same time, the slider once again controls the time : As the drones arrive to their destinations we get the direct meas...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="gps" data-step-preset="module-16" data-sync-group="gps-main">
      <span class="casefile-label">Module 16</span>
      <h2>Thankfully, with two clocks side by side we</h2>
      <p>Thankfully, with two clocks side by side we can try to correct for that bias using the second slider: Notice that the timeline at the bottom shows progress of both the system cl...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="gps" data-step-preset="module-17" data-sync-group="gps-main">
      <span class="casefile-label">Module 17</span>
      <h2>You can control the user’s vertical position with a slider</h2>
      <p>In the demonstration below you can control the user’s vertical position with a slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="gps" data-step-preset="module-18" data-sync-group="gps-main">
      <span class="casefile-label">Module 18</span>
      <h2>Experience in the following simulation</h2>
      <p>So far we assumed that our local environment is perfectly flat, but when a radio wave encounters a hill it gets blocked, which you can experience in the following simulation.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="gps" data-step-preset="module-19" data-sync-group="gps-main">
      <span class="casefile-label">Module 19</span>
      <h2>You can drag the yellow object around</h2>
      <p>In the demonstration below you can drag the yellow object around.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="gps" data-step-preset="module-20" data-sync-group="gps-main">
      <span class="casefile-label">Module 20</span>
      <h2>As the object starts to move a yellow</h2>
      <p>As the object starts to move a yellow arrow reflects its current velocity: Note that the strength at which the object is pulled towards the planet varies with distance.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="gps" data-step-preset="module-21" data-sync-group="gps-main">
      <span class="casefile-label">Module 21</span>
      <h2>You can once again drag the object around, but this</h2>
      <p>In the demonstration below you can once again drag the object around, but this time it will have some initial velocity that was perhaps given to it by a rocket.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="gps" data-step-preset="module-22" data-sync-group="gps-main">
      <span class="casefile-label">Module 22</span>
      <h2>Notice that the speed of the object ,</h2>
      <p>Notice that the speed of the object , as shown by the length of the yellow arrow , varies over the course of its journey.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="gps" data-step-preset="module-23" data-sync-group="gps-main">
      <span class="casefile-label">Module 23</span>
      <h2>Play and pause them by clicking tapping on the button</h2>
      <p>Before we continue, I need to note that some demonstrations in the following sections are animated - you can play and pause them by clicking tapping on the button in their botto...</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="gps" data-step-preset="module-24" data-sync-group="gps-main">
      <span class="casefile-label">Module 24</span>
      <h2>Globally pause all the following demonstrations</h2>
      <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="gps" data-step-preset="module-25" data-sync-group="gps-main">
      <span class="casefile-label">Module 25</span>
      <h2>You may have noticed that the red slider</h2>
      <p>You may have noticed that the red slider controls the inclination of the orbit which is the angle between the orbital plane and the plane passing through the Earth’s equator kno...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-26" data-step-scene="gps" data-step-preset="module-26" data-sync-group="gps-main">
      <span class="casefile-label">Module 26</span>
      <h2>You can drag the red point around to change its</h2>
      <p>In the demonstration below you can drag the red point around to change its position on the globe.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The GPS article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Moon]]
- [[Earth and Sun]]
- [[Cameras and Lenses]]
