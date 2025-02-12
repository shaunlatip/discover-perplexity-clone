'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // avoid hydration mismatch
  }

  return (
    <button
      className="rounded-full bg-slate-800 px-4 py-2 text-white transition duration-150 ease-out hover:bg-slate-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  )
} 