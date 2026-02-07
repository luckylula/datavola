export interface AnalysisRequest {
  empresa: string
  sector?: string
  pais?: string
}

export interface PresenciaWeb {
  encontrada: boolean
  url: string | null
  urls_adicionales: string[]
  descripcion: string
}

export interface RedesSociales {
  linkedin: string
  facebook: string
  instagram: string
  twitter: string
}

export interface AnalysisResponse {
  empresa: string
  sector: string
  pais: string
  fecha_analisis: string
  presencia_web: PresenciaWeb
  redes_sociales: RedesSociales
  visibilidad_score: number
  nivel_visibilidad: 'Bajo' | 'Medio' | 'Alto'
  recomendaciones: string[]
}
