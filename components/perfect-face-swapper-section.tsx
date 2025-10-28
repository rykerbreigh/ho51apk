"use client"

import { PerfectFaceSwapperSection as LanguageSpecificPerfectFaceSwapperSection } from "./language-specific-sections"
import type { Language } from "@/lib/translations"

interface PerfectFaceSwapperSectionProps {
  lang?: Language
    pageType?: "single" | "multi"
}
 
export function PerfectFaceSwapperSection({ lang = "en", pageType = "single" }: PerfectFaceSwapperSectionProps) {
  return <LanguageSpecificPerfectFaceSwapperSection lang={lang} pageType={pageType} />
}
