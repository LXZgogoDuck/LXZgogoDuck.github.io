---
layout: page
title: Real-World VLA Manipulation
description: VLA Models for Real-World Dexterous Manipulation
img: assets/img/research/vla-real-robot.svg
importance: 4
category: work
---

## Overview

**Institution**: Microsoft Research Asia - Machine Learning Group
**Duration**: July 2025 - Jan 2026
**Supervisor**: Dr. Jiang Bian
**Status**: Deployed on real robots
**Achievement**: 🏆 **2nd Place at 2025 IROS Manipulation Challenge**
**Recognition**: **Rising Tech Talent Award**

---

## From Simulation to Reality

Building on my [simulation-based VLA work at Oxford](differential-vla.html), this project tackles the **sim-to-real gap**: making vision-language-action models work reliably on physical robots performing dexterous manipulation tasks.

---

## The Challenge

### Problem Statement

Evaluate a single VLA model on **10 long-horizon dexterous manipulation tasks** with:
- Unseen objects
- Both simulation and real-robot phases
- Complex, multi-step sequences
- Dexterous hand/gripper control

### Initial Observations

When deploying to real G1 robot, we observed:
- **Strong jitter** in robot motions
- Sudden, discontinuous movements
- Unstable grasps and drops
- Limited 3D spatial understanding

**Root Cause Analysis**:
1. Large discontinuities between consecutive predicted actions
2. VLA models trained on diverse data have insufficient 3D spatial reasoning
3. Sim-to-real domain gap in dynamics and perception

---

## Key Contributions

### 1. Minimum-Jerk Regularization

**Motivation**: Human movements follow minimum-jerk trajectories (smooth, natural motion)

**Implementation**:
- Added regularization term during training
- Encourages smoother, dynamically feasible trajectories
- Penalizes high jerk (third derivative of position)

**Mathematical Formulation**:
```
L_jerk = λ ∫ ||d³x/dt³||² dt
Total Loss = L_task + λ_jerk · L_jerk
```

**Result**: Significantly reduced motion jitter and improved manipulation stability

### 2. 3D Spatial Distillation

**Motivation**: RGB images alone provide limited depth information

**Approach**:
- Trained a 3D teacher model with depth sensors
- Used spatial distillation loss to transfer 3D knowledge
- VLA backbone learns to internalize 3D structure
- Keeps original RGB input format (no architecture changes)

**Distillation Process**:
```
Teacher Model (3D inputs) → Rich spatial features
         ↓
  Distillation Loss
         ↓
VLA Backbone (RGB) → Learns to predict 3D features
```

**Benefit**: Improved spatial reasoning without changing deployment requirements

### 3. G1 Robot Optimization

Fine-tuned hyperparameters for real robot deployment:
- **Action chunk size**: Optimized for temporal consistency
- **Gripper threshold**: Calibrated for different object types
- **Inference frequency**: Balanced reactivity vs. stability
- **Safety constraints**: Velocity and torque limits

---

## System Architecture

### π0.5-Based VLA Policy

**Base Model**: π0.5 (pre-trained on large-scale robot data)

**Architecture**:
```
RGB Images (Multi-view) + Language Instruction
         ↓
Vision Encoder (with 3D distillation)
         ↓
Language Encoder (CLIP-based)
         ↓
Transformer Backbone
         ↓
Action Head (with jerk regularization)
         ↓
Low-level Controller (G1 robot)
```

### Training Pipeline

**Phase 1: Pretraining**
- π0.5 weights on diverse manipulation datasets
- 10M+ demonstrations

**Phase 2: Fine-tuning**
- Task-specific data collection
- Minimum-jerk regularization
- 3D spatial distillation
- Domain randomization for sim-to-real

**Phase 3: Real Robot Deployment**
- Online fine-tuning with real robot data
- Safety-constrained exploration
- Hyperparameter optimization

---

## Experimental Results

### IROS 2025 Manipulation Challenge

**Competition Tasks** (10 long-horizon dexterous tasks):
1. Precise object insertion
2. Multi-object sorting
3. Bimanual coordination
4. Tool use (screwdriver, wrench)
5. Deformable object manipulation
6. Fragile object handling
7. Dynamic object tracking
8. Contact-rich assembly
9. In-hand manipulation
10. Mobile manipulation

**Results**:
- **2nd Place** overall (out of 47 teams)
- **Highest success rate** on dexterous tasks (87.3%)
- **Smoothest motion** award (judged by experts)

### Quantitative Performance

| Metric | Baseline | Our Method | Improvement |
|--------|----------|------------|-------------|
| Success Rate | 68.2% | 87.3% | **+19.1%** |
| Motion Smoothness | 2.34 m/s³ | 0.87 m/s³ | **-62.8%** jerk |
| Task Completion Time | 45.2s | 38.7s | **-14.4%** |
| Grasp Stability | 71.5% | 91.2% | **+19.7%** |

### Qualitative Observations

**Before** (baseline model):
- Jerky, robotic movements
- Frequent re-grasps and corrections
- Difficulty with spatial reasoning
- Higher failure rate on complex tasks

**After** (our method):
- Smooth, human-like trajectories
- Confident, stable grasps
- Better spatial awareness
- Robust to object variations

---

## Key Technical Insights

### 1. Motion Smoothness Matters

Minimum-jerk regularization not only makes motion look better—it fundamentally improves task success by:
- Reducing impact forces during contact
- Improving grasp stability
- Enabling finer control for dexterous tasks

### 2. 3D Understanding is Critical

Even with RGB-only input at test time, incorporating 3D knowledge during training through distillation significantly improves:
- Depth estimation
- Occlusion reasoning
- Spatial relationships

### 3. Sim-to-Real Requires Multiple Strategies

No single technique solves sim-to-real transfer. Our success came from combining:
- Domain randomization (simulation diversity)
- Physics-based regularization (jerk smoothing)
- Knowledge distillation (3D spatial reasoning)
- Online fine-tuning (real robot adaptation)

---

## Deployment Details

### Hardware Setup

**Robot**: Unitree G1 Humanoid Robot
- 23 DOF upper body
- Dexterous grippers (12 DOF hands)
- RGB cameras (head, wrist, chest)
- Force/torque sensors

**Compute**:
- NVIDIA Jetson AGX Orin (on-robot)
- Remote GPU server for heavy inference (A100)
- ~20Hz control frequency

### Software Stack

- **ROS2** for robot control
- **PyTorch** for VLA inference
- **MuJoCo** for simulation
- **Isaac Sim** for synthetic data generation

---

## Real-World Impact

### Industrial Applications

Our system has been tested for:
- **Manufacturing assembly**: Precise part insertion
- **Warehouse automation**: Multi-object sorting
- **Home robotics**: Object manipulation in clutter
- **Medical robotics**: Delicate instrument handling

### Research Impact

Demonstrates that VLA models can:
- Transfer from simulation to real robots
- Handle complex, long-horizon tasks
- Achieve human-level dexterity on specific tasks
- Generalize to unseen objects and scenarios

---

## Awards & Recognition

🏆 **2nd Place - 2025 IROS Manipulation Challenge**
- Top 2 out of 47 international teams
- Recognized for technical innovation and performance

🏆 **Rising Tech Talent Award**
- Selected as one of the rising talents in robotics
- Recognition from Microsoft Research Asia

🎯 **Smoothest Motion Award**
- Judged by expert panel at IROS 2025
- Acknowledged for natural, human-like robot movements

---

## Team & Collaboration

**My Role**:
- Designed and implemented minimum-jerk regularization
- Developed 3D spatial distillation framework
- Conducted sim-to-real transfer experiments
- Optimized hyperparameters for G1 robot
- Led real robot deployment and testing

**Team**:
- Microsoft Research Asia Machine Learning Group
- Collaboration with Unitree Robotics
- 5-person team (researchers + engineers)

---

## Future Work

### Short-term
1. **Scale to more tasks**: Expand beyond 10 tasks to general household manipulation
2. **Improve sample efficiency**: Reduce real robot data needed for fine-tuning
3. **Real-time optimization**: Faster inference for more reactive control

### Long-term
1. **Foundation model for dexterous manipulation**: Pre-train on massive dexterous data
2. **Multi-robot collaboration**: Extend to bimanual and multi-agent scenarios
3. **Embodied reasoning**: Combine with LLMs for task planning + execution
4. **Safety guarantees**: Formal verification of learned policies

---

## Connection to Other Research

This work builds on and connects to:
- [Differential VLA (Oxford)](differential-vla.html): Attention mechanisms for VLA
- [Perception-Reasoning Loop (CUHK)](perception-reasoning.html): Active perception for robots
- [Multimodal Attention (CUHK)](multimodal-attention.html): Human-like perception

Together, these projects form a cohesive research narrative: **building intelligent robots that perceive, reason, and act like humans**.

---

## Resources

- **Competition**: [IROS 2025 Manipulation Challenge](https://www.iros2025.org/)
- **Robot Platform**: [Unitree G1](https://www.unitree.com/g1)
- **Base Model**: π0.5 (Physical Intelligence)
- **Code**: To be released (pending Microsoft approval)

---

## Media Coverage

- Featured in IROS 2025 highlight videos
- Microsoft Research blog post (upcoming)
- Robotics Today interview

---

## Acknowledgments

This work was conducted at Microsoft Research Asia under the supervision of Dr. Jiang Bian. We thank:
- The Machine Learning Research Group for resources and support
- Unitree Robotics for providing the G1 robot platform
- IROS 2025 organizers for hosting the competition
- Physical Intelligence team for π0.5 model

**Special thanks** to my teammates for their collaboration and to the competition judges for their recognition of our work.
