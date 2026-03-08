---
title: Sound
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - waves
draft: false
description: >-
  Acoustics explainer spanning particle motion, pressure waves, vibration
  frequency/amplitude, waveform superposition, and audible synthesis.
created: '2022-10-18'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Sound
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Sound

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/sound/" target="_blank" rel="noopener noreferrer">Sound by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.</p>

<div class="interactive-article" data-interactive-article="sound">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Sound</h2>
    <p>Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-01" data-sim-module="sound:module-01" data-sim-pause-group="sound-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Sound interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-01-scale">scale</label>
      <input id="sound-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-01-rotation">rotation</label>
      <input id="sound-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Air</h2>
    <p>Explains Air within Sound using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-02" data-sim-module="sound:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Air interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-02-scale">scale</label>
      <input id="sound-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-02-rotation">rotation</label>
      <input id="sound-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Making Sounds</h2>
    <p>Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-03" data-sim-module="sound:module-03" data-sim-pause-group="sound-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Making Sounds interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-03-scale">scale</label>
      <input id="sound-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-03-rotation">rotation</label>
      <input id="sound-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Pure Tones</h2>
    <p>Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-04" data-sim-module="sound:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Pure Tones interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-04-scale">scale</label>
      <input id="sound-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-04-rotation">rotation</label>
      <input id="sound-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Masses and Springs</h2>
    <p>Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-05" data-sim-module="sound:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Masses and Springs interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-05-scale">scale</label>
      <input id="sound-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-05-rotation">rotation</label>
      <input id="sound-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Pressure Waves</h2>
    <p>In the demonstration below, you can drag the slider to change the length of the box, the plot in the bottom tracks the number of collisions per area of the box in a unit of time...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-06" data-sim-module="sound:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Pressure Waves interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-06-angle">angle</label>
      <input id="sound-module-06-angle" data-control="angle" type="range" min="-18" max="22" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-06-speed">flow speed</label>
      <input id="sound-module-06-speed" data-control="speed" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-06-detail">detail</label>
      <input id="sound-module-06-detail" data-control="detail" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · reference/narrative section</span>
    <h2>Further Reading</h2>
    <p>Narrative/reference section in Sound that summarizes results and links supporting resources.</p>
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
    <p>The higher the frequency the higher the perceived pitch: With these more complicated triangular shapes in place it may be a bit harder to understand how all these waveforms add ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Either click its keys with your mouse or use W</h2>
    <p>You can either click its keys with your mouse or use W E R keys on your computer keyboard, but before you do so make sure your system volume is at a reasonable level: You can pr...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap, keyboard. <strong>Response:</strong> click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-09" data-sim-module="sound:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Either click its keys with your mouse or use W interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-09-speed">speed</label>
      <input id="sound-module-09-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-09-ratio">ratio</label>
      <input id="sound-module-09-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-09-impulse">impulse</label>
      <input id="sound-module-09-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Drag the cube around to change the viewing angle and</h2>
    <p>You can drag the cube around to change the viewing angle and you can also control the speed of the flow of time with the slider: I need to note that this visualization simplifie...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-10" data-sim-module="sound:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the cube around to change the viewing angle and interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-10-scale">scale</label>
      <input id="sound-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-10-rotation">rotation</label>
      <input id="sound-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>With all the commotion in the previous simulation</h2>
    <p>With all the commotion in the previous simulation it may have been hard to see that the air particles collide with each other.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-11" data-sim-module="sound:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="With all the commotion in the previous simulation interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-11-scale">scale</label>
      <input id="sound-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-11-rotation">rotation</label>
      <input id="sound-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Control the speed of time with the slider: Naturally, those</h2>
    <p>To make these events easier to see you can control the speed of time with the slider: Naturally, those particles can also collide with other things in the environment.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-12" data-sim-module="sound:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control the speed of time with the slider: Naturally, those interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-12-scale">scale</label>
      <input id="sound-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-12-rotation">rotation</label>
      <input id="sound-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>I put up walls around that parcel of air</h2>
    <p>In the simulation below I put up walls around that parcel of air.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-13" data-sim-module="sound:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="I put up walls around that parcel of air interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-13-scale">scale</label>
      <input id="sound-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-13-rotation">rotation</label>
      <input id="sound-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Remember that we’re observing a significantly slowed down</h2>
    <p>Remember that we’re observing a significantly slowed down simulation.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-14" data-sim-module="sound:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Remember that we’re observing a significantly slowed down interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-14-scale">scale</label>
      <input id="sound-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-14-rotation">rotation</label>
      <input id="sound-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Do this with a slider below: The small cube of</h2>
    <p>All the collisions between particles also have other consequences, but to look at them I need to adjust the scale at which we’ll be looking at - you can do this with a slider be...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-15" data-sim-module="sound:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Do this with a slider below: The small cube of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-15-scale">scale</label>
      <input id="sound-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-15-rotation">rotation</label>
      <input id="sound-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>I enlarged that particle to make it visible, you can</h2>
    <p>In the demonstration below, I enlarged that particle to make it visible, you can also control the flow of time with the slider: Due to collisions with other molecules, it may ta...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-16" data-sim-module="sound:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="I enlarged that particle to make it visible, you can interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-16-scale">scale</label>
      <input id="sound-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-16-rotation">rotation</label>
      <input id="sound-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>Although these boundaries are imaginary, they let us</h2>
    <p>Although these boundaries are imaginary, they let us see what happens to different sections of air as you move the plate around with the slider: Notice that the individual parce...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-17" data-sim-module="sound:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Although these boundaries are imaginary, they let us interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-17-scale">scale</label>
      <input id="sound-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-17-rotation">rotation</label>
      <input id="sound-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>Notice that each of the three keys moves</h2>
    <p>Notice that each of the three keys moves the plate by a different amount, with red marker showing the total offset: Despite its simplicity, this device lets us observe a few thi...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-18" data-sim-module="sound:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Notice that each of the three keys moves interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-18-scale">scale</label>
      <input id="sound-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-18-rotation">rotation</label>
      <input id="sound-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>Three pops of different loudness is not much</h2>
    <p>Three pops of different loudness is not much to create music with as this only lets us play some simple beats.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-19" data-sim-module="sound:module-19" data-sim-pause-group="sound-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Three pops of different loudness is not much interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-19-scale">scale</label>
      <input id="sound-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-19-rotation">rotation</label>
      <input id="sound-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>You can drag the first slider to change how many</h2>
    <p>In the demonstration below, you can drag the first slider to change how many times per second the plate should jump forwards and backwards.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-20" data-sim-module="sound:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can drag the first slider to change how many interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-20-scale">scale</label>
      <input id="sound-module-20-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-20-rotation">rotation</label>
      <input id="sound-module-20-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>Control how far the plate moves with each jump using</h2>
    <p>You can also control how far the plate moves with each jump using the second slider: To describe the frequency of vibration, I’m using the unit of hertz , often abbreviated as H...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-21" data-sim-module="sound:module-21">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control how far the plate moves with each jump using interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-21-scale">scale</label>
      <input id="sound-module-21-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-21-rotation">rotation</label>
      <input id="sound-module-21-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · chart/plot module</span>
    <h2>I’m also drawing three plots corresponding to each</h2>
    <p>I’m also drawing three plots corresponding to each key , and an additional plot showing the cumulative effect of the individual motions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> keyboard. <strong>Response:</strong> keyboard shortcuts provide alternate input path for interaction; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-22" data-sim-module="sound:module-22">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="I’m also drawing three plots corresponding to each interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-22-slack">slack</label>
      <input id="sound-module-22-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-22-damping">damping</label>
      <input id="sound-module-22-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-22-drive">drive</label>
      <input id="sound-module-22-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>The slider tracks the process of the addition</h2>
    <p>The slider tracks the process of the addition of four different triangular shapes of different amplitude : Notice that each waveform expresses some shift from the current position.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="sound:module-23" data-sim-module="sound:module-23">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The slider tracks the process of the addition interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-module-23-threshold">threshold</label>
      <input id="sound-module-23-threshold" data-control="threshold" type="range" min="0.05" max="0.95" step="0.01" value="0.52" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-23-imbalance">imbalance</label>
      <input id="sound-module-23-imbalance" data-control="imbalance" type="range" min="0.1" max="0.9" step="0.01" value="0.35" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-module-23-noise">noise</label>
      <input id="sound-module-23-noise" data-control="noise" type="range" min="0" max="0.5" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset threshold</button>
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
    <p>Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Sound works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
