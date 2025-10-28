"use client"

import { getTranslation, type Language } from "@/lib/translations"

interface PersonalExperienceSectionProps {
  lang?: Language
}

export function PersonalExperienceSection({ lang = "en" }: PersonalExperienceSectionProps) {
  const translation = getTranslation(lang)

  const personalExperience = {
    heading: "My Personal Experience",
    content: `To be honest, this game captures my attention. As time passes, it not only develops your interest but also makes your free time memorable. One of the best features that I love the most is its unlimited shakes. I mean, what a great feature this game offers. The other feature I admire the most is its ad-free gameplay. Just imagine how much you enjoy the game when you're not interrupted by any ads.

You can play this game without an internet connection. I recommend that you download this game and play it in your free time. There is no need to spend any money on downloading this game. Just click the download link and enjoy an ad-free gaming experience.`
  }

  return (
    <section className="max-w-6xl mx-auto my-20 p x-4">
      <h2 className="text-3xl font-extrabold mb-12 text-center max-w-md mx-auto text-gray-900 dark:text-white">
        {personalExperience.heading}
      </h2>
      <div className="flex justify-center">
        <article className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 relative max-w-4xl">
          <div className="space-y-4">
            {personalExperience.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <span className="quote-icon absolute top-8 right-8 text-9xl text-pink-400/20 font-serif">"</span>
        </article>
      </div>
    </section>
  )
}