import type { NewsItem } from "../data/news";

export default function NewsCard({ items }: { items: NewsItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="text-[#4a5568] dark:text-white/60">
          <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
            <div className="text-sm font-medium text-[#8b7355] dark:text-white/40 flex-shrink-0 sm:min-w-[80px] sm:pt-0.5">
              {item.date}
            </div>
            <div className="flex-1 leading-relaxed">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#c9b8a0] underline-offset-2 hover:text-[#1a2332] dark:hover:text-white/90 transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                item.content
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
