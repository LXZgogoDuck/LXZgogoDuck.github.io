---
layout: page
title: Perception-Reasoning Loop
description: Modeling Human Perception-Reasoning Loop for Intent Understanding
img: assets/img/research/perception-reasoning.svg
importance: 3
category: work
---

## Overview

**Institution**: CUHK(SZ) - Shenzhen Research Institute of Big Data
**Duration**: 2023 - 2024
**Advisor**: Prof. Shuang Li
**Status**: Submitted to ICML 2026
**Award**: 🏆 **2025 Undergraduate Research Award**

---

## Research Motivation

While my [multimodal attention work](multimodal-attention.html) focused on perceptual understanding, real-world decision-making involves a more complex **perception-reasoning loop**: humans perceive information, reason about it, and then actively seek additional information based on their reasoning.

**Key Question**: Can we model this perception → reasoning → perception loop so that AI agents can better infer human intent?

---

## Medical Diagnosis as a Test Case

We focused on the medical setting, where:
- Doctors **perceive** clinical signals (symptoms, test results)
- Doctors **reason** about potential diagnoses
- Doctors **request** additional information from patients
- This creates a closed loop between perception and reasoning

**Challenge**: Doctor's thinking processes vary across individuals, and data from a single doctor is insufficient to learn a general model.

---

## Key Contributions

### 1. LLM-Generated Diagnostic Rule Sets

Used large language models to generate structured rule sets describing the diagnostic process for specific diseases:

**Input**: Medical literature + clinical guidelines
**Output**: Disease-specific decision trees and diagnostic rules
**Benefit**: Provides structured knowledge to bootstrap the model

### 2. Doctor Expertise Grouping

Instead of modeling each doctor individually:
- Grouped doctors by expertise levels (junior, mid-level, senior)
- Learned shared attention patterns within each group
- Allows generalization across doctors with similar expertise

### 3. Sparse Transformer Architecture

Implemented a **sparse transformer** to model group-level attention mechanisms:
- Reduces computational complexity
- Focuses on most relevant clinical features
- Captures doctor-specific reasoning patterns

### 4. Two-Stage Reinforcement Learning

Developed a two-stage RL procedure to capture the bidirectional loop:

**Stage 1: Perception → Reasoning**
- Agent learns to map observed symptoms to diagnostic hypotheses
- Reward based on diagnostic accuracy

**Stage 2: Reasoning → Perception**
- Agent learns which additional information to request
- Reward based on information gain and diagnostic efficiency

---

## Technical Approach

### System Architecture

```
Clinical Signals (symptoms, vitals, lab results)
         ↓
Perception Module
         ↓
Sparse Transformer (Group-Level Attention)
         ↓
Reasoning Module (Diagnostic Hypotheses)
         ↓
Action Module (Request Additional Info)
         ↓
[Loop back to Perception with new information]
```

### Training Procedure

**Dataset**: MIMIC Clinical Database
- Electronic health records
- Doctor diagnostic decisions
- Patient outcomes

**Training**:
1. **Pretrain** on LLM-generated rules
2. **Fine-tune** with two-stage RL:
   - Stage 1: Learn perception → reasoning mapping
   - Stage 2: Learn reasoning → information seeking

**Evaluation**: Predict doctor's next diagnostic decision given current state

---

## Results

### Quantitative Performance

**Diagnostic Prediction Accuracy**: **~45%** on MIMIC dataset

This might seem modest, but consider:
- Predicting human diagnostic reasoning is inherently difficult
- Doctors themselves have high inter-rater variability
- Our model outperforms baselines by significant margins:
  - Random baseline: 8.3%
  - Rule-based system: 23.7%
  - Standard transformer: 36.2%
  - **Our method: 45.1%** ✓

### Ablation Studies

| Component | Accuracy | Δ from Full Model |
|-----------|----------|-------------------|
| Full Model | 45.1% | - |
| w/o LLM rules | 39.3% | -5.8% |
| w/o grouping | 38.7% | -6.4% |
| w/o sparse attention | 40.2% | -4.9% |
| w/o 2-stage RL | 36.8% | -8.3% |

**Key Finding**: All components contribute significantly, with two-stage RL being most critical.

---

## Key Insights

### 1. The Perception-Reasoning Loop is Essential

Modeling only perception → reasoning (Stage 1) yields 36.8% accuracy. Adding the reasoning → perception loop (Stage 2) improves to 45.1%, showing the importance of active information seeking.

### 2. Expertise Grouping Enables Generalization

Grouping doctors by expertise level allows the model to generalize across individuals while capturing shared reasoning patterns within groups.

### 3. LLM-Generated Rules Provide Structure

Bootstrapping with LLM-generated diagnostic rules improves performance by 5.8%, demonstrating the value of incorporating structured medical knowledge.

### 4. Sparse Attention is Sufficient

Doctors focus on a small subset of relevant features when reasoning. Sparse transformers capture this efficiently without needing full attention over all features.

---

## Broader Impact

### For Human-AI Collaboration

This work has implications for:
- **Clinical decision support systems** that understand doctor reasoning
- **Intent-aware AI assistants** that anticipate information needs
- **Explainable AI** systems that can explain their reasoning process

### For Embodied AI

The perception-reasoning loop framework extends to robotics:
- Robots can **perceive** their environment
- **Reason** about task goals
- **Actively seek** additional information (move camera, ask questions)

This connects to my later work on [VLA models](differential-vla.html) and [real-world robotics](vla-real-robot.html).

---

## Publication Status

**Status**: Submitted to ICML 2026

**Award**: 🏆 2025 Undergraduate Research Award
- Recognized for outstanding undergraduate research
- Selected from university-wide competition

---

## Future Directions

1. **Multi-disease extension**: Expand beyond single-disease diagnosis to differential diagnosis across multiple conditions

2. **Real-time clinical deployment**: Test system in actual clinical settings with real doctor-patient interactions

3. **Cross-domain transfer**: Apply perception-reasoning loop to other domains (customer service, education, etc.)

4. **Integration with VLA models**: Combine with vision-language-action models for embodied agents that reason about their observations

---

## Technical Details

### Sparse Transformer Configuration

- **Layers**: 12 transformer blocks
- **Attention heads**: 8 per layer
- **Sparsity pattern**: Top-k attention (k=16)
- **Hidden dimension**: 512
- **Parameters**: ~35M

### Reinforcement Learning Setup

- **Algorithm**: Proximal Policy Optimization (PPO)
- **Reward shaping**:
  - Stage 1: +1 for correct diagnosis, -0.1 for each timestep
  - Stage 2: +0.5 for informative questions, -0.2 for redundant questions
- **Training time**: ~48 hours on 4x A100 GPUs

---

## Code & Data

- **Code**: Available upon paper acceptance
- **Dataset**: MIMIC-III (access requires credentialing)
- **LLM Rules**: Will be released as supplementary material

---

## Related Publications

[1] **Xuanzhuo Liu** et al. "Modeling Human Perception-Reasoning Loop for Intent Understanding in Medical Diagnosis". Under review, ICML 2026.

[2] Lichuan Jiang, Jiani Zhong, Muqing Jian, **Xuanzhuo Liu**, et al. "The Impact of Synchronized Visual and Auditory Attention on Human Perception". ICSR 2024. [Link](multimodal-attention.html)

---

## Acknowledgments

This work was conducted under the supervision of Prof. Shuang Li at CUHK-Shenzhen. We thank the MIMIC team for providing access to clinical data and the reviewers for their valuable feedback.
