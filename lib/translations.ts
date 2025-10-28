export type Language = "en"  

// Simple translation function that returns the key if no translation found
export function t(key: string, language: Language = "en"): string {
  // For now, just return the key as we're not using full translation system
  return key
}

// Simple function to get translation for a specific language
export function getTranslation(key: string, language: Language = "en"): string {
  // For now, just return the key as we're not using full translation system
  return key
}

// Default translations object (minimal implementation)
export const translations = {
  en: {}, 
}
