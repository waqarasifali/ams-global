import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categories = {
    industrial: {
      title: "Industrial Equipment",
      description: "High-quality machinery and equipment for industrial applications.",
      products: [
        {
          name: "Industrial Machinery",
          description: "Heavy-duty machinery for manufacturing and production.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Manufacturing Equipment",
          description: "Specialized equipment for various manufacturing processes.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Safety Gear",
          description: "Protective equipment for industrial environments.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Measurement Tools",
          description: "Precision tools for industrial measurements.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Industrial Automation",
          description: "Automation solutions for industrial processes.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Material Handling",
          description: "Equipment for efficient material handling in industrial settings.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    technology: {
      title: "Technology Products",
      description: "Innovative technology solutions for modern businesses.",
      products: [
        {
          name: "Enterprise Software",
          description: "Comprehensive software solutions for business management.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Networking Equipment",
          description: "High-performance networking hardware for business connectivity.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Smart Devices",
          description: "Connected devices for improved business operations.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Data Storage",
          description: "Reliable storage solutions for business data.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Security Systems",
          description: "Advanced security technology for business protection.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Communication Tools",
          description: "Modern communication technology for business collaboration.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    office: {
      title: "Office Solutions",
      description: "Complete office solutions to enhance productivity.",
      products: [
        {
          name: "Office Furniture",
          description: "Ergonomic and stylish furniture for modern offices.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Stationery",
          description: "High-quality stationery for everyday office use.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Office Equipment",
          description: "Essential equipment for efficient office operations.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Printing Solutions",
          description: "Advanced printing technology for office documentation.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Meeting Room Equipment",
          description: "Technology and furniture for productive meetings.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Office Supplies",
          description: "Everyday supplies for smooth office functioning.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
  }

  const category = categories[params.category as keyof typeof categories]

  if (!category) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/90 to-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">{category.title}</h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Products
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
                  <p className="mt-2 text-muted-foreground">{product.description}</p>
                  <Button asChild variant="link" className="mt-4 p-0">
                    <Link href={`/products/${params.category}/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

