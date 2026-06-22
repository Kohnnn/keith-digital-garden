---
title: "yann lecun world models enabling the next AI revolution"
tags:
  - ai
  - world-models
  - yann-lecun
  - self-supervised-learning
  - jepa
  - energy-based-models
  - robotics
keywords:
  - Yann LeCun world models
  - JEPA architecture
  - joint embedding predictive architecture
  - self-supervised learning
  - AI grounded intelligence
  - VicReg
  - DINO
draft: true
created: 2026-06-22
updated: 2026-06-22
note_id: 260622TJ10
cssclasses:
  - tech-journal
  - analysis
  - longform
---

# Yann LeCun: World Models — Enabling the Next AI Revolution

A deep dive into Yann LeCun's vision for the path beyond LLMs: grounded intelligence through world models, joint embedding architectures, and energy-based inference.

---

## The Core Claim: LLMs Hit a Wall

LeCun's opening calculation is devastatingly simple: a typical LLM trains on ~20 trillion words (~400,000 years of human reading time). A 4-year-old has seen ~10^14 bytes through vision alone — the same data volume — in just 16 hours of wake time per day across 4 years.

If human-level intelligence hasn't been achieved from the text pathway despite orders of magnitude more data than a human could ever consume, scaling text alone won't work. The missing ingredient is grounded understanding — learning from the physical world, not just language.

Language, LeCun argues, is the easy problem. The real world is high-dimensional, continuous, and noisy. Language is discrete, low-dimensional, and clean.

---

## JEPA: Joint Embedding Predictive Architecture

LeCun's key insight: **world models should not be generative models**.

A generative model tries to predict every pixel of the next video frame. This is impossible in principle — given a video of a room, there's no way to predict what every person looks like from the first few frames. A system trained to make pixel-level predictions either produces blurry averages or collapses.

JEPA instead works in representation space:
1. Encode input X into a representation
2. Encode target Y into a representation
3. Predict Y's representation from X's representation
4. Let the encoder discard unpredictable details

This is fundamentally different from video generation (Sora). Video generation produces *one* plausible output. JEPA produces a *representation* that captures what's predictable and ignores what isn't. LeCun is emphatic: "If you want to produce cute videos, work on video generation. But if you want to control robots or understand the world, do not work on generation."

| Property | Generative Model | JEPA |
|----------|-----------------|------|
| Prediction space | Pixel-level | Representation-level |
| Handles uncertainty | One sample | Discards unpredictable info |
| Training signal | Reconstruction error | Rep prediction error |
| Best for | Video generation | World models, robotics |

---

## Preventing Collapse: Information Maximization

The fundamental challenge with JEPA is collapse — the system could ignore inputs entirely, produce constant representations, and achieve zero prediction error. Two approaches:

**Contrastive methods** (CLIP, SimCLR): Push positive pairs together and negative pairs apart.

**Regularized methods** (LeCun's preference): Constrain the representation's statistical properties. His favored approach is **VicReg**, which:
- Keeps representation variance high across samples
- Decorrelates dimensions so each carries independent information
- Uses an isotropic Gaussian as the target distribution

The **Seigreg** technique projects representations along random directions and measures distance between the empirical CDF and a Gaussian CDF. By optimizing across many projections, the joint distribution becomes Gaussian, ensuring maximum information content per dimension.

---

## Distillation Methods: I-JEPA and V-JEPA

The most practical results come from distillation methods using an exponential moving average (EMA) teacher:

- **I-JEPA (Image):** Mask large parts of an image, predict representation of the full image. More efficient and produces better representations than generative approaches like MAE.
- **V-JEPA (Video):** Mask spatiotemporal regions in video, predict representations. State-of-the-art for action recognition.

**The common sense test:** V-JEPA was shown videos of physically impossible events (a thrown ball disappearing mid-air). Its internal prediction error spiked precisely during the impossible moments — the first time a purely self-supervised system has demonstrated learned common sense about physics, without any human annotation.

---

## World Models for Planning

The ultimate goal is hierarchical planning through learned world models. The framework:
1. **Perception module** encodes current state
2. **World model** predicts outcomes of action sequences in representation space
3. **Task objective** measures distance to goal
4. **Guardrails** ensure safety constraints
5. **Optimization** searches for action sequences that minimize objective

**Hierarchical planning** remains unsolved. LeCun calls this "a great PhD topic — completely open."

---

## Implications

LeCun left Meta in late 2025 to found **AMI Labs** (AI for the real world), focused on physical AI — robotics, industrial processes, anything continuous and high-dimensional that LLMs can't handle.

His message: "Don't work on LLMs. There's nothing you can bring to the table." For practitioners: abandon generative models for video, abandon pure RL in favor of observation-based learning with world models.

---

## References
- LeCun, Y. — "A Path Towards Autonomous Machine Intelligence" (2022)
- Assran et al. — I-JEPA (CVPR 2023)
- Bardes et al. — V-JEPA, VicReg
- Caron et al. — DINOv2

## Related notes
- [[content/Notes/Tech_Journal/2026/tj09-cs336-language-modeling-from-scratch|CS336 Language Modeling]]
