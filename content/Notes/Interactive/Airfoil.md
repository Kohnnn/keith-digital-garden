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
  Deep fluid-dynamics explainer focused on why wings generate lift, combining
  airflow, pressure, viscosity, and boundary-layer scenes that can be
  manipulated in real time.
created: '2024-02-27'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Airfoil
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Airfoil

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/airfoil/" target="_blank" rel="noopener noreferrer">Airfoil by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.</p>

<div class="interactive-article" data-interactive-article="airfoil">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Airfoil</h2>
    <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-01" data-sim-module="airfoil:module-01" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Airfoil interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-01-angle">angle</label>
      <input id="airfoil-module-01-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-01-speed">flow speed</label>
      <input id="airfoil-module-01-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-01-detail">detail</label>
      <input id="airfoil-module-01-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Visualizing Flow</h2>
    <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-02" data-sim-module="airfoil:module-02" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Visualizing Flow interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-02-angle">angle</label>
      <input id="airfoil-module-02-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-02-speed">flow speed</label>
      <input id="airfoil-module-02-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-02-detail">detail</label>
      <input id="airfoil-module-02-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Velocity</h2>
    <p>If we wanted to, we could draw a velocity arrow at any of the seemingly empty spots on the right side.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-03" data-sim-module="airfoil:module-03" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Velocity interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-03-angle">angle</label>
      <input id="airfoil-module-03-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-03-speed">flow speed</label>
      <input id="airfoil-module-03-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-03-detail">detail</label>
      <input id="airfoil-module-03-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Relative Velocity</h2>
    <p>I adjusted the lengths of the arrows to prevent them from visually overlapping, but I also made sure to maintain their relative lengths - if one arrow is twice as long as the ot...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-04" data-sim-module="airfoil:module-04" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Relative Velocity interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-04-angle">angle</label>
      <input id="airfoil-module-04-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-04-speed">flow speed</label>
      <input id="airfoil-module-04-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-04-detail">detail</label>
      <input id="airfoil-module-04-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Pressure</h2>
    <p>Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-05" data-sim-module="airfoil:module-05" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Pressure interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-05-angle">angle</label>
      <input id="airfoil-module-05-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-05-speed">flow speed</label>
      <input id="airfoil-module-05-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-05-detail">detail</label>
      <input id="airfoil-module-05-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Visualizing Pressure</h2>
    <p>Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-06" data-sim-module="airfoil:module-06" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Visualizing Pressure interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-06-angle">angle</label>
      <input id="airfoil-module-06-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-06-speed">flow speed</label>
      <input id="airfoil-module-06-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-06-detail">detail</label>
      <input id="airfoil-module-06-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Airfoil Flow</h2>
    <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-07" data-sim-module="airfoil:module-07" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Airfoil Flow interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-07-angle">angle</label>
      <input id="airfoil-module-07-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-07-speed">flow speed</label>
      <input id="airfoil-module-07-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-07-detail">detail</label>
      <input id="airfoil-module-07-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Viscosity</h2>
    <p>Demonstrates viscous drag and flow damping as fluid properties are adjusted.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-08" data-sim-module="airfoil:module-08" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Viscosity interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-08-angle">angle</label>
      <input id="airfoil-module-08-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-08-speed">flow speed</label>
      <input id="airfoil-module-08-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-08-detail">detail</label>
      <input id="airfoil-module-08-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Boundary Layer</h2>
    <p>Shows near-surface flow behavior and boundary-layer development around geometry.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-09" data-sim-module="airfoil:module-09" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Boundary Layer interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-09-angle">angle</label>
      <input id="airfoil-module-09-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-09-speed">flow speed</label>
      <input id="airfoil-module-09-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-09-detail">detail</label>
      <input id="airfoil-module-09-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Airfoil Shapes</h2>
    <p>Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-10" data-sim-module="airfoil:module-10" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Airfoil Shapes interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-10-angle">angle</label>
      <input id="airfoil-module-10-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-10-speed">flow speed</label>
      <input id="airfoil-module-10-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-10-detail">detail</label>
      <input id="airfoil-module-10-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · reference/narrative section</span>
    <h2>Further Reading and Watching</h2>
    <p>Narrative/reference section in Airfoil that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Airfoil that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>The slider lets you control the speed of</h2>
    <p>The slider lets you control the speed of time to observe in detail how the falling leaves and the bending blades of grass are visibly affected by the wind sweeping through this ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-13" data-sim-module="airfoil:module-13" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider lets you control the speed of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-13-angle">angle</label>
      <input id="airfoil-module-13-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-13-speed">flow speed</label>
      <input id="airfoil-module-13-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-13-detail">detail</label>
      <input id="airfoil-module-13-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>We can mimic this behavior with a collection</h2>
    <p>We can mimic this behavior with a collection of small arrows placed all over the area, as seen on the right side: Each arrow represents the direction and the speed of the flow o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-14" data-sim-module="airfoil:module-14" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="We can mimic this behavior with a collection interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-14-angle">angle</label>
      <input id="airfoil-module-14-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-14-speed">flow speed</label>
      <input id="airfoil-module-14-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-14-detail">detail</label>
      <input id="airfoil-module-14-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Note that we have some flexibility in how</h2>
    <p>Note that we have some flexibility in how the speed of wind corresponds to the length of an arrow .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-15" data-sim-module="airfoil:module-15" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Note that we have some flexibility in how interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-15-angle">angle</label>
      <input id="airfoil-module-15-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-15-speed">flow speed</label>
      <input id="airfoil-module-15-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-15-detail">detail</label>
      <input id="airfoil-module-15-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Each marker represents an object so small and</h2>
    <p>Each marker represents an object so small and light that it instantly picks up the speed of the surrounding airflow.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-16" data-sim-module="airfoil:module-16" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Each marker represents an object so small and interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-16-angle">angle</label>
      <input id="airfoil-module-16-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-16-speed">flow speed</label>
      <input id="airfoil-module-16-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-16-detail">detail</label>
      <input id="airfoil-module-16-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>In fact, the motion of each marker is</h2>
    <p>In fact, the motion of each marker is equivalent to the motion of the parcel of air right around it.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-17" data-sim-module="airfoil:module-17" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In fact, the motion of each marker is interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-17-angle">angle</label>
      <input id="airfoil-module-17-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-17-speed">flow speed</label>
      <input id="airfoil-module-17-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-17-detail">detail</label>
      <input id="airfoil-module-17-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>If you slow down time , you’ll be</h2>
    <p>If you slow down time , you’ll be able to see how each marker just moves in the direction of the arrows underneath it.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-18" data-sim-module="airfoil:module-18" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="If you slow down time , you’ll be interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-18-angle">angle</label>
      <input id="airfoil-module-18-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-18-speed">flow speed</label>
      <input id="airfoil-module-18-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-18-detail">detail</label>
      <input id="airfoil-module-18-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>I also made each marker leave a little</h2>
    <p>I also made each marker leave a little ghost trail behind it - this lets us track the path the air, as represented by the marker , took on the way to its current position.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-19" data-sim-module="airfoil:module-19" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="I also made each marker leave a little interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-19-angle">angle</label>
      <input id="airfoil-module-19-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-19-speed">flow speed</label>
      <input id="airfoil-module-19-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-19-detail">detail</label>
      <input id="airfoil-module-19-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>Let’s pause for a second to emphasize what</h2>
    <p>Let’s pause for a second to emphasize what the grass -like arrows and leaf -like markers represent - they both show the velocity of the flow of air, but in slightly different ways.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection; vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state c...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-20" data-sim-module="airfoil:module-20" data-sim-shared="airfoil-core" data-sim-pause-group="airfoil-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s pause for a second to emphasize what interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-20-angle">angle</label>
      <input id="airfoil-module-20-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-20-speed">flow speed</label>
      <input id="airfoil-module-20-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-20-detail">detail</label>
      <input id="airfoil-module-20-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>An arrow is attached to its fixed point</h2>
    <p>An arrow is attached to its fixed point in space, so it represents the current direction and speed of the flow at that location .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-21" data-sim-module="airfoil:module-21" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="An arrow is attached to its fixed point interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-21-angle">angle</label>
      <input id="airfoil-module-21-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-21-speed">flow speed</label>
      <input id="airfoil-module-21-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-21-detail">detail</label>
      <input id="airfoil-module-21-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · chart/plot module</span>
    <h2>See the whole spectrum of colors in the scale below</h2>
    <p>You can see the whole spectrum of colors in the scale below the plot.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-22" data-sim-module="airfoil:module-22">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="See the whole spectrum of colors in the scale below interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-22-slack">slack</label>
      <input id="airfoil-module-22-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-22-damping">damping</label>
      <input id="airfoil-module-22-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-22-drive">drive</label>
      <input id="airfoil-module-22-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>Change using the second slider</h2>
    <p>Before we finish this section, let me bring up visualization of a simple airflow, but this time I’ll give you some control over its direction , which you can change using the se...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-23" data-sim-module="airfoil:module-23" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Change using the second slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-23-angle">angle</label>
      <input id="airfoil-module-23-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-23-speed">flow speed</label>
      <input id="airfoil-module-23-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-23-detail">detail</label>
      <input id="airfoil-module-23-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>The first one once more controls the speed</h2>
    <p>The first one once more controls the speed of time : Don’t be misled by the frozen arrows, the wind is actually blowing there.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-24" data-sim-module="airfoil:module-24" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The first one once more controls the speed interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-24-angle">angle</label>
      <input id="airfoil-module-24-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-24-speed">flow speed</label>
      <input id="airfoil-module-24-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-24-detail">detail</label>
      <input id="airfoil-module-24-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · interactive simulation/diagram module</span>
    <h2>- you can drag the cube around to change the</h2>
    <p>Velocity Let’s take a look at the air particles in a small, marked out volume of space seen in the demonstration below - you can drag the cube around to change the viewing angle.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-25" data-sim-module="airfoil:module-25">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="- you can drag the cube around to change the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-25-scale">scale</label>
      <input id="airfoil-module-25-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-25-rotation">rotation</label>
      <input id="airfoil-module-25-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-26">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 26 · interactive simulation/diagram module</span>
    <h2>The slider controls the speed of time :</h2>
    <p>The slider controls the speed of time : You’re witnessing the motion of over twelve thousand air particles.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="airfoil:module-26" data-sim-module="airfoil:module-26" data-sim-shared="airfoil-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider controls the speed of time : interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="airfoil-module-26-angle">angle</label>
      <input id="airfoil-module-26-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-26-speed">flow speed</label>
      <input id="airfoil-module-26-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="airfoil-module-26-detail">detail</label>
      <input id="airfoil-module-26-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
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
    <p>Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Airfoil works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Lights and Shadows]]
- [[Cameras and Lenses]]
- [[Earth and Sun]]
