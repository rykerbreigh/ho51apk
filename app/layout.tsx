import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
  description:
    "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
  keywords: "HOT51 Mod APK, unlimited coins, premium unlocked, ad-free streaming, HD live streaming, free download, VIP membership, virtual gifts, live entertainment, real-time interaction",
  authors: [{ name: "HOT51 Team" }],
  creator: "HOT51",
  publisher: "HOT51",
  applicationName: "HOT51",
  referrer: "origin-when-cross-origin",
  category: "streaming application",
  classification: "Mobile Application",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hot51apkdl.com"),
  alternates: {
    canonical: "https://hot51apkdl.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hot51apkdl.com",
    siteName: "HOT51",
    title: "Free Download Hot51 MOD APK Latest Version | Unlimited Money",
    description:
      "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
    images: [
      {
        url: "https://hot51apkdl.com/images/featured.webp",
        width: 1200,
        height: 630,
        alt: "HOT51 MOD APK",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Hot51",
    creator: "@Hot51",
    title: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
    description:
      "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
    images: {
      url: "https://hot51apkdl.com/images/featured.webp",
      alt: "HOT51 MOD APK",
      width: 1200,
      height: 630,
      type: "image/webp",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.webp", sizes: "16x16", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "96x96", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/images/favicon.webp",
    apple: [
      { url: "/images/favicon.webp", sizes: "180x180", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "theme-color": " #AB1479",
    "msapplication-TileColor": " #AB1479",
  },
  verification: {
    // google: "1Pfzk35p8vZiv2Qmddb2pRf9UqbmRjCIe9MlLUPYloA",
  } 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="image" content="https://hot51apkdl.com/images/featured.webp" />
        <meta property="og:image" content="https://hot51apkdl.com/images/featured.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://hot51apkdl.com/images/featured.webp" />
        <meta name="twitter:site" content="@Hot51" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              url: "https://hot51apkdl.com/",
              logo: "https://hot51apkdl.com/images/featured.webp",
              name: "HOT51",
              image: "https://hot51apkdl.com/images/featured.webp",
              brand: { "@type": "Organization" },
              legalName: "HOT51",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
          <nav className="sr-only" aria-label="Site Navigation for Search Engines">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/download">Download</a>
              </li>
              
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a href="/robots.txt">Robots</a>
              </li>
            </ul>
          </nav>
        </ThemeProvider>
        
        {/* Google Analytics */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FM1DJPVZW0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FM1DJPVZW0');
            `,
          }}
        /> */}
      </body>
    </html>
  )
}