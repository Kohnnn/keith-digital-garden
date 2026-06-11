---
title: "dcf valuation and the art of guessing the future"
tags:
  - general-notes
  - investing
  - valuation
  - dcf
  - cashflow
  - wacc
keywords:
  - DCF
  - discounted cash flow
  - WACC
  - intrinsic value
  - terminal value
  - sensitivity analysis
  - growth rate
draft: false
description: How DCF valuation works, why it matters, and why two investors using DCF can get wildly different answers — and both be right.
created: 2022-09-20
updated: 2022-09-20
note_id: 220920GN46
cssclasses:
  - general-note
---

# dcf valuation and the art of guessing the future

DCF (Discounted Cash Flow) is the most rigorous valuation method available. It's also the most dangerous because it appears to be precise while actually being a guess dressed up in math.

The core idea is simple: a business is worth the sum of all future cash flows it will generate, discounted to present value. The problem is that "future cash flows" requires you to predict how a business will perform 10+ years from now — a task at which humans are remarkably bad.

*see also:* [[gn26-investing-vs-trading]] · [[gn33-value-investing-framework]] · [[gn11-moats-competitive-advantage]] · [[gn40-macro-for-traders]]

## the dcf formula

**Enterprise Value = Σ(FCF / (1+r)^n) + Terminal Value**

- **FCF (Free Cash Flow):** Cash the business generates after reinvestment
- **r (Discount Rate/WACC):** The cost of capital — lower means the business is worth more
- **n:** The year in the forecast (usually 5-10 years)
- **Terminal Value:** The value of the business after the explicit forecast period (usually 60-80% of total value)

The most important numbers are the ones you have no business guessing:
- What's the long-term growth rate? (usually 2-4% for mature businesses)
- What's the WACC? (depends on capital structure, risk, and macro environment)
- What's the terminal growth rate? (usually GDP growth)

Change any of these by 1-2%, and your valuation changes by 20-50%.

## the wacc problem

WACC (Weighted Average Cost of Capital) is the discount rate used in DCF. It's calculated as:

WACC = (E/V × Re) + (D/V × Rd × (1-Tc))

Where:
- E = market value of equity
- D = market value of debt
- Re = cost of equity (harder to estimate than you think)
- Rd = cost of debt (easier — it's the interest rate)
- Tc = tax rate

The cost of equity is usually estimated using CAPM: Re = Rf + β(Rm - Rf)

This requires estimating the "risk premium" of stocks vs risk-free assets — a parameter that changes over time and varies by analyst. Pick a risk premium of 5% vs 8%, and your valuation changes by 30%.

## the terminal value trap

Terminal value (the value of the business after your explicit forecast period) often represents 60-80% of the total DCF valuation. You're essentially guessing the value of the business based on the assumption it grows at GDP for 100+ years.

This is ridiculous. You can't meaningfully forecast 10 years out, let alone 100. Yet the entire valuation rests on a terminal value assumption that's barely justified.

Better approach: use two terminal value assumptions — conservative (2% perpetual growth) and optimistic (4% perpetual growth). The true value is likely between them.

## when dcf breaks down

DCF assumes:
1. The business survives 10+ years (execution risk, competition, disruption all ignored)
2. Capital structure remains stable
3. Competitive advantages don't erode
4. You can forecast cash flows with reasonable accuracy

None of these are safe assumptions.

- **High-growth companies:** You can't forecast their growth rate — pick wrong and you're off by 100%
- **Cyclical businesses:** Forecasting cash flows requires forecasting the economic cycle — most people can't
- **Changing business models:** A company disrupted by technology invalidates the entire DCF
- **Capital-intensive businesses:** Small changes in CapEx assumptions change valuation dramatically

## dcf as a framework, not a number

DCF is most useful as a thinking framework, not as a calculator that produces "the" answer.

Better approach:
1. Build a base-case DCF with reasonable assumptions (don't sandbag, don't be rosy)
2. Build a bull-case (optimistic growth, lower WACC)
3. Build a bear-case (slow growth, higher WACC)
4. The true value is likely a probability-weighted average of the three

Then ask: is the market price below the base case? By how much? That's your margin of safety.

## the sensitivity analysis

Always show how your valuation changes when key variables shift:
- If WACC changes by 1%, valuation changes by X%
- If growth rate changes by 1%, valuation changes by Y%

If your valuation is sensitive to WACC, you're betting on interest rate forecasts (macro). If it's sensitive to growth, you're betting on company execution (micro).

## my take

I use DCF to estimate the range where a business "should" be valued, not to predict the exact price. The market price is either below, within, or above that range. Below = buy candidate. Above = sell candidate.

I never rely on DCF alone. I combine it with comparable company analysis (what are similar businesses valued at?) and historical performance (has the business hit its forecasted metrics before?).

The most important variable is usually the one I'm least confident about. I downweight that assumption and bet on the variables where I have conviction.

<div class="linkage">
  <p><strong>linkage</strong></p>
  <ul>
    <li>[[gn26-investing-vs-trading]]</li>
    <li>[[gn33-value-investing-framework]]</li>
    <li>[[gn11-moats-competitive-advantage]]</li>
    <li>[[gn40-macro-for-traders]]</li>
  </ul>
</div>

## ending questions
what's your WACC assumption? if it's not based on current market data, your DCF is a guess, not an analysis.
