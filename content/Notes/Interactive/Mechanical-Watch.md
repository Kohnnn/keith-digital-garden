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
created: "2022-05-04"
updated: "2026-03-08"
aliases:
  - Portfolio/Stuffs/Mechanical-Watch
cssclasses:
  - external-canvas-note
  - note-lab
  - module-lab
---

# Mechanical Watch

<div class="source-card">
  <span class="casefile-label">Original article</span>
  <p><a href="https://ciechanow.ski/mechanical-watch/" target="_blank" rel="noopener noreferrer">Mechanical Watch by Bartosz Ciechanowski</a></p>
</div>

<p class="note-lede">This rebuild follows the source article as a tour through stored energy, gear reduction, the escapement, and the parts that let a human hand wind, set, and read the watch. The important idea is that every visible complication is downstream of a very small amount of controlled mechanical energy.</p>

<div class="interactive-article interactive-narrative" data-interactive-article="mechanical-watch">

## Movement First

The article opens by showing the whole movement before breaking it apart. The first module establishes orientation, and the second one is the article-level motion control: once the watch starts animating, the rest of the piece is about noticing where energy speeds up, slows down, locks, and gets released.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-01" data-sim-module="mechanical-watch:module-01"></div>
    <figcaption>The opening view shows the movement as one connected machine rather than as isolated parts.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-02" data-sim-module="mechanical-watch:module-02"></div>
    <figcaption>This pause control is the reference switch for the rest of the watch sequence.</figcaption>
  </figure>
</div>

## Ratios And Timing

The next step is to slow down the two jobs the movement has to do at once: carry torque across gear reductions, then meter that torque into discrete impulses. The gears change speed and direction; the escapement and balance turn continuous unwinding into a steady beat.

<div class="interactive-embed-grid" data-columns="3">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-03" data-sim-module="mechanical-watch:module-03"></div>
    <figcaption>Gear teeth trade torque for speed, which is why watch trains can be tiny but still readable.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-04" data-sim-module="mechanical-watch:module-04"></div>
    <figcaption>The escapement alternates between locking and impulse, so motion advances in steps instead of in a blur.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-05" data-sim-module="mechanical-watch:module-05"></div>
    <figcaption>The balance wheel is the watch’s time base; everything else is organized around its period.</figcaption>
  </figure>
</div>

## Assembly And Interfaces

Once the timekeeping loop is visible, the article shifts to the structures that hold it together and the mechanisms a wearer actually interacts with. Mainplate, click, motion works, date train, keyless works, and automatic winding all answer the same question: how do you add or redirect energy without disturbing the timing train more than necessary?

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-06" data-sim-module="mechanical-watch:module-06"></div>
    <figcaption>The mainplate is the datum surface that keeps pivots, bridges, and train geometry from drifting apart.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-07" data-sim-module="mechanical-watch:module-07"></div>
    <figcaption>The click is a one-way gate: it lets you wind the barrel without immediately giving the motion back.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-08" data-sim-module="mechanical-watch:module-08"></div>
    <figcaption>Motion works convert the fast hidden train into the slower ratios the hands need.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-09" data-sim-module="mechanical-watch:module-09"></div>
    <figcaption>The date mechanism shows how a small daily advance can be layered on top of the regular train.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-10" data-sim-module="mechanical-watch:module-10"></div>
    <figcaption>Keyless works reroute the crown so the same interface can wind or set without tearing the gear train apart.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-11" data-sim-module="mechanical-watch:module-11"></div>
    <figcaption>Automatic winding adds a second energy path that feeds the barrel while the watch is being worn.</figcaption>
  </figure>
</div>

## Barrel To Train

The source article then slows the barrel and mainspring down far enough to make their geometry teachable. These modules explain why the spring is coiled, how that coil stores work, and how the barrel and center wheel tame wildly different rotation rates into something the train can use.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-12" data-sim-module="mechanical-watch:module-12"></div>
    <figcaption>Miniaturization matters because every stage has to fit under the dial and still leave room for pivots and jewels.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-13" data-sim-module="mechanical-watch:module-13"></div>
    <figcaption>The free spring wants to unwind immediately, which is why the barrel has to constrain it.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-14" data-sim-module="mechanical-watch:module-14"></div>
    <figcaption>Holding one side fixed makes the torque path legible: energy leaves the barrel only when the train gives it somewhere to go.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-15" data-sim-module="mechanical-watch:module-15"></div>
    <figcaption>The wound spring does not release uniformly, so the escapement’s metering role becomes even more important.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-16" data-sim-module="mechanical-watch:module-16"></div>
    <figcaption>The gear train is where the watch spends most of its design effort: every pair changes both pace and leverage.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-17" data-sim-module="mechanical-watch:module-17"></div>
    <figcaption>Tooth count, contact, and backlash are not cosmetic; they determine whether the train feels precise or sloppy.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-18" data-sim-module="mechanical-watch:module-18"></div>
    <figcaption>Slowing the train down reveals the places where seemingly smooth motion is really a chain of constrained contacts.</figcaption>
  </figure>
</div>

## Crown Wheel And Click

The closing sequence rebuilds the click and crown-wheel assembly step by step. This is the part of the watch most people feel directly through the crown, so the article ends by tying tactile feedback back to tooth shape, spring preload, and one-way engagement.

<div class="interactive-embed-grid" data-columns="2">
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-19" data-sim-module="mechanical-watch:module-19"></div>
    <figcaption>The assembly starts by placing the click where it can resist reverse motion without blocking forward winding.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-20" data-sim-module="mechanical-watch:module-20"></div>
    <figcaption>Adding the spring explains why the click snaps into teeth instead of floating indecisively between them.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-21" data-sim-module="mechanical-watch:module-21"></div>
    <figcaption>Compression stores the force that later produces the familiar crown-wheel snap.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-22" data-sim-module="mechanical-watch:module-22"></div>
    <figcaption>The crown-wheel gaps are shaped so one direction guides the click aside while the other direction jams against it.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-23" data-sim-module="mechanical-watch:module-23"></div>
    <figcaption>Watching the tooth faces touch makes it clear why winding feels ratcheted instead of slippery.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-24" data-sim-module="mechanical-watch:module-24"></div>
    <figcaption>Reverse engagement is the actual safety feature: it keeps stored energy from escaping back through the crown.</figcaption>
  </figure>
  <figure class="interactive-embed">
    <div class="interactive-sim interactive-sim--compact" data-sim-scene="mechanical-watch:module-25" data-sim-module="mechanical-watch:module-25"></div>
    <figcaption>The final slowed-down view reconnects the click assembly to the rest of the train and closes the energy loop.</figcaption>
  </figure>
</div>

<div class="interactive-narrative-callout">
  <p>The source article is strongest when watched twice: once to follow the names of the parts, and again to follow the energy handoff from spring to train to escapement to display.</p>
</div>

</div>

## Related notes

- [[Notes/Interactive/Gears|Gears]]
- [[Notes/Interactive/Internal-Combustion-Engine|Internal Combustion Engine]]
- [[Visual Notes]]
