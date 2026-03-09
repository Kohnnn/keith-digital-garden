---
title: Airfoil
tags:
  - portfolio
  - blog
  - external
  - ciechanow
  - interactive
  - physics
draft: false
description: >-
  Deep fluid-dynamics explainer focused on why wings generate lift, combining
  airflow, pressure, viscosity, and boundary-layer scenes that can be
  manipulated in real time.
created: "2024-02-27"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Airfoil
cssclasses:
  - external-canvas-note
  - note-lab
  - module-lab
---

# Airfoil

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/airfoil/" target="_blank" rel="noopener noreferrer">Airfoil by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The article teaches lift by refusing shortcuts. Instead of starting with a slogan, it introduces flow fields, local velocities, pressure, viscosity, and boundary layers one visual language at a time until the wing stops looking mysterious.</p>

<div class="interactive-article interactive-narrative" data-interactive-article="airfoil">

## Establishing The Flow

The first scenes build intuition for motion in a fluid before the wing takes center stage. The important move is that flow is not treated as a single arrow; it is a field, and every later claim about lift depends on looking at many local motions at once.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-01" data-sim-module="airfoil:module-01"></div>
    <figcaption>The opening scene defines the shared frame: wing shape, incoming flow, and the idea that one parameter change can reorganize the whole field.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-02" data-sim-module="airfoil:module-02"></div>
    <figcaption>Streamlines make the field readable before the article asks you to interpret forces or pressure.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-03" data-sim-module="airfoil:module-03"></div>
    <figcaption>Velocity arrows show that “faster on top” is a local statement, not a slogan about the whole wing.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-04" data-sim-module="airfoil:module-04"></div>
    <figcaption>Relative velocity matters because the wing only ever sees the fluid passing by from its own local perspective.</figcaption>
  </figure>
</div>

## Pressure Is A Field, Too

Once the velocity picture is stable, the article translates it into pressure. This is where the visual logic pays off: you are not asked to memorize Bernoulli in the abstract; you watch pressure respond where the local flow bends, accelerates, or detaches.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-05" data-sim-module="airfoil:module-05"></div>
    <figcaption>Pressure becomes visible as a distribution over the surface rather than as one global “top vs bottom” number.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-06" data-sim-module="airfoil:module-06"></div>
    <figcaption>The pressure map explains why lift and drag come from integrated surface effects, not from a single magic point.</figcaption>
  </figure>
</div>

## Viscosity And Boundary Layers

The middle of the article adds the piece that idealized flow leaves out: real fluid sticks to the surface, slows down near it, and can separate from it. These modules are where the explainer becomes most valuable, because they connect the clean textbook picture to the messy behavior of actual air.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-07" data-sim-module="airfoil:module-07"></div>
    <figcaption>The wing-only flow scene resets the eye before viscosity complicates the picture.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-08" data-sim-module="airfoil:module-08"></div>
    <figcaption>Viscosity is what lets the fluid feel the surface and build a no-slip layer around it.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-09" data-sim-module="airfoil:module-09"></div>
    <figcaption>The boundary layer scene makes it obvious how a thin strip of slowed fluid controls attachment and separation.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-10" data-sim-module="airfoil:module-10"></div>
    <figcaption>Changing shapes shows that lift is geometric: the same fluid behaves differently when the surface curvature changes.</figcaption>
  </figure>
</div>

<div class="interactive-narrative-callout">
  <p>The source article’s “Further Reading and Watching” and closing remarks stay prose-only here. They remain important context, but they are not live modules in the rebuilt note.</p>
</div>

## Particles, Paths, And Time

The later sequence slows the simulation down and changes visual encodings so you can stop treating the flow as a blur. Marker particles, trails, and pauses all answer slightly different questions: where did the fluid go, how fast did it go there, and what changed while it was near the wing?

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-13" data-sim-module="airfoil:module-13"></div>
    <figcaption>Time control is the simplest way to stop “fast fluid” from turning into an empty phrase.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-14" data-sim-module="airfoil:module-14"></div>
    <figcaption>Discrete markers approximate the field without pretending that the fluid is made of a few giant blobs.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-15" data-sim-module="airfoil:module-15"></div>
    <figcaption>Marker placement is flexible, which is why visualization choices can clarify or obscure the same underlying motion.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-16" data-sim-module="airfoil:module-16"></div>
    <figcaption>Each marker is only a probe, but many probes together reveal the structure of the full flow.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-17" data-sim-module="airfoil:module-17"></div>
    <figcaption>Following one path is useful only because it stays embedded inside the larger field.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-18" data-sim-module="airfoil:module-18"></div>
    <figcaption>Slow motion is what reveals where the flow accelerates, bunches up, or peels away.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-19" data-sim-module="airfoil:module-19"></div>
    <figcaption>Trails turn local velocity into history: you can read where the fluid has been, not just where it is.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-20" data-sim-module="airfoil:module-20"></div>
    <figcaption>Pausing the motion is the clearest way to separate geometry from movement and inspect the underlying pressure story.</figcaption>
  </figure>
</div>

## Reading The Field

The closing modules return to probes and derived views. By this point the article can switch among arrows, colors, particles, and drag handles without losing the reader, because the earlier sections have already built a shared physical meaning for each encoding.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-21" data-sim-module="airfoil:module-21"></div>
    <figcaption>An attached arrow is a compact reminder that every measurement in the field has both magnitude and direction.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-22" data-sim-module="airfoil:module-22"></div>
    <figcaption>The color scale scene makes the pressure palette explicit instead of leaving it as decoration.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-23" data-sim-module="airfoil:module-23"></div>
    <figcaption>A second slider changes what is being encoded, not just how fast the flow advances.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-24" data-sim-module="airfoil:module-24"></div>
    <figcaption>Reusing the original time control reinforces that different views are still sampling the same moving field.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-25" data-sim-module="airfoil:module-25"></div>
    <figcaption>The draggable particle volume makes it easier to inspect the flow from a chosen local vantage point.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="airfoil:module-26" data-sim-module="airfoil:module-26"></div>
    <figcaption>The final time-controlled field closes the article by putting the whole flow vocabulary back together.</figcaption>
  </figure>
</div>

</div>

## Related notes

- [[Notes/Interactive/Lights-and-Shadows|Lights and Shadows]]
- [[Notes/Interactive/Sound|Sound]]
- [[Visual Notes]]
