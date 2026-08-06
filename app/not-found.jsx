import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AmbientBackground } from "@/components/ambient-background"

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
      <AmbientBackground />
      <div className="text-center px-4">
        <p className="font-display text-8xl font-semibold text-gradient-gold">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This room doesn't exist.</h1>
        <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
          The page you're looking for isn't here. Let's get you back home.
        </p>
        <Button as={Link} href="/" className="mt-8">
          <Home className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </section>
  )
}
