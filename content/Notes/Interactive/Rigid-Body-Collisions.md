---
title: Rigid Body Collisions
tags:
  - portfolio
  - blog
  - external
  - interactive
  - physics
  - simulation
draft: false
description: "Interactive collision sandbox for restitution, mass ratio, and contact angle."
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Rigid-Body-Collisions
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Rigid Body Collisions

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://www.sassnow.ski/rigid-body-collisions/1" target="_blank" rel="noopener noreferrer">Rigid Body Collisions by Kai Sassnowski</a></p>
</div>

<p class="note-lede">Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.</p>

<div class="interactive-article" data-interactive-article="rigid-body-collisions">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="rigid-body-collisions" data-sync-group="rigid-body-collisions-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Rigid body collision playground"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-restitution">restitution</label>
      <input id="rigid-body-collisions-restitution" data-control="restitution" type="range" min="0" max="1" step="0.01" value="0.82" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-mass">mass ratio</label>
      <input id="rigid-body-collisions-mass" data-control="mass" type="range" min="0.2" max="3" step="0.05" value="1.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-angle">impact angle</label>
      <input id="rigid-body-collisions-angle" data-control="angle" type="range" min="-75" max="75" step="1" value="18" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="rigid-body-collisions">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="rigid-body-collisions" data-step-preset="module-01" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 01</span>
      <h2>2D Rigid Body Collision Resolution Part 1: Defining the problem</h2>
      <p>Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="rigid-body-collisions" data-step-preset="module-02" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 02</span>
      <h2>Before we start</h2>
      <p>Explains Before we start within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="rigid-body-collisions" data-step-preset="module-03" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 03</span>
      <h2>Rigid bodies</h2>
      <p>Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="rigid-body-collisions" data-step-preset="module-04" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 04</span>
      <h2>Collision detection vs. collision resolution</h2>
      <p>The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="rigid-body-collisions" data-step-preset="module-05" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 05</span>
      <h2>What are we trying to do?</h2>
      <p>Explains What are we trying to do? within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="rigid-body-collisions" data-step-preset="module-06" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 06</span>
      <h2>What is a collision?</h2>
      <p>The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="rigid-body-collisions" data-step-preset="module-07" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 07</span>
      <h2>Towards a definition</h2>
      <p>Explains Towards a definition within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="rigid-body-collisions" data-step-preset="module-08" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 08</span>
      <h2>Surface normals</h2>
      <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="rigid-body-collisions" data-step-preset="module-09" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 09</span>
      <h2>The dot product</h2>
      <p>Demonstrates collision geometry and relative-velocity tests, linking vector math directly to contact outcomes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="rigid-body-collisions" data-step-preset="module-10" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 10</span>
      <h2>Tying it all together</h2>
      <p>Explains Tying it all together within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="rigid-body-collisions" data-step-preset="module-11" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 11</span>
      <h2>Conclusion</h2>
      <p>Narrative/reference section in Rigid Body Collisions that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="rigid-body-collisions" data-step-preset="module-12" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 12</span>
      <h2>In this series of blog posts, I want</h2>
      <p>In this series of blog posts, I want to show you what actually goes on behind the scenes in a physics simulation like the one above.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="rigid-body-collisions" data-step-preset="module-13" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 13</span>
      <h2>We can represent an object's current velocity with</h2>
      <p>We can represent an object's current velocity with an arrow where the length of the arrow represents the object's current speed and the direction the arrow is pointing its trave...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="rigid-body-collisions" data-step-preset="module-14" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 14</span>
      <h2>You can change the box's velocity by dragging the arrow</h2>
      <p>In the demonstration below, you can change the box's velocity by dragging the arrow around.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="rigid-body-collisions" data-step-preset="module-15" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 15</span>
      <h2>Always reset the simulation with the button</h2>
      <p>If you ever get lost in space, you can always reset the simulation with the button.</p>
      <p class="story-step-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="rigid-body-collisions" data-step-preset="module-16" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 16</span>
      <h2>Whenever you see a little arrow over a</h2>
      <p>Whenever you see a little arrow over a variable like this s ⃗ \vec{s} s , this means that the variable is a vector.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="rigid-body-collisions" data-step-preset="module-17" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 17</span>
      <h2>By dragging the slider to progress time</h2>
      <p>You can see this happening in the demonstration below by dragging the slider to progress time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="rigid-body-collisions" data-step-preset="module-18" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 18</span>
      <h2>Verify the result by playing the simulation</h2>
      <p>You can verify the result by playing the simulation.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="rigid-body-collisions" data-step-preset="module-19" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 19</span>
      <h2>To explore this idea, let's play a little</h2>
      <p>To explore this idea, let's play a little game.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="rigid-body-collisions" data-step-preset="module-20" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 20</span>
      <h2>To make things a little more challenging, the</h2>
      <p>To make things a little more challenging, the angle of inclination of the floor is going to change every time you reset the game.</p>
      <p class="story-step-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="rigid-body-collisions" data-step-preset="module-21" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 21</span>
      <h2>Click on them to reveal the answers</h2>
      <p>You can click on them to reveal the answers.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="rigid-body-collisions" data-step-preset="module-22" data-sync-group="rigid-body-collisions-main">
      <span class="casefile-label">Module 22</span>
      <h2>Control the angle between the vectors with the slider below</h2>
      <p>You can control the angle between the vectors with the slider below.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Rigid Body Collisions article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Naval Architecture]]
- [[Bicycle]]
- [[Sound]]
