---
title: Internal Combustion Engine
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - engines
draft: false
description: >-
  Interactive crank-slider timing lab for RPM, compression, and spark-phase
  intuition.
created: "2021-04-29"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Internal-Combustion-Engine
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Internal Combustion Engine

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/internal-combustion-engine/" target="_blank" rel="noopener noreferrer">Internal Combustion Engine by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.</p>

<div class="interactive-article" data-interactive-article="internal-combustion-engine">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="internal-combustion-engine-main" data-sim-scene="internal-combustion-engine">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal combustion engine crank slider"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="engine-rpm">rpm</label>
      <input id="engine-rpm" data-control="rpm" type="range" min="200" max="5000" step="10" value="1400" />
    </div>
    <div class="interactive-sim-control">
      <label for="engine-compression">compression factor</label>
      <input id="engine-compression" data-control="compression" type="range" min="0.5" max="1.5" step="0.01" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="engine-spark">spark timing</label>
      <input id="engine-spark" data-control="spark" type="range" min="0" max="360" step="1" value="35" />
    </div>
    <button data-control="reset" type="button">reset cycle</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="internal-combustion-engine">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="internal-combustion-engine" data-step-preset="module-01" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 01</span>
      <h2>Internal Combustion Engine</h2>
      <p>The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="internal-combustion-engine" data-step-preset="module-02" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 02</span>
      <h2>Crank</h2>
      <p>You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="internal-combustion-engine" data-step-preset="module-03" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 03</span>
      <h2>Engine Block</h2>
      <p>The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="internal-combustion-engine" data-step-preset="module-04" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 04</span>
      <h2>Crankshaft</h2>
      <p>You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="internal-combustion-engine" data-step-preset="module-05" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 05</span>
      <h2>Pistons</h2>
      <p>Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="internal-combustion-engine" data-step-preset="module-06" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 06</span>
      <h2>Closing the Lid</h2>
      <p>Explains Closing the Lid within Internal Combustion Engine using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="internal-combustion-engine" data-step-preset="module-07" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 07</span>
      <h2>Combustion</h2>
      <p>Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="internal-combustion-engine" data-step-preset="module-08" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 08</span>
      <h2>Further Watching</h2>
      <p>Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="internal-combustion-engine" data-step-preset="module-09" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 09</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="internal-combustion-engine" data-step-preset="module-10" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 10</span>
      <h2>Drag it around to see it from other angles: It’s</h2>
      <p>You can drag it around to see it from other angles: It’s hard to talk about a mechanical device without visualizing its motion, so many demonstrations in this blog post are anim...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="internal-combustion-engine" data-step-preset="module-11" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 11</span>
      <h2>Globally pause them</h2>
      <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause them.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="internal-combustion-engine" data-step-preset="module-12" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 12</span>
      <h2>Let’s look at the plot of the velocity</h2>
      <p>Let’s look at the plot of the velocity of a piston as it moves up and down the cylinder when the crankshaft rotates with a constant angular velocity: You may be surprised that t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="internal-combustion-engine" data-step-preset="module-13" data-sync-group="internal-combustion-engine-main">
      <span class="casefile-label">Module 13</span>
      <h2>Let’s consider a piston in a top dead</h2>
      <p>Let’s consider a piston in a top dead center position - as the piston reaches that point its velocity is 0, so the crankshaft has to drag the piston down.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Internal Combustion Engine article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
