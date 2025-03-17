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
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070&auto=format&fit=crop",
      products: [
        {
          name: "Industrial Machinery",
          image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Manufacturing Equipment",
          image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Safety Gear",
          image: "https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=2074&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "technology",
      title: "Technology Products",
      description: "Innovative technology solutions for modern businesses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      products: [
        {
          name: "Enterprise Software",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Networking Equipment",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Smart Devices",
          image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "office",
      title: "Office Solutions",
      description: "Complete office solutions to enhance productivity.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      products: [
        {
          name: "Office Furniture",
          image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Stationery",
          image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2048&auto=format&fit=crop",
        },
        {
          name: "Office Equipment",
          image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop",
        },
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

