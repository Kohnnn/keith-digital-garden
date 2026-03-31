---
title: "GPU Architecture Deep Dive: H200 vs B200 vs Custom Silicon"
date: 2026-03-31
tags: [AI, hardware, GPU, NVIDIA, TPU, architecture]
---

# GPU Architecture Deep Dive: H200 vs B200 vs Custom Silicon

Understanding the hardware powering the AI revolution is essential for practitioners.

## NVIDIA Hopper Generation

### H100 Specifications

The H100 established new baselines:

| Specification | H100 SXM5 | H100 PCIe | Notes |
|---------------|-----------|-----------|-------|
| Transistors | 80B | 80B | TSMC 4N |
| CUDA Cores | 16,896 | 16,896 | - |
| Tensor Cores | 528 | 456 | 4th generation |
| FP16 Performance | 989 TFLOPS | 756 TFLOPS | SXM higher bandwidth |
| Memory | 80GB HBM3 | 80GB HBM3 | 3.35 TB/s |
| TDP | 700W | 700W | Requires serious cooling |
| Price | ~$25K | ~$20K | MSRP (lol) |

### H200 Improvements

The H200 added memory bandwidth improvements:

| Metric | H100 | H200 | Improvement |
|--------|------|------|-------------|
| Memory | 80GB | 141GB | +76% |
| Bandwidth | 3.35 TB/s | 4.8 TB/s | +43% |
| HBM3e | No | Yes | Lower power |
| FP8 Training | Native | Native | - |

**Key insight**: H200 isn't faster compute-wise—it's faster due to memory, critical for LLM inference.

## Blackwell Architecture: B200

### B200 Specifications

The B200 represents NVIDIA's architectural leap:

| Specification | B200 | H100 | Improvement |
|---------------|------|------|-------------|
| Transistors | 208B | 80B | 2.6x |
| FP4 Performance | 20 PFLOPS | - | New precision |
| Memory | 192GB | 80GB | 2.4x |
| Bandwidth | 8 TB/s | 3.35 TB/s | 2.4x |
| NVLink | 1.8 TB/s | 900 GB/s | 2x |
| TDP | 1000W | 700W | 43% increase |

### Blackwell Innovations

1. **FP4 Support**: Half-precision floating point, 2x throughput
2. **Second-gen Transformer Engine**: Better attention mechanisms
3. **NVLink Switch**: Faster multi-GPU communication
4. **RAS Features**: Reliability for datacenter deployment

## Custom Silicon Landscape

### Google TPU v5

| Metric | TPU v5 | H100 | Notes |
|--------|--------|------|-------|
| Performance | 459 TFLOPS | 989 TFLOPS | FP16 |
| Memory | 95GB HBM | 80GB HBM | - |
| Memory BW | 2.76 TB/s | 3.35 TB/s | Lower |
| Interconnect | 300 GB/s | 900 GB/s | NVLink wins |
| Availability | GCP only | Widely available | - |

### Amazon Trainium 2

- 65B parameters chip
- Designed for distributed training
- ~40% cost reduction vs H100
- Limited ecosystem support

### Apple Silicon (M4 Ultra)

| Specification | M4 Ultra | H100 |
|---------------|----------|------|
| Neural Engine | 810 TOPS | N/A |
| Unified Memory | 192GB | 80GB |
| Memory BW | 800 GB/s | 3.35 TB/s |
| Best For | On-device | Datacenter |

## Architecture Comparison

### Transformer Workloads

For LLM training/inference:

| Chip | Training | Inference | Cost Efficiency |
|------|----------|-----------|-----------------|
| H100 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| H200 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| B200 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| TPU v5 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Trainium | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## Practical Recommendations

**For training**: H100/H200/B200 with NVLink for multi-GPU
**For inference**: H200/B200 for long context, A100 for cost-sensitive
**For budget**: Spot H100 or Trainium for batch inference
**For research**: M4 Ultra for experimentation, cloud for scale

---

## Media & Sources

### Embedded Images
![[attachments/ai-tech/2026/W14/gpu-architecture-comparison.jpg]]
![[attachments/ai-tech/2026/W14/nvidia-chip-roadmap.jpg]]

### Source Links
- [NVIDIA H100 Technical Brief](https://resources.nvidia.com)
- [TPU Documentation](https://cloud.google.com/tpu)
- [MLPerf Benchmarks](https://mlperf.org)
