'use client'

import { useRouter } from 'next/navigation'
import type { AnalysisResponse } from '@/types/analysis'
import Link from 'next/link'

interface ResultsDisplayProps {
  data: AnalysisResponse
}

export function ResultsDisplay({ data }: ResultsDisplayProps) {
  const router = useRouter()

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'from-green-500 to-emerald-600'
    if (score >= 40) return 'from-yellow-500 to-orange-600'
    return 'from-red-500 to-pink-600'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'Alto'
    if (score >= 40) return 'Medio'
    return 'Bajo'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const socialIcons = {
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    facebook: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.empresa}</h1>
            <p className="text-indigo-100">
              {data.sector} • {data.pais}
            </p>
            <p className="text-sm text-indigo-200 mt-2">
              Análisis realizado el {formatDate(data.fecha_analisis)}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/demo')}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              Analizar otra empresa
            </button>
            <Link
              href="#contacto"
              className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold transition-all"
            >
              Automatizar negocio
            </Link>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Score de Visibilidad</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-gray-700">
              {data.visibilidad_score}/100
            </span>
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                data.nivel_visibilidad === 'Alto'
                  ? 'bg-green-100 text-green-800'
                  : data.nivel_visibilidad === 'Medio'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {data.nivel_visibilidad}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getScoreColor(
                data.visibilidad_score
              )} transition-all duration-1000 ease-out rounded-full flex items-center justify-end pr-2`}
              style={{ width: `${data.visibilidad_score}%` }}
            >
              <span className="text-white text-xs font-bold">
                {data.visibilidad_score}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Presencia Web */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Presencia Web</h2>
        {data.presencia_web.encontrada ? (
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Sitio web encontrado</p>
                {data.presencia_web.url && (
                  <a
                    href={data.presencia_web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline break-all"
                  >
                    {data.presencia_web.url}
                  </a>
                )}
                <p className="text-sm text-gray-600 mt-2">
                  {data.presencia_web.descripcion}
                </p>
                {data.presencia_web.urls_adicionales.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      URLs adicionales:
                    </p>
                    <ul className="space-y-1">
                      {data.presencia_web.urls_adicionales
                        .filter((url) => url !== '...')
                        .map((url, idx) => (
                          <li key={idx}>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline break-all"
                            >
                              {url}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <p className="text-red-800">No se encontró presencia web para esta empresa.</p>
          </div>
        )}
      </div>

      {/* Redes Sociales */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Redes Sociales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(data.redes_sociales).map(([platform, url]) => {
            const found = url !== 'No encontrado'
            return (
              <div
                key={platform}
                className={`p-4 rounded-xl border-2 transition-all ${
                  found
                    ? 'border-gray-200 hover:border-indigo-300 hover:shadow-md bg-gray-50'
                    : 'border-gray-100 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      found
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    {socialIcons[platform as keyof typeof socialIcons]}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 capitalize mb-1">
                      {platform}
                    </p>
                    {found ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline break-all"
                      >
                        {url}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">No encontrado</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recomendaciones</h2>
        <div className="space-y-4">
          {data.recomendaciones.map((rec, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100"
            >
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                {index + 1}
              </div>
              <p className="text-gray-800 leading-relaxed pt-1">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          ¿Quieres automatizar tu negocio?
        </h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Descubre cómo DataVola puede ayudarte a automatizar tus procesos y liberar tu
          tiempo para lo que realmente importa.
        </p>
        <Link
          href="#contacto"
          className="inline-block px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl font-semibold text-lg transition-all hover:scale-105"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  )
}
