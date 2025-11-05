import Link from "next/link"
import { ArrowRight, Target, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Data-Driven Strategy",
      description: "We work with data, creativity, and experience — not guesswork — to deliver measurable results.",
    },
    {
      icon: Users,
      title: "Dedicated Partnership",
      description: "We're not just a service provider; we're your growth partner committed to your success.",
    },
    {
      icon: TrendingUp,
      title: "Transparent Reporting",
      description: "Clear communication and detailed monthly reports keep you informed every step of the way.",
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience helping brands scale from startup to marketplace leader.",
    },
  ]

  const achievements = [
    { value: "95%", label: "Client Satisfaction Rate" },
    { value: "30%", label: "Average ACOS Reduction for Managed Accounts" },
    { value: "5+", label: "Countries We Serve" },
    { value: "2023", label: "Founded with a Mission" },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-40 pb-20 md:pb-32">
        <HeroBackground />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl drop-shadow-lg animate-fade-in-up">
              About Enest Solution
            </h1>
            <p className="text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Your dedicated growth partner for building strong, scalable Amazon businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
                From Strategy to Sales - We Power Your Amazon Growth
              </h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Enest Solution isn't just another Amazon agency — we're your dedicated growth partner. Founded in 2023,
                our mission is to help sellers build strong, scalable Amazon businesses through smart strategy, precise
                execution, and transparent reporting.
              </p>
              <p>
                We work with data, creativity, and experience — not guesswork — to turn your brand into a marketplace
                leader. Our approach combines deep understanding of Amazon's algorithms with proven marketing strategies
                to deliver consistent, measurable results.
              </p>
              <p>
                Whether you're launching your first product or scaling an established brand, we provide the expertise,
                tools, and support you need to succeed in today's competitive Amazon marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Why Choose Enest Solution</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              We combine expertise, transparency, and dedication to help you achieve your Amazon goals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Our Achievements</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Numbers that reflect our commitment to client success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{achievement.value}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white md:py-20 relative overflow-hidden">
        <HeroBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg">Ready to Partner with Us?</h2>
          <p className="mb-8 text-lg text-white/95 text-pretty drop-shadow">
            Let's discuss how we can help you achieve your Amazon growth goals.
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
