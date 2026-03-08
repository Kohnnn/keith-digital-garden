---
title: Alpha Compositing
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - graphics
draft: false
description: "Interactive alpha blending lab for layer order, opacity, and overlap behavior."
created: "2019-07-24"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Alpha-Compositing
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Alpha Compositing

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/alpha-compositing/" target="_blank" rel="noopener noreferrer">Alpha Compositing by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.</p>

<div class="interactive-article" data-interactive-article="alpha-compositing">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="alpha-compositing-main" data-sim-scene="alpha-compositing">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Alpha compositing experiment"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-a">layer A alpha</label>
      <input id="alpha-a" data-control="alphaA" type="range" min="0" max="1" step="0.01" value="0.64" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-b">layer B alpha</label>
      <input id="alpha-b" data-control="alphaB" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-mix">separation mix</label>
      <input id="alpha-mix" data-control="mix" type="range" min="0" max="1" step="0.01" value="0.5" />
    </div>
    <button data-control="reset" type="button">reset layers</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="alpha-compositing">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="alpha-compositing" data-step-preset="module-01" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 01</span>
      <h2>Alpha Compositing</h2>
      <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="alpha-compositing" data-step-preset="module-02" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 02</span>
      <h2>Opacity</h2>
      <p>Opacity If you ever had a chance to look through rose-tinted glasses you may have experienced something akin to the simulation below.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="alpha-compositing" data-step-preset="module-03" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 03</span>
      <h2>Coverage</h2>
      <p>Explains Coverage within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="alpha-compositing" data-step-preset="module-04" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 04</span>
      <h2>Alpha</h2>
      <p>In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="alpha-compositing" data-step-preset="module-05" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 05</span>
      <h2>Simple Compositing</h2>
      <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="alpha-compositing" data-step-preset="module-06" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 06</span>
      <h2>Intermediate Buffers</h2>
      <p>Explains Intermediate Buffers within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="alpha-compositing" data-step-preset="module-07" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 07</span>
      <h2>Combining Alphas</h2>
      <p>Explains Combining Alphas within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="alpha-compositing" data-step-preset="module-08" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 08</span>
      <h2>Combining Colors</h2>
      <p>By dragging the slider you can rotate the quad to see how the samples pick up colors from the bitmap.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="alpha-compositing" data-step-preset="module-09" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 09</span>
      <h2>Premultiplied Alpha</h2>
      <p>In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="alpha-compositing" data-step-preset="module-10" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 10</span>
      <h2>Filtering</h2>
      <p>Explains Filtering within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="alpha-compositing" data-step-preset="module-11" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 11</span>
      <h2>Interpolation</h2>
      <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="alpha-compositing" data-step-preset="module-12" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 12</span>
      <h2>Compositing Done Right</h2>
      <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="alpha-compositing" data-step-preset="module-13" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 13</span>
      <h2>A simulation of the behavior of regular sunglasses</h2>
      <p>A simulation of the behavior of regular sunglasses is much less complicated, they usually just attenuate some amount of the incoming light: These sunglasses let through only 30%...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="alpha-compositing" data-step-preset="module-14" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 14</span>
      <h2>Drag the triangle on either zoomed or un-zoomed side, the</h2>
      <p>In the examples below you can drag the triangle on either zoomed or un-zoomed side, the latter lets you perform finer movements.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="alpha-compositing" data-step-preset="module-15" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 15</span>
      <h2>More importantly, almost any image with transparency can</h2>
      <p>More importantly, almost any image with transparency can be thought of as a partial result of some rendering that, at some later time, will be composed to its final destination:...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="alpha-compositing" data-step-preset="module-16" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 16</span>
      <h2>The arrow symbolizes the blur operation: Blurring non-premultiplied</h2>
      <p>The arrow symbolizes the blur operation: Blurring non-premultiplied content The final result has an ugly blue halo around it.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="alpha-compositing" data-step-preset="module-17" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 17</span>
      <h2>Drag the heart around to see how the overlap of</h2>
      <p>You can drag the heart around to see how the overlap of the two shapes behaves under different compositing operators.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="alpha-compositing" data-step-preset="module-18" data-sync-group="alpha-compositing-main">
      <span class="casefile-label">Module 18</span>
      <h2>A dirty buffer may be reset using clear</h2>
      <p>A dirty buffer may be reset using clear which can be optimized to just filling memory with zeros.</p>
      <p class="story-step-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Alpha Compositing article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
