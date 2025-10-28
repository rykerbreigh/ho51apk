"use client"

import { OnlineToolsSection as LanguageSpecificOnlineToolsSection } from "./language-specific-sections"
import type { Language } from "@/lib/translations"

interface OnlineToolsSectionProps {
  lang?: Language
      pageType?: "single" | "multi"
}

export function OnlineToolsSection({ lang = "en"  , pageType = "single" }: OnlineToolsSectionProps) {
  return <LanguageSpecificOnlineToolsSection lang={lang} pageType={pageType} />
}
