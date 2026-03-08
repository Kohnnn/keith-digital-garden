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
  Mechanics-focused bicycle explainer covering forces, moments, stability, tire
  slip, braking, and frame stress using animated physics diagrams.
created: '2023-03-28'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Bicycle
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Bicycle

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/bicycle/" target="_blank" rel="noopener noreferrer">Bicycle by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.</p>

<div class="interactive-article" data-interactive-article="bicycle">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Bicycle</h2>
    <p>In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-01" data-sim-module="bicycle:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bicycle interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-01-scale">scale</label>
      <input id="bicycle-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-01-rotation">rotation</label>
      <input id="bicycle-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Forces</h2>
    <p>You can still control the magnitude of the right-pushing force with the slider, but to make our experiments a little easier, I’ll restore that force to its original magnitude af...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-02" data-sim-module="bicycle:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Forces interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-02-scale">scale</label>
      <input id="bicycle-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-02-rotation">rotation</label>
      <input id="bicycle-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Moments</h2>
    <p>While it’s harder to visualize the balance of moments, we can still do it by drawing colored rectangles spanning the length of the acting force arrow and the force arm: The red ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-03" data-sim-module="bicycle:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Moments interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-03-scale">scale</label>
      <input id="bicycle-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-03-rotation">rotation</label>
      <input id="bicycle-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Up and Down</h2>
    <p>In the demonstration below, you can play with a lone wheel rolling down the road.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-04" data-sim-module="bicycle:module-04" data-sim-pause-group="bicycle-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Up and Down interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-04-scale">scale</label>
      <input id="bicycle-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-04-rotation">rotation</label>
      <input id="bicycle-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Forwards and Backwards</h2>
    <p>Explains Forwards and Backwards within Bicycle using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-05" data-sim-module="bicycle:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Forwards and Backwards interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-05-scale">scale</label>
      <input id="bicycle-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-05-rotation">rotation</label>
      <input id="bicycle-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Left and Right</h2>
    <p>Recall that we’re representing the magnitude of forces using arrows of different sizes, so as long as the length of the right-pointing arrow is equal to the length of the left-p...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-06" data-sim-module="bicycle:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Left and Right interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-06-scale">scale</label>
      <input id="bicycle-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-06-rotation">rotation</label>
      <input id="bicycle-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Stability</h2>
    <p>Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-07" data-sim-module="bicycle:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Stability interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-07-scale">scale</label>
      <input id="bicycle-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-07-rotation">rotation</label>
      <input id="bicycle-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Wheels</h2>
    <p>The weight of the rider and the bike is then carried by the ground through the two contact points under the wheels: As you’ve probably realized, the yellow slider allows you to ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-08" data-sim-module="bicycle:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Wheels interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-08-scale">scale</label>
      <input id="bicycle-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-08-rotation">rotation</label>
      <input id="bicycle-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Simple Frame</h2>
    <p>In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-09" data-sim-module="bicycle:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Simple Frame interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-09-scale">scale</label>
      <input id="bicycle-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-09-rotation">rotation</label>
      <input id="bicycle-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Bending</h2>
    <p>Visualizes frame deformation and stress concentration under load to explain structural limits.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-10" data-sim-module="bicycle:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Bending interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-10-scale">scale</label>
      <input id="bicycle-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-10-rotation">rotation</label>
      <input id="bicycle-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Stresses in the Frame</h2>
    <p>Visualizes frame deformation and stress concentration under load to explain structural limits.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-11" data-sim-module="bicycle:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Stresses in the Frame interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-11-scale">scale</label>
      <input id="bicycle-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-11-rotation">rotation</label>
      <input id="bicycle-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · reference/narrative section</span>
    <h2>Further Reading and Watching</h2>
    <p>Narrative/reference section in Bicycle that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Bicycle that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Before we understand these more complicated interactions, we’ll</h2>
    <p>Before we understand these more complicated interactions, we’ll play with much simpler objects.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-14" data-sim-module="bicycle:module-14" data-sim-pause-group="bicycle-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Before we understand these more complicated interactions, we’ll interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-14-scale">scale</label>
      <input id="bicycle-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-14-rotation">rotation</label>
      <input id="bicycle-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>You can use the slider to apply a force to</h2>
    <p>In the demonstration below, you can use the slider to apply a force to this box.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-15" data-sim-module="bicycle:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can use the slider to apply a force to interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-15-scale">scale</label>
      <input id="bicycle-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-15-rotation">rotation</label>
      <input id="bicycle-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Restart the simulation using the button: The red arrow represents</h2>
    <p>You can restart the simulation using the button: The red arrow represents the pushing force, which could be applied by a hand, or a strong gust of air.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state; vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-16" data-sim-module="bicycle:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Restart the simulation using the button: The red arrow represents interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-16-scale">scale</label>
      <input id="bicycle-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-16-rotation">rotation</label>
      <input id="bicycle-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>The size of that arrow reflects the magnitude</h2>
    <p>The size of that arrow reflects the magnitude of that force - the bigger the arrow, the stronger the pushing action.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-17" data-sim-module="bicycle:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The size of that arrow reflects the magnitude interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-17-scale">scale</label>
      <input id="bicycle-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-17-rotation">rotation</label>
      <input id="bicycle-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>It’s worth pointing out once more that when</h2>
    <p>It’s worth pointing out once more that when the box starts to move due to force imbalance, just letting the slider go to balance the two forces again will not stop the box - it ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-18" data-sim-module="bicycle:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="It’s worth pointing out once more that when interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-18-scale">scale</label>
      <input id="bicycle-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-18-rotation">rotation</label>
      <input id="bicycle-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>I added Earth-like gravity that attracts the cube to the</h2>
    <p>In the simulation below, I added Earth-like gravity that attracts the cube to the bottom of your screen.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-19" data-sim-module="bicycle:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="I added Earth-like gravity that attracts the cube to the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-19-scale">scale</label>
      <input id="bicycle-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-19-rotation">rotation</label>
      <input id="bicycle-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>If we tally up all the small ground</h2>
    <p>If we tally up all the small ground forces and moments they create we can replace them with a single arrow centered at the bottom of the cube.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-20" data-sim-module="bicycle:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="If we tally up all the small ground interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-20-scale">scale</label>
      <input id="bicycle-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-20-rotation">rotation</label>
      <input id="bicycle-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>Where the slider controls the time progress of this event</h2>
    <p>Let’s see this in a vastly exaggerated form in the demonstration below where the slider controls the time progress of this event: When the rider’s position shifts, the arm lengt...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-21" data-sim-module="bicycle:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Where the slider controls the time progress of this event interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-21-scale">scale</label>
      <input id="bicycle-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-21-rotation">rotation</label>
      <input id="bicycle-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>The slider lets you scrub back and forth</h2>
    <p>The slider lets you scrub back and forth in time: In this free-rolling scenario, the inner and outer parts of the tire stay in sync as the wheel smoothly rolls over the road.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-22" data-sim-module="bicycle:module-22">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider lets you scrub back and forth interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-22-scale">scale</label>
      <input id="bicycle-module-22-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-22-rotation">rotation</label>
      <input id="bicycle-module-22-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>Tweak the actual angular velocity of the wheel omega with</h2>
    <p>Just like before, you can tweak the actual angular velocity of the wheel omega with the second slider: When the wheel rotates at the free-rolling speed of the current velocity ,...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-23" data-sim-module="bicycle:module-23">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tweak the actual angular velocity of the wheel omega with interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-23-scale">scale</label>
      <input id="bicycle-module-23-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-23-rotation">rotation</label>
      <input id="bicycle-module-23-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · chart/plot module</span>
    <h2>Control with the slider: When the wheel rotates faster than</h2>
    <p>The plot below roughly demonstrates that dependence of the output force on the slip ratio, and the vertical load , which you can control with the slider: When the wheel rotates ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-24" data-sim-module="bicycle:module-24">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Control with the slider: When the wheel rotates faster than interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-24-slack">slack</label>
      <input id="bicycle-module-24-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-24-damping">damping</label>
      <input id="bicycle-module-24-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-24-drive">drive</label>
      <input id="bicycle-module-24-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · interactive simulation/diagram module</span>
    <h2>The slider controls the force applied by the rider on</h2>
    <p>In the demonstration below, the slider controls the force applied by the rider on the rear brake lever.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="bicycle:module-25" data-sim-module="bicycle:module-25">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider controls the force applied by the rider on interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="bicycle-module-25-scale">scale</label>
      <input id="bicycle-module-25-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="bicycle-module-25-rotation">rotation</label>
      <input id="bicycle-module-25-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Bicycle works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
