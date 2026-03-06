---
title: Exploring GPGPU on iOS
tags: [portfolio, blog, external, ciechanow, interactive, ios, compute]
draft: false
description: Interactive data-parallel particle sandbox for compute density, force, and damping tradeoffs.
created: 2014-01-05
updated: 2026-02-24
cssclasses: [external-canvas-note]
---

# Exploring GPGPU on iOS

> [!info] Source
> Original article: [Exploring GPGPU on iOS](https://ciechanow.ski/exploring-gpgpu-on-ios/)
>
> Archive listing: [Ciechanow Archives](https://ciechanow.ski/archives/)

<div class="interactive-sim" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label for="gpgpu-particles">particle count</label>
      <input id="gpgpu-particles" data-control="particles" type="range" min="100" max="4000" step="10" value="1400" />
    </div>
    <div class="interactive-sim-control">
      <label for="gpgpu-force">field strength</label>
      <input id="gpgpu-force" data-control="force" type="range" min="0.1" max="3" step="0.01" value="1.1" />
    </div>
    <div class="interactive-sim-control">
      <label for="gpgpu-damp">velocity damping</label>
      <input id="gpgpu-damp" data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.965" />
    </div>
    <button data-control="reset" type="button">reset kernel state</button>
  </div>
</div>

## Interactive Lab 2: Baseline Comparator

Use a moderate particle workload to benchmark motion coherence and throughput feel.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="2050" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="1.55" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.925" />
    </div>
    <button data-control="reset" type="button">reset lab</button>
  </div>
</div>

## Interactive Lab 3: Low-End Sweep

Lower particle count and forcing to inspect sparse, low-energy update behavior.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="880" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="0.54" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.88" />
    </div>
    <button data-control="reset" type="button">reset lab 3</button>
  </div>
</div>

## Interactive Lab 4: High-End Sweep

Increase particle density and forcing to observe heavy parallel-update pressure.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="3220" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="2.56" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.969" />
    </div>
    <button data-control="reset" type="button">reset lab 4</button>
  </div>
</div>

## Interactive Lab 5: Asymmetric Mix

Combine low count with high force to isolate field response from occupancy effects.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="1270" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="2.27" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.91" />
    </div>
    <button data-control="reset" type="button">reset lab 5</button>
  </div>
</div>

## Interactive Lab 6: Extreme Contrast

Apply near-edge damping/force settings to probe stability limits of the loop.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="300" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="2.86" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.992" />
    </div>
    <button data-control="reset" type="button">reset lab 6</button>
  </div>
</div>

## Interactive Lab 7: Stability Check

Run a sustained mid-high configuration and compare long-run pattern persistence.

<div class="interactive-sim interactive-sim-secondary" data-sim-scene="exploring-gpgpu-on-ios">
  <div class="interactive-sim-stage stage-medium">
    <canvas class="sim-canvas" aria-label="Parallel particle compute sandbox"></canvas>
  </div>
  <div class="interactive-sim-controls">
    <div class="interactive-sim-control">
      <label>particle count</label>
      <input data-control="particles" type="range" min="100" max="4000" step="10" value="2440" />
    </div>
    <div class="interactive-sim-control">
      <label>field strength</label>
      <input data-control="force" type="range" min="0.1" max="3" step="0.01" value="1.99" />
    </div>
    <div class="interactive-sim-control">
      <label>velocity damping</label>
      <input data-control="damping" type="range" min="0.85" max="0.999" step="0.001" value="0.932" />
    </div>
    <button data-control="reset" type="button">reset lab 7</button>
  </div>
</div>

## Session 1: Intuition

GPU-style workloads are dominated by massive parallel updates on simple state vectors. Particle systems are a natural lens for understanding that pattern.

## Session 2: Model

Each frame updates particle position and velocity arrays using a shared flow field. The implementation runs on CPU here, but the loop structure mirrors data-parallel compute passes.

## Session 3: Control Lab

Increase particle count and watch throughput pressure rise. Then adjust field strength and damping to balance stability versus expressive motion.

## Session 4: What to Observe

High damping stabilizes trajectories but can suppress structure. Low damping produces richer flow but may destabilize quickly with strong forcing.

## Session 5: Limits and Simplifications

This is not a Metal/OpenGL compute kernel benchmark and does not include tiled memory optimizations. It is a conceptual bridge between graphics loops and parallel compute thinking.

## Session 6: References

- Primary inspiration: [Exploring GPGPU on iOS](https://ciechanow.ski/exploring-gpgpu-on-ios/)
- Archive index: [Bartosz Ciechanowski Archives](https://ciechanow.ski/archives/)

## Original Article Alignment

This page keeps the same conceptual spine as the original article while adapting it into data-parallel update loops with repeatable presets for comparison and testing.

## Why this matters

Data-parallel thinking is core to modern graphics and compute workloads. Understanding particle-style update loops translates directly to GPU kernel design and performance planning.

## Try these experiments

1. Hold field strength steady and sweep particle count from low to high; note where behavior changes from gradual to abrupt.
2. Reset, then sweep field strength while keeping particle count fixed; compare whether the response is mostly geometric, temporal, or intensity-driven.
3. Use Interactive Labs 6 and 7 as an A/B pair: run both for a longer interval and compare drift, stability, and repeatability.

## Related Notes

- [[Mesh Transforms]]
- [[Color Spaces]]
- [[Sound]]
