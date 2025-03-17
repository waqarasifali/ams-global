import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    category: string
    product: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // This would typically come from a database or API
  const productData = {
    name: params.product
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description:
      "This is a detailed description of the product. It would typically include information about features, specifications, and benefits.",
    features: [
      "High-quality materials",
      "Durable construction",
      "Energy efficient",
      "Easy to maintain",
      "Competitive pricing",
    ],
    specifications: {
      Dimensions: "Variable based on model",
      Weight: "Variable based on model",
      Material: "Premium quality",
      Warranty: "1 year standard warranty",
    },
    images: [
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2070&auto=format&fit=crop",
    ],
    categoryTitle: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  }

  // Validate that this is a real product (in a real app, you'd check against a database)
  if (!productData) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Button asChild variant="outline">
              <Link href={`/products/${params.category}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to {productData.categoryTitle} Products
              </Link>
            </Button>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{productData.name}</h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">{productData.description}</p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="mt-4 space-y-2">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold">Specifications</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(productData.specifications).map(([key, value], index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">{key}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl border">
                <Image
                  src={productData.images[0] || "/placeholder.svg"}
                  alt={productData.name}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {productData.images.slice(1).map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productData.name} - View ${index + 2}`}
                      width={400}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

