// app/privacy/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - HOT51 Mod APK | Data Protection & User Privacy",
  description: "Learn how HOT51 Mod APK protects your privacy and personal information. Our comprehensive privacy policy covers data collection, usage, security measures, and your rights as a user.",
  keywords: "HOT51 Mod APK privacy policy, data protection, personal information security, user privacy rights, cookies policy, data security, privacy practices, information collection",
  openGraph: {
    title: "Privacy Policy - HOT51 Mod APK",
    description: "Learn how HOT51 Mod APK protects your privacy and personal information. Comprehensive privacy policy covering data collection, usage, and security.",
    type: "website",
    url: `https://hot51apkdl.com/privacy`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - HOT51 Mod APK",
    description: "Learn how HOT51 Mod APK protects your privacy and personal information. Comprehensive privacy policy covering data collection and security.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://hot51apkdl.com/privacy`,
    languages: {
      en: "https://hot51apkdl.com/privacy"
    },
  },
}

export default function PrivacyPage() {
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
                Privacy Policy
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          
          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p>
              At HOT51 Mod APK, your privacy is our top priority. We are committed to protecting your personal information and ensuring a safe browsing experience. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or download our app.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may collect both personal and non-personal information to improve our services and enhance your user experience.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">1. Personal Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may collect details such as your name, email address, or contact information when you voluntarily provide them—such as through our contact form or inquiries.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">2. Non-Personal Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We automatically gather data like your IP address, browser type, device details, and browsing patterns using cookies and analytics tools. This information helps us analyze traffic and improve functionality.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not collect sensitive personal data unless you explicitly provide consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">We use your data to:</p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>Improve the performance and usability of our website.</li>
            <li>Respond to your messages, feedback, or support requests.</li>
            <li>Monitor analytics and usage trends to enhance our content.</li>
            <li>Ensure security and prevent any unauthorized activities or fraud.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may use cookies and similar tracking tools to offer a smoother browsing experience. You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect certain features or functionality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may use trusted third-party tools for analytics, advertising, or performance tracking. These third parties may collect data according to their own privacy policies. HOT51 Mod APK does not control or take responsibility for the privacy practices of these external services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Data Sharing and Disclosure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We respect your privacy and do not sell, rent, or trade your personal data. Information may only be shared in the following cases:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>To comply with applicable laws or legal requests.</li>
            <li>To protect our rights, users, and property.</li>
            <li>With verified service providers who help us maintain our website securely and efficiently.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Security of Your Data</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We adopt appropriate security measures to prevent unauthorized access, alteration, or misuse of your personal data. However, no online transmission can be completely secure, and we encourage you to exercise caution when sharing information online.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Links to Other Websites</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may include links to external or third-party sites for your convenience. Please note that we are not responsible for the content or privacy practices of those sites. We recommend reviewing their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            HOT51 Mod APK is not directed toward children under 13 years of age. We do not knowingly collect personal information from minors. If you believe that a child has provided us with personal data, please contact us immediately so we can take appropriate action.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page with a revised effective date. Please check this page regularly to stay informed.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions, concerns, or suggestions regarding this Privacy Policy or our data practices, feel free to contact us through our website's contact page.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}