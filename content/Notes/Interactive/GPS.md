---
title: GPS
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - satellites
draft: false
description: >-
  End-to-end GPS explainer including trilateration, clock bias, orbital motion,
  satellite visibility, and signal propagation constraints.
created: '2022-01-18'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/GPS
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# GPS

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gps/" target="_blank" rel="noopener noreferrer">GPS by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.</p>

<div class="interactive-article" data-interactive-article="gps">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>GPS</h2>
    <p>Demonstrates satellite geometry and timing calculations used to estimate receiver position and clock bias.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-01" data-sim-module="gps:module-01" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-01-time">time</label>
      <input id="gps-module-01-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-01-altitude">altitude</label>
      <input id="gps-module-01-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-01-inclination">inclination</label>
      <input id="gps-module-01-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Simple Positioning</h2>
    <p>Notice that the intersection point of the three spheres lets us pinpoint the position and altitude even as you drag the figurine around: Throughout these examples we’ve been usi...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-02" data-sim-module="gps:module-02" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Simple Positioning interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-02-time">time</label>
      <input id="gps-module-02-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-02-altitude">altitude</label>
      <input id="gps-module-02-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-02-inclination">inclination</label>
      <input id="gps-module-02-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Time of Flight</h2>
    <p>In the simulation below you can control the progress of time with the slider.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-03" data-sim-module="gps:module-03" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Time of Flight interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-03-time">time</label>
      <input id="gps-module-03-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-03-altitude">altitude</label>
      <input id="gps-module-03-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-03-inclination">inclination</label>
      <input id="gps-module-03-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Do you hear me?</h2>
    <p>Explains Do you hear me? within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-04" data-sim-module="gps:module-04" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Do you hear me? interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-04-time">time</label>
      <input id="gps-module-04-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-04-altitude">altitude</label>
      <input id="gps-module-04-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-04-inclination">inclination</label>
      <input id="gps-module-04-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Do I hear you?</h2>
    <p>Explains Do I hear you? within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-05" data-sim-module="gps:module-05" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Do I hear you? interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-05-time">time</label>
      <input id="gps-module-05-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-05-altitude">altitude</label>
      <input id="gps-module-05-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-05-inclination">inclination</label>
      <input id="gps-module-05-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Leveling Up</h2>
    <p>Explains Leveling Up within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-06" data-sim-module="gps:module-06" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Leveling Up interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-06-time">time</label>
      <input id="gps-module-06-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-06-altitude">altitude</label>
      <input id="gps-module-06-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-06-inclination">inclination</label>
      <input id="gps-module-06-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Higher, Better, Faster, Stronger</h2>
    <p>Explains Higher, Better, Faster, Stronger within GPS using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-07" data-sim-module="gps:module-07" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Higher, Better, Faster, Stronger interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-07-time">time</label>
      <input id="gps-module-07-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-07-altitude">altitude</label>
      <input id="gps-module-07-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-07-inclination">inclination</label>
      <input id="gps-module-07-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Orbits</h2>
    <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-08" data-sim-module="gps:module-08" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Orbits interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-08-time">time</label>
      <input id="gps-module-08-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-08-altitude">altitude</label>
      <input id="gps-module-08-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-08-inclination">inclination</label>
      <input id="gps-module-08-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>GPS Orbits</h2>
    <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-09" data-sim-module="gps:module-09" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="GPS Orbits interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-09-time">time</label>
      <input id="gps-module-09-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-09-altitude">altitude</label>
      <input id="gps-module-09-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-09-inclination">inclination</label>
      <input id="gps-module-09-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Keplerian Elements</h2>
    <p>Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-10" data-sim-module="gps:module-10" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Keplerian Elements interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-10-time">time</label>
      <input id="gps-module-10-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-10-altitude">altitude</label>
      <input id="gps-module-10-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-10-inclination">inclination</label>
      <input id="gps-module-10-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Time</h2>
    <p>In the simulation below you can control the progress of time with the slider.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-11" data-sim-module="gps:module-11" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Time interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-11-time">time</label>
      <input id="gps-module-11-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-11-altitude">altitude</label>
      <input id="gps-module-11-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-11-inclination">inclination</label>
      <input id="gps-module-11-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Signal Propagation</h2>
    <p>In many cases the receiver will never get the signal unless we put the emitter high enough using the second slider: By putting the emitter at an altitude we can thankfully mitig...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-12" data-sim-module="gps:module-12" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Signal Propagation interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-12-time">time</label>
      <input id="gps-module-12-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-12-altitude">altitude</label>
      <input id="gps-module-12-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-12-inclination">inclination</label>
      <input id="gps-module-12-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Drag the view around to see it from different angles:</h2>
    <p>Here’s a current constellation of active satellites, you can drag the view around to see it from different angles: However, the satellites are just a part of what makes GPS poss...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-13" data-sim-module="gps:module-13" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the view around to see it from different angles: interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-13-time">time</label>
      <input id="gps-module-13-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-13-altitude">altitude</label>
      <input id="gps-module-13-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-13-inclination">inclination</label>
      <input id="gps-module-13-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Drag the landscape itself to change the viewing angle</h2>
    <p>You can also drag the landscape itself to change the viewing angle.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-14" data-sim-module="gps:module-14" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the landscape itself to change the viewing angle interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-14-time">time</label>
      <input id="gps-module-14-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-14-altitude">altitude</label>
      <input id="gps-module-14-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-14-inclination">inclination</label>
      <input id="gps-module-14-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>We’re sending two drones at the same time, the slider</h2>
    <p>In the demonstration below we’re sending two drones at the same time, the slider once again controls the time : As the drones arrive to their destinations we get the direct meas...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-15" data-sim-module="gps:module-15" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="We’re sending two drones at the same time, the slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-15-time">time</label>
      <input id="gps-module-15-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-15-altitude">altitude</label>
      <input id="gps-module-15-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-15-inclination">inclination</label>
      <input id="gps-module-15-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Thankfully, with two clocks side by side we</h2>
    <p>Thankfully, with two clocks side by side we can try to correct for that bias using the second slider: Notice that the timeline at the bottom shows progress of both the system cl...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-16" data-sim-module="gps:module-16" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Thankfully, with two clocks side by side we interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-16-time">time</label>
      <input id="gps-module-16-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-16-altitude">altitude</label>
      <input id="gps-module-16-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-16-inclination">inclination</label>
      <input id="gps-module-16-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>You can control the user’s vertical position with a slider</h2>
    <p>In the demonstration below you can control the user’s vertical position with a slider.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-17" data-sim-module="gps:module-17" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can control the user’s vertical position with a slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-17-time">time</label>
      <input id="gps-module-17-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-17-altitude">altitude</label>
      <input id="gps-module-17-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-17-inclination">inclination</label>
      <input id="gps-module-17-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>Experience in the following simulation</h2>
    <p>So far we assumed that our local environment is perfectly flat, but when a radio wave encounters a hill it gets blocked, which you can experience in the following simulation.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-18" data-sim-module="gps:module-18" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Experience in the following simulation interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-18-time">time</label>
      <input id="gps-module-18-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-18-altitude">altitude</label>
      <input id="gps-module-18-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-18-inclination">inclination</label>
      <input id="gps-module-18-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>You can drag the yellow object around</h2>
    <p>In the demonstration below you can drag the yellow object around.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-19" data-sim-module="gps:module-19" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can drag the yellow object around interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-19-time">time</label>
      <input id="gps-module-19-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-19-altitude">altitude</label>
      <input id="gps-module-19-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-19-inclination">inclination</label>
      <input id="gps-module-19-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>As the object starts to move a yellow</h2>
    <p>As the object starts to move a yellow arrow reflects its current velocity: Note that the strength at which the object is pulled towards the planet varies with distance.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-20" data-sim-module="gps:module-20" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="As the object starts to move a yellow interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-20-time">time</label>
      <input id="gps-module-20-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-20-altitude">altitude</label>
      <input id="gps-module-20-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-20-inclination">inclination</label>
      <input id="gps-module-20-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>You can once again drag the object around, but this</h2>
    <p>In the demonstration below you can once again drag the object around, but this time it will have some initial velocity that was perhaps given to it by a rocket.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-21" data-sim-module="gps:module-21" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can once again drag the object around, but this interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-21-time">time</label>
      <input id="gps-module-21-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-21-altitude">altitude</label>
      <input id="gps-module-21-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-21-inclination">inclination</label>
      <input id="gps-module-21-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>Notice that the speed of the object ,</h2>
    <p>Notice that the speed of the object , as shown by the length of the yellow arrow , varies over the course of its journey.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-22" data-sim-module="gps:module-22" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Notice that the speed of the object , interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-22-time">time</label>
      <input id="gps-module-22-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-22-altitude">altitude</label>
      <input id="gps-module-22-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-22-inclination">inclination</label>
      <input id="gps-module-22-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>Play and pause them by clicking tapping on the button</h2>
    <p>Before we continue, I need to note that some demonstrations in the following sections are animated - you can play and pause them by clicking tapping on the button in their botto...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-23" data-sim-module="gps:module-23" data-sim-pause-group="gps-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Play and pause them by clicking tapping on the button interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-23-speed">speed</label>
      <input id="gps-module-23-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-23-ratio">ratio</label>
      <input id="gps-module-23-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-23-impulse">impulse</label>
      <input id="gps-module-23-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>Globally pause all the following demonstrations</h2>
    <p>By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-24" data-sim-module="gps:module-24" data-sim-shared="gps-core" data-sim-pause-group="gps-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Globally pause all the following demonstrations interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-24-time">time</label>
      <input id="gps-module-24-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-24-altitude">altitude</label>
      <input id="gps-module-24-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-24-inclination">inclination</label>
      <input id="gps-module-24-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · interactive simulation/diagram module</span>
    <h2>You may have noticed that the red slider</h2>
    <p>You may have noticed that the red slider controls the inclination of the orbit which is the angle between the orbital plane and the plane passing through the Earth’s equator kno...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-25" data-sim-module="gps:module-25" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You may have noticed that the red slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-25-time">time</label>
      <input id="gps-module-25-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-25-altitude">altitude</label>
      <input id="gps-module-25-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-25-inclination">inclination</label>
      <input id="gps-module-25-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-26">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 26 · interactive simulation/diagram module</span>
    <h2>You can drag the red point around to change its</h2>
    <p>In the demonstration below you can drag the red point around to change its position on the globe.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="gps:module-26" data-sim-module="gps:module-26" data-sim-shared="gps-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can drag the red point around to change its interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gps-module-26-time">time</label>
      <input id="gps-module-26-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-26-altitude">altitude</label>
      <input id="gps-module-26-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="gps-module-26-inclination">inclination</label>
      <input id="gps-module-26-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
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
    <p>End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>GPS works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Moon]]
- [[Earth and Sun]]
- [[Cameras and Lenses]]
