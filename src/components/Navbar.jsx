/**
 * Navbar.jsx — Primary Navigation Component
 * 
 * Sticky navigation bar with glassmorphism blur effect.
 * Includes responsive mobile menu, smooth-scroll anchor links,
 * and proper ARIA labeling for accessibility.
 */
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position for navbar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#ventures', label: 'Ventures' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        isScrolled
          ? 'bg-surface-950/80 border-b border-brand-900/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* ── Logo / Brand ── */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="Aetech Software LLC — Home"
            id="nav-logo"
          >
            {/* Logo mark — gradient square with monogram */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-extrabold text-white text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Aetech<span className="text-brand-400">.</span>
            </span>
          </a>

          {/* ── Desktop Navigation Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                id={`nav-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#ventures"
              className="ml-4 btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
              id="nav-cta"
            >
              Explore Ventures
            </a>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            id="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Navigation Drawer ── */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
                id={`mobile-nav-${label.toLowerCase()}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#ventures"
              className="mt-2 btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-white text-center"
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
              id="mobile-nav-cta"
            >
              Explore Ventures
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
