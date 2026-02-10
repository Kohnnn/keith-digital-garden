---
title: building a vm inside chatgpt previews jailbreak design
tags:
  - general-note
  - ai
  - security
  - research
  - 2022
keywords:
  - chatgpt
  - jailbreak
  - prompts
  - safety
  - tooling
draft: true
description: A prompt-built VM hinted at how people will steer and jailbreak models.
created: 2022-12-03
updated: 2022-12-03
note_id: 221203GN01
cssclasses:
  - general-note
---

# building a vm inside chatgpt previews jailbreak design

An experiment showed how to build a virtual machine inside ChatGPT using prompts
([source](https://www.engraved.blog/building-a-virtual-machine-inside/)). The project illustrates
how users can create structured constraints that both guide and jailbreak model behavior. I read it
as a preview of the next wave of prompt engineering.

## causal chain
Structured prompt -> simulated VM -> constrained actions, which matters because constraints become a
tool for steering outputs.
Constrained actions -> predictable behavior -> more powerful workflows, which increase user
dependence on prompt scaffolding.
Prompt scaffolding -> safety bypass potential, which forces guardrails to evolve.

## risk surface
- Safety boundaries can be bypassed with clever scaffolding.
- Users rely on fragile prompt constructs that break across model updates.
- Teams ship systems that are hard to audit because logic lives in prompts, not code.

## decision boundary
If model-native tooling can expose interpreters or safe execution layers, I will treat prompt-based
VMs as a curiosity rather than a core pattern. Until then, they are a practical workaround that will
keep showing up in the wild.

## my take
This is clever, but it signals a deeper gap: people want programmable behavior, not just chat. We
should build that directly.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#ai</li>
        <li>#security</li>
        <li>#research</li>
        <li>#2022</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[Building a VM Inside ChatGPT]]</li>
        <li>[[chatgpt launch proves conversational ai is ready for consumers]]</li>
        <li>[[gpt-3 release redefines ai api calculus]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What is the minimum structure needed to make AI outputs auditable and repeatable?

#
