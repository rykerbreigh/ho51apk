import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { MergeFellasMainContent } from "@/components/merge-fellas-main-content"
import { Hot51ModFeatures  } from "@/components/what-can-ai-do-section"
import { Hot51ModApkFeatures } from "@/components/MergeFellasAlternatives"
import ProsConsSection from '@/components/ProsConsSection';
import { PersonalExperienceSection } from '@/components/PersonalExperienceSection'
import { FAQSection } from "@/components/faq-section"
import { FinalWordsSection } from '@/components/FinalWordsSection'
import { Hot51DownloadGuide } from '@/components/Hot51DownloadGuide' 
import PlayStoreStyleApp from '@/components/PlayStoreStyleApp'

export const metadata: Metadata = {
  title: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
  description:
    "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
  openGraph: {
    title: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
    description:
      "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
    type: "website",
    url: "https://hot51apkdl.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
    description:
      "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://hot51apkdl.com",
  },
}

export const revalidate = 3600

export default async function HomePage() {
    // const posts = await fetchAllPosts()
  // const latestPosts = posts.slice(0, 3)
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
                <span className="font-semibold text-foreground">HOT51 Mod APK</span>
              </li>
            </ol>
          </nav> 

           <PlayStoreStyleApp />
           <MergeFellasMainContent />
           <Hot51ModFeatures />
           <Hot51ModApkFeatures  />
           <Hot51DownloadGuide />
           <ProsConsSection />
           <FAQSection /> 
           <FinalWordsSection />
           {/* <BlogSection posts={latestPosts}   /> */}

       
          
        </main>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Website",
              name: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
              url: "https://hot51apkdl.com/",
              headline: "Download Hot51 MOD APK v2.1.5 For Android | Unlocked All",
              description:
                "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
              image: "https://hot51apkdl.com/images/featured.webp",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: "1",
                  name: "Home",
                  item: "https://hot51apkdl.com/",
                },
                {
                  "@type": "ListItem",
                  position: "2",
                  name: "HOT51 MOD APK",
                  item: "https://hot51apkdl.com/",
                },
              ],
            }),
          }}
        />

        <Footer />
      </div>

      {/* Structured Data for Mobile Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "HOT51",
            description: "Download Hot51 Mod APK for free on Android & iOS. Enjoy HD live streaming, exclusive content, online games, and ad-free entertainment.",
            url: "https://hot51apkdl.com",
            applicationCategory: "GameApplication",
            operatingSystem: "Android",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "HOT51",
              url: "https://hot51apkdl.com",
            },
          }),
        }}
      />
    </>
  )
}
