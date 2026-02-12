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
    1: {
        "kw": ["risk", "structure", "scarcity", "trust", "value"],
        "desc": "Year opened with rates repricing and fragile growth confidence.",
        "angle": "policy repricing before first hike",
        "quote": "The first week of the year already priced a different regime.",
        "anchors": [
            "US payrolls added +199k while unemployment fell to 3.9%",
            "10Y yield moved toward 1.75% as front-end pricing hardened",
            "BTC slipped from the high-$40k zone toward low-$40k support",
        ],
    },
    2: {
        "kw": ["scarcity", "power", "risk", "balance", "logic"],
        "desc": "CPI shock pushed markets deeper into inflation-first pricing.",
        "angle": "inflation persistence overrides growth optimism",
        "quote": "Hot CPI compresses narrative room for error.",
        "anchors": [
            "US CPI printed 7.0% YoY, highest in decades",
            "2Y yield repriced sharply while Nasdaq volatility expanded",
            "BTC failed to hold recovery rallies above mid-$40k",
        ],
    },
    3: {
        "kw": ["change", "risk", "structure", "discipline", "resilience"],
        "desc": "Risk assets turned defensive as macro and geopolitical stress rose.",
        "angle": "risk-off rotation with fragile liquidity",
        "quote": "When liquidity thins, correlation usually rises first.",
        "anchors": [
            "Nasdaq drawdown deepened while defensive sectors outperformed",
            "Real yields stayed volatile as hike-path uncertainty widened",
            "BTC traded heavy near low-$40k and broke lower intraday",
        ],
    },
    4: {
        "kw": ["power", "structure", "risk", "trust", "value"],
        "desc": "FOMC week validated tighter policy trajectory and reduced valuation tolerance.",
        "angle": "Fed signal hardens regime transition",
        "quote": "Policy clarity reduces confusion, not necessarily volatility.",
        "anchors": [
            "FOMC signaled first hike likely by March",
            "10Y briefly tested near 1.9% while growth stocks stayed pressured",
            "BTC traded below $40k before stabilizing",
        ],
    },
    5: {
        "kw": ["growth", "risk", "pattern", "balance", "value"],
        "desc": "Strong jobs and mixed earnings created a selective bid, not broad relief.",
        "angle": "macro resilience but valuation still constrained",
        "quote": "A strong labor print helps confidence, not duration math.",
        "anchors": [
            "US payrolls added +467k with prior revisions higher",
            "Wage growth remained elevated near 5.7% YoY",
            "BTC bounced from mid-$30k into low-$40k but follow-through stayed uneven",
        ],
    },
    6: {
        "kw": ["scarcity", "risk", "discipline", "structure", "trust"],
        "desc": "Another CPI beat reinforced aggressive tightening expectations.",
        "angle": "inflation ceiling tightens risk budget",
        "quote": "Each upside inflation surprise narrows the margin for narrative trades.",
        "anchors": [
            "US CPI accelerated to 7.5% YoY",
            "Rate-hike path shifted toward faster front-loaded tightening",
            "BTC stayed rangebound with sharp two-way liquidation moves",
        ],
    },
    7: {
        "kw": ["power", "logic", "risk", "structure", "resilience"],
        "desc": "FOMC minutes kept balance-sheet tightening in focus across assets.",
        "angle": "liquidity withdrawal becomes central narrative",
        "quote": "Balance-sheet discussions changed the market's volatility baseline.",
        "anchors": [
            "FOMC minutes highlighted readiness to reduce the balance sheet",
            "Credit and equity dispersion widened beneath index levels",
            "BTC traded in a compressed range ahead of geopolitical escalation",
        ],
    },
    8: {
        "kw": ["change", "risk", "trust", "resilience", "value"],
        "desc": "Russia's invasion of Ukraine triggered a global risk and commodity shock.",
        "angle": "geopolitical shock collides with inflation regime",
        "quote": "Shock weeks test process, not conviction slogans.",
        "anchors": [
            "Brent crude spiked above $100 while safe-haven flows accelerated",
            "Global equities sold off before partial reflex rebounds",
            "BTC volatility surged, then stabilized as liquidity rotated",
        ],
    },
    9: {
        "kw": ["scarcity", "power", "risk", "structure", "discipline"],
        "desc": "Commodity pressure and policy uncertainty kept markets highly tactical.",
        "angle": "commodity shock drives cross-asset repricing",
        "quote": "When commodities lead, macro narratives reprice faster than fundamentals.",
        "anchors": [
            "Energy and metals stayed elevated as supply risk dominated",
            "US payrolls rose +678k while policy tightening remained on track",
            "BTC rebounded toward mid-$40k but stayed headline-sensitive",
        ],
    },
    10: {
        "kw": ["scarcity", "risk", "structure", "value", "transition"],
        "desc": "Hot inflation and war uncertainty set the stage for a harder policy handoff.",
        "angle": "pre-hike tension with inflation still uncontained",
        "quote": "The setup into the first hike was about damage control, not upside chase.",
        "anchors": [
            "US CPI reached 7.9% YoY, keeping policy pressure elevated",
            "Rates stayed volatile while equities failed to sustain relief rallies",
            "BTC held better than some high-beta assets but lacked durable breakout",
        ],
    },
}


refs = {
    1: [
        (
            "BLS Employment Situation (Jan 2022)",
            "https://www.bls.gov/news.release/archives/empsit_01072022.htm",
            "Why it matters: labor data set the opening risk tone for 2022.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Dec 2021 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20211215.htm",
            "Why it matters: minutes pushed the market toward a faster normalization path.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: gave a macro-financial frame for early-2022 volatility.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: on-chain trend context helped separate panic from distribution.",
        ),
    ],
    2: [
        (
            "BLS CPI News Release (Jan 2022)",
            "https://www.bls.gov/news.release/archives/cpi_01122022.htm",
            "Why it matters: 7.0% CPI reinforced inflation-first pricing.",
        ),
        (
            "Federal Reserve - Beige Book (Jan 2022)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20220112.htm",
            "Why it matters: district-level inflation and labor comments confirmed pressure breadth.",
        ),
        (
            "CoinDesk Research - 2021 Annual Crypto Review",
            "https://downloads.coindesk.com/research/2021-annual-crypto-review-coindesk-research.pdf",
            "Why it matters: year-end crypto structure gave context for weak January follow-through.",
        ),
        (
            "Messari - Research Reports",
            "https://messari.io/research/research-reports",
            "Why it matters: sector-level analytics helped rank relative crypto risk.",
        ),
    ],
    3: [
        (
            "BEA - GDP Q4 2021 Advance Estimate",
            "https://www.bea.gov/news/2022/gross-domestic-product-fourth-quarter-and-year-2021-advance-estimate",
            "Why it matters: growth composition mattered more than headline strength.",
        ),
        (
            "Federal Reserve - FOMC Statement (Jan 26, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220126a.htm",
            "Why it matters: market accepted that hikes were imminent.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity pressure raised inflation persistence risk.",
        ),
        (
            "Glassnode Insights - Analysis",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: holder behavior and leverage data improved downside mapping.",
        ),
    ],
    4: [
        (
            "Federal Reserve - FOMC Statement (Jan 26, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220126a.htm",
            "Why it matters: formal signal of near-term hikes reshaped valuation assumptions.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Jan 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220126.htm",
            "Why it matters: balance-sheet focus amplified liquidity concerns.",
        ),
        (
            "BLS Employment Situation (Jan 2022)",
            "https://www.bls.gov/news.release/archives/empsit_01072022.htm",
            "Why it matters: labor strength kept policy confidence intact.",
        ),
        (
            "IMF - Global Financial Stability Report (Oct 2021)",
            "https://www.imf.org/en/Publications/GFSR/Issues/2021/10/12/global-financial-stability-report-october-2021",
            "Why it matters: vulnerability map remained relevant as rates repriced.",
        ),
    ],
    5: [
        (
            "BLS Employment Situation (Feb 2022)",
            "https://www.bls.gov/news.release/archives/empsit_02042022.htm",
            "Why it matters: strong payroll growth delayed hard-landing narratives.",
        ),
        (
            "Federal Reserve - Monetary Policy Report (Feb 2022)",
            "https://www.federalreserve.gov/monetarypolicy/mpr_default.htm",
            "Why it matters: policy communication clarified inflation and labor tradeoffs.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: improved understanding of volatility spillovers across assets.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: report-level crypto metrics helped avoid headline overreaction.",
        ),
    ],
    6: [
        (
            "BLS CPI News Release (Feb 2022)",
            "https://www.bls.gov/news.release/archives/cpi_02102022.htm",
            "Why it matters: inflation acceleration drove a more hawkish rates path.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Jan 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220126.htm",
            "Why it matters: liquidity withdrawal became a first-order market variable.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity tightness reinforced persistent inflation risk.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: positioning data showed unstable short-term conviction.",
        ),
    ],
    7: [
        (
            "Federal Reserve - FOMC Minutes (Jan 2022 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20220126.htm",
            "Why it matters: balance-sheet and hike sequencing tightened risk conditions.",
        ),
        (
            "BLS Retail Sales News Release (Jan 2022)",
            "https://www.census.gov/retail/index.html",
            "Why it matters: demand resilience versus inflation drag shaped growth expectations.",
        ),
        (
            "Messari - Research",
            "https://messari.io/research",
            "Why it matters: sector decomposition helped identify where crypto risk concentrated.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: cross-asset linkages explained synchronized volatility.",
        ),
    ],
    8: [
        (
            "Reuters - Russian forces invade Ukraine",
            "https://www.reuters.com/world/europe/russian-forces-invade-ukraine-2022-02-24/",
            "Why it matters: invasion became the dominant global macro shock.",
        ),
        (
            "Federal Reserve - Monetary Policy Report (Feb 2022)",
            "https://www.federalreserve.gov/monetarypolicy/mpr_default.htm",
            "Why it matters: pre-war policy backdrop remained inflation-constrained.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity spike translated quickly into inflation risk premia.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: helped frame crypto reaction as liquidity plus headline shock.",
        ),
    ],
    9: [
        (
            "BLS Employment Situation (Mar 2022)",
            "https://www.bls.gov/news.release/archives/empsit_03042022.htm",
            "Why it matters: labor strength gave Fed room to prioritize inflation.",
        ),
        (
            "Reuters - Russian forces invade Ukraine",
            "https://www.reuters.com/world/europe/russian-forces-invade-ukraine-2022-02-24/",
            "Why it matters: war-driven supply risk sustained commodity pressure.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: useful lens for transmission from rates to risky assets.",
        ),
        (
            "Glassnode Insights - Analysis",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: on-chain stress markers improved crypto downside mapping.",
        ),
    ],
    10: [
        (
            "BLS CPI News Release (Mar 2022)",
            "https://www.bls.gov/news.release/archives/cpi_03102022.htm",
            "Why it matters: CPI at 7.9% cemented aggressive tightening expectations.",
        ),
        (
            "Federal Reserve - FOMC Statement (Jan 26, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220126a.htm",
            "Why it matters: market still traded off guidance into the first-hike window.",
        ),
        (
            "BEA - GDP Q4 2021 Advance Estimate",
            "https://www.bea.gov/news/2022/gross-domestic-product-fourth-quarter-and-year-2021-advance-estimate",
            "Why it matters: growth backdrop mattered for how much tightening assets could absorb.",
        ),
        (
            "Messari - Research Reports",
            "https://messari.io/research/research-reports",
            "Why it matters: report-driven checks helped avoid directional overconfidence.",
        ),
    ],
}


for w in range(1, 11):
    cfg = week_cfg[w]
    kws = cfg["kw"][:5]
    start = week_start(2022, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2022-W{w:02d}"
    prev_link = (
        f"[[weekly-market-report-2022-W{w - 1:02d}]]"
        if w > 1
        else "[[weekly-market-report-2021-W52]]"
    )
    next_line = (
        f"- Linked from: [[weekly-market-report-2022-W{w + 1:02d}]] - Follow-up week re-tested this regime transition."
        if w < 10
        else ""
    )

    lines = [
        "---",
        f"title: {title}",
        "tags: [market-report, weekly, finance, 2022]",
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
        f"*see also:* {prev_link} · [[weekly-market-report-2021-W40]]",
        "",
        '<div class="keyword-row">',
    ]
    lines += [f'  <span class="inline-keyword">{k}</span>' for k in kws]
    lines += [
        "</div>",
        "",
        f"My read is {cfg['angle']}. I treated this tape as regime work, not hero-trade territory, because the market kept switching from macro certainty to headline reflex within hours.",
        "",
        "I kept my process simple: rate path first, liquidity second, breadth third, crypto confirmation last. When one leg of that chain broke, I reduced risk instead of forcing a narrative.",
        "",
        f"The anchors this week were clear: {cfg['anchors'][0].lower()}, {cfg['anchors'][1].lower()}, and {cfg['anchors'][2].lower()}. Those signals gave me a framework for sizing, not prediction.",
        "",
        "What I want to see next week is cleaner participation and less event-driven correlation. If that improves, I can lean in; if not, I stay tactical and cash-aware.",
        "",
        "> [!note] Market Pulse",
        f'> "{cfg["quote"]}"',
        "",
        "## Overall Summary",
        "- Macro stayed dominant, with inflation and policy expectations setting the risk ceiling.",
        f"- {cfg['anchors'][0]}",
        f"- {cfg['anchors'][1]}",
        f"- {cfg['anchors'][2]}",
        "",
        "## Commentary",
        "- I prioritized causal sequencing over single-headline interpretation.",
        "- I treated relief rallies as tactical until breadth and liquidity confirmed.",
        "- I sized for uncertainty and kept invalidation explicit.",
        "",
        "## Rates & Liquidity",
        "- Front-end rates and Fed messaging remained the strongest macro transmitters.",
        "- Liquidity conditions still allowed rebounds, but with lower tolerance for valuation stretch.",
        "",
        "## Equities",
        "- Index resilience often masked narrow leadership and factor churn.",
        "- I favored cash-flow and pricing-power profiles over long-duration narratives.",
        "",
        "## Commodities & FX",
        "- Commodity and FX action kept validating inflation persistence risk.",
        "- Dollar behavior remained a high-signal filter for global risk appetite.",
        "",
        "## Crypto Macro",
        "- Crypto traded as a high-beta expression of global liquidity and policy repricing.",
        "- I watched leverage flushes and participation quality before trusting upside continuation.",
        "",
        "## Positioning & Flow",
        "- Positioning looked tactical and event-driven rather than trend-conviction heavy.",
        "- I kept entries staggered and reduced size when correlation spikes returned.",
        "",
        "## Outlook Next Week",
        "- Main risk: inflation and policy repricing tighten financial conditions faster than expected.",
        "- Main opportunity: volatility compresses while breadth broadens across risk assets.",
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
        "- Short answer from last week: tactical discipline worked better than broad conviction.",
        "- Which signal should lead my risk map next week: rates, breadth, or volatility?",
        "- What would invalidate my current regime label quickly?",
        "- Where am I underestimating second-order effects from policy and commodities?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / scarcity 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed - official macro releases plus market news and research reports.",
        "",
        "### Counter-thesis",
        "This view breaks if inflation cools faster than expected while participation broadens and rates volatility fades.",
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


# add bridge link to 2021-W52
w52 = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2021\weekly-market-report-2021-W52.md"
)
if w52.exists():
    t = w52.read_text(encoding="utf-8")
    lf = "- Linked from: [[weekly-market-report-2022-W01]] - Follow-up week re-tested this regime transition."
    if lf not in t:
        if "## Cross Review" in t:
            t = t.replace("## Cross Review\n", "## Cross Review\n" + lf + "\n")
        else:
            t = t.replace("\n## linkage", "\n## Cross Review\n" + lf + "\n\n## linkage")
        w52.write_text(t, encoding="utf-8")

print("Created 2022 W01-W10 market reports")
