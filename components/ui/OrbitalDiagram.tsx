'use client'

import { useEffect, useRef } from 'react'

interface OrbitalNode {
  id: string
  icon: string
  label: string
  angle: number
  radius: number
}

const nodes: OrbitalNode[] = [
  { id: '1', icon: '📧', label: 'Gmail', angle: 0, radius: 120 },
  { id: '2', icon: '📊', label: 'Sheets', angle: 60, radius: 120 },
  { id: '3', icon: '💬', label: 'Slack', angle: 120, radius: 120 },
  { id: '4', icon: '📅', label: 'Calendar', angle: 180, radius: 120 },
  { id: '5', icon: '📱', label: 'WhatsApp', angle: 240, radius: 120 },
  { id: '6', icon: '🗄️', label: 'Database', angle: 300, radius: 120 },
]

export function OrbitalDiagram() {
  const svgRef = useRef<SVGSVGElement>(null)
  const centerX = 150
  const centerY = 150

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Clear existing paths
    const existingPaths = svg.querySelectorAll('.connection-path')
    existingPaths.forEach((path) => path.remove())

    // Create connection lines
    nodes.forEach((node) => {
      const x = centerX + Math.cos((node.angle * Math.PI) / 180) * node.radius
      const y = centerY + Math.sin((node.angle * Math.PI) / 180) * node.radius

      // Create curved path
      const midX = (centerX + x) / 2
      const midY = (centerY + y) / 2
      const perpAngle = (node.angle + 90) * (Math.PI / 180)
      const offset = 30
      const controlX = midX + Math.cos(perpAngle) * offset
      const controlY = midY + Math.sin(perpAngle) * offset

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute(
        'd',
        `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${x} ${y}`
      )
      path.setAttribute('class', 'connection-path')
      path.setAttribute('stroke', '#e5e7eb')
      path.setAttribute('stroke-width', '1.5')
      path.setAttribute('fill', 'none')
      path.setAttribute('opacity', '0.6')

      svg.appendChild(path)
    })
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        className="absolute inset-0 w-full h-full"
      >
        {/* Connection lines will be added via JavaScript */}
      </svg>

      {/* Center Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">DV</span>
        </div>
      </div>

      {/* Orbital Nodes */}
      {nodes.map((node) => {
        const x = centerX + Math.cos((node.angle * Math.PI) / 180) * node.radius
        const y = centerY + Math.sin((node.angle * Math.PI) / 180) * node.radius
        const percentageX = (x / 300) * 100
        const percentageY = (y / 300) * 100

        return (
          <div
            key={node.id}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 group"
            style={{
              left: `${percentageX}%`,
              top: `${percentageY}%`,
            }}
          >
            <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-200 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 hover:border-purple-300">
              <span className="text-2xl mb-1">{node.icon}</span>
              <span className="text-[10px] font-medium text-gray-600 text-center leading-tight">
                {node.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
