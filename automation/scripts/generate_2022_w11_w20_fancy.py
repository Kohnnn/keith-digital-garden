from pathlib import Path
from datetime import date, timedelta


base = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2022"
)
base.mkdir(parents=True, exist_ok=True)


def week_start(year: int, week: int) -> date:
    return date.fromisocalendar(year, week, 1)


def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"


week_cfg = {
    11: {
        "kw": ["transition", "power", "risk", "structure", "trust"],
        "desc": "First Fed hike of the cycle formalized the policy transition regime.",
        "angle": "first hike handoff",
        "quote": "The first hike was not a shock; the speed of repricing was.",
        "anchors": [
            "FOMC raised rates by 25 bps and signaled tighter path",
            "Treasury curve flattened as growth-vs-tightening debate intensified",
            "BTC held near low-$40k with selective risk appetite",
        ],
        "if_breaks": "If front-end yields keep ripping while breadth fails, I treat rallies as tactical short-covering, not trend change.",
    },
    12: {
        "kw": ["risk", "resilience", "structure", "value", "logic"],
        "desc": "Post-FOMC bounce met commodity pressure and unresolved war risk.",
        "angle": "relief rally with fragile confirmation",
        "quote": "Relief is easy to print; confirmation is hard to keep.",
        "anchors": [
            "Commodities stayed elevated despite tactical cooling",
            "Equities rebounded but leadership stayed uneven",
            "BTC recovered faster than many high-beta peers",
        ],
        "if_breaks": "If commodity volatility re-accelerates, cross-asset correlation likely jumps and wipes out weak long conviction.",
    },
    13: {
        "kw": ["growth", "balance", "risk", "discipline", "value"],
        "desc": "Labor resilience improved sentiment but did not clear the inflation ceiling.",
        "angle": "strong jobs, constrained upside",
        "quote": "Good labor data buys time, not valuation freedom.",
        "anchors": [
            "US payrolls rose +431k with steady unemployment at 3.6%",
            "Rates stayed firm as markets priced faster hikes",
            "BTC reclaimed parts of the mid-$40k area before stalling",
        ],
        "if_breaks": "If wage and inflation pressure persist together, rates become the dominant risk filter again.",
    },
    14: {
        "kw": ["power", "scarcity", "risk", "structure", "trust"],
        "desc": "March FOMC minutes pushed QT and larger hikes into the center of the tape.",
        "angle": "balance-sheet shock pricing",
        "quote": "Minutes week turned abstract tightening into operating constraints.",
        "anchors": [
            "FOMC minutes outlined faster balance-sheet runoff discussions",
            "Tech and duration-sensitive names saw renewed pressure",
            "BTC rotated lower as liquidity sensitivity returned",
        ],
        "if_breaks": "If QT expectations harden further, I expect funding sensitivity to dominate narrative strength.",
    },
    15: {
        "kw": ["scarcity", "risk", "structure", "pattern", "resilience"],
        "desc": "CPI at 8.5% reset inflation expectations and pressured risk budgets.",
        "angle": "inflation apex test",
        "quote": "At 8-handle CPI, every asset gets repriced through policy risk.",
        "anchors": [
            "US CPI reached 8.5% YoY",
            "Real yields and dollar strength challenged risk premia",
            "BTC lost momentum and reverted toward lower range levels",
        ],
        "if_breaks": "If CPI does not roll over soon, valuation compression likely outruns earnings resilience.",
    },
    16: {
        "kw": ["change", "risk", "balance", "trust", "value"],
        "desc": "Late-April tape showed tactical rebounds but still poor regime stability.",
        "angle": "countertrend bounces in a tightening cycle",
        "quote": "Countertrend rallies are useful only if structure improves with them.",
        "anchors": [
            "Dollar strength persisted as a global risk headwind",
            "Equity rebounds faded quickly without broad participation",
            "BTC tracked macro beta with lower conviction quality",
        ],
        "if_breaks": "If the dollar and real yields rise together again, fragile rebound structures likely fail fast.",
    },
    17: {
        "kw": ["growth", "risk", "structure", "discipline", "power"],
        "desc": "Negative Q1 GDP print clashed with still-tight labor and inflation pressure.",
        "angle": "stagflation anxiety repricing",
        "quote": "Mixed growth signals with hot inflation creates the worst framing for risk.",
        "anchors": [
            "US Q1 GDP printed -1.6% annualized (advance)",
            "Policy path remained hawkish despite growth disappointment",
            "BTC struggled to separate from broad risk-off flows",
        ],
        "if_breaks": "If growth data weakens further while inflation stays elevated, positioning could flip from tactical long to defensive fast.",
    },
    18: {
        "kw": ["power", "transition", "risk", "structure", "value"],
        "desc": "Fed delivered 50 bps and began clearer quantitative tightening runway.",
        "angle": "front-loaded tightening",
        "quote": "The market heard 50 bps, but traded the liquidity drain path.",
        "anchors": [
            "FOMC hiked 50 bps and confirmed balance-sheet reduction plans",
            "Short-lived relief gave way to renewed risk-off positioning",
            "BTC volatility expanded with forced deleveraging pockets",
        ],
        "if_breaks": "If liquidity removal outpaces growth resilience, I expect repeated failed rebounds across high beta.",
    },
    19: {
        "kw": ["scarcity", "risk", "trust", "resilience", "logic"],
        "desc": "CPI stayed high at 8.3% and confidence in a near-term inflation peak weakened.",
        "angle": "inflation stickiness stress",
        "quote": "A small CPI cooldown was not enough to restore trust.",
        "anchors": [
            "US CPI printed 8.3% YoY, still far above policy comfort",
            "Equity breadth thinned as defensive positioning widened",
            "BTC broke lower with broader crypto deleveraging",
        ],
        "if_breaks": "If inflation decelerates too slowly, duration and crypto both stay vulnerable to repricing shocks.",
    },
    20: {
        "kw": ["risk", "structure", "value", "resilience", "balance"],
        "desc": "Late-May volatility stayed high as markets searched for a durable floor.",
        "angle": "floor-finding under tight liquidity",
        "quote": "When the floor is uncertain, process quality matters more than entry precision.",
        "anchors": [
            "Rates remained volatile with front-end policy uncertainty",
            "Equities bounced selectively but trend quality remained suspect",
            "BTC stabilized after washout but lacked broad participation",
        ],
        "if_breaks": "If failed bounces keep clustering, I keep risk tight and wait for clearer breadth and volatility compression.",
    },
}


refs = {
    11: [
        (
            "Federal Reserve - FOMC Statement (Mar 16, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220316a.htm",
            "Why it matters: first rate hike confirmed regime transition from emergency policy.",
        ),
        (
            "Federal Reserve - SEP Table (Mar 2022)",
            "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20220316.htm",
            "Why it matters: projection shift clarified path pressure for risk assets.",
        ),
        (
            "BLS CPI News Release (Mar 2022)",
            "https://www.bls.gov/news.release/archives/cpi_03102022.htm",
            "Why it matters: inflation backdrop framed the policy reaction function.",
        ),
        (
            "Reuters - Russia's invasion of Ukraine",
            "https://www.reuters.com/world/europe/russian-forces-invade-ukraine-2022-02-24/",
            "Why it matters: geopolitical tail risk kept commodity and volatility pressure elevated.",
        ),
    ],
    12: [
        (
            "Federal Reserve - FOMC Statement (Mar 16, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220316a.htm",
            "Why it matters: post-hike positioning still depended on policy signaling.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity stress remained the inflation transmission channel.",
        ),
        (
            "BLS Employment Situation (Mar 2022)",
            "https://www.bls.gov/news.release/archives/empsit_03042022.htm",
            "Why it matters: labor resilience reduced immediate growth-collapse fears.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: on-chain behavior helped separate tactical rebound from durable trend.",
        ),
    ],
    13: [
        (
            "BLS Employment Situation (Apr 2022)",
            "https://www.bls.gov/news.release/archives/empsit_04012022.htm",
            "Why it matters: payroll strength kept Fed confidence intact.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Mar 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220316.htm",
            "Why it matters: minutes detailed a more forceful tightening setup.",
        ),
        (
            "BIS Quarterly Review (Mar 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2203.htm",
            "Why it matters: cross-asset volatility mechanics clarified market fragility.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: report-based crypto checks improved conviction quality.",
        ),
    ],
    14: [
        (
            "Federal Reserve - FOMC Minutes (Mar 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220316.htm",
            "Why it matters: QT pace and size became explicit market variables.",
        ),
        (
            "BLS CPI News Release (Apr 2022)",
            "https://www.bls.gov/news.release/archives/cpi_04122022.htm",
            "Why it matters: inflation remained high enough to sustain hawkish pressure.",
        ),
        (
            "Federal Reserve - Beige Book (Apr 2022)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20220420.htm",
            "Why it matters: district-level inflation and labor imbalance confirmed broad pressure.",
        ),
        (
            "Messari - Research Reports",
            "https://messari.io/research/research-reports",
            "Why it matters: helped rank resilient sectors under liquidity withdrawal.",
        ),
    ],
    15: [
        (
            "BLS CPI News Release (Apr 2022)",
            "https://www.bls.gov/news.release/archives/cpi_04122022.htm",
            "Why it matters: 8.5% CPI reset inflation confidence and policy tolerance.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Mar 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220316.htm",
            "Why it matters: minutes reinforced the tightening trajectory.",
        ),
        (
            "BLS Employment Situation (Apr 2022)",
            "https://www.bls.gov/news.release/archives/empsit_04012022.htm",
            "Why it matters: labor strength kept room for additional policy firming.",
        ),
        (
            "Glassnode Insights - Analysis",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: leverage and holder metrics helped map crypto downside risk.",
        ),
    ],
    16: [
        (
            "Federal Reserve - Beige Book (Apr 2022)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20220420.htm",
            "Why it matters: real-economy commentary showed broad cost pressure persistence.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity path remained central to inflation expectations.",
        ),
        (
            "BIS Quarterly Review (Mar 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2203.htm",
            "Why it matters: volatility spillover framework explained fragile rebounds.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: strengthened macro-to-crypto confirmation checks.",
        ),
    ],
    17: [
        (
            "BEA - GDP Q1 2022 Advance Estimate",
            "https://www.bea.gov/news/2022/gross-domestic-product-first-quarter-2022-advance-estimate",
            "Why it matters: negative GDP print raised growth fragility concerns.",
        ),
        (
            "Federal Reserve - FOMC Statement (Mar 16, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220316a.htm",
            "Why it matters: policy path stayed hawkish despite weaker growth headline.",
        ),
        (
            "BLS CPI News Release (Apr 2022)",
            "https://www.bls.gov/news.release/archives/cpi_04122022.htm",
            "Why it matters: inflation still dominated the reaction function.",
        ),
        (
            "Reuters - Russia's invasion of Ukraine",
            "https://www.reuters.com/world/europe/russian-forces-invade-ukraine-2022-02-24/",
            "Why it matters: war-driven supply pressure sustained macro uncertainty.",
        ),
    ],
    18: [
        (
            "Federal Reserve - FOMC Statement (May 4, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220504a.htm",
            "Why it matters: 50 bps hike and QT path set a harder liquidity regime.",
        ),
        (
            "Federal Reserve - Balance Sheet Principles (May 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220504b.htm",
            "Why it matters: runoff plan translated policy into direct liquidity withdrawal.",
        ),
        (
            "BLS Employment Situation (May 2022)",
            "https://www.bls.gov/news.release/archives/empsit_05062022.htm",
            "Why it matters: labor strength supported continued tightening.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: showed how deleveraging accelerated under tighter conditions.",
        ),
    ],
    19: [
        (
            "BLS CPI News Release (May 2022)",
            "https://www.bls.gov/news.release/archives/cpi_05112022.htm",
            "Why it matters: inflation remained too high for policy easing narratives.",
        ),
        (
            "Federal Reserve - FOMC Statement (May 4, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220504a.htm",
            "Why it matters: policy tightening stayed the baseline despite market stress.",
        ),
        (
            "BIS Quarterly Review (Mar 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2203.htm",
            "Why it matters: structural volatility context helped map correlation shocks.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: provided one-line market diagnostics during crypto stress.",
        ),
    ],
    20: [
        (
            "Federal Reserve - FOMC Statement (May 4, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220504a.htm",
            "Why it matters: tightening path still anchored risk pricing into late May.",
        ),
        (
            "BLS CPI News Release (May 2022)",
            "https://www.bls.gov/news.release/archives/cpi_05112022.htm",
            "Why it matters: inflation persistence kept pressure on risk budgets.",
        ),
        (
            "Federal Reserve - Financial Stability Report (May 2022)",
            "https://www.federalreserve.gov/publications/financial-stability-report.htm",
            "Why it matters: vulnerability framing improved downside scenario planning.",
        ),
        (
            "Messari - Research",
            "https://messari.io/research",
            "Why it matters: sector-level reports helped separate durable from fragile rebounds.",
        ),
    ],
}


for w in range(11, 21):
    cfg = week_cfg[w]
    kws = cfg["kw"][:5]
    start = week_start(2022, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2022-W{w:02d}"
    prev_link = f"[[weekly-market-report-2022-W{w - 1:02d}]]"
    next_line = (
        f"- Linked from: [[weekly-market-report-2022-W{w + 1:02d}]] - Follow-up week re-tested this regime transition."
        if w < 20
        else ""
    )

    lines = [
        "---",
        f"title: {title}",
        "tags: [market-report, weekly, finance, 2022]",
        "cssclasses: [market-report]",
        "keywords:",
    ]
    lines += [f"  - {k}" for k in kws]
    lines += [
        f"note_id: {mk_note_id(start)}",
        "draft: true",
        f"description: {cfg['desc']}",
        f"created: {start.isoformat()}",
        f"updated: {end.isoformat()}",
        "---",
        "",
        f"# {title}",
        "",
        f"*see also:* {prev_link} · [[weekly-market-report-2022-W01]]",
        "",
        '<div class="keyword-row">',
    ]
    lines += [f'  <span class="inline-keyword">{k}</span>' for k in kws]
    lines += [
        "</div>",
        "",
        '<div class="market-ribbon">',
        f'  <span class="ribbon-item"><span class="inline-note">regime</span>{cfg["angle"]}</span>',
        '  <span class="ribbon-item"><span class="inline-note">mode</span>tactical with strict invalidation</span>',
        '  <span class="ribbon-item"><span class="inline-note">focus</span>rates -> breadth -> crypto</span>',
        "</div>",
        "",
        f"My read is {cfg['angle']}. I kept this week in a defensive-creative mode: defensive on size, creative on structure, because the tape rewarded process more than prediction.",
        "",
        "I tried to avoid monolithic narratives. Instead I split the week into micro-regimes: catalyst impulse, rates translation, equity breadth response, then crypto follow-through. That sequence kept me from overreacting to single-session volatility.",
        "",
        '<div class="signal-grid">',
        '  <div class="signal-card">',
        '    <div class="signal-label">macro trigger</div>',
        f"    <p>{cfg['anchors'][0]}.</p>",
        "  </div>",
        '  <div class="signal-card">',
        '    <div class="signal-label">cross-asset read</div>',
        f"    <p>{cfg['anchors'][1]}.</p>",
        "  </div>",
        '  <div class="signal-card">',
        '    <div class="signal-label">crypto pulse</div>',
        f"    <p>{cfg['anchors'][2]}.</p>",
        "  </div>",
        "</div>",
        "",
        '<details class="decision-fold">',
        "  <summary>if this breaks then...</summary>",
        f"  <p>{cfg['if_breaks']}</p>",
        "</details>",
        "",
        "> [!note] Market Pulse",
        f'> "{cfg["quote"]}"',
        "",
        "## Overall Summary",
        "- The week stayed policy-driven, with inflation and liquidity constraints setting the upper bound.",
        f"- {cfg['anchors'][0]}",
        f"- {cfg['anchors'][1]}",
        f"- {cfg['anchors'][2]}",
        "",
        "## Commentary",
        "- I treated headline velocity as noise until rates and breadth confirmed direction.",
        "- I focused on what changed in the reaction function, not what changed in the narrative.",
        "- I kept conviction conditional and sized around explicit failure points.",
        "",
        "## Rates & Liquidity",
        "- Front-end repricing and balance-sheet expectations remained the dominant market drivers.",
        "- Liquidity quality deteriorated in bursts, increasing the odds of failed follow-through.",
        "",
        "## Equities",
        "- Index moves frequently overstated underlying participation quality.",
        "- I favored durable cash-flow and balance-sheet profiles over crowded long-duration themes.",
        "",
        "## Commodities & FX",
        "- Commodity behavior continued to shape inflation credibility and macro risk premiums.",
        "- Dollar tone stayed a high-frequency filter for global risk appetite.",
        "",
        "## Crypto Macro",
        "- Crypto remained highly sensitive to global liquidity and rates volatility.",
        "- I used participation and leverage behavior as confirmation before adding risk.",
        "",
        "## Positioning & Flow",
        "- Positioning looked tactical, with quick reversals around macro headlines.",
        "- I kept entries modular and reduced gross exposure when correlation spikes returned.",
        "",
        "## Outlook Next Week",
        "- Main risk: policy and inflation repricing tighten conditions faster than growth can absorb.",
        "- Main opportunity: volatility compresses while breadth and liquidity quality improve together.",
        "",
        "## References",
    ]

    for title_ref, url, why in refs[w]:
        lines += [
            f"> [!ref] {title_ref}",
            f"> {url}",
            f"> {why}",
            "",
        ]

    lines += [
        "## questions / next",
        "- Short answer from last week: process discipline outperformed broad directional conviction.",
        "- Which variable gets first priority next week: front-end rates, breadth, or commodity volatility?",
        "- What would force me to switch from tactical to structural risk-taking?",
        "- Where is correlation hiding fragility in my current read?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / policy 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed - official releases, macro news tape, and report-style research.",
        "",
        "### Counter-thesis",
        "This view breaks if inflation cools faster than expected while breadth broadens and funding stress eases.",
        "",
    ]

    if next_line:
        lines += ["## Cross Review", next_line, ""]

    lines += [
        "## linkage",
        '<div class="linkage-tree">',
        '  <div class="linkage-tree-title">linkage tree</div>',
        "  <ul>",
        "    <li>keywords",
        "      <ul>",
    ]
    lines += [f"        <li>[[{k}]]</li>" for k in kws]
    lines += [
        "      </ul>",
        "    </li>",
        "    <li>weekly chain",
        "      <ul>",
        f"        <li>{prev_link}</li>",
        "      </ul>",
        "    </li>",
        "  </ul>",
        "</div>",
        "",
        "#",
        "",
    ]

    (base / f"weekly-market-report-2022-W{w:02d}.md").write_text(
        "\n".join(lines), encoding="utf-8"
    )


# bridge from W10 to W11
w10 = base / "weekly-market-report-2022-W10.md"
if w10.exists():
    t = w10.read_text(encoding="utf-8")
    lf = "- Linked from: [[weekly-market-report-2022-W11]] - Follow-up week re-tested this regime transition."
    if lf not in t:
        if "## Cross Review" in t:
            t = t.replace("## Cross Review\n", "## Cross Review\n" + lf + "\n")
        else:
            t = t.replace("\n## linkage", "\n## Cross Review\n" + lf + "\n\n## linkage")
        w10.write_text(t, encoding="utf-8")

print("Created 2022 W11-W20 fancy market reports")
