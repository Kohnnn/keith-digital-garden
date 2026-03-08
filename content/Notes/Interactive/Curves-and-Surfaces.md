---
title: Curves and Surfaces
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - geometry
draft: false
description: >-
  Geometric modeling deep dive from linear interpolation to bezier patches,
  splines, and subdivision surfaces with draggable control points.
created: '2021-11-02'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Curves-and-Surfaces
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Curves and Surfaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/curves-and-surfaces/" target="_blank" rel="noopener noreferrer">Curves and Surfaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.</p>

<div class="interactive-article" data-interactive-article="curves-and-surfaces">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · chart/plot module</span>
    <h2>Curves and Surfaces</h2>
    <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-01" data-sim-module="curves-and-surfaces:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Curves and Surfaces interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-01-slack">slack</label>
      <input id="curves-and-surfaces-module-01-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-01-damping">damping</label>
      <input id="curves-and-surfaces-module-01-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-01-drive">drive</label>
      <input id="curves-and-surfaces-module-01-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Defining the Shape</h2>
    <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-02" data-sim-module="curves-and-surfaces:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Defining the Shape interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-02-scale">scale</label>
      <input id="curves-and-surfaces-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-02-rotation">rotation</label>
      <input id="curves-and-surfaces-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Linear Segment</h2>
    <p>Linear Segment In the demonstration below you can drag the control points A and B around to change their position.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-03" data-sim-module="curves-and-surfaces:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Linear Segment interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-03-scale">scale</label>
      <input id="curves-and-surfaces-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-03-rotation">rotation</label>
      <input id="curves-and-surfaces-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · reference/narrative section</span>
    <h2>A Step Further</h2>
    <p>The slider controls the progress of our drawing - the more advanced the slider is the further into drawing we are.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Bezier Patches</h2>
    <p>When you move the selected 6 th point, the section of the curve near the 2 nd control point changes as well: When we look at the plot of the weight that each point has as we pro...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-05" data-sim-module="curves-and-surfaces:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bezier Patches interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-05-scale">scale</label>
      <input id="curves-and-surfaces-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-05-rotation">rotation</label>
      <input id="curves-and-surfaces-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Beyond Cubic</h2>
    <p>Explains Beyond Cubic within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-06" data-sim-module="curves-and-surfaces:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Beyond Cubic interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-06-scale">scale</label>
      <input id="curves-and-surfaces-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-06-rotation">rotation</label>
      <input id="curves-and-surfaces-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Splines</h2>
    <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-07" data-sim-module="curves-and-surfaces:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Splines interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-07-scale">scale</label>
      <input id="curves-and-surfaces-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-07-rotation">rotation</label>
      <input id="curves-and-surfaces-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · chart/plot module</span>
    <h2>Curved Mirror on The Wall</h2>
    <p>By dragging the slider you can bend that surface into an arc of a circle, the black curve below shows a cross section of the mirror’s shape: Notice that as the mirror pulls away...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-08" data-sim-module="curves-and-surfaces:module-08">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Curved Mirror on The Wall interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-08-slack">slack</label>
      <input id="curves-and-surfaces-module-08-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-08-damping">damping</label>
      <input id="curves-and-surfaces-module-08-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-08-drive">drive</label>
      <input id="curves-and-surfaces-module-08-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Building the Basis</h2>
    <p>Explains Building the Basis within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-09" data-sim-module="curves-and-surfaces:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Building the Basis interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-09-scale">scale</label>
      <input id="curves-and-surfaces-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-09-rotation">rotation</label>
      <input id="curves-and-surfaces-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Bâspline Extravaganza</h2>
    <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-10" data-sim-module="curves-and-surfaces:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bâspline Extravaganza interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-10-scale">scale</label>
      <input id="curves-and-surfaces-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-10-rotation">rotation</label>
      <input id="curves-and-surfaces-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Cutting Corners</h2>
    <p>Explains Cutting Corners within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-11" data-sim-module="curves-and-surfaces:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Cutting Corners interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-11-scale">scale</label>
      <input id="curves-and-surfaces-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-11-rotation">rotation</label>
      <input id="curves-and-surfaces-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Subdivision Surfaces</h2>
    <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-12" data-sim-module="curves-and-surfaces:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Subdivision Surfaces interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-12-scale">scale</label>
      <input id="curves-and-surfaces-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-12-rotation">rotation</label>
      <input id="curves-and-surfaces-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · chart/plot module</span>
    <h2>I built a system that lets you change the shape</h2>
    <p>In the demonstration below I built a system that lets you change the shape of a curve by controlling its spiralâness and size : While fun to play with, this system is quite im...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-13" data-sim-module="curves-and-surfaces:module-13" data-sim-pause-group="curves-and-surfaces-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="I built a system that lets you change the shape interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-13-slack">slack</label>
      <input id="curves-and-surfaces-module-13-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-13-damping">damping</label>
      <input id="curves-and-surfaces-module-13-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-13-drive">drive</label>
      <input id="curves-and-surfaces-module-13-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · chart/plot module</span>
    <h2>You can drag each control point shown as to change</h2>
    <p>In the demonstration below you can drag each control point shown as to change the curve’s form: Control points are often visualized with connecting lines that join them to their...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-14" data-sim-module="curves-and-surfaces:module-14">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="You can drag each control point shown as to change interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-14-slack">slack</label>
      <input id="curves-and-surfaces-module-14-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-14-damping">damping</label>
      <input id="curves-and-surfaces-module-14-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-14-drive">drive</label>
      <input id="curves-and-surfaces-module-14-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · chart/plot module</span>
    <h2>You can tap click a control point to see how</h2>
    <p>In the demonstration below you can tap click a control point to see how it affects the local shape - the redder the section of the curve the more influenced it is by that contro...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-15" data-sim-module="curves-and-surfaces:module-15">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="You can tap click a control point to see how interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-15-slack">slack</label>
      <input id="curves-and-surfaces-module-15-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-15-damping">damping</label>
      <input id="curves-and-surfaces-module-15-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-15-drive">drive</label>
      <input id="curves-and-surfaces-module-15-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>The slider controls a virtual red pen that</h2>
    <p>The slider controls a virtual red pen that is used to draw a segment between those two points: While this demo is the world’s most primitive drawing application, there are some ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-16" data-sim-module="curves-and-surfaces:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider controls a virtual red pen that interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-16-scale">scale</label>
      <input id="curves-and-surfaces-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-16-rotation">rotation</label>
      <input id="curves-and-surfaces-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>Tap click the control points to change which one is</h2>
    <p>You can tap click the control points to change which one is selected: For a linear segment like that, weighting function is quite straightforward.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-17" data-sim-module="curves-and-surfaces:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tap click the control points to change which one is interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-17-speed">speed</label>
      <input id="curves-and-surfaces-module-17-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-17-ratio">ratio</label>
      <input id="curves-and-surfaces-module-17-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-17-impulse">impulse</label>
      <input id="curves-and-surfaces-module-17-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · chart/plot module</span>
    <h2>As we progress through the curve using the</h2>
    <p>As we progress through the curve using the slider we decrease the weight of the point A and increase the weight of the point B : This hopefully makes intuitive sense.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-18" data-sim-module="curves-and-surfaces:module-18">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="As we progress through the curve using the interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-18-slack">slack</label>
      <input id="curves-and-surfaces-module-18-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-18-damping">damping</label>
      <input id="curves-and-surfaces-module-18-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-18-drive">drive</label>
      <input id="curves-and-surfaces-module-18-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>The slider controls a virtual pen that paints</h2>
    <p>The slider controls a virtual pen that paints a linear segment : By dragging that point through space we’ve created a simple linear segment placed in three dimensions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-19" data-sim-module="curves-and-surfaces:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider controls a virtual pen that paints interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-19-scale">scale</label>
      <input id="curves-and-surfaces-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-19-rotation">rotation</label>
      <input id="curves-and-surfaces-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>Let’s not forget that the segment we’re dragging</h2>
    <p>Let’s not forget that the segment we’re dragging is itself made by dragging a point between the segment’s endpoints, so the entire surface consists of points made from all possi...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-20" data-sim-module="curves-and-surfaces:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s not forget that the segment we’re dragging interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-20-scale">scale</label>
      <input id="curves-and-surfaces-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-20-rotation">rotation</label>
      <input id="curves-and-surfaces-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>As a result, we can create the very</h2>
    <p>As a result, we can create the very same surface by choosing to drag either the yellow or the blue segment through space - they both end up tracing the same surface: While we’re...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-21" data-sim-module="curves-and-surfaces:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="As a result, we can create the very interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-21-scale">scale</label>
      <input id="curves-and-surfaces-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-21-rotation">rotation</label>
      <input id="curves-and-surfaces-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · chart/plot module</span>
    <h2>Tap click a control point to select it: There are</h2>
    <p>You can tap click a control point to select it: There are a few interesting observations to be made here: When the progress is equal to 0 the weight function of control point A ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-22" data-sim-module="curves-and-surfaces:module-22">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Tap click a control point to select it: There are interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-22-slack">slack</label>
      <input id="curves-and-surfaces-module-22-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-22-damping">damping</label>
      <input id="curves-and-surfaces-module-22-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-22-drive">drive</label>
      <input id="curves-and-surfaces-module-22-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · chart/plot module</span>
    <h2>We can visualize how uniform steps of progress</h2>
    <p>We can visualize how uniform steps of progress map to the curve points: For some configurations when the slider is halfway along the progress, the curve is definitely not halfwa...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-23" data-sim-module="curves-and-surfaces:module-23">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="We can visualize how uniform steps of progress interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-23-slack">slack</label>
      <input id="curves-and-surfaces-module-23-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-23-damping">damping</label>
      <input id="curves-and-surfaces-module-23-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-23-drive">drive</label>
      <input id="curves-and-surfaces-module-23-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>That plane also has a perpendicular direction which</h2>
    <p>That plane also has a perpendicular direction which we call a normal direction of the surface at that point - I’ve marked that direction with a red arrow : For two surfaces to b...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-24" data-sim-module="curves-and-surfaces:module-24">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="That plane also has a perpendicular direction which interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-24-scale">scale</label>
      <input id="curves-and-surfaces-module-24-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-24-rotation">rotation</label>
      <input id="curves-and-surfaces-module-24-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · chart/plot module</span>
    <h2>Witness how quickly the local direction of the curve, shown</h2>
    <p>By dragging the slider you can witness how quickly the local direction of the curve, shown as a black arrow , changes in the areas of large curvature: A straight line has no cur...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="curves-and-surfaces:module-25" data-sim-module="curves-and-surfaces:module-25">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Witness how quickly the local direction of the curve, shown interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-25-slack">slack</label>
      <input id="curves-and-surfaces-module-25-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-25-damping">damping</label>
      <input id="curves-and-surfaces-module-25-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="curves-and-surfaces-module-25-drive">drive</label>
      <input id="curves-and-surfaces-module-25-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
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
    <p>Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Curves and Surfaces works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
