"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function FontLoader({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Check if fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(() => {
        setFontsLoaded(true)
      }, 100)
    }
  }, [])

  return <div className={fontsLoaded ? "font-sans" : "font-loading"}>{children}</div>
}
