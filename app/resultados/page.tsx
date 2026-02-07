'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/layout/Container'
import { ResultsDisplay } from '@/components/demo/ResultsDisplay'
import type { AnalysisResponse } from '@/types/analysis'

export default function ResultadosPage() {
  const router = useRouter()
  const [result, setResult] = useState<AnalysisResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Intentar obtener resultados de sessionStorage
    const storedResult = sessionStorage.getItem('analysisResult')

    if (storedResult) {
      try {
        const parsed = JSON.parse(storedResult) as AnalysisResponse
        setResult(parsed)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los resultados')
        setLoading(false)
      }
    } else {
      // Si no hay resultados, redirigir al formulario
      router.push('/demo')
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <svg
            className="animate-spin h-12 w-12 text-indigo-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-gray-600">Cargando resultados...</p>
        </div>
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'No se encontraron resultados'}
            </h2>
            <p className="text-gray-600 mb-6">
              Por favor, realiza un nuevo análisis desde el formulario.
            </p>
            <button
              onClick={() => router.push('/demo')}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Volver al formulario
            </button>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <Container>
        <ResultsDisplay data={result} />
      </Container>
    </div>
  )
}
