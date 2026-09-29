"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { trackEvent } from "./Analytics";

function scrollParent(node: HTMLElement) {
  let parent = node.parentElement;
  while (parent) {
    const { overflowY } = getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll") return parent;
    parent = parent.parentElement;
  }
  return null;
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const scroller = scrollParent(nav) ?? window;
    const onScroll = () => {
      const top = scroller === window ? window.scrollY : scroller.scrollTop;
      setScrolled(top > 0);
    };

    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed z-50 flex items-center justify-between border border-gray-200/80 bg-white/85 px-4 py-1.5 backdrop-blur-lg transition-[top,left,right,border-radius,box-shadow] duration-300 dark:border-gray-700/80 dark:bg-gray-900/85 ${
        scrolled
          ? "inset-x-4 top-3 mx-auto max-w-[800px] rounded-2xl shadow-lg"
          : "inset-x-0 top-0 rounded-none shadow-none"
      }`}
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/images/icon.png"
          alt="Edward Passagi"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full dark:invert"
        />
        <span className="text-base font-semibold text-gray-900 dark:text-white">
          Edward Passagi
        </span>
      </Link>
      <button
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          trackEvent("theme_change", { theme: newTheme });
          setTheme(newTheme);
        }}
        className="rounded-full p-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>
    </nav>
  );
}
