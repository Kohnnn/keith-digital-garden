# Deep Notes: Memory & Learning
## Ebbinghaus, Spaced Repetition, Anki — Science of Long-Term Retention

**Author:** Orchestrator  
**Date:** 2026-04-23  
**Type:** Weekly Behavioral Science Sync  
**Word Count:** ~3,800 words  
**Sources:** Hermann Ebbinghaus (Forgetting Curve), Piotr Woźniak (SM-2 Algorithm), Michael Nielsen (Spaced Repetition)

---

## Executive Summary

This note explores the scientific foundations of human memory, from Ebbinghaus's groundbreaking forgetting curve to modern spaced repetition systems. Understanding how memory encodes, stores, and retrieves information enables evidence-based strategies for learning anything effectively. The key insight: forgetting is not failure but the mechanism that enables intelligent scheduling of review.

---

## 1. Hermann Ebbinghaus — The Forgetting Curve

### 1.1 The Pioneering Study

In 1885, Hermann Ebbinghaus conducted the first systematic experiments on memory, memorizing nonsense syllables and tracking retention over time.

**Method:**
- Learned lists of 12-36 syllables
- Tested recall at intervals: 20min, 1hr, 9hr, 1day, 6days, 31days
- Measured savings (relearning time vs original learning)

### 1.2 The Classic Forgetting Curve

```
FORGETTING CURVE (Ebbinghaus, 1885):

Retention
   100%│                                                   
    90%│┐                                                  
    80%││┐                                                 
    70%│││┐                                                
    60%│││ │┐                                             
    50%│││ │ │┐                                           
    40%│││ │ │ │┐                                        
    30%│││ │ │ │  │┐                                    
    20%│││ │ │ │  │  │┐                                
    10%│││ │ │ │  │  │  │└─────────────────────────────
       └──────────────────────────────────────────────────
         0    1    2    3    4    5    6    7    8   Days
         
Key insight: ~50% forgotten within 1 day without review
```

### 1.3 Factors Affecting Retention

| Factor | Effect on Forgetting |
|--------|---------------------|
| **Meaningfulness** | Meaningful material retained longer |
| **Repetition** | Each review slows subsequent forgetting |
| **Sleep** | Consolidation during sleep strengthens memory |
| **Emotional salience** | Emotional events remembered vividly |
| **Context** | Memory retrieval improved in same context |
| **State-dependent memory** | Retrieve better in same physiological state |

### 1.4 The J-shaped Curve of Review

Each successful review creates a new, shallower forgetting curve:

```
REVIEW SCHEDULE EFFECT:

1st Review → Curve flattens slightly
     ↓
2nd Review → Curve flattens more
     ↓
3rd Review → Memory becomes nearly permanent
     ↓
After 5-6 successful reviews: Can last years

Retention
   100%│
    90%││                    ╱────────────── (3rd review)
    80%││┐                 ╱
    70%│││┐              ╱              (2nd review)
    60%││││┐           ╱
    50%││││ │┐       ╱                         (1st review)
    40%││││ │ │┐   ╱
    30%││││ │ │ │┐╱
    20%││││ │ │ ││
    10%││││ │ │ ││
       └──────────────────────────────────────────────────
              1     7    14    30    60   180   Days
```

---

## 2. The Science of Spaced Repetition

### 2.1 The Spacing Effect

The spacing effect is one of the most robust findings in cognitive psychology:

> "Distributing learning over time produces superior long-term retention compared to massing (cramming)."

**Research Evidence:**
- Cepeda et al. (2006): Analyzed 317 studies, found optimal intervals depend on desired retention duration
- For 1-week retention: intervals of 1-7 days
- For 1-year retention: intervals of 1-6 months

### 2.2 Why Spacing Works

**Three Theories:**

| Theory | Explanation |
|--------|-------------|
| **Encoding Variability** | Different retrieval contexts strengthen memory traces |
| **Effortful Retrieval** | Forgetting requires more effort to relearn = stronger consolidation |
| **State-Dependent Memory** | Varying context (time, place, mood) builds robust associations |

### 2.3 The Testing Effect

Testing isn't just assessment — it's a learning intervention:

```
TESTING EFFECT:

Study Only Group:
  Learn → Learn → Learn → Test → Poor long-term retention

Study + Test Group:
  Learn → Test → Learn → Test → Strong long-term retention

Key: Retrieving from memory strengthens the trace
```

**Roediger & Butler (2011):** Testing improved retention by ~50% compared to restudying.

---

## 3. The SM-2 Algorithm

### 3.1 Origins

Developed by Piotr Woźniak in 1987, SM-2 is the algorithm underlying most modern spaced repetition systems.

### 3.2 Core Parameters

SM-2 tracks two key variables:

| Variable | Description | Range |
|----------|-------------|-------|
| **Ease Factor (EF)** | Difficulty modifier | 1.3 - 2.5 |
| **Interval** | Days until next review | Starts at 1 |

### 3.3 The Algorithm

```
SM-2 ALGORITHM:

After each review, calculate:

1. EF' = EF + (0.1 - (5-q) × (0.08 + (5-q) × 0.02))
   where q = quality of response (0-5)
   
   EF' must be ≥ 1.3

2. If q < 3: Reset interval = 1
   
   If q ≥ 3:
   - If first successful review: interval = 1
   - If second successful review: interval = 6
   - Otherwise: interval = previous × EF

GRADING SCALE:
┌────────────────────────────────────────────────────────────┐
│ 5: Perfect response, no hesitation                         │
│ 4: Correct response with some hesitation                   │
│ 3: Correct response with difficulty (minimum for advance) │
│ 2: Incorrect response, but upon seeing answer, remembered  │
│ 1: Incorrect response, but answer seemed easy to recall    │
│ 0: Complete blackout                                       │
└────────────────────────────────────────────────────────────┘
```

### 3.4 Limitations of SM-2

- Assumes uniform difficulty within a card
- Doesn't account for item dependencies
- Doesn't optimize for minimum review time
- Memory strength is binary, not continuous

---

## 4. Anki — Implementation at Scale

### 4.1 What is Anki?

Anki is a cross-platform flashcard application implementing spaced repetition with additional features:

**Key Features:**
- SM-2 algorithm (with modifications)
- Flexible card types (cloze deletions, images, audio)
- Synchronization across devices
- Large shared deck library
- Advanced scheduling options

### 4.2 Anki's Modified Algorithm

Anki extends SM-2 with:

```
ANKI MODIFICATIONS:

1. Graduating Interval
   - New cards graduate after first review
   - Default: 1 day → 6 days

2. Easy Bonus
   - "Easy" button multiplies interval × easy bonus (default 1.3)

3. Interval Modifier
   - Global setting affects all intervals (default 100%)

4. Leeches
   - Cards marked as "leech" after 8 lapses
   - Suggested to suspend or edit

5. FSRS (Free Spaced Repetition Scheduler)
   - Modern alternative, uses request memories state
   - More accurate than SM-2
```

### 4.3 Effective Anki Usage

**Best Practices:**

| Practice | Why |
|----------|-----|
| **Create your own cards** | Personalization improves encoding |
| **Keep cards atomic** | One fact per card |
| **Use cloze sparingly** | Multiple cloze = multiple cards |
| **Add context/images** | Visual encoding strengthens recall |
| **Review daily** | Consistency prevents pile-up |
| **Unburden cards from rare info** | Only memorize high-value knowledge |

**Common Mistakes:**

| Mistake | Problem | Solution |
|---------|---------|----------|
| Too many new cards | Review pile-up | Limit daily new cards |
| Copying without understanding | False fluency | Comprehension first, then Anki |
| Keeping leeches | Frustration, wasted time | Suspend or rewrite |
| Neglecting mature cards | Retention decays | Review daily, even when tired |

---

## 5. Cognitive Load Theory

### 5.1 Three Types of Cognitive Load

John Sweller's framework divides mental effort:

```
COGNITIVE LOAD TYPES:

┌─────────────────────────────────────────────────────────────┐
│                    INTRINSIC LOAD                          │
│  (Inherent complexity of the material)                     │
│  → Can be reduced by breaking into components              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    EXTRANEOUS LOAD                         │
│  (Unnecessary processing from poor design)                 │
│  → Should be minimized                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    GERMINAL LOAD                            │
│  (Effort that builds schemas)                              │
│  → Desirable difficulty, aids long-term learning          │
└─────────────────────────────────────────────────────────────┘

Total Load > Working Memory Capacity = Learning Impaired
Total Load ≤ Working Memory Capacity = Learning Possible
```

### 5.2 Implications for Learning

| Strategy | Effect |
|----------|--------|
| **Part-task training** | Reduces intrinsic load by isolating components |
| **Worked examples** | Reduces extraneous load, shows expert paths |
| **Segmenting** | Breaks complex sequences into learnable chunks |
| **Interleaving** | Mixing topics improves discrimination (but harder) |

### 5.3 Desirable Difficulties

Robert Bjork's framework emphasizes that certain difficulties enhance learning:

| Difficulty | Effect |
|-----------|--------|
| **Interleaving** | Harder but better long-term retention |
| **Retrieval practice** | Forgetting feels bad, but strengthens memory |
| **Variable practice** | Build adaptable schemas |
| **Generation** | Creating answers > recognizing them |

---

## 6. Memory Consolidation

### 6.1 The Consolidation Timeline

Memory isn't fixed at encoding — it continues to be processed during sleep and rest.

```
CONSOLIDATION TIMELINE:

ENCODING ─────► SYNAPSE CHANGES ─────► LONG-TERM MEMORY
(hours)            (days-weeks)            (permanent)

     ↓                  ↓
  Hippocampal       Systemic
  consolidation     consolidation
     ↓                  ↓
  Initial trace    Systems integration
  formed           (neocortex)
```

### 6.2 Sleep & Memory

Sleep is critical for memory consolidation:

| Sleep Stage | Memory Type | Function |
|-------------|-------------|----------|
| **NREM Stage 2** | Procedural, semantic | Cortical integration |
| **Slow-wave sleep** | Episodic, declarative | Hippocampal replay |
| **REM sleep** | Emotional, creative | Integration, abstraction |

### 6.3 The Active System Consolidation

**Born & Wagner (2004):**
- Sleep selectively strengthens memories tied to future relevance
- Emotional memories are preserved better during REM
- Spatial memories replayed during slow-wave sleep

**Practical Implication:** What you review before sleep is better remembered.

---

## 7. Encoding Strategies

### 7.1 Levels of Processing

Craik & Lockhart (1972): Deeper processing = better retention.

```
LEVELS OF PROCESSING:

SHALLOW                    DEEP
─────────────────────────────
Letter count              Meaning comprehension
Word length               Semantic relationships
Font detection            Personal relevance
      ↓                           ↓
    10%                        80%
    retention                 retention
```

### 7.2 The Encoding Principle

**Elaborative Interrogation:** Ask "why" and "how" questions during learning.

**Generation Effect:** Producing information yourself > passively receiving it.

**Testing Effect:** Every retrieval attempt strengthens the memory.

### 7.3 Mnemonic Techniques

| Technique | Use Case | Example |
|-----------|----------|---------|
| **Method of Loci** | Ordered lists | Walk through familiar place |
| **Chunking** | Numbers, sequences | 555-1234 vs 5551234 |
| **Acronyms** | Lists | HOMES (Hudson, Ontario...) |
| **Keyword Method** | Foreign vocabulary | ربط (rabita) → rabbit |
| **Peg System** | Numbered associations | 1-bun, 2-shoe... |

---

## 8. Working Memory & Its Limits

### 8.1 The Magic Number 7

Miller (1956): Working memory holds 7 ± 2 chunks.

**Cowan's Reconsideration:** More like 4 ± 1 for focused attention.

### 8.2 What Determines Chunk Size?

Expertise determines chunking:

```
CHUNKING BY EXPERTISE:

Novice viewing chess board:
┌────────────────────────────────┐
│ ♜♞♝♛♚♝♞♜  ← 32 individual pieces
│ ♟♟♟♟♟♟♟♟                       
│                               
│                               
│ ♙♙♙♙♙♙♙♙                       
│ ♙♘♙♗♕♕♘♙                       
└────────────────────────────────┘
→ ~32 chunks

Grandmaster viewing position:
→ ~7 meaningful patterns/chunks
→ Immediate recognition of tactical possibilities
```

### 8.3 Working Memory Training

**The Controversy:** Working memory training shows near-transfer but not far-transfer.

| Claim | Evidence |
|-------|----------|
| "Brain training improves IQ" | Weak to none |
| "N-back training helps fluid intelligence" | Mixed, largely negative |
| "Training improves attention" | Some near-transfer |

**What Works:** Domain-specific practice improves domain-specific performance.

---

## 9. Forgetting as Feature

### 9.1 Adaptive Forgetting

Not all forgetting is bad:

| Type | Function |
|------|----------|
| **Interference forgetting** | Clears outdated information |
| **Motivated forgetting** | Protects emotional wellbeing |
| **Retrieval failure** | Signals optimal review timing |

### 9.2 The Role of Forgetting in Learning

**The Desirable Difficulty:**
- Forgetting forces reconsolidation
- Each successful retrieval strengthens the trace
- Forgetting rates indicate optimal review timing

```
FORGETTING AS SIGNAL:

High forgetting rate → Optimal review timing
         ↓
    Review card now
         ↓
    Strengthened memory
         ↓
    Lower forgetting rate until next interval
```

### 9.3 Intelligent Forgetting

Piotr Woźniak's principle: "Forgetting is the mother of learning."

- Each forgetting event should occur at the moment of maximum benefit
- Too early = wasted review
- Too late = retrieval failure becomes more likely

---

## 10. Building a Personal Knowledge System

### 10.1 The Zettelkasten Connection

Niklas Luhmann's slip-box system prefigured modern spaced repetition:

```
ZETTELKASTEN + SPACED REPETITION:

┌──────────────────────────────────────────────────────────┐
│ Capture → Process → Connect → Review → Create            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ Capture: Atomic notes from sources                       │
│ Process:  Understand, link to existing knowledge        │
│ Connect:  Link to related notes (Zettelkasten)           │
│ Review:   Spaced repetition for retention                │
│ Create:   New insights from connected knowledge          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 10.2 What to Put in Anki

**High-Yield Content:**

| Content | Example |
|---------|---------|
| **Vocabulary** | Target language words |
| **Medical/Professional** | Anatomy, drug interactions |
| **Historical facts** | Dates, names, causations |
| **Procedural knowledge** | Formulas, algorithms |
| **Conceptual connections** | Bridges between ideas |

**Low-Yield Content:**

| Content | Reason |
|---------|--------|
| Ephemeral facts | Outdate quickly |
| Obvious information | Already know it |
| Overly complex cards | Cognitive overload |
| One-off trivia | No retention value |

---

## 11. Advanced: Making Cards That Work

### 11.1 The Ideal Card

```
ATOMIC CARD TEMPLATE:

Front: What is the capital of France?

Back: Paris

WHY THIS WORKS:
✓ One fact
✓ Clear answer
✓ Minimal context switching
✓ Easy to review quickly
```

### 11.2 Cloze Deletion Guidelines

```
CLOZE CAUTIONS:

Basic: The {{c1::Eiffel Tower}} is in Paris.
       ✓ One blank

Complex: The {{c1::Eiffel Tower}} ({{c2::1889}}) was built
         for the {{c3::World's Fair}}.
         ⚠ Three blanks = three separate cards
         ⚠ Interference between cards

Better approach:
  Card 1: "What is the Eiffel Tower's name for its year of completion?"
  Card 2: "For what event was the Eiffel Tower built?"
```

### 11.3 Testing Understanding vs Recognition

```
RECOGNITION CARD (Weak):
What is 2+2?
→ 4

UNDERSTANDING CARD (Strong):
What is special about the number 4 in binary?
→ 4 is 100 in binary — the first perfect square
  that is also a power of 2 (2²)

WHY: Requires active recall + explanation
     Tests integration with other knowledge
```

---

## 12. Practical Learning Protocol

### 12.1 The Evidence-Based Learning Stack

```
┌──────────────────────────────────────────────────────────┐
│                  THE LEARNING PROTOCOL                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ 1. SPACED REPETITION (Anki)                             │
│    → Daily review, never skip                           │
│    → SM-2 or FSRS algorithm                              │
│                                                          │
│ 2. ELABORATIVE ENCODING                                 │
│    → Ask "why" and "how" during learning                 │
│    → Connect to existing knowledge                       │
│                                                          │
│ 3. RETRIEVAL PRACTICE                                   │
│    → Close the book, recall                               │
│    → Practice tests > re-reading                         │
│                                                          │
│ 4. SLEEP CONSOLIDATION                                  │
│    → Review before sleep                                 │
│    → Prioritize 7-9 hours                               │
│                                                          │
│ 5. INTERLEAVING                                         │
│    → Mix topics during practice                          │
│    → Harder but better retention                         │
│                                                          │
│ 6. MINDFUL DIFFICULTY                                   │
│    → Embrace forgetting as feedback                      │
│    → Struggle signals learning                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 12.2 Learning New Domain

| Phase | Duration | Activity |
|-------|----------|----------|
| **Immersion** | 1-2 weeks | Overview, key concepts, vocabulary |
| **Anki Setup** | Ongoing | Create cards for core knowledge |
| **Practice** | Daily | Review + application + generation |
| **Consolidation** | Weekly | Connect new to existing knowledge |
| **Assessment** | Monthly | Test, identify gaps, adjust |

---

## Key Takeaways

1. **Forgetting curve is exponential** — ~50% forgotten in 24 hours without review
2. **Spaced repetition exploits the spacing effect** — distributed practice > massed practice
3. **Retrieval is a learning event** — every recall strengthens the memory trace
4. **Sleep is non-negotiable** — memory consolidation happens during sleep
5. **Anki works if used correctly** — atomic cards, daily review, own content
6. **Working memory is limited** — chunk complex information
7. **Forgetting is informative** — signals optimal review timing
8. **Cognitive load matters** — reduce extraneous load, embrace desirable difficulties

---

## References

1. Ebbinghaus, H. (1885). *Über das Gedächtnis.* Duncker & Humblot.

2. Cepeda, N.J., et al. (2006). "Spacing effects in learning." *Psychological Science.*

3. Roediger, H.L., & Butler, A.C. (2011). "The critical role of retrieval practice in long-term retention." *Trends in Cognitive Sciences.*

4. Woźniak, P.A. (1990). "Optimization of learning." *Master's thesis, University of Technology.*

5. Sweller, J. (1988). "Cognitive load during problem solving." *Cognitive Science.*

6. Bjork, R.A., & Bjork, E.L. (2011). "Making things hard on yourself, but in a good way." *Psychology of Learning and Motivation.*

7. Born, J., & Wagner, U. (2004). "Sleep in a good cause." *Nature.*

8. Craik, F.I., & Lockhart, R.S. (1972). "Levels of processing." *Journal of Verbal Learning and Verbal Behavior.*

---

*Generated for Weekly Behavioral Science Sync — 2026-04-23*
