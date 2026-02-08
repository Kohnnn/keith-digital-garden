---
title: pixel lock screen bypass
tags:
  - tech-journal
  - security
  - mobile
  - bugs
  - 2022
keywords:
  - pixel
  - bypass
  - security
  - bug
  - lockscreen
draft: true
description: A bug allowed lock screen access through a crash path.
created: 2022-11-10
updated: 2025-03-24
note_id: 221110TJ01
cssclasses:
  - tech-journal
---

# pixel lock screen bypass

## scene cut
A report documented a Pixel lock screen bypass triggered by a specific crash path ([source](https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass/)). It highlighted how edge cases can defeat core protections.

## signal braid
- Edge-case crashes can become security vulnerabilities.
- Mobile security depends on UI-state correctness.
- Bug disclosure is now part of user trust.
- The risk echoes [[Deceiving Windows Defender Big Stack Bypass]].

## single-line take
Security boundaries fail at the edges of state, not just crypto.

## link hop
This links to [[Deceiving Windows Defender Big Stack Bypass]] and [[ios14 clipboard snooping]] and [[Trust in Platforms]].

## open loop
Which other UI-state paths are still untested for security?

## updates
- 2025-03-24: Seed draft from 2022 backfill. Pending manual review.

#
