import Image from "next/image";
import type { Education, Experience, Service } from "../data/background";

interface TimelineProps {
  educations: Education[];
  experiences: Experience[];
  services: Service[];
}

export default function Timeline({ educations, experiences, services }: TimelineProps) {
  return (
    <div className="space-y-10">
      <Panel title="Education">
        <div className="space-y-6">
          {educations.map((edu, i) => (
            <Entry
              key={i}
              icon={edu.icon}
              name={edu.school}
              heading={edu.school}
              subheading={edu.degree}
              period={edu.period}
              note={edu.note}
              advisor={edu.advisor}
            />
          ))}
        </div>
      </Panel>

      <Panel title="Experience">
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <Entry
              key={i}
              icon={exp.icon}
              name={exp.company}
              heading={exp.company}
              subheading={exp.title}
              period={exp.period}
              note={exp.description}
              advisor={exp.advisor}
            />
          ))}
        </div>
      </Panel>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((service, i) => (
          <Panel key={i} title={service.title}>
            <ul className="space-y-2.5">
              {service.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[#4a5568] dark:text-white/50 leading-relaxed">
                  <span className="text-[#c9b8a0] dark:text-white/25 select-none">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#fbf9f4]/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl border border-white/60 dark:border-white/[0.06] shadow-[0_8px_40px_rgba(70,55,40,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] p-8">
      <h3 className="text-lg font-bold text-[#1a2332] dark:text-white/90 mb-6">{title}</h3>
      {children}
    </div>
  );
}

interface EntryProps {
  icon?: string;
  /** Used to derive the lettermark when no icon is provided. */
  name: string;
  heading: string;
  subheading: string;
  period: string;
  note?: string;
  advisor?: string;
}

function Entry({ icon, name, heading, subheading, period, note, advisor }: EntryProps) {
  return (
    <div className="flex gap-4">
      <Logo icon={icon} name={name} />
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div className="font-semibold text-[#1a2332] dark:text-white/90">{heading}</div>
          <div className="text-sm text-[#8b7355] dark:text-white/40 flex-shrink-0 sm:ml-4">{period}</div>
        </div>
        <div className="text-[#4a5568] dark:text-white/50 mt-0.5">{subheading}</div>
        {note && (
          <div className="text-sm text-[#6b7a8d] dark:text-white/40 mt-1.5 leading-relaxed">{note}</div>
        )}
        {advisor && (
          <div className="text-sm text-[#6b7a8d] dark:text-white/40 mt-1.5">
            {advisor.split("\n").map(line => (
              <div key={line}>Advised by {line}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Initials from the first two significant words, e.g. "Stanford University" -> "SU". */
function lettermark(name: string) {
  const skip = new Set(["of", "the", "and", "for", "at", "in"]);
  return name
    .split(/[\s,]+/)
    .filter(word => /^[A-Za-z]/.test(word) && !skip.has(word.toLowerCase()))
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("");
}

function Logo({ icon, name }: { icon?: string; name: string }) {
  if (icon) {
    return (
      <div className="w-11 h-11 relative flex-shrink-0 rounded-xl overflow-hidden bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/[0.08]">
        <Image src={icon} alt="" aria-hidden="true" fill sizes="44px" className="object-contain p-1" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center text-sm font-bold tracking-tight text-[#8b7355] dark:text-white/40 bg-[#efe9dd]/90 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.08]"
    >
      {lettermark(name)}
    </div>
  );
}
