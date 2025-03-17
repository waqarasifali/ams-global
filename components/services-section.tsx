import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { AnimatedElement } from "./animated-element"

// Update the services section to use animations
export function ServicesSection() {
  const services = [
    {
      title: "Consulting Services",
      description: "Expert guidance to optimize your business operations and strategy.",
      features: ["Business Analysis", "Process Optimization", "Strategic Planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Technology Solutions",
      description: "Cutting-edge technology to drive your business forward.",
      features: ["Custom Software Development", "System Integration", "Cloud Migration"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Global Distribution",
      description: "Expand your reach with our global distribution network.",
      features: ["International Logistics", "Supply Chain Management", "Market Entry Strategy"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="services">
      <div className="container px-4 md:px-6">
        <AnimatedElement
          animation="fade-up"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl mb-4">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help your business succeed in the global marketplace.
            </p>
          </div>
        </AnimatedElement>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={index * 100}
              className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:translate-y-[-5px] duration-300"
            >
              <div>
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
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
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

