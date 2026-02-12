from pathlib import Path
from datetime import date, timedelta
import random

base = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2021"
)
base.mkdir(parents=True, exist_ok=True)
kw_dir = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\AI_Sandbox\Keywords"
)

video_refs = [
    (
        "The Battle for 2021: Bitcoin vs. the US Dollar",
        "https://www.youtube.com/watch?v=yrH6YAfdh2U",
    ),
    ("Investing $500 in Crypto?", "https://www.youtube.com/watch?v=VC4FdM78hI8"),
    (
        "Introduction to Bitcoin and Crypto for Beginners",
        "https://www.youtube.com/watch?v=tvljtBW-hZA",
    ),
    ("Bitcoin: 2021 Planning", "https://www.youtube.com/watch?v=WUUHB4dwmOI"),
    (
        "Bitcoin: My Outlook For The Rest Of 2021",
        "https://www.youtube.com/watch?v=rjfri-AHZwA",
    ),
    ("BTC Stock-to-Flow Discussion", "https://www.youtube.com/watch?v=e56m8wr3TaE"),
    ("Bitcoin DCA Strategy", "https://www.youtube.com/watch?v=6gUQtYcw7UU"),
    ("News-Driven Bitcoin Investing", "https://www.youtube.com/watch?v=vJX8xALItK8"),
    ("DCA and Long-Horizon Positioning", "https://www.youtube.com/watch?v=0vU06bLXmn4"),
]

macro_refs = {
    31: (
        "BLS Employment Situation (Aug 2021)",
        "https://www.bls.gov/news.release/archives/empsit_08062021.htm",
        "Why it matters: labor momentum and participation framed risk appetite into August.",
    ),
    32: (
        "BLS CPI News Release (Aug 2021)",
        "https://www.bls.gov/news.release/archives/cpi_08112021.htm",
        "Why it matters: inflation persistence vs peak narrative drove duration-sensitive repricing.",
    ),
    33: (
        "FOMC Minutes (July 2021 Meeting)",
        "https://www.federalreserve.gov/monetarypolicy/fomcminutes20210728.htm",
        "Why it matters: taper discussion moved from abstract to actionable policy expectation.",
    ),
    34: (
        "Jackson Hole Speech (Aug 2021)",
        "https://www.federalreserve.gov/newsevents/speech/powell20210827a.htm",
        "Why it matters: communication tone reset risk premium and taper expectations.",
    ),
    35: (
        "BLS Employment Situation (Sep 2021)",
        "https://www.bls.gov/news.release/archives/empsit_09032021.htm",
        "Why it matters: labor softness complicated growth confidence and policy timing.",
    ),
    36: (
        "BLS CPI News Release (Sep 2021)",
        "https://www.bls.gov/news.release/archives/cpi_09142021.htm",
        "Why it matters: inflation persistence kept macro ceiling in place for risk assets.",
    ),
    37: (
        "FOMC Statement (Sep 22, 2021)",
        "https://www.federalreserve.gov/newsevents/pressreleases/monetary20210922a.htm",
        "Why it matters: taper sequencing and policy path influenced cross-asset confidence.",
    ),
    38: (
        "BLS Employment Situation (Oct 2021)",
        "https://www.bls.gov/news.release/archives/empsit_10082021.htm",
        "Why it matters: labor recovery pace shaped risk rotation and duration tolerance.",
    ),
    39: (
        "BLS CPI News Release (Oct 2021)",
        "https://www.bls.gov/news.release/archives/cpi_10132021.htm",
        "Why it matters: inflation upside pressure reinforced valuation stress in rate-sensitive assets.",
    ),
    40: (
        "FOMC Statement (Nov 3, 2021)",
        "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211103a.htm",
        "Why it matters: taper initiation anchored macro regime transition into Q4.",
    ),
}

week_cfg = {
    31: {
        "kw": ["risk", "structure", "pattern", "trust", "value"],
        "desc": "August opened with uneven participation and fragile confidence under inflation pressure.",
        "quote": "A market can print highs while conviction quietly thins.",
        "anchors": [
            "S&P 500 held near record range",
            "BTC rotated around upper-$30k to low-$40k",
            "10Y yield remained compressed near 1.2%",
        ],
        "angle": "narrow leadership under soft volatility",
    },
    32: {
        "kw": ["inflation", "risk", "pattern", "balance", "value"],
        "desc": "Inflation persistence challenged the peak-CPI narrative and tested equity breadth.",
        "quote": "When inflation refuses to fade, valuation has to renegotiate.",
        "anchors": [
            "US CPI stayed elevated above 5% YoY",
            "BTC failed clean follow-through above resistance",
            "growth leadership looked less uniform",
        ],
        "angle": "inflation pressure vs growth confidence",
    },
    33: {
        "kw": ["policy", "trust", "structure", "risk", "logic"],
        "desc": "Minutes week shifted policy talk from timing guesses to probable sequencing.",
        "quote": "Policy uncertainty narrows risk appetite before it widens opportunity.",
        "anchors": [
            "FOMC minutes leaned more taper-aware",
            "dollar tone firmed intermittently",
            "crypto beta reacted quickly to macro headlines",
        ],
        "angle": "policy communication repricing",
    },
    34: {
        "kw": ["communication", "pattern", "trust", "value", "risk"],
        "desc": "Jackson Hole messaging cooled immediate fear but kept conditionality high.",
        "quote": "Calmer words can lift price, but structure still has the final vote.",
        "anchors": [
            "risk assets bounced on policy tone",
            "real yields remained a background driver",
            "participation improved but stayed uneven",
        ],
        "angle": "tone relief without full reset",
    },
    35: {
        "kw": ["growth", "doubt", "risk", "structure", "resilience"],
        "desc": "Labor softness returned doubt to the macro tape and reduced conviction quality.",
        "quote": "Weak labor prints can buy policy time but not automatic trust.",
        "anchors": [
            "NFP miss pressured growth confidence",
            "equities absorbed data with mixed breadth",
            "BTC remained reactive to macro swings",
        ],
        "angle": "growth confidence stress-test",
    },
    36: {
        "kw": ["inflation", "scarcity", "risk", "value", "restraint"],
        "desc": "September inflation kept the macro ceiling high and punished overextended narratives.",
        "quote": "High inflation is not just data, it is a risk budget constraint.",
        "anchors": [
            "CPI remained stubbornly elevated",
            "rate-sensitive equities saw dispersion",
            "crypto trend stayed choppy",
        ],
        "angle": "inflation ceiling on risk",
    },
    37: {
        "kw": ["policy", "structure", "risk", "discipline", "trust"],
        "desc": "FOMC week clarified taper trajectory but left markets in conditional risk mode.",
        "quote": "Clarity reduces panic, not volatility.",
        "anchors": [
            "Fed signaling moved closer to taper execution",
            "equity beta rotated with quality bias",
            "BTC recovered selectively",
        ],
        "angle": "policy clarity with selective risk",
    },
    38: {
        "kw": ["change", "resilience", "pattern", "risk", "trust"],
        "desc": "October labor and earnings backdrop supported recovery but did not eliminate fragility.",
        "quote": "Recovery is strongest where balance sheets meet believable narratives.",
        "anchors": [
            "labor print improved relative to prior month",
            "equity trend strengthened into earnings season",
            "crypto regained upside momentum",
        ],
        "angle": "recovery with asymmetric fragility",
    },
    39: {
        "kw": ["inflation", "power", "risk", "structure", "value"],
        "desc": "Inflation upside and supply constraints reintroduced valuation tension into risk assets.",
        "quote": "Inflation redistributes power from stories to cash flows.",
        "anchors": [
            "CPI upside surprised again",
            "energy and commodity signals stayed loud",
            "leadership rotated toward pricing-power narratives",
        ],
        "angle": "pricing-power regime",
    },
    40: {
        "kw": ["policy", "transition", "risk", "structure", "renewal"],
        "desc": "Taper initiation marked a regime transition from emergency liquidity to normalization.",
        "quote": "The end of emergency policy is where process quality gets tested.",
        "anchors": [
            "Fed formally began taper path",
            "equities held constructive tone with pockets of stress",
            "BTC approached cycle highs with stronger momentum",
        ],
        "angle": "normalization transition",
    },
}

remap = {
    "inflation": "scarcity",
    "policy": "power",
    "communication": "language",
    "doubt": "skepticism",
    "transition": "change",
}


def week_start(year: int, week: int) -> date:
    return date.fromisocalendar(year, week, 1)


def resolve_keywords(raw_keywords):
    kws = []
    for raw_kw in raw_keywords:
        mapped_kw = remap.get(raw_kw, raw_kw)
        chosen_kw = mapped_kw if mapped_kw not in kws else raw_kw
        if chosen_kw not in kws:
            kws.append(chosen_kw)

    fallback_kws = [
        "risk",
        "structure",
        "pattern",
        "trust",
        "value",
        "balance",
        "logic",
    ]
    for fallback_kw in fallback_kws:
        if len(kws) >= 5:
            break
        if fallback_kw not in kws:
            kws.append(fallback_kw)

    return kws[:5]


def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"


for w in range(31, 41):
    cfg = week_cfg[w]
    kws = resolve_keywords(cfg["kw"])
    start = week_start(2021, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2021-W{w:02d}"
    prev_link = f"[[weekly-market-report-2021-W{w - 1:02d}]]"
    next_line = (
        f"- Linked from: [[weekly-market-report-2021-W{w + 1:02d}]] — Follow-up week re-tested this regime transition."
        if w < 40
        else ""
    )

    random.seed(202100 + w)
    sampled_videos = random.sample(video_refs, 5)
    refs = [
        (
            title_ref,
            url,
            "Why it matters: long-horizon context from 2021 market commentary used for sentiment and regime framing.",
        )
        for title_ref, url in sampled_videos
    ] + [macro_refs[w]]

    lines = [
        "---",
        f"title: {title}",
        "tags: [market-report, weekly, finance, 2021]",
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
        f"*see also:* {prev_link} · [[weekly-market-report-2021-W21]]",
        "",
        '<div class="keyword-row">',
    ]
    lines += [f'  <span class="inline-keyword">{k}</span>' for k in kws]
    lines += [
        "</div>",
        "",
        f"My read is this week centered on {cfg['angle']}. The surface-level move looked cleaner than the underlying participation, so I stayed selective instead of broad. I kept asking the same question: is this a structural bid or a tactical reaction?",
        "",
        "I did not treat headline relief as confirmation. In this regime, confirmation requires sequence: stable macro tone, resilient breadth, then clean follow-through. Missing one of those steps usually means the move remains fragile.",
        "",
        f"The risk I kept on screen was simple: {cfg['anchors'][0].lower()}, {cfg['anchors'][1].lower()}, and {cfg['anchors'][2].lower()}. When those three signals diverge, I reduce conviction and protect optionality.",
        "",
        "What I want to see next week is less emotional speed and more structural consistency. If I get calmer volatility plus broader participation, I can increase size. If not, I keep this as a tactical tape.",
        "",
        "> [!note] Market Pulse",
        f'> "{cfg["quote"]}"',
        "",
        "## Overall Summary",
        "- The week stayed transitional with policy and inflation still framing risk appetite.",
        f"- {cfg['anchors'][0]}",
        f"- {cfg['anchors'][1]}",
        f"- {cfg['anchors'][2]}",
        "",
        "## Commentary",
        "- I prioritized causality over narrative volume: what moved first, what moved second, what failed to confirm.",
        "- I treated upside as conditional until participation widened beyond familiar leaders.",
        "- The core lens remained rates + liquidity + breadth, in that order.",
        "",
        "## Rates & Liquidity",
        "- I tracked policy language, real yields, and dollar tone as the weekly ceiling for risk.",
        "- Liquidity quality looked better in bursts, but consistency remained the missing piece.",
        "",
        "## Equities",
        "- Equity direction held up better than equity quality in several sessions.",
        "- I favored names with cleaner balance-sheet and pricing-power support over pure narrative beta.",
        "",
        "## Commodities & FX",
        "- Commodity and FX behavior helped validate whether inflation fear or growth confidence dominated.",
        "- Dollar tone still acted as a confidence filter for marginal risk-taking.",
        "",
        "## Crypto Macro",
        "- Crypto remained the fastest risk proxy for policy and liquidity sentiment.",
        "- I prioritized structure and participation quality over aggressive directional forecasts.",
        "",
        "## Positioning & Flow",
        "- Flow stayed tactical around macro catalysts and often reversed quickly.",
        "- I kept size adaptive and invalidation rules explicit to avoid regime overfitting.",
        "",
        "## Outlook Next Week",
        "- Main risk: macro narrative re-tightens before participation can broaden.",
        "- Main opportunity: volatility compresses while leadership quality improves.",
        "",
        "## References",
    ]

    for title_ref, url, why in refs:
        lines += [
            f"> [!ref] {title_ref}",
            f"> {url}",
            f"> {why}",
            "",
        ]

    lines += [
        "## questions / next",
        "- Short answer from last week: I stayed tactical and avoided broad conviction without confirmation.",
        "- Which signal has highest predictive value next week: rates, breadth, or volatility?",
        "- What fails first if macro pressure returns: fragile leadership or crypto beta?",
        "- Where am I mistaking tactical relief for structural trend?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / pattern 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed — official macro releases plus transcript context; flow interpretation remains probabilistic.",
        "",
        "### Counter-thesis",
        "This view breaks if breadth broadens decisively while volatility compresses and policy communication remains stable.",
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

    (base / f"weekly-market-report-2021-W{w:02d}.md").write_text(
        "\n".join(lines), encoding="utf-8"
    )

# update keyword backlinks
for w in range(31, 41):
    kws = resolve_keywords(week_cfg[w]["kw"])
    link = f"[[weekly-market-report-2021-W{w:02d}]]"
    for kw in kws:
        p = kw_dir / f"{kw}.md"
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        if link in txt:
            continue
        if txt.strip().endswith("#"):
            core = txt.rstrip()[:-1].rstrip()
            txt = core + f"\n- {link}\n\n#\n"
        else:
            txt = txt.rstrip() + f"\n- {link}\n"
        p.write_text(txt, encoding="utf-8")

# add linked-from to W30
w30 = base / "weekly-market-report-2021-W30.md"
if w30.exists():
    t = w30.read_text(encoding="utf-8")
    lf = "- Linked from: [[weekly-market-report-2021-W31]] — Follow-up week re-tested this regime transition."
    if lf not in t:
        if "## Cross Review" in t:
            t = t.replace("## Cross Review\n", "## Cross Review\n" + lf + "\n")
        else:
            t = t.replace("\n## linkage", "\n## Cross Review\n" + lf + "\n\n## linkage")
        w30.write_text(t, encoding="utf-8")

print("Created W31-W40 long-form and synced keyword links")
