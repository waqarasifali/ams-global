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
          image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Manufacturing Equipment",
          description: "Specialized equipment for various manufacturing processes.",
          image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Safety Gear",
          description: "Protective equipment for industrial environments.",
          image: "https://images.unsplash.com/photo-1618090584176-7132b9911657?q=80&w=2074&auto=format&fit=crop",
        },
        {
          name: "Measurement Tools",
          description: "Precision tools for industrial measurements.",
          image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Industrial Automation",
          description: "Automation solutions for industrial processes.",
          image: "https://images.unsplash.com/photo-1611288875785-9b295f49a8a9?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Material Handling",
          description: "Equipment for efficient material handling in industrial settings.",
          image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
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
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Networking Equipment",
          description: "High-performance networking hardware for business connectivity.",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Smart Devices",
          description: "Connected devices for improved business operations.",
          image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2080&auto=format&fit=crop",
        },
        {
          name: "Data Storage",
          description: "Reliable storage solutions for business data.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Security Systems",
          description: "Advanced security technology for business protection.",
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Communication Tools",
          description: "Modern communication technology for business collaboration.",
          image: "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2070&auto=format&fit=crop",
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
          image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Stationery",
          description: "High-quality stationery for everyday office use.",
          image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2048&auto=format&fit=crop",
        },
        {
          name: "Office Equipment",
          description: "Essential equipment for efficient office operations.",
          image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Printing Solutions",
          description: "Advanced printing technology for office documentation.",
          image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop",
        },
        {
          name: "Meeting Room Equipment",
          description: "Technology and furniture for productive meetings.",
          image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2025&auto=format&fit=crop",
        },
        {
          name: "Office Supplies",
          description: "Everyday supplies for smooth office functioning.",
          image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop",
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

