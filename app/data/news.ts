export interface NewsItem {
  date: string;
  content: string;
  href?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "2026 Oct",
    content: "Starting my MS in Electrical Engineering at Stanford University, advised by Prof. Stephen P. Boyd.",
    href: "https://ee.stanford.edu/"
  },
  {
    date: "2026 May",
    content: "Graduated from CUHK-Shenzhen with a BS in Data Science, ranked 1st in my major (1/149)."
  },
  {
    date: "2026 Feb",
    content: "Wrapped up my Stars of Tomorrow internship with the Machine Learning Group at Microsoft Research Asia.",
    href: "https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/"
  },
  {
    date: "2025 Oct",
    content: "Placed 2nd of 300+ teams at the IROS 2025 Manipulation Challenge, recognized as Rising Tech Talent."
  },
  {
    date: "2025 Jun",
    content: "Received the 2025 Undergraduate Research Award for work on modeling the human perception-reasoning loop."
  },
  {
    date: "2024 Oct",
    content: "Began a visiting year in Mathematics and Computer Science at the University of Oxford, researching at the Oxford Robotics Institute.",
    href: "https://ori.ox.ac.uk/"
  },
  {
    date: "2024 Oct",
    content: "Our paper on synchronized visual and auditory attention received the Best Student Paper Award at ICSR 2024."
  }
];
