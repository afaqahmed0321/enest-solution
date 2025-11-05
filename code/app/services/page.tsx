import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Search,
  FileText,
  Megaphone,
  Palette,
  Settings,
  Package,
  Shield,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Account Setup & Launch Services",
      items: [
        "Company formation & registration assistance (LLC, LTD, or local)",
        "Amazon Seller Central account registration (FBA / FBM setup)",
        "Brand Registry application & trademark support",
        "Product category approval & documentation handling",
        "Marketplace expansion setup (USA, UK, EU, UAE, etc.)",
      ],
    },
    {
      icon: Search,
      title: "Product Research & Launch",
      items: [
        "In-depth product & niche research",
        "Competitor and keyword analysis",
        "Profit margin & demand evaluation",
        "Product launch & ranking strategy",
        "Seasonal & trending product identification",
      ],
    },
    {
      icon: FileText,
      title: "Listing Optimization & Content Creation",
      items: [
        "Keyword-optimized titles, bullets & descriptions",
        "Backend keyword setup for better indexing",
        "A+ Content / EBC design & layout",
        "Product image optimization (infographics, lifestyle)",
        "Storefront creation & cross-selling layout",
      ],
    },
    {
      icon: Megaphone,
      title: "Amazon PPC & Advertising Management",
      items: [
        "Sponsored Products, Brands & Display campaigns",
        "Keyword targeting & bid optimization",
        "Dayparting & placement analysis",
        "ACOS & TACOS performance tracking",
        "Amazon DSP (Display Ads) management",
        "Product launch campaigns (PPC + organic ranking)",
      ],
    },
    {
      icon: Palette,
      title: "Brand Building & Creative Design",
      items: [
        "Amazon Brand Store design",
        "A+ Content & premium visuals",
        "Product photography & infographic design",
        "Brand identity & visual strategy",
      ],
    },
    {
      icon: Settings,
      title: "Account Management & Growth",
      items: [
        "Full Amazon account management (daily operations)",
        "Listing maintenance & price updates",
        "Performance health & compliance management",
        "Case management with Amazon support",
        "Account suspension appeals & reinstatement",
        "Monthly KPI reports & growth tracking",
      ],
    },
    {
      icon: Package,
      title: "Inventory & Supply Chain Management",
      items: [
        "Inventory forecasting & demand planning",
        "FBA shipment planning & monitoring",
        "IPI (Inventory Performance Index) improvement",
        "Restock alerts & order tracking",
        "Logistics & warehouse coordination",
      ],
    },
    {
      icon: Shield,
      title: "Brand Protection & Reputation Management",
      items: [
        "Hijacker & counterfeit monitoring",
        "Trademark & IP protection",
        "Review request automation",
        "Feedback and rating improvement strategy",
        "Negative review management",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics, Reporting & Consulting",
      items: [
        "PPC & sales performance dashboards",
        "Conversion, ACOS & profit analysis",
        "Monthly performance insights",
        "Strategic consultation for scaling",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-40 pb-20 md:pb-32">
        <HeroBackground />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl drop-shadow-lg animate-fade-in-up">
              Our Amazon Services
            </h1>
            <p className="text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Comprehensive solutions to help you succeed on Amazon, from setup to scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Full-Service Amazon Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Everything you need to launch, optimize, and scale your Amazon business.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`border-border card-hover-lift ${
                    index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                  } animation-delay-${Math.floor(index / 2) * 200 + 100}`}
                >
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 card-icon-bounce">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">How We Work</h2>
            <p className="mb-12 text-lg text-muted-foreground text-pretty">
              Our proven process ensures your success at every stage.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center animate-slide-in-up animation-delay-100">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Discovery & Audit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We analyze your current situation and identify growth opportunities.
                </p>
              </div>
              <div className="text-center animate-slide-in-up animation-delay-300">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Strategy & Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We implement data-driven strategies tailored to your goals.
                </p>
              </div>
              <div className="text-center animate-slide-in-up animation-delay-500">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Optimize & Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We continuously optimize and scale your business for maximum growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white md:py-20 relative overflow-hidden">
        <HeroBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-white/95 text-pretty drop-shadow">
            Let's discuss which services are right for your Amazon business.
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
