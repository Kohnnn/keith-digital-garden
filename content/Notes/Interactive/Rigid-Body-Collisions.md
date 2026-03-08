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
description: >-
  Physics/math explainer for 2D rigid-body collision resolution with vector
  geometry, normals, and relative-velocity intuition.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Rigid-Body-Collisions
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Rigid Body Collisions

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://www.sassnow.ski/rigid-body-collisions/1" target="_blank" rel="noopener noreferrer">Rigid Body Collisions by Kai Sassnowski</a></p>
</div>

<p class="note-lede">Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.</p>

<div class="interactive-article" data-interactive-article="rigid-body-collisions">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>2D Rigid Body Collision Resolution Part 1: Defining the problem</h2>
    <p>Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-01" data-sim-module="rigid-body-collisions:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="2D Rigid Body Collision Resolution Part 1: Defining the problem interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-01-scale">scale</label>
      <input id="rigid-body-collisions-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-01-rotation">rotation</label>
      <input id="rigid-body-collisions-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Before we start</h2>
    <p>Explains Before we start within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-02" data-sim-module="rigid-body-collisions:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Before we start interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-02-scale">scale</label>
      <input id="rigid-body-collisions-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-02-rotation">rotation</label>
      <input id="rigid-body-collisions-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Rigid bodies</h2>
    <p>Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-03" data-sim-module="rigid-body-collisions:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Rigid bodies interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-03-scale">scale</label>
      <input id="rigid-body-collisions-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-03-rotation">rotation</label>
      <input id="rigid-body-collisions-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Collision detection vs. collision resolution</h2>
    <p>The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-04" data-sim-module="rigid-body-collisions:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Collision detection vs. collision resolution interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-04-scale">scale</label>
      <input id="rigid-body-collisions-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-04-rotation">rotation</label>
      <input id="rigid-body-collisions-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>What are we trying to do?</h2>
    <p>Explains What are we trying to do? within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-05" data-sim-module="rigid-body-collisions:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="What are we trying to do? interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-05-scale">scale</label>
      <input id="rigid-body-collisions-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-05-rotation">rotation</label>
      <input id="rigid-body-collisions-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>What is a collision?</h2>
    <p>The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-06" data-sim-module="rigid-body-collisions:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="What is a collision? interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-06-scale">scale</label>
      <input id="rigid-body-collisions-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-06-rotation">rotation</label>
      <input id="rigid-body-collisions-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Towards a definition</h2>
    <p>Explains Towards a definition within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-07" data-sim-module="rigid-body-collisions:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Towards a definition interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-07-scale">scale</label>
      <input id="rigid-body-collisions-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-07-rotation">rotation</label>
      <input id="rigid-body-collisions-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Surface normals</h2>
    <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-08" data-sim-module="rigid-body-collisions:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Surface normals interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-08-scale">scale</label>
      <input id="rigid-body-collisions-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-08-rotation">rotation</label>
      <input id="rigid-body-collisions-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>The dot product</h2>
    <p>Demonstrates collision geometry and relative-velocity tests, linking vector math directly to contact outcomes.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-09" data-sim-module="rigid-body-collisions:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The dot product interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-09-scale">scale</label>
      <input id="rigid-body-collisions-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-09-rotation">rotation</label>
      <input id="rigid-body-collisions-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Tying it all together</h2>
    <p>Explains Tying it all together within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-10" data-sim-module="rigid-body-collisions:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tying it all together interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-10-scale">scale</label>
      <input id="rigid-body-collisions-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-10-rotation">rotation</label>
      <input id="rigid-body-collisions-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · reference/narrative section</span>
    <h2>Conclusion</h2>
    <p>Narrative/reference section in Rigid Body Collisions that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>In this series of blog posts, I want</h2>
    <p>In this series of blog posts, I want to show you what actually goes on behind the scenes in a physics simulation like the one above.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-12" data-sim-module="rigid-body-collisions:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In this series of blog posts, I want interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-12-scale">scale</label>
      <input id="rigid-body-collisions-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-12-rotation">rotation</label>
      <input id="rigid-body-collisions-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>We can represent an object's current velocity with</h2>
    <p>We can represent an object's current velocity with an arrow where the length of the arrow represents the object's current speed and the direction the arrow is pointing its trave...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-13" data-sim-module="rigid-body-collisions:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="We can represent an object's current velocity with interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-13-scale">scale</label>
      <input id="rigid-body-collisions-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-13-rotation">rotation</label>
      <input id="rigid-body-collisions-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>You can change the box's velocity by dragging the arrow</h2>
    <p>In the demonstration below, you can change the box's velocity by dragging the arrow around.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-14" data-sim-module="rigid-body-collisions:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can change the box's velocity by dragging the arrow interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-14-scale">scale</label>
      <input id="rigid-body-collisions-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-14-rotation">rotation</label>
      <input id="rigid-body-collisions-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Always reset the simulation with the button</h2>
    <p>If you ever get lost in space, you can always reset the simulation with the button.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-15" data-sim-module="rigid-body-collisions:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Always reset the simulation with the button interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-15-scale">scale</label>
      <input id="rigid-body-collisions-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-15-rotation">rotation</label>
      <input id="rigid-body-collisions-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Whenever you see a little arrow over a</h2>
    <p>Whenever you see a little arrow over a variable like this s ⃗ \vec{s} s , this means that the variable is a vector.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-16" data-sim-module="rigid-body-collisions:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Whenever you see a little arrow over a interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-16-scale">scale</label>
      <input id="rigid-body-collisions-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-16-rotation">rotation</label>
      <input id="rigid-body-collisions-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>By dragging the slider to progress time</h2>
    <p>You can see this happening in the demonstration below by dragging the slider to progress time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-17" data-sim-module="rigid-body-collisions:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="By dragging the slider to progress time interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-17-scale">scale</label>
      <input id="rigid-body-collisions-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-17-rotation">rotation</label>
      <input id="rigid-body-collisions-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>Verify the result by playing the simulation</h2>
    <p>You can verify the result by playing the simulation.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-18" data-sim-module="rigid-body-collisions:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Verify the result by playing the simulation interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-18-scale">scale</label>
      <input id="rigid-body-collisions-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-18-rotation">rotation</label>
      <input id="rigid-body-collisions-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>To explore this idea, let's play a little</h2>
    <p>To explore this idea, let's play a little game.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-19" data-sim-module="rigid-body-collisions:module-19" data-sim-pause-group="rigid-body-collisions-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="To explore this idea, let's play a little interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-19-scale">scale</label>
      <input id="rigid-body-collisions-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-19-rotation">rotation</label>
      <input id="rigid-body-collisions-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>To make things a little more challenging, the</h2>
    <p>To make things a little more challenging, the angle of inclination of the floor is going to change every time you reset the game.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-20" data-sim-module="rigid-body-collisions:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="To make things a little more challenging, the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-20-scale">scale</label>
      <input id="rigid-body-collisions-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-20-rotation">rotation</label>
      <input id="rigid-body-collisions-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>Click on them to reveal the answers</h2>
    <p>You can click on them to reveal the answers.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-21" data-sim-module="rigid-body-collisions:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Click on them to reveal the answers interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-21-scale">scale</label>
      <input id="rigid-body-collisions-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-21-rotation">rotation</label>
      <input id="rigid-body-collisions-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>Control the angle between the vectors with the slider below</h2>
    <p>You can control the angle between the vectors with the slider below.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="rigid-body-collisions:module-22" data-sim-module="rigid-body-collisions:module-22">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control the angle between the vectors with the slider below interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-22-scale">scale</label>
      <input id="rigid-body-collisions-module-22-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="rigid-body-collisions-module-22-rotation">rotation</label>
      <input id="rigid-body-collisions-module-22-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Rigid Body Collisions works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Naval Architecture]]
- [[Bicycle]]
- [[Sound]]
