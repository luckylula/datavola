'use client'

import { useState, useMemo } from 'react'

type Step = {
  title: string
  desc: string
}

export function ProcessStepperSection() {
  const steps: Step[] = useMemo(
    () => [
      { title: "Nous analysons", desc: "Comment vous travaillez aujourd'hui, concrètement." },
      { title: "Nous détectons", desc: "Les tâches répétitives qui vous font perdre du temps." },
      { title: "Nous automatisons", desc: "Pour que tout fonctionne automatiquement, en arrière-plan." },
      { title: "Nous simplifions", desc: "Un système clair, facile à utiliser au quotidien." },
    ],
    []
  )

  const [activeStep, setActiveStep] = useState(0)
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  // Progress from 0% to 100% across 4 steps
  const progressPct = (activeStep / (steps.length - 1)) * 100

  const handleCardClick = (index: number) => {
    setActiveStep(index)
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
    setActiveStep(index)
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
    <section className="w-full">
      <div className="w-full py-10">

        {/* Desktop layout */}
        <div className="relative hidden md:block w-full px-8">
          {/* Connector line behind the step circles */}
          <div className="absolute left-8 right-8 top-6 h-[2px] rounded bg-slate-200" />
          <div
            className="absolute left-8 top-6 h-[2px] rounded bg-indigo-500 transition-all duration-500 ease-out"
            style={{ 
              width: `calc((100% - 4rem) * ${progressPct} / 100)`,
            }}
          />

          {/* Animated dot */}
          <div
            className="absolute top-6 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-20 shadow-md"
            style={{ 
              left: `calc(2rem + (100% - 4rem) * ${progressPct} / 100)`, 
              opacity: activeStep >= 0 ? 1 : 0 
            }}
          >
            <div className="absolute inset-0 bg-indigo-500 rounded-full animate-pulse opacity-60" />
          </div>

          <div className="grid grid-cols-4 gap-8 w-full">
            {steps.map((s, i) => {
              const isActive = i === activeStep
              const isFlipped = flippedCards.has(i)
              // Alternate between gradient and white cards (like ProblemsCardsSection)
              const hasGradient = i === 0 || i === 3 // First and last have gradient
              const videoSrc = `/images/video${i + 1}.mp4`
              
              return (
                <div
                  key={s.title}
                  className="flex flex-col gap-4"
                >
                  <div
                    className="relative"
                    style={{ perspective: '1000px' }}
                  >
                  <button
                    type="button"
                    onClick={() => handleCardClick(i)}
                    onMouseEnter={() => handleCardHover(i)}
                    onMouseLeave={() => handleCardLeave(i)}
                    aria-expanded={isFlipped}
                    className={[
                      "group relative w-full h-[280px] cursor-pointer outline-none",
                      "transition-transform duration-500",
                      "preserve-3d",
                      isFlipped ? "rotate-y-180" : "",
                    ].join(" ")}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Step circle - visible on both sides */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                      <div
                        className={[
                          "flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold",
                          "transition-all duration-300",
                          isActive
                            ? hasGradient
                              ? "border-white/50 bg-white/20 text-white shadow-lg scale-110 backdrop-blur-sm"
                              : "border-indigo-400 bg-indigo-500 text-white shadow scale-110"
                            : hasGradient
                              ? "border-white/30 bg-white/10 text-white"
                              : "border-slate-300 bg-white text-slate-700",
                        ].join(" ")}
                      >
                        {i + 1}
                        {isActive && (
                          <span className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                            hasGradient ? "bg-white" : "bg-indigo-500"
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Front of card */}
                    <div
                      className={[
                        "absolute inset-0 rounded-2xl p-8 shadow-md",
                        "backface-hidden flex items-center justify-center",
                        hasGradient
                          ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
                          : "bg-white border border-black/5",
                      ].join(" ")}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                    >
                      <h3
                        className={[
                          "text-3xl lg:text-4xl font-extrabold text-center leading-tight px-2",
                          hasGradient ? "text-white" : "text-[#2d3748]",
                        ].join(" ")}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Back of card */}
                    <div
                      className={[
                        "absolute inset-0 rounded-2xl p-8 shadow-md",
                        "backface-hidden flex items-center justify-center",
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
                          "text-base lg:text-lg leading-relaxed text-center px-4",
                          hasGradient ? "text-white/95" : "text-[#4a5568]",
                        ].join(" ")}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </button>
                  </div>

                  {/* Video below card - always visible and playing */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                    <video
                      key={`desktop-${videoSrc}`}
                      className="w-full h-auto block object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${videoSrc}?t=${Date.now()}`} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile layout: horizontal scroll with snap */}
        <div className="md:hidden w-full">
          <div className="relative mb-4 px-4">
            <div className="absolute left-4 right-4 top-6 h-[2px] rounded bg-slate-200" />
            <div
              className="absolute left-4 top-6 h-[2px] rounded bg-indigo-500 transition-all duration-500 ease-out"
              style={{ 
                width: `calc((100% - 2rem) * ${progressPct} / 100)`,
              }}
            />
            {/* Animated dot for mobile */}
            <div
              className="absolute top-6 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out z-20 shadow-md"
              style={{ 
                left: `calc(1rem + (100% - 2rem) * ${progressPct} / 100)`, 
                opacity: activeStep >= 0 ? 1 : 0 
              }}
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-full animate-pulse opacity-60" />
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4">
            {steps.map((s, i) => {
              const isActive = i === activeStep
              const isFlipped = flippedCards.has(i)
              // Alternate between gradient and white cards
              const hasGradient = i === 0 || i === 3
              const videoSrc = `/images/video${i + 1}.mp4`
              
              return (
                <div
                  key={s.title}
                  className="flex flex-col gap-4"
                >
                  <div
                    className="relative flex-shrink-0 snap-center"
                    style={{ perspective: '1000px', width: '100%' }}
                  >
                  <button
                    type="button"
                    onClick={() => handleCardClick(i)}
                    aria-expanded={isFlipped}
                    className={[
                      "group relative w-full h-[280px] cursor-pointer outline-none",
                      "transition-transform duration-500",
                    ].join(" ")}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {/* Step circle */}
                    <div className="absolute -top-3 left-6 z-30">
                      <div
                        className={[
                          "flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold",
                          "transition-all duration-300",
                          isActive
                            ? hasGradient
                              ? "border-white/50 bg-white/20 text-white shadow-lg scale-110 backdrop-blur-sm"
                              : "border-indigo-400 bg-indigo-500 text-white shadow scale-110"
                            : hasGradient
                              ? "border-white/30 bg-white/10 text-white"
                              : "border-slate-300 bg-white text-slate-700",
                        ].join(" ")}
                      >
                        {i + 1}
                        {isActive && (
                          <span className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
                            hasGradient ? "bg-white" : "bg-indigo-500"
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Front of card */}
                    <div
                      className={[
                        "absolute inset-0 rounded-2xl p-8 shadow-md",
                        "backface-hidden flex items-center justify-center",
                        hasGradient
                          ? "bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white"
                          : "bg-white border border-black/5",
                      ].join(" ")}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(0deg)',
                      }}
                    >
                      <h3
                        className={[
                          "text-2xl font-extrabold text-center leading-tight px-2",
                          hasGradient ? "text-white" : "text-[#2d3748]",
                        ].join(" ")}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Back of card */}
                    <div
                      className={[
                        "absolute inset-0 rounded-2xl p-8 shadow-md",
                        "backface-hidden flex items-center justify-center",
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
                          "text-sm leading-relaxed text-center px-2",
                          hasGradient ? "text-white/95" : "text-[#4a5568]",
                        ].join(" ")}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </button>
                  </div>

                  {/* Video below card - always visible and playing */}
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                    <video
                      key={`mobile-${videoSrc}`}
                      className="w-full h-auto block object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${videoSrc}?t=${Date.now()}`} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center px-8">
          <button
            onClick={() => {
              const element = document.getElementById('casos-uso')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Voir un exemple concret
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
