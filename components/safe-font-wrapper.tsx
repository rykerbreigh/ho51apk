"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface SafeFontWrapperProps {
  children: React.ReactNode
  fallbackFont?: string
}

export function SafeFontWrapper({
  children,
  fallbackFont = "system-ui, -apple-system, sans-serif",
}: SafeFontWrapperProps) {
  const [fontError, setFontError] = useState(false)

  useEffect(() => {
    // Check if the custom font loaded successfully
    const checkFont = () => {
      try {
        const testElement = document.createElement("div")
        testElement.style.fontFamily = "var(--font-poppins)"
        testElement.style.position = "absolute"
        testElement.style.visibility = "hidden"
        testElement.textContent = "Test"
        document.body.appendChild(testElement)

        const computedStyle = window.getComputedStyle(testElement)
        const actualFont = computedStyle.fontFamily

        document.body.removeChild(testElement)

        // If the font didn't load, fallback
        if (!actualFont.includes("Poppins") && !actualFont.includes("var(--font-poppins)")) {
          setFontError(true)
        }
      } catch (error) {
        console.warn("Font check failed, using fallback:", error)
        setFontError(true)
      }
    }

    // Check after a short delay to allow fonts to load
    const timer = setTimeout(checkFont, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={fontError ? { fontFamily: fallbackFont } : undefined} className={fontError ? undefined : "font-sans"}>
      {children}
    </div>
  )
}
