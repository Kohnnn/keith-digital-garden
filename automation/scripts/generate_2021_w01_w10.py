from pathlib import Path
import random
from datetime import date, timedelta

base = Path(r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2021")
base.mkdir(parents=True, exist_ok=True)

sources = [
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

themes = {
1: "The year opened with a positioning fight between USD strength and crypto risk appetite.",
2: "Forecast narratives intensified, especially around six-figure BTC targets and macro liquidity.",
3: "The tape stayed narrow, with conviction depending on dollar direction and speculative flows.",
4: "I saw a tug-of-war between long-term conviction and short-term volatility in risk assets.",
5: "February opened with a consolidation tone, where patience mattered more than prediction.",
6: "Model-driven narratives started to influence sentiment more strongly.",
7: "DCA and execution discipline became the dominant edge in a noisy tape.",
8: "Late-February felt like range compression with fragile breakouts and quick reversals.",
9: "Early-March was a re-test week for conviction after several weeks of narrative drift.",
10: "By W10, I focused on process: risk sizing, confirmation, and avoiding overreaction to headlines.",
}

def week_start(y: int, w: int) -> date:
    return date.fromisocalendar(y, w, 1)

def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"

for w in range(1, 11):
    start = week_start(2021, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2021-W{w:02d}"
    prev_link = f"[[weekly-market-report-2021-W{w-1:02d}]]" if w > 1 else "[[weekly-market-report-2020-W53]]"
    next_line = f"- Linked from: [[weekly-market-report-2021-W{w+1:02d}]] — Follow-up week re-evaluated the same macro regime." if w < 10 else ""

    random.seed(202100 + w)
    refs = random.sample(sources, 5)

    lines = [
        "---",
        f"title: {title}",
        "tags: [market-report, weekly, finance, 2021]",
        "keywords:",
        "  - policy pivot",
        "  - rate expectations",
        "  - real income",
        "  - price surge",
        "  - wage pressure",
        f"note_id: {mk_note_id(start)}",
        "draft: true",
        f"description: {themes[w]}",
        f"created: {start.isoformat()}",
        f"updated: {end.isoformat()}",
        "---",
        "",
        f"# {title}",
        "",
        "<div class=\"keyword-row\">",
        "  <span class=\"inline-keyword\">policy pivot</span>",
        "  <span class=\"inline-keyword\">rate expectations</span>",
        "  <span class=\"inline-keyword\">real income</span>",
        "  <span class=\"inline-keyword\">price surge</span>",
        "  <span class=\"inline-keyword\">wage pressure</span>",
        "</div>",
        "",
        themes[w],
        "",
        f"I kept cross-checking with {prev_link} because the same liquidity-vs-conviction tension kept repeating.",
        "",
        "## Overall Summary",
        "This week stayed transitional. Conviction appeared in bursts, but the structure remained narrow and sensitive to macro framing.",
        "",
        "- Narrative momentum remained stronger than structural confirmation.",
        "- Participation stayed narrower than headlines implied.",
        "- I favored confirmation over anticipation.",
        "",
        "## Regime Call",
        "Regime: transitional — inflation path uncertain; breadth still thin.",
        "",
        "## Signals I'm Watching",
        "- Main risk: macro narrative hardens faster than liquidity can absorb.",
        "- Main opportunity: broader participation confirms directional follow-through.",
        "",
        "## Positioning Snapshot",
        "I stayed tactical, focused on reaction over prediction, and kept flexibility high.",
        "",
        "## Commentary",
        "The key for me was distinguishing conviction from noise. Many strong opinions were circulating, but only part of that translated into durable price behavior.",
        "",
        "## Rates & Liquidity",
        "Rates and liquidity were still the base layer. Even when not explicitly dominant in headlines, they framed how far risk could travel.",
        "",
        "## Equities",
        "Equity risk looked selective rather than broad. I focused on leadership durability and avoided assuming index stability meant broad health.",
        "",
        "## Commodities & FX",
        "Commodities and FX acted as secondary confirmation tools. Dollar direction and inflation framing still influenced conviction.",
        "",
        "## Crypto Macro",
        "Crypto narratives were loud this quarter, but I kept returning to structure and execution discipline.",
        "",
        "## Positioning & Flow",
        "Flow quality was mixed. I did not read this as a clean trend regime, so I kept position sizing conservative and adaptive.",
        "",
        "## What Changed This Week",
        "The first change was narrative pressure: stronger macro language around inflation and policy made the tape more reflexive.",
        "",
        "## Risk Map",
        "My risk map stayed simple: policy path, rate expectations, and participation quality.",
        "",
        "## Analyst Notes",
        "I treated this week as another reminder that consistency beats excitement in transitional regimes.",
        "",
        "## Outlook Next Week",
        "Next week I want to see whether narrative intensity converts into structural confirmation.",
        "",
        "- Main risk: sentiment runs ahead of structure.",
        "- Main opportunity: breadth broadens and confirms trend.",
        "",
        "## linkage",
        "<div class=\"linkage-tree\">",
        "  <div class=\"linkage-tree-title\">linkage tree</div>",
        "  <ul>",
        "    <li>keywords",
        "      <ul>",
        "        <li>[[policy pivot]]</li>",
        "        <li>[[rate expectations]]</li>",
        "        <li>[[real income]]</li>",
        "        <li>[[price surge]]</li>",
        "        <li>[[wage pressure]]</li>",
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
        "## References",
    ]

    for t, u in refs:
        lines.extend([
            f"> [!ref] {t}",
            f"> {u}",
            "> Why it matters: Used as weekly context input for macro + positioning narrative.",
            "",
        ])

    lines.extend([
        "## questions / next",
        "- What breaks if rate expectations reprice faster than flows?",
        "- Is participation broadening or just rotating among a few leaders?",
        "- Where did I overfit narrative instead of structure?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "policy 35% / inflation 25% / liquidity 25% / growth 15%.",
        "",
        "### Data Quality",
        "Data quality: mixed — narrative-heavy inputs with selective hard-data anchors.",
        "",
        "### Counter-thesis",
        "This view breaks if breadth improves decisively while macro pressure cools.",
        "",
    ])

    if next_line:
        lines.extend(["## Cross Review", next_line, ""])

    lines.extend(["#", ""])
    (base / f"weekly-market-report-2021-W{w:02d}.md").write_text("\n".join(lines), encoding="utf-8")

print("created W01-W10 2021")
