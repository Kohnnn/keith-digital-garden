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
  Interactive allocator sandbox for request size, churn, and fragmentation
  behavior.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Memory-Allocation
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Memory Allocation

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://samwho.dev/memory-allocation/" target="_blank" rel="noopener noreferrer">Memory Allocation by Sam Rose</a></p>
</div>

<p class="note-lede">Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.</p>

<div class="interactive-article" data-interactive-article="memory-allocation">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="memory-allocation" data-sync-group="memory-allocation-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Memory allocation fragmentation view"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="memory-allocation-request">request size</label>
      <input id="memory-allocation-request" data-control="request" type="range" min="1" max="8" step="1" value="4" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-churn">churn</label>
      <input id="memory-allocation-churn" data-control="churn" type="range" min="0.1" max="0.95" step="0.01" value="0.45" />
    </div>
    <div class="interactive-sim-control">
      <label for="memory-allocation-reserve">reserve blocks</label>
      <input id="memory-allocation-reserve" data-control="reserve" type="range" min="4" max="20" step="1" value="12" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="memory-allocation">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="memory-allocation" data-step-preset="module-01" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 01</span>
      <h2>Memory Allocation</h2>
      <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="memory-allocation" data-step-preset="module-02" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 02</span>
      <h2>malloc and free</h2>
      <p>The ticks along the slider represent calls to malloc and free .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="memory-allocation" data-step-preset="module-03" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 03</span>
      <h2>What is memory?</h2>
      <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="memory-allocation" data-step-preset="module-04" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 04</span>
      <h2>The simplest malloc</h2>
      <p>The ticks along the slider represent calls to malloc and free .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="memory-allocation" data-step-preset="module-05" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 05</span>
      <h2>The simplest general-purpose malloc</h2>
      <p>The ticks along the slider represent calls to malloc and free .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="memory-allocation" data-step-preset="module-06" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 06</span>
      <h2>Fragmentation</h2>
      <p>Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="memory-allocation" data-step-preset="module-07" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 07</span>
      <h2>A quick malloc puzzle</h2>
      <p>The ticks along the slider represent calls to malloc and free .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="memory-allocation" data-step-preset="module-08" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 08</span>
      <h2>Inline bookkeeping</h2>
      <p>This is where the seemingly wasteful bookkeeping comes into play.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="memory-allocation" data-step-preset="module-09" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 09</span>
      <h2>Playground</h2>
      <p># Playground If you're keen to take your new found knowledge and try your hand at writing your own allocators, you can click here to go to my allocator playground.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="memory-allocation" data-step-preset="module-10" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 10</span>
      <h2>Conclusion</h2>
      <p>Narrative/reference section in Memory Allocation that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="memory-allocation" data-step-preset="module-11" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 11</span>
      <h2>Acknowledgments</h2>
      <p>Explains Acknowledgments within Memory Allocation using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="memory-allocation" data-step-preset="module-12" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 12</span>
      <h2>You'll notice there's now a slider</h2>
      <p>You'll notice there's now a slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="memory-allocation" data-step-preset="module-13" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 13</span>
      <h2>Dragging the slider to the right advances time</h2>
      <p>Dragging the slider to the right advances time forward, and dragging it left rewinds.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="memory-allocation" data-step-preset="module-14" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 14</span>
      <h2>Click anywhere on the grid and then use the arrow</h2>
      <p>You can also click anywhere on the grid and then use the arrow keys on your keyboard, or you can use the left and right buttons.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap, keyboard. <strong>Response:</strong> click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction; vector arrows refresh to reflect direction/magnitud...</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="memory-allocation" data-step-preset="module-15" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 15</span>
      <h2>Move the slider below to see a comparison</h2>
      <p>Move the slider below to see a comparison between decimal numbers and hexadecimal numbers.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="memory-allocation" data-step-preset="module-16" data-sync-group="memory-allocation-main">
      <span class="casefile-label">Module 16</span>
      <h2>Have a think about this before playing with</h2>
      <p>Have a think about this before playing with the slider below.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
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
    <p>The Memory Allocation article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Load Balancing]]
- [[Exposing NSMutableArray]]
- [[Exposing Floating Point]]
