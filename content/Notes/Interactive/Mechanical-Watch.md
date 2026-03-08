---
title: Mechanical Watch
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - engineering
draft: false
description: >-
  Comprehensive mechanical watch teardown: mainspring power flow, escapement
  timing, gear trains, keyless works, and automatic winding.
created: '2022-05-04'
updated: '2026-03-08'
aliases:
  - Portfolio/Stuffs/Mechanical-Watch
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
  - module-lab
---
# Mechanical Watch

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/mechanical-watch/" target="_blank" rel="noopener noreferrer">Mechanical Watch by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Comprehensive mechanical watch teardown: mainspring power flow, escapement timing, gear trains, keyless works, and automatic winding.</p>

<div class="interactive-article" data-interactive-article="mechanical-watch">
  <div class="interactive-module-stack">
<section class="interactive-module" data-layout="inline" data-module-id="module-01">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 01 · interactive simulation/diagram module</span>
    <h2>Mechanical Watch</h2>
    <p>You can drag the device around to change your viewing angle, and you can use the slider to peek at what’s going on inside: What you see here is known as the movement - the inner...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-01" data-sim-module="mechanical-watch:module-01" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical Watch interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-01-speed">speed</label>
      <input id="mechanical-watch-module-01-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-01-ratio">ratio</label>
      <input id="mechanical-watch-module-01-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-01-impulse">impulse</label>
      <input id="mechanical-watch-module-01-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-02">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 02 · interactive simulation/diagram module</span>
    <h2>Power</h2>
    <p>By default all animations in this article are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-02" data-sim-module="mechanical-watch:module-02" data-sim-shared="mechanical-watch-core" data-sim-pause-group="mechanical-watch-motion">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Power interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-02-speed">speed</label>
      <input id="mechanical-watch-module-02-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-02-ratio">ratio</label>
      <input id="mechanical-watch-module-02-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-02-impulse">impulse</label>
      <input id="mechanical-watch-module-02-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
    <button data-control="pause-toggle" type="button">pause motion</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-03">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 03 · interactive simulation/diagram module</span>
    <h2>Gears</h2>
    <p>In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-03" data-sim-module="mechanical-watch:module-03" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gears interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-03-speed">speed</label>
      <input id="mechanical-watch-module-03-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-03-ratio">ratio</label>
      <input id="mechanical-watch-module-03-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-03-impulse">impulse</label>
      <input id="mechanical-watch-module-03-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-04">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 04 · interactive simulation/diagram module</span>
    <h2>Escapement</h2>
    <p>Simulates escape wheel and pallet interaction to show lock/unlock cycles and discrete energy transfer into the oscillator.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-04" data-sim-module="mechanical-watch:module-04" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Escapement interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-04-speed">speed</label>
      <input id="mechanical-watch-module-04-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-04-ratio">ratio</label>
      <input id="mechanical-watch-module-04-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-04-impulse">impulse</label>
      <input id="mechanical-watch-module-04-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-05">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 05 · interactive simulation/diagram module</span>
    <h2>Balance</h2>
    <p>Visualizes balance wheel and hairspring oscillation, highlighting period stability and impulse timing.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-05" data-sim-module="mechanical-watch:module-05" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Balance interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-05-speed">speed</label>
      <input id="mechanical-watch-module-05-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-05-ratio">ratio</label>
      <input id="mechanical-watch-module-05-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-05-impulse">impulse</label>
      <input id="mechanical-watch-module-05-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-06">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 06 · interactive simulation/diagram module</span>
    <h2>Mainplate</h2>
    <p>Explodes the structural base assembly to show where bridges, pivots, and wheel arbors are constrained.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-06" data-sim-module="mechanical-watch:module-06" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mainplate interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-06-speed">speed</label>
      <input id="mechanical-watch-module-06-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-06-ratio">ratio</label>
      <input id="mechanical-watch-module-06-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-06-impulse">impulse</label>
      <input id="mechanical-watch-module-06-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-07">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 07 · interactive simulation/diagram module</span>
    <h2>Click</h2>
    <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-07" data-sim-module="mechanical-watch:module-07">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Click interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-07-speed">speed</label>
      <input id="mechanical-watch-module-07-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-07-ratio">ratio</label>
      <input id="mechanical-watch-module-07-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-07-impulse">impulse</label>
      <input id="mechanical-watch-module-07-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-08">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 08 · interactive simulation/diagram module</span>
    <h2>Motion Works</h2>
    <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-08" data-sim-module="mechanical-watch:module-08" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Motion Works interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-08-speed">speed</label>
      <input id="mechanical-watch-module-08-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-08-ratio">ratio</label>
      <input id="mechanical-watch-module-08-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-08-impulse">impulse</label>
      <input id="mechanical-watch-module-08-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-09">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 09 · interactive simulation/diagram module</span>
    <h2>Date</h2>
    <p>Shows the date-complication train: date wheel indexing, jumper locking, and crown-driven increment behavior (single-step/day rollover) with visible coupling to neighboring gears.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-09" data-sim-module="mechanical-watch:module-09" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Date interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-09-speed">speed</label>
      <input id="mechanical-watch-module-09-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-09-ratio">ratio</label>
      <input id="mechanical-watch-module-09-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-09-impulse">impulse</label>
      <input id="mechanical-watch-module-09-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-10">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 10 · interactive simulation/diagram module</span>
    <h2>Keyless Works</h2>
    <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-10" data-sim-module="mechanical-watch:module-10" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Keyless Works interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-10-speed">speed</label>
      <input id="mechanical-watch-module-10-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-10-ratio">ratio</label>
      <input id="mechanical-watch-module-10-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-10-impulse">impulse</label>
      <input id="mechanical-watch-module-10-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-11">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 11 · interactive simulation/diagram module</span>
    <h2>Automatic Winding</h2>
    <p>The click also prevents the mainspring from unwinding on its own - that’s why you can’t drag back the slider without restarting the entire simulation: The second hand on the oth...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transition...</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-11" data-sim-module="mechanical-watch:module-11" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Automatic Winding interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-11-speed">speed</label>
      <input id="mechanical-watch-module-11-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-11-ratio">ratio</label>
      <input id="mechanical-watch-module-11-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-11-impulse">impulse</label>
      <input id="mechanical-watch-module-11-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-12">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 12 · interactive simulation/diagram module</span>
    <h2>The Size of it All</h2>
    <p>In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-12" data-sim-module="mechanical-watch:module-12" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The Size of it All interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-12-speed">speed</label>
      <input id="mechanical-watch-module-12-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-12-ratio">ratio</label>
      <input id="mechanical-watch-module-12-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-12-impulse">impulse</label>
      <input id="mechanical-watch-module-12-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-13">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 13 · interactive simulation/diagram module</span>
    <h2>Wind it midair, but as soon as you let go,</h2>
    <p>By dragging the slider you can try to wind it midair, but as soon as you let go, it will snap back to its original shape: As you can see, this spring is quite strong and it want...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-13" data-sim-module="mechanical-watch:module-13" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Wind it midair, but as soon as you let go, interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-13-speed">speed</label>
      <input id="mechanical-watch-module-13-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-13-ratio">ratio</label>
      <input id="mechanical-watch-module-13-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-13-impulse">impulse</label>
      <input id="mechanical-watch-module-13-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-14">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 14 · interactive simulation/diagram module</span>
    <h2>We’re holding the barrel tight, and you can turn the</h2>
    <p>In the demonstration below, we’re holding the barrel tight, and you can turn the arbor by dragging the slider: Notice that as soon as you let go of the arbor by releasing the sl...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-14" data-sim-module="mechanical-watch:module-14" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="We’re holding the barrel tight, and you can turn the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-14-speed">speed</label>
      <input id="mechanical-watch-module-14-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-14-ratio">ratio</label>
      <input id="mechanical-watch-module-14-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-14-impulse">impulse</label>
      <input id="mechanical-watch-module-14-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-15">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 15 · interactive simulation/diagram module</span>
    <h2>See how this “watch” behaves after you wind the mainspring</h2>
    <p>You can see how this “watch” behaves after you wind the mainspring with the slider and let it go: We clearly have some work to do - the hand spins way too fast and it only does ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-15" data-sim-module="mechanical-watch:module-15" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="See how this “watch” behaves after you wind the mainspring interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-15-speed">speed</label>
      <input id="mechanical-watch-module-15-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-15-ratio">ratio</label>
      <input id="mechanical-watch-module-15-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-15-impulse">impulse</label>
      <input id="mechanical-watch-module-15-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-16">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 16 · interactive simulation/diagram module</span>
    <h2>Control the speed of rotation of this gear train using</h2>
    <p>You can control the speed of rotation of this gear train using the slider: The barrel acts as the first wheel , it drives the second wheel , which drives the third wheel , which...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-16" data-sim-module="mechanical-watch:module-16" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Control the speed of rotation of this gear train using interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-16-speed">speed</label>
      <input id="mechanical-watch-module-16-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-16-ratio">ratio</label>
      <input id="mechanical-watch-module-16-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-16-impulse">impulse</label>
      <input id="mechanical-watch-module-16-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-17">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 17 · interactive simulation/diagram module</span>
    <h2>Let’s see why these properties are important by</h2>
    <p>Let’s see why these properties are important by observing how these two components interact with each other: The escape wheel wants to rotate as indicated by the red arrow .</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-17" data-sim-module="mechanical-watch:module-17" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Let’s see why these properties are important by interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-17-speed">speed</label>
      <input id="mechanical-watch-module-17-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-17-ratio">ratio</label>
      <input id="mechanical-watch-module-17-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-17-impulse">impulse</label>
      <input id="mechanical-watch-module-17-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-18">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 18 · interactive simulation/diagram module</span>
    <h2>You can slow things down with the slider</h2>
    <p>In the demonstration below, you can slow things down with the slider: Let’s look at this interaction up close, as it deserves a closer attention.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-18" data-sim-module="mechanical-watch:module-18" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="You can slow things down with the slider interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-18-speed">speed</label>
      <input id="mechanical-watch-module-18-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-18-ratio">ratio</label>
      <input id="mechanical-watch-module-18-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-18-impulse">impulse</label>
      <input id="mechanical-watch-module-18-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-19">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 19 · interactive simulation/diagram module</span>
    <h2>Click To continue developing our assembly, we firstly</h2>
    <p>Click To continue developing our assembly, we firstly need to put a solid foundation in the form of the barrel bridge - it holds the barrel in place and provides structure for o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-19" data-sim-module="mechanical-watch:module-19">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Click To continue developing our assembly, we firstly interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-19-speed">speed</label>
      <input id="mechanical-watch-module-19-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-19-ratio">ratio</label>
      <input id="mechanical-watch-module-19-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-19-impulse">impulse</label>
      <input id="mechanical-watch-module-19-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-20">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 20 · interactive simulation/diagram module</span>
    <h2>Firstly, we put the little click in the</h2>
    <p>Firstly, we put the little click in the opening on top of the barrel bridge : Within its limited range the click can rotate back and forth on its little axis: The second piece o...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range, click/tap. <strong>Response:</strong> parameter values update continuously while slider position changes; click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-20" data-sim-module="mechanical-watch:module-20">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Firstly, we put the little click in the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-20-speed">speed</label>
      <input id="mechanical-watch-module-20-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-20-ratio">ratio</label>
      <input id="mechanical-watch-module-20-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-20-impulse">impulse</label>
      <input id="mechanical-watch-module-20-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-21">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 21 · interactive simulation/diagram module</span>
    <h2>When we squeeze it, it wants to pop</h2>
    <p>When we squeeze it, it wants to pop back: We compress that click spring a little and we also put it into the barrel bridge : Notice that when we try to rotate the click , the cl...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-21" data-sim-module="mechanical-watch:module-21" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="When we squeeze it, it wants to pop interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-21-speed">speed</label>
      <input id="mechanical-watch-module-21-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-21-ratio">ratio</label>
      <input id="mechanical-watch-module-21-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-21-impulse">impulse</label>
      <input id="mechanical-watch-module-21-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-22">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 22 · interactive simulation/diagram module</span>
    <h2>The gaps in the crown wheel allow the</h2>
    <p>The gaps in the crown wheel allow the little post on the click to fall between the crown wheel’s teeth.</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-22" data-sim-module="mechanical-watch:module-22" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The gaps in the crown wheel allow the interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-22-speed">speed</label>
      <input id="mechanical-watch-module-22-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-22-ratio">ratio</label>
      <input id="mechanical-watch-module-22-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-22-impulse">impulse</label>
      <input id="mechanical-watch-module-22-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-23">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 23 · interactive simulation/diagram module</span>
    <h2>Notice how the teeth of the crown wheel</h2>
    <p>Notice how the teeth of the crown wheel end up pushing the click away, but it snaps back as soon as there is some space: When the click snaps back and hits the crown wheel , it ...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-23" data-sim-module="mechanical-watch:module-23" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Notice how the teeth of the crown wheel interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-23-speed">speed</label>
      <input id="mechanical-watch-module-23-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-23-ratio">ratio</label>
      <input id="mechanical-watch-module-23-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-23-impulse">impulse</label>
      <input id="mechanical-watch-module-23-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module is-reversed" data-layout="inline" data-module-id="module-24">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 24 · interactive simulation/diagram module</span>
    <h2>Notice how the crown wheel’s teeth jam with the click</h2>
    <p>In the simulation below, notice how the crown wheel’s teeth jam with the click , preventing the crown wheel’s rotation: This simple mechanism allows us to wind the mainspring by...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-24" data-sim-module="mechanical-watch:module-24">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Notice how the crown wheel’s teeth jam with the click interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-24-speed">speed</label>
      <input id="mechanical-watch-module-24-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-24-ratio">ratio</label>
      <input id="mechanical-watch-module-24-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-24-impulse">impulse</label>
      <input id="mechanical-watch-module-24-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
  </div>
</div>
  </div>
</section>

<section class="interactive-module" data-layout="inline" data-module-id="module-25">
  <div class="interactive-module-copy">
    <span class="casefile-label">Module 25 · interactive simulation/diagram module</span>
    <h2>The slider lets you control the speed of</h2>
    <p>The slider lets you control the speed of flowing time so that you don’t have to wait too patiently to see hands change their position: The hour hand itself needs to rotate 12 ti...</p>
    <p class="interactive-module-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
  </div>
  <div class="interactive-module-figure">
<div class="interactive-sim" data-sim-scene="mechanical-watch:module-25" data-sim-module="mechanical-watch:module-25" data-sim-shared="mechanical-watch-core">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="The slider lets you control the speed of interactive module"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-25-speed">speed</label>
      <input id="mechanical-watch-module-25-speed" data-control="speed" type="range" min="0.2" max="3.2" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-25-ratio">ratio</label>
      <input id="mechanical-watch-module-25-ratio" data-control="ratio" type="range" min="0.35" max="1.8" step="0.05" value="0.92" />
    </div>
    <div class="interactive-sim-control">
      <label for="mechanical-watch-module-25-impulse">impulse</label>
      <input id="mechanical-watch-module-25-impulse" data-control="impulse" type="range" min="0.1" max="1" step="0.01" value="0.55" />
    </div>
    <button data-control="reset" type="button">reset module</button>
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
    <p>Comprehensive mechanical watch teardown: mainspring power flow, escapement timing, gear trains, keyless works, and automatic winding.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>Mechanical Watch works because the explanation stays attached to visible state changes.</p>
  </div>
</div>

## Related notes

- [[Gears]]
- [[Internal Combustion Engine]]
- [[Bicycle]]
