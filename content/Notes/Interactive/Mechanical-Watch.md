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
  Interactive watch-train sandbox for gear ratio effects and long-run phase
  behavior.
created: "2022-05-04"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Mechanical-Watch
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Mechanical Watch

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/mechanical-watch/" target="_blank" rel="noopener noreferrer">Mechanical Watch by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Comprehensive mechanical watch teardown: mainspring power flow, escapement timing, gear trains, keyless works, and automatic winding.</p>

<div class="interactive-article" data-interactive-article="mechanical-watch">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="mechanical-watch-main" data-sim-scene="mechanical-watch">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Mechanical watch gear train"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="watch-speed">train speed</label>
      <input id="watch-speed" data-control="speed" type="range" min="0.2" max="4" step="0.05" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="watch-ratio">gear ratio</label>
      <input id="watch-ratio" data-control="ratio" type="range" min="0.4" max="1.8" step="0.05" value="0.95" />
    </div>
    <button data-control="reset" type="button">reset movement</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="mechanical-watch">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="mechanical-watch" data-step-preset="module-01" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 01</span>
      <h2>Mechanical Watch</h2>
      <p>You can drag the device around to change your viewing angle, and you can use the slider to peek at what’s going on inside: What you see here is known as the movement - the inner...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="mechanical-watch" data-step-preset="module-02" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 02</span>
      <h2>Power</h2>
      <p>By default all animations in this article are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="mechanical-watch" data-step-preset="module-03" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 03</span>
      <h2>Gears</h2>
      <p>In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="mechanical-watch" data-step-preset="module-04" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 04</span>
      <h2>Escapement</h2>
      <p>Simulates escape wheel and pallet interaction to show lock/unlock cycles and discrete energy transfer into the oscillator.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="mechanical-watch" data-step-preset="module-05" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 05</span>
      <h2>Balance</h2>
      <p>Visualizes balance wheel and hairspring oscillation, highlighting period stability and impulse timing.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="mechanical-watch" data-step-preset="module-06" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 06</span>
      <h2>Mainplate</h2>
      <p>Explodes the structural base assembly to show where bridges, pivots, and wheel arbors are constrained.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="mechanical-watch" data-step-preset="module-07" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 07</span>
      <h2>Click</h2>
      <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="mechanical-watch" data-step-preset="module-08" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 08</span>
      <h2>Motion Works</h2>
      <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="mechanical-watch" data-step-preset="module-09" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 09</span>
      <h2>Date</h2>
      <p>Shows the date-complication train: date wheel indexing, jumper locking, and crown-driven increment behavior (single-step/day rollover) with visible coupling to neighboring gears.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="mechanical-watch" data-step-preset="module-10" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 10</span>
      <h2>Keyless Works</h2>
      <p>This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="mechanical-watch" data-step-preset="module-11" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 11</span>
      <h2>Automatic Winding</h2>
      <p>The click also prevents the mainspring from unwinding on its own - that’s why you can’t drag back the slider without restarting the entire simulation: The second hand on the oth...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transition...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="mechanical-watch" data-step-preset="module-12" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 12</span>
      <h2>The Size of it All</h2>
      <p>In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="mechanical-watch" data-step-preset="module-13" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 13</span>
      <h2>Wind it midair, but as soon as you let go,</h2>
      <p>By dragging the slider you can try to wind it midair, but as soon as you let go, it will snap back to its original shape: As you can see, this spring is quite strong and it want...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="mechanical-watch" data-step-preset="module-14" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 14</span>
      <h2>We’re holding the barrel tight, and you can turn the</h2>
      <p>In the demonstration below, we’re holding the barrel tight, and you can turn the arbor by dragging the slider: Notice that as soon as you let go of the arbor by releasing the sl...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="mechanical-watch" data-step-preset="module-15" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 15</span>
      <h2>See how this “watch” behaves after you wind the mainspring</h2>
      <p>You can see how this “watch” behaves after you wind the mainspring with the slider and let it go: We clearly have some work to do - the hand spins way too fast and it only does ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="mechanical-watch" data-step-preset="module-16" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 16</span>
      <h2>Control the speed of rotation of this gear train using</h2>
      <p>You can control the speed of rotation of this gear train using the slider: The barrel acts as the first wheel , it drives the second wheel , which drives the third wheel , which...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="mechanical-watch" data-step-preset="module-17" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 17</span>
      <h2>Let’s see why these properties are important by</h2>
      <p>Let’s see why these properties are important by observing how these two components interact with each other: The escape wheel wants to rotate as indicated by the red arrow .</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="mechanical-watch" data-step-preset="module-18" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 18</span>
      <h2>You can slow things down with the slider</h2>
      <p>In the demonstration below, you can slow things down with the slider: Let’s look at this interaction up close, as it deserves a closer attention.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="mechanical-watch" data-step-preset="module-19" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 19</span>
      <h2>Click To continue developing our assembly, we firstly</h2>
      <p>Click To continue developing our assembly, we firstly need to put a solid foundation in the form of the barrel bridge - it holds the barrel in place and provides structure for o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="mechanical-watch" data-step-preset="module-20" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 20</span>
      <h2>Firstly, we put the little click in the</h2>
      <p>Firstly, we put the little click in the opening on top of the barrel bridge : Within its limited range the click can rotate back and forth on its little axis: The second piece o...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, click/tap. <strong>Response:</strong> parameter values update continuously while slider position changes; click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="mechanical-watch" data-step-preset="module-21" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 21</span>
      <h2>When we squeeze it, it wants to pop</h2>
      <p>When we squeeze it, it wants to pop back: We compress that click spring a little and we also put it into the barrel bridge : Notice that when we try to rotate the click , the cl...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="mechanical-watch" data-step-preset="module-22" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 22</span>
      <h2>The gaps in the crown wheel allow the</h2>
      <p>The gaps in the crown wheel allow the little post on the click to fall between the crown wheel’s teeth.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="mechanical-watch" data-step-preset="module-23" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 23</span>
      <h2>Notice how the teeth of the crown wheel</h2>
      <p>Notice how the teeth of the crown wheel end up pushing the click away, but it snaps back as soon as there is some space: When the click snaps back and hits the crown wheel , it ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="mechanical-watch" data-step-preset="module-24" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 24</span>
      <h2>Notice how the crown wheel’s teeth jam with the click</h2>
      <p>In the simulation below, notice how the crown wheel’s teeth jam with the click , preventing the crown wheel’s rotation: This simple mechanism allows us to wind the mainspring by...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="mechanical-watch" data-step-preset="module-25" data-sync-group="mechanical-watch-main">
      <span class="casefile-label">Module 25</span>
      <h2>The slider lets you control the speed of</h2>
      <p>The slider lets you control the speed of flowing time so that you don’t have to wait too patiently to see hands change their position: The hour hand itself needs to rotate 12 ti...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    </div>
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
    <p>The Mechanical Watch article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Gears]]
- [[Internal Combustion Engine]]
- [[Bicycle]]
