"use client"

import Link from "next/link"
import type { Language } from "@/lib/translations"
import type { BlogPost } from "@/lib/api" 
import { decode } from "html-entities"

interface BlogSectionProps {
  posts: BlogPost[]
  lang?: Language
}

// Helper function to get localized post URL
function getLocalizedPostUrl(post: BlogPost, lang: Language): string { 
  return `/blog/${post.slug}`
}

export function BlogSection({ posts, lang = "en" }: BlogSectionProps) {
 
  
  // Show only the first 3 latest posts
  const latestPosts = posts.slice(0, 3)

  return (
    <section className="max-w-7xl mx-auto px-6 mt-9 ">
      <h2 className="text-center font-extrabold text-3xl mb-12 text-gray-900 dark:text-white">
        Recent Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestPosts.map((post) => {
          // Get the correct title and URL for the current language
          let postTitle = post.title
          const postUrl = getLocalizedPostUrl(post, lang)

           

          return (
            <article key={post.id} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <Link href={postUrl}>
                <img
                  src={post.featured_image || "/placeholder.svg?height=200&width=400"}
                  alt={`Blog thumbnail for ${postTitle}`}
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
              <div className="p-6">
                <Link href={postUrl}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                 {decode(post.title)}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt.replace(/<[^>]*>/g, "").substring(0, 120)}...
                </p>
                <Link href={postUrl} className="text-gray-900 dark:text-white font-semibold hover:underline text-sm">
                  Reacd More  →
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}