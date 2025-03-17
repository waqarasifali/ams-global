"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-in"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedElement({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "slide-in": "opacity-0 -translate-x-8",
    "scale-in": "opacity-0 scale-95",
  }

  const transitionStyles = {
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : animationClasses[animation],
        className,
      )}
      style={transitionStyles}
    >
      {children}
    </div>
  )
}

