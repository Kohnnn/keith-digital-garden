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
    21: {
        "kw": ["risk", "structure", "resilience", "trust", "value"],
        "desc": "Post-crash stabilization attempt met weak breadth and fragile confidence.",
        "phase": ["shock decay", "liquidity check", "selective rebound"],
        "anchors": [
            "equities tried to rebound but internals stayed narrow",
            "rates volatility remained elevated despite tactical relief",
            "btc held above panic lows but conviction stayed thin",
        ],
        "note": "I treated this as repair mode, not trend renewal.",
    },
    22: {
        "kw": ["growth", "risk", "balance", "discipline", "logic"],
        "desc": "Labor data stayed firm while inflation expectations kept pressure on duration.",
        "phase": ["macro resilience", "valuation friction", "beta pruning"],
        "anchors": [
            "us payrolls rose +390k with unemployment at 3.6%",
            "rates remained hostile to long-duration leadership",
            "btc and majors bounced but failed to reset structure",
        ],
        "note": "Strong labor delayed panic but did not restore a broad risk bid.",
    },
    23: {
        "kw": ["scarcity", "power", "risk", "structure", "trust"],
        "desc": "Inflation fear and commodity stress kept global risk pricing defensive.",
        "phase": ["inflation pulse", "commodity drag", "position reset"],
        "anchors": [
            "energy complex stayed elevated with supply anxiety unresolved",
            "equity leadership rotated into defensives and cash-flow quality",
            "btc tracked risk-off waves with limited upside persistence",
        ],
        "note": "Commodity pressure kept the inflation ceiling active across asset classes.",
    },
    24: {
        "kw": ["transition", "power", "risk", "structure", "value"],
        "desc": "CPI shock and 75 bps hike forced a harder policy-transition repricing.",
        "phase": ["cpi shock", "policy reset", "capitulation risk"],
        "anchors": [
            "us cpi printed 8.6% yoy and reset inflation-peak hopes",
            "fomc delivered a 75 bps hike and front-loaded tightening",
            "btc broke down toward cycle lows during deleveraging stress",
        ],
        "note": "This was a regime checkpoint week, not a normal dip-buy setup.",
    },
    25: {
        "kw": ["risk", "resilience", "structure", "pattern", "balance"],
        "desc": "Post-FOMC rebound emerged, but liquidity quality stayed fragile.",
        "phase": ["bear rally", "short-cover", "confirmation test"],
        "anchors": [
            "equities rallied sharply from oversold conditions",
            "rates and dollar eased just enough to allow tactical risk-on",
            "btc bounced off lows but participation stayed selective",
        ],
        "note": "I respected the bounce but needed breadth before upgrading it.",
    },
    26: {
        "kw": ["change", "risk", "discipline", "structure", "trust"],
        "desc": "Late-June tape shifted from panic to process-driven range behavior.",
        "phase": ["volatility fade", "range build", "signal sorting"],
        "anchors": [
            "cross-asset volatility moderated from mid-june extremes",
            "equities held tactical gains but leadership remained unstable",
            "btc formed a range while leverage conditions cleaned up",
        ],
        "note": "Range markets reward patience more than prediction.",
    },
    27: {
        "kw": ["growth", "risk", "structure", "value", "logic"],
        "desc": "Growth slowdown narrative strengthened as recession chatter broadened.",
        "phase": ["growth scare", "rates pause hopes", "defensive tilt"],
        "anchors": [
            "recession probability discussion moved from tail risk to base case debate",
            "yield-curve shape kept signaling tighter policy versus slowing demand",
            "btc remained macro-correlated with low independent beta",
        ],
        "note": "The market started paying more for durability than for optionality.",
    },
    28: {
        "kw": ["scarcity", "risk", "structure", "power", "resilience"],
        "desc": "CPI at 9.1% reignited hawkish fears and repriced policy path again.",
        "phase": ["inflation spike", "path repricing", "risk compression"],
        "anchors": [
            "us cpi printed 9.1% yoy, the cycle high",
            "front-end rates repriced toward another outsized hike",
            "btc sold off, then stabilized as forced flow cooled",
        ],
        "note": "At 9-handle CPI, valuation math dominated narrative storytelling.",
    },
    29: {
        "kw": ["transition", "risk", "balance", "trust", "value"],
        "desc": "Fed delivered another 75 bps hike while growth fears and relief trading coexisted.",
        "phase": ["hawkish action", "growth fear", "relief reflex"],
        "anchors": [
            "fomc hiked 75 bps again and reinforced inflation control priority",
            "equities bounced as terminal-rate speculation shifted",
            "btc recovered into risk-on windows but lacked full confirmation",
        ],
        "note": "Policy action was clear; market interpretation stayed two-sided.",
    },
    30: {
        "kw": ["risk", "structure", "resilience", "balance", "value"],
        "desc": "Late-July rally improved sentiment, but regime proof remained incomplete.",
        "phase": ["relief trend", "breadth check", "durability test"],
        "anchors": [
            "equities extended rebound with better but still imperfect breadth",
            "rates volatility cooled relative to june stress windows",
            "btc climbed with risk assets while macro sensitivity persisted",
        ],
        "note": "I treated strength as earned but still conditional on macro follow-through.",
    },
}


refs = {
    21: [
        (
            "Federal Reserve - Financial Stability Report (May 2022)",
            "https://www.federalreserve.gov/publications/financial-stability-report.htm",
            "Why it matters: framed fragility after broad de-risking and funding stress.",
        ),
        (
            "BLS Employment Situation (May 2022)",
            "https://www.bls.gov/news.release/archives/empsit_05062022.htm",
            "Why it matters: labor resilience constrained immediate policy-pivot hopes.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: helped validate crypto stabilization versus deeper distribution risk.",
        ),
        (
            "BIS Quarterly Review (Jun 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2206.htm",
            "Why it matters: cross-asset stress context improved tactical sizing.",
        ),
    ],
    22: [
        (
            "BLS Employment Situation (Jun 2022)",
            "https://www.bls.gov/news.release/archives/empsit_06032022.htm",
            "Why it matters: labor strength kept hawkish policy path credible.",
        ),
        (
            "Federal Reserve - Beige Book (Jun 2022)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20220601.htm",
            "Why it matters: district reports confirmed broad inflation and cost pressure.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity persistence reinforced inflation stickiness.",
        ),
        (
            "Messari - Research",
            "https://messari.io/research",
            "Why it matters: sector-level crypto framing improved relative risk ranking.",
        ),
    ],
    23: [
        (
            "BLS CPI News Release (Jun 2022)",
            "https://www.bls.gov/news.release/archives/cpi_06102022.htm",
            "Why it matters: inflation surprise reset policy and valuation expectations.",
        ),
        (
            "Reuters - Russian forces invade Ukraine",
            "https://www.reuters.com/world/europe/russian-forces-invade-ukraine-2022-02-24/",
            "Why it matters: war-driven supply risk sustained commodity pressure.",
        ),
        (
            "BIS Quarterly Review (Jun 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2206.htm",
            "Why it matters: explained tightening transmission across rates and risk assets.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: showed conviction weakness during macro-led selloffs.",
        ),
    ],
    24: [
        (
            "BLS CPI News Release (Jun 2022)",
            "https://www.bls.gov/news.release/archives/cpi_06102022.htm",
            "Why it matters: 8.6% CPI forced a more aggressive Fed trajectory.",
        ),
        (
            "Federal Reserve - FOMC Statement (Jun 15, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220615a.htm",
            "Why it matters: 75 bps hike formalized a harder tightening regime.",
        ),
        (
            "Federal Reserve - SEP Table (Jun 2022)",
            "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20220615.htm",
            "Why it matters: projections lifted terminal-path pressure on valuation multiples.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: captured crypto deleveraging intensity during policy shock week.",
        ),
    ],
    25: [
        (
            "Federal Reserve - FOMC Statement (Jun 15, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220615a.htm",
            "Why it matters: policy anchor remained tight despite short-term rebound.",
        ),
        (
            "BLS Employment Situation (Jun 2022)",
            "https://www.bls.gov/news.release/archives/empsit_06032022.htm",
            "Why it matters: labor resilience reduced immediate recession certainty.",
        ),
        (
            "BIS Quarterly Review (Jun 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2206.htm",
            "Why it matters: improved framing of rally-versus-regime mismatch.",
        ),
        (
            "Glassnode Insights - Analysis",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: helped gauge whether crypto bounce had structural support.",
        ),
    ],
    26: [
        (
            "Federal Reserve - Monetary Policy Report (Jun 2022)",
            "https://www.federalreserve.gov/monetarypolicy/mpr_default.htm",
            "Why it matters: clarified inflation-first reaction function through summer.",
        ),
        (
            "BLS CPI News Release (Jun 2022)",
            "https://www.bls.gov/news.release/archives/cpi_06102022.htm",
            "Why it matters: still-hot inflation capped conviction in rebounds.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity path remained a macro risk amplifier.",
        ),
        (
            "Messari - Research Reports",
            "https://messari.io/research/research-reports",
            "Why it matters: provided structured cross-checks for crypto sector risk.",
        ),
    ],
    27: [
        (
            "BLS Employment Situation (Jul 2022)",
            "https://www.bls.gov/news.release/archives/empsit_07082022.htm",
            "Why it matters: strong labor data complicated recession-only narratives.",
        ),
        (
            "BEA - GDP Q2 2022 Advance Estimate",
            "https://www.bea.gov/news/2022/gross-domestic-product-second-quarter-2022-advance-estimate",
            "Why it matters: growth weakness sharpened policy-growth tradeoff debate.",
        ),
        (
            "BIS Quarterly Review (Jun 2022)",
            "https://www.bis.org/publ/qtrpdf/r_qt2206.htm",
            "Why it matters: supported cross-asset recession-risk interpretation.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: helped track crypto sensitivity to recession pricing.",
        ),
    ],
    28: [
        (
            "BLS CPI News Release (Jul 2022)",
            "https://www.bls.gov/news.release/archives/cpi_07132022.htm",
            "Why it matters: 9.1% CPI intensified expectations for another large hike.",
        ),
        (
            "Federal Reserve - Beige Book (Jul 2022)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20220713.htm",
            "Why it matters: field reports confirmed widespread cost and slowdown pressure.",
        ),
        (
            "World Bank - Commodity Markets",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity volatility remained core inflation channel.",
        ),
        (
            "Glassnode Insights - Week On-Chain",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: measured deleveraging exhaustion after deep crypto drawdowns.",
        ),
    ],
    29: [
        (
            "Federal Reserve - FOMC Statement (Jul 27, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220727a.htm",
            "Why it matters: second 75 bps hike reinforced inflation-control priority.",
        ),
        (
            "Federal Reserve - Press Conference (Jul 2022)",
            "https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20220727.pdf",
            "Why it matters: guidance nuance fueled relief interpretation across risk assets.",
        ),
        (
            "BEA - GDP Q2 2022 Advance Estimate",
            "https://www.bea.gov/news/2022/gross-domestic-product-second-quarter-2022-advance-estimate",
            "Why it matters: weak growth backdrop constrained medium-term upside conviction.",
        ),
        (
            "Messari - Research",
            "https://messari.io/research",
            "Why it matters: helped separate tactical crypto rebound from structural turn.",
        ),
    ],
    30: [
        (
            "Federal Reserve - FOMC Statement (Jul 27, 2022)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20220727a.htm",
            "Why it matters: policy stance still capped narrative excess in late-july rally.",
        ),
        (
            "BLS Employment Situation (Jul 2022)",
            "https://www.bls.gov/news.release/archives/empsit_07082022.htm",
            "Why it matters: labor resilience supported selective risk recovery.",
        ),
        (
            "BLS CPI News Release (Jul 2022)",
            "https://www.bls.gov/news.release/archives/cpi_07132022.htm",
            "Why it matters: inflation level kept tightening risk alive.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: tracked whether crypto rebound had durable participation quality.",
        ),
    ],
}


for w in range(21, 31):
    cfg = week_cfg[w]
    kws = cfg["kw"][:5]
    start = week_start(2022, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2022-W{w:02d}"
    prev_link = f"[[weekly-market-report-2022-W{w - 1:02d}]]"
    next_line = (
        f"- Linked from: [[weekly-market-report-2022-W{w + 1:02d}]] - Follow-up week re-tested this regime transition."
        if w < 30
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
        f"*see also:* {prev_link} · [[weekly-market-report-2022-W11]]",
        "",
        '<div class="keyword-row">',
    ]
    lines += [f'  <span class="inline-keyword">{k}</span>' for k in kws]
    lines += [
        "</div>",
        "",
        '<div class="phase-track">',
        f'  <div class="phase-chip"><span class="phase-label">phase 01</span>{cfg["phase"][0]}</div>',
        f'  <div class="phase-chip"><span class="phase-label">phase 02</span>{cfg["phase"][1]}</div>',
        f'  <div class="phase-chip"><span class="phase-label">phase 03</span>{cfg["phase"][2]}</div>',
        "</div>",
        "",
        f"My read this week: {cfg['desc']} I stayed in scenario mode because the tape kept rewarding flexible decision boundaries over static conviction.",
        "",
        "I mapped each day by transition rather than headline - what changed in policy pressure, what changed in breadth, and what changed in funding behavior. That map let me avoid emotional overtrading during high-correlation moves.",
        "",
        '<div class="signal-strip">',
        '  <span class="signal-token">rates first</span>',
        '  <span class="signal-token">breadth second</span>',
        '  <span class="signal-token">crypto confirmation</span>',
        '  <span class="signal-token">size after signal</span>',
        "</div>",
        "",
        '<div class="thought-lattice">',
        '  <div class="lattice-node">',
        '    <div class="lattice-title">macro trigger</div>',
        f"    <p>{cfg['anchors'][0].capitalize()}.</p>",
        "  </div>",
        '  <div class="lattice-node">',
        '    <div class="lattice-title">cross-asset read</div>',
        f"    <p>{cfg['anchors'][1].capitalize()}.</p>",
        "  </div>",
        '  <div class="lattice-node">',
        '    <div class="lattice-title">crypto pulse</div>',
        f"    <p>{cfg['anchors'][2].capitalize()}.</p>",
        "  </div>",
        "</div>",
        "",
        '<div class="market-aside">',
        f"  <p>{cfg['note']}</p>",
        "</div>",
        "",
        "> [!note] Market Pulse",
        '> "I care less about perfect calls and more about preserving edge through regime shifts."',
        "",
        "## Overall Summary",
        "- The tape remained macro-sensitive, with policy and inflation setting the operating range.",
        f"- {cfg['anchors'][0].capitalize()}",
        f"- {cfg['anchors'][1].capitalize()}",
        f"- {cfg['anchors'][2].capitalize()}",
        "",
        "## Commentary",
        "- I prioritized causality over commentary and avoided one-note narratives.",
        "- I upgraded conviction only when rates direction and breadth quality aligned.",
        "- I treated high-correlation sessions as risk-management tests, not opportunity spikes.",
        "",
        "## Rates & Liquidity",
        "- Front-end rate pricing and QT expectations remained the dominant valuation filter.",
        "- Liquidity behaved in clusters, making follow-through quality more important than headline magnitude.",
        "",
        "## Equities",
        "- Index performance continued to mask uneven participation beneath the surface.",
        "- I favored balance-sheet resilience and earnings durability over thematic beta.",
        "",
        "## Commodities & FX",
        "- Commodity and dollar behavior remained core inputs for inflation and risk-premium calibration.",
        "- FX swings kept acting as a fast proxy for global stress transfer.",
        "",
        "## Crypto Macro",
        "- Crypto stayed tied to global liquidity and macro risk appetite, with short reflex windows.",
        "- I used participation quality and leverage behavior before trusting upside continuation.",
        "",
        "## Positioning & Flow",
        "- Flow looked tactical and event-driven, with frequent regime flips around macro catalysts.",
        "- I kept exposure modular to scale with signal quality rather than headline urgency.",
        "",
        "## Outlook Next Week",
        "- Main risk: policy path and inflation persistence trigger another correlation shock.",
        "- Main opportunity: volatility compresses while breadth and liquidity improve simultaneously.",
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
        "- Short answer from last week: disciplined sizing beat narrative chasing.",
        "- Which variable deserves top weight next week: front-end rates, breadth, or commodity trend?",
        "- What would convert this setup from tactical to structural risk-on?",
        "- Where am I overfitting short-term relief into medium-term thesis?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / policy 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed - official releases, market news tape, and report-style research.",
        "",
        "### Counter-thesis",
        "This view breaks if inflation decelerates quickly while breadth broadens and funding stress fades.",
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


# bridge from W20 to W21
w20 = base / "weekly-market-report-2022-W20.md"
if w20.exists():
    t = w20.read_text(encoding="utf-8")
    lf = "- Linked from: [[weekly-market-report-2022-W21]] - Follow-up week re-tested this regime transition."
    if lf not in t:
        if "## Cross Review" in t:
            t = t.replace("## Cross Review\n", "## Cross Review\n" + lf + "\n")
        else:
            t = t.replace("\n## linkage", "\n## Cross Review\n" + lf + "\n\n## linkage")
        w20.write_text(t, encoding="utf-8")


print("Created 2022 W21-W30 creative market reports")
