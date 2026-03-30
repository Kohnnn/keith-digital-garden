---
title: "Hardware Bottlenecks in AI Scaling"
date: 2026-03-30
tags: [ai, tech, deep-dive]
---
# Hardware Bottlenecks in AI Scaling

The race to build larger AI models is increasingly constrained by hardware. GPU shortages, memory bandwidth, interconnect bottlenecks, and the economics of custom silicon are reshaping the AI infrastructure landscape.

## The GPU Scarcity Crisis

NVIDIA's H100 and H200 GPUs remain the gold standard for AI training, but supply has struggled to meet explosive demand from hyperscalers, AI startups, and nation-states.

**Current state (2026):**
- H100: ~$25,000-$30,000 per unit (spot pricing volatile)
- H200: ~$30,000-$40,000 per unit
- Delivery lead times: 6-12 months for large orders

The shortage has created a two-tier ecosystem:
- **Hyperscalers** (Microsoft, Google, Amazon, Meta): Long-term supply agreements, custom chip investments
- **Everyone else**: Competitive spot market, longer wait times, higher costs

## Memory: The Real Bottleneck

Modern AI workloads are **memory-bandwidth bound**, not compute-bound. This is a fundamental shift from traditional computing.

### The Transformer Memory Problem

- Parameters must be loaded from HBM for every forward pass
- A 70B parameter model requires ~140GB just for weights (fp16)
- Attention mechanisms multiply memory requirements quadratically with sequence length
- KV caches grow linearly with batch size and sequence length

**Key metrics:**
| GPU | HBM | Bandwidth | Effective for Long Context |
|-----|-----|-----------|----------------------------|
| H100 SXM | 80GB | 3.35 TB/s | Moderate |
| H200 | 141GB | 4.8 TB/s | Better |
| B200 | 192GB | 8 TB/s | Excellent |
| AMD MI300X | 192GB | 5.3 TB/s | Competitive |

Long-context models (1M+ tokens) require either massive HBM capacity or sophisticated memory management techniques like paged attention.

## Interconnect Bottlenecks

Training a large model requires thousands of GPUs working in parallel. The inter-GPU communication fabric becomes critical.

### NVLink vs InfiniBand

- **NVLink**: NVIDIA's proprietary high-speed interconnect
  - 900 GB/s bidirectional (H100 NVLink)
  - Limited to NVIDIA's ecosystem
  - Used within a single DGX server

- **InfiniBand**: Industry standard for AI clusters
  - 400 Gb/s (HDR) or 800 Gb/s (NDR)
  - Universal compatibility
  - Required for large-scale distributed training

**The bottleneck reality:** As model sizes grow past 1 trillion parameters, interconnect bandwidth often limits scaling efficiency. The communication-to-compute ratio becomes unfavorable.

## Custom Silicon: The Big Shift

Every major AI player is building custom chips to reduce dependence on NVIDIA and optimize for their specific workloads.

### Google TPU

- **v5e**: Cost-optimized inference, ~2x efficiency vs H100
- **v5p**: Training-optimized, 4x the H100 FLOPs
- **Advantage:** Superior for transformer workloads, Google's integrated stack
- **Limitation:** Vendor lock-in, limited flexibility

### AWS Trainium / Inferentia

- **Trainium2**: ~4x better price-performance than GPU for training
- **Inferentia2**: ~4x better for inference
- **Advantage:** Tight AWS integration, Neuron SDK
- **Limitation:** Smaller ecosystem, fewer pre-trained models

### Microsoft Maia 100

- Designed specifically for LLM inference
- Close integration with Azure
- Microsoft is cagey about benchmarks

### Meta MTIA

- Internal silicon for inference workloads
- Part of broader strategy to reduce NVIDIA dependency
- Focused on efficiency, not raw performance

### Apple Silicon

- Neural Engine (NE) for on-device inference
- Unified memory architecture is unique
- Excellent for local, privacy-sensitive applications

### Startups in the Custom Chip Race

| Company | Focus | Status |
|---------|-------|--------|
| **Cerebras** | Wafer-scale AI | Memory bandwidth monster |
| **SambaNova** | Reconfigurable dataflow | Enterprise focused |
| **Groq** | LPU (Language Processing Unit) | Ultra-low latency inference |
| **Etched** | Transformer-specific ASIC | Bets on attention staying dominant |

## The Economics of Scale

Training frontier models has become prohibitively expensive for all but a few organizations:

- **GPT-4 class training**: Estimated $50-100M
- **Gemini Ultra class**: Estimated $100-200M
- **Next frontier**: Estimates suggest $1B+ by 2028

This has driven:
1. **Concentration**: AI capability concentrated in hyperscalers
2. **Efficiency focus**: More research on compute-optimal training (Chinchilla scaling)
3. **Distillation**: Training smaller models to mimic larger ones
4. **Speculative decoding**: Using small draft models to speed up large model inference

## Key Takeaways

- GPU shortages are structural, not cyclical—demand will continue to outpace supply
- Memory bandwidth, not raw compute, is often the actual bottleneck
- Interconnect topology determines scaling efficiency for distributed training
- Custom silicon is the strategic response to NVIDIA's dominance and margin
- The custom chip landscape is fragmenting—multi-cloud and hardware flexibility matter
- For most organizations: leverage cloud providers' scale rather than buying hardware directly
- Emerging architectures (wafer-scale, transformer-specific ASICs) may disrupt the GPU paradigm

The hardware constraints are creating interesting dynamics: efficiency matters more than raw scale, and the economics favor organizations that can amortize infrastructure costs across massive usage. The next 2-3 years will determine whether custom silicon effectively challenges NVIDIA's moat.
