---
title: Curves and Surfaces
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - geometry
draft: false
description: >-
  Interactive curve-field playground for control-point edits, normals, and twist
  behavior.
created: "2021-11-02"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Curves-and-Surfaces
cssclasses:
  - external-canvas-note
  - note-lab
  - story-lab
---

# Curves and Surfaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/curves-and-surfaces/" target="_blank" rel="noopener noreferrer">Curves and Surfaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.</p>

<div class="interactive-article" data-interactive-article="curves-and-surfaces">
  <div class="interactive-story">
    <div class="interactive-story-rail">
<div class="interactive-sim interactive-story-sim" data-sync-group="curves-and-surfaces-main" data-sim-scene="curves-and-surfaces">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Curves and surfaces sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="curve-tension">normal scale</label>
      <input id="curve-tension" data-control="tension" type="range" min="0.1" max="2" step="0.02" value="1" />
    </div>
    <div class="interactive-sim-control">
      <label for="curve-twist">field twist</label>
      <input id="curve-twist" data-control="twist" type="range" min="-1" max="1" step="0.01" value="0" />
    </div>
    <button data-control="reset" type="button">reset control points</button>
  </div>
</div>
      <div class="interactive-step-caption" data-step-caption>
        <span class="casefile-label">Story sync</span>
        <p>The visual state follows the active step so the note reads like an explorable system rather than a detached summary.</p>
      </div>
      <div class="interactive-preset-shelf" data-preset-shelf="curves-and-surfaces">
        <button type="button" data-preset-id="baseline">baseline</button>
        <button type="button" data-preset-id="explore">explore</button>
        <button type="button" data-preset-id="stress">stress</button>
        <button type="button" data-preset-id="contrast">contrast</button>
      </div>
    </div>
    <div class="interactive-story-steps">
    <section class="story-step" data-story-step="module-01" data-step-scene="curves-and-surfaces" data-step-preset="module-01" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 01</span>
      <h2>Curves and Surfaces</h2>
      <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-02" data-step-scene="curves-and-surfaces" data-step-preset="module-02" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 02</span>
      <h2>Defining the Shape</h2>
      <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-03" data-step-scene="curves-and-surfaces" data-step-preset="module-03" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 03</span>
      <h2>Linear Segment</h2>
      <p>Linear Segment In the demonstration below you can drag the control points A and B around to change their position.</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-04" data-step-scene="curves-and-surfaces" data-step-preset="module-04" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 04</span>
      <h2>A Step Further</h2>
      <p>The slider controls the progress of our drawing - the more advanced the slider is the further into drawing we are.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-05" data-step-scene="curves-and-surfaces" data-step-preset="module-05" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 05</span>
      <h2>Bezier Patches</h2>
      <p>When you move the selected 6 th point, the section of the curve near the 2 nd control point changes as well: When we look at the plot of the weight that each point has as we pro...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> plots and numeric readouts recalculate with current parameters</p>
    </section>
    <section class="story-step" data-story-step="module-06" data-step-scene="curves-and-surfaces" data-step-preset="module-06" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 06</span>
      <h2>Beyond Cubic</h2>
      <p>Explains Beyond Cubic within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-07" data-step-scene="curves-and-surfaces" data-step-preset="module-07" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 07</span>
      <h2>Splines</h2>
      <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-08" data-step-scene="curves-and-surfaces" data-step-preset="module-08" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 08</span>
      <h2>Curved Mirror on The Wall</h2>
      <p>By dragging the slider you can bend that surface into an arc of a circle, the black curve below shows a cross section of the mirror’s shape: Notice that as the mirror pulls away...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...</p>
    </section>
    <section class="story-step" data-story-step="module-09" data-step-scene="curves-and-surfaces" data-step-preset="module-09" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 09</span>
      <h2>Building the Basis</h2>
      <p>Explains Building the Basis within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-10" data-step-scene="curves-and-surfaces" data-step-preset="module-10" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 10</span>
      <h2>Bâspline Extravaganza</h2>
      <p>Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-11" data-step-scene="curves-and-surfaces" data-step-preset="module-11" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 11</span>
      <h2>Cutting Corners</h2>
      <p>Explains Cutting Corners within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag, click/tap. <strong>Response:</strong> moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...</p>
    </section>
    <section class="story-step" data-story-step="module-12" data-step-scene="curves-and-surfaces" data-step-preset="module-12" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 12</span>
      <h2>Subdivision Surfaces</h2>
      <p>Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-13" data-step-scene="curves-and-surfaces" data-step-preset="module-13" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 13</span>
      <h2>I built a system that lets you change the shape</h2>
      <p>In the demonstration below I built a system that lets you change the shape of a curve by controlling its spiralâness and size : While fun to play with, this system is quite im...</p>
      <p class="story-step-meta"><strong>Controls:</strong> play/pause. <strong>Response:</strong> time progression can be paused/resumed for frame-by-frame inspection</p>
    </section>
    <section class="story-step" data-story-step="module-14" data-step-scene="curves-and-surfaces" data-step-preset="module-14" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 14</span>
      <h2>You can drag each control point shown as to change</h2>
      <p>In the demonstration below you can drag each control point shown as to change the curve’s form: Control points are often visualized with connecting lines that join them to their...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-15" data-step-scene="curves-and-surfaces" data-step-preset="module-15" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 15</span>
      <h2>You can tap click a control point to see how</h2>
      <p>In the demonstration below you can tap click a control point to see how it affects the local shape - the redder the section of the curve the more influenced it is by that contro...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-16" data-step-scene="curves-and-surfaces" data-step-preset="module-16" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 16</span>
      <h2>The slider controls a virtual red pen that</h2>
      <p>The slider controls a virtual red pen that is used to draw a segment between those two points: While this demo is the world’s most primitive drawing application, there are some ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-17" data-step-scene="curves-and-surfaces" data-step-preset="module-17" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 17</span>
      <h2>Tap click the control points to change which one is</h2>
      <p>You can tap click the control points to change which one is selected: For a linear segment like that, weighting function is quite straightforward.</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-18" data-step-scene="curves-and-surfaces" data-step-preset="module-18" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 18</span>
      <h2>As we progress through the curve using the</h2>
      <p>As we progress through the curve using the slider we decrease the weight of the point A and increase the weight of the point B : This hopefully makes intuitive sense.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-19" data-step-scene="curves-and-surfaces" data-step-preset="module-19" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 19</span>
      <h2>The slider controls a virtual pen that paints</h2>
      <p>The slider controls a virtual pen that paints a linear segment : By dragging that point through space we’ve created a simple linear segment placed in three dimensions.</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-20" data-step-scene="curves-and-surfaces" data-step-preset="module-20" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 20</span>
      <h2>Let’s not forget that the segment we’re dragging</h2>
      <p>Let’s not forget that the segment we’re dragging is itself made by dragging a point between the segment’s endpoints, so the entire surface consists of points made from all possi...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-21" data-step-scene="curves-and-surfaces" data-step-preset="module-21" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 21</span>
      <h2>As a result, we can create the very</h2>
      <p>As a result, we can create the very same surface by choosing to drag either the yellow or the blue segment through space - they both end up tracing the same surface: While we’re...</p>
      <p class="story-step-meta"><strong>Controls:</strong> drag. <strong>Response:</strong> dragging repositions objects/camera and recomputes geometry instantly</p>
    </section>
    <section class="story-step" data-story-step="module-22" data-step-scene="curves-and-surfaces" data-step-preset="module-22" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 22</span>
      <h2>Tap click a control point to select it: There are</h2>
      <p>You can tap click a control point to select it: There are a few interesting observations to be made here: When the progress is equal to 0 the weight function of control point A ...</p>
      <p class="story-step-meta"><strong>Controls:</strong> click/tap. <strong>Response:</strong> click actions trigger state transitions or object selection</p>
    </section>
    <section class="story-step" data-story-step="module-23" data-step-scene="curves-and-surfaces" data-step-preset="module-23" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 23</span>
      <h2>We can visualize how uniform steps of progress</h2>
      <p>We can visualize how uniform steps of progress map to the curve points: For some configurations when the slider is halfway along the progress, the curve is definitely not halfwa...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range. <strong>Response:</strong> parameter values update continuously while slider position changes</p>
    </section>
    <section class="story-step" data-story-step="module-24" data-step-scene="curves-and-surfaces" data-step-preset="module-24" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 24</span>
      <h2>That plane also has a perpendicular direction which</h2>
      <p>That plane also has a perpendicular direction which we call a normal direction of the surface at that point - I’ve marked that direction with a red arrow : For two surfaces to b...</p>
      <p class="story-step-meta"><strong>Controls:</strong> implicit controls. <strong>Response:</strong> vector arrows refresh to reflect direction/magnitude changes</p>
    </section>
    <section class="story-step" data-story-step="module-25" data-step-scene="curves-and-surfaces" data-step-preset="module-25" data-sync-group="curves-and-surfaces-main">
      <span class="casefile-label">Module 25</span>
      <h2>Witness how quickly the local direction of the curve, shown</h2>
      <p>By dragging the slider you can witness how quickly the local direction of the curve, shown as a black arrow , changes in the areas of large curvature: A straight line has no cur...</p>
      <p class="story-step-meta"><strong>Controls:</strong> slider/range, drag. <strong>Response:</strong> parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...</p>
    </section>
    </div>
  </div>
</div>

## What to notice

<div class="note-observation-grid">
  <div class="observation-card">
    <h3>System behavior</h3>
    <p>Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.</p>
  </div>
  <div class="observation-card">
    <h3>Control surface</h3>
    <p>The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately.</p>
  </div>
  <div class="observation-card">
    <h3>Reading cue</h3>
    <p>The Curves and Surfaces article works because the explanation stays attached to visible state changes instead of abstract narration.</p>
  </div>
</div>

## Limits

- This note keeps Quartz-native prose and structure rather than cloning the source page byte for byte.
- Repeated source variants are collapsed into presets and step-driven states where the behavior is materially the same.
- The interactive layer is tuned for conceptual fidelity and readable browser performance, not a literal runtime port.

## Related notes

- [[Visual Notes]]
- [[Interactive]]
