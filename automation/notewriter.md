# notewriter ingestion template

Goal: Collect public sources, cluster by topic, draft notes, and link by tags.

## APIs
- Official HN API: https://github.com/HackerNews/API
  - Base: https://hacker-news.firebaseio.com/v0/
  - Use for top/new/ask/show/job feeds and item details.
- Algolia HN Search API: https://hn.algolia.com/api
  - Use for historical queries and date windows.

## Flow
1) **Collect candidates**
- Pull top/new stories from Firebase API.
- For backfill, query Algolia with keywords and date filters.

2) **Filter and score**
- Score by points, comments, and domain trust.
- Prioritize: economy/finance, AI/new tech, crypto, security, future tech, daily interesting.

3) **Fetch sources**
- Resolve each item to a public source URL.
- Pull OG image from the source page.
- If paywalled, keep the link and use accessible coverage.

4) **Cluster**
- Group 2-5 items into one note when they share a theme.
- If a single item is strong enough, write a standalone note.

5) **Classify note type**
- TJ: fast-moving tech and market signals.
- GN: evergreen or descriptive coverage.
- TP: reflective, opinionated analysis.
- RD: multi-source synthesis.

6) **Draft**
- Use the `notewriter.md` workflow rules.
- Do not mention source platforms inside the body.
- Use tags for branching and include a linkage tree.
- Add `keywords` (max 5, 1-2 words each) to help branch beyond tags.

7) **Place output**
- Drafts go to `content/AI_Sandbox/<Type>/<Year>/`.
- Manual review required before promotion.

## Example Algolia query
```
GET https://hn.algolia.com/api/v1/search?query=log4j&tags=story&numericFilters=created_at_i>=1638316800,created_at_i<=1640995200
```

## Example Firebase usage
```
GET https://hacker-news.firebaseio.com/v0/topstories.json
GET https://hacker-news.firebaseio.com/v0/item/<id>.json
```
