# Source Schema

This document defines the normalized record structure and the preflight pack format.

## Normalized source record

```json
{
  "id": "sha1(url)",
  "url": "https://example.com/post",
  "sourceType": "youtube | substack | web",
  "title": "",
  "author": "",
  "publishedAt": "YYYY-MM-DD",
  "fetchedAt": "YYYY-MM-DDTHH:MM:SSZ",
  "ogImage": "https://...",
  "textPath": "automation/raw/text/<id>.txt",
  "htmlPath": "automation/raw/html/<id>.html",
  "transcriptPath": "automation/raw/transcripts/<id>.vtt",
  "meta": {
    "siteName": "",
    "description": "",
    "tags": []
  }
}
```

## Evidence pack

```json
{
  "id": "...",
  "url": "...",
  "summary": ["bullet 1", "bullet 2"],
  "quotes": ["short quote", "short quote"],
  "tags": ["tag1", "tag2"],
  "thesis": "one line",
  "workingTitles": ["title a", "title b"],
  "imageQuery": "short image search query"
}
```

## Preflight pack

```yaml
---
approved: false
generated: 2026-02-04T00:00:00Z
persona_mix: [analytical, reflective, warm]
count: 100
---
```

Each entry uses this block:

```yaml
- id: <source id>
  url: <source url>
  title: <working title>
  thesis: <one line>
  tags: [tag1, tag2]
  draft_path: content/AI_Sandbox/<slug>.md
```

## Weekly preflight pack

```yaml
---
approved: false
generated: 2026-02-04T00:00:00Z
persona_mix: [analytical, pragmatic, skeptical]
count: 52
year: 2025
---
```

Each entry uses this block:

```yaml
- week: 2025-W01
  range: 2024-12-30 to 2025-01-05
  title: Weekly Market Report 2025-W01
  thesis: <one line>
  tags: [market-report, weekly, finance, 2025]
  draft_path: content/AI_Sandbox/Market_Reports/2025/<slug>.md
```

## Draft frontmatter

```yaml
---
title: ...
tags: [tag1, tag2]
draft: true
description: ...
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## Weekly evidence pack

```json
{
  "week": "2025-W01",
  "range": {"start": "2024-12-30", "end": "2025-01-05"},
  "summary": ["..."],
  "keySignals": ["..."],
  "risks": ["..."],
  "thesis": "",
  "workingTitle": "Weekly Market Report 2025-W01",
  "imageQuery": "",
  "sources": [
    {"title": "...", "url": "...", "channel": "...", "publishedAt": "YYYY-MM-DD"}
  ]
}
```
