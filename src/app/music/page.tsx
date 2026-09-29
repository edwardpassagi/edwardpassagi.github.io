"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Music2, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackEvent } from "@/components/Analytics";

const artist = {
  name: "Puhsagi",
  photo: "/images/puhsagi.jpg",
  channelUrl: "https://www.youtube.com/@puhsagi",
  tiktokUrl: "https://www.tiktok.com/@puhsagi",
  instagramUrl: "https://www.instagram.com/puhsagi/",
  tagline: "things i create in my spare time :)",
};

type MusicLink = {
  title: string;
  href: string;
  /** Defaults to YouTube. Set `thumbnail` for links that are not YouTube videos. */
  platform?: "youtube" | "soundcloud" | "spotify" | "other";
  thumbnail?: string;
};

const links: MusicLink[] = [
  {
    title: "ordinary people (cover)",
    href: "https://youtu.be/L3cc68nIuHM?si=GprvNG5ideCfsPCK",
    platform: "youtube",
  },
  {
    title: "sunday morning (live looping cover)",
    href: "https://youtu.be/JZzZk-3XO9c?si=c42YptrNyCVB5DZq",
    platform: "youtube",
  },
];

const platformLabel: Record<NonNullable<MusicLink["platform"]>, string> = {
  youtube: "YouTube",
  soundcloud: "SoundCloud",
  spotify: "Spotify",
  other: "Listen",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function youtubeVideoId(url: string) {
  return url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/,
  )?.[1];
}

function thumbnailUrl(link: MusicLink) {
  if (link.thumbnail) return link.thumbnail;
  if ((link.platform ?? "youtube") !== "youtube") return null;
  const id = youtubeVideoId(link.href);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}

function MusicLinkCard({ link }: { link: MusicLink }) {
  const platform = link.platform ?? "youtube";
  const thumbnail = thumbnailUrl(link);

  return (
    <motion.a
      variants={itemVariants}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("music_link_click", { title: link.title, platform })
      }
      className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/90 p-2.5 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/90"
    >
      <span className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        ) : null}
      </span>
      <span className="min-w-0 flex-1 pr-1 text-left">
        <span className="block text-sm font-medium leading-5 text-gray-900 dark:text-white">
          {link.title}
        </span>
        <span className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          {platform === "youtube" ? <Youtube className="h-3.5 w-3.5" /> : null}
          {platformLabel[platform]}
        </span>
      </span>
    </motion.a>
  );
}

export default function MusicPage() {
  return (
    <motion.main
      className="relative h-dvh overflow-y-auto bg-gradient-to-b from-white to-gray-50 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />

      <svg
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="music-dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1"
              cy="1"
              r="1"
              className="fill-gray-200 dark:fill-gray-700"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#music-dots)" />
      </svg>

      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-10 pt-24">
        <motion.header
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <Image
            src={artist.photo}
            alt={artist.name}
            width={112}
            height={112}
            priority
            className="h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-gray-200 dark:ring-gray-700"
          />
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {artist.name}
          </h1>
          <p className="mt-2 max-w-[28ch] text-sm leading-6 text-gray-600 dark:text-gray-300">
            {artist.tagline}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <a
              href={artist.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("music_instagram_click")}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a
              href={artist.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("music_channel_click")}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <Youtube className="h-3.5 w-3.5" />
              YouTube
            </a>
            <a
              href={artist.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("music_tiktok_click")}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <Music2 className="h-3.5 w-3.5" />
              TikTok
            </a>
          </div>
        </motion.header>

        <section className="mt-8 flex flex-col gap-3" aria-label="Releases">
          {links.map((link) => (
            <MusicLinkCard key={link.href} link={link} />
          ))}
        </section>

        <Footer className="mt-auto pt-10" />
      </div>
    </motion.main>
  );
}
