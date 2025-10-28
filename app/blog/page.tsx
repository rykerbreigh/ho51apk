import type { Metadata } from "next"
import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { fetchPostsByLanguage } from "@/lib/api"

export const metadata: Metadata = {
  title: "Blog – HOT51 Mod APK | Tips, Guides & Latest Updates",
  description:
    "Discover the latest tips, tutorials, guides, and insights about HOT51 Mod APK. Learn about unlimited coins, premium features, HD live streaming, and get the most out of your experience.",
  alternates: {
    canonical: "https://hot51apkdl.com/blog",
  },
  openGraph: {
    title: "Blog – HOT51 Mod APK | Tips, Guides & Latest Updates",
    description:
      "Discover the latest tips, tutorials, guides, and insights about HOT51 Mod APK with unlimited coins, premium access, and ad-free streaming.",
    type: "website",
    url: "https://hot51apkdl.com/blog",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – HOT51 Mod APK | Tips, Guides & Latest Updates",
    description:
      "Discover the latest tips, tutorials, and insights about HOT51 Mod APK with unlimited coins and premium features.",
  },
  keywords: "HOT51 blog, HOT51 tips, live streaming guide, unlimited coins, premium features, HOT51 tutorials, streaming tips, mod APK guide",
}

export const revalidate = 3600

export default async function BlogPage() {
  const posts = await fetchPostsByLanguage("en")

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
          <ol className="flex space-x-2 rtl:space-x-reverse">
            <li className="flex items-center">
              <a href={`/`} className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">Blog</span>
            </li>
          </ol>
        </nav>
        <section className="text-center max-w-5xl mx-auto mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-12 mb-6">
            HOT51 <span className="text-pink-500">Blog</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Discover the latest tips, tutorials, guides, and insights about HOT51 Mod APK. Learn how to maximize unlimited coins, unlock premium features, enjoy HD live streaming, and get the most out of your entertainment experience.
          </p>
        </section>
        <BlogList posts={posts} />
      </main>

      <Footer />
    </div>
  )
}