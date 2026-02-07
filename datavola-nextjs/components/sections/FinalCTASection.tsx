'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
      
      <Container>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {copy.finalCta.title}
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            {copy.finalCta.description}
          </p>
          <a
            href={copy.finalCta.cta.href}
            className="group inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-lg lg:text-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {copy.finalCta.cta.label}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}
