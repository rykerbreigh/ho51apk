import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Download HOT51 Mod APK</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Ready to experience unlimited merges, revives, and ad-free gameplay? Download the latest version now!
        </p>

        <div className="bg-card rounded-lg p-8 border border-border mb-8">
          <h3 className="text-xl font-semibold text-card-foreground mb-6">How to Download</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-card-foreground">Click the download button on this website</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-card-foreground">Enable "Unknown Sources" in your device settings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-card-foreground">Go to your download folder and find the APK file</span>
              </li>
            </ol>
            <ol className="space-y-3" start={4}>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-card-foreground">Click on the install option</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  5
                </span>
                <span className="text-card-foreground">After installation, the app will appear on your screen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  6
                </span>
                <span className="text-card-foreground">Open the app and enjoy unlimited features!</span>
              </li>
            </ol>
          </div>
        </div>

        <Link href="/download">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-xl font-semibold"
          >
            Get Latest Version
          </Button>
        </Link>
      </div>
    </section>
  )
}
