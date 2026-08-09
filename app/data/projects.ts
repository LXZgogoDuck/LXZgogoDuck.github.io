export interface Project {
  id: string;
  title: string;
  image: string;
  /** Release date (YYYY-MM), used to rank projects newest-first. */
  date: string;
  /** Pins the project above the rest, ahead of any newer non-featured work. */
  featured?: boolean;
  role: string;
  points: string[];
  tags?: string[];
  website?: string;
  arxiv?: string;
  video?: string;
  code?: string;
  pdf?: string;
  media?: string;
  authors?: string[];
}

const projectList: Project[] = [
  {
    id: 'differential-vla',
    title: "Differential VLA: Reducing Attention Noise for Robust Vision-Language-Action Policy Learning",
    image: "/images/research/vla-attention.svg",
    date: "2025-07",
    featured: true,
    role: "First Author",
    points: [
      "Submitted to CVPR 2026",
      "TL;DR: Vision-language-action models lose focus in cluttered scenes — their final attention layers go diffuse. We built a visualization pipeline to trace how Octo and OpenVLA allocate visual attention across transformer layers, then integrated Differential Transformer layers to filter attention noise while preserving salient signals, improving success rate by 5.3% on the SimplerEnv benchmark."
    ],
    tags: ["Vision-Language-Action", "Attention Mechanisms", "Robot Manipulation", "SimplerEnv"],
    authors: ["Xuanzhuo Liu", "Zheng Xiong", "Shimon Whiteson"]
  },
  {
    id: 'dexterous-manipulation',
    title: "Vision-Language-Action Models for Real-World Dexterous Manipulation",
    image: "/images/research/vla-real-robot.svg",
    date: "2026-01",
    role: "Research Intern, MSRA",
    points: [
      "2nd place, IROS 2025 Manipulation Challenge · Rising Tech Talent Award",
      "TL;DR: Pretrained a 4B-parameter π0.5-based 3D vision-language-action policy from scratch on 10,000+ hours of manipulation data, then fine-tuned it across 10 long-horizon dexterous tasks. Minimum-jerk regularization cut action variance by 25% for smoother trajectories, 3D spatial distillation internalized depth understanding without changing the input format, and knowledge distillation reduced inference latency by 30% for real-time control on the Unitree G1."
    ],
    tags: ["Real-World Robotics", "VLA Models", "3D Perception", "Dexterous Manipulation"],
    authors: ["Xuanzhuo Liu", "Microsoft Research Asia, Machine Learning Group"]
  },
  {
    id: 'perception-reasoning',
    title: "Modeling the Human Perception-Reasoning Loop for Intent Understanding",
    image: "/images/research/perception-reasoning.svg",
    date: "2024-06",
    role: "First Author",
    points: [
      "Submitted to ICML 2026 · 2025 Undergraduate Research Award",
      "TL;DR: Doctors do not diagnose in one pass — they perceive, reason, then go looking for more evidence. We used large language models to generate disease-specific diagnostic rule sets from clinical text and guidelines, grouped clinicians by expertise, and trained a sparse transformer with two-stage reinforcement learning to capture that perception → reasoning → perception loop, reaching ~45% accuracy in predicting diagnostic decisions on MIMIC."
    ],
    tags: ["Cognitive Modeling", "Reinforcement Learning", "Sparse Transformers", "Medical AI"],
    authors: ["Xuanzhuo Liu", "Shuang Li"]
  },
  {
    id: 'multimodal-attention',
    title: "The Impact of Synchronized Visual and Auditory Attention on Human Perception",
    image: "/images/research/multimodal-attention.svg",
    date: "2024-10",
    role: "Co-Author",
    points: [
      "ICSR 2024 · Best Student Paper Award",
      "TL;DR: Does watching a speaker's face and gaze actually help you hear them in a crowded room? We designed controlled eye-tracking experiments in multi-speaker environments to quantify cross-modal attention patterns, and found that synchronized visual and auditory input significantly improves speech comprehension."
    ],
    tags: ["Multimodal Perception", "Eye-tracking", "Human Attention", "Social Robotics"],
    authors: ["Lichuan Jiang", "Jiani Zhong", "Xuanzhuo Liu", "Siqi Cai", "Haizhou Li"]
  }
];

/** Featured work first, then newest-first by release date. */
export const projects: Project[] = [...projectList].sort((a, b) => {
  if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
  return b.date.localeCompare(a.date);
});
