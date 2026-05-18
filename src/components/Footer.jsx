/**
 * Footer.jsx — Professional Business Footer
 * 
 * Includes contact email, GitHub link, copyright, and back-to-top.
 * Semantic <footer> with proper ARIA labels.
 */
import { Github, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative pt-24 sm:pt-32 pb-8"
      role="contentinfo"
      aria-label="Site footer and contact information"
    >
      <div className="section-divider mb-16 sm:mb-20" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="text-center mb-16 reveal">
          <p className="text-brand-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Interested in partnering or learning more about our ventures?
            Reach out — we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:contact@aetechsoftware.com"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base"
            id="footer-email-cta"
          >
            <Mail size={18} aria-hidden="true" />
            contact@aetechsoftware.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 sm:order-1">
            &copy; {currentYear} Aetech Software LLC. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 order-1 sm:order-2">
            <a
              href="https://github.com/aetechsoftware"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Aetech Software on GitHub"
              id="footer-github"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contact@aetechsoftware.com"
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Send email to Aetech Software"
              id="footer-email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#hero"
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Back to top"
              id="footer-back-to-top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
