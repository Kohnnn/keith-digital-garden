---
title: http3 makes consolidation feel inevitable
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
description: The 2022 report shows the web stack converging around fewer transport defaults.
created: 2022-12-31
updated: 2022-12-31
note_id: 221231GN12
cssclasses:
  - general-note
---

# http3 makes consolidation feel inevitable

<div class="inline-ref">
  <span class="inline-note">ref</span> <a href="https://blog.cloudflare.com/the-state-of-http-in-2022/">https://blog.cloudflare.com/the-state-of-http-in-2022/</a>
</div>

Cloudflare's State of HTTP report summarized how HTTPS, HTTP/3, and TLS adoption evolved in 2022
([Cloudflare](https://blog.cloudflare.com/the-state-of-http-in-2022/)). The headline for me is
consolidation: fewer protocols, more encryption, and rising expectations for low latency. I read it
as the web quietly standardizing around a smaller set of defaults.

## context + claim
The report is not just a snapshot; it is a map of what the web is willing to standardize. My claim:
HTTP/3 is less a feature and more a governance decision. Once the defaults shift, the rest of the
stack follows.

## evidence stack
- HTTPS is now the baseline expectation, which makes encryption table stakes rather than a premium.
- HTTP/3 adoption is rising, which forces operators to accept QUIC as a real operational layer.
- CDN and edge providers are now the de facto protocol gatekeepers.

## signal vs noise
- Signal: protocol changes arrive through managed infrastructure.
- Signal: performance expectations harden into defaults.
- Noise: debates about “best protocol” that ignore deployment reality.

## my take
I like consolidation that lowers ops burden, but I watch for the moment it becomes dependency.

<div class="note-micro">
  <span class="inline-note">default convergence</span>
  <span class="inline-note">protocol gatekeepers</span>
</div>

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
        <li>[[Cached Chrome Top Million Websites]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
How much protocol complexity should a small team be expected to understand today?

#
