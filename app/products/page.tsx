import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const categories = [
    {
      id: "industrial",
      title: "Industrial Equipment",
      description: "High-quality machinery and equipment for industrial applications.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        { name: "Industrial Machinery", image: "/placeholder.svg?height=300&width=400" },
        { name: "Manufacturing Equipment", image: "/placeholder.svg?height=300&width=400" },
        { name: "Safety Gear", image: "/placeholder.svg?height=300&width=400" },
      ],
    },
    {
      id: "technology",
      title: "Technology Products",
      description: "Innovative technology solutions for modern businesses.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        { name: "Enterprise Software", image: "/placeholder.svg?height=300&width=400" },
        { name: "Networking Equipment", image: "/placeholder.svg?height=300&width=400" },
        { name: "Smart Devices", image: "/placeholder.svg?height=300&width=400" },
      ],
    },
    {
      id: "office",
      title: "Office Solutions",
      description: "Complete office solutions to enhance productivity.",
      image: "/placeholder.svg?height=400&width=600",
      products: [
        { name: "Office Furniture", image: "/placeholder.svg?height=300&width=400" },
        { name: "Stationery", image: "/placeholder.svg?height=300&width=400" },
        { name: "Office Equipment", image: "/placeholder.svg?height=300&width=400" },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/90 to-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Our Products</h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed">
                Explore our comprehensive range of high-quality products designed to meet your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{category.title}</h2>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {category.description}
                      </p>
                    </div>
                    <Button asChild className="w-fit">
                      <Link href={`/products/${category.id}`}>
                        View All {category.title} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Image
                    src={category.image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={category.title}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                </div>
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <Button asChild variant="link" className="mt-2 p-0">
                          <Link href={`/products/${category.id}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            Learn More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

