---
title: Bicycle
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - mechanics
draft: false
description: >-
  Interactive bicycle kinematics sandbox for steering, velocity, and turning
  radius intuition.
created: "2023-03-28"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Bicycle
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Bicycle

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/bicycle/" target="_blank" rel="noopener noreferrer">Bicycle by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.</p>

<div class="interactive-article" data-interactive-article="bicycle">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="bicycle-main" data-sim-scene="bicycle">
  <div class="interactive-sim-stage">
    <canvas class="sim-canvas" aria-label="Bicycle kinematics simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bike-steer">steering angle</label>
      <input id="bike-steer" data-control="steer" type="range" min="-35" max="35" step="0.5" value="0" />
    </div>
    <div class="interactive-sim-control">
      <label for="bike-speed">velocity</label>
      <input id="bike-speed" data-control="speed" type="range" min="0.4" max="3.2" step="0.1" value="1.5" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="bicycle">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="bicycle" data-step-preset="module-01" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 01</span>
      <h2>Bicycle</h2>
      <p>In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="bicycle" data-step-preset="module-02" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 02</span>
      <h2>Forces</h2>
      <p>You can still control the magnitude of the right-pushing force with the slider, but to make our experiments a little easier, I’ll restore that force to its original magnitude af...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="bicycle" data-step-preset="module-03" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 03</span>
      <h2>Moments</h2>
      <p>While it’s harder to visualize the balance of moments, we can still do it by drawing colored rectangles spanning the length of the acting force arrow and the force arm: The red ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="bicycle" data-step-preset="module-04" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 04</span>
      <h2>Up and Down</h2>
      <p>In the demonstration below, you can play with a lone wheel rolling down the road.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="bicycle" data-step-preset="module-05" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 05</span>
      <h2>Forwards and Backwards</h2>
      <p>Explains Forwards and Backwards within Bicycle using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="bicycle" data-step-preset="module-06" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 06</span>
      <h2>Left and Right</h2>
      <p>Recall that we’re representing the magnitude of forces using arrows of different sizes, so as long as the length of the right-pointing arrow is equal to the length of the left-p...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="bicycle" data-step-preset="module-07" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 07</span>
      <h2>Stability</h2>
      <p>Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="bicycle" data-step-preset="module-08" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 08</span>
      <h2>Wheels</h2>
      <p>The weight of the rider and the bike is then carried by the ground through the two contact points under the wheels: As you’ve probably realized, the yellow slider allows you to ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="bicycle" data-step-preset="module-09" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 09</span>
      <h2>Simple Frame</h2>
      <p>In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="bicycle" data-step-preset="module-10" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 10</span>
      <h2>Bending</h2>
      <p>Visualizes frame deformation and stress concentration under load to explain structural limits.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="bicycle" data-step-preset="module-11" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 11</span>
      <h2>Stresses in the Frame</h2>
      <p>Visualizes frame deformation and stress concentration under load to explain structural limits.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="bicycle" data-step-preset="module-12" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 12</span>
      <h2>Further Reading and Watching</h2>
      <p>Narrative/reference section in Bicycle that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="bicycle" data-step-preset="module-13" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 13</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Bicycle that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="bicycle" data-step-preset="module-14" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 14</span>
      <h2>Before we understand these more complicated interactions, we’ll</h2>
      <p>Before we understand these more complicated interactions, we’ll play with much simpler objects.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="bicycle" data-step-preset="module-15" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 15</span>
      <h2>You can use the slider to apply a force to</h2>
      <p>In the demonstration below, you can use the slider to apply a force to this box.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="bicycle" data-step-preset="module-16" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 16</span>
      <h2>Restart the simulation using the button: The red arrow represents</h2>
      <p>You can restart the simulation using the button: The red arrow represents the pushing force, which could be applied by a hand, or a strong gust of air.</p>
      <p class="story-step-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state; vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="bicycle" data-step-preset="module-17" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 17</span>
      <h2>The size of that arrow reflects the magnitude</h2>
      <p>The size of that arrow reflects the magnitude of that force - the bigger the arrow, the stronger the pushing action.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="bicycle" data-step-preset="module-18" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 18</span>
      <h2>It’s worth pointing out once more that when</h2>
      <p>It’s worth pointing out once more that when the box starts to move due to force imbalance, just letting the slider go to balance the two forces again will not stop the box - it ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="bicycle" data-step-preset="module-19" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 19</span>
      <h2>I added Earth-like gravity that attracts the cube to the</h2>
      <p>In the simulation below, I added Earth-like gravity that attracts the cube to the bottom of your screen.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="bicycle" data-step-preset="module-20" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 20</span>
      <h2>If we tally up all the small ground</h2>
      <p>If we tally up all the small ground forces and moments they create we can replace them with a single arrow centered at the bottom of the cube.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="bicycle" data-step-preset="module-21" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 21</span>
      <h2>Where the slider controls the time progress of this event</h2>
      <p>Let’s see this in a vastly exaggerated form in the demonstration below where the slider controls the time progress of this event: When the rider’s position shifts, the arm lengt...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="bicycle" data-step-preset="module-22" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 22</span>
      <h2>The slider lets you scrub back and forth</h2>
      <p>The slider lets you scrub back and forth in time: In this free-rolling scenario, the inner and outer parts of the tire stay in sync as the wheel smoothly rolls over the road.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="bicycle" data-step-preset="module-23" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 23</span>
      <h2>Tweak the actual angular velocity of the wheel omega with</h2>
      <p>Just like before, you can tweak the actual angular velocity of the wheel omega with the second slider: When the wheel rotates at the free-rolling speed of the current velocity ,...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="bicycle" data-step-preset="module-24" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 24</span>
      <h2>Control with the slider: When the wheel rotates faster than</h2>
      <p>The plot below roughly demonstrates that dependence of the output force on the slip ratio, and the vertical load , which you can control with the slider: When the wheel rotates ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="bicycle" data-step-preset="module-25" data-sync-group="bicycle-main">
      <span class="casefile-label">Module 25</span>
      <h2>The slider controls the force applied by the rider on</h2>
      <p>In the demonstration below, the slider controls the force applied by the rider on the rear brake lever.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Bicycle article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
