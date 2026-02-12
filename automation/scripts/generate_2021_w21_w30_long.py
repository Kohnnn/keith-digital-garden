from pathlib import Path
from datetime import date, timedelta
import random

base = Path(r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2021")
base.mkdir(parents=True, exist_ok=True)

video_refs = [
    ("The Battle for 2021: Bitcoin vs. the US Dollar", "https://www.youtube.com/watch?v=yrH6YAfdh2U"),
    ("Investing $500 in Crypto?", "https://www.youtube.com/watch?v=VC4FdM78hI8"),
    ("Introduction to Bitcoin and Crypto for Beginners", "https://www.youtube.com/watch?v=tvljtBW-hZA"),
    ("Bitcoin: 2021 Planning", "https://www.youtube.com/watch?v=WUUHB4dwmOI"),
    ("Bitcoin: My Outlook For The Rest Of 2021", "https://www.youtube.com/watch?v=rjfri-AHZwA"),
    ("Bitcoin 2021 Forecast: $100,000?", "https://www.youtube.com/watch?v=nxVM1idJJ9I"),
    ("BTC Stock-to-Flow Discussion", "https://www.youtube.com/watch?v=e56m8wr3TaE"),
    ("Bitcoin DCA Strategy", "https://www.youtube.com/watch?v=6gUQtYcw7UU"),
    ("News-Driven Bitcoin Investing", "https://www.youtube.com/watch?v=vJX8xALItK8"),
    ("DCA and Long-Horizon Positioning", "https://www.youtube.com/watch?v=0vU06bLXmn4"),
]

macro_refs = {
    21: [
        ("BLS Employment Situation (Jun 2021)", "https://www.bls.gov/news.release/archives/empsit_06042021.htm", "Why it matters: payroll momentum and unemployment tone shaped risk appetite."),
    ],
    22: [
        ("BLS CPI News Release (Jun 2021)", "https://www.bls.gov/news.release/archives/cpi_06102021.htm", "Why it matters: inflation surprise reset rates and growth-vs-duration pricing."),
    ],
    23: [
        ("FOMC Statement (Jun 16, 2021)", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20210616a.htm", "Why it matters: dot-plot and policy tone tightened financial conditions narrative."),
    ],
    24: [
        ("BLS Employment Situation (Jul 2021)", "https://www.bls.gov/news.release/archives/empsit_07022021.htm", "Why it matters: labor recovery pace fed directly into rate-path expectations."),
    ],
    25: [
        ("FOMC Minutes Archive", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", "Why it matters: guidance and communication cadence mattered more than one data point."),
    ],
    26: [
        ("BLS CPI News Release (Jul 2021)", "https://www.bls.gov/news.release/archives/cpi_07132021.htm", "Why it matters: persistence in inflation kept the macro ceiling on risk assets."),
    ],
    27: [
        ("BLS Retail Sales (Jul 2021)", "https://www.census.gov/retail/marts/www/marts_current.pdf", "Why it matters: consumption resilience vs inflation drag informed growth confidence."),
    ],
    28: [
        ("BLS Employment Situation (Aug 2021 Archive Hub)", "https://www.bls.gov/news.release/archives/empsit_09032021.htm", "Why it matters: labor trajectory remained central for policy and risk rotation."),
    ],
    29: [
        ("FOMC Statement (Jul 28, 2021)", "https://www.federalreserve.gov/newsevents/pressreleases/monetary20210728a.htm", "Why it matters: taper language and tone management drove cross-asset repricing."),
    ],
    30: [
        ("BEA GDP Advance Estimate Q2 2021", "https://www.bea.gov/news/2021/gross-domestic-product-2nd-quarter-2021-advance-estimate", "Why it matters: growth strength and inflation mix framed late-July regime risk."),
    ],
}

week_data = {
    21: {
        "desc": "Late-May deleveraging forced a transition from euphoria to discipline.",
        "quote": "The market stopped asking how high and started asking what survives.",
        "anchors": ["BTC traded from roughly $35k to $40k", "10Y yield sat around 1.6%", "S&P 500 stayed near the 4,100 to 4,200 zone"],
        "story": "My read is this week was about survival first, upside second. The sharp crypto drawdown in prior sessions left positioning fragile, and the rebound attempt looked more like short-covering than clean risk appetite. I was not interested in heroic entries. I wanted proof that the market could absorb volatility without breaking structure again.",
    },
    22: {
        "desc": "Early-June brought inflation anxiety back into the center of the tape.",
        "quote": "When inflation arrives ahead of comfort, every asset has to renegotiate its valuation story.",
        "anchors": ["US CPI printed 5.0% YoY in June release", "BTC challenged the mid-$30k area repeatedly", "Nasdaq leadership narrowed while cyclicals hesitated"],
        "story": "My read is this week reminded everyone that inflation can dominate narrative flow even when growth still looks solid. I watched rates and dollar tone first, then equity breadth second. The market looked tradable, but not yet trustworthy. Every rally needed confirmation, and most of them did not get it.",
    },
    23: {
        "desc": "FOMC week repriced assumptions and made policy communication the core catalyst.",
        "quote": "A small shift in guidance can move more capital than a large shift in headlines.",
        "anchors": ["FOMC statement landed June 16", "10Y yield quickly repriced after the meeting", "BTC volatility expanded around policy headlines"],
        "story": "My read is this week was a policy-framed week disguised as a broad macro week. Once the Fed tone shifted, every risk asset had to re-evaluate its near-term multiple. I treated that as a condition change, not a temporary blip. In condition-change weeks, I reduce assumptions and wait for structure to rebuild.",
    },
    24: {
        "desc": "Post-FOMC digestion week with selective recovery and fragile confidence.",
        "quote": "After policy shock, markets do not heal in one session; they negotiate in layers.",
        "anchors": ["BTC stabilized around the low-$30k to mid-$30k range", "S&P 500 reclaimed prior highs", "dollar strength remained a ceiling for weaker risk pockets"],
        "story": "My read is this week had better price action than underlying confidence. I saw tactical bids, but I also saw hesitation at every extension. That usually means participants are still trading memory from the prior shock. I stayed process-first and refused to treat stabilization as full regime repair.",
    },
    25: {
        "desc": "Late-June flow was dominated by crypto policy headlines and mining-risk repricing.",
        "quote": "Policy can change location faster than it changes demand.",
        "anchors": ["BTC briefly tested sub-$30k territory before bouncing", "hashrate narrative became a primary risk topic", "equity leadership stayed concentrated"],
        "story": "My read is this week was less about valuation and more about operating assumptions. Once policy headlines hit mining and infrastructure, the market had to price execution risk instead of pure demand growth. I stayed cautious because this was a structural question, not a one-day chart question.",
    },
    26: {
        "desc": "Quarter-end rotation produced cleaner optics but still mixed conviction.",
        "quote": "Window dressing can improve prices without improving beliefs.",
        "anchors": ["S&P 500 held around record territory", "BTC moved back toward the mid-$30k zone", "10Y yield hovered near the low-1.4% area"],
        "story": "My read is this week looked stronger than it felt. Quarter-end flow can create temporary support, but support is not the same thing as broad conviction. I wanted to see follow-through from real buyers, not just calendar-driven positioning adjustments.",
    },
    27: {
        "desc": "Early-July macro looked constructive, but the tape still punished overconfidence.",
        "quote": "The best weeks still fail if you confuse signal with permission.",
        "anchors": ["Ongoing inflation debate kept yields sensitive", "BTC stayed in a broad $33k to $36k band", "US equities printed new highs with uneven breadth"],
        "story": "My read is this week was a confidence test. On paper, conditions looked good enough for risk-on continuation, but participation quality stayed uneven. That mismatch matters. It tells me the rally can continue, but it remains vulnerable to any macro surprise.",
    },
    28: {
        "desc": "Mid-July inflation pressure returned and forced another risk-quality check.",
        "quote": "A higher CPI print does not kill a trend, but it raises the cost of being wrong.",
        "anchors": ["US CPI reached 5.4% YoY in July release", "BTC dipped toward the low-$30k area again", "defensive tone reappeared in cross-asset flow"],
        "story": "My read is this week reminded me that persistence beats surprise in macro. Inflation was no longer a one-print story. The market had to accept that policy patience could narrow, and that is a valuation problem for weaker quality risk. I stayed selective and focused on downside asymmetry.",
    },
    29: {
        "desc": "Late-July volatility combined growth anxiety with a rebound in tactical risk-taking.",
        "quote": "In fragile regimes, panic and optimism can share the same week.",
        "anchors": ["S&P 500 saw sharp intraday swings before recovering", "BTC bounced back toward the upper-$30k area", "dollar direction kept acting as a confidence filter"],
        "story": "My read is this week was about emotional speed. The market moved from fear to rebound quickly, but fast reversals do not always equal durable conviction. I treated rebounds as opportunities to test structure, not as proof that risk had fully reset.",
    },
    30: {
        "desc": "End-of-July policy and GDP releases closed the month with constructive but still conditional tone.",
        "quote": "Good macro does not remove risk; it changes where risk hides.",
        "anchors": ["FOMC statement landed on July 28", "US Q2 GDP advance came in strong", "BTC reclaimed around the $40k zone into month-end"],
        "story": "My read is this week finally offered better alignment between macro prints and risk behavior, but I still treated it as conditional. Strong GDP plus calmer policy communication helped, yet breadth and quality still mattered. I leaned in only where structure validated the narrative.",
    },
}

def week_start(y: int, w: int) -> date:
    return date.fromisocalendar(y, w, 1)

def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"

for w in range(21, 31):
    info = week_data[w]
    start = week_start(2021, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2021-W{w:02d}"
    prev_link = f"[[weekly-market-report-2021-W{w-1:02d}]]"
    next_line = f"- Linked from: [[weekly-market-report-2021-W{w+1:02d}]] — Follow-up week re-checked the same risk regime." if w < 30 else ""

    random.seed(202100 + w)
    refs = random.sample(video_refs, 5)
    refs = refs + macro_refs[w]

    lines = [
        "---",
        f"title: {title}",
        "tags: [market-report, weekly, finance, 2021]",
        "keywords:",
        "  - risk",
        "  - structure",
        "  - pattern",
        "  - trust",
        "  - value",
        f"note_id: {mk_note_id(start)}",
        "draft: true",
        f"description: {info['desc']}",
        f"created: {start.isoformat()}",
        f"updated: {end.isoformat()}",
        "---",
        "",
        f"# {title}",
        "",
        f"*see also:* {prev_link} · [[weekly-market-report-2021-W11]]",
        "",
        "<div class=\"keyword-row\">",
        "  <span class=\"inline-keyword\">risk</span>",
        "  <span class=\"inline-keyword\">structure</span>",
        "  <span class=\"inline-keyword\">pattern</span>",
        "  <span class=\"inline-keyword\">trust</span>",
        "  <span class=\"inline-keyword\">value</span>",
        "</div>",
        "",
        info["story"],
        "",
        "I am watching whether this week's move is true participation or just another tactical rotation. In this regime, those two look similar for a day and very different over a week.",
        "",
        "The risk is not a single headline. The risk is sequence: policy tone, rate repricing, then flow quality. If that sequence lines up against risk assets, drawdowns become self-reinforcing.",
        "",
        "What I want to see next week is simple: better breadth, calmer volatility, and cleaner follow-through after macro data. If I only get one of those three, I keep sizing smaller.",
        "",
        "> [!note] Market Pulse",
        f"> \"{info['quote']}\"",
        "",
        "## Overall Summary",
        "- The week stayed transitional with high narrative sensitivity.",
        f"- {info['anchors'][0]}.",
        f"- {info['anchors'][1]}.",
        f"- {info['anchors'][2]}.",
        "",
        "## Commentary",
        "- My lens is still rates-plus-liquidity first, then leadership quality.",
        "- I treated sharp moves as information, not automatic conviction.",
        "- If structure and participation diverge, I trust structure.",
        "",
        "## Rates & Liquidity",
        "- I watched yields, dollar tone, and policy language as the macro ceiling for risk.",
        "- Liquidity quality remained uneven; tactical flow dominated at key pivots.",
        "",
        "## Equities",
        "- Equity leadership remained selective, and breadth lagged headline strength.",
        "- I favored setups with cleaner downside definition rather than crowded momentum.",
        "",
        "## Commodities & FX",
        "- USD direction still influenced how confidently I read risk-on sessions.",
        "- Commodity context helped separate inflation fear from growth confidence.",
        "",
        "## Crypto Macro",
        "- Crypto remained the fastest thermometer for macro stress and liquidity confidence.",
        "- I prioritized support behavior, participation quality, and reaction to policy headlines.",
        "",
        "## Positioning & Flow",
        "- Flow looked tactical and often reflexive around macro catalysts.",
        "- I stayed process-first: smaller size, clearer invalidation, faster adaptation.",
        "",
        "## Outlook Next Week",
        "- Main risk: narrative intensity outruns structural confirmation again.",
        "- Main opportunity: volatility cools while participation broadens.",
        "",
        "## References",
    ]

    for t, u, why in [(r[0], r[1], (r[2] if len(r) > 2 else "Why it matters: Weekly context input for macro and positioning.")) for r in refs]:
        lines.extend([
            f"> [!ref] {t}",
            f"> {u}",
            f"> {why}",
            "",
        ])

    lines.extend([
        "## questions / next",
        "- Short answer from last week: I stayed tactical because follow-through was inconsistent.",
        "- Which signal has highest edge next week: rates, breadth, or volatility?",
        "- What breaks first if macro pressure returns: weak leadership or crypto beta?",
        "- Where am I mistaking relief for trend?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / pattern 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed — official macro releases plus transcript context, with uneven week-to-week flow reliability.",
        "",
        "### Counter-thesis",
        "This view breaks if participation broadens materially while volatility compresses and policy tone stabilizes.",
        "",
    ])

    if next_line:
        lines.extend(["## Cross Review", next_line, ""])

    lines.extend([
        "## linkage",
        "<div class=\"linkage-tree\">",
        "  <div class=\"linkage-tree-title\">linkage tree</div>",
        "  <ul>",
        "    <li>keywords",
        "      <ul>",
        "        <li>[[risk]]</li>",
        "        <li>[[structure]]</li>",
        "        <li>[[pattern]]</li>",
        "        <li>[[trust]]</li>",
        "        <li>[[value]]</li>",
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
    ])

    (base / f"weekly-market-report-2021-W{w:02d}.md").write_text("\n".join(lines), encoding="utf-8")

print("created W21-W30 2021 long-form")
