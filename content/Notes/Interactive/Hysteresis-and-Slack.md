---
title: Hysteresis & Slack
tags:
  - portfolio
  - blog
  - external
  - interactive
  - systems
  - mechanics
draft: false
description: >-
  Interactive intuition-builder for hysteresis and mechanical slack showing path
  dependence, loops, and memory effects in input-output systems.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Hysteresis-and-Slack
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Hysteresis & Slack

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://joshuahhh.com/projects/hysteresis/" target="_blank" rel="noopener noreferrer">Hysteresis & Slack by joshuahhh</a></p>
</div>

<p class="note-lede">Interactive intuition-builder for hysteresis and mechanical slack showing path dependence, loops, and memory effects in input-output systems.</p>

<div class="interactive-article" data-interactive-article="hysteresis-slack">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>hysteresis & slack</h2>
    <p>In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-01" data-sim-module="hysteresis-slack:module-01" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="hysteresis & slack interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-01-slack">slack</label>
      <input id="hysteresis-slack-module-01-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-01-damping">damping</label>
      <input id="hysteresis-slack-module-01-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-01-drive">drive</label>
      <input id="hysteresis-slack-module-01-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Here are two machines you can control</h2>
    <p>In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-02" data-sim-module="hysteresis-slack:module-02" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Here are two machines you can control interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-02-slack">slack</label>
      <input id="hysteresis-slack-module-02-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-02-damping">damping</label>
      <input id="hysteresis-slack-module-02-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-02-drive">drive</label>
      <input id="hysteresis-slack-module-02-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Set a trajectory for the input pin</h2>
    <p>In this one, the output pin of the slider is rigidly connected to the input pin .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-03" data-sim-module="hysteresis-slack:module-03" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Set a trajectory for the input pin interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-03-slack">slack</label>
      <input id="hysteresis-slack-module-03-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-03-damping">damping</label>
      <input id="hysteresis-slack-module-03-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-03-drive">drive</label>
      <input id="hysteresis-slack-module-03-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · chart/plot module</span>
    <h2>The first plot is a simple curve</h2>
    <p>The first plot is a simple curve.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-04" data-sim-module="hysteresis-slack:module-04" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The first plot is a simple curve interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-04-slack">slack</label>
      <input id="hysteresis-slack-module-04-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-04-damping">damping</label>
      <input id="hysteresis-slack-module-04-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-04-drive">drive</label>
      <input id="hysteresis-slack-module-04-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · chart/plot module</span>
    <h2>But the second plot is made out of</h2>
    <p>But the second plot is made out of loops.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-05" data-sim-module="hysteresis-slack:module-05" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="But the second plot is made out of interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-05-slack">slack</label>
      <input id="hysteresis-slack-module-05-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-05-damping">damping</label>
      <input id="hysteresis-slack-module-05-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-05-drive">drive</label>
      <input id="hysteresis-slack-module-05-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>So let's give the computer some "history" to</h2>
    <p>So let's give the computer some "history" to play with.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-06" data-sim-module="hysteresis-slack:module-06" data-sim-shared="hysteresis-core" data-sim-pause-group="hysteresis-slack-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="So let's give the computer some "history" to interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-06-slack">slack</label>
      <input id="hysteresis-slack-module-06-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-06-damping">damping</label>
      <input id="hysteresis-slack-module-06-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-06-drive">drive</label>
      <input id="hysteresis-slack-module-06-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Click & drag to define the path of</h2>
    <p>Click & drag to define the path of the input pin over time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag, click/tap. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-07" data-sim-module="hysteresis-slack:module-07" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Click & drag to define the path of interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-07-slack">slack</label>
      <input id="hysteresis-slack-module-07-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-07-damping">damping</label>
      <input id="hysteresis-slack-module-07-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-07-drive">drive</label>
      <input id="hysteresis-slack-module-07-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Hover to see the future trajectory of the</h2>
    <p>Hover to see the future trajectory of the output pin from the point you've selected.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> hover. <strong>Response:</strong> hover reveals contextual overlays or future trajectory hints</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-08" data-sim-module="hysteresis-slack:module-08" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Hover to see the future trajectory of the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-08-slack">slack</label>
      <input id="hysteresis-slack-module-08-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-08-damping">damping</label>
      <input id="hysteresis-slack-module-08-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-08-drive">drive</label>
      <input id="hysteresis-slack-module-08-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>One way to put it — the slider</h2>
    <p>One way to put it — the slider has a memory (the position of the output pin), which has its own existence, independent of the input.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-09" data-sim-module="hysteresis-slack:module-09" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="One way to put it — the slider interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-09-slack">slack</label>
      <input id="hysteresis-slack-module-09-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-09-damping">damping</label>
      <input id="hysteresis-slack-module-09-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-09-drive">drive</label>
      <input id="hysteresis-slack-module-09-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>So, if the external forces are strong enough,</h2>
    <p>So, if the external forces are strong enough, the slider's memory is overwhelmed.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-10" data-sim-module="hysteresis-slack:module-10" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="So, if the external forces are strong enough, interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-10-slack">slack</label>
      <input id="hysteresis-slack-module-10-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-10-damping">damping</label>
      <input id="hysteresis-slack-module-10-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-10-drive">drive</label>
      <input id="hysteresis-slack-module-10-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>It's like H is the input pin and</h2>
    <p>It's like H is the input pin and M is the output pin in some weird slider system.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="hysteresis-slack:module-11" data-sim-module="hysteresis-slack:module-11" data-sim-shared="hysteresis-core">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="It's like H is the input pin and interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-11-slack">slack</label>
      <input id="hysteresis-slack-module-11-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-11-damping">damping</label>
      <input id="hysteresis-slack-module-11-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-module-11-drive">drive</label>
      <input id="hysteresis-slack-module-11-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
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
    <p>Interactive intuition-builder for hysteresis and mechanical slack showing path dependence, loops, and memory effects in input-output systems.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Hysteresis & Slack works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Load Balancing]]
- [[Memory Allocation]]
- [[Mechanical Watch]]
