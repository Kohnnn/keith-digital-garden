---
title: Double Descent
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Visual introduction to double descent showing how model complexity changes
  train/test error across regimes.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Double-Descent
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Double Descent

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/double-descent/" target="_blank" rel="noopener noreferrer">Double Descent by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Visual introduction to double descent showing how model complexity changes train/test error across regimes.</p>

<div class="interactive-article" data-interactive-article="double-descent">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>MLU-expl AI n</h2>
    <p>Explains MLU-expl AI n within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-01" data-sim-module="double-descent:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="MLU-expl AI n interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-01-scale">scale</label>
      <input id="double-descent-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-01-rotation">rotation</label>
      <input id="double-descent-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Double Descent</h2>
    <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-02" data-sim-module="double-descent:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Double Descent interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-02-capacity">capacity</label>
      <input id="double-descent-module-02-capacity" data-control="capacity" type="range" min="0.2" max="3" step="0.02" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-02-data">data ratio</label>
      <input id="double-descent-module-02-data" data-control="data" type="range" min="0.4" max="2.2" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset curve</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Part 1: A Visual Introduction</h2>
    <p>Explains Part 1: A Visual Introduction within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-03" data-sim-module="double-descent:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Part 1: A Visual Introduction interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-03-scale">scale</label>
      <input id="double-descent-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-03-rotation">rotation</label>
      <input id="double-descent-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Jared Wilber & Brent Werness, December 2021</h2>
    <p>Explains Jared Wilber & Brent Werness, December 2021 within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-04" data-sim-module="double-descent:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Jared Wilber & Brent Werness, December 2021 interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-04-scale">scale</label>
      <input id="double-descent-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-04-rotation">rotation</label>
      <input id="double-descent-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>What's Going On?</h2>
    <p>Explains What's Going On? within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-05" data-sim-module="double-descent:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="What's Going On? interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-05-scale">scale</label>
      <input id="double-descent-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-05-rotation">rotation</label>
      <input id="double-descent-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Minding The Gap</h2>
    <p>Explains Minding The Gap within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-06" data-sim-module="double-descent:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Minding The Gap interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-06-scale">scale</label>
      <input id="double-descent-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-06-rotation">rotation</label>
      <input id="double-descent-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · reference/narrative section</span>
    <h2>Final Takeaways</h2>
    <p>Narrative/reference section in Double Descent that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · reference/narrative section</span>
    <h2>References & Open Source</h2>
    <p>Narrative/reference section in Double Descent that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · chart/plot module</span>
    <h2>To begin, we plot a simple model</h2>
    <p>To begin, we plot a simple model.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-09" data-sim-module="double-descent:module-09">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="To begin, we plot a simple model interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-09-slack">slack</label>
      <input id="double-descent-module-09-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-09-damping">damping</label>
      <input id="double-descent-module-09-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-09-drive">drive</label>
      <input id="double-descent-module-09-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · chart/plot module</span>
    <h2>Next, we plot a model that's not too</h2>
    <p>Next, we plot a model that's not too simple, nor too complex.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-10" data-sim-module="double-descent:module-10">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Next, we plot a model that's not too interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-10-slack">slack</label>
      <input id="double-descent-module-10-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-10-damping">damping</label>
      <input id="double-descent-module-10-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-10-drive">drive</label>
      <input id="double-descent-module-10-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · chart/plot module</span>
    <h2>This is reflected in the low error (</h2>
    <p>This is reflected in the low error ( ≤ 0.25) in the bottom chart.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-11" data-sim-module="double-descent:module-11">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="This is reflected in the low error ( interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-11-slack">slack</label>
      <input id="double-descent-module-11-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-11-damping">damping</label>
      <input id="double-descent-module-11-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-11-drive">drive</label>
      <input id="double-descent-module-11-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · chart/plot module</span>
    <h2>Now, let's plot a complex model, one where</h2>
    <p>Now, let's plot a complex model, one where our number of features is equal to the number of dimensions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-12" data-sim-module="double-descent:module-12">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Now, let's plot a complex model, one where interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-12-slack">slack</label>
      <input id="double-descent-module-12-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-12-damping">damping</label>
      <input id="double-descent-module-12-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-12-drive">drive</label>
      <input id="double-descent-module-12-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · chart/plot module</span>
    <h2>At this stage we're overfitting, which leads to</h2>
    <p>At this stage we're overfitting, which leads to the high test error shown in the plot.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-13" data-sim-module="double-descent:module-13">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="At this stage we're overfitting, which leads to interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-13-slack">slack</label>
      <input id="double-descent-module-13-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-13-damping">damping</label>
      <input id="double-descent-module-13-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-13-drive">drive</label>
      <input id="double-descent-module-13-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Toggle the slider to modify the number of</h2>
    <p>Toggle the slider to modify the number of non-linear features used to build the models.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, toggle/switch. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent:module-14" data-sim-module="double-descent:module-14">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Toggle the slider to modify the number of interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-module-14-scale">scale</label>
      <input id="double-descent-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-module-14-rotation">rotation</label>
      <input id="double-descent-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Visual introduction to double descent showing how model complexity changes train/test error across regimes.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Double Descent works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Double Descent 2]]
- [[The Bias Variance Tradeoff]]
- [[Linear Regression]]
