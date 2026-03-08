---
title: Memory Allocation
tags:
  - portfolio
  - blog
  - external
  - interactive
  - systems
  - memory
draft: false
description: >-
  Allocator internals walkthrough from naive malloc/free to fragmentation and
  bookkeeping, with timeline-driven memory visualizations.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Memory-Allocation
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Memory Allocation

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://samwho.dev/memory-allocation/" target="_blank" rel="noopener noreferrer">Memory Allocation by Sam Rose</a></p>
</div>

<p class="note-lede">Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.</p>

<div class="interactive-article" data-interactive-article="memory-allocation">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Memory Allocation</h2>
    <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-01" data-sim-module="memory-allocation:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Memory Allocation interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-01-request">request</label>
      <input id="memory-allocation-module-01-request" data-control="request" type="range" min="1" max="8" step="1" value="4" />
    </div>
    <button data-control="reset" type="button">repack</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>malloc and free</h2>
    <p>The ticks along the slider represent calls to malloc and free .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-02" data-sim-module="memory-allocation:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="malloc and free interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-02-scale">scale</label>
      <input id="memory-allocation-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-02-rotation">rotation</label>
      <input id="memory-allocation-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>What is memory?</h2>
    <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-03" data-sim-module="memory-allocation:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="What is memory? interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-03-scale">scale</label>
      <input id="memory-allocation-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-03-rotation">rotation</label>
      <input id="memory-allocation-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>The simplest malloc</h2>
    <p>The ticks along the slider represent calls to malloc and free .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-04" data-sim-module="memory-allocation:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The simplest malloc interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-04-scale">scale</label>
      <input id="memory-allocation-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-04-rotation">rotation</label>
      <input id="memory-allocation-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>The simplest general-purpose malloc</h2>
    <p>The ticks along the slider represent calls to malloc and free .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-05" data-sim-module="memory-allocation:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The simplest general-purpose malloc interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-05-scale">scale</label>
      <input id="memory-allocation-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-05-rotation">rotation</label>
      <input id="memory-allocation-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Fragmentation</h2>
    <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-06" data-sim-module="memory-allocation:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Fragmentation interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-06-scale">scale</label>
      <input id="memory-allocation-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-06-rotation">rotation</label>
      <input id="memory-allocation-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>A quick malloc puzzle</h2>
    <p>The ticks along the slider represent calls to malloc and free .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-07" data-sim-module="memory-allocation:module-07">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="A quick malloc puzzle interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-07-scale">scale</label>
      <input id="memory-allocation-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-07-rotation">rotation</label>
      <input id="memory-allocation-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Inline bookkeeping</h2>
    <p>This is where the seemingly wasteful bookkeeping comes into play.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-08" data-sim-module="memory-allocation:module-08" data-sim-pause-group="memory-allocation-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Inline bookkeeping interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-08-scale">scale</label>
      <input id="memory-allocation-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-08-rotation">rotation</label>
      <input id="memory-allocation-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Playground</h2>
    <p># Playground If you're keen to take your new found knowledge and try your hand at writing your own allocators, you can click here to go to my allocator playground.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-09" data-sim-module="memory-allocation:module-09">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Playground interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-09-scale">scale</label>
      <input id="memory-allocation-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-09-rotation">rotation</label>
      <input id="memory-allocation-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · reference/narrative section</span>
    <h2>Conclusion</h2>
    <p>Narrative/reference section in Memory Allocation that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Acknowledgments</h2>
    <p>Explains Acknowledgments within Memory Allocation using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-11" data-sim-module="memory-allocation:module-11">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Acknowledgments interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-11-scale">scale</label>
      <input id="memory-allocation-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-11-rotation">rotation</label>
      <input id="memory-allocation-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>You'll notice there's now a slider</h2>
    <p>You'll notice there's now a slider.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-12" data-sim-module="memory-allocation:module-12">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="You'll notice there's now a slider interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-12-scale">scale</label>
      <input id="memory-allocation-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-12-rotation">rotation</label>
      <input id="memory-allocation-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Dragging the slider to the right advances time</h2>
    <p>Dragging the slider to the right advances time forward, and dragging it left rewinds.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-13" data-sim-module="memory-allocation:module-13">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Dragging the slider to the right advances time interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-13-scale">scale</label>
      <input id="memory-allocation-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-13-rotation">rotation</label>
      <input id="memory-allocation-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Click anywhere on the grid and then use the arrow</h2>
    <p>You can also click anywhere on the grid and then use the arrow keys on your keyboard, or you can use the left and right buttons.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap, keyboard. <strong>Response:</strong> click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction; vector arrows refresh to reflect direction/magnitud...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-14" data-sim-module="memory-allocation:module-14">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Click anywhere on the grid and then use the arrow interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-14-speed">speed</label>
      <input id="memory-allocation-module-14-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-14-ratio">ratio</label>
      <input id="memory-allocation-module-14-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-14-impulse">impulse</label>
      <input id="memory-allocation-module-14-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Move the slider below to see a comparison</h2>
    <p>Move the slider below to see a comparison between decimal numbers and hexadecimal numbers.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-15" data-sim-module="memory-allocation:module-15">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Move the slider below to see a comparison interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-15-scale">scale</label>
      <input id="memory-allocation-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-15-rotation">rotation</label>
      <input id="memory-allocation-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Have a think about this before playing with</h2>
    <p>Have a think about this before playing with the slider below.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="memory-allocation:module-16" data-sim-module="memory-allocation:module-16">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Have a think about this before playing with interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-16-scale">scale</label>
      <input id="memory-allocation-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-module-16-rotation">rotation</label>
      <input id="memory-allocation-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Memory Allocation works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Load Balancing]]
- [[Exposing NSMutableArray]]
- [[Exposing Floating Point]]
