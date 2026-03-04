"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Facebook, Instagram, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HeroBackground } from "@/components/hero-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // You can add email service integration here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-40 pb-20 md:pb-32">
        <HeroBackground />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl drop-shadow-lg animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Ready to grow your Amazon business? Get in touch with us today for a free growth audit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Get Your Free Growth Audit</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to discuss how we can help grow your
                Amazon business.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your Amazon business and goals..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
                <p className="mb-8 text-muted-foreground leading-relaxed">
                  Reach out to us through any of the following channels. We're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href="tel:03478097440"
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      03478097440
                    </a>
                    <a
                      href="tel:03264679125"
                      className="block text-muted-foreground transition-colors hover:text-primary"
                    >
                      03264679125
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:sales.enestsolution@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      sales.enestsolution@gmail.com
                    </a>
                  </CardContent>
                  <CardContent>
                    <a
                      href="mailto:8097440best@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      8097440best@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/Enestsolution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/enest_solution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/enestsolution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <h3 className="mb-2 font-semibold">Business Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white md:py-20 relative overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg">
            Let's Grow Your Amazon Business Together
          </h2>
          <p className="mb-8 text-lg text-white/95 text-pretty drop-shadow">
            Schedule a free consultation to discover how Enest Solution can help you achieve your goals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
            >
              <a href="mailto:sales.enestsolution@gmail.com">
                Email Us Now
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
            >
              <a href="mailto:8097440best@gmail.com">
                Email Us Now
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
            >
              <a href="tel:03478097440">
                Call Us Today
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
