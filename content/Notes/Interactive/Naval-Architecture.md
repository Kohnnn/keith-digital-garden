---
title: Naval Architecture
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - ships
draft: false
description: >-
  Interactive buoyancy model for load, fluid density, and draft equilibrium
  behavior.
created: "2021-07-27"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Naval-Architecture
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Naval Architecture

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/naval-architecture/" target="_blank" rel="noopener noreferrer">Naval Architecture by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.</p>

<div class="interactive-article" data-interactive-article="naval-architecture">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="naval-architecture-main" data-sim-scene="naval-architecture">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Naval architecture buoyancy simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-load">payload load</label>
      <input id="naval-load" data-control="load" type="range" min="0" max="2" step="0.01" value="0.9" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-density">fluid density</label>
      <input id="naval-density" data-control="density" type="range" min="0.3" max="2" step="0.01" value="1" />
    </div>
    <button data-control="reset" type="button">reset hull state</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="naval-architecture">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="naval-architecture" data-step-preset="module-01" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 01</span>
      <h2>Naval Architecture</h2>
      <p>Explains Naval Architecture within Naval Architecture using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="naval-architecture" data-step-preset="module-02" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 02</span>
      <h2>Pressure</h2>
      <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="naval-architecture" data-step-preset="module-03" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 03</span>
      <h2>Buoyancy</h2>
      <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="naval-architecture" data-step-preset="module-04" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 04</span>
      <h2>Hull</h2>
      <p>You can drag it around to change the point of view: This hull is covered with a deck , but some smaller boats may have an open top.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="naval-architecture" data-step-preset="module-05" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 05</span>
      <h2>Stability</h2>
      <p>Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="naval-architecture" data-step-preset="module-06" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 06</span>
      <h2>Cargo</h2>
      <p>Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="naval-architecture" data-step-preset="module-07" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 07</span>
      <h2>Free Surface</h2>
      <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="naval-architecture" data-step-preset="module-08" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 08</span>
      <h2>Waves</h2>
      <p>The slider controls the amplitude of the waves: Notice that as the wave passes through it changes the size and position of the underwater volume of the hull, which in turn shift...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="naval-architecture" data-step-preset="module-09" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 09</span>
      <h2>Propulsion</h2>
      <p>Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="naval-architecture" data-step-preset="module-10" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 10</span>
      <h2>Further Watching and Reading</h2>
      <p>Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="naval-architecture" data-step-preset="module-11" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 11</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="naval-architecture" data-step-preset="module-12" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 12</span>
      <h2>Dunk it into water using the slider: From this point</h2>
      <p>You can dunk it into water using the slider: From this point on I’ll remove the constraints of containers and we’ll instead move outdoors where we’ll submerge things into vast, ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="naval-architecture" data-step-preset="module-13" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 13</span>
      <h2>Drag the simulation around to see it from different angles:</h2>
      <p>You can drag the simulation around to see it from different angles: Notice how quickly a group of blocks starts to resemble the smooth shape of the sphere.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="naval-architecture" data-step-preset="module-14" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 14</span>
      <h2>This hull has a bulbous bow which is</h2>
      <p>This hull has a bulbous bow which is the “nose” in the front bottom part - for larger ships it improves the flow around the ship, reducing drag.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="naval-architecture" data-step-preset="module-15" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 15</span>
      <h2>Other than drag considerations, it may seem that</h2>
      <p>Other than drag considerations, it may seem that the shape of the hull can be more or less arbitrary.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="naval-architecture" data-step-preset="module-16" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 16</span>
      <h2>The first slider controls the wind, which will tilt the</h2>
      <p>In the demonstration below, the first slider controls the wind, which will tilt the ship one way or another.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="naval-architecture" data-step-preset="module-17" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 17</span>
      <h2>The second slider changes the proportions of the</h2>
      <p>The second slider changes the proportions of the hull: For relatively wider shapes the ship tilts a little due to wind , but it finds its stable position and will return back to...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="naval-architecture" data-step-preset="module-18" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 18</span>
      <h2>The curly arrow at the top shows the</h2>
      <p>The curly arrow at the top shows the direction of the turn.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="naval-architecture" data-step-preset="module-19" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 19</span>
      <h2>We can visualize the length of the righting</h2>
      <p>We can visualize the length of the righting arm for different heel angles of the hull using the following plot.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="naval-architecture" data-step-preset="module-20" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 20</span>
      <h2>The slider controls the horizontal position of the</h2>
      <p>The slider controls the horizontal position of the heavy box : Once again, the ship will find its static equilibrium at some angle, known as angle of list , which this time is c...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="naval-architecture" data-step-preset="module-21" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 21</span>
      <h2>The sum of all these forces is shown</h2>
      <p>The sum of all these forces is shown with the yellow arrow and the induced swirl is depicted with the red arrow : When the blades are oriented sideways they push a lot of water,...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="naval-architecture" data-step-preset="module-22" data-sync-group="naval-architecture-main">
      <span class="casefile-label">Module 22</span>
      <h2>In this very simplified analysis we seem to</h2>
      <p>In this very simplified analysis we seem to achieve the largest thrust roughly in the middle between the two extremes, but notice that we still have a relatively large drag indu...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Naval Architecture article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
