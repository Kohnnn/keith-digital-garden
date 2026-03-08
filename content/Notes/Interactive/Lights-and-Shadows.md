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
  Physically-based light transport explainer covering radiance, angle and
  distance falloff, reflection models, shadows, and multiple bounces.
created: '2020-07-01'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Lights-and-Shadows
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Lights and Shadows

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/lights-and-shadows/" target="_blank" rel="noopener noreferrer">Lights and Shadows by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.</p>

<div class="interactive-article" data-interactive-article="lights-and-shadows">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Lights and Shadows</h2>
    <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-01" data-sim-module="lights-and-shadows:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Lights and Shadows interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-01-scale">scale</label>
      <input id="lights-and-shadows-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-01-rotation">rotation</label>
      <input id="lights-and-shadows-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Power</h2>
    <p>While this ball of light is not very exciting, you can at least control its brightness with the slider below: What this slider actually regulates is the power of the light sourc...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-02" data-sim-module="lights-and-shadows:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Power interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-02-scale">scale</label>
      <input id="lights-and-shadows-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-02-rotation">rotation</label>
      <input id="lights-and-shadows-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Position</h2>
    <p>Let’s see how we perceive the brightness of some source depending on its power: Notice that relative change in the perceived brightness strongly depends on the position of the s...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-03" data-sim-module="lights-and-shadows:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Position interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-03-time">time</label>
      <input id="lights-and-shadows-module-03-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-03-altitude">altitude</label>
      <input id="lights-and-shadows-module-03-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-03-inclination">inclination</label>
      <input id="lights-and-shadows-module-03-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Angles</h2>
    <p>You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-04" data-sim-module="lights-and-shadows:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Angles interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-04-scale">scale</label>
      <input id="lights-and-shadows-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-04-rotation">rotation</label>
      <input id="lights-and-shadows-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Radians</h2>
    <p>Radians The car simulation displayed the angle using the unit of degrees, but observe that the length of the yellow arc also gets smaller as the angle gets smaller.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-05" data-sim-module="lights-and-shadows:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Radians interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-05-scale">scale</label>
      <input id="lights-and-shadows-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-05-rotation">rotation</label>
      <input id="lights-and-shadows-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Solid Angles</h2>
    <p>You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-06" data-sim-module="lights-and-shadows:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Solid Angles interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-06-scale">scale</label>
      <input id="lights-and-shadows-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-06-rotation">rotation</label>
      <input id="lights-and-shadows-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Surface Vision</h2>
    <p>You can drag around the demo to see the scene from a different point of view: While on its own the surface doesn’t emit any light, it reflects the light emitted from the source.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-07" data-sim-module="lights-and-shadows:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Surface Vision interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-07-scale">scale</label>
      <input id="lights-and-shadows-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-07-rotation">rotation</label>
      <input id="lights-and-shadows-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Radiance</h2>
    <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-08" data-sim-module="lights-and-shadows:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Radiance interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-08-scale">scale</label>
      <input id="lights-and-shadows-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-08-rotation">rotation</label>
      <input id="lights-and-shadows-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Reflections</h2>
    <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-09" data-sim-module="lights-and-shadows:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Reflections interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-09-scale">scale</label>
      <input id="lights-and-shadows-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-09-rotation">rotation</label>
      <input id="lights-and-shadows-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Shadow</h2>
    <p>Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-10" data-sim-module="lights-and-shadows:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Shadow interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-10-scale">scale</label>
      <input id="lights-and-shadows-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-10-rotation">rotation</label>
      <input id="lights-and-shadows-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Color</h2>
    <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-11" data-sim-module="lights-and-shadows:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Color interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-11-red">red/input</label>
      <input id="lights-and-shadows-module-11-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-11-green">green/gamma</label>
      <input id="lights-and-shadows-module-11-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-11-blue">blue/detail</label>
      <input id="lights-and-shadows-module-11-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="lights-and-shadows-module-11-space-0">
          <input id="lights-and-shadows-module-11-space-0" data-control="space" type="radio" name="lights-and-shadows-module-11-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="lights-and-shadows-module-11-space-1">
          <input id="lights-and-shadows-module-11-space-1" data-control="space" type="radio" name="lights-and-shadows-module-11-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="lights-and-shadows-module-11-space-2">
          <input id="lights-and-shadows-module-11-space-2" data-control="space" type="radio" name="lights-and-shadows-module-11-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Bounces</h2>
    <p>Explains Bounces within Lights and Shadows using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-12" data-sim-module="lights-and-shadows:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bounces interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-12-scale">scale</label>
      <input id="lights-and-shadows-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-12-rotation">rotation</label>
      <input id="lights-and-shadows-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Position If you looked closely at the previous</h2>
    <p>Position If you looked closely at the previous simulation you may have noticed that the surface wasn’t uniformly lit.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-13" data-sim-module="lights-and-shadows:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Position If you looked closely at the previous interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-13-time">time</label>
      <input id="lights-and-shadows-module-13-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-13-altitude">altitude</label>
      <input id="lights-and-shadows-module-13-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-13-inclination">inclination</label>
      <input id="lights-and-shadows-module-13-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>A red dot terminates a ray that used to hit</h2>
    <p>In the simulation below a red dot terminates a ray that used to hit the tiny patch in the perpendicular case, but it no longer does so after tilting: As soon as the light source...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-14" data-sim-module="lights-and-shadows:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="A red dot terminates a ray that used to hit interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-14-scale">scale</label>
      <input id="lights-and-shadows-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-14-rotation">rotation</label>
      <input id="lights-and-shadows-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>The blue arrow shows the surface normal</h2>
    <p>The blue arrow shows the surface normal.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-15" data-sim-module="lights-and-shadows:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The blue arrow shows the surface normal interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-15-scale">scale</label>
      <input id="lights-and-shadows-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-15-rotation">rotation</label>
      <input id="lights-and-shadows-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>The yellow arrow points towards the light source:</h2>
    <p>The yellow arrow points towards the light source: As the angle increases, a smaller portion of the original stream of light hits the surface.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-16" data-sim-module="lights-and-shadows:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The yellow arrow points towards the light source: interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-16-scale">scale</label>
      <input id="lights-and-shadows-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-16-rotation">rotation</label>
      <input id="lights-and-shadows-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>In the example below the yellow arrow shows</h2>
    <p>In the example below the yellow arrow shows the direction towards a distant light source: With the cosine factor covered we can now analyze how the distance to the light source ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-17" data-sim-module="lights-and-shadows:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In the example below the yellow arrow shows interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-17-scale">scale</label>
      <input id="lights-and-shadows-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-17-rotation">rotation</label>
      <input id="lights-and-shadows-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>Control its radius with a slider: Notice, that when the</h2>
    <p>That source is surrounded by a sphere - you can control its radius with a slider: Notice, that when the radius of the sphere increases, the density of the yellow intersection po...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-18" data-sim-module="lights-and-shadows:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control its radius with a slider: Notice, that when the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-18-scale">scale</label>
      <input id="lights-and-shadows-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-18-rotation">rotation</label>
      <input id="lights-and-shadows-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>However, the light source itself doesn’t seem to</h2>
    <p>However, the light source itself doesn’t seem to undergo the same effects - it remains consistently bright even as we look at it from an oblique angle or move away from it with ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-19" data-sim-module="lights-and-shadows:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="However, the light source itself doesn’t seem to interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-19-scale">scale</label>
      <input id="lights-and-shadows-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-19-rotation">rotation</label>
      <input id="lights-and-shadows-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>Every point of a Lambertian emitter emits light</h2>
    <p>Every point of a Lambertian emitter emits light in the following spherical pattern, the length of an arrow corresponds to relative number of photons per second emitted in the ar...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-20" data-sim-module="lights-and-shadows:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Every point of a Lambertian emitter emits light interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-20-scale">scale</label>
      <input id="lights-and-shadows-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-20-rotation">rotation</label>
      <input id="lights-and-shadows-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>As the viewing angle tilts, the length of</h2>
    <p>As the viewing angle tilts, the length of each arrow gets smaller, so each point of the surface contributes fewer photons towards the observer.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-21" data-sim-module="lights-and-shadows:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="As the viewing angle tilts, the length of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-21-scale">scale</label>
      <input id="lights-and-shadows-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-21-rotation">rotation</label>
      <input id="lights-and-shadows-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>The hemispherical model of light aggregation seems to</h2>
    <p>The hemispherical model of light aggregation seems to work well for a matte surface, but it certainly doesn’t explain the behavior of a plain mirror: Let’s try to visualize how ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-22" data-sim-module="lights-and-shadows:module-22">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The hemispherical model of light aggregation seems to interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-22-scale">scale</label>
      <input id="lights-and-shadows-module-22-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-22-rotation">rotation</label>
      <input id="lights-and-shadows-module-22-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>A scene is surrounded by a swarm of tiny light</h2>
    <p>In the simulation below a scene is surrounded by a swarm of tiny light sources, you can see their projections onto the hemisphere of the central point: In limit, if we cover the...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-23" data-sim-module="lights-and-shadows:module-23">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="A scene is surrounded by a swarm of tiny light interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-23-scale">scale</label>
      <input id="lights-and-shadows-module-23-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-23-rotation">rotation</label>
      <input id="lights-and-shadows-module-23-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>Make the surrounding sphere of light so big that it</h2>
    <p>The light covers everything now so we can’t really see the scene anymore, but by dragging the slider you can make the surrounding sphere of light so big that it will start to en...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="lights-and-shadows:module-24" data-sim-module="lights-and-shadows:module-24">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Make the surrounding sphere of light so big that it interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-24-scale">scale</label>
      <input id="lights-and-shadows-module-24-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="lights-and-shadows-module-24-rotation">rotation</label>
      <input id="lights-and-shadows-module-24-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Lights and Shadows works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Airfoil]]
- [[Cameras and Lenses]]
- [[Color Spaces]]
