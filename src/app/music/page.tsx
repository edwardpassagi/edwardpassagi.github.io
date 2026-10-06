"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Music2, Play, Youtube } from "lucide-react";
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
    title: "the scientist (cover)",
    href: "https://youtu.be/Vo3oR69wjIE?si=VpzON1fxYhIm9xik",
    platform: "youtube",
  },
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

const socials = [
  {
    href: artist.instagramUrl,
    label: "Instagram",
    icon: Instagram,
    event: "music_instagram_click",
  },
  {
    href: artist.channelUrl,
    label: "YouTube",
    icon: Youtube,
    event: "music_channel_click",
  },
  {
    href: artist.tiktokUrl,
    label: "TikTok",
    icon: Music2,
    event: "music_tiktok_click",
  },
];

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
      className="group block overflow-hidden rounded-[1.75rem] bg-gray-950 text-white shadow-xl ring-1 ring-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <span className="relative block aspect-video bg-gray-900">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        ) : null}
      </span>
      <span className="flex items-center gap-3 px-4 py-3 text-left">
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium leading-5">
            {link.title}
          </span>
          <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-white/70">
            {platform === "youtube" ? (
              <Youtube className="h-3.5 w-3.5" />
            ) : null}
            {platformLabel[platform]}
          </span>
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-gray-950 shadow-lg transition group-hover:scale-105">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
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

      <div className="flex min-h-dvh flex-col">
        <motion.header variants={itemVariants} className="relative h-dvh">
          <div className="relative mx-auto h-full w-full max-w-[1080px]">
            <Image
              src={artist.photo}
              alt={artist.name}
              width={3024}
              height={4032}
              priority
              className="h-full w-full object-cover object-[center_75%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto max-w-lg px-5 pb-20 text-left text-white">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
                  puh-sa-gee
                </p>
                <h1 className="mt-1 text-5xl font-semibold tracking-tight">
                  {artist.name}
                </h1>
                <p className="mt-2 max-w-[28ch] text-sm leading-6 text-white/80">
                  {artist.tagline}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-6 z-10 flex flex-wrap justify-center gap-2 px-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(social.event)}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white px-3.5 py-2 text-xs font-medium text-gray-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                <social.icon className="h-3.5 w-3.5" />
                {social.label}
              </a>
            ))}
          </div>
        </motion.header>

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 pb-10">
          <section
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-label="Releases"
          >
            {links.map((link) => (
              <MusicLinkCard key={link.href} link={link} />
            ))}
          </section>

          <Footer className="mt-auto pt-10" />
        </div>
      </div>
    </motion.main>
  );
}
