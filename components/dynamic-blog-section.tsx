"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { BlogSection } from "@/components/blog-section"
import type { BlogPost } from "@/lib/api"
import { fetchPostsForLanguage } from "@/lib/language-aware-api"

interface DynamicBlogSectionProps {
  initialPosts: BlogPost[]
}

export function DynamicBlogSection({ initialPosts }: DynamicBlogSectionProps) {
  const { language } = useLanguage()
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadPostsForLanguage = async () => {
      setLoading(true)
      try {
        const languagePosts = await fetchPostsForLanguage(language)
        setPosts(languagePosts.slice(0, 3))
      } catch (error) {
        console.error("Error loading posts for language:", error)
        // Keep current posts on error
      } finally {
        setLoading(false)
      }
    }

    loadPostsForLanguage()
  }, [language])

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ffdb01] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading posts...</p>
        </div>
      </section>
    )
  }

  return <BlogSection key={language} posts={posts} lang={language} />
}
