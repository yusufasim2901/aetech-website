/**
 * Footer.jsx — Professional Business Footer
 * 
 * Includes contact email, GitHub link, copyright, and back-to-top.
 * Semantic <footer> with proper ARIA labels.
 */
import { Mail, ArrowUp } from 'lucide-react'

/**
 * GitHub SVG Icon — Lucide no longer ships brand icons.
 * Using the official GitHub mark as an inline SVG.
 */
function GithubIcon({ size = 24, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

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
              <GithubIcon size={20} />
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
