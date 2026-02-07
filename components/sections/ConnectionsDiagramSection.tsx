'use client'

import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const nodes = [
  { id: 'node1', icon: '📧', label: 'Gmail', position: { top: '10%', left: '20%' } },
  { id: 'node2', icon: '📊', label: 'Google Sheets', position: { top: '10%', right: '20%' } },
  { id: 'node3', icon: '💬', label: 'Slack', position: { top: '50%', left: '5%', transform: 'translateY(-50%)' } },
  { id: 'node4', icon: '📅', label: 'Google Calendar', position: { top: '50%', right: '5%', transform: 'translateY(-50%)' } },
  { id: 'node5', icon: '📱', label: 'WhatsApp', position: { bottom: '10%', left: '20%' } },
  { id: 'node6', icon: '🗄️', label: 'Database', position: { bottom: '10%', right: '20%' } },
]

const lineColors = [
  '#8b3a91', // Morado oscuro
  '#c2185b', // Rosa/Fucsia
  '#e91e63', // Rosa más claro
  '#ff5722', // Naranja/Rojo
  '#ff9800', // Naranja
  '#ffc107', // Amarillo
]

export function ConnectionsDiagramSection() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const drawConnections = () => {
      const svg = svgRef.current
      const center = centerRef.current
      const container = containerRef.current

      if (!svg || !center || !container) return

      svg.innerHTML = ''

      const centerRect = center.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()

      const centerX = centerRect.left + centerRect.width / 2 - containerRect.left
      const centerY = centerRect.top + centerRect.height / 2 - containerRect.top

      nodes.forEach((node, index) => {
        const nodeElement = document.getElementById(node.id)
        if (!nodeElement) return

        const nodeRect = nodeElement.getBoundingClientRect()
        const nodeX = nodeRect.left + nodeRect.width / 2 - containerRect.left
        const nodeY = nodeRect.top + nodeRect.height / 2 - containerRect.top

        const controlX = (centerX + nodeX) / 2
        const controlY = (centerY + nodeY) / 2

        const angle = Math.atan2(nodeY - centerY, nodeX - centerX)
        const perpAngle = angle + Math.PI / 2
        const offset = 50

        const cx = controlX + Math.cos(perpAngle) * offset
        const cy = controlY + Math.sin(perpAngle) * offset

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', `M ${centerX} ${centerY} Q ${cx} ${cy} ${nodeX} ${nodeY}`)
        path.setAttribute('stroke', lineColors[index])
        path.setAttribute('stroke-width', '2.5')
        path.setAttribute('fill', 'none')
        path.setAttribute('opacity', '0.7')
        path.style.animation = 'connectionPulse 3s ease-in-out infinite'
        path.style.animationDelay = `${index * 0.1}s`

        svg.appendChild(path)
      })
    }

    drawConnections()

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(drawConnections, 100)
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(drawConnections, 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      intersectionObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [])

  return (
    <section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-24 px-8 w-full relative overflow-hidden">
      <Container>
        <div ref={containerRef} className="max-w-[900px] mx-auto relative">
          <svg
            ref={svgRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
            style={{ height: '500px' }}
          />

          <div className="relative w-full" style={{ height: '500px' }}>
            {/* Center Node */}
            <div
              ref={centerRef}
              id="center"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3] w-[120px] h-[120px] bg-transparent p-0 overflow-hidden"
            >
              <Image
                src="/images/DataVola logo.png"
                alt="DataVola"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Orbital Nodes */}
            {nodes.map((node) => (
              <div
                key={node.id}
                id={node.id}
                className="absolute w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center shadow-lg transition-all cursor-pointer hover:scale-110 hover:shadow-xl z-[2]"
                style={node.position}
              >
                <div className="text-3xl mb-1">{node.icon}</div>
                <div className="text-[11px] text-[#4a5568] font-medium text-center mt-2 absolute -bottom-6 whitespace-nowrap">
                  {node.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes connectionPulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
