"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface CalendlyButtonProps {
  children: React.ReactNode
  className?: string
}

export function CalendlyButton({ children, className }: CalendlyButtonProps) {
  const openCalendly = () => {
    // Updated Calendly link
    window.open("https://calendly.com/contact-securefrontsoftware/30min", "_blank")
  }

  return (
    <Button onClick={openCalendly} className={className}>
      {children}
    </Button>
  )
}
