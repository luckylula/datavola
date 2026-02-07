'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'
import Image from 'next/image'

const orbitalRings = [
  {
    name: 'inner',
    radius: 280,
    icons: [
      { name: 'n8n', icon: '🔗' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Anthropic', icon: '🤖' },
    ],
    animationDuration: 20,
  },
  {
    name: 'middle',
    radius: 420,
    icons: [
      { name: 'Slack', icon: '💬' },
      { name: 'Gmail', icon: '📧' },
      { name: 'WhatsApp', icon: '📱' },
      { name: 'Google Sheets', icon: '📊' },
    ],
    animationDuration: 30,
  },
  {
    name: 'outer',
    radius: 560,
    icons: [
      { name: 'HubSpot', icon: '📈' },
      { name: 'Salesforce', icon: '☁️' },
      { name: 'Facebook Ads', icon: '👥' },
      { name: 'YouTube', icon: '▶️' },
    ],
    animationDuration: 40,
  },
]

export function EcosystemSection() {
  return (
    <section id="servicios" className="py-24 px-8 bg-white relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {copy.ecosystem.title}
          </h2>
          <p className="text-xl lg:text-2xl text-[#4A5568] max-w-[600px] mx-auto leading-relaxed">
            {copy.ecosystem.description}
          </p>
        </div>

        <div className="max-w-[800px] mx-auto relative h-[700px] flex items-center justify-center">
          {/* Central Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
            <div className="w-[140px] h-[140px] bg-white rounded-full flex flex-col items-center justify-center gap-3 shadow-2xl">
              <Image
                src="/images/DataVola logo.png"
                alt="DataVola"
                width={100}
                height={100}
                className="max-w-[100px] max-h-[100px] w-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* Orbital Rings */}
          {orbitalRings.map((ring, ringIndex) => (
            <div
              key={ring.name}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black/8 rounded-full orbital-ring-${ring.name}`}
              style={{
                width: `${ring.radius}px`,
                height: `${ring.radius}px`,
                animation: `rotateOrbit ${ring.animationDuration}s linear infinite`,
              }}
            >
              {ring.icons.map((icon, iconIndex) => {
                const angle = (iconIndex * 360) / ring.icons.length
                const radian = (angle * Math.PI) / 180
                const x = Math.cos(radian) * (ring.radius / 2)
                const y = Math.sin(radian) * (ring.radius / 2)

                return (
                  <div
                    key={`${ring.name}-${iconIndex}`}
                    className="absolute top-1/2 left-1/2 w-[70px] h-[70px] flex items-center justify-center"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-angle}deg)`,
                      transformOrigin: '0 0',
                      animation: `counterRotate ${ring.animationDuration}s linear infinite`,
                    }}
                  >
                    <div className="w-[70px] h-[70px] bg-white/90 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer hover:scale-125 hover:shadow-2xl hover:bg-white hover:border-[#FF007A]/30">
                      <span className="text-4xl">{icon.icon}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes rotateOrbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes counterRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  )
}
