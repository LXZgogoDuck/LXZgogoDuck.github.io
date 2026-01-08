#!/usr/bin/env python3
"""
Generate placeholder SVG images for research projects.
These are temporary placeholders until you create your actual diagrams.
"""

import os

# Create the research directory if it doesn't exist
os.makedirs('assets/img/research', exist_ok=True)

# Define placeholder images
placeholders = {
    'otter-architecture.svg': {
        'title': 'OTTER + SimplerEnv',
        'subtitle': 'Transformer-Based Generalist Agent',
        'color': '#4A90E2',
        'icons': ['🤖', '🔄', '🎯']
    },
    'attention-modeling.svg': {
        'title': 'Multimodal Attention',
        'subtitle': 'Eye-tracking & Cognitive Modeling',
        'color': '#7CB342',
        'icons': ['👁️', '🧠', '📊']
    },
    'embodied-ai.svg': {
        'title': 'Embodied Intelligence',
        'subtitle': 'Representation Learning & Decision Making',
        'color': '#FF8A50',
        'icons': ['🦾', '📡', '💡']
    }
}

# SVG template
svg_template = """<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="400" height="300" fill="{bg_color}"/>

  <!-- Title -->
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="24" font-weight="bold"
        fill="white" text-anchor="middle">{title}</text>

  <!-- Subtitle -->
  <text x="200" y="130" font-family="Arial, sans-serif" font-size="14"
        fill="#FFFFFF" opacity="0.9" text-anchor="middle">{subtitle}</text>

  <!-- Icons -->
  <text x="100" y="200" font-size="40" text-anchor="middle">{icon1}</text>
  <text x="200" y="200" font-size="40" text-anchor="middle">{icon2}</text>
  <text x="300" y="200" font-size="40" text-anchor="middle">{icon3}</text>

  <!-- Decorative elements -->
  <circle cx="50" cy="50" r="20" fill="white" opacity="0.2"/>
  <circle cx="350" cy="250" r="30" fill="white" opacity="0.15"/>

  <!-- Footer text -->
  <text x="200" y="270" font-family="Arial, sans-serif" font-size="11"
        fill="white" opacity="0.7" text-anchor="middle">Placeholder - Replace with actual diagram</text>
</svg>"""

# Generate each placeholder
for filename, config in placeholders.items():
    svg_content = svg_template.format(
        bg_color=config['color'],
        title=config['title'],
        subtitle=config['subtitle'],
        icon1=config['icons'][0],
        icon2=config['icons'][1],
        icon3=config['icons'][2]
    )

    # Save as SVG
    svg_path = f"assets/img/research/{filename}"
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)

    # Also save as PNG version (update extension in filename)
    png_filename = filename.replace('.svg', '.png')

    print(f"✓ Created: {svg_path}")

print("\n" + "="*60)
print("Placeholder images created successfully!")
print("="*60)
print("\nNext steps:")
print("1. Open the placeholders in assets/img/research/")
print("2. Create your actual research diagrams following DIAGRAM_GUIDE.md")
print("3. Replace the .svg files with your .png diagrams")
print("4. Update the image paths in about.md if needed")
print("\nYou can view the placeholders by opening your site locally.")
