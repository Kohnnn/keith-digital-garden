---
title: GPS
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - satellites
draft: false
description: >-
  End-to-end GPS explainer including trilateration, clock bias, orbital motion,
  satellite visibility, and signal propagation constraints.
created: "2022-01-18"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/GPS
cssclasses:
  - external-canvas-note
  - note-lab
  - module-lab
---

# GPS

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/gps/" target="_blank" rel="noopener noreferrer">GPS by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The article treats GPS as a chain of geometric and timing problems: how far a signal traveled, when it arrived, which satellites were visible, and how much clock error contaminated the result. The modules below keep those ideas in the same order as the source site so the later orbital scenes still feel grounded in simple ranging.</p>

<div class="interactive-article interactive-narrative" data-interactive-article="gps">

## From Distance To Position

GPS starts as a ranging problem. If signals travel at a known speed, then each received timestamp defines a sphere of possible receiver positions. The first three modules establish that geometry before the article introduces any orbital or relativistic complexity.

<div class="interactive-embed-grid" data-columns="3">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-01" data-sim-module="gps:module-01"></div>
    <figcaption>The opening scene frames GPS as a coupled geometry-and-time system rather than as a black box map dot.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-02" data-sim-module="gps:module-02"></div>
    <figcaption>Trilateration is the first hard constraint: the receiver has to sit where several distance shells agree.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-03" data-sim-module="gps:module-03"></div>
    <figcaption>Time of flight turns signal travel into distance, which is why every later clock correction matters so much.</figcaption>
  </figure>
</div>

## Who Can Hear Whom?

Once the basic geometry is clear, the article asks a more operational question: which satellites can even participate in the solution? Visibility, altitude, and orbital arrangement determine whether the receiver has a good geometric spread or a fragile, biased one.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-04" data-sim-module="gps:module-04"></div>
    <figcaption>“Do you hear me?” turns line of sight into an explicit geometric test instead of an invisible assumption.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-05" data-sim-module="gps:module-05"></div>
    <figcaption>“Do I hear you?” mirrors the same question from the opposite end of the link budget.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-06" data-sim-module="gps:module-06"></div>
    <figcaption>Leveling up adds altitude and satellite count, showing why a stronger constellation improves the solution.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-07" data-sim-module="gps:module-07"></div>
    <figcaption>Higher, faster satellites improve coverage but also make timing discipline more demanding.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-08" data-sim-module="gps:module-08"></div>
    <figcaption>Orbit scenes explain why coverage is a moving configuration problem, not a static set of dots.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-09" data-sim-module="gps:module-09"></div>
    <figcaption>The dedicated GPS orbit module narrows the space of possible constellations to the one the system actually flies.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-10" data-sim-module="gps:module-10"></div>
    <figcaption>Keplerian elements are not abstract math here; they are the knobs that move satellites into or out of useful geometry.</figcaption>
  </figure>
</div>

## Clocks And Propagation

The middle of the article keeps returning to the same warning: GPS is only as good as its timing model. These scenes move from pure propagation delay to relative clock behavior and the way receiver altitude, clock bias, and constellation layout leak directly into position error.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-11" data-sim-module="gps:module-11"></div>
    <figcaption>Time itself becomes the interactive quantity, which is the right abstraction for the rest of the article.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-12" data-sim-module="gps:module-12"></div>
    <figcaption>Signal propagation turns geometry into latency, and latency into inferred distance.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-13" data-sim-module="gps:module-13"></div>
    <figcaption>Rotating the scene is not cosmetic; bad viewpoint hides the same geometric weaknesses that bad satellite placement creates.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-14" data-sim-module="gps:module-14"></div>
    <figcaption>Dragging the landscape keeps the receiver anchored in the environment instead of floating in an abstract diagram.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-15" data-sim-module="gps:module-15"></div>
    <figcaption>Parallel timing examples show how multiple signals can be “simultaneous” in one frame and still arrive with different delays.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-16" data-sim-module="gps:module-16"></div>
    <figcaption>Side-by-side clocks make clock bias visible instead of burying it in an equation.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-17" data-sim-module="gps:module-17"></div>
    <figcaption>Receiver height changes the geometry of the solution, which is why altitude cannot be treated as an afterthought.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-18" data-sim-module="gps:module-18"></div>
    <figcaption>The following simulations ask you to read motion, bias, and geometry together rather than one at a time.</figcaption>
  </figure>
</div>

## Motion, Error, And Control

The final stretch lets the receiver move through the system and then adds the article’s pause controls. This is where GPS stops looking like a clean textbook snapshot and starts behaving like a live estimation problem with state, velocity, and changing measurement quality.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-19" data-sim-module="gps:module-19"></div>
    <figcaption>Dragging the receiver shows that position quality changes with geometry, not just with signal strength.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-20" data-sim-module="gps:module-20"></div>
    <figcaption>A moving receiver leaves behind a timing history, and that history changes how new measurements should be interpreted.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-21" data-sim-module="gps:module-21"></div>
    <figcaption>The repeated drag interaction reinforces that geometry can improve or collapse continuously as the receiver moves.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-22" data-sim-module="gps:module-22"></div>
    <figcaption>Velocity and path shape matter because GPS is estimating a moving state, not just a frozen point.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-23" data-sim-module="gps:module-23"></div>
    <figcaption>The local pause scene is for inspecting a single evolving timeline without freezing the entire article.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-24" data-sim-module="gps:module-24"></div>
    <figcaption>The global pause scene freezes the final constellation sequence so geometry can be inspected frame by frame.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-25" data-sim-module="gps:module-25"></div>
    <figcaption>The red control emphasizes how a single biased parameter can drag the entire solution away from the truth.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="gps:module-26" data-sim-module="gps:module-26"></div>
    <figcaption>The final draggable point turns the last abstract orbital parameter back into something spatial and inspectable.</figcaption>
  </figure>
</div>

</div>

## Related notes

- [[Notes/Interactive/Earth-and-Sun|Earth and Sun]]
- [[Notes/Interactive/Naval-Architecture|Naval Architecture]]
- [[Visual Notes]]
