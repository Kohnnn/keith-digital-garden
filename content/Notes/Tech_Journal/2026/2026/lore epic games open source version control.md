---
title: "lore epic games open source version control"
tags:
  - version-control
  - epic-games
  - open-source
  - rust
  - dev-tools
keywords:
  - Lore VCS
  - Epic Games
  - content-addressed storage
  - Merkle tree
  - binary asset management
draft: true
created: 2026-06-18
updated: 2026-06-18
note_id: TJ-2026-06-18-003
cssclasses:
  - tech-journal
  - analysis
---

Epic Games open-sourced Lore — a next-gen version control system designed for the scale of game development where repos mix gigabytes of binary assets with code. Built in Rust, MIT licensed. 1000+ HN points today.

VCS tools have always struggled with binary files. Git handles them as opaque blobs — every change stores the full binary. Lore is purpose-built for this: content-addressed Merkle tree storage, chunked binary storage (only changed chunks stored on edit), on-demand hydration (fetch what you need), tamper-evident revision chain, free branching.

Already the built-in VCS for Unreal Editor for Fortnite. The open source release is pre-1.0 but the architecture is sound. Centralized service with caching, SDKs for JS/Python/C#/Go.

**My take:** The most interesting VCS release since Git, though it's solving the binary-asset problem not the distributed problem. For game dev, media production, anyone fighting Git LFS, this is the right approach designed from day one rather than bolted on.

References: https://lore.org/ | https://github.com/EpicGames/lore
