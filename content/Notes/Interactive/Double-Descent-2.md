---
title: Double Descent 2
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Second part of the double-descent series, focused on mathematical derivation
  and interpolation-threshold behavior.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Double-Descent-2
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Double Descent 2

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/double-descent2/" target="_blank" rel="noopener noreferrer">Double Descent 2 by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.</p>

<div class="interactive-article" data-interactive-article="double-descent-2">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>MLU-expl AI n</h2>
    <p>Explains MLU-expl AI n within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-01" data-sim-module="double-descent-2:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="MLU-expl AI n interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-01-scale">scale</label>
      <input id="double-descent-2-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-01-rotation">rotation</label>
      <input id="double-descent-2-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
<div class="interactive-sim" data-sim-scene="double-descent-2:module-02" data-sim-module="double-descent-2:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Double Descent interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-02-capacity">capacity</label>
      <input id="double-descent-2-module-02-capacity" data-control="capacity" type="range" min="0.2" max="3" step="0.02" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-02-data">data ratio</label>
      <input id="double-descent-2-module-02-data" data-control="data" type="range" min="0.4" max="2.2" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset curve</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Part 2: A Mathematical Explanation</h2>
    <p>Explains Part 2: A Mathematical Explanation within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-03" data-sim-module="double-descent-2:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Part 2: A Mathematical Explanation interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-03-scale">scale</label>
      <input id="double-descent-2-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-03-rotation">rotation</label>
      <input id="double-descent-2-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Brent Werness & Jared Wilber , December 2021</h2>
    <p>Explains Brent Werness & Jared Wilber , December 2021 within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-04" data-sim-module="double-descent-2:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Brent Werness & Jared Wilber , December 2021 interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-04-scale">scale</label>
      <input id="double-descent-2-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-04-rotation">rotation</label>
      <input id="double-descent-2-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>A Sketch of the Mathematics</h2>
    <p>Explains A Sketch of the Mathematics within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-05" data-sim-module="double-descent-2:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="A Sketch of the Mathematics interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-05-scale">scale</label>
      <input id="double-descent-2-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-05-rotation">rotation</label>
      <input id="double-descent-2-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · algorithm walkthrough module</span>
    <h2>Our Piecewise Linear Model</h2>
    <p>Explains Our Piecewise Linear Model within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-06" data-sim-module="double-descent-2:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Our Piecewise Linear Model interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-06-scale">scale</label>
      <input id="double-descent-2-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-06-rotation">rotation</label>
      <input id="double-descent-2-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Below The Interpolation Threshold</h2>
    <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-07" data-sim-module="double-descent-2:module-07">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Below The Interpolation Threshold interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-07-scale">scale</label>
      <input id="double-descent-2-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-07-rotation">rotation</label>
      <input id="double-descent-2-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>At The Interpolation Threshold</h2>
    <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-08" data-sim-module="double-descent-2:module-08">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="At The Interpolation Threshold interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-08-scale">scale</label>
      <input id="double-descent-2-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-08-rotation">rotation</label>
      <input id="double-descent-2-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>To Infinity! (But Not Beyond)</h2>
    <p>Explains To Infinity! (But Not Beyond) within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="double-descent-2:module-09" data-sim-module="double-descent-2:module-09">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="To Infinity! (But Not Beyond) interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-09-scale">scale</label>
      <input id="double-descent-2-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-2-module-09-rotation">rotation</label>
      <input id="double-descent-2-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · reference/narrative section</span>
    <h2>Summary</h2>
    <p>Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · reference/narrative section</span>
    <h2>Resources + Open Source:</h2>
    <p>Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Double Descent 2 works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Double Descent]]
- [[The Bias Variance Tradeoff]]
- [[Random Forest]]
