/**
 * About.jsx — About Us Section
 * 
 * Professional section stating Aetech Software LLC's mission.
 * Highlights the AI Expert/Developer leadership and high-tech standards.
 * Uses semantic <section> and proper heading hierarchy (<h2>).
 */
import { Brain, Shield, Zap, Globe } from 'lucide-react'

/** Core pillars displayed as feature cards */
const pillars = [
  {
    icon: Brain,
    title: 'AI-First Leadership',
    description:
      'Founded and led by an AI expert and developer, ensuring cutting-edge technical standards across every venture.',
  },
  {
    icon: Globe,
    title: 'Global Commerce',
    description:
      'Operating scalable digital retail operations across international markets with data-driven precision.',
  },
  {
    icon: Zap,
    title: 'Rapid Innovation',
    description:
      'Leveraging modern tech stacks and agile methodologies to move from concept to production at startup speed.',
  },
  {
    icon: Shield,
    title: 'Enterprise Standards',
    description:
      'Building every product and platform with security, reliability, and scalability as non-negotiable foundations.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      {/* Section divider */}
      <div className="section-divider mb-24 sm:mb-32" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 reveal">
          <p className="text-brand-400 font-semibold text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            A Venture Hub Built by an{' '}
            <span className="text-gradient">AI Expert</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Aetech Software LLC is a US-based technology company that operates
            at the intersection of digital commerce and artificial intelligence.
            We build, scale, and invest in high-performance digital ventures —
            combining deep AI expertise with proven e-commerce execution.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {pillars.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 mb-5 group-hover:bg-brand-500/20 transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-brand-400"
                  aria-hidden="true"
                />
              </div>

              {/* H3 — Under the About <h2> */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
