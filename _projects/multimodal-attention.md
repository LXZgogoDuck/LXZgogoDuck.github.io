---
layout: page
title: Multimodal Attention
description: The Impact of Synchronized Visual and Auditory Attention on Human Perception
img: assets/img/research/multimodal-attention.svg
importance: 2
category: work
related_publications: true
---

## Overview

**Institution**: CUHK(SZ) - Shenzhen Research Institute of Big Data
**Duration**: Sept 2023 - Aug 2024
**Advisors**: Prof. Haizhou Li
**Status**: Published at ICSR 2024
**Award**: 🏆 **Best Student Paper Award**

---

## Research Question

**Can visual cues help us understand spoken instructions better in noisy environments?**

Humans can effortlessly focus on a specific speaker in a noisy, multi-speaker environment (the "cocktail party effect"), whereas current AI agents struggle to identify and follow the intended speaker. This ability, often referred to as selective auditory attention, is well-documented behaviorally, but its multimodal underpinnings—especially the role of vision—remain insufficiently understood.

---

## Key Contributions

### 1. Controlled Experimental Design

Designed synchronized perceptual experiments using E-Prime to test whether visual cues improve selective auditory attention:

**Experimental Conditions:**
- Visual-only: Speaker's face without audio
- Audio-only: Voice without visual cues
- Synchronized: Face + voice aligned
- Conflicting: Face + voice misaligned

**Measurements:**
- Eye-tracking data (Tobii Studio) for gaze allocation
- Speech comprehension accuracy
- Attention dynamics across conditions

### 2. Multimodal Attention Quantification

Analyzed eye-tracking and behavioral data using Python (NumPy, SciPy, Pandas):
- Identified patterns of gaze allocation
- Quantified attention dynamics across modalities
- Statistical modeling of attention mechanisms

### 3. Key Finding

**Results showed that synchronized visual and auditory input significantly enhances people's understanding of spoken content**, particularly in multi-speaker environments.

---

## Methodology

### Experimental Setup

**Participants**: 30 subjects (aged 20-30, native Chinese speakers)

**Stimuli**:
- Multiple speakers presenting simultaneously
- Synchronized/desynchronized visual (face, gaze) and auditory signals
- Varying levels of acoustic noise

**Procedure**:
1. Calibration of eye-tracking system
2. Presentation of multi-speaker scenarios
3. Real-time gaze tracking during listening
4. Post-trial comprehension tests

### Data Analysis Pipeline

```
Eye-tracking Data (Tobii)
         ↓
Preprocessing & Filtering
         ↓
Gaze Allocation Analysis
         ↓
Statistical Modeling (Python)
         ↓
Attention Pattern Identification
```

---

## Results

### Quantitative Findings

**Speech Comprehension Accuracy:**
- Audio-only: 65.3% ± 8.2%
- Visual-only: 42.1% ± 9.5%
- **Synchronized A/V: 84.7% ± 6.1%** ✓
- Conflicting A/V: 58.9% ± 10.3%

**Gaze Patterns:**
- Participants spent **73% more time** fixating on target speaker's face in synchronized conditions
- Eye movements aligned with speech prosody (pauses, emphasis)
- Reduced gaze dispersion in synchronized vs. conflicting conditions

### Qualitative Insights

1. **Visual cues act as attention anchors**: Help listeners focus on intended speaker
2. **Temporal synchronization is critical**: Misaligned cues actually hurt performance
3. **Individual differences matter**: Some participants rely more heavily on visual cues

---

## Implications

### For Human-Robot Interaction

Our findings inform design of:
- **Social robots** that understand multimodal human communication
- **Attention-aware interfaces** that leverage visual-auditory synchronization
- **Assistive technologies** for individuals with hearing impairments

### For AI Systems

Suggests that embodied AI agents should:
- Integrate visual and auditory perception streams
- Model temporal synchronization between modalities
- Adapt attention mechanisms based on environmental context

---

## Publication

**Full Citation:**
> Lichuan Jiang, Jiani Zhong, Muqing Jian, **Xuanzhuo Liu**, Siqi Cai, and Haizhou Li. "The Impact of Synchronized Visual and Auditory Attention on Human Perception." In *Social Robotics: 16th International Conference, ICSR 2024*, Shenzhen, China, September 25–28, 2024, Proceedings, volume 15170 of Lecture Notes in Computer Science, pages 41–50. Springer, 2025.

**DOI**: [10.1007/978-981-96-1151-5_6](https://link.springer.com/chapter/10.1007/978-981-96-1151-5_6)

**Award**: 🏆 Best Student Paper Award at ICSR 2024

---

## My Contributions

As co-author, I contributed to:
- **Experimental design**: Co-designed the experimental paradigm and conditions
- **Implementation**: Implemented experiments using E-Prime
- **Data analysis**: Analyzed eye-tracking and behavioral data
- **Writing**: Drafted sections of the paper
- **Presentation**: Led the conference presentation at ICSR 2024

---

## Future Work

This research opens several avenues for follow-up:

1. **Cross-modal attention modeling**: Develop computational models of how humans integrate visual and auditory attention

2. **Individual differences**: Investigate why some people rely more on visual vs. auditory cues

3. **Real-world applications**: Test findings in naturalistic settings (classrooms, meetings, etc.)

4. **Robot integration**: Implement multimodal attention mechanisms in social robots

---

## Related Work

This research builds on:
- Cocktail party effect (Cherry, 1953)
- McGurk effect (McGurk & MacDonald, 1976)
- Multisensory integration in perception
- Embodied cognition theories

And informs future work on:
- [Perception-reasoning loop modeling](perception-reasoning.html)
- [Vision-language-action models](differential-vla.html)

---

## Resources

- **Paper**: [Springer Link](https://link.springer.com/chapter/10.1007/978-981-96-1151-5_6)
- **Presentation**: Available upon request
- **Experimental paradigm**: E-Prime scripts available for research purposes

---

## Acknowledgments

This work was conducted at the Shenzhen Research Institute of Big Data under the supervision of Prof. Haizhou Li. We thank all participants for their time and the ICSR 2024 reviewers for their constructive feedback.
