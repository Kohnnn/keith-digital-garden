---
title: "adam text to cad goes open source"
tags:
  - ai-tools
  - cad
  - open-source
  - 3d-printing
  - yc
keywords:
  - CADAM
  - text-to-CAD
  - OpenSCAD
  - parametric modeling
draft: true
created: 2026-06-18
updated: 2026-06-18
note_id: TJ-2026-06-18-002
cssclasses:
  - tech-journal
  - analysis
---

Adam (YC W25) open-sourced CADAM — a browser-based text-to-CAD app that turns natural language descriptions into parametric 3D models. Runs entirely in browser via WebAssembly, outputs .STL, .SCAD, and .DXF.

## What it does

You type "a V8 engine" and it generates a complete parametric model with 22 adjustable dimensions and 8 colors. Not a static mesh — real OpenSCAD geometry with knurling, threads, gear teeth, airfoils, the works. The benchmarks are impressive:

- V8 engine with two banks, crankshaft counterweights, pistons
- 9-cylinder radial aircraft engine with cooling fins
- High-bypass turbofan with internal compressor stages
- Herringbone planetary gear stage at module 1.5
- NACA 2412 airfoil wing with spar tubes
- Threaded jar with matching screw-on lid
- Centrifugal pump impeller with backward-curved blades
- Honeycomb lightweight bracket with filleted corners

The V8 engine one is 22 dims and 8 colors from a single paragraph prompt. That's not "generate a voxel blob" — that's real parametric CAD.

## Architecture

Stack: React 19 + TypeScript + TanStack Start, Three.js/R3F for rendering, OpenSCAD WASM for the engine, Supabase for backend. Uses Anthropic Claude API to convert natural language to OpenSCAD code. Parametric controls let you adjust dimensions via sliders without re-querying the AI — it extracts dimension variables from the generated code and surfaces them as interactive controls.

## My take

The text-to-CAD space is moving fast. dingcad paved the way, but CADAM's parametric extraction and real OpenSCAD output make it immediately useful for 3D printing. The fact it's GPLv3 with full OpenSCAD source export means no lock-in — you get the .scad file, you own it. For anyone doing hardware prototyping or 3D printing, this removes the CAD skill bottleneck. Describe what you want, tweak dimensions, export STL. That workflow is transformative for makers who can model in words faster than in Fusion 360.

## References
- [GitHub: Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)
- [Live demo](https://adam.new/cadam)
- [HN discussion](https://news.ycombinator.com/item?id=48572553)
