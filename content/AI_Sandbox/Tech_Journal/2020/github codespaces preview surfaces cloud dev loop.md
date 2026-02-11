---
title: github codespaces preview surfaces cloud dev loop
tags:
  - tech-journal
  - devtools
  - cloud
  - 2020
  - infra
keywords:
  - github
  - codespaces
  - vscode
  - cloud
  - dev
draft: true
description: GitHub previewed Codespaces, promising VS Code in the browser backed by cloud workspaces.
created: 2020-05-06
updated: 2020-05-06
note_id: 200506TJ03
cssclasses:
  - tech-journal
---

# github codespaces preview surfaces cloud dev loop

*see also:* [[Latency Budget]] · [[Platform Risk]]

GitHub unveiled Codespaces, a cloud-hosted dev environment that spins up repositories with VS Code tooling inside the browser ([GitHub Codespaces](https://github.blog/2020-05-06-github-codespaces-beta/)). The demo showcased how the entire dev loop can move to the cloud.

## scene cut
Developers could specify dotfiles, extensions, and containers in code, meaning every machine had the same environment. Launching in 90 seconds became the new baseline.

## signal braid
- The approach reduces "works on my machine" by sealing dependencies in containers.
- It hints at compute consolidation similar to [[virtual machines inside chatgpt?]] (prefers actual note).
- Remote work adoption made this more vital, echoing [[remote work normalizes across platforms]].
- If daily work moves to the browser, offline productivity becomes stretch goals.

## risk surface
- You now depend on GitHub's availability; outages hit everyone simultaneously.
- Latency becomes more noticeable for heavy tooling.
- Companies may worry about storing secrets in remote containers.

## my take
Local machines aren't going away, but Codespaces shows that software delivery can look like SaaS. The trade-off is trust in the service provider.

## linkage
<div class="linkage-tree">
  <div class="linkage-tree-title">linkage tree</div>
  <ul>
    <li>tags
      <ul>
        <li>#devtools</li>
        <li>#cloud</li>
        <li>#2020</li>
      </ul>
    </li>
    <li>related
      <ul>
        <li>[[remote work normalizes across platforms]]</li>
      </ul>
    </li>
  </ul>
</div>

## ending questions
What developer workflows break when the IDE lives in the cloud and the client is a browser tab?

#
