---
title: Gears
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - mechanics
draft: false
description: >-
  Mechanical transmission explainer about angular velocity, torque transfer,
  involute tooth geometry, and multi-gear train behavior.
created: '2020-02-12'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Gears
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Gears

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gears/" target="_blank" rel="noopener noreferrer">Gears by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.</p>

<div class="interactive-article" data-interactive-article="gears">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Gears</h2>
    <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-01" data-sim-module="gears:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gears interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-01-speed">speed</label>
      <input id="gears-module-01-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-01-ratio">ratio</label>
      <input id="gears-module-01-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-01-impulse">impulse</label>
      <input id="gears-module-01-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Spinning</h2>
    <p>Explains Spinning within Gears using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-02" data-sim-module="gears:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Spinning interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-02-speed">speed</label>
      <input id="gears-module-02-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-02-ratio">ratio</label>
      <input id="gears-module-02-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-02-impulse">impulse</label>
      <input id="gears-module-02-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Disc</h2>
    <p>In the demonstration below you can control its angular velocity with a slider: The small triangular indicator is there to help visualize the current orientation of the disc.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-03" data-sim-module="gears:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Disc interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-03-speed">speed</label>
      <input id="gears-module-03-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-03-ratio">ratio</label>
      <input id="gears-module-03-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-03-impulse">impulse</label>
      <input id="gears-module-03-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Transmission</h2>
    <p>Explains Transmission within Gears using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-04" data-sim-module="gears:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Transmission interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-04-speed">speed</label>
      <input id="gears-module-04-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-04-ratio">ratio</label>
      <input id="gears-module-04-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-04-impulse">impulse</label>
      <input id="gears-module-04-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Torque</h2>
    <p>However, the radii of both discs are scaled by the same factor of cos(alpha) , where alpha is the pressure angle controlled by the slider in the simulation above: T out = T in ·...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-05" data-sim-module="gears:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Torque interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-05-speed">speed</label>
      <input id="gears-module-05-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-05-ratio">ratio</label>
      <input id="gears-module-05-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-05-impulse">impulse</label>
      <input id="gears-module-05-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Tangent & Normal</h2>
    <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-06" data-sim-module="gears:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Tangent & Normal interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-06-speed">speed</label>
      <input id="gears-module-06-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-06-ratio">ratio</label>
      <input id="gears-module-06-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-06-impulse">impulse</label>
      <input id="gears-module-06-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Strings Attached</h2>
    <p>I attached a piece of paper to the underside of the yellow disc so that we can see the trail left by the marker as the disc rotates: The straight part of the string represents t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-07" data-sim-module="gears:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Strings Attached interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-07-speed">speed</label>
      <input id="gears-module-07-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-07-ratio">ratio</label>
      <input id="gears-module-07-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-07-impulse">impulse</label>
      <input id="gears-module-07-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Multiple Gears</h2>
    <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-08" data-sim-module="gears:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Multiple Gears interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-08-speed">speed</label>
      <input id="gears-module-08-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-08-ratio">ratio</label>
      <input id="gears-module-08-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-08-impulse">impulse</label>
      <input id="gears-module-08-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · reference/narrative section</span>
    <h2>Further Watching and Reading</h2>
    <p>Narrative/reference section in Gears that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · reference/narrative section</span>
    <h2>Final Words</h2>
    <p>Narrative/reference section in Gears that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Play and pause them by clicking tapping on the button</h2>
    <p>Movement is important in this article so most of the visualizations are animated - you can play and pause them by clicking tapping on the button in their bottom left corner.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-11" data-sim-module="gears:module-11" data-sim-pause-group="gears-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Play and pause them by clicking tapping on the button interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-11-speed">speed</label>
      <input id="gears-module-11-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-11-ratio">ratio</label>
      <input id="gears-module-11-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-11-impulse">impulse</label>
      <input id="gears-module-11-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Globally pause all animations, just make sure to unpause them</h2>
    <p>By default the animations are enabled, but if you find them distracting, or you want to save power, you can globally pause all animations, just make sure to unpause them as needed.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-12" data-sim-module="gears:module-12" data-sim-pause-group="gears-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Globally pause all animations, just make sure to unpause them interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-12-speed">speed</label>
      <input id="gears-module-12-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-12-ratio">ratio</label>
      <input id="gears-module-12-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-12-impulse">impulse</label>
      <input id="gears-module-12-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>You can control the fan’s speed using a slider</h2>
    <p>In the demonstration below you can control the fan’s speed using a slider: The speed of a rotating fan is a different kind of speed than that of a car - it describes how quickly...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-13" data-sim-module="gears:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can control the fan’s speed using a slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-13-speed">speed</label>
      <input id="gears-module-13-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-13-ratio">ratio</label>
      <input id="gears-module-13-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-13-impulse">impulse</label>
      <input id="gears-module-13-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Let’s investigate what’s going on by controlling the</h2>
    <p>Let’s investigate what’s going on by controlling the time back and forth with a slider.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-14" data-sim-module="gears:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s investigate what’s going on by controlling the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-14-speed">speed</label>
      <input id="gears-module-14-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-14-ratio">ratio</label>
      <input id="gears-module-14-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-14-impulse">impulse</label>
      <input id="gears-module-14-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>See the flattened arcs of the paths traced by the</h2>
    <p>As the disc rotates the points leave a trace of the path they followed: At the bottom part of the simulation you can see the flattened arcs of the paths traced by the six points.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-15" data-sim-module="gears:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="See the flattened arcs of the paths traced by the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-15-speed">speed</label>
      <input id="gears-module-15-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-15-ratio">ratio</label>
      <input id="gears-module-15-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-15-impulse">impulse</label>
      <input id="gears-module-15-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>The driving yellow disc is powered by some engine, which</h2>
    <p>In the demonstration below the driving yellow disc is powered by some engine, which I’ve indicated using a rotating arrow near the shaft.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-16" data-sim-module="gears:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The driving yellow disc is powered by some engine, which interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-16-speed">speed</label>
      <input id="gears-module-16-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-16-ratio">ratio</label>
      <input id="gears-module-16-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-16-impulse">impulse</label>
      <input id="gears-module-16-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>You can control the ratio of radii of the two</h2>
    <p>In the simulation below you can control the ratio of radii of the two discs.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-17" data-sim-module="gears:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can control the ratio of radii of the two interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-17-speed">speed</label>
      <input id="gears-module-17-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-17-ratio">ratio</label>
      <input id="gears-module-17-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-17-impulse">impulse</label>
      <input id="gears-module-17-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>You can witness what happens to the effective circle radii</h2>
    <p>In the simulation below you can witness what happens to the effective circle radii when the line of force does not go through the pitch point: As you can see, if the acting forc...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-18" data-sim-module="gears:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can witness what happens to the effective circle radii interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-18-speed">speed</label>
      <input id="gears-module-18-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-18-ratio">ratio</label>
      <input id="gears-module-18-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-18-impulse">impulse</label>
      <input id="gears-module-18-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>Let’s see what happens when we put a</h2>
    <p>Let’s see what happens when we put a little perpendicular red marker on that string and start unwinding it from one disc and winding it onto another.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-19" data-sim-module="gears:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s see what happens when we put a interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-19-speed">speed</label>
      <input id="gears-module-19-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-19-ratio">ratio</label>
      <input id="gears-module-19-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-19-impulse">impulse</label>
      <input id="gears-module-19-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · chart/plot module</span>
    <h2>However, that’s exactly what the red marker does</h2>
    <p>However, that’s exactly what the red marker does - at every point of the curve it is perpendicular to the string, and thus it’s perpendicular to the normal.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-20" data-sim-module="gears:module-20">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="However, that’s exactly what the red marker does interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-20-slack">slack</label>
      <input id="gears-module-20-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-20-damping">damping</label>
      <input id="gears-module-20-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-20-drive">drive</label>
      <input id="gears-module-20-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>We can look at this same situation from</h2>
    <p>We can look at this same situation from a point of view of the single disc, by unwinding a string with a marker from its surface: The shape we’ve created is called an involute .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-21" data-sim-module="gears:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="We can look at this same situation from interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-21-speed">speed</label>
      <input id="gears-module-21-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-21-ratio">ratio</label>
      <input id="gears-module-21-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-21-impulse">impulse</label>
      <input id="gears-module-21-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>The magic marker at the end of the</h2>
    <p>The magic marker at the end of the string passes through the pitch circle , which corresponds to the idealized friction disc, only to end at the addendum circle which defines th...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-22" data-sim-module="gears:module-22">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The magic marker at the end of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-22-speed">speed</label>
      <input id="gears-module-22-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-22-ratio">ratio</label>
      <input id="gears-module-22-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-22-impulse">impulse</label>
      <input id="gears-module-22-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>The green line shows the pitch circle, the red line</h2>
    <p>In the simulation below the green line shows the pitch circle, the red line shows the base circle of the involute, and the slider controls the radius of the gear: Two matching i...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gears:module-23" data-sim-module="gears:module-23">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The green line shows the pitch circle, the red line interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-module-23-speed">speed</label>
      <input id="gears-module-23-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-23-ratio">ratio</label>
      <input id="gears-module-23-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-module-23-impulse">impulse</label>
      <input id="gears-module-23-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
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
    <p>Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Gears works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Mechanical Watch]]
- [[Bicycle]]
- [[Internal Combustion Engine]]
