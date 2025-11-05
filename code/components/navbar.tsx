"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Mobile menu backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/100 backdrop-blur-lg md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav
        className={`sticky top-4 z-50 mx-4 rounded-2xl border transition-all duration-500 ${
          isOpen
            ? "border-primary/20 bg-background shadow-2xl"
            : isScrolled
              ? "border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl"
              : "border-primary/10 glass-effect shadow-lg"
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:rotate-1">
            <Image src="/logo.png" alt="Enest Solution" width={160} height={160} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link group relative text-sm font-semibold text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] transition-all duration-300 group-hover:w-full group-hover:animate-shimmer" />
              </Link>
            ))}
            <Button
              asChild
              className="gradient-primary-soft text-white shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 animate-pulse-slow"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 text-primary transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-primary/10 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:translate-x-2 animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="gradient-primary-soft text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mx-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
