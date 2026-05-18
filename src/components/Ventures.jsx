/**
 * Ventures.jsx — Our Ventures Section (Grid Layout)
 * 
 * Data-driven grid — add new ventures by appending to the array.
 * Uses semantic <article> tags for each venture card.
 */
import { ShoppingCart, Cpu, ArrowUpRight, Clock } from 'lucide-react'

const ventures = [
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    status: 'active',
    statusLabel: 'Active',
    title: 'Global E-Commerce Operations',
    description:
      'Powering digital retail across international markets with data-driven product sourcing, optimized supply chains, and customer-centric fulfillment.',
    highlights: [
      'Multi-platform digital retail',
      'Data-driven product strategy',
      'Global fulfillment & logistics',
      'Performance marketing & analytics',
    ],
    ctaLabel: 'Learn More',
    ctaHref: '#contact',
  },
  {
    id: 'ai-software',
    icon: Cpu,
    status: 'coming-soon',
    statusLabel: 'In Development',
    title: 'AI & Software Solutions',
    description:
      'Next-generation SaaS products and AI-driven tools. From intelligent automation to custom ML pipelines — engineered for real-world impact.',
    highlights: [
      'SaaS product development',
      'Machine learning & NLP',
      'Intelligent automation tools',
      'Custom AI consulting',
    ],
    ctaLabel: 'Coming Soon',
    ctaHref: null,
  },
]

const badgeStyles = {
  active: 'border-green-500/30 bg-green-500/10 text-green-400',
  'coming-soon': 'border-amber-500/30 bg-amber-500/10 text-amber-400',
}

export default function Ventures() {
  return (
    <section id="ventures" className="relative py-24 sm:py-32" aria-labelledby="ventures-heading">
      <div className="section-divider mb-24 sm:mb-32" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 reveal">
          <p className="text-brand-400 font-semibold text-sm tracking-widest uppercase mb-4">Our Portfolio</p>
          <h2 id="ventures-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ventures We <span className="text-gradient">Build &amp; Scale</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From active commerce engines to emerging AI platforms — each venture is built with technical excellence and sustainable growth.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 reveal">
          {ventures.map((v) => <VentureCard key={v.id} venture={v} />)}
        </div>
      </div>
    </section>
  )
}

function VentureCard({ venture }) {
  const { id, icon: Icon, status, statusLabel, title, description, highlights, ctaLabel, ctaHref } = venture
  const isActive = status === 'active'

  return (
    <article
      className={`glass-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden ${isActive ? 'animate-pulse-glow' : ''}`}
      aria-label={`${title} — ${statusLabel}`}
      id={`venture-${id}`}
    >
      <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-[0.04] ${isActive ? 'bg-gradient-to-bl from-green-400 to-brand-500' : 'bg-gradient-to-bl from-amber-400 to-brand-500'}`} aria-hidden="true" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20">
            <Icon size={26} className="text-brand-400" aria-hidden="true" />
          </div>
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeStyles[status]}`}>
            {isActive ? <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" /> : <Clock size={12} aria-hidden="true" />}
            {statusLabel}
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">{description}</p>
        <ul className="space-y-2.5 mb-8" aria-label={`${title} key features`}>
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
              <span className="w-1 h-1 rounded-full bg-brand-400 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        {ctaHref ? (
          <a href={ctaHref} className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm font-semibold" id={`venture-${id}-cta`}>
            {ctaLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-700 text-gray-500 text-sm font-semibold cursor-default" id={`venture-${id}-cta`}>
            <Clock size={14} aria-hidden="true" /> {ctaLabel}
          </span>
        )}
      </div>
    </article>
  )
}
