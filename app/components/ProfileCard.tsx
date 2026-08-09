import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-white/70 dark:border-white/10 shadow-[0_8px_32px_rgba(70,55,40,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex-shrink-0">
        <Image
          src="/images/xuanzhuo.jpg"
          alt="Xuanzhuo Liu"
          fill
          priority
          sizes="(max-width: 768px) 12rem, 16rem"
          className="object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2332] dark:text-white/90 mb-2 md:mb-3">
          Xuanzhuo Liu <span className="text-2xl md:text-3xl font-bold text-[#6b7a8d] dark:text-white/50">刘萱卓</span>
        </h1>
        <p className="text-[#4a5568] dark:text-white/50 text-base md:text-lg leading-relaxed">
          I am an incoming M.S. student in Electrical Engineering at{" "}
          <Link href="https://ee.stanford.edu/">Stanford University</Link>, working on signal
          processing, optimization, and statistical learning with{" "}
          <Link href="https://web.stanford.edu/~boyd/">Prof. Stephen P. Boyd</Link>.
        </p>
        <p className="text-[#4a5568] dark:text-white/50 text-base md:text-lg leading-relaxed mt-4">
          I recently graduated from{" "}
          <Link href="https://www.cuhk.edu.cn/en">The Chinese University of Hong Kong, Shenzhen</Link>{" "}
          with a B.S. in Data Science, ranked 1st in my major. Along the way I spent a wonderful
          year at the <Link href="https://www.ox.ac.uk/">University of Oxford</Link> reading
          Mathematics and Computer Science, researched robot foundation models at the{" "}
          <Link href="https://ori.ox.ac.uk/">Oxford Robotics Institute</Link> with{" "}
          <Link href="https://whirl.cs.ox.ac.uk/pages/people/shimon.html">Prof. Shimon Whiteson</Link>,
          and built real-world manipulation policies at{" "}
          <Link href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/">
            Microsoft Research Asia
          </Link>.
        </p>
        <p className="text-[#4a5568] dark:text-white/50 text-base md:text-lg leading-relaxed mt-4">
          My goal is to build general-purpose robotic systems that are both intelligent and
          trustworthy — bridging human intelligence and physical intelligence within a unified
          framework. I am especially drawn to vision-language-action models, attention mechanisms
          for embodied agents, and continuous 3D perception.
        </p>

        <div className="mt-4 md:mt-6 flex flex-wrap justify-center md:justify-start gap-2.5">
          <SocialPill href="mailto:xuanzliu@stanford.edu" label="Email" icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          } />
          <SocialPill href="/XuanzhuoLiu-CV.pdf" label="CV" external icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8M16 17H8M10 9H8" />
            </svg>
          } />
          <SocialPill href="https://github.com/LXZgogoDuck" label="GitHub" external icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          } />
          <SocialPill href="https://www.linkedin.com/in/xuanzhuoliu" label="LinkedIn" external icon={
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          } />
        </div>
      </div>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-[#c9b8a0] underline-offset-2 hover:text-[#9a5b3c] dark:hover:text-[#c89472] transition-colors"
    >
      {children}
    </a>
  );
}

function SocialPill({ href, label, icon, external }: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#4a5568] dark:text-white/50 bg-[#fbf9f4]/85 dark:bg-white/[0.06] backdrop-blur-sm border border-white/60 dark:border-white/[0.08] shadow-[0_2px_8px_rgba(70,55,40,0.06)] hover:bg-[#fbf9f4]/95 dark:hover:bg-white/10 hover:text-[#1a2332] dark:hover:text-white/80 hover:shadow-[0_4px_16px_rgba(70,55,40,0.1)] hover:-translate-y-0.5 transition-all duration-200"
    >
      {icon}
      {label}
    </a>
  );
}
