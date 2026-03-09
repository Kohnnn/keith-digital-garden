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
created: "2019-02-15"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Color-Spaces
cssclasses:
  - external-canvas-note
  - note-lab
  - module-lab
---

# Color Spaces

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/color-spaces/" target="_blank" rel="noopener noreferrer">Color Spaces by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">The article’s core claim is simple and easy to forget: RGB numbers are not colors until a color space tells you what those numbers mean. Everything that follows, from chromaticity diagrams to tone curves, is there to make that sentence visual.</p>

<div class="interactive-article interactive-narrative" data-interactive-article="color-spaces">

## RGB Values Need Context

The first modules compare familiar color pickers against the actual meaning of their sliders. The article deliberately starts with an interface people recognize and then shows why that interface is incomplete unless primaries and transfer curves are specified too.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-01" data-sim-module="color-spaces:module-01"></div>
    <figcaption>The opening graph compares primaries from multiple spaces so the same RGB triplet stops feeling universal.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-02" data-sim-module="color-spaces:module-02"></div>
    <figcaption>Color pickers are useful precisely because they hide the color-space assumptions the article is about to expose.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-03" data-sim-module="color-spaces:module-03"></div>
    <figcaption>Normalized range makes the encoding visible: stored values and displayed intensity are not the same quantity.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-04" data-sim-module="color-spaces:module-04"></div>
    <figcaption>The intensity mismatch scene is where “gamma” stops being folklore and becomes a concrete curve.</figcaption>
  </figure>
</div>

## Primaries, Matching, And Matrices

With the basic distinction in place, the article asks what different primaries actually buy you. These modules move between chromaticity plots and color-matching functions so that matrices feel like geometry, not like arbitrary lookup tables.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-05" data-sim-module="color-spaces:module-05"></div>
    <figcaption>Primary differences change the reachable region of color, not just the names attached to red, green, and blue.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-06" data-sim-module="color-spaces:module-06"></div>
    <figcaption>Matching primaries shows how two spaces can agree on one point and still disagree almost everywhere else.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-07" data-sim-module="color-spaces:module-07"></div>
    <figcaption>Mixing is where a space’s geometry becomes perceptible: the path between colors depends on the chosen basis.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-08" data-sim-module="color-spaces:module-08"></div>
    <figcaption>The first plot-driven module connects matching functions to the matrix viewpoint used later in the article.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-09" data-sim-module="color-spaces:module-09"></div>
    <figcaption>Going there and back again is a useful stress test: conversions are only easy when the chosen basis is well behaved.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-10" data-sim-module="color-spaces:module-10"></div>
    <figcaption>Negative values appear naturally when one basis can represent colors the other basis cannot express with positive coefficients.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-11" data-sim-module="color-spaces:module-11"></div>
    <figcaption>The matrix scene returns the plot to the algebra and makes the conversion step legible as a transformation.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-12" data-sim-module="color-spaces:module-12"></div>
    <figcaption>Breaking the boundaries shows gamut limits as geometry, not as a vague “wide color” marketing claim.</figcaption>
  </figure>
</div>

## Chromaticity And The RGB Cube

The middle-to-late sequence explains why color scientists flatten 3D data into chromaticity diagrams and then put the lost dimension back via brightness or tone response. The cube and the plots are two views of the same structure, not two separate stories.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-13" data-sim-module="color-spaces:module-13"></div>
    <figcaption>Changing the slider here makes gamut extent feel like a measurable region instead of an abstract label.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-14" data-sim-module="color-spaces:module-14"></div>
    <figcaption>The slider-position scene connects a UI control back to an actual point in color space.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-15" data-sim-module="color-spaces:module-15"></div>
    <figcaption>The RGB cube is the spatial version of the article’s central thesis: coordinates only matter because the basis is defined.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-16" data-sim-module="color-spaces:module-16"></div>
    <figcaption>Reading color-matching values from the plot turns spectral data into coordinates that later feed the diagram.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-17" data-sim-module="color-spaces:module-17"></div>
    <figcaption>A second readout reinforces that matching functions are sampled, compared, and then recombined into a different basis.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-18" data-sim-module="color-spaces:module-18"></div>
    <figcaption>The xy chromaticity diagram begins by dropping one dimension and keeping only normalized ratios.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-19" data-sim-module="color-spaces:module-19"></div>
    <figcaption>Flattening the diagram discards z visually, which is why brightness has to be recovered elsewhere.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-20" data-sim-module="color-spaces:module-20"></div>
    <figcaption>Colors inside the plot are not arbitrary decoration; they are a reminder of which chromaticities remain physically meaningful.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-21" data-sim-module="color-spaces:module-21"></div>
    <figcaption>Local variations in the plot show why equal geometric distance does not correspond to equal perceptual difference.</figcaption>
  </figure>
</div>

## Devices, Images, And Tone

The closing modules turn the abstract model back into things people actually see: browser-managed images, draggable gamut edits, and the tone response curve that mediates between stored code values and emitted light.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-22" data-sim-module="color-spaces:module-22"></div>
    <figcaption>The draggable extent scene makes it obvious that gamut is a region with shape, not just a single “wider is better” number.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-23" data-sim-module="color-spaces:module-23"></div>
    <figcaption>Clicking through the image states connects device color management back to everyday browser behavior.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-24" data-sim-module="color-spaces:module-24"></div>
    <figcaption>Dragging the primaries shows how little motion in the diagram can dramatically reshape the reachable gamut.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="color-spaces:module-25" data-sim-module="color-spaces:module-25"></div>
    <figcaption>The tone response curve closes the loop by mapping the stored code value back to emitted intensity.</figcaption>
  </figure>
</div>

</div>

## Related notes

- [[Notes/Interactive/Alpha-Compositing|Alpha Compositing]]
- [[Notes/Interactive/Cameras-and-Lenses|Cameras and Lenses]]
- [[Visual Notes]]
