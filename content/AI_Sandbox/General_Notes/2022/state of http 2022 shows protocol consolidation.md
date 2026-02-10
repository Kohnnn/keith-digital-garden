---
title: state of http 2022 shows protocol consolidation
tags:
  - general-note
  - web
  - infrastructure
  - protocol
  - 2022
keywords:
  - http3
  - tls
  - protocol
  - web
  - latency
draft: true
description: The annual report showed the web stack converging on fewer protocols.
created: 2022-12-31
updated: 2022-12-31
note_id: 221231GN12
cssclasses:
  - general-note
---

# state of http 2022 shows protocol consolidation

Cloudflare's State of HTTP report summarized how HTTPS, HTTP/3, and TLS adoption evolved in 2022
([Cloudflare](https://blog.cloudflare.com/the-state-of-http-in-2022/)). The headline for me is
consolidation: fewer protocols, more encryption, and rising expectations for low latency. I read it
as the web quietly standardizing around a smaller set of defaults.

## evidence stack
- HTTPS is now the default expectation for modern sites, making encryption table stakes.
- HTTP/3 usage is rising, which signals QUIC is becoming a real operational consideration.
- The ecosystem expects CDN and edge providers to hide complexity, shifting protocol expertise to
  infrastructure vendors.

## signal vs noise
- Signal: the web stack converges around encrypted transport as the baseline.
- Signal: protocol changes are now delivered through managed infrastructure, not browsers alone.
- Noise: debates about which protocol is "best" when deployment choices are centralized.

## linkage anchor
This connects to [[State of HTTP in 2022]] as the technical backbone and to [[RSS Brain]] as a
counterpoint about intentional distribution. It also sits near [[google tag manager anti adblock weapon]]
because the stack changes shape what tracking and analytics can do.

## my take
I trust consolidation when it reduces operational overhead, but I worry about how much agency it
removes from smaller teams.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#web</li>
        <li>#infrastructure</li>
        <li>#protocol</li>
        <li>#2022</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[State of HTTP in 2022]]</li>
        <li>[[RSS Brain]]</li>
        <li>[[google tag manager anti adblock weapon]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
How much protocol complexity should a small team be expected to understand today?

#
