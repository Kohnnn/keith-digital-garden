---
title: The Bias Variance Tradeoff
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Bias-variance decomposition lesson connecting model complexity with
  underfitting/overfitting behavior.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/The-Bias-Variance-Tradeoff
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# The Bias Variance Tradeoff

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/bias-variance/" target="_blank" rel="noopener noreferrer">The Bias Variance Tradeoff by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.</p>

<div class="interactive-article" data-interactive-article="the-bias-variance-tradeoff">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>MLU-expl AI n</h2>
    <p>Explains MLU-expl AI n within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-01" data-sim-module="the-bias-variance-tradeoff:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="MLU-expl AI n interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-01-scale">scale</label>
      <input id="the-bias-variance-tradeoff-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-01-rotation">rotation</label>
      <input id="the-bias-variance-tradeoff-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>The Bias Variance Tradeoff</h2>
    <p>Specifically, variance measures how much, on average, predictions vary for a given data point : As you can see in the bottom plot, predictions from overfit (high-complexity) mod...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-02" data-sim-module="the-bias-variance-tradeoff:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Bias Variance Tradeoff interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-02-complexity">complexity</label>
      <input id="the-bias-variance-tradeoff-module-02-complexity" data-control="complexity" type="range" min="0.2" max="2" step="0.02" value="0.9" />
    </div>
    <button data-control="reset" type="button">reset curve</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Jared Wilber & Brent Werness, January 2021</h2>
    <p>Explains Jared Wilber & Brent Werness, January 2021 within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-03" data-sim-module="the-bias-variance-tradeoff:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Jared Wilber & Brent Werness, January 2021 interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-03-scale">scale</label>
      <input id="the-bias-variance-tradeoff-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-03-rotation">rotation</label>
      <input id="the-bias-variance-tradeoff-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>LOESS Regression</h2>
    <p>Visualizes decomposition of model error and sensitivity to complexity/smoothing choices.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-04" data-sim-module="the-bias-variance-tradeoff:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="LOESS Regression interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-04-slope">slope</label>
      <input id="the-bias-variance-tradeoff-module-04-slope" data-control="slope" type="range" min="-2" max="2" step="0.02" value="0.6" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-04-intercept">intercept</label>
      <input id="the-bias-variance-tradeoff-module-04-intercept" data-control="intercept" type="range" min="-1.5" max="1.5" step="0.02" value="0.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-04-spread">spread</label>
      <input id="the-bias-variance-tradeoff-module-04-spread" data-control="spread" type="range" min="0.1" max="1.2" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset fit</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>K-Nearest Neighbors</h2>
    <p>Hover over a point to see its classification to the right, and the K-nearest neighbors used for consideration to the left.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> hover. <strong>Response:</strong> hover reveals contextual overlays or future trajectory hints</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-05" data-sim-module="the-bias-variance-tradeoff:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="K-Nearest Neighbors interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-05-scale">scale</label>
      <input id="the-bias-variance-tradeoff-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-05-rotation">rotation</label>
      <input id="the-bias-variance-tradeoff-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>What About Double Descent?</h2>
    <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-06" data-sim-module="the-bias-variance-tradeoff:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="What About Double Descent? interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-06-capacity">capacity</label>
      <input id="the-bias-variance-tradeoff-module-06-capacity" data-control="capacity" type="range" min="0.2" max="3" step="0.02" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-06-data">data ratio</label>
      <input id="the-bias-variance-tradeoff-module-06-data" data-control="data" type="range" min="0.4" max="2.2" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset curve</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · reference/narrative section</span>
    <h2>It's Finally Over</h2>
    <p>Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="note" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · reference/narrative section</span>
    <h2>References + Open Source</h2>
    <p>Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, playback/scrub, hover. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...</p>
  </div>
  <div class="interactive-module-note">
    <p>This section is narrative in the source article, so it stays Quartz-native while the adjacent interactive modules carry the live simulation state.</p>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · chart/plot module</span>
    <h2>These different model realizations are shown in the</h2>
    <p>These different model realizations are shown in the top chart, while the error decomposition (for each point of data) is shown in the bottom chart.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-09" data-sim-module="the-bias-variance-tradeoff:module-09">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="These different model realizations are shown in the interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-09-slack">slack</label>
      <input id="the-bias-variance-tradeoff-module-09-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-09-damping">damping</label>
      <input id="the-bias-variance-tradeoff-module-09-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-09-drive">drive</label>
      <input id="the-bias-variance-tradeoff-module-09-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · chart/plot module</span>
    <h2>For each level of complexity, we’ll aggregate the</h2>
    <p>For each level of complexity, we’ll aggregate the error decomposition across all data-points, and plot the aggregate errors at their level of complexity.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-10" data-sim-module="the-bias-variance-tradeoff:module-10">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="For each level of complexity, we’ll aggregate the interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-10-slack">slack</label>
      <input id="the-bias-variance-tradeoff-module-10-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-10-damping">damping</label>
      <input id="the-bias-variance-tradeoff-module-10-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-10-drive">drive</label>
      <input id="the-bias-variance-tradeoff-module-10-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · chart/plot module</span>
    <h2>The plot on the left shows the training</h2>
    <p>The plot on the left shows the training data.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-11" data-sim-module="the-bias-variance-tradeoff:module-11">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The plot on the left shows the training interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-11-slack">slack</label>
      <input id="the-bias-variance-tradeoff-module-11-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-11-damping">damping</label>
      <input id="the-bias-variance-tradeoff-module-11-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-11-drive">drive</label>
      <input id="the-bias-variance-tradeoff-module-11-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · chart/plot module</span>
    <h2>The plot on the right shows decision regions</h2>
    <p>The plot on the right shows decision regions based on the current value of K.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="the-bias-variance-tradeoff:module-12" data-sim-module="the-bias-variance-tradeoff:module-12">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The plot on the right shows decision regions interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-12-slack">slack</label>
      <input id="the-bias-variance-tradeoff-module-12-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-12-damping">damping</label>
      <input id="the-bias-variance-tradeoff-module-12-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="the-bias-variance-tradeoff-module-12-drive">drive</label>
      <input id="the-bias-variance-tradeoff-module-12-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
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
    <p>Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Bias Variance Tradeoff works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Double Descent]]
- [[Linear Regression]]
- [[Random Forest]]
