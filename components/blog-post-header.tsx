"use client"
import { Header } from "@/components/header"
import type { BlogPost } from "@/lib/api"

interface BlogPostHeaderProps {
  post?: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return <Header />
}
