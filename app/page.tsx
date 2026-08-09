'use client';

import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import NewsCard from "./components/NewsCard";
import ThemeToggle from "./components/ThemeToggle";
import ScrollReveal from "./components/ScrollReveal";
import { projects } from "./data/projects";
import { educations, experiences, services } from "./data/background";
import { newsItems } from "./data/news";

const navSections = ['news', 'research', 'background'] as const;

export default function Home() {
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Set<string>();

    navSections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visibleSections.add(id);
          else visibleSections.delete(id);
          // Pick the first visible section in DOM order
          const current = navSections.find(s => visibleSections.has(s));
          setActiveNav(current || '');
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1ea] dark:bg-[#16130e] relative overflow-hidden">
      {/* Subtle warm paper wash */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#e9e2d4]/40 dark:bg-[#241d12]/30 rounded-full blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#f4f1ea]/85 dark:bg-[#16130e]/50 backdrop-blur-md z-50 border-b border-white/30 dark:border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* The hero repeats the name, so it can drop out when space is tight. */}
            <div className="hidden sm:block text-lg font-semibold text-[#1a2332] dark:text-white/90 tracking-tight whitespace-nowrap">
              Xuanzhuo Liu
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {navSections.map(id => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-300 ${
                    activeNav === id
                      ? 'text-[#1a2332] dark:text-white/90 bg-[#1a2332]/8 dark:bg-white/10 font-medium'
                      : 'text-[#6b7a8d] dark:text-white/40 hover:text-[#1a2332] dark:hover:text-white/80'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <div className="ml-1 sm:ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <ProfileCard />
          </ScrollReveal>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 md:mb-12 text-[#1a2332] dark:text-white/90">News</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-[#fbf9f4]/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl border border-white/60 dark:border-white/[0.06] shadow-[0_8px_40px_rgba(70,55,40,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] p-6 md:p-8">
              <NewsCard items={newsItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 md:mb-12 text-[#1a2332] dark:text-white/90">Research</h2>
          </ScrollReveal>
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i < 3 ? i * 80 : 0}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section id="background" className="py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 md:mb-10 text-[#1a2332] dark:text-white/90">Background</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Timeline educations={educations} experiences={experiences} services={services} />
          </ScrollReveal>
        </div>
      </section>

      {/* Beyond research */}
      <section className="py-12 md:py-16 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 md:mb-10 text-[#1a2332] dark:text-white/90">Beyond Research</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-[#fbf9f4]/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl border border-white/60 dark:border-white/[0.06] shadow-[0_8px_40px_rgba(70,55,40,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] p-6 md:p-8">
              <p className="text-[#4a5568] dark:text-white/50 leading-relaxed">
                I love music, dance, anime, and nature. Thanks to my mother&apos;s encouragement, I have
                practiced piano and Chinese classical dance for over 15 years. I am a devoted fan of
                Hua Chenyu, whose songs have been a constant source of warmth and inspiration. I also
                love mountaineering, and I am learning Korean in my free time.
              </p>
              <p className="text-[#4a5568] dark:text-white/50 leading-relaxed mt-4">
                Thanks for visiting — feel free to explore my work or{" "}
                <a
                  href="mailto:xuanzliu@stanford.edu"
                  className="underline decoration-[#c9b8a0] underline-offset-2 hover:text-[#9a5b3c] dark:hover:text-[#c89472] transition-colors"
                >
                  reach out
                </a>
                . Email is the best way to get in touch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 px-6 relative z-10 border-t border-white/20 dark:border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto text-center text-sm text-[#8b95a5] dark:text-white/30">
          &copy; {new Date().getFullYear()} Xuanzhuo Liu
        </div>
      </footer>
    </div>
  );
}
