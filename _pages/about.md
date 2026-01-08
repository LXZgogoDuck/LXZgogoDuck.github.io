---
layout: about        # uses the custom layout below
title: about
permalink: /
subtitle:

profile:
  align: right
  image: pic.jpeg
  image_circular: false
  # more_info (optional) could stay here

selected_papers: false
social: true          # show icons
announcements:
  enabled: false
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
  scrollable: true
  limit: 3

misc: >
  I love music, dance, anime and nature. I'm a devoted fan of Hua Chenyu, whose songs have been a constant source of warmth and inspiration. Thanks to my mother’s encouragement, I’ve practiced piano and Chinese classical dance for over 15 years. I also love <a href="https://users.ox.ac.uk/~climbing/Home.html">mountaineering</a> and I'm currently learning Korean in my free time.
---

I'm **Xuanzhuo Liu (刘萱卓)**, a senior at [The Chinese University of Hong Kong, Shenzhen](https://www.cuhk.edu.cn/en), majoring in Data Science. I've spent a wonderful year at the [University of Oxford](https://www.ox.ac.uk/), studying Mathematics and Computer Science through the [Visiting Student Programme](https://www.st-hildas.ox.ac.uk/news/st-hildas-visiting-student-programme) (1 out of 30 students in China). 

In terms of academic performance, my average GPA is 3.94, **ranking first in my major (1/149)**. I achieved **first class grades** in 8 graduate-level courses at Oxford. I began my research under the supervision of [Prof. Haizhou Li](https://www.colips.org/~eleliha/) and [Prof. Shuang Li](https://shuangli01.github.io/) on **cognitive modeling and multimodal attention**.
Later, I researched **robotic foundation models** in the [Oxford Robotics Institute](http://whirl.cs.ox.ac.uk/) under the guidance of [Prof. Shimon Whiteson](https://www.cs.ox.ac.uk/people/shimon.whiteson/). Currently, I'm conducting research on **embodied AI and VLA models** at [Microsoft Research Asia](https://www.microsoft.com/en-us/research/group/machine-learning-research-group/).


<!-- At CUHK(SZ), I worked with [Prof. Haizhou Li](https://www.colips.org/~eleliha/) and [Prof. Shuang Li](https://shuangli01.github.io/) on **cognitive modeling and multimodal attention**, studying how humans process audiovisual signals and how to model the human perception–reasoning loop. -->

**My Research Goal:** I aim to build the next generation of general-purpose robotic systems that are both intelligent and trustworthy, bridging human intelligence and physical intelligence within a unified framework.

My research focuses on two complementary directions:
- **Human intelligence for physical intelligence**: Modeling human goals, preferences, and decision-making to make embodied agents more robust, adaptive, and aligned with human needs
- **Physical intelligence around humans**: Designing control and learning methods that enable physical agents to act safely in human-centered environments

I'm especially motivated by challenges at the intersection of **vision-language-action models**, **attention mechanisms for embodied agents**, and **continuous 3D perception**. I aspire to pursue a PhD focused on building robots that maintain rich, persistent world models while acting in human environments.

## Research Highlights

<div class="research-highlights">

<div class="research-card">
  <div class="research-card-thumbnail">
    <img src="assets/img/research/vla-attention.svg" alt="VLA Attention Visualization" loading="lazy">
  </div>
  <div class="research-card-content">
    <h3><a href="projects/differential-vla/">Differential VLA: Reducing Attention Noise for Robust Vision-Language-Action Policies</a></h3>
    <div class="research-meta">
      <span class="institution">University of Oxford - Oxford Robotics Institute</span> •
      <span class="date">Oct 2024 - July 2025</span>
    </div>
    <p class="research-description">
      Developed a visualization pipeline to analyze how VLA models like Octo and OpenVLA allocate visual attention
      across transformer layers. Discovered that final layers become diffuse in cluttered scenes. Integrated Differential
      Transformer layers to preserve salient signals by filtering attention noise, achieving <strong>+5.3% success rate</strong>
      on SimplerEnv benchmark. Paper submitted to ICPR 2026 (first author).
    </p>
    <div class="research-tags">
      <span class="tag">Vision-Language-Action</span>
      <span class="tag">Attention Mechanisms</span>
      <span class="tag">Robot Manipulation</span>
      <span class="tag">SimplerEnv</span>
    </div>
    <div class="research-links">
      <a href="projects/differential-vla/"><i class="fas fa-info-circle"></i>Details</a>
      <a href="#"><i class="fas fa-file-pdf"></i>Paper (under review)</a>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-card-thumbnail">
    <img src="assets/img/research/multimodal-attention.svg" alt="Multimodal Attention Research" loading="lazy">
  </div>
  <div class="research-card-content">
    <h3><a href="projects/multimodal-attention/">The Impact of Synchronized Visual and Auditory Attention on Human Perception</a></h3>
    <div class="research-meta">
      <span class="institution">CUHK(SZ) - Shenzhen Research Institute of Big Data</span> •
      <span class="date">Sept 2023 - Aug 2024</span>
    </div>
    <p class="research-description">
      Investigated whether synchronized visual cues (speaker's face and gaze) improve selective auditory attention
      in multi-speaker environments. Designed controlled experiments with eye-tracking to quantify multimodal attention
      patterns. Results showed that synchronized visual and auditory input significantly enhances speech comprehension.
      <strong>Best Student Paper Award at ICSR 2024</strong> (co-author, led presentation).
    </p>
    <div class="research-tags">
      <span class="tag">Multimodal Perception</span>
      <span class="tag">Eye-tracking</span>
      <span class="tag">Human Attention</span>
      <span class="tag">Social Robotics</span>
    </div>
    <div class="research-links">
      <a href="projects/multimodal-attention/"><i class="fas fa-info-circle"></i>Details</a>
      <a href="https://link.springer.com/chapter/10.1007/978-981-96-1151-5_6"><i class="fas fa-file-pdf"></i>Paper</a>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-card-thumbnail">
    <img src="assets/img/research/perception-reasoning.svg" alt="Perception-Reasoning Loop" loading="lazy">
  </div>
  <div class="research-card-content">
    <h3><a href="projects/perception-reasoning/">Modeling Human Perception-Reasoning Loop for Intent Understanding</a></h3>
    <div class="research-meta">
      <span class="institution">CUHK(SZ) - Advised by Prof. Shuang Li</span> •
      <span class="date">2023 - 2024</span>
    </div>
    <p class="research-description">
      Built a model capturing how doctors perceive clinical signals, reason about diagnoses, and request additional
      information. Used LLMs to generate disease-specific diagnostic rule sets and grouped doctors by expertise levels.
      Implemented sparse transformer with two-stage reinforcement learning to model the perception → reasoning →
      perception loop. Achieved <strong>45% diagnostic prediction accuracy</strong> on MIMIC dataset. <strong>2025 Undergraduate
      Research Award</strong>. Submitted to ICML 2026.
    </p>
    <div class="research-tags">
      <span class="tag">Cognitive Modeling</span>
      <span class="tag">Reinforcement Learning</span>
      <span class="tag">Sparse Transformers</span>
      <span class="tag">Medical AI</span>
    </div>
    <div class="research-links">
      <a href="projects/perception-reasoning/"><i class="fas fa-info-circle"></i>Details</a>
    </div>
  </div>
</div>

<div class="research-card">
  <div class="research-card-thumbnail">
    <img src="assets/img/research/vla-real-robot.svg" alt="VLA for Real-World Manipulation" loading="lazy">
  </div>
  <div class="research-card-content">
    <h3><a href="projects/vla-real-robot/">VLA Models for Real-World Dexterous Manipulation</a></h3>
    <div class="research-meta">
      <span class="institution">Microsoft Research Asia - Machine Learning Group</span> •
      <span class="date">July 2025 - Jan 2026</span>
    </div>
    <p class="research-description">
      Pretrained π0.5-based 3D Vision-Language-Action policies and fine-tuned across 10 long-horizon dexterous tasks.
      Addressed motion jitter by adding <strong>minimum-jerk regularization</strong> for smoother trajectories and implemented
      <strong>3D spatial distillation</strong> to internalize depth understanding without changing input format. Optimized control
      parameters for G1 robot deployment. <strong>2nd place at 2025 IROS Manipulation Challenge, Rising Tech Talent Award</strong>.
    </p>
    <div class="research-tags">
      <span class="tag">Real-World Robotics</span>
      <span class="tag">VLA Models</span>
      <span class="tag">3D Perception</span>
      <span class="tag">Dexterous Manipulation</span>
    </div>
    <div class="research-links">
      <a href="projects/vla-real-robot/"><i class="fas fa-info-circle"></i>Details</a>
      <a 
    href="https://www.xiaohongshu.com/explore/68f78c170000000007021cfd?xsec_token=ABgpnamHO02Yd1Cl5Ks-N3ol2E8rGMtjkSr1YeIs_k8UU=&xsec_source=pc_search&source=unknown" 
    target="_blank"
      >
      <i class="fas fa-video"></i> Media Interview
  </a>
    </div>
  </div>
</div>

</div>

---

Thanks for visiting — feel free to explore my work or reach out!