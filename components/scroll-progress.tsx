"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      setScrollProgress(progress)
    }

    const handleScroll = () => {
      requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white dark:bg-gray-900 z-[60]">
      <div
        className="h-full bg-pink-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}