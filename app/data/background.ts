export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  /** Path to a logo image. Falls back to a lettermark when omitted. */
  icon?: string;
  advisor?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  icon?: string;
  advisor?: string;
  note?: string;
}

export interface Service {
  title: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    title: "Research Intern, Stars of Tomorrow",
    company: "Microsoft Research Asia, Machine Learning Group",
    period: "July 2025 - Feb 2026",
    description: "High-dimensional optimization, low-latency sequential decision systems, and on-policy RL for real-world dexterous manipulation."
  },
  {
    title: "Research Assistant",
    company: "Oxford Robotics Institute",
    period: "Oct 2024 - July 2025",
    description: "Attention-based sequence models and signal-to-noise analysis for vision-language-action policies.",
    advisor: "Prof. Shimon Whiteson"
  },
  {
    title: "Research Assistant",
    company: "Shenzhen Research Institute of Big Data",
    period: "Sept 2023 - Aug 2024",
    description: "Time-series statistical modeling and sequential decision analysis for multimodal attention and clinical reasoning.",
    advisor: "Prof. Haizhou Li\nProf. Shuang Li"
  }
];

export const educations: Education[] = [
  {
    school: "Stanford University",
    degree: "M.S. in Electrical Engineering",
    period: "Oct 2026 - Aug 2028",
    advisor: "Prof. Stephen P. Boyd",
    note: "Signal Processing, Optimization and Statistical Learning"
  },
  {
    school: "University of Oxford",
    degree: "Visiting Student, Mathematics and Computer Science",
    period: "Oct 2024 - Aug 2025",
    note: "First Class · 1 of 30 students selected from China"
  },
  {
    school: "The Chinese University of Hong Kong, Shenzhen",
    degree: "B.S. in Data Science and Big Data Technology",
    period: "Sept 2022 - May 2026",
    advisor: "Prof. Haizhou Li",
    icon: "/images/cuhksz-logo.png",
    note: "cGPA 3.92/4.0 · Rank 1/149 · mGPA 4.0/4.0"
  }
];

export const services: Service[] = [
  {
    title: "Honors & Awards",
    items: [
      "Best Student Paper Award, ICSR 2024",
      "Rising Tech Talent — 2nd place of 300+ teams, IROS 2025 Manipulation Challenge",
      "Undergraduate Research Award, CUHK-Shenzhen, 2025",
      "Academic Scholarship (Top 1%), CUHK-Shenzhen",
      "Dean's List, CUHK-Shenzhen",
      "Best Undergraduate Teaching Fellow, CUHK-Shenzhen"
    ]
  },
  {
    title: "Selected Coursework",
    items: [
      "Oxford: Stochastic Differential Equations, Functional Analysis, Real Analysis",
      "Oxford: Numerical Analysis, Optimal Control",
      "Oxford: Bayesian Statistical Probabilistic Programming",
      "Oxford: Geometric Deep Learning, Graph Representation Learning"
    ]
  }
];
