import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AMS Global has been instrumental in helping us expand our business internationally. Their expertise and support have been invaluable.",
      author: "Jane Smith",
      position: "CEO, TechCorp",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The quality of products and level of service provided by AMS Global is exceptional. They've been a reliable partner for our business.",
      author: "John Doe",
      position: "Operations Director, IndustryCo",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Working with AMS Global has transformed our supply chain efficiency. Their global distribution network is unmatched.",
      author: "Sarah Johnson",
      position: "Supply Chain Manager, GlobalTrade",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from businesses that have partnered with AMS Global.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-md">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-primary/40 mb-4" />
                <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="h-10 w-10 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

