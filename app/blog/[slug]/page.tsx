import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { decode } from "html-entities"
import { BlogPostHeader } from "@/components/blog-post-header"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { fetchAllPosts, findPostBySlug } from "@/lib/api"
import { SocialShare } from "@/components/social-share"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await fetchAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  console.log("asdfasdfasdf"+resolvedParams.slug);
  const post = await findPostBySlug(resolvedParams.slug, "en")

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  const decodedTitle = decode(post.title)
  const decodedExcerpt = decode(post.excerpt)
  const description = decodedExcerpt.replace(/<[^>]*>/g, "").substring(0, 160)

  return {
    title: `${decodedTitle}`,
    description,
    keywords: post.tags?.map((tag) => decode(tag.name)).join(", ") || "HOT51",
    alternates: {
      canonical: `https://hot51apkdl.com/blog/${post.slug}`,
      languages: {
        en: `https://hot51apkdl.com/blog/${post.slug}`,

        ...(post.languages?.translations?.id && {
          id: `https://hot51apkdl.com/id/blog/${post.languages.translations.id.slug}`,
        }),
      },
    },
    openGraph: {
      title: decodedTitle,
      description,
      type: "article",
      url: `https://hot51apkdl.com/blog/${post.slug}`,
      images: post.featured_image ? [{ url: post.featured_image }] : [],
      publishedTime: post.date,
      modifiedTime: post.modified || post.date,
    },
  }
}

export const revalidate = 3600

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await findPostBySlug(resolvedParams.slug, "en")
  const allPosts = await fetchAllPosts()

  if (!post) {
    notFound()
  }

  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 4)
  const latestPosts = allPosts.slice(0, 5) // Get 5 latest posts

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <BlogPostHeader post={post} />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
            <ol className="flex space-x-2 rtl:space-x-reverse">
              <li className="flex items-center">
                <a href="/" className="hover:underline">
                  Home →
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">{">"}</span>
                <a href="/blog" className="hover:underline">
                  Blog →
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">{">"}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{decode(post.title)}</span>
              </li>
            </ol>
          </nav>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            {/* Left Content - Blog Post */}
            <div className="lg:col-span-3">
              {/* Post Title with Sharing */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">{decode(post.title)}</h1>

                {/* Social Sharing Icons */}
                <SocialShare title={decode(post.title)} />
              </div>

              {/* Blog Post Content with Custom Heading Styles */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert 
                [&_h2]:bg-pink-100 [&_h2]:dark:bg-pink-900/20 [&_h2]:border-l-4 [&_h2]:border-pink-500 [&_h2]:pl-4 [&_h2]:py-3 [&_h2]:rounded-r-lg [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-gray-900 [&_h2]:dark:text-white [&_h2]:my-6
                [&_h3]:border-b-2 [&_h3]:border-pink-500 [&_h3]:pb-2 [&_h3]:font-bold [&_h3]:text-lg [&_h3]:text-gray-900 [&_h3]:dark:text-white [&_h3]:my-4
                [&_h4]:bg-pink-100 [&_h4]:dark:bg-pink-900/20 [&_h4]:border-l-4 [&_h4]:border-pink-500 [&_h4]:pl-4 [&_h4]:py-2 [&_h4]:font-semibold [&_h4]:text-base [&_h4]:text-gray-900 [&_h4]:dark:text-white [&_h4]:my-3"
              >
                <BlogPost post={post} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Related Posts Section */}
                {relatedPosts.length > 0 && (
                 <section>
                 <p className="text-xl font-bold text-gray-900 dark:text-white mb-6 bg-pink-100 dark:bg-pink-900/20 border-l-4 border-pink-500 pl-4 py-3 rounded-r-lg">
                   Related Posts
                 </p>
                 <div className="space-y-6">
                   {relatedPosts.map((relatedPost) => (
                     <article key={relatedPost.id} className="group">
                       <a href={`/blog/${relatedPost.slug}`} className="block">
                         {relatedPost.featured_image && (
                           <div className="aspect-video overflow-hidden rounded-lg mb-3">
                             <img
                               src={relatedPost.featured_image || "/placeholder.svg"}
                               alt={`Featured image for ${decode(relatedPost.title)}`}
                               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                             />
                           </div>
                         )}
                         <span className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-[#ffdb01] transition-colors line-clamp-2 mb-2 block">
                           {decode(relatedPost.title)}
                         </span>
                       </a>
                       <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-2">
                         {decode(relatedPost.excerpt).replace(/<[^>]*>/g, "").substring(0, 80)}...
                       </p>
                     </article>
                   ))}
                 </div>
               </section>
                )}

                {/* Latest Posts Section */}
                {/* <section>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 bg-pink-100 dark:bg-pink-900/20 border-l-4 border-pink-500 pl-4 py-3 rounded-r-lg">
                    Latest Posts
                  </h2>
                  <div className="space-y-4">
                    {latestPosts.map((latestPost) => (
                      <article key={latestPost.id} className="group">
                        <a href={`/blog/${latestPost.slug}`} className="block">
                          <div className="flex space-x-3">
                            {latestPost.featured_image && (
                              <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                                <img
                                  src={latestPost.featured_image || "/placeholder.svg"}
                                  alt={`Featured image for ${decode(latestPost.title)}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-[#ffdb01] transition-colors line-clamp-2">
                                {decode(latestPost.title)}
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                {new Date(latestPost.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                        </a>
                      </article>
                    ))}
                  </div>
                </section> */}
              </div>
            </div>
          </div>
        </main>

        {/* ADD ARTICLE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://hot51apkdl.com/blog/${post.slug}`,
              },
              headline: decode(post.title),
              description: decode(post.excerpt).replace(/<[^>]*>/g, "").substring(0, 160),
              image: post.featured_image || "https://hot51apkdl.com/logo.png",
              author: {
                "@type": "Organization",
                name: "HOT51",
                url: "https://hot51apkdl.com",
              },
              publisher: {
                "@type": "Organization",
                name: "HOT51",
                logo: {
                  "@type": "ImageObject",
                  url: "https://hot51apkdl.com/logo.png",
                },
              },
              datePublished: post.date,
              dateModified: post.modified || post.date,
            }),
          }}
        />

        <Footer lang="en" />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: decode(post.title),
            description: decode(post.excerpt).replace(/<[^>]*>/g, "").substring(0, 160),
            image: post.featured_image || "https://hot51apkdl.com/og-image.jpg",
            author: {
              "@type": "Organization",
              name: "HOT51",
            },
            publisher: {
              "@type": "Organization",
              name: "HOT51",
              logo: {
                "@type": "ImageObject",
                url: "https://hot51apkdl.com/logo.png",
              },
            },
            datePublished: post.date,
            dateModified: post.modified || post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://hot51apkdl.com/blog/${post.slug}`,
            },
            url: `https://hot51apkdl.com/blog/${post.slug}`,
          }),
        }}
      />
    </>
  )
}