---
title: wwdc 2026 adds core ai without replacing core ml
tags:
  - tech-journal
  - apple
  - core-ai
  - foundation-models
  - ai-development
keywords:
  - WWDC 2026
  - Core AI
  - Core ML
  - Foundation Models framework
  - Xcode 27
draft: true
description: Apple's WWDC 2026 developer stack adds Core AI and broader model routing, but the announcement does not retire Core ML.
created: 2026-06-08
updated: 2026-07-18
note_id: 260608TJ96
cssclasses:
  - tech-journal
  - analysis
---

# wwdc 2026 adds core ai without replacing core ml

Apple's WWDC 2026 developer announcement introduced Core AI for running custom models on device and expanded the Foundation Models framework into a broader Swift API ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)). The original headline overreaches twice: Apple did not describe Siri as simply Gemini, and it did not say Core AI replaces or deprecates Core ML.

_see also:_ [[wwdc 2026 siri 2.0 and apples ai reset]] · [[apple m4 neural engine shifts ondevice economics]]

## scene cut

- The Foundation Models framework now supports stronger on-device models with image input, server models, and custom skills through one native Swift API ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)).
- Developers can use Apple models, Claude, Gemini, or another provider that implements Apple's new language model protocol ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)).
- Core AI is a new framework optimized for Apple silicon unified memory and the Neural Engine, with local deployment of full-scale large language models as its stated use case ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)).

> [!note]
> “New preferred path for local LLMs” and “replacement for Core ML” are different claims. Apple announced the first and did not document the second in this release.

## siri is not one model

Apple says the next-generation Apple Foundation Models were custom-built in collaboration with Google and Gemini models ([Apple Intelligence architecture](https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/)). It also says those models run on device and on Private Cloud Compute, while Siri's orchestration can use local system capabilities such as Spotlight and App Toolbox ([Apple Siri AI architecture](https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/)). “Siri is now Gemini” erases those layers and turns a disclosed collaboration into an unsupported one-model architecture.

## core ai has a narrower claim

Apple positions Core AI as the on-device framework for developers bringing custom models into an app ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)). The same announcement does not state that Core ML is deprecated, removed, or replaced. Until Apple publishes migration or deprecation guidance, I would treat Core AI as an addition with an LLM-focused boundary, not a drop-in successor to every Core ML workload.

That distinction matters for teams maintaining classifiers, vision pipelines, and other existing model integrations. A new framework can become the preferred route for one workload without invalidating the older runtime.

## xcode becomes an agent host

Xcode 27 integrates models and agents from Anthropic, Google, and OpenAI; lets agents write and run tests, use Playgrounds and previews, and interact with simulators; and supports extensions through Model Context Protocol and Agent Client Protocol connections ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)). This may be the more immediate developer shift: Apple is opening model choice while keeping the workflow inside Xcode.

> [!warning]
> Framework names do not establish migration policy. Wait for API documentation and explicit deprecation notices before planning a Core ML rewrite.

## my take

The developer strategy is less vertically closed than the headline suggests. Apple is supplying its own models and local runtime while also standardizing access to outside models and agents ([Apple developer tools announcement](https://www.apple.com/newsroom/2026/06/apple-aids-app-development-with-new-intelligence-frameworks-and-advanced-tools/)). The moat moves toward native orchestration, hardware-aware execution, and platform distribution.

## ending questions

Where will Apple draw the long-term boundary between Core AI, Core ML, and the Foundation Models framework once production migration guidance arrives?
