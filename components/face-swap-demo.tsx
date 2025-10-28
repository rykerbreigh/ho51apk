"use client"

import { FaceSwapDemo as LanguageSpecificFaceSwapDemo } from "./language-specific-sections"
import type { Language } from "@/lib/translations"

interface FaceSwapDemoProps {
  lang?: Language
} 

export function FaceSwapDemo({ lang = "en" }: FaceSwapDemoProps) {
  return <LanguageSpecificFaceSwapDemo lang={lang} />
}
