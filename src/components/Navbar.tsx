'use client'

import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { trackEvent } from './Analytics'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
      <div className="flex items-center gap-3">
        <Image
          src="/images/icon.png"
          alt="Edward Passagi"
          width={32}
          height={32}
          className="rounded-full dark:invert"
        />
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Edward Passagi</h1>
      </div>
      <button
        onClick={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light'
          trackEvent('theme_change', { theme: newTheme })
          setTheme(newTheme)
        }}
        className="rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
        ) : (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200" />
        )}
      </button>
    </nav>
  )
}