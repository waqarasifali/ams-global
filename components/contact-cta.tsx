import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "./animated-element"

export function ContactCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <AnimatedElement
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
              Contact us today to discuss how AMS Global can help your business grow and succeed.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary" className="btn-hover-effect">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 btn-hover-effect"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

