"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="text-center max-w-5xl mx-auto mt-8 mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground max-w-4xl mx-auto mb-6 text-balance">
        HOT51 Mod APK v1.9.7 Unlimited Shakes 2025
      </h1>
      <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
        Download the latest version of HOT51 Mod APK to enjoy modded features, such as a mod menu, unlimited
        shakes, revives, and ad-free gameplay.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link href="/download">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
          >
            Download Now
          </Button>
        </Link>
        <Link href="#features">
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
            Learn More
          </Button>
        </Link>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <div className="bg-card rounded-lg border border-border p-6">
          <h2 className="text-xl font-bold text-card-foreground mb-4">App Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold">App Name:</span>
              <span>HOT51</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Version:</span>
              <span>v1.9.7</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Requirements:</span>
              <span>Android 6.0+</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Category:</span>
              <span>Puzzle Game</span>
            </div>
            <div className="flex justify-between md:col-span-2">
              <span className="font-semibold">Features:</span>
              <span>Mod menu, unlimited shakes, and ads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
