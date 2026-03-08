---
title: Cameras and Lenses
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - optics
draft: false
description: >-
  Optics explainer covering image formation, aperture, focal length, lens
  geometry, aberrations, and sensor behavior with manipulable ray simulations.
created: '2020-12-07'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Cameras-and-Lenses
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Cameras and Lenses

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/cameras-and-lenses/" target="_blank" rel="noopener noreferrer">Cameras and Lenses by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.</p>

<div class="interactive-article" data-interactive-article="cameras-and-lenses">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Cameras and Lenses</h2>
    <p>Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-01" data-sim-module="cameras-and-lenses:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Cameras and Lenses interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-01-scale">scale</label>
      <input id="cameras-and-lenses-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-01-rotation">rotation</label>
      <input id="cameras-and-lenses-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Recording Light</h2>
    <p>In the simulation below you can witness how light from different directions hits one point on the surface of the sensor: Clearly, to obtain a discernible image we have to limit ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-02" data-sim-module="cameras-and-lenses:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Recording Light interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-02-scale">scale</label>
      <input id="cameras-and-lenses-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-02-rotation">rotation</label>
      <input id="cameras-and-lenses-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Glass</h2>
    <p>You can adjust the thickness of this pane with the gray slider below: When you look at the stick through the surface of a thick glass straight on , everything looks normal.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-03" data-sim-module="cameras-and-lenses:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Glass interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-03-scale">scale</label>
      <input id="cameras-and-lenses-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-03-rotation">rotation</label>
      <input id="cameras-and-lenses-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Waves</h2>
    <p>Waves It’s impossible to talk about wave propagation without involving the time component, so the simulations in this section are animated - you can play and pause them by click...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-04" data-sim-module="cameras-and-lenses:module-04" data-sim-pause-group="cameras-and-lenses-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Waves interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-04-scale">scale</label>
      <input id="cameras-and-lenses-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-04-rotation">rotation</label>
      <input id="cameras-and-lenses-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Manipulating Rays</h2>
    <p>You can drag the demo around to see it from different viewpoints: For some reason the rays passing through glass at an angle are deflected off their paths .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-05" data-sim-module="cameras-and-lenses:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Manipulating Rays interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-05-scale">scale</label>
      <input id="cameras-and-lenses-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-05-rotation">rotation</label>
      <input id="cameras-and-lenses-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Aberrations</h2>
    <p>Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-06" data-sim-module="cameras-and-lenses:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Aberrations interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-06-scale">scale</label>
      <input id="cameras-and-lenses-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-06-rotation">rotation</label>
      <input id="cameras-and-lenses-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · reference/narrative section</span>
    <h2>Further Watching and Reading</h2>
    <p>Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>The slider below controls the flow of time:</h2>
    <p>The slider below controls the flow of time: The longer the time of collection of photons the more of them are hitting the detectors and the brighter the resulting pixels in the ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-09" data-sim-module="cameras-and-lenses:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider below controls the flow of time: interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-09-scale">scale</label>
      <input id="cameras-and-lenses-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-09-rotation">rotation</label>
      <input id="cameras-and-lenses-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>For the next demo we will also double</h2>
    <p>For the next demo we will also double the resolution to an astonishing 1 kilopixel arranged in a 32x32 grid: Note that the individual sensors themselves still only see the inten...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-10" data-sim-module="cameras-and-lenses:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="For the next demo we will also double interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-10-scale">scale</label>
      <input id="cameras-and-lenses-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-10-rotation">rotation</label>
      <input id="cameras-and-lenses-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Drag around the demo to see it from other directions:</h2>
    <p>You can drag around the demo to see it from other directions: Let’s try to see what sort of picture would be taken by a sensor that is placed near the objects without any enclos...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-11" data-sim-module="cameras-and-lenses:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag around the demo to see it from other directions: interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-11-scale">scale</label>
      <input id="cameras-and-lenses-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-11-rotation">rotation</label>
      <input id="cameras-and-lenses-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>The first slider controls the diameter of the</h2>
    <p>The first slider controls the diameter of the hole, while the second one controls the distance between the opening and the sensor: While not shown here, the inner sides of the w...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-12" data-sim-module="cameras-and-lenses:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The first slider controls the diameter of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-12-scale">scale</label>
      <input id="cameras-and-lenses-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-12-rotation">rotation</label>
      <input id="cameras-and-lenses-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Observe what happens to the taken image as</h2>
    <p>Observe what happens to the taken image as we tweak the diameter of the hole with the first slider, or change the distance between the opening and the sensor with the second one...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-13" data-sim-module="cameras-and-lenses:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Observe what happens to the taken image as interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-13-scale">scale</label>
      <input id="cameras-and-lenses-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-13-rotation">rotation</label>
      <input id="cameras-and-lenses-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>The red slider controls the position of the</h2>
    <p>The red slider controls the position of the source and the gray slider controls the thickness.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-14" data-sim-module="cameras-and-lenses:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The red slider controls the position of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-14-time">time</label>
      <input id="cameras-and-lenses-module-14-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-14-altitude">altitude</label>
      <input id="cameras-and-lenses-module-14-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-14-inclination">inclination</label>
      <input id="cameras-and-lenses-module-14-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Globally pause all the following demonstrations</h2>
    <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-15" data-sim-module="cameras-and-lenses:module-15" data-sim-pause-group="cameras-and-lenses-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Globally pause all the following demonstrations interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-15-scale">scale</label>
      <input id="cameras-and-lenses-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-15-rotation">rotation</label>
      <input id="cameras-and-lenses-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>In the simulation above notice the difference in</h2>
    <p>In the simulation above notice the difference in sharpness between the red and green spheres.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-16" data-sim-module="cameras-and-lenses:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In the simulation above notice the difference in interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-16-scale">scale</label>
      <input id="cameras-and-lenses-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-16-rotation">rotation</label>
      <input id="cameras-and-lenses-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>The black slider controls the aperture, the blue</h2>
    <p>The black slider controls the aperture, the blue slider controls the focal length, and the red slider changes the position of the object relative to the camera.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-17" data-sim-module="cameras-and-lenses:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The black slider controls the aperture, the blue interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-17-scale">scale</label>
      <input id="cameras-and-lenses-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-17-rotation">rotation</label>
      <input id="cameras-and-lenses-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>Make the sides non-parallel by using the slider: What we</h2>
    <p>You can make the sides non-parallel by using the slider: What we perceive as white light is a combination of lights of different wavelengths.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-18" data-sim-module="cameras-and-lenses:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Make the sides non-parallel by using the slider: What we interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-18-scale">scale</label>
      <input id="cameras-and-lenses-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-18-rotation">rotation</label>
      <input id="cameras-and-lenses-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>Control the amount of dispersion the lens material introduces: Chromatic</h2>
    <p>Using the slider you can control the amount of dispersion the lens material introduces: Chromatic aberration may be corrected with an achromatic lens , usually in the form of a ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-19" data-sim-module="cameras-and-lenses:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control the amount of dispersion the lens material introduces: Chromatic interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-19-scale">scale</label>
      <input id="cameras-and-lenses-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-19-rotation">rotation</label>
      <input id="cameras-and-lenses-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>The simple act of pressing the shutter button</h2>
    <p>The simple act of pressing the shutter button in a camera app on a smartphone or on the body of a high-end DSLR is effortless, but it's at this moment when, through carefully gu...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="cameras-and-lenses:module-20" data-sim-module="cameras-and-lenses:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The simple act of pressing the shutter button interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-20-scale">scale</label>
      <input id="cameras-and-lenses-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="cameras-and-lenses-module-20-rotation">rotation</label>
      <input id="cameras-and-lenses-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Cameras and Lenses works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Lights and Shadows]]
- [[Color Spaces]]
- [[GPS]]
