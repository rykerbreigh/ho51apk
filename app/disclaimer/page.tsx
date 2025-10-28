// app/disclaimer/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Disclaimer - HOT51 Mod APK | Legal Notice & User Responsibilities",
  description: "Important disclaimer regarding the use of HOT51 Mod APK website, third-party links, and APK files. Understand your responsibilities and our terms of use.",
  keywords: "HOT51 Mod APK disclaimer, terms of use, APK files disclaimer, user responsibility, legal notice, educational purposes, third-party links, copyright notice",
  openGraph: {
    title: "Disclaimer - HOT51 Mod APK",
    description: "Important disclaimer regarding the use of HOT51 Mod APK website, third-party links, and APK files. Understand your responsibilities and our terms of use.",
    type: "website",
    url: `https://hot51apkdl.com/disclaimer`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - HOT51 Mod APK",
    description: "Important disclaimer regarding the use of HOT51 Mod APK website, third-party links, and APK files.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://hot51apkdl.com/disclaimer`,
    languages: {
      en: "https://hot51apkdl.com/disclaimer"
    },
  },
}

export default function DisclaimerPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Disclaimer
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Disclaimer</h1>
          
          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p>
              The information provided on HOT51 Mod APK is intended for general informational and educational purposes only. By using our website, you agree to this disclaimer in full and accept that your use of the site is at your own discretion and risk.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No Official Affiliation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            HOT51 Mod APK is not affiliated with, endorsed by, or connected to the official developers or publishers of the original HOT51 game. All trademarks, logos, and brand names mentioned on this website belong to their respective owners. Our goal is solely to provide useful information, guides, and insights related to the app for educational purposes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">APK Files and Usage</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may provide references or external links to third-party sources for downloading APK files strictly for testing, educational, or informational use only. Please note that:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>We do not host any copyrighted or pirated content on our servers.</li>
            <li>Any downloads or installations from external links are entirely at your own risk.</li>
            <li>It is your responsibility to comply with local laws, app store regulations, and copyright rules before using any modified APK files.</li>
            <li>We do not promote or support piracy or the illegal sharing of paid applications.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            While we strive to keep all information on HOT51 Mod APK accurate, reliable, and up to date, we make no guarantees regarding the completeness, accuracy, or timeliness of any content. Any actions you take based on the information provided on this website are strictly at your own risk, and HOT51 Mod APK will not be held responsible for any losses or damages.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">External Links</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may include links to third-party sites or services for convenience and reference. Please be aware that HOT51 Mod APK has no control over the content, policies, or practices of these external websites and does not accept any responsibility or liability for them. We encourage users to review the privacy policies and terms of those websites before engaging with them.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Under no circumstances shall HOT51 Mod APK or its owners be held liable for any damages, data loss, or issues arising from:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>Downloading or installing APK files from external websites.</li>
            <li>Using third-party tools or services linked from our platform.</li>
            <li>Any inaccuracies, technical errors, or omissions found within the provided content.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            All actions are performed at the user's own discretion and responsibility.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">User Responsibility</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            By accessing and using our website, you acknowledge and agree that:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>You have the legal right to download, install, and use APK files in your region.</li>
            <li>You understand the potential risks associated with using modified APK files, including device malfunctions, data loss, or security issues.</li>
            <li>You will use any provided information ethically and lawfully.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Consent</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By using HOT51 Mod APK, you consent to this Disclaimer and agree to all of its terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions, concerns, or requests regarding this Disclaimer, please contact us via our Contact Page or through the email provided on our website.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}