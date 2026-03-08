---
title: Tesseract
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - math
draft: false
description: >-
  Interactive 4D projection sandbox for spin, depth, and adjacency-preserving
  structure.
created: "2019-12-10"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Tesseract
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Tesseract

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/tesseract/" target="_blank" rel="noopener noreferrer">Tesseract by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">4D geometry explainer showing how a tesseract is constructed, projected, rotated, and intersected in lower-dimensional spaces.</p>

<div class="interactive-article" data-interactive-article="tesseract">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="tesseract-main" data-sim-scene="tesseract">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tesseract projection simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="tesseract-spin">spin speed</label>
      <input id="tesseract-spin" data-control="spin" type="range" min="0.2" max="4" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="tesseract-depth">w-depth</label>
      <input id="tesseract-depth" data-control="depth" type="range" min="1.4" max="3.6" step="0.02" value="2.2" />
    </div>
    <button data-control="reset" type="button">reset projection</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="tesseract">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="tesseract" data-step-preset="module-01" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 01</span>
      <h2>Tesseract</h2>
      <p>The slider modifies the object itself: What you’ve just interacted with was a rotated tesseract going through our three dimensional world, but before we understand why it looks ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="tesseract" data-step-preset="module-02" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 02</span>
      <h2>Building Cubes</h2>
      <p>Explains Building Cubes within Tesseract using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="tesseract" data-step-preset="module-03" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 03</span>
      <h2>Ambiguous Representation</h2>
      <p>You may drag the diagram around to change the viewing angle, I’ve also put a single point in that space: Similarly to the previous example the position of the black point is amb...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="tesseract" data-step-preset="module-04" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 04</span>
      <h2>Fourth Dimension</h2>
      <p>The slider modifies the object itself: What you’ve just interacted with was a rotated tesseract going through our three dimensional world, but before we understand why it looks ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="tesseract" data-step-preset="module-05" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 05</span>
      <h2>Stepping into the Shadows</h2>
      <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="tesseract" data-step-preset="module-06" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 06</span>
      <h2>Plane of Rotation</h2>
      <p>The slider controls the rotation of the tesseract in the xw plane.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="tesseract" data-step-preset="module-07" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 07</span>
      <h2>In-N-Out</h2>
      <p>Explains In-N-Out within Tesseract using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="tesseract" data-step-preset="module-08" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 08</span>
      <h2>Leaving Plato’s Cave</h2>
      <p>Explains Leaving Plato’s Cave within Tesseract using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="tesseract" data-step-preset="module-09" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 09</span>
      <h2>Further Watching and Reading</h2>
      <p>Narrative/reference section in Tesseract that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="tesseract" data-step-preset="module-10" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 10</span>
      <h2>Final Words</h2>
      <p>For the grand finale of this article lets drag a tesseract through a 4D space and see how it intersects with a 3D world.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="tesseract" data-step-preset="module-11" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 11</span>
      <h2>Drag the object around to view it from a different</h2>
      <p>You can drag the object around to view it from a different angle.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="tesseract" data-step-preset="module-12" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 12</span>
      <h2>You can take a single point and “stretch” it into</h2>
      <p>In the demonstration below you can take a single point and “stretch” it into the next dimension by dragging the slider: We’ve just created a line segment.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="tesseract" data-step-preset="module-13" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 13</span>
      <h2>Drag it around to see it from other directions: In</h2>
      <p>You can drag it around to see it from other directions: In a three dimensional space all three x y z axes are perpendicular to each other.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="tesseract" data-step-preset="module-14" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 14</span>
      <h2>Control its position with a slider: Despite the movement of</h2>
      <p>I put a single black point in the 3D space, you can control its position with a slider: Despite the movement of the point in a 3D space its position in a 2D drawing doesn’t change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="tesseract" data-step-preset="module-15" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 15</span>
      <h2>In the simulation they’re 120° apart, but we</h2>
      <p>In the simulation they’re 120° apart, but we know that those angles are equal to 90°.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="tesseract" data-step-preset="module-16" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 16</span>
      <h2>Stretch a cube to create a tesseract: I personally find</h2>
      <p>By dragging the slider you can stretch a cube to create a tesseract: I personally find it quite difficult to see what’s going on with this form of presentation.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="tesseract" data-step-preset="module-17" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 17</span>
      <h2>You can rotate the cube on the left side to</h2>
      <p>In the simulation below you can rotate the cube on the left side to see how its shadow changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="tesseract" data-step-preset="module-18" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 18</span>
      <h2>Drag the shadow around to see it from different angles</h2>
      <p>You can drag the shadow around to see it from different angles.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="tesseract" data-step-preset="module-19" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 19</span>
      <h2>You can drag the slider to change the cube’s position</h2>
      <p>In the simulation below you can drag the slider to change the cube’s position on the z axis.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="tesseract" data-step-preset="module-20" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 20</span>
      <h2>You may also drag the cube on the</h2>
      <p>You may also drag the cube on the left side to change its orientation in the space: Notice that when the cube is perfectly aligned with the axes it can pop in and out of existen...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="tesseract" data-step-preset="module-21" data-sync-group="tesseract-main">
      <span class="casefile-label">Module 21</span>
      <h2>His 4D Toys is a fully interactive app</h2>
      <p>His 4D Toys is a fully interactive app that allows you to play with four dimensional objects including physical interactions between them!</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>4D geometry explainer showing how a tesseract is constructed, projected, rotated, and intersected in lower-dimensional spaces.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Tesseract article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
