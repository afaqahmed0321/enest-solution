import Link from "next/link"
import { ArrowRight, TrendingUp, ShoppingCart, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Pet Products Brand - USA Market",
      niche: "Pet Products",
      market: "United States",
      service: "Advertising",
      challenge: "Poor listing optimization, low quality images, low visibility, and wasted ad spend.",
      solution:
        "Improved listings with high-performing keywords, enhanced images, boosted visibility through targeted PPC campaigns, and optimized ad spend.",
      results: [
        "Significant year-over-year growth in Q2 2025",
        "Improved click-through and conversion rates",
        "Maximized ROI through campaign restructuring",
        "Enhanced brand presence in competitive market",
      ],
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Spices Brand - UK Market",
      niche: "Spices",
      market: "United Kingdom",
      service: "Scaling",
      challenge: "No Brand Registry, low organic sales, missing A+ Content and storefront, and hijacker issues.",
      solution:
        "Secured brand protection through Amazon Brand Registry, drove organic growth with optimized listings and PPC, removed hijackers, and enhanced brand experience with A+ Content and custom storefront.",
      results: [
        "Unlocked A+ Content and Sponsored Brand Ads",
        "Significant boost in visibility and organic sales",
        "Successfully removed unauthorized sellers",
        "Improved customer trust and conversions",
      ],
      icon: Award,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Dinnerware Brand - USA Market",
      niche: "Dinnerware",
      market: "United States",
      service: "PPC Optimization",
      challenge:
        "Rising ACOS & TACOS, wasted ad spend on underperforming campaigns, poor placement strategy, and lack of retargeting.",
      solution:
        "Controlled ACOS/TACOS through campaign optimization, reduced wasted spend with negative targeting, optimized ad placements to Top of Search, and built retargeting funnel with Sponsored Display.",
      results: [
        "Reduced ACOS from high levels to profitable margins",
        "Improved ROAS through strategic budget allocation",
        "Increased repeat purchases via retargeting",
        "Maximized efficiency with placement optimization",
      ],
      icon: Target,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Grocery Brand - UK Market",
      niche: "Grocery",
      market: "United Kingdom",
      service: "Amazon PPC & Growth Strategy",
      challenge:
        "Maintaining sales growth with budget constraints, rising CPCs, and balancing organic & paid sales while keeping TACOS stable.",
      solution:
        "Smart budget allocation to high-performing keywords, efficient PPC structuring for conversions, controlled ACOS/TACOS monitoring, and sustainable growth strategy balancing organic and paid.",
      results: [
        "22% sales growth year-over-year in Q2 2025",
        "Maintained profitability despite rising CPCs",
        "Achieved sustainable long-term growth",
        "Balanced organic rankings with paid campaigns",
      ],
      icon: TrendingUp,
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Kitchen Knives - USA & Canada",
      niche: "Kitchen Knives & Accessories",
      market: "USA, Canada",
      service: "Account Handling",
      challenge:
        "Account health challenges in Canada, low sales performance, no PPC strategy, and poor creative & design assets.",
      solution:
        "Restored account health through documentation and Amazon support, boosted sales with optimized listings and promotions, created structured PPC campaigns, and improved creative assets and A+ Content.",
      results: [
        "Resolved all performance notifications",
        "Clear boost in conversions from August to September 2025",
        "Improved visibility through strategic PPC",
        "Enhanced brand presentation with better visuals",
      ],
      icon: Award,
      color: "bg-red-500",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-40 pb-20 md:pb-32">
        <HeroBackground />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl drop-shadow-lg animate-fade-in-up">
              Business Case Studies & Reports
            </h1>
            <p className="text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Analyzing challenges, strategies, and results. Real success stories from brands we've helped grow on
              Amazon.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">
              Driving E-commerce Success with Tailored Solutions
            </h2>
            <p className="mb-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              At Enest Solution, we specialize in helping brands grow and succeed on platforms like Amazon. From PPC
              management and product listing optimization to store development, competitor research, and product
              launches — we provide end-to-end e-commerce solutions.
            </p>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              By combining data-driven strategies with creative execution, we help businesses boost visibility, increase
              sales, and achieve long-term growth. On average, our clients experience reduced ad costs, higher ROI, and
              stronger brand presence in competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Explore how we've helped brands overcome challenges and achieve remarkable growth.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => {
              const Icon = study.icon
              return (
                <Card
                  key={study.id}
                  className={`border-border card-hover-lift animate-slide-in-up animation-delay-${
                    ((study.id - 1) % 2) * 200 + 200
                  }`}
                >
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`inline-flex rounded-lg ${study.color} p-3 card-icon-bounce`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{study.niche}</Badge>
                        <Badge variant="outline">{study.market}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Service: {study.service}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold text-primary">Challenge</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-primary">Solution</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-primary">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span className="text-muted-foreground leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-balance md:text-4xl">Our Track Record</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="animate-bounce-in animation-delay-100">
                <div className="mb-2 text-4xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Average ACOS Reduction</div>
              </div>
              <div className="animate-bounce-in animation-delay-300">
                <div className="mb-2 text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="animate-bounce-in animation-delay-500">
                <div className="mb-2 text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="animate-bounce-in animation-delay-700">
                <div className="mb-2 text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Dedicated Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16 text-white md:py-20 relative overflow-hidden">
        <HeroBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg">
            Ready to Write Your Success Story?
          </h2>
          <p className="mb-8 text-lg text-white/95 text-pretty drop-shadow">
            Let's discuss how we can help you achieve similar results for your Amazon business.
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
