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
description: "Interactive split explorer for thresholds, purity, and branching structure."
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Decision-Trees
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Decision Trees

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/decision-tree/" target="_blank" rel="noopener noreferrer">Decision Trees by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">MLU scrollytelling lesson that builds a decision tree step-by-step and links entropy/information gain math to split decisions.</p>

<div class="interactive-article" data-interactive-article="decision-trees">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="decision-trees" data-sync-group="decision-trees-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Decision tree split explorer"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="decision-trees-threshold">threshold</label>
      <input id="decision-trees-threshold" data-control="threshold" type="range" min="0.1" max="0.9" step="0.01" value="0.48" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-noise">label noise</label>
      <input id="decision-trees-noise" data-control="noise" type="range" min="0" max="0.45" step="0.01" value="0.12" />
    </div>
    <div class="interactive-sim-control">
      <label for="decision-trees-depth">tree depth</label>
      <input id="decision-trees-depth" data-control="depth" type="range" min="1" max="6" step="1" value="3" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="decision-trees">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="decision-trees" data-step-preset="module-01" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-expl AI n</h2>
      <p>Explains MLU-expl AI n within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="decision-trees" data-step-preset="module-02" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 02</span>
      <h2>Decision Trees</h2>
      <p>By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="decision-trees" data-step-preset="module-03" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 03</span>
      <h2>Let's Build a Decision Tree</h2>
      <p>By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="decision-trees" data-step-preset="module-04" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 04</span>
      <h2>Start Splitting</h2>
      <p>Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="decision-trees" data-step-preset="module-05" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 05</span>
      <h2>Split Some More</h2>
      <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="decision-trees" data-step-preset="module-06" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 06</span>
      <h2>And Some More</h2>
      <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="decision-trees" data-step-preset="module-07" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 07</span>
      <h2>And Yet Some More</h2>
      <p>Split Some More We continue along, hoping to split our plot of land in the most favorable manner.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="decision-trees" data-step-preset="module-08" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 08</span>
      <h2>Don't Go Too Deep!</h2>
      <p>Explains Don't Go Too Deep! within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="decision-trees" data-step-preset="module-09" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 09</span>
      <h2>Where To Partition?</h2>
      <p>Explains Where To Partition? within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="decision-trees" data-step-preset="module-10" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 10</span>
      <h2>Entropy Properties</h2>
      <p>Visualizes impurity metrics and gain calculations while varying split candidates.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="decision-trees" data-step-preset="module-11" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 11</span>
      <h2>Information Gain</h2>
      <p>The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="decision-trees" data-step-preset="module-12" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 12</span>
      <h2>ID3 Algorithm Steps</h2>
      <p>The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="decision-trees" data-step-preset="module-13" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 13</span>
      <h2>Click on the Add and Remove buttons to</h2>
      <p>Click on the Add and Remove buttons to modify the composition of the bubble.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="decision-trees" data-step-preset="module-14" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 14</span>
      <h2>The line chart displays the different split values</h2>
      <p>The line chart displays the different split values for the Diameter feature.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="decision-trees" data-step-preset="module-15" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 15</span>
      <h2>Move the decision boundary yourself to see how</h2>
      <p>Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="decision-trees" data-step-preset="module-16" data-sync-group="decision-trees-main">
      <span class="casefile-label">Module 16</span>
      <h2>Move the decision boundary yourself to see how</h2>
      <p>Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    </div>
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
    <p>The Decision Trees article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Random Forest]]
- [[Train-Test-and-Validation-Sets]]
- [[Linear Regression]]
