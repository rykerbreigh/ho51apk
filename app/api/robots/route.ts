import { NextResponse } from "next/server"

export async function GET() {
  const robots = `User-agent: *
Allow: /

# Allow all crawling
Sitemap: https://hot51apkdl.com/sitemap.xml

# Host
Host: https://hot51apkdl.com`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
