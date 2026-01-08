# Research Diagram Creation Guide

This guide will help you create effective visual representations for your research projects to enhance your website.

## Recommended Diagrams for Your Projects

### 1. **Differential VLA: Attention Visualization** (Oxford)
**What to create:**
- Attention mechanism visualization across transformer layers:
  - Layer-wise attention maps (early → middle → final layers)
  - Show diffuse attention problem in final layers
  - Highlight Differential Transformer solution
  - Include SimplerEnv task examples (cluttered scenes)
  - Performance comparison: baseline vs. Differential VLA (+5.3%)

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

### 2. **Multimodal Attention: Visual + Auditory Synchronization** (CUHK-SZ)
**What to create:**
- Experimental paradigm showing:
  - Multi-speaker environment setup
  - Eye-tracking system (Tobii)
  - Synchronized visual cues (speaker's face, gaze) + auditory signals
  - Attention flow: visual → auditory → enhanced perception
  - Results: improvement in speech comprehension

**Additional visual:**
- Eye-gaze heatmap overlaid on speaker faces
- Bar chart comparing comprehension with/without visual synchronization
- Timeline showing experimental conditions

**Tools:**
- Python (matplotlib, seaborn) for scientific plots
- Inkscape for vector graphics
- Adobe Illustrator (if available)

---

### 3. **Perception-Reasoning Loop for Medical Diagnosis** (CUHK-SZ)
**What to create:**
- Circular flow diagram showing:
  - Perception: Doctor observes clinical signals
  - Reasoning: Diagnostic decision-making
  - Action: Request additional patient information
  - Loop back to perception with new data
  - LLM-generated diagnostic rules component
  - Sparse transformer architecture for modeling groups

**Additional elements:**
- Show grouping of doctors by expertise levels
- Two-stage RL process
- MIMIC dataset connection
- Performance metric: 45% accuracy

---

### 4. **Real-World VLA Manipulation** (MSRA)
**What to create:**
- System pipeline for real robot control:
  - 3D vision input (depth + RGB)
  - π0.5-based VLA policy
  - G1 robot executing dexterous tasks
  - Key innovations: minimum-jerk regularization, spatial distillation
  - Sim-to-real transfer visualization

**Additional elements:**
- Before/after motion smoothness comparison
- Sample manipulation tasks (pick, place, dexterous)
- Challenge results badge (2nd place IROS 2025)

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
