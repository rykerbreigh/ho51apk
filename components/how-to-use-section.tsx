"use client"

import { HowToUseSection as LanguageSpecificHowToUseSection } from "./language-specific-sections"
import type { Language } from "@/lib/translations"

interface HowToUseSectionProps {
  lang?: Language
   pageType?: "single" | "multi"
}

export function HowToUseSection({ lang = "en", pageType = "single" }: HowToUseSectionProps) {
  return <LanguageSpecificHowToUseSection lang={lang} pageType={pageType} />
}
