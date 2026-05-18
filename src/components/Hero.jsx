/**
 * Hero.jsx — Hero / Landing Section
 * 
 * Full-viewport hero section establishing Aetech Software LLC
 * as a modern digital venture hub. Features animated gradient
 * background, radial glow effect, and dual CTA buttons.
 * 
 * SEO: Contains the single <h1> for the page.
 */
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center animated-gradient-bg grid-pattern overflow-hidden"
      aria-label="Hero — Aetech Software LLC introduction"
    >
      {/* Radial glow behind headline */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Decorative floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-up">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs sm:text-sm font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
          US-Based Digital Venture Hub
        </div>

        {/* H1 — Primary heading (only one per page) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Bridging Commerce</span>
          <br />
          <span className="text-gradient">& Technology</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
          Aetech Software LLC is a modern digital venture hub powering global
          e-commerce operations today — and building the AI-driven software
          solutions of tomorrow.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ventures"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base"
            id="hero-cta-primary"
          >
            Explore Our Ventures
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#about"
            className="btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-gray-300 font-semibold text-sm sm:text-base"
            id="hero-cta-secondary"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown size={24} className="text-gray-500" />
      </div>
    </section>
  )
}
