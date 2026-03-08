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
  Interactive model-capacity curve for interpolation spikes and second-descent
  intuition.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Double-Descent
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Double Descent

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://mlu-explain.github.io/double-descent/" target="_blank" rel="noopener noreferrer">Double Descent by AWS Machine Learning University team</a></p>
</div>

<p class="note-lede">Visual introduction to double descent showing how model complexity changes train/test error across regimes.</p>

<div class="interactive-article" data-interactive-article="double-descent">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="double-descent" data-sync-group="double-descent-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Double descent curve"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="double-descent-capacity">capacity</label>
      <input id="double-descent-capacity" data-control="capacity" type="range" min="0.2" max="3" step="0.02" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-data">data ratio</label>
      <input id="double-descent-data" data-control="data" type="range" min="0.4" max="2.2" step="0.02" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="double-descent-noise">noise</label>
      <input id="double-descent-noise" data-control="noise" type="range" min="0" max="0.6" step="0.01" value="0.18" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="double-descent">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="double-descent" data-step-preset="module-01" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 01</span>
      <h2>MLU-expl AI n</h2>
      <p>Explains MLU-expl AI n within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="double-descent" data-step-preset="module-02" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 02</span>
      <h2>Double Descent</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="double-descent" data-step-preset="module-03" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 03</span>
      <h2>Part 1: A Visual Introduction</h2>
      <p>Explains Part 1: A Visual Introduction within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="double-descent" data-step-preset="module-04" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 04</span>
      <h2>Jared Wilber & Brent Werness, December 2021</h2>
      <p>Explains Jared Wilber & Brent Werness, December 2021 within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="double-descent" data-step-preset="module-05" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 05</span>
      <h2>What's Going On?</h2>
      <p>Explains What's Going On? within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="double-descent" data-step-preset="module-06" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 06</span>
      <h2>Minding The Gap</h2>
      <p>Explains Minding The Gap within Double Descent using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="double-descent" data-step-preset="module-07" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 07</span>
      <h2>Final Takeaways</h2>
      <p>Narrative/reference section in Double Descent that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="double-descent" data-step-preset="module-08" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 08</span>
      <h2>References & Open Source</h2>
      <p>Narrative/reference section in Double Descent that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="double-descent" data-step-preset="module-09" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 09</span>
      <h2>To begin, we plot a simple model</h2>
      <p>To begin, we plot a simple model.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="double-descent" data-step-preset="module-10" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 10</span>
      <h2>Next, we plot a model that's not too</h2>
      <p>Next, we plot a model that's not too simple, nor too complex.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="double-descent" data-step-preset="module-11" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 11</span>
      <h2>This is reflected in the low error (</h2>
      <p>This is reflected in the low error ( ≤ 0.25) in the bottom chart.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="double-descent" data-step-preset="module-12" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 12</span>
      <h2>Now, let's plot a complex model, one where</h2>
      <p>Now, let's plot a complex model, one where our number of features is equal to the number of dimensions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="double-descent" data-step-preset="module-13" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 13</span>
      <h2>At this stage we're overfitting, which leads to</h2>
      <p>At this stage we're overfitting, which leads to the high test error shown in the plot.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="double-descent" data-step-preset="module-14" data-sync-group="double-descent-main">
      <span class="casefile-label">Module 14</span>
      <h2>Toggle the slider to modify the number of</h2>
      <p>Toggle the slider to modify the number of non-linear features used to build the models.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, toggle/switch. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
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
    <p>The Double Descent article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Double Descent 2]]
- [[The Bias Variance Tradeoff]]
- [[Linear Regression]]
