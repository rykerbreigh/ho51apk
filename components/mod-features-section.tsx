export function ModFeaturesSection() {
  const modFeatures = [
    {
      title: "Unlimited Shakes/Merges",
      description:
        "Enjoy unlimited merges to test your creativity level by creating multiple new creations without game over.",
      icon: "🔄",
    },
    {
      title: "Unlimited Revives",
      description: "Play again even if the game is over with unlimited revives. Never get disappointed again!",
      icon: "❤️",
    },
    {
      title: "Ad-Free Gameplay",
      description: "Enjoy the game without ad interruptions that divert your attention from the gameplay.",
      icon: "🚫",
    },
    {
      title: "Unlocked Premium Content",
      description: "Access exclusive creatures without any restrictions. Everything is unlocked from the start.",
      icon: "🔓",
    },
    {
      title: "Multiple Unlocked Modes",
      description: "Jump into any mode like Italian Brainrot, Capybara Mode, and Giga Mode right from the beginning.",
      icon: "🎪",
    },
    {
      title: "Free Rewards",
      description: "Get unlimited free rewards without watching ads. Claim rewards whenever you want.",
      icon: "🎁",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modded Features of HOT51 Mod APK
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Although the official version offers multiple features, the mod version provides unlimited and unlocked
            content for the ultimate gaming experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modFeatures.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
