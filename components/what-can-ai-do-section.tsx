"use client"

import React from "react"
import { Video, MessageCircle, Gift, Sparkles, Trophy, Shield, Smartphone, Bell } from "lucide-react"

interface Hot51ModFeaturesProps { 
  pageType?: "single" | "multi"
}

export function Hot51ModFeatures({ pageType = "single" }: Hot51ModFeaturesProps) {
  const getFeatures = () => {
    const icons = [Video, MessageCircle, Gift, Sparkles, Trophy, Shield, Smartphone, Bell]
    
    const featuresData = [
      {
        number: "1",
        title: "High-Quality Live Streaming",
        description:
          "The app is equipped with advanced technology, offering full HD and 4K video formats so that users can enjoy a crystal-clear viewing experience. Moreover, the video streaming is adaptive, meaning it adjusts its quality based on your internet speed. You don't have to manually decrease or increase the quality.",
      },
      {
        number: "2",
        title: "Real-Time Interaction",
        description:
          "Enjoy a live interaction with hosts through live chat, virtual gifts, live gaming, and talk shows. You can communicate with them in real-time during the live broadcast and also interact with other viewers who are watching the stream simultaneously.",
      },
      {
        number: "3",
        title: "Virtual Gifts",
        description:
          "In virtual gifts, you can send flowers, coins, and other premium items to the host you love the most. It not only shows love and affection to the host but also gives them a sense of appreciation, encouraging them to produce more content like that.",
      },
      {
        number: "4",
        title: "Exclusive Content",
        description:
          "The content library is not limited to live streaming; it is far more comprehensive, as you can watch both old and newly uploaded videos daily. Furthermore, if you are exhausted from watching videos, you can play games and create a different, fun environment.",
      },
      {
        number: "5",
        title: "Special Events and Challenges",
        description:
          "On the app, you can participate in special events and challenges that are organized frequently. Users of the app from around the world participate in these events to earn rewards, such as coins, access to premium content, and other merchandise.",
      },
      {
        number: "6",
        title: "User Data Security",
        description:
          "When it comes to third-party and streaming applications, privacy is a priority for everyone, and Hot51 understands that. It offers an advanced security system that protects your personal data from both malware and cyber threats. You can use the app stress-free, as everything is in safe hands.",
      },
      {
        number: "7",
        title: "Intuitive Interface",
        description:
          "The app's user interface is efficient and convenient, making navigation easier for every user. Home, live, play, and activity options are visible on the home screen. All you have to do is choose what you are looking for and start enjoying a seamless experience.",
      },
      {
        number: "8",
        title: "Alert Notifications",
        description:
          "On the menu bar, you can find an option with a bell icon, which you can turn on to get alert notifications from the app. Additionally, you can set notifications for your favorite host's videos and live streams to receive updates whenever they go live.",
      },
    ]

    return featuresData.map((feature, index) => ({
      ...feature,
      icon: icons[index]
    }))
  }

  const features = getFeatures()

  return (
    <section className="max-w-7xl mx-auto mb-20">
      <h2 className="text-center font-extrabold text-3xl mb-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
        Exclusive Features of HOT51 Mod APK
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-relaxed">
        Here, we will explore the features of HOT51 that make it the number one live bar streaming app in Indonesia. These features make the user experience more immersive and truly engaging.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <article key={feature.number} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl font-black text-gray-300 dark:text-gray-600 opacity-30 select-none pointer-events-none">
                {feature.number}
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-pink-500 p-2 rounded-lg">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">{feature.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}