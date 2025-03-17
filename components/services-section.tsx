import { CheckCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Consulting Services",
      description: "Expert guidance to optimize your business operations and strategy.",
      features: ["Business Analysis", "Process Optimization", "Strategic Planning"],
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge technology to drive your business forward.",
      features: ["Custom Software Development", "System Integration", "Cloud Migration"],
    },
    {
      title: "Global Distribution",
      description: "Expand your reach with our global distribution network.",
      features: ["International Logistics", "Supply Chain Management", "Market Entry Strategy"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="services">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Business Solutions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help your business succeed in the global marketplace.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

