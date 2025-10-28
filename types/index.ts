export type Language = "en"  

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
}
