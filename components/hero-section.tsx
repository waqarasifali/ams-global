import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "./animated-element"

// Update the hero section to use animations
export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <AnimatedElement animation="fade-up" className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Global Solutions for Modern Businesses
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                AMS Global provides innovative products and services to help your business thrive in today's competitive
                market.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 btn-hover-effect">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 btn-hover-effect"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={300}>
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
              width={550}
              height={550}
              alt="AMS Global Hero Image"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last animate-float"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

