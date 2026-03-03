# X Link Intake README

This folder is the input queue for weekly X post links used in market report generation.

## Why file-based intake

- More reliable than pasting hundreds of links in chat.
- Easier to version, rerun, and audit.
- Works with bulk automation runs.

## File naming

- Weekly file format:
  - `YYYY-WWW-x-posts.txt`
- Example:
  - `2023-W01-x-posts.txt`

### Temporary intake mode (default)

- Use one rolling file for quick workflows:
  - `automation/sources/inbox/_temp_x_links.md`
- Paste links there first.
- Process with `process_weekly_x_links.py` and `--output-dir` set to target week.
- Archive automatically after processing using:
  - `--archive-input --clear-temp-after-archive`

## Line format

One URL per line:

```text
https://x.com/user/status/1234567890
```

Optional note after `|`:

```text
https://x.com/user/status/1234567890 | cpi chart
```

Comments are allowed with `#`:

```text
# tier 1 official accounts
https://x.com/federalreserve/status/...
```

## Thread handling

- If you want thread context, include multiple URLs from that thread.
- Do not rely on a single root URL to capture all sub-posts.

## Recommended volume

- Minimum usable: 25 links/week
- Preferred quality range: 50-80 links/week
- High coverage: 100+ links/week

For 10-week bulk updates:
- Optimal total volume: 600-800 links (about 60-80 per week).

## Processing command (weekly)

Run from `keith-digital-garden/`:

```bash
python "automation/scripts/process_weekly_x_links.py" --input "automation/sources/inbox/2023-W01-x-posts.txt" --output-dir "content/attachments/market/2023/W01" --week-keywords "cpi,jobs,fomc,yields,dollar,btc,liquidity"
```

Temporary file workflow (no week in input filename):

```bash
python "automation/scripts/process_weekly_x_links.py" --output-dir "content/attachments/market/2023/W01" --week-keywords "cpi,jobs,fomc,yields,dollar,btc,liquidity" --archive-input --clear-temp-after-archive
```

Outputs in week folder:
- `source-manifest.md`
- `weekly_x_context.json`
- downloaded local chart images

Archive output:
- `automation/sources/archive/<year>/<year>-W<week>-x-posts.md`

## Batch run tip (10 weeks)

- Prepare `2023-W01-x-posts.txt` through `2023-W10-x-posts.txt` first.
- Process week-by-week to keep failures isolated and easy to debug.
- After each week, quickly inspect:
  - selected image count (target 3-6)
  - manifest quality (accounts + dates + relevance)
