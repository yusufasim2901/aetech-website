/**
 * main.jsx — Application Entry Point
 * 
 * Wraps the App in HelmetProvider for dynamic SEO tag management.
 * React 19 uses createRoot API for concurrent rendering.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
