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
  Interactive RGB sandbox for channel mixing, luminance shifts, and color
  perception tradeoffs.
created: "2019-02-15"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Color-Spaces
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Color Spaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/color-spaces/" target="_blank" rel="noopener noreferrer">Color Spaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.</p>

<div class="interactive-article" data-interactive-article="color-spaces">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="color-spaces-main" data-sim-scene="color-spaces">
  <div class="interactive-sim-stage stage-short">
    <canvas class="sim-canvas" aria-label="Color space controls"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="color-r">red channel</label>
      <input id="color-r" data-control="r" type="range" min="0" max="1" step="0.01" value="0.56" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-g">green channel</label>
      <input id="color-g" data-control="g" type="range" min="0" max="1" step="0.01" value="0.34" />
    </div>
    <div class="interactive-sim-control">
      <label for="color-b">blue channel</label>
      <input id="color-b" data-control="b" type="range" min="0" max="1" step="0.01" value="0.82" />
    </div>
    <button data-control="reset" type="button">reset channels</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="color-spaces">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="color-spaces" data-step-preset="module-01" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 01</span>
      <h2>Color Spaces</h2>
      <p>We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="color-spaces" data-step-preset="module-02" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 02</span>
      <h2>Color Pickers</h2>
      <p>We can compare some of the colors for the same slider positions side by side.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="color-spaces" data-step-preset="module-03" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 03</span>
      <h2>Normalized Range</h2>
      <p>The encoded value is on the horizontal axis and it’s symbolized with a binary code: Tone response curve of sRGB While the curve may look like a single power function, in the ran...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="color-spaces" data-step-preset="module-04" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 04</span>
      <h2>Intensity Mismatch</h2>
      <p>Here’s a comparison of some of the colors for different slider values: A color space can specify how the numeric values of the red, green, and blue components map to intensity o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="color-spaces" data-step-preset="module-05" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 05</span>
      <h2>Primary Differences</h2>
      <p>Explains Primary Differences within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="color-spaces" data-step-preset="module-06" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 06</span>
      <h2>Primaries Matched</h2>
      <p>We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="color-spaces" data-step-preset="module-07" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 07</span>
      <h2>Mixing Things Up</h2>
      <p>Explains Mixing Things Up within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="color-spaces" data-step-preset="module-08" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 08</span>
      <h2>Seeing the Matrix</h2>
      <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="color-spaces" data-step-preset="module-09" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 09</span>
      <h2>There and Back Again</h2>
      <p>Explains There and Back Again within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="color-spaces" data-step-preset="module-10" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 10</span>
      <h2>Negative Values</h2>
      <p>The results of the experiments were standardized as rgb color matching functions that can be presented on a graph: CIE rgb color matching functions Notice the presence of negati...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="color-spaces" data-step-preset="module-11" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 11</span>
      <h2>The Matrix Seeing</h2>
      <p>Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="color-spaces" data-step-preset="module-12" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 12</span>
      <h2>Breaking the Boundaries</h2>
      <p>Explains Breaking the Boundaries within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="color-spaces" data-step-preset="module-13" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 13</span>
      <h2>Try using the one below: The gist of</h2>
      <p>Try using the one below: The gist of the behavior of that new picker is the same - the red slider controls the red component, the green slider affects the green component, and t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="color-spaces" data-step-preset="module-14" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 14</span>
      <h2>In other words, the position of a slider</h2>
      <p>In other words, the position of a slider may not be equal to intensity of the light the slider controls.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="color-spaces" data-step-preset="module-15" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 15</span>
      <h2>Drag the cubes around to see them from different angles</h2>
      <p>You can drag the cubes around to see them from different angles and control the R G B color indicator using the sliders: As an experiment I encourage you to set red and green co...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, play/pause. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; time progression can be paused/resumed...</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="color-spaces" data-step-preset="module-16" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 16</span>
      <h2>Reading from the color matching plot we can</h2>
      <p>Reading from the color matching plot we can tell that the color match required 0.16768 units of R , 0.17087 units of G and -0.00135 units of B .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="color-spaces" data-step-preset="module-17" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 17</span>
      <h2>If we read the color matching value for</h2>
      <p>If we read the color matching value for every wavelength we obtain the following plot: You may wonder why the spectrum curve doesn’t go through the pure red, green, or blue endp...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="color-spaces" data-step-preset="module-18" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 18</span>
      <h2>xy Chromaticity Diagram Three dimensional diagrams are fun</h2>
      <p>xy Chromaticity Diagram Three dimensional diagrams are fun to play with, but they’re often not particularly practical - a 2D plot is often easier to work with and reason about.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="color-spaces" data-step-preset="module-19" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 19</span>
      <h2>Rejection of z is equivalent to a flat</h2>
      <p>Rejection of z is equivalent to a flat projection onto xy plane: If we repeat that step for every combination of spectral colors we can finally present the 2D plot known as CIE ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="color-spaces" data-step-preset="module-20" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 20</span>
      <h2>The colors on the inside of the plot</h2>
      <p>The colors on the inside of the plot are just some combinations of the spectral colors and the colors outside of the plot don’t exist .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="color-spaces" data-step-preset="module-21" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 21</span>
      <h2>In some areas of the plot one has</h2>
      <p>In some areas of the plot one has to move relatively far away from a chosen color to notice the difference in chromaticity, while in some other areas the distance to change is m...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="color-spaces" data-step-preset="module-22" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 22</span>
      <h2>You can drag the slider to see how the extent</h2>
      <p>In the simulation below you can drag the slider to see how the extent of the chromaticity triangle corresponds to the representable colors.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="color-spaces" data-step-preset="module-23" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 23</span>
      <h2>Click tap the image to change it: Your browser doesn't</h2>
      <p>You can click tap the image to change it: Your browser doesn't support WebGL which is required for this demo.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="color-spaces" data-step-preset="module-24" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 24</span>
      <h2>See what happens when you drag all the</h2>
      <p>See what happens when you drag all the sliders to the right : The color space form the bottom half defines its white as a slightly different color than the top color space.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="color-spaces" data-step-preset="module-25" data-sync-group="color-spaces-main">
      <span class="casefile-label">Module 25</span>
      <h2>Tone Response Curve Let’s look at the plot</h2>
      <p>Tone Response Curve Let’s look at the plot of the tone response curve of the sRGB color space.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    </div>
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
    <p>The Color Spaces article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Cameras and Lenses]]
- [[Lights and Shadows]]
- [[Alpha Compositing]]
