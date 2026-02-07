'use client'

import { useState, useMemo } from 'react'

type ProblemCard = {
  front: string
  back: string
}

type CardComponentProps = {
  problem: ProblemCard
  index: number
  isFlipped: boolean
  hasGradient: boolean
  onCardClick: (index: number) => void
  onCardHover: (index: number) => void
  onCardLeave: (index: number) => void
}

function CardComponent({ problem, index, isFlipped, hasGradient, onCardClick, onCardHover, onCardLeave }: CardComponentProps) {
  return (
    <button
      type="button"
      onClick={() => onCardClick(index)}
      onMouseEnter={() => onCardHover(index)}
      onMouseLeave={() => onCardLeave(index)}
      aria-expanded={isFlipped}
      className={[
        "group relative w-full h-[280px] cursor-pointer outline-none",
        "transition-transform duration-500",
        "preserve-3d",
      ].join(" ")}
      style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
      role="button"
      tabIndex={0}
    >
      {/* Front of card */}
      <div
        className={[
          "absolute inset-0 rounded-2xl p-8 shadow-lg",
          "backface-hidden flex flex-col items-center justify-center",
          hasGradient
            ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
            : "bg-white border border-black/5",
        ].join(" ")}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)',
        }}
      >
        <p
          className={[
            "text-xl md:text-2xl font-bold text-center leading-tight px-2",
            hasGradient ? "text-white" : "text-[#2d3748]",
          ].join(" ")}
        >
          {problem.front}
        </p>
      </div>

      {/* Back of card */}
      <div
        className={[
          "absolute inset-0 rounded-2xl p-8 shadow-lg",
          "backface-hidden flex flex-col items-center justify-center",
          hasGradient
            ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
            : "bg-white border border-black/5",
        ].join(" ")}
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <p
          className={[
            "text-base md:text-lg leading-relaxed text-center px-4 whitespace-pre-line",
            hasGradient ? "text-white/95" : "text-[#4a5568]",
          ].join(" ")}
        >
          {problem.back}
        </p>
      </div>
    </button>
  )
}

export function ProblemsFlipCardsSection() {
  const problems: ProblemCard[] = [
    {
      front: "Je passe des heures chaque semaine sur des tâches répétitives qui n'apportent aucune valeur à mon entreprise.",
      back: "Des emails, des tableaux, des suivis et des petites tâches qui prennent du temps, sans réellement faire avancer votre entreprise.",
    },
    {
      front: "Vous perdez des clients parce qu'un email de suivi n'a pas été envoyé à temps",
      back: "Vous êtes occupé en permanence, mais vous manquez de temps pour travailler sur ce qui crée vraiment de la valeur.",
    },
    {
      front: "Je ne veux pas apprendre la technologie.",
      back: "Vous n'avez ni le temps ni l'envie de comprendre des outils complexes juste pour faire tourner votre activité.",
    },
    {
      front: "Je ne veux pas changer les outils que j'utilise déjà.",
      back: "Word, Excel, vos emails, vos fichiers, vos outils actuels… Ils vous conviennent.\nLe problème n'est pas l'outil, mais tout ce que vous devez encore faire manuellement autour.",
    },
    {
      front: "Mes journées disparaissent dans la gestion administrative pendant que mon activité stagne.",
      back: "Urgences, relances, oublis, petites erreurs… Tout demande de l'énergie, et rien ne fonctionne de manière fluide.",
    },
    {
      front: "Je ne veux pas un logiciel de plus.",
      back: "Un outil supplémentaire signifie souvent plus de réglages, plus de notifications et encore plus de charge mentale.",
    },
  ]

  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleCardHover = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      newSet.add(index)
      return newSet
    })
  }

  const handleCardLeave = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-[1400px] mx-auto w-full px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Est-ce que ça vous arrive ?
          </h2>
        </div>

        {/* Desktop layout: 3 columns, each with 2 cards and 1 video between them */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
          {[0, 1, 2].map((colIndex) => {
            const card1Index = colIndex * 2
            const card2Index = colIndex * 2 + 1
            const videoNum = colIndex + 1

            return (
              <div key={colIndex} className="flex flex-col gap-6">
                {/* First card - Top row: white */}
                <div className="relative" style={{ perspective: '1000px', minHeight: '280px' }}>
                  <CardComponent
                    problem={problems[card1Index]}
                    index={card1Index}
                    isFlipped={flippedCards.has(card1Index)}
                    hasGradient={false}
                    onCardClick={handleCardClick}
                    onCardHover={handleCardHover}
                    onCardLeave={handleCardLeave}
                  />
                </div>

                {/* Video between cards */}
                <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                  <video
                    className="w-full h-auto block object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={`/images/videoarriba${videoNum}.mp4`} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>

                {/* Second card - Bottom row: gradient */}
                <div className="relative" style={{ perspective: '1000px', minHeight: '280px' }}>
                  <CardComponent
                    problem={problems[card2Index]}
                    index={card2Index}
                    isFlipped={flippedCards.has(card2Index)}
                    hasGradient={true}
                    onCardClick={handleCardClick}
                    onCardHover={handleCardHover}
                    onCardLeave={handleCardLeave}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile layout: vertical stack */}
        <div className="md:hidden flex flex-col gap-6 w-full">
          {problems.map((problem, index) => {
            const isFlipped = flippedCards.has(index)
            // Top 3 (0, 1, 2) white, bottom 3 (3, 4, 5) gradient
            const hasGradient = index >= 3

            return (
              <div
                key={index}
                className="relative"
                style={{ perspective: '1000px', minHeight: '240px' }}
              >
                <button
                  type="button"
                  onClick={() => handleCardClick(index)}
                  aria-expanded={isFlipped}
                  className={[
                    "group relative w-full h-[240px] cursor-pointer outline-none",
                    "transition-transform duration-500",
                  ].join(" ")}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {/* Front of card */}
                  <div
                    className={[
                      "absolute inset-0 rounded-2xl p-6 shadow-lg",
                      "backface-hidden flex flex-col items-center justify-center",
                      hasGradient
                        ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
                        : "bg-white border border-black/5",
                    ].join(" ")}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    <p
                      className={[
                        "text-lg font-bold text-center leading-tight px-2",
                        hasGradient ? "text-white" : "text-[#2d3748]",
                      ].join(" ")}
                    >
                      {problem.front}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className={[
                      "absolute inset-0 rounded-2xl p-6 shadow-lg",
                      "backface-hidden flex flex-col items-center justify-center",
                      hasGradient
                        ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
                        : "bg-white border border-black/5",
                    ].join(" ")}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p
                      className={[
                        "text-sm leading-relaxed text-center px-2 whitespace-pre-line",
                        hasGradient ? "text-white/95" : "text-[#4a5568]",
                      ].join(" ")}
                    >
                      {problem.back}
                    </p>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>

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
