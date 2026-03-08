---
title: Load Balancing
tags:
  - portfolio
  - blog
  - external
  - interactive
  - systems
  - performance
draft: false
description: >-
  Systems-performance explainer comparing load-balancing algorithms through live
  request/server simulations and metric plots.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Load-Balancing
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Load Balancing

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://samwho.dev/load-balancing/" target="_blank" rel="noopener noreferrer">Load Balancing by Sam Rose</a></p>
</div>

<p class="note-lede">Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.</p>

<div class="interactive-article" data-interactive-article="load-balancing">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Load Balancing</h2>
    <p>Each simulation varied only by the load balancing algorithm used.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-01" data-sim-module="load-balancing:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Load Balancing interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-01-traffic">traffic</label>
      <input id="load-balancing-module-01-traffic" data-control="traffic" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-01-power">server skew</label>
      <input id="load-balancing-module-01-power" data-control="power" type="range" min="0.6" max="2.4" step="0.05" value="1.2" />
    </div>
    <button data-control="reset" type="button">reroute</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Visualising the problem</h2>
    <p>Explains Visualising the problem within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-02" data-sim-module="load-balancing:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Visualising the problem interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-02-scale">scale</label>
      <input id="load-balancing-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-02-rotation">rotation</label>
      <input id="load-balancing-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>When round robin doesn't cut it</h2>
    <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-03" data-sim-module="load-balancing:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="When round robin doesn't cut it interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-03-scale">scale</label>
      <input id="load-balancing-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-03-rotation">rotation</label>
      <input id="load-balancing-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Improving on round robin</h2>
    <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-04" data-sim-module="load-balancing:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Improving on round robin interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-04-scale">scale</label>
      <input id="load-balancing-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-04-rotation">rotation</label>
      <input id="load-balancing-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Moving away from round robin</h2>
    <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-05" data-sim-module="load-balancing:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Moving away from round robin interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-05-scale">scale</label>
      <input id="load-balancing-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-05-rotation">rotation</label>
      <input id="load-balancing-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Optimizing for latency</h2>
    <p>Simulates request routing across servers to compare balancing strategies under variable load and service times.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-06" data-sim-module="load-balancing:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Optimizing for latency interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-06-scale">scale</label>
      <input id="load-balancing-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-06-rotation">rotation</label>
      <input id="load-balancing-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · algorithm walkthrough module</span>
    <h2>One last algorithm</h2>
    <p>Let's see this in action in a similarly complex simulation, the same parameters we gave the dynamic weighted round robin algorithm above.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-07" data-sim-module="load-balancing:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="One last algorithm interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-07-scale">scale</label>
      <input id="load-balancing-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-07-rotation">rotation</label>
      <input id="load-balancing-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · reference/narrative section</span>
    <h2>Conclusion</h2>
    <p>Narrative/reference section in Load Balancing that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Playground</h2>
    <p>Explains Playground within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-09" data-sim-module="load-balancing:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Playground interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-09-scale">scale</label>
      <input id="load-balancing-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-09-rotation">rotation</label>
      <input id="load-balancing-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>In the following simulation, requests aren't equally expensive</h2>
    <p>In the following simulation, requests aren't equally expensive.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-10" data-sim-module="load-balancing:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In the following simulation, requests aren't equally expensive interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-10-scale">scale</label>
      <input id="load-balancing-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-10-rotation">rotation</label>
      <input id="load-balancing-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>If you watch the above simulation long enough,</h2>
    <p>If you watch the above simulation long enough, you might notice the requests subtly changing colour.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-11" data-sim-module="load-balancing:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="If you watch the above simulation long enough, interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-11-speed">speed</label>
      <input id="load-balancing-module-11-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-11-ratio">ratio</label>
      <input id="load-balancing-module-11-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-11-impulse">impulse</label>
      <input id="load-balancing-module-11-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>In the next simulation we also vary the</h2>
    <p>In the next simulation we also vary the power of each server , which is represented visually with a darker shade of grey.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-12" data-sim-module="load-balancing:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In the next simulation we also vary the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-12-scale">scale</label>
      <input id="load-balancing-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-12-rotation">rotation</label>
      <input id="load-balancing-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>In this simulation, we use each server's known</h2>
    <p>In this simulation, we use each server's known power value as its weight, and we give more powerful servers more requests as we loop through them.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-13" data-sim-module="load-balancing:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In this simulation, we use each server's known interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-13-scale">scale</label>
      <input id="load-balancing-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-13-rotation">rotation</label>
      <input id="load-balancing-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>The following simulation uses randomised values, so feel</h2>
    <p>The following simulation uses randomised values, so feel free to refresh the page a few times to see it adapt to new variants.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-14" data-sim-module="load-balancing:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The following simulation uses randomised values, so feel interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-14-scale">scale</label>
      <input id="load-balancing-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-14-rotation">rotation</label>
      <input id="load-balancing-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · chart/plot module</span>
    <h2>Higher percentiles will always be higher on the</h2>
    <p>Higher percentiles will always be higher on the graph.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-15" data-sim-module="load-balancing:module-15">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Higher percentiles will always be higher on the interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-15-slack">slack</label>
      <input id="load-balancing-module-15-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-15-damping">damping</label>
      <input id="load-balancing-module-15-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-15-drive">drive</label>
      <input id="load-balancing-module-15-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · chart/plot module</span>
    <h2>The following is a graph of cumulative requests</h2>
    <p>The following is a graph of cumulative requests dropped over time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-16" data-sim-module="load-balancing:module-16">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The following is a graph of cumulative requests interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-16-slack">slack</label>
      <input id="load-balancing-module-16-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-16-damping">damping</label>
      <input id="load-balancing-module-16-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-16-drive">drive</label>
      <input id="load-balancing-module-16-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>Below is a simulation using an algorithm called</h2>
    <p>Below is a simulation using an algorithm called "peak exponentially weighted moving average" (or PEWMA).</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-17" data-sim-module="load-balancing:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Below is a simulation using an algorithm called interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-17-scale">scale</label>
      <input id="load-balancing-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-17-rotation">rotation</label>
      <input id="load-balancing-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>I've set specific parameters for this simulation that</h2>
    <p>I've set specific parameters for this simulation that are guaranteed to exhibit an expected behaviour.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-18" data-sim-module="load-balancing:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="I've set specific parameters for this simulation that interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-18-scale">scale</label>
      <input id="load-balancing-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-18-rotation">rotation</label>
      <input id="load-balancing-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>To round this out, I leave you with</h2>
    <p>To round this out, I leave you with a version of the simulation that lets you tweak most of the parameters in real time.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="load-balancing:module-19" data-sim-module="load-balancing:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="To round this out, I leave you with interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-module-19-scale">scale</label>
      <input id="load-balancing-module-19-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-module-19-rotation">rotation</label>
      <input id="load-balancing-module-19-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Load Balancing works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Memory Allocation]]
- [[Hysteresis and Slack]]
- [[Random Forest]]
