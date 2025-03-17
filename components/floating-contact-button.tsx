"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex flex-col gap-2 rounded-lg bg-white p-4 shadow-lg">
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full justify-start">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </Link>
          <Link href="https://m.me/amsglobal" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full justify-start">
              <MessageCircle className="mr-2 h-4 w-4" /> Messenger
            </Button>
          </Link>
          <Link href="tel:+1234567890">
            <Button variant="outline" className="w-full justify-start">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
          </Link>
        </div>
      )}
      <Button size="lg" className="h-14 w-14 rounded-full shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}

