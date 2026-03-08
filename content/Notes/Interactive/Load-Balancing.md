---
title: Load Balancing
tags:
  - portfolio
  - blog
  - external
  - interactive
  - systems
  - performance
draft: false
description: >-
  Interactive request-routing lab for algorithm choice, arrival pressure, and
  server skew.
created: "2026-03-08"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Load-Balancing
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Load Balancing

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://samwho.dev/load-balancing/" target="_blank" rel="noopener noreferrer">Load Balancing by Sam Rose</a></p>
</div>

<p class="note-lede">Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.</p>

<div class="interactive-article" data-interactive-article="load-balancing">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sim-scene="load-balancing" data-sync-group="load-balancing-main">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Load balancing queue simulator"></canvas>
  </div>

  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="load-balancing-traffic">traffic rate</label>
      <input id="load-balancing-traffic" data-control="traffic" type="range" min="0.4" max="2.8" step="0.05" value="1.3" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-power">server skew</label>
      <input id="load-balancing-power" data-control="power" type="range" min="0.6" max="2.4" step="0.05" value="1.2" />
    </div>
    <div class="interactive-sim-control">
      <label for="load-balancing-burst">burstiness</label>
      <input id="load-balancing-burst" data-control="burst" type="range" min="0" max="1" step="0.01" value="0.35" />
    </div>
    <button data-control="reset" type="button">reset view</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="load-balancing">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="load-balancing" data-step-preset="module-01" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 01</span>
      <h2>Load Balancing</h2>
      <p>Each simulation varied only by the load balancing algorithm used.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="load-balancing" data-step-preset="module-02" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 02</span>
      <h2>Visualising the problem</h2>
      <p>Explains Visualising the problem within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="load-balancing" data-step-preset="module-03" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 03</span>
      <h2>When round robin doesn't cut it</h2>
      <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="load-balancing" data-step-preset="module-04" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 04</span>
      <h2>Improving on round robin</h2>
      <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="load-balancing" data-step-preset="module-05" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 05</span>
      <h2>Moving away from round robin</h2>
      <p>The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="load-balancing" data-step-preset="module-06" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 06</span>
      <h2>Optimizing for latency</h2>
      <p>Simulates request routing across servers to compare balancing strategies under variable load and service times.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="load-balancing" data-step-preset="module-07" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 07</span>
      <h2>One last algorithm</h2>
      <p>Let's see this in action in a similarly complex simulation, the same parameters we gave the dynamic weighted round robin algorithm above.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="load-balancing" data-step-preset="module-08" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 08</span>
      <h2>Conclusion</h2>
      <p>Narrative/reference section in Load Balancing that summarizes results and links supporting resources.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="load-balancing" data-step-preset="module-09" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 09</span>
      <h2>Playground</h2>
      <p>Explains Playground within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, playback/scrub. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="load-balancing" data-step-preset="module-10" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 10</span>
      <h2>In the following simulation, requests aren't equally expensive</h2>
      <p>In the following simulation, requests aren't equally expensive.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="load-balancing" data-step-preset="module-11" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 11</span>
      <h2>If you watch the above simulation long enough,</h2>
      <p>If you watch the above simulation long enough, you might notice the requests subtly changing colour.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="load-balancing" data-step-preset="module-12" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 12</span>
      <h2>In the next simulation we also vary the</h2>
      <p>In the next simulation we also vary the power of each server , which is represented visually with a darker shade of grey.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="load-balancing" data-step-preset="module-13" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 13</span>
      <h2>In this simulation, we use each server's known</h2>
      <p>In this simulation, we use each server's known power value as its weight, and we give more powerful servers more requests as we loop through them.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="load-balancing" data-step-preset="module-14" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 14</span>
      <h2>The following simulation uses randomised values, so feel</h2>
      <p>The following simulation uses randomised values, so feel free to refresh the page a few times to see it adapt to new variants.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="load-balancing" data-step-preset="module-15" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 15</span>
      <h2>Higher percentiles will always be higher on the</h2>
      <p>Higher percentiles will always be higher on the graph.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="load-balancing" data-step-preset="module-16" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 16</span>
      <h2>The following is a graph of cumulative requests</h2>
      <p>The following is a graph of cumulative requests dropped over time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="load-balancing" data-step-preset="module-17" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 17</span>
      <h2>Below is a simulation using an algorithm called</h2>
      <p>Below is a simulation using an algorithm called "peak exponentially weighted moving average" (or PEWMA).</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="load-balancing" data-step-preset="module-18" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 18</span>
      <h2>I've set specific parameters for this simulation that</h2>
      <p>I've set specific parameters for this simulation that are guaranteed to exhibit an expected behaviour.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="load-balancing" data-step-preset="module-19" data-sync-group="load-balancing-main">
      <span class="casefile-label">Module 19</span>
      <h2>To round this out, I leave you with</h2>
      <p>To round this out, I leave you with a version of the simulation that lets you tweak most of the parameters in real time.</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> visual state recomputes in real time when active parameters or scenario change</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Load Balancing article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Memory Allocation]]
- [[Hysteresis and Slack]]
- [[Random Forest]]
