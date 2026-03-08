---
title: Decision Trees
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  MLU scrollytelling lesson that builds a decision tree step-by-step and links
  entropy/information gain math to split decisions.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Decision-Trees
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Decision Trees

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/decision-tree/" target="_blank" rel="noopener noreferrer">Decision Trees by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">MLU scrollytelling lesson that builds a decision tree step-by-step and links entropy/information gain math to split decisions.</p>

<div class="interactive-article" data-interactive-article="decision-trees">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>MLU-expl AI n</h2>
    <p>Explains MLU-expl AI n within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-01" data-sim-module="decision-trees:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="MLU-expl AI n interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-01-scale">scale</label>
      <input id="decision-trees-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-01-rotation">rotation</label>
      <input id="decision-trees-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · algorithm walkthrough module</span>
    <h2>Decision Trees</h2>
    <p>By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-02" data-sim-module="decision-trees:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Decision Trees interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-02-threshold">threshold</label>
      <input id="decision-trees-module-02-threshold" data-control="threshold" type="range" min="0.1" max="0.9" step="0.01" value="0.48" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-02-noise">noise</label>
      <input id="decision-trees-module-02-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · algorithm walkthrough module</span>
    <h2>Let's Build a Decision Tree</h2>
    <p>By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-03" data-sim-module="decision-trees:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Let's Build a Decision Tree interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-03-threshold">threshold</label>
      <input id="decision-trees-module-03-threshold" data-control="threshold" type="range" min="0.1" max="0.9" step="0.01" value="0.48" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-03-noise">noise</label>
      <input id="decision-trees-module-03-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.12" />
    </div>
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Start Splitting</h2>
    <p>Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-04" data-sim-module="decision-trees:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Start Splitting interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-04-scale">scale</label>
      <input id="decision-trees-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-04-rotation">rotation</label>
      <input id="decision-trees-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Split Some More</h2>
    <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-05" data-sim-module="decision-trees:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Split Some More interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-05-scale">scale</label>
      <input id="decision-trees-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-05-rotation">rotation</label>
      <input id="decision-trees-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>And Some More</h2>
    <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-06" data-sim-module="decision-trees:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="And Some More interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-06-scale">scale</label>
      <input id="decision-trees-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-06-rotation">rotation</label>
      <input id="decision-trees-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>And Yet Some More</h2>
    <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-07" data-sim-module="decision-trees:module-07">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="And Yet Some More interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-07-scale">scale</label>
      <input id="decision-trees-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-07-rotation">rotation</label>
      <input id="decision-trees-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Don't Go Too Deep!</h2>
    <p>Explains Don't Go Too Deep! within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-08" data-sim-module="decision-trees:module-08">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Don't Go Too Deep! interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-08-scale">scale</label>
      <input id="decision-trees-module-08-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-08-rotation">rotation</label>
      <input id="decision-trees-module-08-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Where To Partition?</h2>
    <p>Explains Where To Partition? within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-09" data-sim-module="decision-trees:module-09">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Where To Partition? interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-09-scale">scale</label>
      <input id="decision-trees-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-09-rotation">rotation</label>
      <input id="decision-trees-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Entropy Properties</h2>
    <p>Visualizes impurity metrics and gain calculations while varying split candidates.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-10" data-sim-module="decision-trees:module-10">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Entropy Properties interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-10-scale">scale</label>
      <input id="decision-trees-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-10-rotation">rotation</label>
      <input id="decision-trees-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Information Gain</h2>
    <p>The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-11" data-sim-module="decision-trees:module-11">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Information Gain interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-11-scale">scale</label>
      <input id="decision-trees-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-11-rotation">rotation</label>
      <input id="decision-trees-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · algorithm walkthrough module</span>
    <h2>ID3 Algorithm Steps</h2>
    <p>The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-12" data-sim-module="decision-trees:module-12">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="ID3 Algorithm Steps interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-12-scale">scale</label>
      <input id="decision-trees-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-12-rotation">rotation</label>
      <input id="decision-trees-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Click on the Add and Remove buttons to</h2>
    <p>Click on the Add and Remove buttons to modify the composition of the bubble.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-13" data-sim-module="decision-trees:module-13">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Click on the Add and Remove buttons to interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-13-speed">speed</label>
      <input id="decision-trees-module-13-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-13-ratio">ratio</label>
      <input id="decision-trees-module-13-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-13-impulse">impulse</label>
      <input id="decision-trees-module-13-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · chart/plot module</span>
    <h2>The line chart displays the different split values</h2>
    <p>The line chart displays the different split values for the Diameter feature.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-14" data-sim-module="decision-trees:module-14">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The line chart displays the different split values interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-14-slack">slack</label>
      <input id="decision-trees-module-14-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-14-damping">damping</label>
      <input id="decision-trees-module-14-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-14-drive">drive</label>
      <input id="decision-trees-module-14-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · chart/plot module</span>
    <h2>Move the decision boundary yourself to see how</h2>
    <p>Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-15" data-sim-module="decision-trees:module-15">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Move the decision boundary yourself to see how interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-15-slack">slack</label>
      <input id="decision-trees-module-15-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-15-damping">damping</label>
      <input id="decision-trees-module-15-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-15-drive">drive</label>
      <input id="decision-trees-module-15-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · chart/plot module</span>
    <h2>Move the decision boundary yourself to see how</h2>
    <p>Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="decision-trees:module-16" data-sim-module="decision-trees:module-16">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Move the decision boundary yourself to see how interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-module-16-slack">slack</label>
      <input id="decision-trees-module-16-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-16-damping">damping</label>
      <input id="decision-trees-module-16-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-module-16-drive">drive</label>
      <input id="decision-trees-module-16-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
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
    <p>MLU scrollytelling lesson that builds a decision tree step-by-step and links entropy/information gain math to split decisions.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Decision Trees works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Random Forest]]
- [[Train-Test-and-Validation-Sets]]
- [[Linear Regression]]
