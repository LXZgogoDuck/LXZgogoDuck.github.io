# Diagram Examples & Templates

Quick visual reference for creating your research diagrams.

## Example 1: OTTER Architecture Diagram

### What to Include:
```
┌─────────────────────────────────────────────────────────┐
│                    OTTER + SimplerEnv                   │
│                                                         │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐    │
│  │ 📷 Vision│──┐   │          │      │          │    │
│  │  Input   │  │   │          │      │ SimplerEnv│    │
│  └──────────┘  ├──▶│  OTTER   │──▶  │Simulation │──▶ │
│                 │   │Transformer│     │          │    │
│  ┌──────────┐  │   │          │      │          │    │
│  │💬Language│──┘   │          │      │          │    │
│  │Instruction│      └──────────┘      └──────────┘    │
│  └──────────┘           ▲                  │          │
│                          │                  ▼          │
│                     ┌────┴────┐       ┌─────────┐     │
│                     │ Policy  │       │ Actions │     │
│                     │ Network │       │(Pick,   │     │
│                     └─────────┘       │ Place)  │     │
│                                        └─────────┘     │
└─────────────────────────────────────────────────────────┘
```

### Key Elements:
- **Inputs**: Vision (camera icon) + Language (text icon)
- **Model**: OTTER Transformer (center box)
- **Environment**: SimplerEnv simulation
- **Outputs**: Robot actions (gripper, movement)
- **Flow**: Clear arrows showing data direction
- **Colors**:
  - Input boxes: Blue (#4A90E2)
  - Processing: Green (#7CB342)
  - Output: Orange (#FF8A50)

---

## Example 2: Attention Modeling Diagram

### What to Include:
```
┌─────────────────────────────────────────────────────────┐
│          Human Attention Modeling Pipeline             │
│                                                         │
│  ┌──────────────┐     ┌──────────────┐                │
│  │   Human      │     │ Eye-tracking │                │
│  │  Participant │────▶│   Device     │                │
│  │   👤         │     │   (Tobii)    │                │
│  └──────────────┘     └───────┬──────┘                │
│                               │                         │
│  ┌──────────────┐            │                         │
│  │  Multimodal  │            │                         │
│  │   Stimuli    │            │                         │
│  │  🎵🎬📺     │            ▼                         │
│  └──────────────┘     ┌──────────────┐                │
│                       │  Gaze Data   │                │
│                       │ (x,y coords, │                │
│                       │  fixations)  │                │
│                       └───────┬──────┘                │
│                               │                         │
│                               ▼                         │
│                       ┌──────────────┐                │
│                       │ Statistical  │                │
│                       │  Analysis    │                │
│                       │ (Python)     │                │
│                       └───────┬──────┘                │
│                               │                         │
│                               ▼                         │
│                       ┌──────────────┐                │
│                       │  Attention   │                │
│                       │  Patterns    │                │
│                       │   📊📈      │                │
│                       └──────────────┘                │
└─────────────────────────────────────────────────────────┘
```

### Alternative: Attention Heatmap

If you prefer a data visualization:

```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Sample data - replace with your actual data
conditions = ['Visual Only', 'Audio Only', 'Audiovisual', 'Conflict']
modalities = ['Gaze', 'Attention', 'Pupil Size', 'Fixation Duration']

# Create sample heatmap data
np.random.seed(42)
attention_data = np.random.rand(len(modalities), len(conditions))

# Create figure
plt.figure(figsize=(8, 6), facecolor='white')
sns.heatmap(attention_data,
            annot=True,
            fmt='.2f',
            cmap='YlOrRd',
            xticklabels=conditions,
            yticklabels=modalities,
            cbar_kws={'label': 'Attention Allocation'},
            linewidths=0.5,
            linecolor='gray')

plt.title('Multimodal Attention Patterns', fontsize=14, pad=20)
plt.xlabel('Experimental Condition', fontsize=12)
plt.ylabel('Attention Metric', fontsize=12)
plt.tight_layout()
plt.savefig('assets/img/research/attention-modeling.png',
            dpi=150,
            bbox_inches='tight',
            facecolor='white')
plt.show()
```

---

## Example 3: Embodied AI Overview

### What to Include:
```
┌─────────────────────────────────────────────────────────┐
│              Embodied Intelligence Research             │
│                                                         │
│  ┌─────────────────────────────────────────────────┐  │
│  │          Representation Learning                │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐     │  │
│  │  │ Visual   │  │ Tactile  │  │ Language │     │  │
│  │  │ Features │  │ Feedback │  │ Grounding│     │  │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘     │  │
│  │       └──────────────┼──────────────┘           │  │
│  │                      │                          │  │
│  │               ┌──────▼──────┐                   │  │
│  │               │  Multimodal │                   │  │
│  │               │   Encoder   │                   │  │
│  │               └──────┬──────┘                   │  │
│  └──────────────────────┼────────────────────────┘  │
│                         │                            │
│  ┌──────────────────────▼────────────────────────┐  │
│  │          Decision Making Module               │  │
│  │  ┌──────────┐       ┌──────────┐             │  │
│  │  │  Policy  │──────▶│ Action   │             │  │
│  │  │ Network  │       │Selection │             │  │
│  │  └──────────┘       └──────────┘             │  │
│  └────────────────────────┬──────────────────────┘  │
│                           │                          │
│  ┌────────────────────────▼─────────────────────┐   │
│  │            Embodied Agent                    │   │
│  │   🤖  Performs tasks in real/sim world      │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

---

## Quick Tips for Each Tool

### Using draw.io (Recommended for Beginners):
1. Go to https://app.diagrams.io/
2. File → New → Blank Diagram
3. Use these shapes:
   - **Rectangles** for components/modules
   - **Arrows** for data flow
   - **Circles** for states/steps
   - **Icons** from shape library (search for robot, eye, brain, etc.)
4. Apply colors:
   - Select shape → Style → Fill color
   - Use colors from DIAGRAM_GUIDE.md
5. Export:
   - File → Export as → PNG
   - Set DPI to 150
   - Check "Transparent Background" if needed

### Using PowerPoint/Keynote:
1. Create new slide (16:9 ratio)
2. Insert → Shapes → Rectangles, Arrows
3. Insert → Icons (search for research-related icons)
4. Use consistent fonts: Arial or Helvetica
5. Arrange → Align tools for clean layout
6. File → Save As → PNG (choose slide only)

### Using Figma:
1. Create new frame (400x300px)
2. Use Auto Layout for consistent spacing
3. Components → Icon library (search)
4. Apply colors from your palette
5. Export → PNG → 2x resolution

### Using Python (matplotlib):
```python
import matplotlib.pyplot as plt
import matplotlib.patches as patches

fig, ax = plt.subplots(figsize=(8, 6), facecolor='white')

# Example: System architecture
boxes = {
    'Input': (0.1, 0.7, 0.2, 0.15, '#4A90E2'),
    'Model': (0.4, 0.7, 0.2, 0.15, '#7CB342'),
    'Output': (0.7, 0.7, 0.2, 0.15, '#FF8A50')
}

for name, (x, y, w, h, color) in boxes.items():
    rect = patches.Rectangle((x, y), w, h,
                              linewidth=2,
                              edgecolor='black',
                              facecolor=color,
                              alpha=0.7)
    ax.add_patch(rect)
    ax.text(x + w/2, y + h/2, name,
            ha='center', va='center',
            fontsize=12, fontweight='bold',
            color='white')

# Add arrows
ax.annotate('', xy=(0.4, 0.775), xytext=(0.3, 0.775),
            arrowprops=dict(arrowstyle='->', lw=2, color='black'))
ax.annotate('', xy=(0.7, 0.775), xytext=(0.6, 0.775),
            arrowprops=dict(arrowstyle='->', lw=2, color='black'))

ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis('off')
plt.title('System Architecture', fontsize=14, pad=20)
plt.tight_layout()
plt.savefig('diagram.png', dpi=150, bbox_inches='tight', facecolor='white')
```

---

## Color Reference (Copy & Paste)

### Recommended Palette:
- **Input/Data**: `#4A90E2` (Blue)
- **Processing/Learning**: `#7CB342` (Green)
- **Output/Results**: `#FF8A50` (Orange)
- **Highlight/Important**: `#E24A4A` (Red)
- **Background**: `#FFFFFF` (White) or `#F8F9FA` (Light Gray)
- **Text**: `#2C3E50` (Dark Gray/Blue)

### For Accessibility:
- Ensure contrast ratio ≥ 4.5:1 for text
- Use patterns/shapes in addition to color
- Test with color blindness simulator

---

## Checklist for Each Diagram

Before saving:
- [ ] Resolution is at least 400x300px (or 2x for retina)
- [ ] Text is readable (minimum 12pt font size)
- [ ] Colors match your palette
- [ ] Arrows clearly show direction
- [ ] No more than 7 main elements (avoid clutter)
- [ ] Background is white or transparent
- [ ] File size < 500KB (use TinyPNG if needed)
- [ ] Filename matches what's in about.md

---

## Need Inspiration?

### Good Academic Diagram Examples:
- Google Scholar papers in your field
- Conference presentation slides
- Research group websites (WhiRL, MIT CSAIL, etc.)
- Technical blog posts (Distill.pub, OpenAI blog)

### Style Guide:
- **Minimalist**: Clean, lots of white space (recommended)
- **Technical**: Detailed, annotated (for methods)
- **Conceptual**: Abstract, simplified (for overview)

Choose the style that best fits your research and audience!

---

**Remember**: Perfect is the enemy of done. Start with simple diagrams and iterate!
