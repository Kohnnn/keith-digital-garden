---
title: "Claude × TradingView: Live MCP Integration"
tags: [AI, trading, Claude, TradingView, MCP, PineScript, automation]
keywords: [Claude Code, TradingView MCP, Pine Script, trading automation]
description: "Connect Claude Code to TradingView Desktop via Chrome DevTools Protocol."
created: 2026-04-12
updated: 2026-04-12
---

## context + claim

TradingView doesn't have a public API. But someone figured out how to connect Claude directly to TradingView Desktop — reading live data, creating indicators, automating trading workflows. 78 MCP tools give Claude eyes on every candle, every indicator, every drawing on screen, in real-time.

## constraint map

**Architecture:**
- Claude Code → Node.js MCP Server → TradingView Desktop via Chrome DevTools Protocol (port 9222)
- All local — no data leaves your machine

**What Claude reads:**
- Symbol, timeframe, OHLCV
- All indicator names, IDs, values
- Pine drawings (line.new, label.new, table.new, box.new)
- Order book depth
- Strategy tester results
- Screenshots of any chart region

**Morning Brief Workflow:**
1. TradingView open (debug port)
2. Run: `tv brief` or ask Claude "run morning_brief"
3. Claude scans watchlist, reads indicators, applies rules.json
4. Returns: session bias, levels, risk check

**Pine Script Development:**
1. Describe in natural language
2. Claude writes Pine Script
3. Claude injects into editor, compiles
4. Reads errors, fixes, recompiles
5. Loop until clean

## setup

**Prerequisites:** TradingView Desktop (paid), Node.js 18+, Claude Code

**One-shot setup** — paste into Claude Code:
```
Clone https://github.com/LewisWJackson/tradingview-mcp-jackson.git to ~/tradingview-mcp-jackson, run npm install, add to MCP config at ~/.claude/.mcp.json, copy rules.example.json to rules.json, verify with tv_health_check.
```

**Launch debug mode:**
- Mac: `./scripts/launch_tv_debug_mac.sh`
- Windows: `scripts\launch_tv_debug.bat`
- Linux: `./scripts/launch_tv_debug_linux.sh`

## my take

Screenshot AI is reading pixels of a moment that no longer exists. Code-level access gives Claude live values, precise positioning. The morning brief workflow is the most practical daily use — define criteria once, apply every morning automatically.

## linkage

- [[mcp-model-context-protocol]]
- [[claude-code-productivity]]

*Sources: [YouTube Tutorial](https://youtu.be/vIX6ztULs4U) · [X Thread](https://x.com/i/status/2039080409581891890) · [GitHub](https://github.com/LewisWJackson/tradingview-mcp-jackson)*
