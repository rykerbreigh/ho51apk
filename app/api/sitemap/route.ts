import { NextResponse } from "next/server"
import { fetchAllPosts, getAllPostSlugs } from "@/lib/api"

export async function GET() {
  try {
    const posts = await fetchAllPosts()
    const allSlugs = await getAllPostSlugs()

    const baseUrl = "https://hot51apkdl.com"
    const currentDate = new Date().toISOString()

    // Static pages
    const staticPages = [
      { url: `${baseUrl}/`, priority: "1.00" },  
      { url: `${baseUrl}/blog`, priority: "1.00" }, 
      { url: `${baseUrl}/download`, priority: "1.00" }, 
        
      
      // Robots.txt
      { url: `${baseUrl}/robots.txt`, priority: "0.80" },
    ]

    // Blog posts (English)
    const blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      priority: "0.80",
    }))

    // Multilingual blog posts
    const multilingualBlogPages: any[] = []
    allSlugs.forEach(({ slug, lang }) => {
      if (lang !== "en") {
        multilingualBlogPages.push({
          url: `${baseUrl}/${lang}/blog/${slug}`,
          priority: "0.64",
        })
      }
    })

    // const allPages = [...staticPages, ...blogPages, ...multilingualBlogPages]
    const allPages = [...staticPages, ...blogPages]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Next.js Dynamic Sitemap Generator -->

${allPages
  .map((page) => {
    return `
<url>
  <loc>${page.url}</loc>
  <lastmod>${currentDate}</lastmod>
  <priority>${page.priority}</priority>
</url>`
  })
  .join("")}

</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return new NextResponse("Error generating sitemap", { status: 500 })
  }
}
