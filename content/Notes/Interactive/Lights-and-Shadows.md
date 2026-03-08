---
title: Lights and Shadows
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - rendering
draft: false
description: >-
  Interactive lighting geometry lab for angle, elevation, and penumbra softness
  effects.
created: "2020-07-01"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Lights-and-Shadows
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Lights and Shadows

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/lights-and-shadows/" target="_blank" rel="noopener noreferrer">Lights and Shadows by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.</p>

<div class="interactive-article" data-interactive-article="lights-and-shadows">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="lights-and-shadows-main" data-sim-scene="lights-and-shadows">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Light and shadow simulator"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="shadow-angle">light angle</label>
      <input id="shadow-angle" data-control="angle" type="range" min="5" max="175" step="1" value="42" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-height">light height</label>
      <input id="shadow-height" data-control="height" type="range" min="0.2" max="1" step="0.01" value="0.75" />
    </div>
    <div class="interactive-sim-control">
      <label for="shadow-soft">penumbra softness</label>
      <input id="shadow-soft" data-control="softness" type="range" min="0" max="1" step="0.01" value="0.3" />
    </div>
    <button data-control="reset" type="button">reset light</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="lights-and-shadows">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="lights-and-shadows" data-step-preset="module-01" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 01</span>
      <h2>Lights and Shadows</h2>
      <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="lights-and-shadows" data-step-preset="module-02" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 02</span>
      <h2>Power</h2>
      <p>While this ball of light is not very exciting, you can at least control its brightness with the slider below: What this slider actually regulates is the power of the light sourc...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="lights-and-shadows" data-step-preset="module-03" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 03</span>
      <h2>Position</h2>
      <p>Let’s see how we perceive the brightness of some source depending on its power: Notice that relative change in the perceived brightness strongly depends on the position of the s...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="lights-and-shadows" data-step-preset="module-04" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 04</span>
      <h2>Angles</h2>
      <p>You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="lights-and-shadows" data-step-preset="module-05" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 05</span>
      <h2>Radians</h2>
      <p>Radians The car simulation displayed the angle using the unit of degrees, but observe that the length of the yellow arc also gets smaller as the angle gets smaller.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="lights-and-shadows" data-step-preset="module-06" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 06</span>
      <h2>Solid Angles</h2>
      <p>You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="lights-and-shadows" data-step-preset="module-07" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 07</span>
      <h2>Surface Vision</h2>
      <p>You can drag around the demo to see the scene from a different point of view: While on its own the surface doesn’t emit any light, it reflects the light emitted from the source.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="lights-and-shadows" data-step-preset="module-08" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 08</span>
      <h2>Radiance</h2>
      <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="lights-and-shadows" data-step-preset="module-09" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 09</span>
      <h2>Reflections</h2>
      <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="lights-and-shadows" data-step-preset="module-10" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 10</span>
      <h2>Shadow</h2>
      <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="lights-and-shadows" data-step-preset="module-11" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 11</span>
      <h2>Color</h2>
      <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="lights-and-shadows" data-step-preset="module-12" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 12</span>
      <h2>Bounces</h2>
      <p>Explains Bounces within Lights and Shadows using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="lights-and-shadows" data-step-preset="module-13" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 13</span>
      <h2>Position If you looked closely at the previous</h2>
      <p>Position If you looked closely at the previous simulation you may have noticed that the surface wasn’t uniformly lit.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="lights-and-shadows" data-step-preset="module-14" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 14</span>
      <h2>A red dot terminates a ray that used to hit</h2>
      <p>In the simulation below a red dot terminates a ray that used to hit the tiny patch in the perpendicular case, but it no longer does so after tilting: As soon as the light source...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="lights-and-shadows" data-step-preset="module-15" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 15</span>
      <h2>The blue arrow shows the surface normal</h2>
      <p>The blue arrow shows the surface normal.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="lights-and-shadows" data-step-preset="module-16" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 16</span>
      <h2>The yellow arrow points towards the light source:</h2>
      <p>The yellow arrow points towards the light source: As the angle increases, a smaller portion of the original stream of light hits the surface.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="lights-and-shadows" data-step-preset="module-17" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 17</span>
      <h2>In the example below the yellow arrow shows</h2>
      <p>In the example below the yellow arrow shows the direction towards a distant light source: With the cosine factor covered we can now analyze how the distance to the light source ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="lights-and-shadows" data-step-preset="module-18" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 18</span>
      <h2>Control its radius with a slider: Notice, that when the</h2>
      <p>That source is surrounded by a sphere - you can control its radius with a slider: Notice, that when the radius of the sphere increases, the density of the yellow intersection po...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="lights-and-shadows" data-step-preset="module-19" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 19</span>
      <h2>However, the light source itself doesn’t seem to</h2>
      <p>However, the light source itself doesn’t seem to undergo the same effects - it remains consistently bright even as we look at it from an oblique angle or move away from it with ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="lights-and-shadows" data-step-preset="module-20" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 20</span>
      <h2>Every point of a Lambertian emitter emits light</h2>
      <p>Every point of a Lambertian emitter emits light in the following spherical pattern, the length of an arrow corresponds to relative number of photons per second emitted in the ar...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="lights-and-shadows" data-step-preset="module-21" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 21</span>
      <h2>As the viewing angle tilts, the length of</h2>
      <p>As the viewing angle tilts, the length of each arrow gets smaller, so each point of the surface contributes fewer photons towards the observer.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="lights-and-shadows" data-step-preset="module-22" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 22</span>
      <h2>The hemispherical model of light aggregation seems to</h2>
      <p>The hemispherical model of light aggregation seems to work well for a matte surface, but it certainly doesn’t explain the behavior of a plain mirror: Let’s try to visualize how ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="lights-and-shadows" data-step-preset="module-23" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 23</span>
      <h2>A scene is surrounded by a swarm of tiny light</h2>
      <p>In the simulation below a scene is surrounded by a swarm of tiny light sources, you can see their projections onto the hemisphere of the central point: In limit, if we cover the...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="lights-and-shadows" data-step-preset="module-24" data-sync-group="lights-and-shadows-main">
      <span class="casefile-label">Module 24</span>
      <h2>Make the surrounding sphere of light so big that it</h2>
      <p>The light covers everything now so we can’t really see the scene anymore, but by dragging the slider you can make the surrounding sphere of light so big that it will start to en...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Lights and Shadows article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Airfoil]]
- [[Cameras and Lenses]]
- [[Color Spaces]]
