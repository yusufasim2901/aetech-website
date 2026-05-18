/**
 * App.jsx — Root Application Component
 * 
 * Assembles all sections into a single-page layout.
 * Uses React Helmet Async for dynamic SEO meta tag management.
 * Implements scroll-reveal animations via IntersectionObserver hook.
 */
import { Helmet } from 'react-helmet-async'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ventures from './components/Ventures'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  // Initialize scroll-triggered reveal animations
  useScrollReveal()

  return (
    <>
      {/* ================================================================
          DYNAMIC SEO TAGS — React Helmet Async
          These override the static fallbacks in index.html when JS executes.
          Update these values per-page if the site becomes multi-page.
      ================================================================ */}
      <Helmet>
        <title>Aetech Software LLC — Digital Venture Hub | Commerce &amp; AI Solutions</title>
        <meta
          name="description"
          content="Aetech Software LLC is a US-based digital venture hub bridging global e-commerce operations and next-generation AI & software solutions. Led by an AI expert and developer."
        />
        <link rel="canonical" href="https://aetechsoftware.com/" />
        <meta property="og:title" content="Aetech Software LLC — Digital Venture Hub" />
        <meta property="og:description" content="Bridging global commerce and cutting-edge AI technology." />
        <meta property="og:url" content="https://aetechsoftware.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ================================================================
          PAGE LAYOUT — Semantic HTML5 Structure
          <header> → Navbar (inside component)
          <main>   → Hero, About, Ventures
          <footer> → Footer (inside component)
      ================================================================ */}
      <Navbar />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Ventures />
      </main>

      <Footer />
    </>
  )
}
