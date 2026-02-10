---
title: macos cannot open non apple apps
tags:
  - tech-journal
  - security
  - apple
  - reliability
  - 2020
keywords:
  - macos
  - gatekeeper
  - outage
  - trust
  - apps
draft: true
description: A Gatekeeper issue blocked many apps at once.
created: 2020-11-12
updated: 2025-05-10
note_id: 201112TJ01
cssclasses:
  - tech-journal
---

# macos cannot open non apple apps

## scene cut
A Gatekeeper issue caused macOS to block non-Apple applications, effectively creating a sudden trust outage ([source](https://twitter.com/lapcatsoftware/status/1326990296412991489)). It made platform verification an operational dependency.

## signal braid
- Trust systems can become single points of failure.
- Platform verification controls what runs.
- Reliability issues can feel like censorship.
- The outage theme echoes [[AWS Outage and the Cloud Choke]].

## single-line take
When trust checks fail, usability collapses instantly.

## link hop
This connects to [[AWS Outage and the Cloud Choke]] and [[State of HTTP in 2022]] and [[Windows 11 Launch]].

## open loop
What redundancy exists for platform trust systems?

# macos cannot open non apple apps