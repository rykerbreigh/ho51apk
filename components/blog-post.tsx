"use client"

import { useRouter } from "next/navigation"
import { decode } from "html-entities"
import type { BlogPost as BlogPostType } from "@/lib/api"
import type { Language } from "@/lib/translations"
import { getAvailableLanguages } from "@/lib/api"
import Link from "next/link"
import { SUPPORTED_LANGUAGE_CODES } from "@/lib/constants"

interface BlogPostProps {
  post: BlogPostType
  basePost?: BlogPostType // The original post with all translation data
  currentLanguage?: Language
}

export function BlogPost({ post, basePost, currentLanguage = "en" }: BlogPostProps) {
  const router = useRouter()

  // Use basePost for translation data if available, otherwise use post
  const postWithTranslations = basePost || post

  // Ensure we're using the correct base post for getting available languages
  const availableLanguages = getAvailableLanguages(postWithTranslations, SUPPORTED_LANGUAGE_CODES)

  // Filter out current language
  const otherLanguages = availableLanguages.filter((lang) => lang.code !== currentLanguage)

  return (
    <article className="mt-8">
      {/* Language switcher for post */}
      {otherLanguages.length > 0 && (
        <div className="rounded-lg">
          <div className="flex flex-wrap gap-2">
            {otherLanguages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.url}
                className="px-3 py-1 text-sm bg-[#ffdb01] text-gray-900 rounded-full hover:bg-[#ffe54a] transition no-underline"
                title={`Read in ${lang.name}`}
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Featured Image */}
      {post.featured_image && (
        <div className="mb-8">
          <img
            src={post.featured_image || "/placeholder.svg"}
            alt={`Featured image for ${decode(post.title)}`}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-8">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
                currentLanguage === "id"
              ? "id-ID"
              : currentLanguage === "ru"
              ? "ru-RU"
              : currentLanguage === "pt"
              ? "pt-PT"
              : currentLanguage === "es"
              ? "es-ES"
              : "en-US",
              {
              year: "numeric",
              month: "long",
              day: "numeric",
              },
            )}
          </time>
          {post.modified !== post.date && (
            <span>
              Updated:{" "}
              {new Date(post.modified).toLocaleDateString(
              currentLanguage === "id"
              ? "id-ID"
              : currentLanguage === "ru"
              ? "ru-RU"
              : currentLanguage === "pt"
              ? "pt-PT"
              : currentLanguage === "es"
              ? "es-ES"
              : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </span>
          )}
        </div>
      </header>

      {/* Post Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-[#ffdb01] hover:prose-a:text-[#ffe54a] prose-strong:text-gray-900 dark:prose-strong:text-white"
        dangerouslySetInnerHTML={{ __html: decode(post.content) }}
      />
    </article>
  )
}