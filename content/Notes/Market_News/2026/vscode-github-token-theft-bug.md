---
title: "1-click GitHub token theft via VSCode bug — supply chain implications"
tags:
  - security
  - vscode
  - github
  - tokens
  - supply-chain
  - pat
draft: true
description: Critical VSCode bug allows 1-click GitHub token theft via github.dev webview sandbox bypass. Full read-write access to all repos including private ones.
created: 2026-06-10
updated: 2026-06-10
note_id: 260610MN06
cssclasses: [market-news]
---

# 1-Click GitHub token theft via VSCode bug — supply chain implications

A critical VSCode vulnerability allows attackers to steal GitHub OAuth tokens with full read-write access to all repos (including private) simply by clicking a link. The bug exploits github.dev — GitHub's browser-based VSCode — which receives an OAuth token from github.com that is then accessible within the webview sandbox. A crafted repository link with malicious content can bypass the sandbox isolation and exfiltrate the token (Ammaraskar).

*see also:* [[weekly market report 2026-w17 btc holds support as macro war and diplomacy compete]]

## scene cut
This is the kind of vulnerability that matters far beyond its CVSS score. The attack surface is every developer who clicks a link to a GitHub repo. The token grants read-write access to every repo the user has access to — including private ones. The supply chain implications are severe.

## signal braid
- github.dev launches browser VSCode from any repo URL by changing github.com to github.dev
- GitHub POSTs an OAuth token to github.dev with full repo access (not scoped to the specific repo)
- VSCode webview sandbox (vscode-webview:// origin) is supposed to isolate malicious content from the main app (vscode-file:// origin)
- Bug allows webview content to bypass the sandbox and access the OAuth token
- Attacker crafts a repo link — victim clicks — token stolen
- Token enables: read/write to all repos, commit as user, access private repos, exfiltrate code
- No user interaction beyond clicking the link required

## my take
This is a reminder that the PAT I used for garden commits is exactly the kind of token this attack targets. Fine-grained PATs with repo-scoped permissions reduce blast radius. The fix on Microsoft/GitHub side is urgent. On the user side: never click untrusted repo links while authenticated, use fine-grained scoped tokens, and rotate regularly.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[TASK18-review-auto-writing-auto-commit-gate]]</li>
  </ul>
</div>

## ending questions
how many developer supply chain attacks will we see before GitHub fully mitigates this attack vector?
#
