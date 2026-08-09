import Image from "next/image";
import type { Project } from "../data/projects";

/** Highlights Xuanzhuo in an author list. */
const ME = "Xuanzhuo Liu";

export default function ProjectCard({
  title,
  image,
  points,
  tags,
  arxiv,
  website,
  video,
  code,
  pdf,
  media,
  authors,
  role,
}: Omit<Project, 'id' | 'date' | 'featured'>) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-[#fbf9f4]/80 dark:bg-white/[0.04] backdrop-blur-md border border-white/60 dark:border-white/[0.06] p-6 rounded-3xl shadow-[0_8px_40px_rgba(70,55,40,0.08),0_2px_8px_rgba(70,55,40,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)] max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-10 transition-all duration-300 hover:shadow-[0_12px_48px_rgba(70,55,40,0.14),0_4px_12px_rgba(70,55,40,0.06)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-[#fbf9f4]/90 dark:hover:bg-white/[0.06] group">
      <div className="w-full md:w-[420px] md:flex-shrink-0 h-[280px] relative rounded-2xl overflow-hidden bg-[#f1ece1] dark:bg-[#221c14] transition-transform duration-300 group-hover:scale-[1.02]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-contain p-2"
        />
        {role && (
          <div className="absolute top-4 left-4 bg-black/75 text-white px-3 py-1 rounded-full text-xs font-medium">
            {role}
          </div>
        )}
        {authors && authors.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <h3 className="text-sm font-semibold text-white mb-1">Authors</h3>
            <div className="text-xs leading-relaxed text-white">
              {authors.map((author, index) => (
                <span key={index}>
                  {author.includes(ME) ? (
                    <span className="font-bold text-[#e0b896]">{author}</span>
                  ) : (
                    author
                  )}
                  {index < authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] dark:text-white/90 mb-3">
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#9a5b3c] dark:hover:text-[#c89472] transition-colors duration-300"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="text-sm text-[#5a6675] dark:text-white/50 space-y-2">
          {points.map((point, index) => (
            <p key={index} className={index === 0 ? "font-medium text-[#8b7355] dark:text-white/40" : "leading-relaxed"}>
              {point}
            </p>
          ))}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-xs text-[#6b7a8d] dark:text-white/40 bg-[#efe9dd]/80 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-5 mt-4 text-sm">
          <ResourceLink href={arxiv} label="arXiv" icon={<PaperIcon />} />
          <ResourceLink href={website} label="Website" icon={<GlobeIcon />} />
          <ResourceLink href={pdf} label="PDF" icon={<PaperIcon />} />
          <ResourceLink href={code} label="Code" icon={<CodeIcon />} />
          <ResourceLink href={video} label="Video" icon={<VideoIcon />} />
          <ResourceLink href={media} label="Media" icon={<MediaIcon />} />
        </div>
      </div>
    </div>
  );
}

function ResourceLink({ href, label, icon }: { href?: string; label: string; icon: React.ReactNode }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#6b7a8d] dark:text-white/40 hover:text-[#9a5b3c] dark:hover:text-[#c89472] transition-colors flex items-center gap-1.5"
    >
      {icon}
      {label}
    </a>
  );
}

function PaperIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z" />
    </svg>
  );
}
