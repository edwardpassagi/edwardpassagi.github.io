import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "puhsagi · Music",
  description:
    "Covers and live loops by puhsagi (Edward Passagi). Listen on YouTube, TikTok, and Instagram.",
  openGraph: {
    title: "puhsagi · Music",
    description: "Covers and live loops by puhsagi (Edward Passagi).",
    url: "https://epassagi.com/music",
  },
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
