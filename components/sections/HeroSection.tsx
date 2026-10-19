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

      </Container>
    </section>
  )
}
