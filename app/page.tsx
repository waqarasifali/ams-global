import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsOverview } from "@/components/products-overview"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactCta } from "@/components/contact-cta"
import { FloatingContactButton } from "@/components/floating-contact-button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ServicesSection />
      <ProductsOverview />
      <PartnersSection />
      <TestimonialsSection />
      <ContactCta />
      <FloatingContactButton />
    </main>
  )
}

