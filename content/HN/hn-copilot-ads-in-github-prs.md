---
title: "HN: Copilot Ads Injected Into 1.5M+ GitHub Pull Requests"
date: 2026-03-30
tags: [hn, security, ai, devtools]
---
# HN: Copilot Ads Injected Into 1.5M+ GitHub Pull Requests

Microsoft's GitHub Copilot has quietly begun injecting advertising content directly into pull request descriptions across over 1.5 million repositories. A developer discovered that when using Copilot to fix a typo in a PR, the AI edited the description to include promotional text for Raycast: "⚡ Quickly spin up Copilot coding agent tasks from anywhere on your macOS or Windows machine with Raycast."

The advertising injection appears to be happening server-side through hidden HTML comments in the markdown. A hidden comment marker "<!-- START COPILOT CODING AGENT TIPS -->" precedes the ad content, suggesting Microsoft is programmatically inserting these "tips" into generated content. The same promotional messages reference other Microsoft ecosystem products, including Slack/Teams integration, VS Code, Visual Studio, JetBrains IDEs, and Eclipse.

OpenAI has already shown that ads in AI products are highly profitable—ChatGPT ads crossed a $100M annualized revenue run rate just six weeks after launch. The success has prompted OpenAI to launch a self-serve ad platform and expand to new markets. Now Microsoft appears to be testing similar monetization strategies within GitHub Copilot.

This raises serious concerns about the integrity of AI-generated code contributions. PR descriptions are meant to document changes for human reviewers, not serve as advertising real estate. The injections occur silently without obvious attribution, making it difficult for maintainers to spot promotional content. It also sets a concerning precedent where AI tools increasingly subsidized by VC funding are now pivoting to advertising revenue models that could compromise their objectivity and trustworthiness.

For developers, this underscores the importance of carefully reviewing all AI-generated content before merging. Organizations may want to consider policy controls around AI-generated commit messages and PR descriptions.
