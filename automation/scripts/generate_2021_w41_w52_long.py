from pathlib import Path
from datetime import date, timedelta

base = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\mark-memo\2021"
)
base.mkdir(parents=True, exist_ok=True)
kw_dir = Path(
    r"C:\Users\Admin\Desktop\PersonalWebsite\ProjectObsidian\keith-digital-garden\content\AI_Sandbox\Keywords"
)


def week_start(year: int, week: int) -> date:
    return date.fromisocalendar(year, week, 1)


def mk_note_id(d: date) -> str:
    return f"{str(d.year)[2:]}{d.month:02d}{d.day:02d}MR01"


week_cfg = {
    41: {
        "kw": ["scarcity", "risk", "structure", "balance", "value"],
        "desc": "Inflation pressure stayed hot while risk appetite remained selective.",
        "quote": "Hot CPI does not kill trends, but it shortens patience.",
        "angle": "inflation persistence with selective risk",
        "anchors": [
            "US CPI stayed elevated and challenged duration-heavy positioning",
            "equity indices held trend while internals stayed mixed",
            "BTC reacted quickly around macro print windows",
        ],
    },
    42: {
        "kw": ["momentum", "pattern", "risk", "discipline", "trust"],
        "desc": "Momentum improved, but conviction depended on cleaner follow-through.",
        "quote": "Good momentum without discipline becomes expensive noise.",
        "angle": "momentum continuation versus weak confirmation",
        "anchors": [
            "US 10Y yields firmed as growth and inflation debate stayed open",
            "equities pushed higher with pockets of fragile breadth",
            "crypto beta outperformed then mean-reverted intraday",
        ],
    },
    43: {
        "kw": ["growth", "power", "risk", "logic", "resilience"],
        "desc": "Growth prints cooled from prior peaks, forcing quality back into focus.",
        "quote": "Late-cycle rallies reward resilience before they reward speed.",
        "angle": "growth deceleration and quality rotation",
        "anchors": [
            "Q3 GDP slowdown reframed near-term growth assumptions",
            "rate path expectations remained tied to inflation persistence",
            "BTC held directional interest but with sharper downside air pockets",
        ],
    },
    44: {
        "kw": ["change", "power", "structure", "risk", "trust"],
        "desc": "Taper start marked policy change, but liquidity was still broadly supportive.",
        "quote": "Policy change begins in language before it lands in portfolios.",
        "angle": "taper launch with conditional confidence",
        "anchors": [
            "FOMC began asset-purchase taper as expected",
            "equities absorbed policy shift without broad panic",
            "crypto remained sensitive to liquidity and dollar tone",
        ],
    },
    45: {
        "kw": ["labor", "resilience", "risk", "pattern", "value"],
        "desc": "Labor data improved, but inflation and supply stress capped enthusiasm.",
        "quote": "A better jobs print helps sentiment, not certainty.",
        "angle": "labor resilience under inflation stress",
        "anchors": [
            "NFP rebound supported cyclical confidence",
            "real yields and inflation expectations remained dominant",
            "BTC advanced toward highs as macro and flow aligned briefly",
        ],
    },
    46: {
        "kw": ["scarcity", "power", "risk", "discipline", "value"],
        "desc": "Inflation upside forced another repricing of policy path expectations.",
        "quote": "When inflation surprises again, valuation math gets audited again.",
        "angle": "inflation shock and policy repricing",
        "anchors": [
            "US CPI beat reinforced sticky-inflation concerns",
            "equity leadership narrowed toward pricing-power names",
            "BTC volatility increased around resistance rejection",
        ],
    },
    47: {
        "kw": ["trust", "structure", "risk", "balance", "logic"],
        "desc": "Cross-asset risk tone stayed constructive but increasingly two-sided.",
        "quote": "Trust is highest when markets can absorb bad news without panic.",
        "angle": "constructive tape with two-way risk",
        "anchors": [
            "macro data stayed mixed and prevented one-way positioning",
            "equities held up with factor-level churn beneath indices",
            "crypto rotated from impulse chasing toward position defense",
        ],
    },
    48: {
        "kw": ["shock", "change", "risk", "resilience", "trust"],
        "desc": "Omicron shock hit risk assets and reset short-horizon assumptions.",
        "quote": "Shocks do not just change price, they change time preference.",
        "angle": "variant shock and de-risking",
        "anchors": [
            "Omicron headlines triggered global risk-off impulse",
            "energy and travel sensitivity shaped equity dispersion",
            "crypto sold off with high-beta cohorts before stabilizing",
        ],
    },
    49: {
        "kw": ["labor", "growth", "risk", "structure", "value"],
        "desc": "Labor growth and reopening momentum conflicted with inflation anxiety.",
        "quote": "Macro conflict is where process beats prediction.",
        "angle": "reopening momentum versus inflation ceiling",
        "anchors": [
            "NFP showed ongoing labor normalization",
            "bond market remained focused on inflation durability",
            "BTC and majors traded heavy despite selective alt rebounds",
        ],
    },
    50: {
        "kw": ["scarcity", "momentum", "risk", "discipline", "power"],
        "desc": "Fresh inflation data kept policy pressure high into year-end.",
        "quote": "Late-year momentum needs macro permission, not just flow.",
        "angle": "year-end momentum under inflation pressure",
        "anchors": [
            "CPI remained hot into December",
            "equities pushed through with uneven participation quality",
            "crypto struggled to hold rebounds against tightening fears",
        ],
    },
    51: {
        "kw": ["transition", "power", "risk", "structure", "trust"],
        "desc": "December FOMC accelerated taper and confirmed regime transition.",
        "quote": "Regime transition rewards discipline before conviction.",
        "angle": "accelerated taper and regime handoff",
        "anchors": [
            "FOMC accelerated taper pace and shifted 2022 expectations",
            "equity beta rotated but avoided broad stress",
            "crypto remained reflexive to rates and liquidity headlines",
        ],
    },
    52: {
        "kw": ["renewal", "resilience", "risk", "balance", "value"],
        "desc": "Holiday liquidity thinned out while markets closed the year in transition mode.",
        "quote": "Year-end calm can hide unresolved regime pressure.",
        "angle": "thin liquidity and year-end regime carryover",
        "anchors": [
            "holiday volumes reduced signal quality across assets",
            "equities ended the year strong with concentration risk",
            "crypto closed weaker than mid-year momentum implied",
        ],
    },
}

references_by_week = {
    41: [
        (
            "BLS CPI News Release (Oct 2021)",
            "https://www.bls.gov/news.release/archives/cpi_10132021.htm",
            "Why it matters: inflation persistence drove rates repricing and valuation pressure.",
        ),
        (
            "FOMC Minutes (Sep 2021 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20210922.htm",
            "Why it matters: policy sequencing remained the core anchor for risk appetite.",
        ),
        (
            "Reuters - Bitcoin futures highlight some pitfalls for new ETFs",
            "https://www.reuters.com/technology/bitcoin-futures-highlight-some-pitfalls-new-etfs-2021-10-19/",
            "Why it matters: ETF launch changed access optics while exposing product-structure frictions.",
        ),
        (
            "ProShares Press Release - First U.S. Bitcoin-Linked ETF",
            "https://www.proshares.com/press-releases/proshares-to-launch-the-first-u.s.-bitcoin-linked-etf-on-october-19",
            "Why it matters: confirmed mainstream packaging of crypto beta into traditional rails.",
        ),
        (
            "BEA - GDP Third Quarter 2021 (Advance)",
            "https://www.bea.gov/news/2021/gross-domestic-product-third-quarter-2021-advance-estimate",
            "Why it matters: growth deceleration shifted macro positioning from chase to selectivity.",
        ),
    ],
    42: [
        (
            "FOMC Beige Book (Oct 2021)",
            "https://www.federalreserve.gov/monetarypolicy/beigebook20211020.htm",
            "Why it matters: district-level activity and price commentary framed near-term dispersion.",
        ),
        (
            "BLS Employment Situation (Oct 2021)",
            "https://www.bls.gov/news.release/archives/empsit_10082021.htm",
            "Why it matters: labor improvement supported cyclicals but did not remove inflation risks.",
        ),
        (
            "CNBC - First bitcoin futures ETF trading debut",
            "https://www.cnbc.com/2021/10/19/first-bitcoin-futures-etf-rises-2percent-in-trading-debut.html",
            "Why it matters: trading reception offered a real-time read on crypto access demand.",
        ),
        (
            "BIS - Launch of the first US bitcoin ETF",
            "https://www.bis.org/publ/qtrpdf/r_qt2112t.htm",
            "Why it matters: policy and market-structure analysis helped separate narrative from mechanics.",
        ),
        (
            "IMF - Global Financial Stability Report (Oct 2021)",
            "https://www.imf.org/en/Publications/GFSR/Issues/2021/10/12/global-financial-stability-report-october-2021",
            "Why it matters: broader leverage and liquidity context sharpened risk-budget decisions.",
        ),
    ],
    43: [
        (
            "BEA - GDP Third Quarter 2021 (Advance)",
            "https://www.bea.gov/news/2021/gross-domestic-product-third-quarter-2021-advance-estimate",
            "Why it matters: growth cooling reinforced quality and balance-sheet preference.",
        ),
        (
            "BLS CPI News Release (Oct 2021)",
            "https://www.bls.gov/news.release/archives/cpi_10132021.htm",
            "Why it matters: inflation persistence prevented a full risk-on reset.",
        ),
        (
            "Federal Reserve - FOMC Statement (Nov 3, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211103a.htm",
            "Why it matters: taper start converted guidance into concrete policy action.",
        ),
        (
            "Reuters - U.S. bitcoin ETF rises in first day",
            "https://www.reuters.com/technology/bitcoin-nears-record-high-ahead-futures-etf-listing-2021-10-19/",
            "Why it matters: flow response highlighted how quickly narrative can become positioning.",
        ),
        (
            "Glassnode Insights - Week On-Chain Newsletter",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: on-chain context helped confirm where conviction was broad versus fragile.",
        ),
    ],
    44: [
        (
            "Federal Reserve - FOMC Statement (Nov 3, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211103a.htm",
            "Why it matters: taper timeline became the central macro anchor for all risk assets.",
        ),
        (
            "BLS Employment Situation (Nov 2021)",
            "https://www.bls.gov/news.release/archives/empsit_11052021.htm",
            "Why it matters: labor momentum and participation framed the policy confidence window.",
        ),
        (
            "World Gold Council - Market Commentary",
            "https://www.gold.org/goldhub/research/market-updates",
            "Why it matters: cross-asset safe-haven behavior helped calibrate real-risk sentiment.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: macro-financial framing improved confidence in regime classification.",
        ),
        (
            "Messari - Archived Reports",
            "https://messari.io/archived-reports",
            "Why it matters: sector-level synthesis helped avoid overfitting to daily crypto volatility.",
        ),
    ],
    45: [
        (
            "BLS Employment Situation (Nov 2021)",
            "https://www.bls.gov/news.release/archives/empsit_11052021.htm",
            "Why it matters: labor rebound supported cyclical beta but did not erase inflation risk.",
        ),
        (
            "BLS CPI News Release (Nov 2021)",
            "https://www.bls.gov/news.release/archives/cpi_11102021.htm",
            "Why it matters: upside inflation surprise challenged the transitory narrative.",
        ),
        (
            "Federal Reserve - Financial Stability Report (Nov 2021)",
            "https://www.federalreserve.gov/publications/financial-stability-report.htm",
            "Why it matters: vulnerability map clarified where fragility could spread first.",
        ),
        (
            "CNBC - Bitcoin all-time high coverage",
            "https://www.cnbc.com/2024/03/05/bitcoin-all-time-high.html",
            "Why it matters: recap context still captures the key Nov 2021 momentum inflection.",
        ),
        (
            "CoinDesk Research - 2021 Annual Crypto Review",
            "https://downloads.coindesk.com/research/2021-annual-crypto-review-coindesk-research.pdf",
            "Why it matters: year-level context helped normalize weekly volatility signals.",
        ),
    ],
    46: [
        (
            "BLS CPI News Release (Nov 2021)",
            "https://www.bls.gov/news.release/archives/cpi_11102021.htm",
            "Why it matters: inflation shock forced rapid policy-path repricing.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Nov 2021 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20211103.htm",
            "Why it matters: minutes refined expected taper cadence and balance-sheet narrative.",
        ),
        (
            "World Bank Commodity Markets Outlook (Oct 2021)",
            "https://www.worldbank.org/en/research/commodity-markets",
            "Why it matters: commodity pressure supported the scarcity and pricing-power lens.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: cross-asset transmission analysis improved risk calibration.",
        ),
        (
            "Glassnode Insights - Analysis & Research",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: on-chain structure added confirmation for trend fragility checks.",
        ),
    ],
    47: [
        (
            "Federal Reserve - FOMC Minutes (Nov 2021 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20211103.htm",
            "Why it matters: wording around inflation and labor kept two-way risk alive.",
        ),
        (
            "BLS Employment Situation (Nov 2021)",
            "https://www.bls.gov/news.release/archives/empsit_11052021.htm",
            "Why it matters: labor normalization signaled resilience but not macro clarity.",
        ),
        (
            "WHO - Classification of Omicron Variant",
            "https://www.who.int/news/item/26-11-2021-classification-of-omicron-(b.1.1.529)-sars-cov-2-variant-of-concern",
            "Why it matters: variant risk abruptly changed probability weights across sectors.",
        ),
        (
            "Reuters - Bitcoin ETF market structure discussion",
            "https://www.reuters.com/technology/bitcoin-futures-highlight-some-pitfalls-new-etfs-2021-10-19/",
            "Why it matters: ETF mechanics remained a useful lens for flow quality.",
        ),
        (
            "Messari - Research Portal",
            "https://messari.io/research",
            "Why it matters: sector snapshots helped distinguish rotation from broad liquidation.",
        ),
    ],
    48: [
        (
            "WHO - Classification of Omicron Variant",
            "https://www.who.int/news/item/26-11-2021-classification-of-omicron-(b.1.1.529)-sars-cov-2-variant-of-concern",
            "Why it matters: event shock drove cross-asset de-risking and volatility repricing.",
        ),
        (
            "Federal Reserve - FOMC Minutes (Nov 2021 Meeting)",
            "https://www.federalreserve.gov/monetarypolicy/fomcminutes20211103.htm",
            "Why it matters: policy trajectory remained the macro ceiling despite variant noise.",
        ),
        (
            "BLS CPI News Release (Nov 2021)",
            "https://www.bls.gov/news.release/archives/cpi_11102021.htm",
            "Why it matters: inflation context amplified sensitivity to risk-off headlines.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: liquidity and leverage framing improved scenario planning.",
        ),
        (
            "Glassnode Insights - Week On-Chain Newsletter",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: holder behavior helped gauge whether panic was transient or structural.",
        ),
    ],
    49: [
        (
            "BLS Employment Situation (Dec 2021)",
            "https://www.bls.gov/news.release/archives/empsit_12032021.htm",
            "Why it matters: labor normalization supported growth resilience assumptions.",
        ),
        (
            "BLS CPI News Release (Dec 2021)",
            "https://www.bls.gov/news.release/archives/cpi_12102021.htm",
            "Why it matters: hot inflation preserved policy-tightening pressure into year-end.",
        ),
        (
            "Federal Reserve - FOMC Statement (Dec 15, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211215a.htm",
            "Why it matters: accelerated taper advanced the regime transition timeline.",
        ),
        (
            "CoinDesk Data - Reports",
            "https://data.coindesk.com/reports",
            "Why it matters: report-based crypto context reduced dependence on headline noise.",
        ),
        (
            "IMF - Global Financial Stability Report (Oct 2021)",
            "https://www.imf.org/en/Publications/GFSR/Issues/2021/10/12/global-financial-stability-report-october-2021",
            "Why it matters: broad vulnerability framing helped stress-test bullish assumptions.",
        ),
    ],
    50: [
        (
            "BLS CPI News Release (Dec 2021)",
            "https://www.bls.gov/news.release/archives/cpi_12102021.htm",
            "Why it matters: inflation remained the main variable behind valuation compression.",
        ),
        (
            "Federal Reserve - FOMC Statement (Dec 15, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211215a.htm",
            "Why it matters: faster taper reinforced policy normalization expectations.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: macro-financial interactions clarified where risk could break first.",
        ),
        (
            "Reuters - Bitcoin futures ETF launch context",
            "https://www.reuters.com/technology/bitcoin-futures-highlight-some-pitfalls-new-etfs-2021-10-19/",
            "Why it matters: ETF structure remained important for interpreting flow momentum.",
        ),
        (
            "Messari - Archived Reports",
            "https://messari.io/archived-reports",
            "Why it matters: thematic reports helped balance tactical trading with structural views.",
        ),
    ],
    51: [
        (
            "Federal Reserve - FOMC Statement (Dec 15, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211215a.htm",
            "Why it matters: policy acceleration confirmed the late-2021 regime handoff.",
        ),
        (
            "Federal Reserve - Summary of Economic Projections (Dec 2021)",
            "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20211215.htm",
            "Why it matters: projections anchored 2022 path assumptions for rates and growth.",
        ),
        (
            "BLS Employment Situation (Dec 2021)",
            "https://www.bls.gov/news.release/archives/empsit_12032021.htm",
            "Why it matters: labor data provided the employment side of the policy reaction function.",
        ),
        (
            "CoinDesk Research - 2021 Annual Crypto Review",
            "https://downloads.coindesk.com/research/2021-annual-crypto-review-coindesk-research.pdf",
            "Why it matters: annual framing highlighted where weekly moves fit or deviated.",
        ),
        (
            "Glassnode Insights - Analysis & Research",
            "https://insights.glassnode.com/tag/analyses/",
            "Why it matters: on-chain structure gave a second check on macro-led price action.",
        ),
    ],
    52: [
        (
            "Federal Reserve - FOMC Statement (Dec 15, 2021)",
            "https://www.federalreserve.gov/newsevents/pressreleases/monetary20211215a.htm",
            "Why it matters: year-end policy posture defined starting conditions for 2022 risk.",
        ),
        (
            "BLS CPI News Release (Dec 2021)",
            "https://www.bls.gov/news.release/archives/cpi_12102021.htm",
            "Why it matters: inflation floor remained high entering the next calendar year.",
        ),
        (
            "BIS Quarterly Review (Dec 2021)",
            "https://www.bis.org/publ/qtrpdf/r_qt2112.htm",
            "Why it matters: quarter-end analysis helped validate cross-asset regime labels.",
        ),
        (
            "Messari - Crypto Research",
            "https://messari.io/research",
            "Why it matters: sector snapshots helped rank opportunities beyond index-level moves.",
        ),
        (
            "Glassnode Insights - Week On-Chain Newsletter",
            "https://insights.glassnode.com/tag/newsletter/",
            "Why it matters: holder behavior offered a practical read on conviction into year-end.",
        ),
    ],
}

for w in range(41, 53):
    cfg = week_cfg[w]
    kws = cfg["kw"][:5]
    start = week_start(2021, w)
    end = start + timedelta(days=6)
    title = f"Weekly Market Report 2021-W{w:02d}"
    prev_link = f"[[weekly-market-report-2021-W{w - 1:02d}]]"
    next_line = (
        f"- Linked from: [[weekly-market-report-2021-W{w + 1:02d}]] - Follow-up week re-tested this regime transition."
        if w < 52
        else ""
    )

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
        f"I read this week as {cfg['angle']}. I avoided broad conviction because the tape still showed strong headline moves with uneven internal confirmation. Instead of chasing direction, I stayed with process: identify the regime, map invalidation, and only then add risk.",
        "",
        "The best trades this week were less about speed and more about sequence. I wanted the same chain every time: macro catalyst, rates reaction, breadth response, then crypto confirmation. Whenever one link failed, I treated upside as tactical and reduced position size.",
        "",
        f"My anchor set stayed constant: {cfg['anchors'][0].lower()}, {cfg['anchors'][1].lower()}, and {cfg['anchors'][2].lower()}. If those signals aligned, I allowed more conviction; if they diverged, I protected capital first.",
        "",
        "For next week, my bias is conditional. I need cleaner participation and calmer cross-asset correlations before I increase risk. If volatility remains event-driven, I will continue prioritizing flexibility over prediction.",
        "",
        "> [!note] Market Pulse",
        f'> "{cfg["quote"]}"',
        "",
        "## Overall Summary",
        "- The week stayed transitional with inflation and policy still setting the ceiling for risk.",
        f"- {cfg['anchors'][0]}",
        f"- {cfg['anchors'][1]}",
        f"- {cfg['anchors'][2]}",
        "",
        "## Commentary",
        "- I focused on cause-effect structure instead of narrative velocity.",
        "- I sized positions around invalidation first, not conviction first.",
        "- I treated index strength and breadth strength as separate signals.",
        "",
        "## Rates & Liquidity",
        "- Real yields, dollar tone, and policy language remained the primary filter for risk-taking.",
        "- Liquidity still supported rallies, but reaction asymmetry increased around macro releases.",
        "",
        "## Equities",
        "- Index-level resilience masked frequent factor rotation and quality preference.",
        "- I favored pricing-power and balance-sheet durability over pure narrative beta.",
        "",
        "## Commodities & FX",
        "- Commodity pressure and dollar behavior helped confirm whether inflation fear dominated.",
        "- FX moves remained useful for validating or rejecting short-horizon equity narratives.",
        "",
        "## Crypto Macro",
        "- Crypto traded as a high-frequency policy and liquidity barometer.",
        "- I avoided overfitting to single-session moves without broader participation support.",
        "",
        "## Positioning & Flow",
        "- Flow was tactical and often event-clustered around macro dates.",
        "- I kept exposure modular so I could add or cut quickly without breaking process.",
        "",
        "## News Tape",
        "- Macro headlines dominated direction, but second-order effects came from rates and sector dispersion.",
        "- Event shocks changed correlation structure faster than trend signals could adapt.",
        "",
        "## Blog / Research Pulse",
        "- Report-style research was more useful than hot takes for keeping regime labels stable.",
        "- I used cross-checks between macro releases and crypto analytics before increasing conviction.",
        "",
        "## Outlook Next Week",
        "- Main risk: inflation and policy expectations tighten financial conditions faster than expected.",
        "- Main opportunity: breadth improves while volatility compresses after event clusters clear.",
        "",
        "## References",
    ]

    for title_ref, url, why in references_by_week[w]:
        lines += [
            f"> [!ref] {title_ref}",
            f"> {url}",
            f"> {why}",
            "",
        ]

    lines += [
        "## questions / next",
        "- Did I separate structural trend from event-driven relief correctly?",
        "- Which signal deserves highest weight next week: rates, breadth, or volatility?",
        "- Where can liquidity mask weak participation for longer than expected?",
        "- What invalidates this week's regime label first?",
        "",
        "## Extra Notes",
        "### Narrative Weighting",
        "risk 30% / structure 25% / trust 20% / value 15% / change 10%.",
        "",
        "### Data Quality",
        "Data quality: mixed - official macro releases plus market news and research reports.",
        "",
        "### Counter-thesis",
        "This view breaks if participation broadens decisively while inflation sensitivity fades and policy communication stabilizes.",
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
for w in range(41, 53):
    kws = week_cfg[w]["kw"][:5]
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


# add linked-from to W40
w40 = base / "weekly-market-report-2021-W40.md"
if w40.exists():
    t = w40.read_text(encoding="utf-8")
    lf = "- Linked from: [[weekly-market-report-2021-W41]] - Follow-up week re-tested this regime transition."
    if lf not in t:
        if "## Cross Review" in t:
            t = t.replace("## Cross Review\n", "## Cross Review\n" + lf + "\n")
        else:
            t = t.replace("\n## linkage", "\n## Cross Review\n" + lf + "\n\n## linkage")
        w40.write_text(t, encoding="utf-8")

print("Created W41-W52 long-form and synced keyword links")
