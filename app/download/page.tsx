import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadPageContent } from "@/components/download-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download HOT51 Mod APK v2.1.5 - Latest Version | Unlimited Coins & Premium Unlocked",
  description:
    "Download HOT51 Mod APK latest version 2.1.5 for Android & iOS. Enjoy HD live streaming, unlimited coins, premium access, ad-free experience, and exclusive content for free.",
  keywords: "HOT51 Mod APK download, HOT51 latest version, unlimited coins, premium unlocked, ad-free streaming, HOT51 APK free download, live streaming app",
  openGraph: {
    title: "Download HOT51 Mod APK v2.1.5 - Latest Version | Unlimited Coins & Premium Unlocked",
    description:
      "Download HOT51 Mod APK with unlimited coins, premium features unlocked, and ad-free HD live streaming. Latest version available for Android & iOS.",
    type: "website",
    url: "https://hot51apkdl.com/download",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download HOT51 Mod APK v2.1.5 - Latest Version",
    description:
      "Download HOT51 Mod APK with unlimited coins, premium unlocked, and ad-free streaming experience.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://hot51apkdl.com/download",
  },
}

export const revalidate = 3600

export default function DownloadPage() {
  return (
    <>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Header />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Server-rendered breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground pt-8 select-none">
            <ol className="flex space-x-2">
              <li className="flex items-center">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">{">"}</span>
                <span className="font-semibold text-foreground">Download</span>
              </li>
            </ol>
          </nav>
 
          <DownloadPageContent />
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "SoftwareApplication",
            name: "HOT51 Mod APK",
            operatingSystem: "Android 5.0 or higher",
            applicationCategory: "EntertainmentApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              ratingCount: "15000"
            },
            description: "Download HOT51 Mod APK with unlimited coins, premium features unlocked, and ad-free HD live streaming.",
            downloadUrl: "https://hot51apkdl.com/download",
            softwareVersion: "2.1.5",
            fileSize: "38MB",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://hot51apkdl.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Download",
                  item: "https://hot51apkdl.com/download",
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}