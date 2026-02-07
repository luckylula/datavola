'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useWidgetAnimations } from '@/components/hooks/useWidgetAnimations'
import { ProcessStepperSection } from './ProcessStepperSection'
import { ProblemsFlipCardsSection } from './ProblemsFlipCardsSection'

export function HeroSection() {
  const [carouselImages, setCarouselImages] = useState<string[]>([])
  const carouselTrackRef = useRef<HTMLDivElement>(null)
  useWidgetAnimations()

  // Load carousel images
  useEffect(() => {
    fetch('/images-list.json')
      .then((res) => res.json())
      .then((data) => {
        const images = data.images || []
        setCarouselImages([...images, ...images]) // Duplicate for infinite scroll
      })
      .catch(() => {
        // Fallback images
        const fallback = [
          '1.png', '2.png', '3.png', '4.png',
          'anim1.jpg', 'anim2.jpg', 'anim3.jpg', 'anim4.jpg', 'anim5.jpg', 'anim6.jpg',
        ]
        setCarouselImages([...fallback, ...fallback])
      })
  }, [])

  return (
    <section id="inicio" className="relative mt-20 min-h-screen bg-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[400px] max-h-[50vh] bg-gradient-to-br from-[#8E44AD] via-[#FF007A] via-[#00D4FF] to-[#FFD700] clip-path-polygon" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />

      {/* Full-width centered title */}
      <div className="relative z-10 w-full px-8 pt-12">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white drop-shadow-lg text-center">
          <span className="block">Libérez votre temps en automatisant</span>
          <span className="block">les tâches répétitives</span>
        </h1>
      </div>

      <Container>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pt-12 grid lg:grid-cols-2 gap-16 items-start min-h-[400px]">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8 text-left pt-12">
            <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed">
              Vous n'avez pas besoin de maîtriser la technologie.
            </p>
          </div>

          {/* Right: Dashboard Panel */}
          <div className="flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-0 w-full max-w-[600px] overflow-hidden">
              <video
                className="w-full h-auto block object-contain"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/videomoviles.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>

        {/* Problems Flip Cards Section - Just above Process Stepper */}
        <div className="w-full">
          <ProblemsFlipCardsSection />
        </div>

        {/* Video - Full width between 6 cards and 4 cards */}
        <div className="relative z-10 w-full px-8 pt-20 pb-12">
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full h-auto block object-contain"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/videogeneral.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>

        {/* Text between video and 4 cards */}
        <div className="relative z-10 w-full px-8 pb-12">
          <div className="max-w-[1000px] mx-auto">
            <p className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed text-center">
              Vous continuez à utiliser vos outils habituels,
              pendant que nous automatisons ce qui vous fait perdre du temps
              au quotidien, des tâches nécessaires,
              mais qui n'apportent pas de vraie valeur à votre croissance.
            </p>
          </div>
        </div>

        {/* Process Stepper Section - Full width below hero content */}
        <div className="w-full pt-8">
          <ProcessStepperSection />
        </div>

        {/* Problems Section - Full Width */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pt-12">
          <div className="w-full mt-12 pt-12 border-t border-black/5">
            <div className="max-w-full">
              <div className="mb-8 text-left">
                <h2 className="text-3xl font-bold mb-2">Identifiez vos défis quotidiens</h2>
                <p className="text-base max-w-full">
                  Découvrez comment DataVola transforme vos problèmes en solutions automatisées.
                </p>
              </div>

              {/* Problems Widget */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl overflow-hidden">
                {/* macOS Window Header */}
                <div className="bg-white/50 backdrop-blur-md px-4 py-3 flex items-center gap-4 border-b border-black/5">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28ca42]" />
                  </div>
                  <div className="text-sm text-[#4A5568] font-medium flex-1 text-center">
                    DataVola - Identification des Problèmes
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                  {/* Left: Messages */}
                  <div className="p-8 border-r border-black/5 bg-white/30">
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
                    </div>
                    <div className="flex items-center justify-center min-h-[300px]">
                      <div className="bg-white/90 rounded-xl p-6 shadow-lg max-w-[400px] w-full flex gap-4 border border-black/5">
                        <div className="text-3xl flex-shrink-0">💬</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-sm text-[#25D366]">WhatsApp</span>
                            <span className="text-xs text-[#718096]" id="problems-message-time">14:32</span>
                          </div>
                          <p className="text-gray-900 m-0 leading-relaxed" id="problems-input-text">
                            Nouveau message reçu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Problems Process */}
                  <div className="p-8 bg-white/20">
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900">Problèmes identifiés</h3>
                    </div>
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                      {[
                        { 
                          title: 'Je réponds toujours aux mêmes questions',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                          )
                        },
                        { 
                          title: 'Je perds du temps avec des tâches répétitives',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="2" width="6" height="20" rx="2" />
                              <path d="M17 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2" />
                              <path d="M5 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2" />
                              <line x1="12" y1="6" x2="12" y2="18" />
                            </svg>
                          )
                        },
                        { 
                          title: 'On m\'écrit sur WhatsApp ou Instagram à toute heure',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                              <line x1="8" y1="21" x2="16" y2="21" />
                              <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                          )
                        },
                        { 
                          title: 'Je devrais publier sur les réseaux, mais je ne le fais pas',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                              <line x1="8" y1="21" x2="16" y2="21" />
                              <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                          )
                        },
                        { 
                          title: 'Mon site web n\'explique pas bien ce que je fais (ou je n\'ai pas de site)',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                              <path d="M7 7h10M7 12h10M7 17h5" />
                            </svg>
                          )
                        },
                        { 
                          title: 'Tout passe par moi et je suis toujours débordé(e)',
                          icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          )
                        },
                      ].map((problem, index) => (
                        <div
                          key={index}
                          className="flex gap-6 p-6 rounded-xl bg-white/50 border border-black/5 transition-all opacity-50 translate-x-[-10px] process-step-problem"
                          data-step={index + 1}
                        >
                          <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 border-2 border-black/5 text-[#718096]">
                            {problem.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-base font-medium text-gray-900 m-0 leading-relaxed">
                              {problem.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 py-16 bg-white overflow-hidden">
          <div className="w-full overflow-hidden relative">
            <div
              ref={carouselTrackRef}
              className="flex gap-8 animate-carousel-scroll"
              style={{
                animation: 'carousel-scroll 40s linear infinite',
              }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[380px] h-[280px] rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all cursor-pointer"
                  style={{
                    transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)',
                    marginTop: index % 2 === 0 ? '0' : '1rem',
                  }}
                >
                  <Image
                    src={`/images/${image}`}
                    alt={image.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')}
                    width={380}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Widget Section */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 py-12 bg-white">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl overflow-hidden">
            {/* macOS Window Header */}
            <div className="bg-white/50 backdrop-blur-md px-4 py-3 flex items-center gap-4 border-b border-black/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28ca42]" />
              </div>
              <div className="text-sm text-[#4A5568] font-medium flex-1 text-center">
                DataVola - Automatisation IA
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left: Input */}
              <div className="p-8 border-r border-black/5 bg-white/30">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Entrée</h3>
                </div>
                <div className="flex items-center justify-center min-h-[300px]">
                  <div className="bg-white/90 rounded-xl p-6 shadow-lg max-w-[400px] w-full flex gap-4 border border-black/5">
                    <div className="text-3xl flex-shrink-0">💬</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm text-[#25D366]">WhatsApp</span>
                        <span className="text-xs text-[#718096]">14:32</span>
                      </div>
                      <p className="text-gray-900 m-0 leading-relaxed" id="input-text">
                        Un nouveau lead arrive via WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Process */}
              <div className="p-8 bg-white/20">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Processus</h3>
                </div>
                <div className="space-y-4 relative py-4">
                  {[
                    { icon: '✓', title: 'Analyse du sentiment', desc: 'Évaluation de l\'intention du client' },
                    { icon: '🗄️', title: 'Consultation de la base de données', desc: 'Recherche d\'informations client' },
                    { icon: '🤖', title: 'Génération de réponse IA', desc: 'Création d\'une réponse personnalisée' },
                    { icon: '💬', title: 'Notification Slack envoyée', desc: 'L\'équipe a été notifiée' },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-6 p-6 rounded-xl bg-white/50 border border-black/5 transition-all opacity-50 translate-x-[-10px] process-step"
                      data-step={index + 1}
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0 border-2 border-black/5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-[#718096]">
                          <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 m-0 mb-2">{step.title}</h4>
                        <p className="text-sm text-[#718096] m-0 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
