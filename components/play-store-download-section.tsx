"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Shield, Users } from "lucide-react"

export function PlayStoreDownloadSection() {
  const handleDownload = () => {
    // Navigate to download page or trigger download
    window.location.href = "/download"
  }

  return (
    <div className="py-12">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* App Icon and Basic Info */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:w-1/3 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <img src="/images/featured.webp" alt="HOT51" className="w-20 h-20 rounded-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">HOT51</h3>
              <p className="text-sm text-muted-foreground mb-4">Puzzle Game</p>
              <Badge variant="secondary" className="mb-4">
                MOD APK
              </Badge>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-pink-400 text-pink-400" />
                ))}
                <span className="ml-2 text-sm font-semibold">4.8</span>
              </div>
              <p className="text-xs text-muted-foreground">1M+ downloads</p>
            </div>

            {/* App Details */}
            <div className="p-8 md:w-2/3">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">HOT51 MOD APK</h2>
                  <p className="text-muted-foreground mb-4">
                    Merge internet characters and animals to create funny and adorable creatures. Enjoy unlimited
                    features with this modded version.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Ad-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Offline Play</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-pink-500" />
                  <span className="text-sm">Unlimited Features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">Free Download</span>
                </div>
              </div>

              {/* Download Button */}
              <Button
                onClick={handleDownload}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </Button>

              {/* Version Info */}
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Version: 1.9.7 • Size: 102MB • Updated: Recently</p>
                <p>Requires Android 6.0+</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
