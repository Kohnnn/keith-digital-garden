---
title: 'Train, Test, and Validation Sets'
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: >-
  Data-splitting lesson that demonstrates training, validation, and testing
  roles through interactive examples.
created: '2026-03-08'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Train-Test-and-Validation-Sets
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Train, Test, and Validation Sets

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/train-test-validation/" target="_blank" rel="noopener noreferrer">Train, Test, and Validation Sets by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.</p>

<div class="interactive-article" data-interactive-article="train-test-and-validation-sets">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="chart" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>MLU-EXPL AI N</h2>
    <p>Explains MLU-EXPL AI N within Train, Test, and Validation Sets using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-01" data-sim-module="train-test-and-validation-sets:module-01">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="MLU-EXPL AI N interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · algorithm walkthrough module</span>
    <h2>Train , Test , and Validation Sets</h2>
    <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-02" data-sim-module="train-test-and-validation-sets:module-02">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Train , Test , and Validation Sets interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>The Importance of Data Splitting</h2>
    <p>Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-03" data-sim-module="train-test-and-validation-sets:module-03">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Importance of Data Splitting interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · algorithm walkthrough module</span>
    <h2>Train, Test, and Validation Splits</h2>
    <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-04" data-sim-module="train-test-and-validation-sets:module-04">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Train, Test, and Validation Splits interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · algorithm walkthrough module</span>
    <h2>The Training Set</h2>
    <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-05" data-sim-module="train-test-and-validation-sets:module-05">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Training Set interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · algorithm walkthrough module</span>
    <h2>Building Our Model</h2>
    <p>Drag the pets across the line to see how the model performance updates!</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-06" data-sim-module="train-test-and-validation-sets:module-06">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Building Our Model interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · algorithm walkthrough module</span>
    <h2>The Validation Set</h2>
    <p>Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-07" data-sim-module="train-test-and-validation-sets:module-07">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Validation Set interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · algorithm walkthrough module</span>
    <h2>The Testing Set</h2>
    <p>Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="train-test-and-validation-sets:module-08" data-sim-module="train-test-and-validation-sets:module-08">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Testing Set interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <button data-control="reset" type="button">reset split</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="note" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · reference/narrative section</span>
    <h2>Summary</h2>
    <p>Narrative/reference section in Train, Test, and Validation Sets that summarizes results and links supporting resources.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
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
    <p>Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Train, Test, and Validation Sets works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Decision Trees]]
- [[Random Forest]]
- [[Precision Recall]]
