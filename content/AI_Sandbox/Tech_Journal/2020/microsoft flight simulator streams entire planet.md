---
title: microsoft flight simulator streams entire planet
tags:
  - tech-journal
  - cloud
  - gaming
  - 2020
  - infra
keywords:
  - flightsim
  - azure
  - streaming
  - bing
  - microsoft
draft: true
description: Microsoft Flight Simulator 2020 fused Azure cloud streaming with Bing Maps to recreate the planet.
created: 2020-08-18
updated: 2020-08-18
note_id: 200818TJ14
cssclasses:
  - tech-journal
---

# microsoft flight simulator streams entire planet

*see also:* [[Latency Budget]] · [[Platform Risk]]

Microsoft Flight Simulator 2020 launched with a streamed Earth model built from 2 PB of Bing Maps data plus Azure AI for photogrammetry ([Microsoft](https://news.xbox.com/en-us/2020/08/17/microsoft-flight-simulator-launch/)).

## scene cut
Instead of local assets, the simulator pulls scenery from Azure servers in real time, using AI to infer trees, buildings, and terrain details. Pilots get real weather and traffic overlays via the same pipeline.

## signal braid
- This is a flagship use of cloud + AI + consumer client, a cousin to the distributed compute story in [[github codespaces preview surfaces cloud dev loop]].
- The architecture demonstrates why bandwidth matters (see [[youtube reduces european streaming quality to ease bandwidth]]).
- It created new expectations for digital twins, a thread that later fed Starlink/remote-work resilience narratives.

## risk surface
- The sim is bandwidth hungry; offline caches degrade realism quickly.
- Azure downtime ruins the experience, tying consumer fun to enterprise reliability.
- Photogrammetry glitches became memes, reminding us AI hallucinations aren’t limited to text.

## my take
Flight Simulator is a preview of cloud-native consumer apps where hardware matters less than connection quality. It’s a tech flex disguised as a game.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#cloud</li>
        <li>#gaming</li>
        <li>#2020</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[github codespaces preview surfaces cloud dev loop]]</li>
        <li>[[youtube reduces european streaming quality to ease bandwidth]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
How many more consumer apps will stream entire worlds rather than ship asset packs now that Microsoft proved it works?

#
