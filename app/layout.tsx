import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://lxzgogoduck.github.io";
const DESCRIPTION =
  "Xuanzhuo Liu is an incoming M.S. student in Electrical Engineering at Stanford University, working on vision-language-action models, attention mechanisms for embodied agents, and 3D perception.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xuanzhuo Liu | Stanford EE",
    template: "%s | Xuanzhuo Liu",
  },
  description: DESCRIPTION,
  keywords: [
    "Xuanzhuo Liu",
    "robotics",
    "embodied AI",
    "vision-language-action",
    "robot learning",
    "Stanford",
    "optimization",
  ],
  authors: [{ name: "Xuanzhuo Liu" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Xuanzhuo Liu | Stanford EE",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Xuanzhuo Liu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xuanzhuo Liu | Stanford EE",
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      {
        url:
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="80" font-size="80">🦆</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Runs before paint: applies the stored theme so there is no flash of the
          wrong mode, and opts into the scroll-reveal animation only in a visible
          tab (a hidden tab never fires IntersectionObserver, which would otherwise
          leave every section stuck at opacity 0).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);if(!document.hidden)document.documentElement.classList.add('js-reveal');}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${sourceSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
