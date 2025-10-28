export function FeaturesSection() {
  const features = [
    {
      title: "Genre and Style",
      description:
        "Merge puzzle game that invites you to combine identical items like animals and memes to create new ones.",
      icon: "🎮",
    },
    {
      title: "Multiple Mode Types",
      description: "Born from 'Brainrot' Universe, featuring Italian Brainrot, Capybara Mode, and Giga Mode.",
      icon: "🎯",
    },
    {
      title: "Unique Characters",
      description:
        "Discover hilarious characters like Tralalero Tralala, Cappuccino Ballerina, and Tung Tung Tung Sahur.",
      icon: "🦄",
    },
    {
      title: "Offline Play",
      description: "Play without internet connection - perfect for areas with low connectivity.",
      icon: "📱",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Features of HOT51</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            HOT51 offers a lot of features that make this game interesting. Let's explore these features in
            detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
