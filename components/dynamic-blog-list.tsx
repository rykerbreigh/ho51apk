"use client"

import { useState } from "react"
import Link from "next/link"
import type { BlogPost } from "@/lib/api"
import { fetchAllPosts } from "@/lib/api" 
import { t, type Language } from "@/lib/translations"


interface DynamicBlogListProps {
  initialPosts: BlogPost[]
  lang: Language  // Add this line
}

export function DynamicBlogList({ initialPosts, lang }: DynamicBlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const loadMorePosts = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const allPosts = await fetchAllPosts()
      const startIndex = page * 9
      const newPosts = allPosts.slice(startIndex, startIndex + 9)

      if (newPosts.length === 0) {
        setHasMore(false)
      } else {
        setPosts((prev) => [...prev, ...newPosts])
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.error("Error loading more posts:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Server-rendered blog posts for SEO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {post.featured_image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.featured_image || "/placeholder.svg"}
                  alt={`Featured image for ${post.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#ffdb01] transition-colors">
                  <span>{post.title}</span>
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {post.excerpt.replace(/<[^>]*>/g, "").substring(0, 150)}...
              </p>
              <div className="flex items-center justify-between">
                <time className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#ffdb01] hover:text-[#ffe54a] font-semibold text-sm transition-colors"
                >
                  <span>{t("readMore", lang)} →</span>
                </Link>
              </div>
              {post.categories && post.categories.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.categories.slice(0, 2).map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-[#ffdb01] hover:text-gray-900 transition-colors"
                    >
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={loadMorePosts}
            disabled={loading}
            className="px-8 py-3 bg-[#ffdb01] hover:bg-[#ffe54a] text-gray-900 font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Load More Posts"}
          </button>
        </div>
      )}

      {/* All blog post links for crawlers (hidden but accessible) */}
      <div className="sr-only">
        <h3>All Blog Posts (For Search Engines)</h3>
        <ul>
          {initialPosts.map((post) => (
            <li key={`seo-${post.id}`}>
              <Link href={`/blog/${post.slug}`}>
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
