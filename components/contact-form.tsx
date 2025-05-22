"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agencyName: "",
    siteCount: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSiteCountChange = (value: string) => {
    setFormData((prev) => ({ ...prev, siteCount: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Close the dialog after submission
    setOpen(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      agencyName: "",
      siteCount: "",
    })
  }

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline" className="border-white text-white hover:bg-white/10">
        Request More Information via Email
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] bg-slate-800 text-white border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">Request Information</DialogTitle>
            <DialogDescription className="text-gray-300">
              Fill out this form and we'll get back to you with more information about SecureFront.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencyName" className="text-white">
                Security Agency Name
              </Label>
              <Input
                id="agencyName"
                name="agencyName"
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="Your agency name"
                required
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteCount" className="text-white">
                Number of Sites
              </Label>
              <Select onValueChange={handleSiteCountChange} value={formData.siteCount}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select number of sites" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="5-20">5-20</SelectItem>
                  <SelectItem value="20+">20+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end pt-4">
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
