from pathlib import Path
from datetime import date, timedelta
import random

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

week_data = {
    11: {
        "desc": "Rates repricing and risk rotation turned the tape emotional after a strong start to March.",
        "pulse": "The tape felt like a tug-of-war between growth euphoria and bond-market gravity.",
        "quote": "When yields move faster than narratives, price discovers humility.",
        "anchors": ["10Y yield near 1.7%", "BTC traded around the low-60k zone", "equity leadership narrowed"],
    },
    12: {
        "desc": "Range-trading week where conviction faded and positioning turned tactical.",
        "pulse": "I saw less belief in straight-line upside and more focus on protecting entries.",
        "quote": "A quiet week in headlines can still be loud in risk management.",
        "anchors": ["high-beta names underperformed", "crypto held trend but with thinner breadth", "dollar tone stabilized"],
    },
    13: {
        "desc": "Leverage stress entered the conversation and reminded everyone that liquidity has teeth.",
        "pulse": "This week felt like a reminder that hidden leverage rewrites market confidence overnight.",
        "quote": "When leverage unwinds, correlation rises before understanding does.",
        "anchors": ["forced liquidations hit sentiment", "prime-broker chatter dominated", "risk models tightened"],
    },
    14: {
        "desc": "Pre-listing enthusiasm in crypto equities pushed narrative heat higher than structural confirmation.",
        "pulse": "The market traded a coming event before it traded the quality of follow-through.",
        "quote": "Narrative can front-run structure, but it cannot replace it.",
        "anchors": ["exchange listing anticipation", "BTC stayed trend-positive", "alts showed uneven participation"],
    },
    15: {
        "desc": "Headline highs met immediate volatility; euphoria and fragility appeared in the same session.",
        "pulse": "I saw a classic momentum week where celebration and distribution sat side by side.",
        "quote": "New highs attract attention; pullbacks reveal conviction.",
        "anchors": ["BTC printed a new cycle high zone", "post-event pullback accelerated", "breadth weakened quickly"],
    },
    16: {
        "desc": "Sharp correction reset leverage and shifted focus from targets to survival.",
        "pulse": "This was less about prediction and more about who respected risk controls.",
        "quote": "In corrections, process is alpha.",
        "anchors": ["crypto drawdown deepened", "funding/positioning normalized", "panic then stabilization"],
    },
    17: {
        "desc": "Stabilization week with lower conviction; market looked for a cleaner macro anchor.",
        "pulse": "I saw tentative bids, but no true broad risk appetite yet.",
        "quote": "Stability is not the same as strength.",
        "anchors": ["range behavior dominated", "leadership remained selective", "macro tone softened marginally"],
    },
    18: {
        "desc": "Labor surprise changed rate assumptions and lifted risk-on talk for a moment.",
        "pulse": "One data print can bend the week when positioning is unbalanced.",
        "quote": "Weak data can rally assets if it rewires the policy path.",
        "anchors": ["NFP miss was large vs consensus", "cut expectations drifted", "risk appetite bounced tactically"],
    },
    19: {
        "desc": "Inflation shock collided with crypto-specific stress and produced fast de-risking.",
        "pulse": "This week was a stress test for every momentum thesis in the book.",
        "quote": "Macro heat plus narrative shock is where fragile positioning breaks.",
        "anchors": ["US CPI printed 4.2% YoY", "crypto sold off hard intraday", "risk concentration was exposed"],
    },
    20: {
        "desc": "Deleveraging climax week with policy headlines from China amplifying volatility.",
        "pulse": "I read this as capitulation energy followed by a search for a new base.",
        "quote": "After forced selling, the market asks a simpler question: what can survive without leverage?",
        "anchors": ["broad crypto liquidation", "policy crackdown headlines", "recovery attempts stayed uneven"],
    },
}

def week_start(y: int, w: int) -> date:
    return date.fromisocalendar(y, w, 1)

def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"

for w in range(11, 21):
    info = week_data[w]
    start = week_start(2021, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2021-W{w:02d}"
    prev_link = f"[[weekly-market-report-2021-W{w-1:02d}]]"
    next_line = f"- Linked from: [[weekly-market-report-2021-W{w+1:02d}]] — Follow-up week re-evaluated this regime shift." if w < 20 else ""

    random.seed(202100 + w)
    refs = random.sample(sources, 5)

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
        f"*see also:* {prev_link} · [[weekly-market-report-2021-W01]]",
        "",
        "<div class=\"keyword-row\">",
        "  <span class=\"inline-keyword\">risk</span>",
        "  <span class=\"inline-keyword\">structure</span>",
        "  <span class=\"inline-keyword\">pattern</span>",
        "  <span class=\"inline-keyword\">trust</span>",
        "  <span class=\"inline-keyword\">value</span>",
        "</div>",
        "",
        f"{info['pulse']}",
        "",
        f"> [!note] Market Pulse\n> \"{info['quote']}\"",
        "",
        "I kept this week grounded in process because the tape was fast, narrative-heavy, and unforgiving for oversized conviction.",
        "",
        "## Overall Summary",
        "The regime stayed transitional, but the emotional tone changed quickly intraday. I treated this as a week where flow quality mattered more than headline intensity.",
        "",
        f"- {info['anchors'][0]}.",
        f"- {info['anchors'][1]}.",
        f"- {info['anchors'][2]}.",
        "",
        "## Regime Call",
        "Regime: transitional — volatility high, conviction selective, structure still forming.",
        "",
        "## Signals I'm Watching",
        "- Main risk: narrative shock outruns liquidity depth.",
        "- Main opportunity: breadth improves while volatility compresses.",
        "",
        "## Positioning Snapshot",
        "I stayed tactical and used confirmation thresholds before adding risk.",
        "",
        "## Commentary",
        "My main read is that this phase rewards consistency over hero trades. The tape offered plenty of emotional entries, but fewer structurally strong ones.",
        "",
        "I also kept cross-checking prior weeks to avoid treating every move as a new regime. In 2021, the same themes recycled often: liquidity, leverage, and confidence.",
        "",
        "## Rates & Liquidity",
        "Rates and liquidity framing remained the background engine. Even when the headlines were crypto-specific, the speed of repricing still tracked macro pressure.",
        "",
        "## Equities",
        "Equity tone remained selective. Leadership mattered more than index optics, and the quality of participation stayed mixed.",
        "",
        "## Commodities & FX",
        "Commodity and FX context worked as confirmation filters. Dollar tone and inflation language still influenced how aggressively I interpreted risk-on moves.",
        "",
        "## Crypto Macro",
        "Crypto stayed the most sensitive expression of risk appetite. I prioritized structure, support behavior, and participation quality over loud forecasts.",
        "",
        "## Positioning & Flow",
        "Flow was tactical and often reflexive. I treated this as a process week where survivability outranked optimization.",
        "",
        "## What Changed This Week",
        "The first change was emotional speed: market reactions became faster than thesis updates. The second change was in confidence quality: conviction narrowed into fewer setups.",
        "",
        "## Risk Map",
        "My risk map stayed simple: if volatility rose while breadth narrowed, I reduced size. If volatility cooled and breadth improved, I added selectively.",
        "",
        "## Analyst Notes",
        "I wrote this week with a long-horizon mindset. Short-term noise was useful only when it improved decision quality. Anything else was entertainment.",
        "",
        "<ul class=\"brain-dump\">",
        "  <li><strong>Tempo:</strong> Fast tape, slower conviction.</li>",
        "  <li><strong>Selection:</strong> Fewer high-quality entries.</li>",
        "  <li><strong>Risk:</strong> Volatility punished overconfidence.</li>",
        "  <li><strong>Process:</strong> Repeatable rules beat impulse.</li>",
        "  <li><strong>Memory:</strong> Cross-week context prevented overfitting.</li>",
        "</ul>",
        "",
        "## Outlook Next Week",
        "Next week I want to see whether emotional volatility converts into structural direction. If not, I stay tactical and patient.",
        "",
        "- Main risk: reaction cycles keep outrunning confirmation.",
        "- Main opportunity: cleaner structure with broader participation.",
        "",
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
        "## References",
    ]

    for t, u in refs:
        lines.extend([
            f"> [!ref] {t}",
            f"> {u}",
            "> Why it matters: Weekly context input for macro narrative, risk posture, and cross-week comparison.",
            "",
        ])

    lines.extend([
        "## questions / next",
        "- What did I confuse as trend that was only momentum?",
        "- Which signal had the highest predictive value this week?",
        "- Where did I underweight liquidity risk?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / pattern 20% / trust 15% / value 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed — qualitative flow context with selective hard-data anchors.",
        "",
        "### Counter-thesis",
        "This view breaks if volatility compresses while participation broadens faster than expected.",
        "",
    ])

    if next_line:
        lines.extend(["## Cross Review", next_line, ""])

    lines.extend(["#", ""])
    (base / f"weekly-market-report-2021-W{w:02d}.md").write_text("\n".join(lines), encoding="utf-8")

print("created W11-W20 2021 with creative style")
