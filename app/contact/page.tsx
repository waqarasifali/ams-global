import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/90 to-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed">
                Get in touch with our team to discuss how AMS Global can help your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">You can also reach us using the following contact details.</p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Business Avenue
                    <br />
                    Suite 456
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (234) 567-8901</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@amsglobal.com</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647286417181!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0, width: "100%", height: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

