"use client"

import { Download } from 'lucide-react'

export function FinalWordsSection() {
  const handleDownloadClick = () => {
    // Replace with your actual download page URL
    window.location.href = '/download' // or use Next.js router
  }

  return (
    <section className="py-3 mb-5">
      <div className="max-w-4xl mx-auto p x-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Final Verdict
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
       Hot51 is a premium hub for those who enjoy entertainment and love interacting with different people. It offers a versatile content library where you can watch dance videos, live talk shows, and engage in conversations with hosts from around the world during the livestream. To enhance this experience, consider using Hot51 Mod APK, as it provides ad-free navigation and unlocks premium features.
       </p>
          <button 
            onClick={handleDownloadClick}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center mx-auto"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}