import Image from "next/image"

export function PartnersSection() {
  const partners = [
    {
      name: "Company 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
    {
      name: "Company 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    },
    {
      name: "Company 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      name: "Company 4",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      name: "Company 5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    },
    {
      name: "Company 6",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    },
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

