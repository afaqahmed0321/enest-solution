import Link from "next/link"
import { ArrowRight, CheckCircle2, TrendingUp, Users, Award, Globe, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FAQSection } from "@/components/faq-section"
import { HeroBackground } from "@/components/hero-background"

export default function HomePage() {
  const achievements = [
    { label: "Client Satisfaction Rate", value: "95%" },
    { label: "Average ACOS Reduction", value: "30%" },
    { label: "Countries Served", value: "5+" },
    { label: "Full-Service Partner", value: "100%" },
  ]

  const services = [
    {
      title: "Account Setup & Launch",
      description: "Complete Amazon account registration, Brand Registry, and marketplace expansion setup.",
      icon: Globe,
    },
    {
      title: "Product Research & Launch",
      description: "In-depth product research, competitor analysis, and strategic launch campaigns.",
      icon: TrendingUp,
    },
    {
      title: "Amazon PPC & Advertising",
      description: "Sponsored Products, Brands & Display campaigns with optimized ACOS and TACOS tracking.",
      icon: Award,
    },
    {
      title: "Listing Optimization",
      description: "Keyword-optimized content, A+ Content design, and high-converting product images.",
      icon: CheckCircle2,
    },
    {
      title: "Brand Building & Design",
      description: "Amazon Brand Store design, premium visuals, and complete brand identity strategy.",
      icon: Users,
    },
    {
      title: "Account Management",
      description: "Full daily operations, performance tracking, and monthly KPI reports for growth.",
      icon: Sparkles,
    },
  ]

  const testimonials = [
    {
      quote:
        "From product research to launch, they managed everything so professionally. As a new Amazon seller, I really appreciated their clear communication and support.",
      author: "Sheikh Ashraf",
      role: "Amazon Seller USA",
    },
    {
      quote:
        "The team optimized everything from targeting to bidding and helped me double my sales with better ROAS. Super professional!",
      author: "Jehangir Khan Kochi",
      role: "Amazon Seller",
    },
    {
      quote:
        "The image optimization done by Enest Solution is excellent. The images now look more attractive, clean, and customer-friendly.",
      author: "Amazon UK Seller",
      role: "Knives Category",
    },
  ]

  const faqs = [
    {
      question: "What services does Enest Solution provide?",
      answer:
        "We offer complete Amazon seller support — from account setup, product research, and listing optimization to PPC advertising, brand management, and account health maintenance.\n\nOur goal is to help sellers grow profitably while staying fully compliant with Amazon policies.",
    },
    {
      question: "Can you help me set up a new Amazon Seller account or company?",
      answer:
        "Yes ✅\n\nWe assist new sellers with company registration, Amazon Seller Central account creation, and Brand Registry setup.\n\nWhether you're launching in the USA, UK, or UAE marketplace, we'll guide you through every step to ensure your account is verified and ready to sell.",
    },
    {
      question: "Do you only work with existing Amazon sellers?",
      answer:
        "No — we work with both new and established sellers.\n\nIf you're new, we'll help you with research, setup, and launch.\nIf you're already selling, we can optimize your listings, scale ads, and improve profitability.",
    },
    {
      question: "How do you charge for your services?",
      answer:
        "Our pricing is flexible and transparent based on the type of service.\n\nFor example:\n• Monthly retainers for PPC or account management\n• One-time packages for setup or product launches\n• Custom pricing for full-service Amazon management\n\nWe also offer free initial audits before recommending any plan.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "It depends on your current account status and goals.\n\n• For PPC optimization: visible results usually appear in 2–4 weeks\n• For new product launches: sales traction typically builds within 4–8 weeks\n\nWe provide weekly and monthly reports so you can track progress.",
    },
    {
      question: "Which Amazon marketplaces do you work with?",
      answer:
        "We manage accounts in Amazon US, UK, UAE, Canada, Germany, and other EU marketplaces.\n\nWe also help sellers expand internationally with translation and compliance support.",
    },
    {
      question: "Can you recover suspended accounts or listings?",
      answer:
        "Yes — our specialists can help with Amazon account or listing reinstatement.\n\nWe prepare a Plan of Action (POA), communicate with Amazon support, and guide you through every step to restore selling privileges.",
    },
    {
      question: "What makes Enest Solution different from other agencies?",
      answer:
        "• We combine data-driven strategy + creative execution\n• 100% transparent communication & reporting\n• No long-term contracts — you stay because of results, not commitment\n• Dedicated account managers for every client",
    },
    {
      question: "How can I get started with Enest Solution?",
      answer:
        'It\'s simple:\n\n1. Click on "Get Your Free Growth Audit" or "Contact Us"\n2. Fill out the short form\n3. Our team will review your Amazon account and schedule a consultation within 24 hours',
    },
    {
      question: "Can I choose only one service (like PPC or Listing Optimization)?",
      answer:
        "Absolutely.\n\nYou can start with any single service or go for a complete management package — whatever fits your goals and budget.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is our top priority.\n\nIf you're not happy with our results or support, you can cancel anytime — no lock-in contracts or hidden fees.",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden gradient-primary text-white -mt-24 pt-44">
        <HeroBackground />

        <div className="container relative mx-auto px-4 pb-24 md:pb-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm animate-scale-in">
              <Sparkles className="h-4 w-4" />
              <span>Trusted by 100+ Amazon Sellers</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl drop-shadow-lg animate-fade-in-up">
              From Strategy to Sales - We Power Your Amazon Growth
            </h1>
            <p className="mb-8 text-lg text-white/95 text-pretty md:text-xl leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
              Enest Solution isn't just another Amazon agency — we're your dedicated growth partner. Founded in 2023, we
              help sellers build strong, scalable Amazon businesses through smart strategy, precise execution, and
              transparent reporting.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-lg"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-gradient-to-br from-muted/30 via-background to-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`group text-center animate-bounce-in animation-delay-${(index + 1) * 100}`}>
                <div className="mb-3 text-4xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent md:text-5xl transition-transform group-hover:scale-110 duration-300">
                  {achievement.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">About Enest Solution</h2>
            <p className="mb-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              We work with data, creativity, and experience — not guesswork — to turn your brand into a marketplace
              leader. Our mission is to help sellers build strong, scalable Amazon businesses through smart strategy,
              precise execution, and transparent reporting.
            </p>
            <p className="mb-8 text-lg text-muted-foreground text-pretty leading-relaxed">
              Trusted by brands in 5+ countries, we're your full-service Amazon partner for advertising, optimization,
              and brand management.
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary-soft text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-muted/20 via-background to-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Our Amazon Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Comprehensive solutions to help you succeed on Amazon, from setup to scaling.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`card-shine card-hover-lift border-2 border-border/50 bg-card shadow-lg animate-slide-in-up animation-delay-${
                    (index % 3) * 200 + 200
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl gradient-accent p-3 shadow-md card-icon-bounce">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary-soft text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Real results from real Amazon sellers who trust Enest Solution.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`border-2 border-border/50 bg-gradient-to-br from-card to-muted/20 shadow-lg card-hover-lift animate-slide-in-up animation-delay-${
                  (index % 3) * 200 + 200
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/5 shadow-md bg-transparent"
            >
              <Link href="/testimonials">
                Read More Testimonials
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-muted/20 via-background to-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Get answers to common questions about our services and how we can help your Amazon business.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQSection items={faqs} />
          </div>
        </div>
      </section>

      <section className="gradient-primary py-20 text-white md:py-24 relative overflow-hidden -mt-24 pt-28">
        <HeroBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-balance md:text-4xl drop-shadow-lg animate-fade-in-up">
            Ready to Scale Your Amazon Business?
          </h2>
          <p className="mb-8 text-lg text-white/95 text-pretty leading-relaxed drop-shadow animate-fade-in-up animation-delay-200">
            Get a free growth audit and discover how we can help you achieve your goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 animate-fade-in-up animation-delay-400"
          >
            <Link href="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
