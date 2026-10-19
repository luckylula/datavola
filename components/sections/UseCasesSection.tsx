'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { useCases } from '@/content/useCases'

type FlipCardProps = {
  title: string
  description: string
  index: number
  isFlipped: boolean
  hasGradient: boolean
  onCardClick: (index: number) => void
  onCardHover: (index: number) => void
  onCardLeave: (index: number) => void
}

function FlipCard({
  title,
  description,
  index,
  isFlipped,
  hasGradient,
  onCardClick,
  onCardHover,
  onCardLeave,
}: FlipCardProps) {
  return (
    <button
      type="button"
      onClick={() => onCardClick(index)}
      onMouseEnter={() => onCardHover(index)}
      onMouseLeave={() => onCardLeave(index)}
      aria-expanded={isFlipped}
      className="group relative w-full h-[280px] cursor-pointer outline-none transition-transform duration-500 preserve-3d"
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
    >
      <div
        className={[
          'absolute inset-0 rounded-2xl p-8 shadow-lg',
          'backface-hidden flex flex-col items-center justify-center',
          hasGradient
            ? 'bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white'
            : 'bg-white border border-black/5',
        ].join(' ')}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)',
        }}
      >
        <h3
          className={[
            'text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight px-2',
            hasGradient ? 'text-white' : 'text-[#2d3748]',
          ].join(' ')}
        >
          {title}
        </h3>
      </div>

      <div
        className={[
          'absolute inset-0 rounded-2xl p-8 shadow-lg',
          'backface-hidden flex flex-col items-center justify-center',
          hasGradient
            ? 'bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white'
            : 'bg-white border border-black/5',
        ].join(' ')}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <p
          className={[
            'text-base md:text-lg leading-relaxed text-center px-4',
            hasGradient ? 'text-white/95' : 'text-[#4a5568]',
          ].join(' ')}
        >
          {description}
        </p>
      </div>
    </button>
  )
}

export function UseCasesSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const handleCardHover = (index: number) => {
    setFlippedCards((prev) => new Set(prev).add(index))
  }

  const handleCardLeave = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev)
      next.delete(index)
      return next
    })
  }

  // Center column (top + bottom): indices 1 and 4 in a 3-column grid
  const isCenterCard = (index: number) => index % 3 === 1

  return (
    <section id="casos-uso" className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que nous pouvons créer pour vous
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative"
              style={{ perspective: '1000px', minHeight: '280px' }}
            >
              <FlipCard
                title={useCase.title}
                description={useCase.description}
                index={index}
                isFlipped={flippedCards.has(index)}
                hasGradient={isCenterCard(index)}
                onCardClick={handleCardClick}
                onCardHover={handleCardHover}
                onCardLeave={handleCardLeave}
              />
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
      `}</style>
    </section>
  )
}
