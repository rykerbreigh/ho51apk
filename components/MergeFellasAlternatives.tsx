"use client"

import React from "react"
import { ShieldOff, Crown, Coins, Users, Award, Globe } from "lucide-react"

interface Hot51ModApkFeaturesProps { 
  pageType?: "single" | "multi"
}

export function Hot51ModApkFeatures({ pageType = "single" }: Hot51ModApkFeaturesProps) {
  const sections = [
    {
      title: "No Ads",
      description: "The best premium perk of the mod APK is that it eliminates occasional ads during live streams, video watching, and gameplay. You can enjoy a smooth, uninterrupted user experience without your flow being broken or your entertainment being disrupted.",
      icon: ShieldOff,
      bgColor: "from-pink-400 to-red-500",
      bgColorDark: "bg-pink-100 dark:bg-pink-900",
      iconBg: "bg-pink-500"
    },
    {
      title: "Premium Access",
      description: "The features that require a premium subscription and real money in the standard app are unlocked here. It offers a VIP membership, which enables you to access premium content on the app. Also, you can play money games as well without spending anything.",
      icon: Crown,
      bgColor: "from-purple-400 to-pink-500",
      bgColorDark: "bg-purple-100 dark:bg-purple-900",
      iconBg: "bg-purple-500"
    },
    {
      title: "Free Coins",
      description: "The coins you gift to your most beloved hosts in their stream are usually purchased, and you have to pay for them. But with this Mod APK, you will get a lot of coins from the start, which you can spend on streams, games, etc.",
      icon: Coins,
      bgColor: "from-yellow-400 to-orange-500",
      bgColorDark: "bg-yellow-100 dark:bg-yellow-900",
      iconBg: "bg-yellow-500"
    },
    {
      title: "Large Community",
      description: "Being part of Hot51 brings a lot of benefits, as it boasts a large community of viewers and gamers making friends. You will have the opportunity to interact with and meet other people on the app, allowing you to expand your social circle and form new connections.",
      icon: Users,
      bgColor: "from-blue-400 to-cyan-500",
      bgColorDark: "bg-blue-100 dark:bg-blue-900",
      iconBg: "bg-blue-500"
    },
    {
      title: "Ranking and Reward System",
      description: "To keep things interesting and engaging for both viewer and host, the app offers a ranking and reward system. The more coins and rewards you spend on hosts, the higher your profile ranking improves, and with the hot51 mod apk provides, you will earn big rewards. Host ranking depends on the audience that comes to his live show.",
      icon: Award,
      bgColor: "from-orange-400 to-red-500",
      bgColorDark: "bg-orange-100 dark:bg-orange-900",
      iconBg: "bg-orange-500"
    },
    {
      title: "Multi-Language Support",
      description: "While most of the content on Hot51 is in the Indonesian language, you can also enjoy content in other languages like English, Portuguese, Spanish, and Italian. It's because the app has international hosts from countries like Vietnam, India, the Philippines, and Brazil.",
      icon: Globe,
      bgColor: "from-green-400 to-emerald-500",
      bgColorDark: "bg-green-100 dark:bg-green-900",
      iconBg: "bg-green-500",
      languages: [
        "English", "Español (Spanish)", "Tiếng Việt", "Italiano", 
        "हिंदी (Hindi)", "繁体中文 (Traditional Chinese)", "Português", 
        "日本語 (Japanese)", "ไทย (Thai)", "Bahasa Indonesia", 
        "Русский (Russian)", "Bahasa Melayu", "Français (French)", "한국어 (Korean)"
      ]
    }
  ]

  const sectionTitle = "HOT51 Mod APK Features"
  const sectionDescription = "Thus far, we have discussed the official features of Hot51; now it's time to explore the premium features that are available at no extra cost, along with added benefits."

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-5">
        {/* Left side sticky content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-[110px] lg:max-w-xs lg:self-start">
          <h2 className="text-3xl font-extrabold leading-tight max-w-xs text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
          <p className="text-sm opacity-80 max-w-xs text-gray-600 dark:text-gray-300">
            {sectionDescription}
          </p>
        </div>

        {/* Right side scrollable content */}
        <div className="scrollable-right flex-1 flex flex-col gap-11 lg:pr-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <section
                key={index}
                className={`right-section flex flex-col md:flex-row bg-gradient-to-r ${section.bgColor} rounded-lg shadow-lg overflow-hidden`}
              >
                {/* Icon Side */}
                <div
                  className={`md:flex-shrink-0 p-6 md:p-0 md:w-[36%] flex justify-center items-center ${section.bgColorDark}`}
                >
                  <div className={`${section.iconBg} p-6 rounded-2xl`}>
                    <IconComponent className="w-20 h-20 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="md:w-[64%] bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-r-lg">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                    {section.description}
                  </p>
                  
                  {/* Language List for Multi-Language Support */}
                  {section.languages && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Supported Languages:</p>
                      <div className="flex flex-wrap gap-2">
                        {section.languages.map((lang, langIndex) => (
                          <span 
                            key={langIndex}
                            className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}