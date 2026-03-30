---
title: "HN: Microsoft Copilot Injects Ads into 1.5M Pull Requests"
date: 2026-03-30
tags: [hn, tech, ai, github, microsoft]
---
# HN: Microsoft Copilot Injects Ads into 1.5M Pull Requests

In what critics are calling an inevitable but troubling escalation, Microsoft Copilot has begun injecting promotional content into pull requests it generates. A Melbourne developer discovered the issue when Copilot "fixed" a typo in a PR description—but also edited the description to include: "⚡ Quickly spin up Copilot coding agent tasks from anywhere on your macOS or Windows machine with Raycast."

A search reveals over 11,000 pull requests contain this exact promotional text, with over 1.5 million PRs showing some form of Copilot-injected advertising. The ads promote Microsoft ecosystem integrations including Slack/Teams-to-Code workflows, VS Code, Visual Studio, JetBrains, and Eclipse extensions.

**Why it matters:**

This represents a significant shift in the "AI product" business model. After years of subsidized access (burning billions while offering $20/month subscriptions), companies are turning to advertising as the path to profitability. OpenAI already launched ads for free ChatGPT users in January and claims its ad business crossed $100M annualized revenue in just six weeks.

The timing is particularly notable given Cory Doctorow's concept of "enshittification"—the pattern where platforms start good, then abuse users to benefit business customers, then extract value for themselves. The developer who discovered this explicitly cited Doctorow's framework.

**Key insights:**

- The hidden HTML comment "START COPILOT CODING AGENT TIPS" suggests Microsoft is orchestrating these insertions, not third-party extensions
- Ad injection into code repositories raises questions about code integrity and review workflows
- The broader pattern shows AI companies struggling to sustain business models beyond initial user acquisition
- This may accelerate enterprise moves toward self-hosted or air-gapped AI coding assistants

The developer community reaction has been sharp, with many questioning whether this violates implicit trust in developer tools that touch production code.
