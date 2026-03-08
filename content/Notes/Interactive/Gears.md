---
title: Gears
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - mechanics
draft: false
description: >-
  Interactive gear-train sandbox for ratio transfer, direction inversion, and
  phase drift.
created: "2020-02-12"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Gears
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Gears

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gears/" target="_blank" rel="noopener noreferrer">Gears by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.</p>

<div class="interactive-article" data-interactive-article="gears">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="gears-main" data-sim-scene="gears">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Gear train simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gears-drive">drive velocity</label>
      <input id="gears-drive" data-control="drive" type="range" min="0.2" max="3.2" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="gears-idler">idler scale</label>
      <input id="gears-idler" data-control="idler" type="range" min="0.5" max="1.8" step="0.02" value="1" />
    </div>
    <button data-control="reset" type="button">reset train</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="gears">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="gears" data-step-preset="module-01" data-sync-group="gears-main">
      <span class="casefile-label">Module 01</span>
      <h2>Gears</h2>
      <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="gears" data-step-preset="module-02" data-sync-group="gears-main">
      <span class="casefile-label">Module 02</span>
      <h2>Spinning</h2>
      <p>Explains Spinning within Gears using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="gears" data-step-preset="module-03" data-sync-group="gears-main">
      <span class="casefile-label">Module 03</span>
      <h2>Disc</h2>
      <p>In the demonstration below you can control its angular velocity with a slider: The small triangular indicator is there to help visualize the current orientation of the disc.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="gears" data-step-preset="module-04" data-sync-group="gears-main">
      <span class="casefile-label">Module 04</span>
      <h2>Transmission</h2>
      <p>Explains Transmission within Gears using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="gears" data-step-preset="module-05" data-sync-group="gears-main">
      <span class="casefile-label">Module 05</span>
      <h2>Torque</h2>
      <p>However, the radii of both discs are scaled by the same factor of cos(alpha) , where alpha is the pressure angle controlled by the slider in the simulation above: T out = T in ·...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="gears" data-step-preset="module-06" data-sync-group="gears-main">
      <span class="casefile-label">Module 06</span>
      <h2>Tangent & Normal</h2>
      <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="gears" data-step-preset="module-07" data-sync-group="gears-main">
      <span class="casefile-label">Module 07</span>
      <h2>Strings Attached</h2>
      <p>I attached a piece of paper to the underside of the yellow disc so that we can see the trail left by the marker as the disc rotates: The straight part of the string represents t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="gears" data-step-preset="module-08" data-sync-group="gears-main">
      <span class="casefile-label">Module 08</span>
      <h2>Multiple Gears</h2>
      <p>The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="gears" data-step-preset="module-09" data-sync-group="gears-main">
      <span class="casefile-label">Module 09</span>
      <h2>Further Watching and Reading</h2>
      <p>Narrative/reference section in Gears that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="gears" data-step-preset="module-10" data-sync-group="gears-main">
      <span class="casefile-label">Module 10</span>
      <h2>Final Words</h2>
      <p>Narrative/reference section in Gears that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="gears" data-step-preset="module-11" data-sync-group="gears-main">
      <span class="casefile-label">Module 11</span>
      <h2>Play and pause them by clicking tapping on the button</h2>
      <p>Movement is important in this article so most of the visualizations are animated - you can play and pause them by clicking tapping on the button in their bottom left corner.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="gears" data-step-preset="module-12" data-sync-group="gears-main">
      <span class="casefile-label">Module 12</span>
      <h2>Globally pause all animations, just make sure to unpause them</h2>
      <p>By default the animations are enabled, but if you find them distracting, or you want to save power, you can globally pause all animations, just make sure to unpause them as needed.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="gears" data-step-preset="module-13" data-sync-group="gears-main">
      <span class="casefile-label">Module 13</span>
      <h2>You can control the fan’s speed using a slider</h2>
      <p>In the demonstration below you can control the fan’s speed using a slider: The speed of a rotating fan is a different kind of speed than that of a car - it describes how quickly...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="gears" data-step-preset="module-14" data-sync-group="gears-main">
      <span class="casefile-label">Module 14</span>
      <h2>Let’s investigate what’s going on by controlling the</h2>
      <p>Let’s investigate what’s going on by controlling the time back and forth with a slider.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="gears" data-step-preset="module-15" data-sync-group="gears-main">
      <span class="casefile-label">Module 15</span>
      <h2>See the flattened arcs of the paths traced by the</h2>
      <p>As the disc rotates the points leave a trace of the path they followed: At the bottom part of the simulation you can see the flattened arcs of the paths traced by the six points.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="gears" data-step-preset="module-16" data-sync-group="gears-main">
      <span class="casefile-label">Module 16</span>
      <h2>The driving yellow disc is powered by some engine, which</h2>
      <p>In the demonstration below the driving yellow disc is powered by some engine, which I’ve indicated using a rotating arrow near the shaft.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="gears" data-step-preset="module-17" data-sync-group="gears-main">
      <span class="casefile-label">Module 17</span>
      <h2>You can control the ratio of radii of the two</h2>
      <p>In the simulation below you can control the ratio of radii of the two discs.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="gears" data-step-preset="module-18" data-sync-group="gears-main">
      <span class="casefile-label">Module 18</span>
      <h2>You can witness what happens to the effective circle radii</h2>
      <p>In the simulation below you can witness what happens to the effective circle radii when the line of force does not go through the pitch point: As you can see, if the acting forc...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="gears" data-step-preset="module-19" data-sync-group="gears-main">
      <span class="casefile-label">Module 19</span>
      <h2>Let’s see what happens when we put a</h2>
      <p>Let’s see what happens when we put a little perpendicular red marker on that string and start unwinding it from one disc and winding it onto another.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="gears" data-step-preset="module-20" data-sync-group="gears-main">
      <span class="casefile-label">Module 20</span>
      <h2>However, that’s exactly what the red marker does</h2>
      <p>However, that’s exactly what the red marker does - at every point of the curve it is perpendicular to the string, and thus it’s perpendicular to the normal.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="gears" data-step-preset="module-21" data-sync-group="gears-main">
      <span class="casefile-label">Module 21</span>
      <h2>We can look at this same situation from</h2>
      <p>We can look at this same situation from a point of view of the single disc, by unwinding a string with a marker from its surface: The shape we’ve created is called an involute .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="gears" data-step-preset="module-22" data-sync-group="gears-main">
      <span class="casefile-label">Module 22</span>
      <h2>The magic marker at the end of the</h2>
      <p>The magic marker at the end of the string passes through the pitch circle , which corresponds to the idealized friction disc, only to end at the addendum circle which defines th...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="gears" data-step-preset="module-23" data-sync-group="gears-main">
      <span class="casefile-label">Module 23</span>
      <h2>The green line shows the pitch circle, the red line</h2>
      <p>In the simulation below the green line shows the pitch circle, the red line shows the base circle of the involute, and the slider controls the radius of the gear: Two matching i...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Gears article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Mechanical Watch]]
- [[Bicycle]]
- [[Internal Combustion Engine]]
