---
title: tornado cash sanctions redraw crypto privacy lines
tags:
  - general-note
  - tech-journal
  - crypto
  - policy
  - security
keywords:
  - tornado
  - sanctions
  - aml
  - defi
  - laundering
draft: true
description: Treasury's action against Tornado Cash showed that DeFi mixers sit firmly inside AML jurisdiction.
created: 2022-08-08
updated: 2022-08-08
note_id: 220808GN64
cssclasses:
  - tech-journal
  - general-note
---

# tornado cash sanctions redraw crypto privacy lines

*see also:* [[Security Posture]] · [[Trust in Platforms]]

The U.S. Treasury sanctioned Tornado Cash, citing $7B of laundered funds including North Korea's Lazarus activity, effectively banning Americans from interacting with its smart contracts ([Treasury](https://home.treasury.gov/news/press-releases/jy0916)). DeFi privacy tools suddenly carried felony risk.

## scene cut
Treasury's SDN listing covered wallet addresses, relayers, and even donations, so using Tornado now triggers compliance blocks on every major interface. GitHub repos and front-ends were pulled, underscoring how "unstoppable" code still relies on centralized chokepoints.

## signal braid
- This action gives OFAC precedent to sanction code, not just people, pushing compliance burdens down to developers.
- It lands amid the broader trust crisis kicked off in [[terrausd death spiral wipes out anchor trust]] and accelerated through [[celsius freezes withdrawals and sparks retail panic]].
- Privacy advocates will cite this as proof that DeFi needs design separation between mixers and sanction-evasion rails.
- Exchanges instantly blacklisted Tornado-linked deposits, creating chain analysis backlogs.

## risk surface
- Developers fear personal liability for deploying privacy tools.
- U.S. users could trigger accidental sanctions violations by touching tainted funds.
- Multichain bridges have to separate compliance domains or risk similar treatment.

## link hop
This sits on the same regulatory arc as [[ftx bankruptcy reveals multibillion balance hole]], because both events give policymakers ammunition to force centralized choke points into crypto.

## my take
I now expect mixers to either geofence entirely or bolt on attestations proving clean funds. "Code is speech" won't save a protocol that launders billions for a hostile state actor.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#crypto</li>
        <li>#policy</li>
        <li>#security</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[celsius freezes withdrawals and sparks retail panic]]</li>
        <li>[[three arrows liquidation exposes leverage maze]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What privacy-preserving architecture can satisfy OFAC while still offering plausibly deniable transaction flows?

#
