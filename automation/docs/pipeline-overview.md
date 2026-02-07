# Pipeline Overview

This pipeline turns source links into AI-assisted drafts while preserving the aarnphm writing cadence and the Airlock Protocol.

## Goals

- One confirmation step for up to 100 drafts.
- AI output isolated in `content/AI_Sandbox/`.
- Consistent style: aarnphm structure + selectable personality mix.
- Full traceability: every draft links back to source evidence.
- Support profile intake (YouTube channels/playlists, Substack publication feeds).
- Support weekly market reports merged across channels.

## Stages

1) Intake
- Read URLs from `automation/sources/inbox/`.
- Detect source type: YouTube, Substack, or web article.
- Expand profiles/playlists into item URLs (YouTube channel/playlist, Substack `/feed`).
- Deduplicate by URL hash.

2) Evidence
- YouTube: `yt-dlp` metadata + captions.
- Substack: RSS or article HTML.
- Web: HTML fetch + metadata extraction.
- Store normalized records in `automation/raw/`.
- Evidence packs are small, factual summaries used to draft.

3) Preflight (single approval)
- Generate a 100-item pack:
  - Working title
  - One-line thesis
  - Tag suggestions
  - Draft file path
- Optional image query for Brave image search
- Human flips `approved: true` in the pack once.

3a) Weekly preflight (market reports)
- Group YouTube videos by ISO week for the target year.
- Merge all channels into one report per week.
- Build and cache a weekly evidence pack for each week.

4) Draft generation
- Build drafts from evidence packs using the aarnphm template.
- Apply a fixed personality mix for the batch.
- Insert callouts and inline references.
- Write to `content/AI_Sandbox/` with `draft: true`.
- If `og:image` is missing, Brave search is used with the image query.
- Images are optional and only included when a relevant chart source is found.

4a) Weekly report generation
- Writes to `content/AI_Sandbox/Market_Reports/<year>/`.
- Includes a source video callout for traceability.

5) Archive
- Move processed input files to `automation/sources/archived/YYYY-MM/`.
- Write a run report to `automation/output/reports/`.

## Style constraints

- Title then immediate content.
- 3-7 micro-sections or bullet clusters.
- At least 2 internal links (wikilinks).
- Inline references, not a long bibliography.
- One “questions / next” block.
- Trailing `#` line to prevent transclude leakage.
- Keep vocabulary consistent with the aarnphm baseline; let personality shift stance, not tone.

## Airlock Protocol alignment

- All AI output remains in `content/AI_Sandbox/`.
- Human review required before moving to permanent folders.
- Content reuse follows `automation/docs/source-policy.md`.
