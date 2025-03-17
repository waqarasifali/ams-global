import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
// Add import for AnimatedElement
import { AnimatedElement } from "./animated-element"

// Update the products overview section to use animations
export function ProductsOverview() {
  const productCategories = [
    {
      title: "Industrial Equipment",
      description: "High-quality machinery and equipment for industrial applications.",
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070&auto=format&fit=crop",
      link: "/products/industrial",
    },
    {
      title: "Technology Products",
      description: "Innovative technology solutions for modern businesses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      link: "/products/technology",
    },
    {
      title: "Office Solutions",
      description: "Complete office solutions to enhance productivity.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      link: "/products/office",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="products">
      <div className="container px-4 md:px-6">
        <AnimatedElement
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our diverse range of high-quality products designed to meet your business needs.
            </p>
          </div>
        </AnimatedElement>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-2 text-muted-foreground">{category.description}</p>
                <Button asChild variant="link" className="mt-4 p-0">
                  <Link href={category.link}>
                    View Products <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
        <AnimatedElement animation="fade-up" delay={300} className="flex justify-center mt-8">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  )
}

