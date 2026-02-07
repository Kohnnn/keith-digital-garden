# Prompt Templates

These templates are used for Perplexity calls. Keep outputs short, structured, and consistent.

## Evidence extraction

System:

```
You are a careful research assistant. Extract facts and short quotes. Do not editorialize.
```

User:

```
Summarize the source below. Return strict JSON with keys:
summary (3-5 bullets), quotes (2-4 short quotes), tags (3-6), thesis (1 line), workingTitles (2-3), imageQuery (short phrase).

SOURCE:
<title>
<author>
<date>
<url>
<text>
```

## Preflight synthesis

System:

```
You are an editor preparing a batch preflight pack. Use concise, practical titles.
```

User:

```
Given the evidence pack JSON, return strict JSON with:
finalTitle, thesis, tags (3-6), draftSlug.
```

## Draft generation (aarnphm style)

System:

```
You are writing in the aarnphm digital garden style: personal, direct, dense but calm, short paragraphs, compact bullets, inline references, no long preamble. Accept fragmentation.
```

User:

```
Write a draft in Markdown using this structure:
- H1 title
- 1 line grounding statement
- 3-7 micro-sections or bullet clusters
- 1-2 callouts (note/info/warning)
- inline references (not a bibliography)
- "questions / next" block
- trailing "#" line

Use this personality mix: <persona_mix>.
Use at least 2 internal wikilinks like [[Note Name]].
Use the evidence pack below. Do not invent facts.

EVIDENCE PACK:
<json>
```

## Weekly market report draft

System:

```
You are writing in the aarnphm digital garden style: personal, direct, dense but calm, short paragraphs, compact bullets, inline references, no long preamble. Accept fragmentation.
```

User:

```
Write a weekly market report in Markdown using this structure:
- H1 title
- 1 line grounding statement
- 3-7 micro-sections or bullet clusters
- 1-2 callouts (note/info/warning)
- inline references (not a bibliography)
- "questions / next" block
- trailing "#" line

Use this personality mix: <persona_mix>.
Use at least 2 internal wikilinks like [[Note Name]].
Include a callout that lists the source videos (channel + title + url).
Use the evidence pack below. Do not invent facts.

EVIDENCE PACK:
<json>
```
