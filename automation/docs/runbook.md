# Runbook

## Prereqs

- Node >= 22
- `yt-dlp` available in PATH for YouTube metadata and captions
- Optional: set `PPLX_API_KEY` and `BRAVE_API_KEY` in `.env` at repo root or `automation/.env`.
- Optional: set `SERPER_API_KEY` to enable reference link search.
- Optional: set `SERPER_API_KEY_1`, `SERPER_API_KEY_2`, `SERPER_API_KEY_3` to rotate keys.
- Optional: set `SERPER_API_KEYS` to a comma-separated key list (overrides rotation order).
- Optional: set `YT_DLP_COOKIES_FROM_BROWSER` (e.g. `chrome:Profile 3`) to reduce rate limits.
- Optional: set `YT_DLP_SUB_LANGS` (default: `vi,en`) to prefer Vietnamese captions.

## Intake

Drop links into:

- `automation/sources/inbox/*.txt`

One URL per line. Lines starting with `#` are ignored.

## Preflight

```bash
node automation/pipeline.mjs preflight --limit 100 --persona "analytical,reflective,warm"
```

This writes a pack to:

- `automation/output/preflight/preflight-latest.md`

Set `approved: true` in that file.

## Generate drafts

```bash
node automation/pipeline.mjs generate --preflight automation/output/preflight/preflight-latest.md
```

## Weekly market reports (merged channels)

```bash
node automation/pipeline.mjs weekly-preflight --year 2025 --persona "analytical,pragmatic,skeptical"
```

This writes:

- `automation/output/preflight/preflight-weekly-latest.md`

Set `approved: true`, then run:

```bash
node automation/pipeline.mjs weekly-generate --preflight automation/output/preflight/preflight-weekly-latest.md
node automation/pipeline.mjs weekly-generate --week 2025-W01 --references true --refsources "bls.gov,bea.gov,federalreserve.gov"
node automation/pipeline.mjs weekly-references --year 2025 --weekstart 2025-W01 --weekend 2025-W05 --refsources "bls.gov,bea.gov,federalreserve.gov,treasury.gov,fred.stlouisfed.org,ft.com,wsj.com,bloomberg.com,reuters.com"
node automation/pipeline.mjs weekly-generate --week 2025-W11 --crosslink true --crossreason "Follow-up reflection added by later week."
```

You can generate in smaller batches:

```bash
node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04
node automation/pipeline.mjs weekly-generate --limit 10 --offset 0
node automation/pipeline.mjs weekly-generate --weekstart 2025-W01 --weekend 2025-W04 --refresh true
```

## Slow channels (cache first)

If channel fetches time out, cache them individually and build preflight from cache:

```bash
node automation/pipeline.mjs cache-youtube --year 2025 --url "https://www.youtube.com/@JosephCarlsonShow/videos"
node automation/pipeline.mjs cache-youtube --year 2025 --url "https://www.youtube.com/@MarkMeldrum/videos"
node automation/pipeline.mjs weekly-preflight-cache --year 2025
```

You can also cache by quarter to reduce rate limits:

```bash
node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250101 --datebefore 20250331 --url "https://www.youtube.com/@MarkMeldrum/videos"
node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250401 --datebefore 20250630 --url "https://www.youtube.com/@MarkMeldrum/videos"
```

Or chunk the playlist by index:

```bash
node automation/pipeline.mjs cache-youtube --year 2025 --playliststart 1 --playlistend 120 --url "https://www.youtube.com/@MarkMeldrum/videos"
node automation/pipeline.mjs cache-youtube --year 2025 --playliststart 121 --playlistend 240 --url "https://www.youtube.com/@MarkMeldrum/videos"
```

If the channel is very active, try reversing and filtering by date:

```bash
node automation/pipeline.mjs cache-youtube --year 2025 --dateafter 20250101 --datebefore 20250331 --playlistreverse true --url "https://www.youtube.com/channel/<id>/videos"
```

Drafts are written to:

- `content/AI_Sandbox/`

## Archive input files

```bash
node automation/pipeline.mjs archive
```

## Reports

- `automation/output/reports/` contains a run log with counts and errors.

## Troubleshooting

- Missing captions: try `--write-auto-sub` fallback.
- Perplexity errors: confirm `PPLX_API_KEY` and rate limits.
- Brave errors: confirm `BRAVE_API_KEY` and base URL.
