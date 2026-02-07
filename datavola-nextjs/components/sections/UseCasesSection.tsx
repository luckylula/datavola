'use client'

import { Container } from '@/components/layout/Container'
import { useCases } from '@/content/useCases'

export function UseCasesSection() {
  // First card is featured
  const featuredIndex = 0

  return (
    <section id="casos-uso" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cas d'usage réels
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
            Voici comment nous procédons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => {
            const isFeatured = index === featuredIndex
            
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  isFeatured
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-transparent text-white'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isFeatured ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {useCase.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 ${
                    isFeatured ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {useCase.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${
                    isFeatured
                      ? 'text-white hover:text-white/80'
                      : 'text-purple-600 hover:text-purple-700'
                  }`}
                >
                  Voir comment
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${
                      isFeatured ? 'text-white' : 'text-purple-600'
                    }`}
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
            )
          })}
        </div>
      </Container>
    </section>
  )
}
