import Image from "next/image"

export function PartnersSection() {
  const partners = [
    { name: "Company 1", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 2", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 3", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 4", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 5", logo: "/placeholder.svg?height=80&width=180" },
    { name: "Company 6", logo: "/placeholder.svg?height=80&width=180" },
  ]

  return (
    <section className="w-full py-12 md:py-24 bg-background" id="partners">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Trusted by Industry Leaders</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've partnered with leading companies across various industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={180}
                height={80}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

