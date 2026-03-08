---
title: Airfoil
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - physics
draft: false
description: >-
  Interactive lift sandbox for angle-of-attack, flow speed, and streamline
  intuition.
created: "2024-02-27"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Airfoil
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Airfoil

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/airfoil/" target="_blank" rel="noopener noreferrer">Airfoil by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.</p>

<div class="interactive-article" data-interactive-article="airfoil">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="airfoil-main" data-sim-scene="airfoil">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Airfoil flow simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-aoa">angle of attack</label>
      <input id="airfoil-aoa" data-control="aoa" type="range" min="-20" max="20" step="0.5" value="3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-speed">flow speed</label>
      <input id="airfoil-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.1" value="1.4" />
    </div>
    <button data-control="reset" type="button">reset flow</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="airfoil">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="airfoil" data-step-preset="module-01" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 01</span>
      <h2>Airfoil</h2>
      <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="airfoil" data-step-preset="module-02" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 02</span>
      <h2>Visualizing Flow</h2>
      <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="airfoil" data-step-preset="module-03" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 03</span>
      <h2>Velocity</h2>
      <p>If we wanted to, we could draw a velocity arrow at any of the seemingly empty spots on the right side.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="airfoil" data-step-preset="module-04" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 04</span>
      <h2>Relative Velocity</h2>
      <p>I adjusted the lengths of the arrows to prevent them from visually overlapping, but I also made sure to maintain their relative lengths - if one arrow is twice as long as the ot...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="airfoil" data-step-preset="module-05" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 05</span>
      <h2>Pressure</h2>
      <p>Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="airfoil" data-step-preset="module-06" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 06</span>
      <h2>Visualizing Pressure</h2>
      <p>Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="airfoil" data-step-preset="module-07" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 07</span>
      <h2>Airfoil Flow</h2>
      <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="airfoil" data-step-preset="module-08" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 08</span>
      <h2>Viscosity</h2>
      <p>Demonstrates viscous drag and flow damping as fluid properties are adjusted.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="airfoil" data-step-preset="module-09" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 09</span>
      <h2>Boundary Layer</h2>
      <p>Shows near-surface flow behavior and boundary-layer development around geometry.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="airfoil" data-step-preset="module-10" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 10</span>
      <h2>Airfoil Shapes</h2>
      <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="airfoil" data-step-preset="module-11" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 11</span>
      <h2>Further Reading and Watching</h2>
      <p>Narrative/reference section in Airfoil that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="airfoil" data-step-preset="module-12" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 12</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Airfoil that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="airfoil" data-step-preset="module-13" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 13</span>
      <h2>The slider lets you control the speed of</h2>
      <p>The slider lets you control the speed of time to observe in detail how the falling leaves and the bending blades of grass are visibly affected by the wind sweeping through this ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="airfoil" data-step-preset="module-14" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 14</span>
      <h2>We can mimic this behavior with a collection</h2>
      <p>We can mimic this behavior with a collection of small arrows placed all over the area, as seen on the right side: Each arrow represents the direction and the speed of the flow o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="airfoil" data-step-preset="module-15" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 15</span>
      <h2>Note that we have some flexibility in how</h2>
      <p>Note that we have some flexibility in how the speed of wind corresponds to the length of an arrow .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="airfoil" data-step-preset="module-16" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 16</span>
      <h2>Each marker represents an object so small and</h2>
      <p>Each marker represents an object so small and light that it instantly picks up the speed of the surrounding airflow.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="airfoil" data-step-preset="module-17" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 17</span>
      <h2>In fact, the motion of each marker is</h2>
      <p>In fact, the motion of each marker is equivalent to the motion of the parcel of air right around it.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="airfoil" data-step-preset="module-18" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 18</span>
      <h2>If you slow down time , you’ll be</h2>
      <p>If you slow down time , you’ll be able to see how each marker just moves in the direction of the arrows underneath it.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="airfoil" data-step-preset="module-19" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 19</span>
      <h2>I also made each marker leave a little</h2>
      <p>I also made each marker leave a little ghost trail behind it - this lets us track the path the air, as represented by the marker , took on the way to its current position.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="airfoil" data-step-preset="module-20" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 20</span>
      <h2>Let’s pause for a second to emphasize what</h2>
      <p>Let’s pause for a second to emphasize what the grass -like arrows and leaf -like markers represent - they both show the velocity of the flow of air, but in slightly different ways.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection; vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state c...</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="airfoil" data-step-preset="module-21" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 21</span>
      <h2>An arrow is attached to its fixed point</h2>
      <p>An arrow is attached to its fixed point in space, so it represents the current direction and speed of the flow at that location .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="airfoil" data-step-preset="module-22" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 22</span>
      <h2>See the whole spectrum of colors in the scale below</h2>
      <p>You can see the whole spectrum of colors in the scale below the plot.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="airfoil" data-step-preset="module-23" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 23</span>
      <h2>Change using the second slider</h2>
      <p>Before we finish this section, let me bring up visualization of a simple airflow, but this time I’ll give you some control over its direction , which you can change using the se...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="airfoil" data-step-preset="module-24" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 24</span>
      <h2>The first one once more controls the speed</h2>
      <p>The first one once more controls the speed of time : Don’t be misled by the frozen arrows, the wind is actually blowing there.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="airfoil" data-step-preset="module-25" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 25</span>
      <h2>- you can drag the cube around to change the</h2>
      <p>Velocity Let’s take a look at the air particles in a small, marked out volume of space seen in the demonstration below - you can drag the cube around to change the viewing angle.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-26" data-step-scene="airfoil" data-step-preset="module-26" data-sync-group="airfoil-main">
      <span class="casefile-label">Module 26</span>
      <h2>The slider controls the speed of time :</h2>
      <p>The slider controls the speed of time : You’re witnessing the motion of over twelve thousand air particles.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Airfoil article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Lights and Shadows]]
- [[Cameras and Lenses]]
- [[Earth and Sun]]
