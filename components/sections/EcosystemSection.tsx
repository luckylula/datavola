'use client'

import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'
import Image from 'next/image'
import { useState } from 'react'

// Logo component that tries local first, then falls back to CDN
function LogoIcon({ icon }: { icon: { name: string; logoUrl: string; localPath: string } }) {
  const [imgSrc, setImgSrc] = useState(icon.localPath)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={hasError ? icon.logoUrl : imgSrc}
        alt={icon.name}
        onError={() => {
          if (!hasError) {
            setHasError(true)
            setImgSrc(icon.logoUrl)
          }
        }}
        className="w-auto h-auto max-w-[55px] max-h-[55px] object-contain group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  )
}

const orbitalRings = [
  {
    name: 'inner',
    radius: 180,
    icons: [
      { 
        name: 'Excel', 
        logoUrl: 'https://cdn.simpleicons.org/microsoftexcel/217346',
        color: '#217346',
        localPath: '/images/logos/excel.png'
      },
      { 
        name: 'Word', 
        logoUrl: 'https://cdn.simpleicons.org/microsoftword/2B579A',
        color: '#2B579A',
        localPath: '/images/logos/word.png'
      },
      { 
        name: 'Gmail', 
        logoUrl: 'https://cdn.simpleicons.org/gmail/EA4335',
        color: '#EA4335',
        localPath: '/images/logos/gmail.png'
      },
      { 
        name: 'YouTube', 
        logoUrl: 'https://cdn.simpleicons.org/youtube/FF0000',
        color: '#FF0000',
        localPath: '/images/logos/youtube.png'
      },
      { 
        name: 'WhatsApp', 
        logoUrl: 'https://cdn.simpleicons.org/whatsapp/25D366',
        color: '#25D366',
        localPath: '/images/logos/whatsapp.png'
      },
    ],
    animationDuration: 20,
    direction: 'normal',
  },
  {
    name: 'outer',
    radius: 300,
    icons: [
      { 
        name: 'Instagram', 
        logoUrl: 'https://cdn.simpleicons.org/instagram/E4405F',
        color: '#E4405F',
        localPath: '/images/logos/instagram.png'
      },
      { 
        name: 'Facebook', 
        logoUrl: 'https://cdn.simpleicons.org/facebook/1877F2',
        color: '#1877F2',
        localPath: '/images/logos/facebook.png'
      },
      { 
        name: 'Slack', 
        logoUrl: 'https://cdn.simpleicons.org/slack/4A154B',
        color: '#4A154B',
        localPath: '/images/logos/slack.png'
      },
      { 
        name: 'n8n', 
        logoUrl: 'https://cdn.simpleicons.org/n8n/FF6D5A',
        color: '#FF6D5A',
        localPath: '/images/logos/n8n.png'
      },
      { 
        name: 'OpenAI', 
        logoUrl: 'https://cdn.simpleicons.org/openai/10A37F',
        color: '#10A37F',
        localPath: '/images/logos/openai.png'
      },
      { 
        name: 'HubSpot', 
        logoUrl: 'https://cdn.simpleicons.org/hubspot/FF7A59',
        color: '#FF7A59',
        localPath: '/images/logos/hubspot.png'
      },
      { 
        name: 'Salesforce', 
        logoUrl: 'https://cdn.simpleicons.org/salesforce/00A1E0',
        color: '#00A1E0',
        localPath: '/images/logos/salesforce.png'
      },
    ],
    animationDuration: 30,
    direction: 'reverse',
  },
]

export function EcosystemSection() {
  return (
    <section id="servicios" className="py-24 px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {copy.ecosystem.title}
          </h2>
          {copy.ecosystem.description && (
            <p className="text-xl lg:text-2xl text-[#4A5568] max-w-[600px] mx-auto leading-relaxed">
              {copy.ecosystem.description}
            </p>
          )}
        </div>

        <div className="max-w-[900px] mx-auto relative h-[750px] md:h-[700px] flex items-center justify-center">
          {/* Central Logo - DataVola as the Sun */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF007A] via-[#FF8C00] to-[#FF007A] rounded-full blur-2xl opacity-40 animate-pulse" style={{ width: '200px', height: '200px', margin: '-30px' }} />
              
              {/* Central circle - perfectly round and larger */}
              <div className="relative w-[160px] h-[160px] rounded-full flex flex-col items-center justify-center gap-2 shadow-2xl" style={{ aspectRatio: '1 / 1' }}>
                <Image
                  src="/images/logocirculo.png"
                  alt="DataVola"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] object-contain rounded-full drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Orbital Rings with visible paths */}
          {orbitalRings.map((ring, ringIndex) => (
            <div key={ring.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Orbital path ring */}
              <div
                className={`absolute border-2 border-dashed border-gray-300/40 rounded-full orbital-ring-${ring.name}`}
                style={{
                  width: `${ring.radius * 2}px`,
                  height: `${ring.radius * 2}px`,
                  marginLeft: `-${ring.radius}px`,
                  marginTop: `-${ring.radius}px`,
                }}
              />
              
              {/* Rotating container */}
              <div
                className={`absolute orbital-container-${ring.name}`}
                style={{
                  width: `${ring.radius * 2}px`,
                  height: `${ring.radius * 2}px`,
                  marginLeft: `-${ring.radius}px`,
                  marginTop: `-${ring.radius}px`,
                  animation: `rotateOrbit${ring.direction === 'reverse' ? 'Reverse' : ''} ${ring.animationDuration}s linear infinite`,
                }}
              >
                {ring.icons.map((icon, iconIndex) => {
                  const angle = (iconIndex * 360) / ring.icons.length
                  const radian = (angle * Math.PI) / 180
                  const x = Math.cos(radian) * ring.radius
                  const y = Math.sin(radian) * ring.radius

                  return (
                    <div
                      key={`${ring.name}-${iconIndex}`}
                      className="absolute w-[90px] h-[90px] flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `counterRotate${ring.direction === 'reverse' ? 'Reverse' : ''} ${ring.animationDuration}s linear infinite`,
                      }}
                    >
                      <div 
                        className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer hover:scale-115 hover:shadow-2xl border-2 border-gray-200 hover:border-[#FF007A]/50 group p-3"
                        style={{
                          background: `linear-gradient(135deg, ${icon.color}15, white)`,
                        }}
                      >
                        <LogoIcon icon={icon} />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                        <div className="bg-gray-900 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap">
                          {icon.name}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateOrbitReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
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

        @keyframes counterRotateReverse {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Ensure orbital containers are visible */
        .orbital-container-inner,
        .orbital-container-outer {
          transform-origin: center center;
        }
      `}</style>
    </section>
  )
}
