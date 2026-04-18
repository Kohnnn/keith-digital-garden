---
title: "Claude x TradingView: Live MCP Integration"
tags: [AI, trading, Claude, TradingView, MCP, PineScript, automation, technical-analysis]
keywords: [Claude Code, TradingView MCP, Pine Script, trading automation, LewisWJackson, Chrome DevTools Protocol]
description: "Connect Claude AI to TradingView Desktop for automated technical analysis, alert monitoring, and trade execution workflows via MCP."
created: 2026-04-12
updated: 2026-04-17
---

![TradingView MCP Architecture](https://pbs.twimg.com/media/HEw8xN_XMAAVr-H.jpg)

## Overview

**LewisWJackson/tradingview-mcp-jackson** is a Model Context Protocol (MCP) server that bridges Claude AI with TradingView alert and webhook system. It enables automated technical analysis, real-time chart monitoring, and structured trade management workflows - all powered by natural language through Claude.

Built on top of the original tradesdontlie/tradingview-mcp by @tradesdontlie.

## Architecture

Claude Code -> Node.js MCP Server -> CDP port 9222 -> TradingView Desktop -> Exchange

**Key insight:** Claude is not looking at images. It reads the actual code and values on screen. That means:
- Precise candle positioning (top, bottom, wicks)
- Live updates every second
- No pixel-guessing or delayed screenshots

## Core Capabilities

### 1. Natural Language Chart Analysis
- **Pattern recognition**: Identify chart patterns (head and shoulders, double tops, wedges)
- **Indicator interpretation**: Analyze RSI, MACD, Bollinger Bands, VWAP readings
- **Multi-timeframe analysis**: Synthesize signals across 1m to monthly charts
- **Volume analysis**: Evaluate volume profile and on-balance volume signals

### 2. Morning Brief Workflow
The crown jewel - scan your watchlist, read indicators, apply rules, get session bias:

BTCUSD  | BIAS: Bearish  | KEY LEVEL: 94,200  | WATCH: RSI crossing 50 on 4H
ETHUSD  | BIAS: Neutral  | KEY LEVEL: 3,180   | WATCH: Ribbon direction on daily
SOLUSD  | BIAS: Bullish  | KEY LEVEL: 178.50  | WATCH: Hold above 20 EMA

### 3. Automated Alert Management
- create_alert - Set price, indicator, or condition-based alerts
- get_alerts - List all active alerts with their triggers
- modify_alert - Update alert thresholds or conditions
- delete_alert - Remove alerts when conditions change

### 4. Pine Script Development with AI
Claude writes, injects, compiles, and debugs Pine Scripts:
1. pine_set_source - Inject code into editor
2. pine_smart_compile - Compile with auto-detection
3. pine_get_errors - Read errors if any
4. pine_get_console - Read log output
5. pine_save - Save to TradingView cloud

### 5. Automated Trading Execution
1. TradingView detects signal (e.g., RSI crosses 70)
2. Claude evaluates against your rules.json criteria
3. If all conditions pass -> Claude executes trade via exchange API
4. Trade logged for accounting purposes
5. Session saved for later review

## Tool Reference (81 MCP Tools)

### Morning Brief
- morning_brief - Scan watchlist, read indicators, return structured data
- session_save - Save brief to ~/.tradingview-mcp/sessions/
- session_get - Retrieve today's or yesterday's brief

### Chart Reading
- chart_get_state - Get symbol, timeframe, all indicator names
- data_get_study_values - Read RSI, MACD, BB, EMA values
- quote_get - Get latest price, OHLC, volume
- data_get_ohlcv - Get price bars (use summary: true for stats)

### Pine Drawings
- data_get_pine_lines - Horizontal price levels
- data_get_pine_labels - Text annotations + prices
- data_get_pine_tables - Data tables (dashboards)
- data_get_pine_boxes - Price zones as {high, low} pairs

### Chart Control
- chart_set_symbol - Change ticker (BTCUSD, AAPL, ES1!)
- chart_set_timeframe - Change resolution (1, 5, 15, 60, D, W, M)
- draw_shape - Draw horizontal_line, trend_line, rectangle, text

## Setup

**Prerequisites:** TradingView Desktop app (paid), Node.js 18+, Claude Code, macOS/Windows/Linux

### One-Shot Setup
Paste this into Claude Code:

Set up TradingView MCP Jackson for me. Clone https://github.com/LewisWJackson/tradingview-mcp-jackson.git to ~/tradingview-mcp-jackson, then add it to my MCP config at ~/.claude/.mcp.json (merge with any existing servers). The config block is: { "mcpServers": { "tradingview": { "command": "node", "args": ["/Users/YOUR_USERNAME/tradingview-mcp-jackson/src/server.js"] } } } - replace YOUR_USERNAME with my actual username. Then copy rules.example.json to rules.json and verify with tv_health_check.

### Manual Setup

git clone https://github.com/LewisWJackson/tradingview-mcp-jackson.git ~/tradingview-mcp-jackson
cd ~/tradingview-mcp-jackson
cp rules.example.json rules.json
./scripts/launch_tv_debug_mac.sh  # Mac
tv_health_check  # Verify

## Videos
- [Claude Can Now TRADE For You On TradingView](https://youtu.be/aDWJ6lLemJU)
- [How To Connect Claude to TradingView](https://youtu.be/vIX6ztULs4U)

## Security Notes
- **Not affiliated with TradingView Inc. or Anthropic**
- Requires a valid TradingView subscription
- All data processing happens locally
- Uses undocumented internal TradingView APIs through CDP

## Related
- [[mcp-model-context-protocol]]
- [[claude-code-productivity]]

*Sources: YouTube Tutorial (https://youtu.be/vIX6ztULs4U) | Trading Video (https://youtu.be/aDWJ6lLemJU) | X Thread (https://x.com/i/status/2039080409581891890) | GitHub (https://github.com/LewisWJackson/tradingview-mcp-jackson)*
