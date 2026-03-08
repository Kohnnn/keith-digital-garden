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
description: >-
  Pixel-accurate explanation of alpha blending and compositing math, from
  opacity/coverage to premultiplied alpha and filtering artifacts.
created: '2019-07-24'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Alpha-Compositing
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Alpha Compositing

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/alpha-compositing/" target="_blank" rel="noopener noreferrer">Alpha Compositing by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.</p>

<div class="interactive-article" data-interactive-article="alpha-compositing">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Alpha Compositing</h2>
    <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-01" data-sim-module="alpha-compositing:module-01">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Alpha Compositing interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-01-scale">scale</label>
      <input id="alpha-compositing-module-01-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-01-rotation">rotation</label>
      <input id="alpha-compositing-module-01-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Opacity</h2>
    <p>Opacity If you ever had a chance to look through rose-tinted glasses you may have experienced something akin to the simulation below.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-02" data-sim-module="alpha-compositing:module-02">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Opacity interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-02-scale">scale</label>
      <input id="alpha-compositing-module-02-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-02-rotation">rotation</label>
      <input id="alpha-compositing-module-02-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Coverage</h2>
    <p>Explains Coverage within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-03" data-sim-module="alpha-compositing:module-03">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Coverage interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-03-scale">scale</label>
      <input id="alpha-compositing-module-03-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-03-rotation">rotation</label>
      <input id="alpha-compositing-module-03-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Alpha</h2>
    <p>In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-04" data-sim-module="alpha-compositing:module-04">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Alpha interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-04-scale">scale</label>
      <input id="alpha-compositing-module-04-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-04-rotation">rotation</label>
      <input id="alpha-compositing-module-04-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Simple Compositing</h2>
    <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-05" data-sim-module="alpha-compositing:module-05">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Simple Compositing interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-05-scale">scale</label>
      <input id="alpha-compositing-module-05-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-05-rotation">rotation</label>
      <input id="alpha-compositing-module-05-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Intermediate Buffers</h2>
    <p>Explains Intermediate Buffers within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-06" data-sim-module="alpha-compositing:module-06">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Intermediate Buffers interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-06-scale">scale</label>
      <input id="alpha-compositing-module-06-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-06-rotation">rotation</label>
      <input id="alpha-compositing-module-06-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Combining Alphas</h2>
    <p>Explains Combining Alphas within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-07" data-sim-module="alpha-compositing:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Combining Alphas interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-07-scale">scale</label>
      <input id="alpha-compositing-module-07-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-07-rotation">rotation</label>
      <input id="alpha-compositing-module-07-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Combining Colors</h2>
    <p>By dragging the slider you can rotate the quad to see how the samples pick up colors from the bitmap.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-08" data-sim-module="alpha-compositing:module-08">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Combining Colors interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-08-red">red/input</label>
      <input id="alpha-compositing-module-08-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-08-green">green/gamma</label>
      <input id="alpha-compositing-module-08-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-08-blue">blue/detail</label>
      <input id="alpha-compositing-module-08-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="alpha-compositing-module-08-space-0">
          <input id="alpha-compositing-module-08-space-0" data-control="space" type="radio" name="alpha-compositing-module-08-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="alpha-compositing-module-08-space-1">
          <input id="alpha-compositing-module-08-space-1" data-control="space" type="radio" name="alpha-compositing-module-08-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="alpha-compositing-module-08-space-2">
          <input id="alpha-compositing-module-08-space-2" data-control="space" type="radio" name="alpha-compositing-module-08-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Premultiplied Alpha</h2>
    <p>In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-09" data-sim-module="alpha-compositing:module-09">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Premultiplied Alpha interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-09-scale">scale</label>
      <input id="alpha-compositing-module-09-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-09-rotation">rotation</label>
      <input id="alpha-compositing-module-09-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Filtering</h2>
    <p>Explains Filtering within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-10" data-sim-module="alpha-compositing:module-10">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Filtering interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-10-scale">scale</label>
      <input id="alpha-compositing-module-10-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-10-rotation">rotation</label>
      <input id="alpha-compositing-module-10-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Interpolation</h2>
    <p>Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-11" data-sim-module="alpha-compositing:module-11">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Interpolation interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-11-scale">scale</label>
      <input id="alpha-compositing-module-11-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-11-rotation">rotation</label>
      <input id="alpha-compositing-module-11-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Compositing Done Right</h2>
    <p>As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-12" data-sim-module="alpha-compositing:module-12">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Compositing Done Right interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-12-scale">scale</label>
      <input id="alpha-compositing-module-12-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-12-rotation">rotation</label>
      <input id="alpha-compositing-module-12-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>A simulation of the behavior of regular sunglasses</h2>
    <p>A simulation of the behavior of regular sunglasses is much less complicated, they usually just attenuate some amount of the incoming light: These sunglasses let through only 30%...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-13" data-sim-module="alpha-compositing:module-13">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="A simulation of the behavior of regular sunglasses interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-13-scale">scale</label>
      <input id="alpha-compositing-module-13-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-13-rotation">rotation</label>
      <input id="alpha-compositing-module-13-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>Drag the triangle on either zoomed or un-zoomed side, the</h2>
    <p>In the examples below you can drag the triangle on either zoomed or un-zoomed side, the latter lets you perform finer movements.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-14" data-sim-module="alpha-compositing:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the triangle on either zoomed or un-zoomed side, the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-14-scale">scale</label>
      <input id="alpha-compositing-module-14-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-14-rotation">rotation</label>
      <input id="alpha-compositing-module-14-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>More importantly, almost any image with transparency can</h2>
    <p>More importantly, almost any image with transparency can be thought of as a partial result of some rendering that, at some later time, will be composed to its final destination:...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-15" data-sim-module="alpha-compositing:module-15">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="More importantly, almost any image with transparency can interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-15-scale">scale</label>
      <input id="alpha-compositing-module-15-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-15-rotation">rotation</label>
      <input id="alpha-compositing-module-15-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>The arrow symbolizes the blur operation: Blurring non-premultiplied</h2>
    <p>The arrow symbolizes the blur operation: Blurring non-premultiplied content The final result has an ugly blue halo around it.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-16" data-sim-module="alpha-compositing:module-16">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The arrow symbolizes the blur operation: Blurring non-premultiplied interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-16-scale">scale</label>
      <input id="alpha-compositing-module-16-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-16-rotation">rotation</label>
      <input id="alpha-compositing-module-16-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>Drag the heart around to see how the overlap of</h2>
    <p>You can drag the heart around to see how the overlap of the two shapes behaves under different compositing operators.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-17" data-sim-module="alpha-compositing:module-17">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the heart around to see how the overlap of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-17-scale">scale</label>
      <input id="alpha-compositing-module-17-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-17-rotation">rotation</label>
      <input id="alpha-compositing-module-17-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>A dirty buffer may be reset using clear</h2>
    <p>A dirty buffer may be reset using clear which can be optimized to just filling memory with zeros.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> reset/restart. <strong>Response:</strong> reset/restart returns simulation to deterministic initial state</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="alpha-compositing:module-18" data-sim-module="alpha-compositing:module-18">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="A dirty buffer may be reset using clear interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-18-scale">scale</label>
      <input id="alpha-compositing-module-18-scale" data-control="scale" type="range" min="0.2" max="2" step="0.02" value="0.85" />
    </div>
    <div class="interactive-sim-control">
      <label for="alpha-compositing-module-18-rotation">rotation</label>
      <input id="alpha-compositing-module-18-rotation" data-control="rotation" type="range" min="-180" max="180" step="1" value="22" />
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
    <p>Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Alpha Compositing works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Visual Notes]]
- [[Interactive]]
