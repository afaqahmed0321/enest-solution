import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "My experience working with Enest Solution has been excellent. From product research to launch, they managed everything so professionally and with great attention to detail. As a new Amazon seller, I really appreciated their clear communication and support throughout the process. I'm happy with the smooth experience and would definitely recommend their services.",
      author: "Sheikh Ashraf",
      role: "Amazon Seller USA",
      rating: 5,
    },
    {
      quote:
        "I was struggling to scale my PPC campaigns without burning money. The Enest team optimized everything from targeting to bidding and helped me double my sales with better ROAS. Super professional!",
      author: "Jehangir Khan Kochi",
      role: "Amazon Seller",
      rating: 5,
    },
    {
      quote:
        "I'm very satisfied with the image optimization done by Enest Solution. The images now look more attractive, clean, and customer-friendly. They really know how to highlight the product's features.",
      author: "Amazon UK Seller",
      role: "Knives Category",
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-40 pb-20 md:pb-32">
        <HeroBackground />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl drop-shadow-lg animate-fade-in-up">
              Client Testimonials
            </h1>
            <p className="text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Real feedback from real Amazon sellers who trust Enest Solution to grow their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1 text-4xl font-bold text-primary">
                5.0
                <Star className="h-8 w-8 fill-primary" />
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Hear directly from Amazon sellers who have experienced growth with Enest Solution.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Why Choose Enest Solution</h2>
            <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Data-Driven Approach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use analytics and proven strategies, not guesswork, to deliver measurable results.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Transparent Communication</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Clear reporting and regular updates keep you informed every step of the way.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're your growth partner, committed to your success from day one.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">Proven Results</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30% average ACOS reduction and 95% client satisfaction speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white md:py-20 relative overflow-hidden">
        <HeroBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="mb-8 text-lg text-white/95 text-pretty drop-shadow">
            Experience the same level of service and results that our clients rave about.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
          >
            <Link href="/contact">
              Get Your Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
