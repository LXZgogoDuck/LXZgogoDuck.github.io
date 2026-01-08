# Website Update Summary - Based on CV & Research Statement

## Changes Made ✅

### 1. Updated About Page ([_pages/about.md](_pages/about.md))

#### Enhanced Bio Section:
- Added academic achievements (cGPA: 3.92/4.0, Rank: 1/149)
- Added Oxford GPA (First Class, 4.0/4.0)
- Updated affiliation to Oxford Robotics Institute with Prof. Shimon Whiteson
- Added MSRA achievement: **2nd place IROS 2025 Challenge + Rising Tech Talent**
- Clarified research goal from your research statement

#### Updated Research Focus:
Changed from generic interests to your specific two-track approach:
- **Track 1**: Human intelligence for physical intelligence
- **Track 2**: Physical intelligence around humans

### 2. Four Accurate Research Cards

#### Card 1: Differential VLA (Oxford) ⭐ NEW
**Title**: "Differential VLA: Reducing Attention Noise for Robust Vision-Language-Action Policies"
- Developed attention visualization pipeline
- Analyzed Octo and OpenVLA models
- Discovered late-layer attention diffusion problem
- Implemented Differential Transformer solution
- **Result**: +5.3% success rate on SimplerEnv
- **Status**: Submitted to ICPR 2026 (first author)
- **Image**: [vla-attention.svg](assets/img/research/vla-attention.svg)

#### Card 2: Multimodal Attention (CUHK-SZ) 🏆
**Title**: "The Impact of Synchronized Visual and Auditory Attention on Human Perception"
- Multi-speaker environment experiments
- Eye-tracking with Tobii system
- Quantified how visual cues enhance speech comprehension
- **Award**: Best Student Paper at ICSR 2024
- **Paper**: [Published](https://link.springer.com/chapter/10.1007/978-981-96-1151-5_6)
- **Image**: [multimodal-attention.svg](assets/img/research/multimodal-attention.svg)

#### Card 3: Perception-Reasoning Loop (CUHK-SZ) 🎓 NEW
**Title**: "Modeling Human Perception-Reasoning Loop for Intent Understanding"
- Medical diagnostic decision-making model
- LLM-generated disease-specific rules
- Sparse transformer + two-stage RL
- **Result**: 45% diagnostic prediction accuracy on MIMIC
- **Award**: 2025 Undergraduate Research Award
- **Status**: Submitted to ICML 2026
- **Image**: [perception-reasoning.svg](assets/img/research/perception-reasoning.svg)

#### Card 4: Real-World VLA (MSRA) 🏆 NEW
**Title**: "VLA Models for Real-World Dexterous Manipulation"
- π0.5-based 3D VLA policies
- 10 long-horizon dexterous tasks
- Minimum-jerk regularization for smooth motion
- 3D spatial distillation from geometric teacher
- G1 robot deployment
- **Achievement**: 2nd place IROS 2025 Manipulation Challenge, Rising Tech Talent
- **Image**: [vla-real-robot.svg](assets/img/research/vla-real-robot.svg)

### 3. New Placeholder Images

Created 4 professional SVG placeholders matching your actual research:

| Image | Research Project | Color | Status |
|-------|-----------------|-------|--------|
| `vla-attention.svg` | Oxford VLA work | Blue (#5B7FE8) | ✅ Created |
| `multimodal-attention.svg` | CUHK multimodal | Green (#7CB342) | ✅ Created |
| `perception-reasoning.svg` | CUHK medical AI | Purple (#9C68D6) | ✅ Created |
| `vla-real-robot.svg` | MSRA real robots | Red (#E85B5B) | ✅ Created |

Each placeholder includes:
- Visual representation of the research concept
- Key metrics/achievements
- Awards and recognition
- Appropriate icons and flow diagrams

### 4. Updated Documentation

#### DIAGRAM_GUIDE.md Updates:
- Updated all 4 project descriptions to match actual research
- Specific guidance for each project's diagram
- Correct technical details (SimplerEnv, Tobii, MIMIC, G1 robot, etc.)

---

## Key Improvements

### Accuracy ✅
- All research descriptions now match your CV and research statement exactly
- Correct dates, institutions, and supervisors
- Accurate performance metrics and achievements
- Proper paper status (published, submitted)

### Completeness ✅
- Added all 4 major research projects
- Included both published and ongoing work
- Highlighted awards and recognition:
  - Best Student Paper (ICSR 2024)
  - Undergraduate Research Award (2025)
  - 2nd place IROS Challenge (2025)
  - Rising Tech Talent

### Professional Impact ✅
- Emphasized quantitative results (+5.3%, 45% accuracy, etc.)
- Showed research progression: human cognition → VLA models → real robots
- Clear connection between projects (attention mechanisms throughout)
- Demonstrated both theoretical and applied work

---

## What You Should Do Next

### Immediate (Before Deploying):

1. **Review Content**:
   - Check [_pages/about.md](_pages/about.md) for accuracy
   - Verify all dates, names, and metrics
   - Ensure paper links are correct

2. **Update Placeholder Links**:
   - Card 1 (Oxford VLA): Add paper link when available
   - Card 3 (Perception-Reasoning): Update with ICML submission when ready

3. **Optional Enhancements**:
   - Add link to your research statement PDF
   - Link to code repositories if available
   - Add slides/poster links for ICSR presentation

### Medium-term (1-2 weeks):

1. **Create Actual Diagrams**:
   Use the updated [DIAGRAM_GUIDE.md](DIAGRAM_GUIDE.md) to create:
   - **Priority 1**: VLA attention visualization (most unique contribution)
   - **Priority 2**: Multimodal attention experimental setup
   - **Priority 3**: Perception-reasoning loop diagram
   - **Priority 4**: Real robot manipulation pipeline

2. **Recommended Tools**:
   - **For VLA attention**: Python matplotlib with attention heatmaps
   - **For multimodal**: draw.io or PowerPoint
   - **For perception-reasoning**: draw.io circular diagram
   - **For robot manipulation**: Figma or draw.io pipeline

3. **Sizes**:
   - Thumbnails: 400x300px
   - Full diagrams: 1200x900px or larger

### Long-term:

1. **Add Publications Page**:
   - List both papers with abstracts
   - Use same card layout for consistency
   - Include bibtex citations

2. **Create Project Detail Pages**:
   - Individual pages for each major project
   - Include methodology, results, visualizations
   - Link from research cards

3. **Add CV Page**:
   - Display your CV PDF
   - Or create structured HTML CV using resume.json

---

## File Changes Summary

### Modified Files:
```
_pages/about.md                                 # Updated bio + 4 research cards
DIAGRAM_GUIDE.md                                # Updated with actual projects
```

### New Files:
```
assets/img/research/vla-attention.svg           # Oxford VLA placeholder
assets/img/research/multimodal-attention.svg    # CUHK multimodal placeholder
assets/img/research/perception-reasoning.svg    # CUHK medical AI placeholder
assets/img/research/vla-real-robot.svg          # MSRA robots placeholder
UPDATES_SUMMARY.md                              # This file
```

### Deleted (Old Placeholders):
```
assets/img/research/otter-architecture.svg      # Replaced with vla-attention.svg
# Note: embodied-ai.svg was replaced with vla-real-robot.svg
# Note: attention-modeling.svg was replaced with multimodal-attention.svg
```

---

## Testing Checklist

Before deploying, verify:

- [ ] About page loads without errors
- [ ] All 4 research cards display correctly
- [ ] SVG images render properly
- [ ] Links to published paper work (ICSR)
- [ ] Text formatting is clean (no weird spacing)
- [ ] Responsive design works on mobile
- [ ] Awards and metrics are prominent
- [ ] Institution names are correct
- [ ] Dates are accurate
- [ ] No typos in technical terms (VLA, SimplerEnv, MIMIC, etc.)

---

## Git Commit Message

When ready to commit, use:

```bash
git add _pages/about.md
git add assets/img/research/
git add DIAGRAM_GUIDE.md
git add UPDATES_SUMMARY.md

git commit -m "Update research highlights with accurate CV content

- Updated 4 research cards with actual projects from CV/statement
- Added Oxford VLA work (Differential Transformer, +5.3% improvement)
- Added CUHK perception-reasoning loop (45% accuracy, ICML submission)
- Updated MSRA work with IROS Challenge 2nd place achievement
- Created new SVG placeholders matching research themes
- Updated diagram guide with project-specific instructions

Research now accurately reflects:
- Best Student Paper (ICSR 2024)
- Undergraduate Research Award (2025)
- 2nd Place IROS Challenge + Rising Tech Talent (2025)
- First-author ICPR 2026 submission"

git push origin main
```

---

## Visual Design Notes

### Color Coding by Institution:
- **Oxford** (Blue #5B7FE8): Vision-language-action models
- **CUHK** (Green #7CB342, Purple #9C68D6): Human cognition research
- **MSRA** (Red #E85B5B): Real-world robotics deployment

### Achievement Badges:
- 🏆 Used for awards (Best Paper, Challenge winners)
- 📄 Used for publications
- ⭐ Used for ongoing research with strong results

### Emphasis:
- **Bold** used for key metrics and achievements
- Quantitative results prominently displayed
- Awards in both text and visual elements

---

## Comparison: Before vs After

### Before:
- Generic research descriptions
- Incorrect project focus (OTTER instead of Differential VLA)
- Missing major projects (perception-reasoning, real robots)
- No specific achievements or metrics
- Vague institutional affiliations

### After:
- Exact research titles matching CV
- All 4 major projects represented
- Specific metrics (+5.3%, 45%, 2nd place)
- Awards prominently featured
- Clear institutional context (Oxford Robotics Institute, MSRA ML Group)
- Paper submission status included
- Links to published work

---

**Your website now accurately represents your impressive research portfolio!** 🎉

The visual design emphasizes your achievements while maintaining professional academic standards. Visitors can immediately see:
1. Your quantitative contributions (+5.3% improvement, 45% accuracy)
2. Recognition received (Best Paper, Rising Tech Talent, Undergraduate Award)
3. Research breadth (human cognition → VLA models → real robots)
4. Publication track record (1 published, 2 under review)
