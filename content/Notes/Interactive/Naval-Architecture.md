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
  Naval architecture explainer covering buoyancy, hull form, stability,
  free-surface effects, waves, and propulsion force decomposition.
created: '2021-07-27'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Naval-Architecture
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Naval Architecture

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/naval-architecture/" target="_blank" rel="noopener noreferrer">Naval Architecture by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.</p>

<div class="interactive-article" data-interactive-article="naval-architecture">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Naval Architecture</h2>
    <p>Explains Naval Architecture within Naval Architecture using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-01" data-sim-module="naval-architecture:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Naval Architecture interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-01-scale">scale</label>
      <input id="naval-architecture-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-01-rotation">rotation</label>
      <input id="naval-architecture-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Pressure</h2>
    <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-02" data-sim-module="naval-architecture:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Pressure interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-02-angle">angle</label>
      <input id="naval-architecture-module-02-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-02-speed">flow speed</label>
      <input id="naval-architecture-module-02-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-02-detail">detail</label>
      <input id="naval-architecture-module-02-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Buoyancy</h2>
    <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-03" data-sim-module="naval-architecture:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Buoyancy interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-03-scale">scale</label>
      <input id="naval-architecture-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-03-rotation">rotation</label>
      <input id="naval-architecture-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Hull</h2>
    <p>You can drag it around to change the point of view: This hull is covered with a deck , but some smaller boats may have an open top.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-04" data-sim-module="naval-architecture:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Hull interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-04-scale">scale</label>
      <input id="naval-architecture-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-04-rotation">rotation</label>
      <input id="naval-architecture-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Stability</h2>
    <p>Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-05" data-sim-module="naval-architecture:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Stability interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-05-scale">scale</label>
      <input id="naval-architecture-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-05-rotation">rotation</label>
      <input id="naval-architecture-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Cargo</h2>
    <p>Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-06" data-sim-module="naval-architecture:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Cargo interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-06-scale">scale</label>
      <input id="naval-architecture-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-06-rotation">rotation</label>
      <input id="naval-architecture-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Free Surface</h2>
    <p>You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-07" data-sim-module="naval-architecture:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Free Surface interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-07-scale">scale</label>
      <input id="naval-architecture-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-07-rotation">rotation</label>
      <input id="naval-architecture-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Waves</h2>
    <p>The slider controls the amplitude of the waves: Notice that as the wave passes through it changes the size and position of the underwater volume of the hull, which in turn shift...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-08" data-sim-module="naval-architecture:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Waves interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-08-scale">scale</label>
      <input id="naval-architecture-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-08-rotation">rotation</label>
      <input id="naval-architecture-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Propulsion</h2>
    <p>Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-09" data-sim-module="naval-architecture:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Propulsion interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-09-scale">scale</label>
      <input id="naval-architecture-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-09-rotation">rotation</label>
      <input id="naval-architecture-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · reference/narrative section</span>
    <h2>Further Watching and Reading</h2>
    <p>Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Dunk it into water using the slider: From this point</h2>
    <p>You can dunk it into water using the slider: From this point on I’ll remove the constraints of containers and we’ll instead move outdoors where we’ll submerge things into vast, ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-12" data-sim-module="naval-architecture:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Dunk it into water using the slider: From this point interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-12-scale">scale</label>
      <input id="naval-architecture-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-12-rotation">rotation</label>
      <input id="naval-architecture-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Drag the simulation around to see it from different angles:</h2>
    <p>You can drag the simulation around to see it from different angles: Notice how quickly a group of blocks starts to resemble the smooth shape of the sphere.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-13" data-sim-module="naval-architecture:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the simulation around to see it from different angles: interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-13-scale">scale</label>
      <input id="naval-architecture-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-13-rotation">rotation</label>
      <input id="naval-architecture-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>This hull has a bulbous bow which is</h2>
    <p>This hull has a bulbous bow which is the “nose” in the front bottom part - for larger ships it improves the flow around the ship, reducing drag.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-14" data-sim-module="naval-architecture:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="This hull has a bulbous bow which is interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-14-scale">scale</label>
      <input id="naval-architecture-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-14-rotation">rotation</label>
      <input id="naval-architecture-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Other than drag considerations, it may seem that</h2>
    <p>Other than drag considerations, it may seem that the shape of the hull can be more or less arbitrary.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-15" data-sim-module="naval-architecture:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Other than drag considerations, it may seem that interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-15-scale">scale</label>
      <input id="naval-architecture-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-15-rotation">rotation</label>
      <input id="naval-architecture-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>The first slider controls the wind, which will tilt the</h2>
    <p>In the demonstration below, the first slider controls the wind, which will tilt the ship one way or another.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-16" data-sim-module="naval-architecture:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The first slider controls the wind, which will tilt the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-16-scale">scale</label>
      <input id="naval-architecture-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-16-rotation">rotation</label>
      <input id="naval-architecture-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>The second slider changes the proportions of the</h2>
    <p>The second slider changes the proportions of the hull: For relatively wider shapes the ship tilts a little due to wind , but it finds its stable position and will return back to...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-17" data-sim-module="naval-architecture:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The second slider changes the proportions of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-17-scale">scale</label>
      <input id="naval-architecture-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-17-rotation">rotation</label>
      <input id="naval-architecture-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>The curly arrow at the top shows the</h2>
    <p>The curly arrow at the top shows the direction of the turn.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-18" data-sim-module="naval-architecture:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The curly arrow at the top shows the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-18-scale">scale</label>
      <input id="naval-architecture-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-18-rotation">rotation</label>
      <input id="naval-architecture-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · chart/plot module</span>
    <h2>We can visualize the length of the righting</h2>
    <p>We can visualize the length of the righting arm for different heel angles of the hull using the following plot.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-19" data-sim-module="naval-architecture:module-19">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="We can visualize the length of the righting interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-19-slack">slack</label>
      <input id="naval-architecture-module-19-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-19-damping">damping</label>
      <input id="naval-architecture-module-19-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-19-drive">drive</label>
      <input id="naval-architecture-module-19-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>The slider controls the horizontal position of the</h2>
    <p>The slider controls the horizontal position of the heavy box : Once again, the ship will find its static equilibrium at some angle, known as angle of list , which this time is c...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-20" data-sim-module="naval-architecture:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider controls the horizontal position of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-20-time">time</label>
      <input id="naval-architecture-module-20-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-20-altitude">altitude</label>
      <input id="naval-architecture-module-20-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-20-inclination">inclination</label>
      <input id="naval-architecture-module-20-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>The sum of all these forces is shown</h2>
    <p>The sum of all these forces is shown with the yellow arrow and the induced swirl is depicted with the red arrow : When the blades are oriented sideways they push a lot of water,...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-21" data-sim-module="naval-architecture:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The sum of all these forces is shown interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-21-scale">scale</label>
      <input id="naval-architecture-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-21-rotation">rotation</label>
      <input id="naval-architecture-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>In this very simplified analysis we seem to</h2>
    <p>In this very simplified analysis we seem to achieve the largest thrust roughly in the middle between the two extremes, but notice that we still have a relatively large drag indu...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="naval-architecture:module-22" data-sim-module="naval-architecture:module-22">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In this very simplified analysis we seem to interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-22-scale">scale</label>
      <input id="naval-architecture-module-22-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="naval-architecture-module-22-rotation">rotation</label>
      <input id="naval-architecture-module-22-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Naval Architecture works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
