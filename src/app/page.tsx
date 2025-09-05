import ProfileCard from '@/components/ProfileCard'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative flex h-dvh items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Subtle background */}
      <svg className="absolute inset-0 -z-10 h-full w-full opacity-60" aria-hidden="true">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-gray-200 dark:fill-gray-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Centered parallax profile card only */}
      <ProfileCard />

      {/* Footer watermark */}
      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} Edward Passagi • Built with Next.js & Tailwind
      </p>
    </main>
  )
}