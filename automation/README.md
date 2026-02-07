# Automation Pipeline

This folder contains the source intake and batch-writing pipeline for the digital garden.
It is optimized for 100 drafts with a single approval step and keeps AI output in `content/AI_Sandbox/`.

## Quick start

1) Put URLs into `automation/sources/inbox/*.txt` (one URL per line).
2) Run preflight to generate the approval pack.
3) Mark the pack approved and run draft generation.

```bash
node automation/pipeline.mjs preflight --limit 100 --persona "analytical,reflective,warm"
node automation/pipeline.mjs generate --preflight automation/output/preflight/preflight-latest.md

# weekly market reports (merged channels)
node automation/pipeline.mjs weekly-preflight --year 2025 --persona "analytical,pragmatic,skeptical"
node automation/pipeline.mjs weekly-generate --preflight automation/output/preflight/preflight-weekly-latest.md
node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04
node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04 --refresh true
node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04 --focuschannel "<steve_le_url>" --macrochannel "https://www.youtube.com/@intothecryptoverse/videos" --refresh true
node automation/pipeline.mjs weekly-generate --week 2025-W11 --crosslink true --crossreason "Follow-up reflection added by later week."
node automation/pipeline.mjs weekly-references --year 2025 --weekstart 2025-W01 --weekend 2025-W05 --refsources "bls.gov,bea.gov,federalreserve.gov,treasury.gov,fred.stlouisfed.org,ft.com,wsj.com,bloomberg.com,reuters.com"
node automation/pipeline.mjs news-update --source content/mark-memo/2025/weekly-market-report-2025-W25.md --title "Tariff Pause Update" --summary "Policy pause shifted risk premium"

# caching for large channels
node automation/pipeline.mjs cache-youtube --year 2025 --url "https://www.youtube.com/@Channel/videos"
node automation/pipeline.mjs weekly-preflight-cache --year 2025

# optional: smaller date ranges to avoid rate limits
node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250101 --datebefore 20250331 --url "https://www.youtube.com/@Channel/videos"

# optional: playlist chunking
node automation/pipeline.mjs cache-youtube --year 2025 --playliststart 1 --playlistend 120 --url "https://www.youtube.com/@Channel/videos"
node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250101 --datebefore 20250331 --playlistreverse true --url "https://www.youtube.com/channel/<id>/videos"
```

## Environment variables

Set these in your shell or a local `.env` file (not committed):

- `PPLX_API_KEY`
- `PPLX_BASE_URL` (default: `https://api.perplexity.ai`)
- `PPLX_MODEL` (default: `perplexity/sonar-pro`)
- `BRAVE_API_KEY` (optional, for image search)
- `BRAVE_BASE_URL` (default: `https://api.search.brave.com/res/v1`)
- `SERPER_API_KEY` (optional, for web search references)
- `SERPER_API_KEY_1`, `SERPER_API_KEY_2`, `SERPER_API_KEY_3` (optional key rotation)
- `SERPER_API_KEYS` (optional comma list, overrides rotation order)
- `SERPER_BASE_URL` (default: `https://google.serper.dev`)
- `YT_DLP_COOKIES_FROM_BROWSER` (optional, e.g. `chrome:Profile 3`)
- `YT_DLP_SUB_LANGS` (optional, default: `vi,en`)

`.env` can live in repo root or `automation/.env`.

## Folder map

- `automation/sources/inbox/` drop URL lists here
- `automation/sources/archived/` processed input files
- `automation/output/preflight/` approval packs
- `automation/output/reports/` run logs
- `automation/raw/` raw fetches, transcripts, normalized records
- `content/AI_Sandbox/` generated drafts

## Notes

- Drafts always include `draft: true` and must be manually reviewed before publishing.
- Weekly reports include `note_id` using `YYMMDD{TYPE}{NN}` (default type `MR`).
- `yt-dlp` is required for YouTube metadata and transcripts.
- Perplexity is used for summaries, outlines, and draft writing.
- Brave Search is used for image discovery when `og:image` is missing.
- Serper (or Brave web search as fallback) can be used to fetch weekly reference links.
- Serper keys rotate automatically; exhausted keys are skipped until restart.
- Use `weekly-references` to append/update the `## References` block in existing weekly reports.
- Use `--crosslink true` to inject a backward link inside commentary and append a `Linked from` entry in the previous week.
- `news-update` creates a news update note under `content/mark-memo/news/<year>/` and appends a link in the source note's `## Updates` block.
- YouTube channel or playlist URLs will expand into individual video links.
- Substack publication URLs will expand via `/feed` when possible.
- Weekly mode merges all channels into one report per ISO week for the selected year.
- Use `cache-youtube` when full channel fetches are slow, then build preflight from cache.
- `yt-dlp` uses Node as its JS runtime; adjust `ytDlp` in `automation/config.json` if needed.
- See `automation/docs/source-policy.md` for content reuse rules.

## Security

Do not store API keys in the repo. If a key was posted in chat, rotate it immediately and use an environment variable instead.
