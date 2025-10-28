// Mock API functions for demonstration
// In a real application, these would connect to your actual API/CMS

export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  slug: string
  date: string
  modified: string
  status: string
  author: string
  featured_image: string
  permalink: string
  categories: Array<{
    id: number
    name: string
    slug: string
    description: string
  }>
  tags: any[]
  seo: {
    focus_keyword: string
    seo_title: string
    meta_description: string
    seo_score: string
    content_score: string
    canonical_url: string
    robots: {
      index: string
      follow: string
    }
    open_graph: {
      title: string
      description: string
      image: string
    }
    twitter: {
      title: string
      description: string
      image: string
    }
    schema: string
    additional_keywords: string
  }
  languages: {
    current_language: string
    available_languages: {
      [key: string]: {
        code: string
        name: string
        flag: string | null
        default: string
      }
    }
    translations: {
      [key: string]: {
        id: number
        title: string
        permalink: string
        slug: string
        language: string
        language_name: string
      }
    }
    language_url: string
  }
  original_slug?: string // Add this for translated posts to reference the English slug
}

const SUPPORTED_LANGUAGE_CODES = ["en"]

const API_BASE_URL = "https://blog.hot51apkdl.com/wp-json/custom/v1"

 
export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const url = `${API_BASE_URL}/posts`
    console.log('Fetching all posts from:', url) // Debug log
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // For server-side revalidation
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()
      console.warn(`Failed to fetch all posts: ${response.status} ${response.statusText}`)
      console.warn('Response body:', text.substring(0, 200)) // Log first 200 chars
      return []
    }

    // Check if response is actually JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Expected JSON but got:', contentType)
      console.error('Response body:', text.substring(0, 200))
      return []
    }

    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}
export async function fetchPostById(id: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/post/${id}`, {
      next: { revalidate: 3600 },
      // cache: "no-store", // Ensure fresh data for client-side fetches
    })

    if (!response.ok) {
      console.warn(`Failed to fetch post ${id}: ${response.status} ${response.statusText}`)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error)
    return null
  }
}

export async function fetchPostsByLanguage(lang: string): Promise<BlogPost[]> {
  try { 
    const url = `${API_BASE_URL}/posts/${lang}`
    console.log('Fetching from:', url) // Debug log
    
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()
      console.warn(`Failed to fetch posts for language ${lang}: ${response.status} ${response.statusText}`)
      console.warn('Response body:', text.substring(0, 200)) // Log first 200 chars
      return []
    }

    // Check if response is actually JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Expected JSON but got:', contentType)
      console.error('Response body:', text.substring(0, 200))
      return []
    }

    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error(`Error fetching posts for language ${lang}:`, error)
    return []
  }
}



export async function fetchAvailableLanguages() {
  try {
    const response = await fetch(`${API_BASE_URL}/languages`, {
      next: { revalidate: 3600 },
      // cache: "no-store", // Ensure fresh data for client-side fetches
    })

    if (!response.ok) {
      console.warn(`Failed to fetch languages: ${response.status} ${response.statusText}`)
      return []
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching languages:", error)
    return []
  }
}

// Helper function to find a post by slug across all languages
export async function findPostBySlug(slug: string, preferredLang?: string): Promise<BlogPost | null> {
  try {
    // First try the preferred language if specified
    if (preferredLang && preferredLang !== "en") {
      const langPosts = await fetchPostsByLanguage(preferredLang)
      const post = langPosts.find((p) => p.slug === slug)
      if (post) return post
    }

    // Then try English posts with proper error handling
    const url = `${API_BASE_URL}/posts/en`
    console.log('Fetching from:', url) // Debug log
    
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()
      console.warn(`Failed to fetch English posts: ${response.status} ${response.statusText}`)
      console.warn('Response body:', text.substring(0, 200)) // Log first 200 chars
      return null
    }

    // Check if response is actually JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Expected JSON but got:', contentType)
      console.error('Response body:', text.substring(0, 200))
      return null
    }

    const data = await response.json()
    const englishPosts = Array.isArray(data) ? data : []

    // Direct slug match
    const post = englishPosts.find((p) => p.slug === slug)
    if (post) return post

    // Check translations
    for (const englishPost of englishPosts) {
      if (englishPost.languages?.translations) {
        for (const [langCode, translation] of Object.entries(englishPost.languages.translations)) {
          if (translation.slug === slug) {
            return englishPost
          }
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error finding post by slug ${slug}:`, error)
    return null
  }
}

// Helper function to find a post by slug in a specific language
export async function findPostBySlugAndLanguage(slug: string, language: string): Promise<BlogPost | null> {
  try {
    console.log(`Searching for slug: "${slug}" in language: "${language}"`)

    // For English, search in all posts with proper error handling
    if (language === "en") {
      const url = `${API_BASE_URL}/posts/en`
      console.log('Fetching English posts from:', url)
      
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const text = await response.text()
        console.warn(`Failed to fetch English posts: ${response.status} ${response.statusText}`)
        console.warn('Response body:', text.substring(0, 200))
        return null
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Expected JSON but got:', contentType)
        console.error('Response body:', text.substring(0, 200))
        return null
      }

      const posts = await response.json()
      const postsArray = Array.isArray(posts) ? posts : []
      return postsArray.find((post) => post.slug === slug) || null
    }

    // For other languages including Russian, first try language-specific posts
    const languagePosts = await fetchPostsByLanguage(language)
    console.log(`Found ${languagePosts.length} posts for language ${language}`)

    const directMatch = languagePosts.find((post) => {
      console.log(`Comparing "${post.slug}" with "${slug}"`)
      return post.slug === slug
    })

    if (directMatch) {
      console.log(`Direct match found: ${directMatch.title}`)
      return directMatch
    }

    // If not found in language-specific posts, check English posts for translations
    const englishUrl = `${API_BASE_URL}/posts/en`
    console.log('Fetching English posts for translations from:', englishUrl)
    
    const englishResponse = await fetch(englishUrl, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!englishResponse.ok) {
      const text = await englishResponse.text()
      console.warn(`Failed to fetch English posts for translations: ${englishResponse.status} ${englishResponse.statusText}`)
      console.warn('Response body:', text.substring(0, 200))
      return null
    }

    const englishContentType = englishResponse.headers.get('content-type')
    if (!englishContentType || !englishContentType.includes('application/json')) {
      const text = await englishResponse.text()
      console.error('Expected JSON but got:', englishContentType)
      console.error('Response body:', text.substring(0, 200))
      return null
    }

    const englishData = await englishResponse.json()
    const englishPosts = Array.isArray(englishData) ? englishData : []
    console.log(`Checking ${englishPosts.length} English posts for translations`)

    for (const post of englishPosts) {
      // Check if this English post has a translation for the requested language
      if (post.languages?.translations?.[language]) {
        const translation = post.languages.translations[language]
        console.log(`Checking translation slug: "${translation.slug}" against "${slug}"`)

        if (translation.slug === slug) {
          console.log(`Translation match found: ${translation.title}`)
          // Return a modified version of the English post with translated metadata
          return {
            ...post,
            id: translation.id,
            title: translation.title,
            slug: translation.slug,
            permalink: translation.permalink,
            original_slug: post.slug, // Keep reference to original English slug
          }
        }
      }
    }

    console.log(`No post found for slug: "${slug}" in language: "${language}"`)
    return null
  } catch (error) {
    console.error(`Error finding post by slug ${slug} and language ${language}:`, error)
    return null
  }
}

// Helper to get all possible slugs for static generation
export async function getAllPostSlugs(): Promise<Array<{ lang: string; slug: string; englishPostId: number }>> {
  const slugs: Array<{ lang: string; slug: string; englishPostId: number }> = []

  try {
    const url = `${API_BASE_URL}/posts/en`
    console.log('Fetching English posts for slugs from:', url)
    
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const text = await response.text()
      console.warn(`Failed to fetch English posts for slugs: ${response.status} ${response.statusText}`)
      console.warn('Response body:', text.substring(0, 200))
      return []
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('Expected JSON but got:', contentType)
      console.error('Response body:', text.substring(0, 200))
      return []
    }

    const data = await response.json()
    const englishPosts = Array.isArray(data) ? data : []

    for (const post of englishPosts) {
      // Add English slug, its englishPostId is its own ID
      slugs.push({
        lang: "en",
        slug: post.slug,
        englishPostId: post.id,
      })

      // Add all translated slugs, referencing the English post's ID
      if (post.languages?.translations) {
        Object.entries(post.languages.translations).forEach(([langCode, translation]) => {
          if (translation.slug) {
            slugs.push({
              lang: langCode,
              slug: translation.slug,
              englishPostId: post.id, // Reference the English post's ID
            })
          }
        })
      }
    }

    return slugs
  } catch (error) {
    console.error("Error getting all post slugs:", error)
    return []
  }
}

// Helper to get the correct post data for a specific language
export async function getPostForLanguage(basePost: BlogPost, language: string): Promise<BlogPost | null> {
  try {
    // If it's English or no translation exists, return the base post
    if (language === "en" || !basePost.languages?.translations?.[language]) {
      return basePost
    }

    const translation = basePost.languages.translations[language]

    // Try to fetch the full translated post using its ID
    const translatedPost = await fetchPostById(translation.id)

    if (translatedPost) {
      return translatedPost
    }

    // Fallback: return base post with translated metadata
    return {
      ...basePost,
      id: translation.id,
      title: translation.title,
      slug: translation.slug,
      permalink: translation.permalink,
    }
  } catch (error) {
    console.error(`Error getting post for language ${language}:`, error)
    return basePost
  }
}

// Helper to get localized URL for a post
export function getLocalizedPostUrl(post: BlogPost, targetLanguage: string): string {
  if (targetLanguage === "en") {
    return `/blog/${post.slug}`
  }

  // Check if we have a translation for the target language
  const translation = post.languages?.translations?.[targetLanguage]
  if (translation?.slug) {
    // Encode the slug to handle special characters like Cyrillic
    return `/${targetLanguage}/blog/${encodeURIComponent(translation.slug)}`
  }

  // Fallback to base slug - make sure to encode it
  return `/${targetLanguage}/blog/${encodeURIComponent(post.slug)}`
}

// Updated helper to get all available languages for a post with correct URLs
export function getAvailableLanguages(
  basePost: BlogPost, // This parameter should always be the English base post
  supportedLanguages: string[] = SUPPORTED_LANGUAGE_CODES,
): Array<{ code: string; name: string; slug: string; url: string }> {
  const languages = []

  // Add English (always supported)
  languages.push({
    code: "en",
    name: "English",
    slug: basePost.slug, // Use the slug from the basePost (which is English)
    url: `/blog/${basePost.slug}`, // This will correctly be /blog/english-slug
  })

  // Add translations - only for supported languages
  if (basePost.languages?.translations) {
    Object.entries(basePost.languages.translations).forEach(([langCode, translation]) => {
      if (supportedLanguages.includes(langCode)) {
        languages.push({
          code: langCode,
          name: translation.language_name,
          slug: translation.slug,
          url: `/${langCode}/blog/${encodeURIComponent(translation.slug)}`, // Encode the slug
        })
      }
    })
  }

  return languages
}

// Helper to get the English base post from any translated post
export async function getEnglishBasePost(post: BlogPost): Promise<BlogPost | null> {
  try {
    if (post.languages?.current_language === "en") {
      return post // It's already the English base post
    }

    // If this is a translated post, we need to find the original English post
    // The translation data should contain a reference to the English post
    const allPosts = await fetchAllPosts()

    // Find the English post that has this post as a translation
    for (const englishPost of allPosts) {
      if (englishPost.languages?.translations) {
        for (const [langCode, translation] of Object.entries(englishPost.languages.translations)) {
          if (translation.id === post.id || translation.slug === post.slug) {
            return englishPost
          }
        }
      }
    }

    return null
  } catch (error) {
    console.error("Error getting English base post:", error)
    return null
  }
}

// New helper to get available languages
export async function getAvailableLanguagesFromAPI(): Promise<string[]> {
  // Replace with actual logic to fetch available languages
  return ["en", "id"]
}

// New helper to get blog posts for a given language
export async function getBlogPosts(lang: string): Promise<any[]> {
  // Replace with actual logic to fetch blog posts for a given language
  // Example placeholder data:
  return [
    { slug: "post-1", title: "Example Post 1", content: "Content 1" },
    { slug: "post-2", title: "Example Post 2", content: "Content 2" },
  ]
}

// New helper to get a single blog post by slug and language
export async function getBlogPostBySlug(slug: string, lang: string): Promise<any | null> {
  // Replace with actual logic to fetch a single blog post by slug and language
  // Example placeholder data:
  const posts = await getBlogPosts(lang)
  return posts.find((post) => post.slug === slug) || null
}

// For example:
export async function getHomePageContent(lang: string): Promise<any> {
  return {
    heroTitle: "AI-Powered HOT51s",
    heroDescription: "Transform your photos with advanced AI technology.",
    // ... other home page content
  }
}
