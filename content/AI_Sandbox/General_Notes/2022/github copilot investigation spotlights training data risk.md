---
title: github copilot investigation spotlights training data risk
tags:
  - general-note
  - ai
  - legal
  - devtools
  - 2022
keywords:
  - copilot
  - licensing
  - data
  - risk
  - compliance
draft: true
description: The investigation made provenance risk a core concern for AI devtools.
created: 2022-10-17
updated: 2022-10-17
note_id: 221017GN01
cssclasses:
  - general-note
---

# github copilot investigation spotlights training data risk

The Copilot investigation cataloged cases where AI suggestions appeared to mirror open-source code
([Copilot Investigation](https://githubcopilotinvestigation.com/)). The report reframed the product
as a compliance and provenance problem, not just a productivity boost. I read it as the moment
software teams realized AI tools need governance.

## risk surface
- Copyright or license violations surface when generated code resembles training data.
- Security risks increase if output is accepted without understanding provenance.
- Vendor lock-in deepens when model behavior becomes core to a workflow.

## counter-model
Supporters argue that suggestions are statistical, that outputs are not direct copies, and that fair
use should apply. That may be true in many cases, but the burden shifts to teams to prove provenance
when regulators or courts ask.

## decision boundary
If tooling can show provenance or filter for license compliance by default, I will treat AI
autocomplete as a standard productivity tool. Without that, it remains a risky dependency for any
serious codebase.

## my take
The investigation is a forcing function. It turns AI coding from a novelty into a governance
decision.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#ai</li>
        <li>#legal</li>
        <li>#devtools</li>
        <li>#2022</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[GitHub Copilot Investigation]]</li>
        <li>[[Copilot and the Autocomplete Layer]]</li>
        <li>[[open source maintainers need crisis budgets]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What would a trustworthy provenance report look like inside the IDE?

#
