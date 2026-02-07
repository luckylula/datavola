'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'
import { useEffect, useRef, useState } from 'react'

export function BeforeAfterSection() {
  const beforeRef = useRef<HTMLDivElement>(null)
  const afterRef = useRef<HTMLDivElement>(null)
  const [beforeVisible, setBeforeVisible] = useState(false)
  const [afterVisible, setAfterVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === beforeRef.current) {
              setBeforeVisible(true)
            } else if (entry.target === afterRef.current) {
              setAfterVisible(true)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (beforeRef.current) observer.observe(beforeRef.current)
    if (afterRef.current) observer.observe(afterRef.current)

    return () => {
      if (beforeRef.current) observer.unobserve(beforeRef.current)
      if (afterRef.current) observer.unobserve(afterRef.current)
    }
  }, [])

  // Use first 3 items from each array
  const beforeItems = copy.beforeAfter.before.slice(0, 3)
  const afterItems = copy.beforeAfter.after.slice(0, 3)

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {copy.beforeAfter.title}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
            {copy.beforeAfter.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Column */}
          <div
            ref={beforeRef}
            className={`space-y-6 transition-all duration-700 ${
              beforeVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">
                Avant
              </h3>
              <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
            </div>
            {beforeItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-base lg:text-lg pt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* After Column */}
          <div
            ref={afterRef}
            className={`space-y-6 transition-all duration-700 ${
              afterVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                Après
              </h3>
              <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
            </div>
            {afterItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-base lg:text-lg pt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
