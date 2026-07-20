---
title: "HN Summary: AI Eating the Engineering Career Ladder"
date: 2026-03-31
tags: [hn, tech, ai, software-engineering, careers, llm]
---

# HN Summary: AI Eating the Engineering Career Ladder

A QCon London talk by Alasdair Allan went viral on HN, arguing that AI has destroyed the path to becoming a senior engineer. AI handles the tasks that used to train junior developers — writing boilerplate, fixing bugs, implementing features — with near-100% success for tasks under 4 minutes and 50% for hour-long tasks. The ladder isn't missing rungs; it's missing the process that created the people who built the ladder in the first place.

## The Story

Allan's talk at QCon London synthesized hard data to make a provocative point: AI has perfected the tasks that used to comprise a decade of an engineering career, and those tasks were never just tasks — they were the mechanism that built judgment, intuition, and the ability to supervise the systems we now delegate to AI.

The evidence is sobering. METR benchmarks show AI can complete 4-minute tasks (small bug fixes, boilerplate) with near-100% reliability. But for tasks over 4 hours — requiring the architectural judgment built by years of experience — AI success rates drop below 10%. Meanwhile, a separate METR study found that 50% of AI-generated PRs that pass automated tests would not be merged by maintainers. Average fix time for AI PR quality issues: 42 minutes, or a third of total human task time.

The METR follow-up study — trying to measure AI's effect on experienced developers — became impossible to run. Developers refused to participate without AI assistance. The tool went from optional to load-bearing before anyone understood what it was doing to the people using it.

## Key Takeaways

- METR benchmarks: AI succeeds near 100% on 4-minute tasks, ~50% on 1-hour tasks, below 10% on 4+ hour tasks
- 50% of AI-generated PRs that pass automated tests would not be merged — AI handles implementation, not craft
- METR couldn't run follow-up studies because developers refused to work without AI
- Hiring managers are increasingly seeing portfolios fall apart under questioning — "I built this" means "I prompted this"
- METR's time horizon benchmark doubles every 4-7 months, but human judgment is not doubling at the same rate
- The distinction between "writing code" and "engineering" — made by Amodei himself — proves the point

## Community Reaction

The thread was one of the most debated on the front page. Responses ranged from alarm to skepticism to defiant optimism.

The skeptics pushed back hard on the premise:

> "The busywork wasn't being done to train junior engineers — it was done because it needed doing. Jobs are self-training. If AI does the tasks, people learn on AI tasks." — jjk166

Others noted that kids growing up with AI will develop entirely different intuitions, just as developers who never learned punch card sorting aren't worse engineers for it.

> "I don't want code from someone who doesn't know the needs of the business, cannot find where to compromise effectively, doesn't understand deployment environments, and wouldn't know how to respond to an incident in production." — sublinear

A more alarming take surfaced: most "senior" work at many companies is done against management, as a concession. If AI supercharges implementation speed, expect quality to drop precipitously as the pressure to ship overrides everything else.

> "When your senior developers retire, and if the LLMs haven't caught up to their level by that time, where do you think new senior developers will come from?" — waterTanuki

## Media & Sources

> **💬 Discussion:** [QCon Talk — HN](https://news.ycombinator.com/item?id=47574346) — 71 pts, 21 comments
> **💬 Discussion:** [Do Your Own Writing — HN](https://news.ycombinator.com/item?id=47573519) — 323 pts, 101 comments
> **🔗 Read:** [QCon London transcript](https://negroniventurestudios.com/2026/03/19/the-ladder-is-missing-rungs/) — full talk text
> **🔗 Read:** [Don't Let AI Write For You](https://alexhwoods.com/dont-let-ai-write-for-you/) — argument for maintaining writing discipline
> **🔗 Read:** [METR time horizons benchmark](https://metr.org/time-horizons/) — capability data
> **🖼️ Visual:** ![[attachments/hn/2026/metr-capability-curve.jpg|METR capability curve]]
