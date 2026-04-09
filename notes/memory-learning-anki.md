---
title: "Memory & Learning: Spaced Repetition, Anki, and the Science of Long-Term Retention"
tags:
  - memory
  - learning
  - spaced-repetition
  - Anki
  - Ebbinghaus
  - cognitive-science
created: 2026-04-09
---

# Memory & Learning: Spaced Repetition, Anki, and the Science of Long-Term Retention

> "Memory is the residue of thought." — Daniel Kahneman

## Introduction

**Hermann Ebbinghaus** pioneered memory research in 1885 with his "Forgetting Curve." Nearly 140 years later, his insights have been refined into powerful learning technologies. This note explores the neuroscience of memory, the mathematics of spaced repetition, and practical implementation using tools like **Anki**.

---

## 1. Ebbinghaus and the Forgetting Curve

### The Original Experiment

Ebbinghaus memorized nonsense syllables and tested retention over days. His results:

| Time Since Learning | Retention Rate |
|--------------------|---------------|
| 20 minutes | 58% |
| 1 hour | 44% |
| 9 hours | 36% |
| 1 day | 34% |
| 2 days | 28% |
| 6 days | 25% |
| 31 days | 21% |

### Key Observations

- **Rapid initial decay**: Most forgetting happens in first 24 hours
- **Gradual stabilization**: Curve flattens with review
- **Total recall impossible**: Some forgetting is inevitable

### The Saver Curve

With **review sessions**, retention dramatically improves:

| Reviews | Interval Achieved | Retention |
|---------|------------------|-----------|
| 1 | 1 day | 90%+ |
| 2 | 3-7 days | 85%+ |
| 3 | 14-30 days | 80%+ |
| 4 | 60-90 days | 75%+ |
| 5 | 180+ days | 70%+ |

---

## 2. The Neuroscience of Memory

### Memory Systems Overview

| System | Duration | Capacity | Type |
|--------|----------|----------|------|
| **Sensory** | Milliseconds | Limited | Perceptual input |
| **Working** | Seconds | 7 ± 2 items | Active processing |
| **Short-term** | Minutes | 15-30 bits | Temporary storage |
| **Long-term** | Lifetime | Unlimited | Semantic, episodic, procedural |

### The Three-Stage Memory Model

```
ENCODING → CONSOLIDATION → RETRIEVAL
```

### Encoding (Acquisition)

- **Attention**: Filters relevant information
- **Elaboration**: Connects to existing knowledge
- **Visual imagery**: Dual coding enhances recall
- **Meaning**: Semantic processing > rote memorization

### Consolidation (Storage)

| Type | Mechanism | Location |
|------|-----------|----------|
| **Synaptic** | Strengthen neural connections | Cortex |
| **Systems** | Transfer from hippocampus to cortex | Hippocampus → Cortex |
| **Reconsolidation** | Memory becomes labile after retrieval | Hippocampus |

### Retrieval (Recall)

- **Cue-dependent**: Recall is context-sensitive
- **Priming**: Prior exposure facilitates recognition
- **Spaced retrieval**: Active recall strengthens memory

---

## 3. The Spacing Effect

### What It Is

The **spacing effect** demonstrates that distributed practice produces better long-term retention than massed practice.

| Practice Type | Immediate Test | Delayed Test |
|---------------|----------------|--------------|
| **Massed** (all at once) | 80% | 20% |
| **Spaced** (distributed) | 70% | 65% |

### Why Spacing Works

1. **Retrieval practice**: Each review requires memory retrieval
2. **Desirable difficulty**: Forgetting creates productive struggle
3. **Context variation**: Different retrieval contexts strengthen memory
4. **Memory reconsolidation**: Each recall updates the memory trace

### The Testing Effect

Active recall vs. passive re-reading:

| Activity | Learning Gain | Transfer |
|----------|---------------|----------|
| Re-reading | Low | Poor |
| flashcards | High | Good |
| Practice testing | Highest | Best |

---

## 4. Anki and the Algorithm

### What is Anki?

**Anki** is a spaced repetition software (SRS) implementing the **SM-2 algorithm** (based on SuperMemo 2):

```
SM-2 calculates intervals based on:
- Quality of recall (0-5 scale)
- Previous interval
- Ease factor (difficulty modifier)
```

### The Quality Ratings

| Grade | Response | Interval Effect |
|-------|----------|-----------------|
| 0 | Complete blackout | Reset to 1 day |
| 1 | Wrong, remembered | Reset to 1 day |
| 2 | Wrong, easy recall | Reset to 1 day |
| 3 | Correct with difficulty | Same interval |
| 4 | Correct, some hesitation | Interval × 1.2 |
| 5 | Perfect recall | Interval × ease factor |

### Ease Factor Adjustment

```
New Ease = Old Ease + (0.1 - (5 - grade) × 0.08)
Minimum ease: 1.3
```

| Initial Response | Ease Factor |
|-----------------|-------------|
| Consistently hard (grade 2-3) | 1.3 - 2.0 |
| Mixed responses | 2.0 - 2.5 |
| Consistently easy (grade 4-5) | 2.5 - 3.0+ |

---

## 5. Designing Effective Flashcards

### The Minimalist Principle

> One card = one concept

| Bad Practice | Better Approach |
|--------------|-----------------|
| Long explanations | Break into atomic facts |
| Multiple questions per card | Separate questions |
| Cloze deletion overload | One fill-in per card |
| Vague prompts | Specific questions |

### Card Types in Anki

| Type | Use Case | Example |
|------|----------|---------|
| **Basic** | Question → Answer | "What is the capital of France?" → "Paris" |
| **Reversed** | Bidirectional | Also: "Paris" → "Capital of France" |
| **Cloze** | Fill in blank | "The capital of [...](1) is Paris" |
| **Image Occlusion** | Hide parts of image | Hide labels on anatomy diagram |

### Cloze Deletion Guidelines

```
Basic: {{c1::Paris}} is the capital of France.
Multi: {{c1::H}}e {{c2::lo}}t dog.
Nested: {{c1::Paris}} ({{c2::France}}) is {{c3::the capital}}.
```

---

## 6. Interleaving and Varied Practice

### Blocked vs. Interleaved Practice

| Practice Type | Example | Effect |
|---------------|--------|--------|
| **Blocked** | AAA BBB CCC | Fast initial learning |
| **Interleaved** | ABC ABC ABC | Better long-term retention |

### Why Interleaving Works

1. **Discrimination learning**: Practice distinguishing concepts
2. **Context variation**: Multiple retrieval contexts
3. **Schema development**: Build broader understanding
4. **Transfer**: Apply to novel problems

### Practical Implementation

| Domain | Blocked | Interleaved |
|--------|---------|-------------|
| **Math** | All algebra, then all geometry | Mixed problem types |
| **Languages** | Vocabulary per chapter | Random vocabulary review |
| **Motor skills** | Practice one skill | Rotate between skills |

---

## 7. Sleep and Memory Consolidation

### The Memory Consolidation Timeline

| Sleep Stage | Memory Type | Mechanism |
|-------------|-------------|-----------|
| **NREM Stage 2** | Declarative facts | Sharp-wave ripples transfer to cortex |
| **NREM Stage 3** | Procedural skills | Motor cortex reorganization |
| **REM** | Emotional memory | Amygdala-hippocampus dialogue |

### Sleep Spindles and Learning

- **Sleep spindles** (NREM Stage 2) correlate with learning gain
- Peak spindle density predicts memory improvement
- 7-8 hours optimal for spindle production

### The 24-Hour Learning Cycle

```
Morning: Learn new material
Daytime: Light review (optional)
Night: Sleep triggers consolidation
Next morning: Review strengthened memory
```

---

## 8. Practical Anki Workflow

### Daily Workflow

```
Daily Reviews
├── Open Anki (morning or evening)
├── Complete all due cards
├── Add new cards (limit: 20-30/day)
├── Check retention (80-90% ideal)
└── Archive unused cards
```

### Card Creation Workflow

```
1. Encounter new concept in source material
2. Wait 24 hours (let memory settle)
3. Create card only if still interesting
4. Write question first, then answer
5. Test yourself immediately
6. Revise if answer was obvious
```

### Maintenance Schedule

| Task | Frequency | Time |
|------|-----------|------|
| Daily reviews | Daily | 15-30 min |
| Suspend unused cards | Weekly | 10 min |
| Review retention stats | Weekly | 5 min |
| Full deck audit | Monthly | 1 hour |
| Delete obsolete cards | Quarterly | 30 min |

---

## 9. Common Mistakes and Solutions

| Mistake | Problem | Solution |
|---------|---------|----------|
| Too many new cards | Overwhelm, low retention | Cap at 20-30 new/day |
| Large clozes | Hard to recall | Split into multiple cards |
| Re-reading answers | Passive, no testing | Write without looking |
| Undue hardship | Gives up | Start with easier cards |
| Ignoring stats | Hidden problems | Check retention weekly |

### Red Flags

| Warning | Implication | Action |
|---------|-------------|--------|
| Retention < 70% | Cards too difficult | Edit or suspend |
| Retention > 95% | Cards too easy | Increase interval |
| Large review queue | Too many new cards | Reduce daily limit |
| Streak breaks | Irregular reviews | Reduce load, build habit |

---

## 10. Research Summary

### Key Studies

| Study | Finding | Implication |
|-------|---------|-------------|
| Cepeda et al. (2006) | Optimal intervals lengthen over time | Space reviews exponentially |
| Roediger & Karpicke (2006) | Testing > re-reading | Prioritize retrieval |
| Karpicke & Roediger (2008) | Repeated testing produces 60% better retention | Review by re-testing |
| Baharav et al. (2023) | Anki use correlates with medical exam success | SRS has real-world validity |

### The Forgetting Curve (Modern Data)

| Retention after 7 days | Without review | With 1 review |
|------------------------|----------------|---------------|
| Original learning: 1x | 25% | 50% |
| Original learning: 3x | 30% | 70% |
| Original learning: 5x | 35% | 85% |

---

## Key Takeaways

1. **Forgetting is normal** — schedule reviews before material is forgotten
2. **Spaced repetition > massed practice** — distribute learning over time
3. **Active recall > passive review** — retrieval practice is the key
4. **One card = one fact** — atomic cards are more effective
5. **Ease factor adjusts** — difficult cards get shorter intervals
6. **Sleep consolidates** — review before sleep for better retention
7. **Interleave practice** — mix topics for better transfer
8. **Retention 80-90%** is optimal — too easy or hard both fail
9. **Daily reviews prevent accumulation** — consistency beats intensity
10. **Less is more** — quality of cards > quantity

---

## References & Further Reading

- Ebbinghaus, H. (1885). *Memory: A Contribution to Experimental Psychology*
- Roediger, H.L., & Karpicke, J.D. (2006). "Test-Enhanced Learning" — *Psychological Science*
- Cepeda, N.J., et al. (2006). "Spacing Effects in Learning" — *Psychological Science*
- Mullinder, P. (2016). *Learn Better: Mastering the Hidden World of Learning*
- Anki Manual — https://docs.ankiweb.net/

---

*This note is part of a weekly behavioral science series exploring evidence-based frameworks for understanding human behavior.*
