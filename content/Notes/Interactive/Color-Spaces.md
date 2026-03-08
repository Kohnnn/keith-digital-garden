---
title: Color Spaces
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - color
draft: false
description: >-
  Color science explainer spanning RGB spaces, chromaticity, transfer curves,
  gamut boundaries, and matrix conversions with interactive plots.
created: '2019-02-15'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Color-Spaces
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Color Spaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/color-spaces/" target="_blank" rel="noopener noreferrer">Color Spaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.</p>

<div class="interactive-article" data-interactive-article="color-spaces">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Color Spaces</h2>
    <p>We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-01" data-sim-module="color-spaces:module-01" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Color Spaces interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-01-red">red/input</label>
      <input id="color-spaces-module-01-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-01-green">green/gamma</label>
      <input id="color-spaces-module-01-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-01-blue">blue/detail</label>
      <input id="color-spaces-module-01-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-01-space-0">
          <input id="color-spaces-module-01-space-0" data-control="space" type="radio" name="color-spaces-module-01-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-01-space-1">
          <input id="color-spaces-module-01-space-1" data-control="space" type="radio" name="color-spaces-module-01-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-01-space-2">
          <input id="color-spaces-module-01-space-2" data-control="space" type="radio" name="color-spaces-module-01-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Color Pickers</h2>
    <p>We can compare some of the colors for the same slider positions side by side.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-02" data-sim-module="color-spaces:module-02" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Color Pickers interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-02-red">red/input</label>
      <input id="color-spaces-module-02-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-02-green">green/gamma</label>
      <input id="color-spaces-module-02-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-02-blue">blue/detail</label>
      <input id="color-spaces-module-02-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-02-space-0">
          <input id="color-spaces-module-02-space-0" data-control="space" type="radio" name="color-spaces-module-02-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-02-space-1">
          <input id="color-spaces-module-02-space-1" data-control="space" type="radio" name="color-spaces-module-02-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-02-space-2">
          <input id="color-spaces-module-02-space-2" data-control="space" type="radio" name="color-spaces-module-02-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Normalized Range</h2>
    <p>The encoded value is on the horizontal axis and it’s symbolized with a binary code: Tone response curve of sRGB While the curve may look like a single power function, in the ran...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-03" data-sim-module="color-spaces:module-03" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Normalized Range interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-03-red">red/input</label>
      <input id="color-spaces-module-03-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-03-green">green/gamma</label>
      <input id="color-spaces-module-03-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-03-blue">blue/detail</label>
      <input id="color-spaces-module-03-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-03-space-0">
          <input id="color-spaces-module-03-space-0" data-control="space" type="radio" name="color-spaces-module-03-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-03-space-1">
          <input id="color-spaces-module-03-space-1" data-control="space" type="radio" name="color-spaces-module-03-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-03-space-2">
          <input id="color-spaces-module-03-space-2" data-control="space" type="radio" name="color-spaces-module-03-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Intensity Mismatch</h2>
    <p>Here’s a comparison of some of the colors for different slider values: A color space can specify how the numeric values of the red, green, and blue components map to intensity o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-04" data-sim-module="color-spaces:module-04" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Intensity Mismatch interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-04-red">red/input</label>
      <input id="color-spaces-module-04-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-04-green">green/gamma</label>
      <input id="color-spaces-module-04-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-04-blue">blue/detail</label>
      <input id="color-spaces-module-04-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-04-space-0">
          <input id="color-spaces-module-04-space-0" data-control="space" type="radio" name="color-spaces-module-04-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-04-space-1">
          <input id="color-spaces-module-04-space-1" data-control="space" type="radio" name="color-spaces-module-04-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-04-space-2">
          <input id="color-spaces-module-04-space-2" data-control="space" type="radio" name="color-spaces-module-04-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Primary Differences</h2>
    <p>Explains Primary Differences within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-05" data-sim-module="color-spaces:module-05" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Primary Differences interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-05-red">red/input</label>
      <input id="color-spaces-module-05-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-05-green">green/gamma</label>
      <input id="color-spaces-module-05-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-05-blue">blue/detail</label>
      <input id="color-spaces-module-05-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-05-space-0">
          <input id="color-spaces-module-05-space-0" data-control="space" type="radio" name="color-spaces-module-05-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-05-space-1">
          <input id="color-spaces-module-05-space-1" data-control="space" type="radio" name="color-spaces-module-05-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-05-space-2">
          <input id="color-spaces-module-05-space-2" data-control="space" type="radio" name="color-spaces-module-05-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Primaries Matched</h2>
    <p>We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-06" data-sim-module="color-spaces:module-06" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Primaries Matched interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-06-red">red/input</label>
      <input id="color-spaces-module-06-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-06-green">green/gamma</label>
      <input id="color-spaces-module-06-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-06-blue">blue/detail</label>
      <input id="color-spaces-module-06-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-06-space-0">
          <input id="color-spaces-module-06-space-0" data-control="space" type="radio" name="color-spaces-module-06-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-06-space-1">
          <input id="color-spaces-module-06-space-1" data-control="space" type="radio" name="color-spaces-module-06-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-06-space-2">
          <input id="color-spaces-module-06-space-2" data-control="space" type="radio" name="color-spaces-module-06-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Mixing Things Up</h2>
    <p>Explains Mixing Things Up within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-07" data-sim-module="color-spaces:module-07" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mixing Things Up interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-07-red">red/input</label>
      <input id="color-spaces-module-07-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-07-green">green/gamma</label>
      <input id="color-spaces-module-07-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-07-blue">blue/detail</label>
      <input id="color-spaces-module-07-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-07-space-0">
          <input id="color-spaces-module-07-space-0" data-control="space" type="radio" name="color-spaces-module-07-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-07-space-1">
          <input id="color-spaces-module-07-space-1" data-control="space" type="radio" name="color-spaces-module-07-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-07-space-2">
          <input id="color-spaces-module-07-space-2" data-control="space" type="radio" name="color-spaces-module-07-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · chart/plot module</span>
    <h2>Seeing the Matrix</h2>
    <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-08" data-sim-module="color-spaces:module-08">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Seeing the Matrix interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-08-slack">slack</label>
      <input id="color-spaces-module-08-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-08-damping">damping</label>
      <input id="color-spaces-module-08-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-08-drive">drive</label>
      <input id="color-spaces-module-08-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>There and Back Again</h2>
    <p>Explains There and Back Again within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-09" data-sim-module="color-spaces:module-09" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="There and Back Again interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-09-red">red/input</label>
      <input id="color-spaces-module-09-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-09-green">green/gamma</label>
      <input id="color-spaces-module-09-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-09-blue">blue/detail</label>
      <input id="color-spaces-module-09-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-09-space-0">
          <input id="color-spaces-module-09-space-0" data-control="space" type="radio" name="color-spaces-module-09-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-09-space-1">
          <input id="color-spaces-module-09-space-1" data-control="space" type="radio" name="color-spaces-module-09-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-09-space-2">
          <input id="color-spaces-module-09-space-2" data-control="space" type="radio" name="color-spaces-module-09-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Negative Values</h2>
    <p>The results of the experiments were standardized as rgb color matching functions that can be presented on a graph: CIE rgb color matching functions Notice the presence of negati...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-10" data-sim-module="color-spaces:module-10" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Negative Values interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-10-red">red/input</label>
      <input id="color-spaces-module-10-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-10-green">green/gamma</label>
      <input id="color-spaces-module-10-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-10-blue">blue/detail</label>
      <input id="color-spaces-module-10-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-10-space-0">
          <input id="color-spaces-module-10-space-0" data-control="space" type="radio" name="color-spaces-module-10-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-10-space-1">
          <input id="color-spaces-module-10-space-1" data-control="space" type="radio" name="color-spaces-module-10-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-10-space-2">
          <input id="color-spaces-module-10-space-2" data-control="space" type="radio" name="color-spaces-module-10-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · chart/plot module</span>
    <h2>The Matrix Seeing</h2>
    <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-11" data-sim-module="color-spaces:module-11">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The Matrix Seeing interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-11-slack">slack</label>
      <input id="color-spaces-module-11-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-11-damping">damping</label>
      <input id="color-spaces-module-11-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-11-drive">drive</label>
      <input id="color-spaces-module-11-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>Breaking the Boundaries</h2>
    <p>Explains Breaking the Boundaries within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-12" data-sim-module="color-spaces:module-12" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Breaking the Boundaries interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-12-red">red/input</label>
      <input id="color-spaces-module-12-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-12-green">green/gamma</label>
      <input id="color-spaces-module-12-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-12-blue">blue/detail</label>
      <input id="color-spaces-module-12-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-12-space-0">
          <input id="color-spaces-module-12-space-0" data-control="space" type="radio" name="color-spaces-module-12-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-12-space-1">
          <input id="color-spaces-module-12-space-1" data-control="space" type="radio" name="color-spaces-module-12-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-12-space-2">
          <input id="color-spaces-module-12-space-2" data-control="space" type="radio" name="color-spaces-module-12-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Try using the one below: The gist of</h2>
    <p>Try using the one below: The gist of the behavior of that new picker is the same - the red slider controls the red component, the green slider affects the green component, and t...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-13" data-sim-module="color-spaces:module-13" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Try using the one below: The gist of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-13-red">red/input</label>
      <input id="color-spaces-module-13-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-13-green">green/gamma</label>
      <input id="color-spaces-module-13-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-13-blue">blue/detail</label>
      <input id="color-spaces-module-13-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-13-space-0">
          <input id="color-spaces-module-13-space-0" data-control="space" type="radio" name="color-spaces-module-13-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-13-space-1">
          <input id="color-spaces-module-13-space-1" data-control="space" type="radio" name="color-spaces-module-13-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-13-space-2">
          <input id="color-spaces-module-13-space-2" data-control="space" type="radio" name="color-spaces-module-13-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>In other words, the position of a slider</h2>
    <p>In other words, the position of a slider may not be equal to intensity of the light the slider controls.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-14" data-sim-module="color-spaces:module-14">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="In other words, the position of a slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-14-time">time</label>
      <input id="color-spaces-module-14-time" data-control="time" type="range" min="0.2" max="3" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-14-altitude">altitude</label>
      <input id="color-spaces-module-14-altitude" data-control="altitude" type="range" min="0.1" max="0.95" step="0.01" value="0.58" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-14-inclination">inclination</label>
      <input id="color-spaces-module-14-inclination" data-control="inclination" type="range" min="0" max="1" step="0.01" value="0.45" />
    </div>
    <button data-control="reset" type="button">reset geometry</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>Drag the cubes around to see them from different angles</h2>
    <p>You can drag the cubes around to see them from different angles and control the R G B color indicator using the sliders: As an experiment I encourage you to set red and green co...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, play/pause. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; time progression can be paused/resumed...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-15" data-sim-module="color-spaces:module-15" data-sim-shared="color-spaces-core" data-sim-pause-group="color-spaces-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Drag the cubes around to see them from different angles interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-15-red">red/input</label>
      <input id="color-spaces-module-15-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-15-green">green/gamma</label>
      <input id="color-spaces-module-15-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-15-blue">blue/detail</label>
      <input id="color-spaces-module-15-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-15-space-0">
          <input id="color-spaces-module-15-space-0" data-control="space" type="radio" name="color-spaces-module-15-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-15-space-1">
          <input id="color-spaces-module-15-space-1" data-control="space" type="radio" name="color-spaces-module-15-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-15-space-2">
          <input id="color-spaces-module-15-space-2" data-control="space" type="radio" name="color-spaces-module-15-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · chart/plot module</span>
    <h2>Reading from the color matching plot we can</h2>
    <p>Reading from the color matching plot we can tell that the color match required 0.16768 units of R , 0.17087 units of G and -0.00135 units of B .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-16" data-sim-module="color-spaces:module-16">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Reading from the color matching plot we can interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-16-slack">slack</label>
      <input id="color-spaces-module-16-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-16-damping">damping</label>
      <input id="color-spaces-module-16-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-16-drive">drive</label>
      <input id="color-spaces-module-16-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · chart/plot module</span>
    <h2>If we read the color matching value for</h2>
    <p>If we read the color matching value for every wavelength we obtain the following plot: You may wonder why the spectrum curve doesn’t go through the pure red, green, or blue endp...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-17" data-sim-module="color-spaces:module-17">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="If we read the color matching value for interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-17-slack">slack</label>
      <input id="color-spaces-module-17-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-17-damping">damping</label>
      <input id="color-spaces-module-17-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-17-drive">drive</label>
      <input id="color-spaces-module-17-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · chart/plot module</span>
    <h2>xy Chromaticity Diagram Three dimensional diagrams are fun</h2>
    <p>xy Chromaticity Diagram Three dimensional diagrams are fun to play with, but they’re often not particularly practical - a 2D plot is often easier to work with and reason about.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection; plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-18" data-sim-module="color-spaces:module-18" data-sim-pause-group="color-spaces-motion">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="xy Chromaticity Diagram Three dimensional diagrams are fun interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-18-slack">slack</label>
      <input id="color-spaces-module-18-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-18-damping">damping</label>
      <input id="color-spaces-module-18-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-18-drive">drive</label>
      <input id="color-spaces-module-18-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · chart/plot module</span>
    <h2>Rejection of z is equivalent to a flat</h2>
    <p>Rejection of z is equivalent to a flat projection onto xy plane: If we repeat that step for every combination of spectral colors we can finally present the 2D plot known as CIE ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-19" data-sim-module="color-spaces:module-19">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Rejection of z is equivalent to a flat interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-19-slack">slack</label>
      <input id="color-spaces-module-19-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-19-damping">damping</label>
      <input id="color-spaces-module-19-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-19-drive">drive</label>
      <input id="color-spaces-module-19-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="chart" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · chart/plot module</span>
    <h2>The colors on the inside of the plot</h2>
    <p>The colors on the inside of the plot are just some combinations of the spectral colors and the colors outside of the plot don’t exist .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-20" data-sim-module="color-spaces:module-20">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="The colors on the inside of the plot interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-20-slack">slack</label>
      <input id="color-spaces-module-20-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-20-damping">damping</label>
      <input id="color-spaces-module-20-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-20-drive">drive</label>
      <input id="color-spaces-module-20-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · chart/plot module</span>
    <h2>In some areas of the plot one has</h2>
    <p>In some areas of the plot one has to move relatively far away from a chosen color to notice the difference in chromaticity, while in some other areas the distance to change is m...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-21" data-sim-module="color-spaces:module-21">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="In some areas of the plot one has interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-21-slack">slack</label>
      <input id="color-spaces-module-21-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-21-damping">damping</label>
      <input id="color-spaces-module-21-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-21-drive">drive</label>
      <input id="color-spaces-module-21-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset path</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>You can drag the slider to see how the extent</h2>
    <p>In the simulation below you can drag the slider to see how the extent of the chromaticity triangle corresponds to the representable colors.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-22" data-sim-module="color-spaces:module-22" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can drag the slider to see how the extent interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-22-red">red/input</label>
      <input id="color-spaces-module-22-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-22-green">green/gamma</label>
      <input id="color-spaces-module-22-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-22-blue">blue/detail</label>
      <input id="color-spaces-module-22-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-22-space-0">
          <input id="color-spaces-module-22-space-0" data-control="space" type="radio" name="color-spaces-module-22-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-22-space-1">
          <input id="color-spaces-module-22-space-1" data-control="space" type="radio" name="color-spaces-module-22-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-22-space-2">
          <input id="color-spaces-module-22-space-2" data-control="space" type="radio" name="color-spaces-module-22-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>Click tap the image to change it: Your browser doesn't</h2>
    <p>You can click tap the image to change it: Your browser doesn't support WebGL which is required for this demo.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-23" data-sim-module="color-spaces:module-23">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Click tap the image to change it: Your browser doesn't interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-23-speed">speed</label>
      <input id="color-spaces-module-23-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-23-ratio">ratio</label>
      <input id="color-spaces-module-23-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-23-impulse">impulse</label>
      <input id="color-spaces-module-23-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>See what happens when you drag all the</h2>
    <p>See what happens when you drag all the sliders to the right : The color space form the bottom half defines its white as a slightly different color than the top color space.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-24" data-sim-module="color-spaces:module-24" data-sim-shared="color-spaces-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="See what happens when you drag all the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-24-red">red/input</label>
      <input id="color-spaces-module-24-red" data-control="red" type="range" min="0" max="1" step="0.01" value="0.55" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-24-green">green/gamma</label>
      <input id="color-spaces-module-24-green" data-control="green" type="range" min="0" max="1" step="0.01" value="0.42" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-24-blue">blue/detail</label>
      <input id="color-spaces-module-24-blue" data-control="blue" type="range" min="0" max="1" step="0.01" value="0.68" />
    </div>
    <div class="interactive-sim-control">
      <label>space</label>
      <div class="interactive-choice-group">
        <label class="interactive-choice-pill" for="color-spaces-module-24-space-0">
          <input id="color-spaces-module-24-space-0" data-control="space" type="radio" name="color-spaces-module-24-space" value="sRGB" checked />
          <span>sRGB</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-24-space-1">
          <input id="color-spaces-module-24-space-1" data-control="space" type="radio" name="color-spaces-module-24-space" value="Display P3"  />
          <span>Display P3</span>
        </label>
        <label class="interactive-choice-pill" for="color-spaces-module-24-space-2">
          <input id="color-spaces-module-24-space-2" data-control="space" type="radio" name="color-spaces-module-24-space" value="XYZ"  />
          <span>XYZ</span>
        </label>
      </div>
    </div>
    <button data-control="reset" type="button">reset palette</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="chart" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · chart/plot module</span>
    <h2>Tone Response Curve Let’s look at the plot</h2>
    <p>Tone Response Curve Let’s look at the plot of the tone response curve of the sRGB color space.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="color-spaces:module-25" data-sim-module="color-spaces:module-25">
  <div class="interactive-sim-stage stage-short">
    <svg class="sim-svg" aria-label="Tone Response Curve Let’s look at the plot interactive module"></svg>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-spaces-module-25-slack">slack</label>
      <input id="color-spaces-module-25-slack" data-control="slack" type="range" min="0.02" max="0.42" step="0.01" value="0.18" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-25-damping">damping</label>
      <input id="color-spaces-module-25-damping" data-control="damping" type="range" min="0.4" max="0.98" step="0.01" value="0.78" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-spaces-module-25-drive">drive</label>
      <input id="color-spaces-module-25-drive" data-control="drive" type="range" min="0.4" max="2.2" step="0.05" value="1.1" />
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
    <p>Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Color Spaces works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Cameras and Lenses]]
- [[Lights and Shadows]]
- [[Alpha Compositing]]
