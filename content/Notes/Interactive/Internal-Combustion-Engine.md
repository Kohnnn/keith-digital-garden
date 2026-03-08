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
  Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing,
  piston motion, and cycle behavior with synchronized animated parts.
created: '2021-04-29'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Internal-Combustion-Engine
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Internal Combustion Engine

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/internal-combustion-engine/" target="_blank" rel="noopener noreferrer">Internal Combustion Engine by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.</p>

<div class="interactive-article" data-interactive-article="internal-combustion-engine">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Internal Combustion Engine</h2>
    <p>The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-01" data-sim-module="internal-combustion-engine:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Internal Combustion Engine interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-01-scale">scale</label>
      <input id="internal-combustion-engine-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-01-rotation">rotation</label>
      <input id="internal-combustion-engine-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Crank</h2>
    <p>You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-02" data-sim-module="internal-combustion-engine:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Crank interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-02-scale">scale</label>
      <input id="internal-combustion-engine-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-02-rotation">rotation</label>
      <input id="internal-combustion-engine-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Engine Block</h2>
    <p>The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-03" data-sim-module="internal-combustion-engine:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Engine Block interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-03-scale">scale</label>
      <input id="internal-combustion-engine-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-03-rotation">rotation</label>
      <input id="internal-combustion-engine-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Crankshaft</h2>
    <p>You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-04" data-sim-module="internal-combustion-engine:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Crankshaft interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-04-scale">scale</label>
      <input id="internal-combustion-engine-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-04-rotation">rotation</label>
      <input id="internal-combustion-engine-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Pistons</h2>
    <p>Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-05" data-sim-module="internal-combustion-engine:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Pistons interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-05-scale">scale</label>
      <input id="internal-combustion-engine-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-05-rotation">rotation</label>
      <input id="internal-combustion-engine-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Closing the Lid</h2>
    <p>Explains Closing the Lid within Internal Combustion Engine using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-06" data-sim-module="internal-combustion-engine:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Closing the Lid interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-06-scale">scale</label>
      <input id="internal-combustion-engine-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-06-rotation">rotation</label>
      <input id="internal-combustion-engine-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Combustion</h2>
    <p>Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-07" data-sim-module="internal-combustion-engine:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Combustion interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-07-scale">scale</label>
      <input id="internal-combustion-engine-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-07-rotation">rotation</label>
      <input id="internal-combustion-engine-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · reference/narrative section</span>
    <h2>Further Watching</h2>
    <p>Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Drag it around to see it from other angles: It’s</h2>
    <p>You can drag it around to see it from other angles: It’s hard to talk about a mechanical device without visualizing its motion, so many demonstrations in this blog post are anim...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-10" data-sim-module="internal-combustion-engine:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag it around to see it from other angles: It’s interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-10-scale">scale</label>
      <input id="internal-combustion-engine-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-10-rotation">rotation</label>
      <input id="internal-combustion-engine-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Globally pause them</h2>
    <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause them.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-11" data-sim-module="internal-combustion-engine:module-11" data-sim-pause-group="internal-combustion-engine-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Globally pause them interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-11-scale">scale</label>
      <input id="internal-combustion-engine-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-11-rotation">rotation</label>
      <input id="internal-combustion-engine-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · chart/plot module</span>
    <h2>Let’s look at the plot of the velocity</h2>
    <p>Let’s look at the plot of the velocity of a piston as it moves up and down the cylinder when the crankshaft rotates with a constant angular velocity: You may be surprised that t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-12" data-sim-module="internal-combustion-engine:module-12">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Let’s look at the plot of the velocity interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-12-slack">slack</label>
      <input id="internal-combustion-engine-module-12-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-12-damping">damping</label>
      <input id="internal-combustion-engine-module-12-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-12-drive">drive</label>
      <input id="internal-combustion-engine-module-12-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Let’s consider a piston in a top dead</h2>
    <p>Let’s consider a piston in a top dead center position - as the piston reaches that point its velocity is 0, so the crankshaft has to drag the piston down.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="internal-combustion-engine:module-13" data-sim-module="internal-combustion-engine:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s consider a piston in a top dead interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-13-scale">scale</label>
      <input id="internal-combustion-engine-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="internal-combustion-engine-module-13-rotation">rotation</label>
      <input id="internal-combustion-engine-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>
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
    <p>Internal Combustion Engine works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
