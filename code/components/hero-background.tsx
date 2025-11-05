"use client"

export function HeroBackground() {
  return (
    <>
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 hero-pattern animate-gradient-shift" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle - top right */}
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />

        {/* Medium circle - bottom left */}
        <div
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />

        {/* Small circle - center */}
        <div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-2xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating dots */}
        <div className="absolute top-20 left-1/4 h-3 w-3 rounded-full bg-white/20 animate-float" />
        <div
          className="absolute top-40 right-1/3 h-2 w-2 rounded-full bg-white/30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/3 h-4 w-4 rounded-full bg-accent/30 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-white/25 animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Rotating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 h-32 w-32 border border-white/10 animate-rotate-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 h-24 w-24 border border-accent/20 rotate-45 animate-rotate-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </>
  )
}
