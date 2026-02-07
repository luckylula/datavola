'use client'

import { useEffect } from 'react'

/**
 * Sets up scroll-triggered animations for elements with data-widget-animate.
 * When they enter the viewport, the class "animate-in" is added (e.g. for CSS/ Tailwind).
 */
export function useWidgetAnimations() {
  useEffect(() => {
    const selector = '[data-widget-animate]'
    const elements = document.querySelectorAll(selector)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in', 'opacity-100')
            entry.target.classList.remove('opacity-0')
          }
        })
      },
      { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
    )

    elements.forEach((el) => {
      el.classList.add('opacity-0', 'transition-all', 'duration-500')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
