'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { analyzeDigitalPresence } from '@/lib/api/analysis'
import type { AnalysisRequest } from '@/types/analysis'

const SECTORS = [
  'General',
  'Retail',
  'Tecnología',
  'Servicios',
  'Manufactura',
  'Salud',
  'Educación',
  'Finanzas',
  'Turismo',
  'Alimentación',
]

const COUNTRIES = [
  'España',
  'Francia',
  'Portugal',
  'Italia',
  'Alemania',
  'Reino Unido',
  'México',
  'Argentina',
  'Colombia',
  'Chile',
]

export function AnalysisForm() {
  const router = useRouter()
  const [empresa, setEmpresa] = useState('')
  const [sector, setSector] = useState('General')
  const [pais, setPais] = useState('España')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!empresa.trim()) {
      setError('Por favor, ingresa el nombre de la empresa')
      return
    }

    setLoading(true)

    try {
      const request: AnalysisRequest = {
        empresa: empresa.trim(),
        sector: sector || 'General',
        pais: pais || 'España',
      }

      const result = await analyzeDigitalPresence(request)

      // Guardar resultados en sessionStorage para la página de resultados
      sessionStorage.setItem('analysisResult', JSON.stringify(result))

      // Redirigir a la página de resultados
      router.push('/resultados')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Error al analizar la presencia digital. Por favor, intenta de nuevo.'
      )
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Análisis de Presencia Digital
          </h1>
          <p className="text-lg text-gray-600">
            Descubre cómo está tu empresa en internet y redes sociales
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo Empresa */}
          <div>
            <label
              htmlFor="empresa"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nombre de la empresa <span className="text-red-500">*</span>
            </label>
            <input
              id="empresa"
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              required
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Ej: Mercadona, Apple, etc."
            />
          </div>

          {/* Campo Sector */}
          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Sector
            </label>
            <select
              id="sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              {SECTORS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Campo País */}
          <div>
            <label
              htmlFor="pais"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              País
            </label>
            <select
              id="pais"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !empresa.trim()}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
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
                <span>Analizando...</span>
              </>
            ) : (
              'Analizar Presencia Digital'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
