'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

type LottiePlayerProps = {
  /** Path to the Lottie JSON file (e.g. "/animations/test-animation.json") */
  src: string
  /** Whether to loop the animation */
  loop?: boolean
  /** Optional class name for the wrapper */
  className?: string
  /** Optional inline style for the wrapper */
  style?: React.CSSProperties
}

export function LottiePlayer({ src, loop = true, className, style }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error)
  }, [src])

  if (!animationData) {
    return (
      <div
        className={className}
        style={{ ...style, minHeight: 100, background: 'transparent' }}
        aria-hidden
      />
    )
  }

  return (
    <div className={className} style={style} aria-hidden>
      <Lottie animationData={animationData} loop={loop} />
    </div>
  )
}
