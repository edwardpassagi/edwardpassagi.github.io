'use client'

import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, FileText, Youtube } from 'lucide-react'

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glareX: 50, glareY: 50, elev: 8 })

  const clamp = (v: number, min = -15, max = 15) => Math.max(min, Math.min(max, v))

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const rx = clamp(-(dy / (r.height / 2)) * 12)
    const ry = clamp((dx / (r.width / 2)) * 12)
    const glareX = ((dx / (r.width / 2)) * 50 + 50)
    const glareY = ((dy / (r.height / 2)) * 50 + 50)
    setTilt({ rx, ry, glareX, glareY, elev: 16 })
  }

  const onLeave = () => setTilt({ rx: 0, ry: 0, glareX: 50, glareY: 50, elev: 8 })

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-[min(92vw,440px)] select-none rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 p-8 shadow-xl backdrop-blur-sm"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
        transition: 'transform 120ms ease-out, box-shadow 180ms ease-out',
        boxShadow:
          tilt.elev > 8
            ? '0 24px 50px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.06)'
            : '0 16px 30px rgba(0,0,0,.10), 0 6px 14px rgba(0,0,0,.05)',
      }}
    >

      {/* content layer */}
      <div className="relative z-10 flex flex-col items-center text-center" style={{ transform: 'translateZ(30px)' }}>
        <img
          src="/images/avatar.jpg"
          alt="Edward Passagi"
          className="h-28 w-28 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-gray-700"
          style={{ transform: 'translateZ(50px)' }}
        />
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Edward Passagi</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Software Engineer</p>
        <p className="mt-1 text-sm font-bold text-gray-700 dark:text-gray-200">Ex-Epic Systems • BS & MCS @ UIUC</p>
        <p className="mt-3 max-w-[32ch] text-sm leading-6 text-gray-700 dark:text-gray-200"> Backend & Infrastructure focused on reliable systems and clean UI, proficient in leveraging AI tools for development.</p>
        <div className="mt-5 space-y-3">
          <div className="flex justify-center gap-2">
            <a
              href="/resume.pdf"
              className="rounded-full bg-gray-900 dark:bg-gray-100 px-3 py-2 text-xs font-medium text-white dark:text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" /> Resume
              </span>
            </a>
            <a
              href="mailto:edward.passagi@gmail.com"
              className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> Email
              </span>
            </a>
            <a
              href="https://github.com/edwardpassagi"
              className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="inline-flex items-center gap-1.5">
                <Github className="h-3.5 w-3.5" /> GitHub
              </span>
            </a>
          </div>
          <div className="flex justify-center gap-2">
            <a
              href="https://linkedin.com/in/edwardpassagi"
              className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="inline-flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </span>
            </a>
            <a
              href="https://youtube.com/@edwardpassagi"
              className="rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span className="inline-flex items-center gap-1.5">
                <Youtube className="h-3.5 w-3.5" /> YouTube
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}