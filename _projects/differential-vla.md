---
layout: page
title: Differential VLA
description: Reducing Attention Noise for Robust Vision-Language-Action Policies
img: assets/img/research/vla-attention.svg
importance: 1
category: work
---

## Overview

**Institution**: University of Oxford - Oxford Robotics Institute
**Duration**: Oct 2024 - July 2025
**Advisor**: Prof. Shimon Whiteson
**Status**: Submitted to ICPR 2026 (First Author)

---

## Motivation

Vision-language-action (VLA) models like Octo and OpenVLA have shown promise for robotic manipulation, but their performance often degrades in cluttered, multi-object scenes. Prior to our work, there was little understanding of how these models allocate visual attention internally across transformer layers.

---

## Key Contributions

### 1. Attention Visualization Pipeline

Developed a visualization tool that projects self-attention weights from each transformer layer back onto the original camera images:
- **Early layers**: Spread attention broadly across the scene
- **Middle layers**: Concentrated on task-relevant objects and end-effector
- **Final layers**: Attention became diffuse again (**failure mode identified**)

### 2. Differential Transformer Integration

To address the diffuse attention problem in final layers:
- Integrated **Differential Transformer layers** [Ye et al., 2025] into the final blocks of the VLA backbone
- These layers preserve salient signals by filtering inter-layer attention noise
- Result: Deeper layers maintain sharp focus on target objects

### 3. Experimental Validation

Tested on **SimplerEnv benchmark** with multiple manipulation tasks:
- Baseline VLA models struggled with cluttered scenes
- Modified model with Differential Transformer:
  - Maintained sharp attention on target objects at deepest layers
  - **+5.3 percentage point improvement** in average success rate
  - Improved robustness across 5 different manipulation tasks

---

## Technical Approach

### Architecture

```
Input Images + Language Instructions
         ↓
Vision-Language Encoder
         ↓
Transformer Backbone (12 layers)
  - Early layers (1-4): Broad attention
  - Middle layers (5-8): Task-focused attention
  - Final layers (9-12): Differential Transformer blocks ← Our modification
         ↓
Action Head (robot commands)
```

### Differential Transformer Mechanism

Standard transformer layers suffer from attention noise accumulation in deep networks. Differential Transformers address this by:

1. Computing two separate attention maps
2. Taking their difference to cancel noise
3. Amplifying task-relevant signals

This is particularly effective in the final layers where attention tends to diffuse.

---

## Results

### Quantitative Performance

| Task | Baseline | Differential VLA | Improvement |
|------|----------|------------------|-------------|
| Pick & Place | 68.2% | 74.5% | +6.3% |
| Drawer Open | 71.5% | 76.8% | +5.3% |
| Button Press | 65.0% | 70.2% | +5.2% |
| Object Sort | 58.3% | 63.1% | +4.8% |
| Multi-object | 52.7% | 58.0% | +5.3% |
| **Average** | **63.1%** | **68.5%** | **+5.4%** |

### Qualitative Analysis

Attention visualization shows:
- **Before**: Final layers show scattered attention across irrelevant objects
- **After**: Final layers maintain focused attention on manipulation targets
- Particularly effective in cluttered, multi-object scenarios

---

## Key Insights

1. **Layer-wise attention patterns matter**: Understanding where attention goes wrong helps design targeted solutions

2. **Late-layer attention diffusion** is a common failure mode in VLA models

3. **Differential Transformers** effectively address this by filtering noise while preserving task-relevant signals

4. **Visualization tools** are crucial for understanding and improving foundation models for robotics

---

## Future Directions

This work opens several promising research directions:

1. **Extending to other VLA architectures**: Apply Differential Transformers to OpenVLA, RT-2, etc.

2. **Active attention guidance**: Use attention maps to guide exploration and data collection

3. **Multi-task attention**: Study how attention patterns differ across diverse manipulation tasks

4. **Real-world deployment**: Validate improvements on physical robots beyond simulation

---

## Code & Resources

- Paper: Under review at ICPR 2026
- Code: To be released upon acceptance
- Benchmark: [SimplerEnv](https://arxiv.org/abs/2405.05941)

---

## Related Publications

[1] Xuanzhuo Liu, Zheng Xiong, Shimon Whiteson. "Differential VLA: Reducing Attention Noise for Robust Vision-Language-Action Policy Learning". Under review, ICPR 2026.

[2] Tianzhu Ye, Li Dong, Yuqing Xia, et al. "Differential Transformer". ICLR 2025.

[3] Octo Model Team. "Octo: An Open-Source Generalist Robot Policy". arXiv 2024.

[4] Moo Jin Kim et al. "OpenVLA: An Open-Source Vision-Language-Action Model". arXiv 2024.

---

## Acknowledgments

This work was conducted at the Oxford Robotics Institute under the supervision of Prof. Shimon Whiteson. We thank the SimplerEnv team for providing the benchmark environment.
