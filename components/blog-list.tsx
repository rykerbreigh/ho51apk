"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { decode } from "html-entities"
import type { BlogPost } from "@/lib/api"

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No blog posts found.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
            {/* Featured Image */}
            {post.featured_image && (
              <div className="relative h-48 w-full">
                <Image
                  src={post.featured_image}
                  alt={decode(post.title)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            
            <CardHeader>
              
              <CardTitle className="line-clamp-2">
                {decode(post.title)}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {decode(post.excerpt)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground color-pink">
                <span className="text-[#CD72FE] font-semibold">HOT51</span>
                <time dateTime={post.date}>
                  {mounted ? new Date(post.date).toLocaleDateString('en-US') : ''}
                </time>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}