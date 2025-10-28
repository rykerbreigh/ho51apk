export function GameplaySection() {
  return (
    <section id="gameplay" className="py-16 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Gameplay of HOT51</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            This game offers interesting gameplay, where you find numerous creative and humorous ways to create a new
            creature.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">How to Play</h3>
              <ul className="space-y-3 text-card-foreground">
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>The game starts with an empty or partially filled container</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Merge as many animals or memes as you can before the container fills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Each merge boosts your score and opens new characters to explore</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>Round ends when the container fills and there's no space for new drops</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Game Features</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-card-foreground">Short and addictive play sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-card-foreground">Casual structure for all ages</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-card-foreground">Instant feedback and rewards</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-card-foreground">Multiple game modes available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
