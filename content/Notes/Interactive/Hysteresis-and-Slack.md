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
description: "Interactive lag-and-slack sandbox for preload, damping, and hysteresis loops."
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Hysteresis-and-Slack
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Hysteresis & Slack

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://joshuahhh.com/projects/hysteresis/" target="_blank" rel="noopener noreferrer">Hysteresis & Slack by joshuahhh</a></p>
</div>

<p class="note-lede">Interactive intuition-builder for hysteresis and mechanical slack showing path dependence, loops, and memory effects in input-output systems.</p>

<div class="interactive-article" data-interactive-article="hysteresis-slack">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="hysteresis-slack" data-sync-group="hysteresis-slack-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Hysteresis and slack response plot"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-slack">slack window</label>
      <input id="hysteresis-slack-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-damping">damping</label>
      <input id="hysteresis-slack-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="hysteresis-slack-drive">drive rate</label>
      <input id="hysteresis-slack-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.15" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="hysteresis-slack">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="hysteresis-slack" data-step-preset="module-01" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 01</span>
      <h2>hysteresis & slack</h2>
      <p>In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="hysteresis-slack" data-step-preset="module-02" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 02</span>
      <h2>Here are two machines you can control</h2>
      <p>In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="hysteresis-slack" data-step-preset="module-03" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 03</span>
      <h2>Set a trajectory for the input pin</h2>
      <p>In this one, the output pin of the slider is rigidly connected to the input pin .</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="hysteresis-slack" data-step-preset="module-04" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 04</span>
      <h2>The first plot is a simple curve</h2>
      <p>The first plot is a simple curve.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="hysteresis-slack" data-step-preset="module-05" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 05</span>
      <h2>But the second plot is made out of</h2>
      <p>But the second plot is made out of loops.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="hysteresis-slack" data-step-preset="module-06" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 06</span>
      <h2>So let's give the computer some "history" to</h2>
      <p>So let's give the computer some "history" to play with.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="hysteresis-slack" data-step-preset="module-07" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 07</span>
      <h2>Click & drag to define the path of</h2>
      <p>Click & drag to define the path of the input pin over time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag, click/tap. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="hysteresis-slack" data-step-preset="module-08" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 08</span>
      <h2>Hover to see the future trajectory of the</h2>
      <p>Hover to see the future trajectory of the output pin from the point you've selected.</p>
      <p class="story-step-meta"><strong>Controls:</strong> hover. <strong>Response:</strong> hover reveals contextual overlays or future trajectory hints</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="hysteresis-slack" data-step-preset="module-09" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 09</span>
      <h2>One way to put it — the slider</h2>
      <p>One way to put it — the slider has a memory (the position of the output pin), which has its own existence, independent of the input.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="hysteresis-slack" data-step-preset="module-10" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 10</span>
      <h2>So, if the external forces are strong enough,</h2>
      <p>So, if the external forces are strong enough, the slider's memory is overwhelmed.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="hysteresis-slack" data-step-preset="module-11" data-sync-group="hysteresis-slack-main">
      <span class="casefile-label">Module 11</span>
      <h2>It's like H is the input pin and</h2>
      <p>It's like H is the input pin and M is the output pin in some weird slider system.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
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
    <p>The Hysteresis & Slack article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Load Balancing]]
- [[Memory Allocation]]
- [[Mechanical Watch]]
