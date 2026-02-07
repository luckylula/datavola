import type { AnalysisRequest, AnalysisResponse } from '@/types/analysis'

const API_ROUTE = '/api/analisis'
const TIMEOUT_MS = 30000 // 30 segundos

export async function analyzeDigitalPresence(
  data: AnalysisRequest
): Promise<AnalysisResponse> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const response = await fetch(API_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        empresa: data.empresa,
        sector: data.sector || 'General',
        pais: data.pais || 'España',
      }),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.error || `Error del servidor: ${response.status} ${response.statusText}`
      )
    }

    const result = await response.json()
    return result as AnalysisResponse
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('La petición tardó demasiado. Por favor, intenta de nuevo.')
      }
      throw error
    }

    throw new Error('Error desconocido al analizar la presencia digital')
  }
}
