# Research Diagram Creation Guide

This guide will help you create effective visual representations for your research projects to enhance your website.

## Recommended Diagrams for Your Projects

### 1. **OTTER Model Integration with SimplerEnv** (Oxford WhiRL)
**What to create:**
- System architecture diagram showing:
  - OTTER model components (transformer-based policy)
  - SimplerEnv simulation environment
  - Data flow: multimodal inputs (vision, language) → policy → robot actions
  - Key components: perception module, instruction following, control output

**Suggested tools:**
- draw.io (diagrams.net) - free, web-based
- Figma - for polished graphics
- Python matplotlib/seaborn - for technical diagrams
- PowerPoint/Keynote - simple and effective

**Visual elements to include:**
- Robot agent icon
- Camera/vision sensor
- Text instruction bubble
- Action arrows
- Color coding: input (blue), processing (green), output (orange)

**Size:** 800x600px or 1200x900px (maintain 4:3 or 16:9 ratio)

---

### 2. **Human Attention Modeling for Multimodal AI** (CUHK-SZ)
**What to create:**
- Experimental setup diagram:
  - Human subject with eye-tracking device
  - Multimodal stimuli (audio + visual)
  - Attention heatmap overlay
  - Data processing pipeline: eye-tracking → statistical analysis → attention patterns

**Additional visual:**
- Sample gaze allocation plot or attention distribution graph
- Before/after comparison showing attention patterns

**Tools:**
- Python (matplotlib, seaborn) for scientific plots
- Inkscape for vector graphics
- Adobe Illustrator (if available)

---

### 3. **Transformer-Based Policies Overview**
**What to create:**
- Conceptual diagram showing:
  - Transformer architecture adapted for robotics
  - Self-attention mechanism for multimodal fusion
  - Timeline: observation sequence → policy decision → action

**Style:** Clean, minimal, academic
**Colors:** Use consistent color scheme matching your website (see recommendations below)

---

### 4. **Research Timeline/Journey Visual**
**What to create:**
- Timeline showing your research progression:
  - CUHK-SZ (2023-2024): Cognitive modeling
  - Oxford (2024-2025): Transformer policies & generalist agents
  - MSRA (current): Embodied AI & multimodal models
  - UChicago (upcoming): Learning under uncertainty

**Format:** Horizontal timeline with project icons/logos

---

## Color Scheme Recommendations

Based on the reference website and your current theme, use these colors:

### Primary Palette:
- **Background:** #f5fbf7 (pale sage green)
- **Text:** #225573 (deep blue)
- **Accent:** #b6274e (burgundy for highlights)
- **Links:** #547b5b (sage green)

### For Diagrams:
- **Input/Data:** #4A90E2 (blue)
- **Processing:** #7CB342 (green)
- **Output/Action:** #FF8A50 (orange)
- **Attention/Important:** #E24A4A (red)
- **Background:** White or #F8F9FA (light gray)

---

## Image Specifications

### Thumbnail Images (for cards):
- **Dimensions:** 400x300px (4:3 ratio)
- **Format:** PNG or WebP (for transparency and quality)
- **File size:** < 200KB (optimize for web)

### Full Project Images:
- **Dimensions:** 1200x900px or 1600x1200px
- **Format:** PNG or JPG
- **File size:** < 500KB

---

## Tools & Resources

### Free Diagram Tools:
1. **draw.io (diagrams.net)** - Best for technical diagrams
   - https://app.diagrams.io/
   - Templates available for flowcharts, system architecture

2. **Excalidraw** - Hand-drawn style diagrams
   - https://excalidraw.com/
   - Great for conceptual diagrams

3. **Canva** - For polished graphics
   - https://www.canva.com/
   - Many templates available

4. **Figma** - Professional design tool
   - https://www.figma.com/
   - Free for individual use

### For Scientific Plots:
```python
# Example: Creating an attention heatmap
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Sample attention data
attention_data = np.random.rand(10, 10)

plt.figure(figsize=(8, 6))
sns.heatmap(attention_data, cmap='YlOrRd',
            xticklabels=['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
            yticklabels=['Visual', 'Audio', 'Text', 'Gaze', 'Motion', 'Object', 'Scene', 'Face', 'Speech', 'Gesture'])
plt.title('Multimodal Attention Allocation')
plt.xlabel('Time Steps')
plt.ylabel('Modality')
plt.tight_layout()
plt.savefig('attention_heatmap.png', dpi=150, bbox_inches='tight')
```

---

## File Organization

Save your images in this structure:
```
assets/img/
  research/
    otter-architecture.png
    attention-modeling.png
    transformer-policy.png
    research-timeline.png
  projects/
    project1-thumbnail.png
    project2-thumbnail.png
```

---

## Quick Start: What to Do First

1. **Create 3 key diagrams** (in priority order):
   - System architecture for your Oxford OTTER work
   - Experimental setup for CUHK attention modeling
   - Research timeline/journey

2. **Optimize images:**
   - Use https://tinypng.com/ to compress without losing quality
   - Convert to WebP format if possible for better performance

3. **Save files** in `assets/img/research/` folder

4. **Test locally** before committing

---

## Examples of Good Research Diagrams

**Good characteristics:**
- ✅ Clear labels and legends
- ✅ Consistent color coding
- ✅ Not too cluttered (< 7 major elements)
- ✅ High contrast for readability
- ✅ Professional font (Arial, Helvetica, Roboto)
- ✅ Arrows show clear direction of flow

**Avoid:**
- ❌ Too many colors (stick to 3-4 main colors)
- ❌ Small text (minimum 12pt for diagrams)
- ❌ Low resolution/pixelated images
- ❌ Complex backgrounds that reduce readability

---

## Next Steps

Once you have created 2-3 diagrams:
1. Save them in `assets/img/research/` folder
2. Let me know and I'll integrate them into your website
3. We'll iterate on the design together

**Need help?** Feel free to share rough sketches or descriptions, and I can provide more specific guidance!
