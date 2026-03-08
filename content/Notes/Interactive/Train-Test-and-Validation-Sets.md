---
title: "Train, Test, and Validation Sets"
tags:
  - portfolio
  - blog
  - external
  - interactive
  - machine-learning
  - mlu
draft: false
description: "Interactive dataset split notebook for train, validation, and test tradeoffs."
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Train-Test-and-Validation-Sets
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Train, Test, and Validation Sets

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/train-test-validation/" target="_blank" rel="noopener noreferrer">Train, Test, and Validation Sets by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.</p>

<div class="interactive-article" data-interactive-article="train-test-and-validation-sets">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="train-test-and-validation-sets" data-sync-group="train-test-and-validation-sets-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Dataset split explorer"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="train-test-and-validation-sets-train">train share</label>
      <input id="train-test-and-validation-sets-train" data-control="train" type="range" min="0.4" max="0.85" step="0.01" value="0.64" />
    </div>
    <div class="interactive-sim-control">
      <label for="train-test-and-validation-sets-validation">validation share</label>
      <input id="train-test-and-validation-sets-validation" data-control="validation" type="range" min="0.05" max="0.35" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="train-test-and-validation-sets-shift">distribution shift</label>
      <input id="train-test-and-validation-sets-shift" data-control="shift" type="range" min="0" max="0.5" step="0.01" value="0.08" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="train-test-and-validation-sets">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="train-test-and-validation-sets" data-step-preset="module-01" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-EXPL AI N</h2>
      <p>Explains MLU-EXPL AI N within Train, Test, and Validation Sets using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="train-test-and-validation-sets" data-step-preset="module-02" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 02</span>
      <h2>Train , Test , and Validation Sets</h2>
      <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="train-test-and-validation-sets" data-step-preset="module-03" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 03</span>
      <h2>The Importance of Data Splitting</h2>
      <p>Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="train-test-and-validation-sets" data-step-preset="module-04" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 04</span>
      <h2>Train, Test, and Validation Splits</h2>
      <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="train-test-and-validation-sets" data-step-preset="module-05" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 05</span>
      <h2>The Training Set</h2>
      <p>Drag each animal in the training set to a new position to see how the boundary updates!</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="train-test-and-validation-sets" data-step-preset="module-06" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 06</span>
      <h2>Building Our Model</h2>
      <p>Drag the pets across the line to see how the model performance updates!</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="train-test-and-validation-sets" data-step-preset="module-07" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 07</span>
      <h2>The Validation Set</h2>
      <p>Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="train-test-and-validation-sets" data-step-preset="module-08" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 08</span>
      <h2>The Testing Set</h2>
      <p>Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="train-test-and-validation-sets" data-step-preset="module-09" data-sync-group="train-test-and-validation-sets-main">
      <span class="casefile-label">Module 09</span>
      <h2>Summary</h2>
      <p>Narrative/reference section in Train, Test, and Validation Sets that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    </div>
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
    <p>The Train, Test, and Validation Sets article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Decision Trees]]
- [[Random Forest]]
- [[Precision Recall]]
