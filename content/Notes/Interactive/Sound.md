---
title: Sound
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - waves
draft: false
description: >-
  Interactive damped-wave sandbox for frequency, amplitude, and envelope decay
  behavior.
created: "2022-10-18"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Sound
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Sound

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/sound/" target="_blank" rel="noopener noreferrer">Sound by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.</p>

<div class="interactive-article" data-interactive-article="sound">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="sound-main" data-sim-scene="sound">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Sound wave simulation"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="sound-frequency">frequency</label>
      <input id="sound-frequency" data-control="frequency" type="range" min="0.4" max="8" step="0.05" value="2.4" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-amplitude">amplitude</label>
      <input id="sound-amplitude" data-control="amplitude" type="range" min="0.1" max="1" step="0.01" value="0.62" />
    </div>
    <div class="interactive-sim-control">
      <label for="sound-damping">damping</label>
      <input id="sound-damping" data-control="damping" type="range" min="0" max="5" step="0.05" value="1.1" />
    </div>
    <button data-control="reset" type="button">reset wave</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="sound">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="sound" data-step-preset="module-01" data-sync-group="sound-main">
      <span class="casefile-label">Module 01</span>
      <h2>Sound</h2>
      <p>Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="sound" data-step-preset="module-02" data-sync-group="sound-main">
      <span class="casefile-label">Module 02</span>
      <h2>Air</h2>
      <p>Explains Air within Sound using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="sound" data-step-preset="module-03" data-sync-group="sound-main">
      <span class="casefile-label">Module 03</span>
      <h2>Making Sounds</h2>
      <p>Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="sound" data-step-preset="module-04" data-sync-group="sound-main">
      <span class="casefile-label">Module 04</span>
      <h2>Pure Tones</h2>
      <p>Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="sound" data-step-preset="module-05" data-sync-group="sound-main">
      <span class="casefile-label">Module 05</span>
      <h2>Masses and Springs</h2>
      <p>Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="sound" data-step-preset="module-06" data-sync-group="sound-main">
      <span class="casefile-label">Module 06</span>
      <h2>Pressure Waves</h2>
      <p>In the demonstration below, you can drag the slider to change the length of the box, the plot in the bottom tracks the number of collisions per area of the box in a unit of time...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="sound" data-step-preset="module-07" data-sync-group="sound-main">
      <span class="casefile-label">Module 07</span>
      <h2>Further Reading</h2>
      <p>Narrative/reference section in Sound that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="sound" data-step-preset="module-08" data-sync-group="sound-main">
      <span class="casefile-label">Module 08</span>
      <h2>Final Words</h2>
      <p>The higher the frequency the higher the perceived pitch: With these more complicated triangular shapes in place it may be a bit harder to understand how all these waveforms add ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="sound" data-step-preset="module-09" data-sync-group="sound-main">
      <span class="casefile-label">Module 09</span>
      <h2>Either click its keys with your mouse or use W</h2>
      <p>You can either click its keys with your mouse or use W E R keys on your computer keyboard, but before you do so make sure your system volume is at a reasonable level: You can pr...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap, keyboard. <strong>Response:</strong> click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="sound" data-step-preset="module-10" data-sync-group="sound-main">
      <span class="casefile-label">Module 10</span>
      <h2>Drag the cube around to change the viewing angle and</h2>
      <p>You can drag the cube around to change the viewing angle and you can also control the speed of the flow of time with the slider: I need to note that this visualization simplifie...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="sound" data-step-preset="module-11" data-sync-group="sound-main">
      <span class="casefile-label">Module 11</span>
      <h2>With all the commotion in the previous simulation</h2>
      <p>With all the commotion in the previous simulation it may have been hard to see that the air particles collide with each other.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="sound" data-step-preset="module-12" data-sync-group="sound-main">
      <span class="casefile-label">Module 12</span>
      <h2>Control the speed of time with the slider: Naturally, those</h2>
      <p>To make these events easier to see you can control the speed of time with the slider: Naturally, those particles can also collide with other things in the environment.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="sound" data-step-preset="module-13" data-sync-group="sound-main">
      <span class="casefile-label">Module 13</span>
      <h2>I put up walls around that parcel of air</h2>
      <p>In the simulation below I put up walls around that parcel of air.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="sound" data-step-preset="module-14" data-sync-group="sound-main">
      <span class="casefile-label">Module 14</span>
      <h2>Remember that we’re observing a significantly slowed down</h2>
      <p>Remember that we’re observing a significantly slowed down simulation.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="sound" data-step-preset="module-15" data-sync-group="sound-main">
      <span class="casefile-label">Module 15</span>
      <h2>Do this with a slider below: The small cube of</h2>
      <p>All the collisions between particles also have other consequences, but to look at them I need to adjust the scale at which we’ll be looking at - you can do this with a slider be...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="sound" data-step-preset="module-16" data-sync-group="sound-main">
      <span class="casefile-label">Module 16</span>
      <h2>I enlarged that particle to make it visible, you can</h2>
      <p>In the demonstration below, I enlarged that particle to make it visible, you can also control the flow of time with the slider: Due to collisions with other molecules, it may ta...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes; particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="sound" data-step-preset="module-17" data-sync-group="sound-main">
      <span class="casefile-label">Module 17</span>
      <h2>Although these boundaries are imaginary, they let us</h2>
      <p>Although these boundaries are imaginary, they let us see what happens to different sections of air as you move the plate around with the slider: Notice that the individual parce...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="sound" data-step-preset="module-18" data-sync-group="sound-main">
      <span class="casefile-label">Module 18</span>
      <h2>Notice that each of the three keys moves</h2>
      <p>Notice that each of the three keys moves the plate by a different amount, with red marker showing the total offset: Despite its simplicity, this device lets us observe a few thi...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> particle/marker traces update as flow state changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="sound" data-step-preset="module-19" data-sync-group="sound-main">
      <span class="casefile-label">Module 19</span>
      <h2>Three pops of different loudness is not much</h2>
      <p>Three pops of different loudness is not much to create music with as this only lets us play some simple beats.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="sound" data-step-preset="module-20" data-sync-group="sound-main">
      <span class="casefile-label">Module 20</span>
      <h2>You can drag the first slider to change how many</h2>
      <p>In the demonstration below, you can drag the first slider to change how many times per second the plate should jump forwards and backwards.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="sound" data-step-preset="module-21" data-sync-group="sound-main">
      <span class="casefile-label">Module 21</span>
      <h2>Control how far the plate moves with each jump using</h2>
      <p>You can also control how far the plate moves with each jump using the second slider: To describe the frequency of vibration, I’m using the unit of hertz , often abbreviated as H...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="sound" data-step-preset="module-22" data-sync-group="sound-main">
      <span class="casefile-label">Module 22</span>
      <h2>I’m also drawing three plots corresponding to each</h2>
      <p>I’m also drawing three plots corresponding to each key , and an additional plot showing the cumulative effect of the individual motions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> keyboard. <strong>Response:</strong> keyboard shortcuts provide alternate input path for interaction; plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="sound" data-step-preset="module-23" data-sync-group="sound-main">
      <span class="casefile-label">Module 23</span>
      <h2>The slider tracks the process of the addition</h2>
      <p>The slider tracks the process of the addition of four different triangular shapes of different amplitude : Notice that each waveform expresses some shift from the current position.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Sound article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
