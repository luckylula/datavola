import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Recibido en API Route:', body)

    // Llamar al webhook de n8n desde el servidor
    const response = await fetch(
      'https://n8n.lulamartinezperez.com/webhook/analisis-presencia-digital',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )

    if (!response.ok) {
      console.error('Error de n8n:', response.status, response.statusText)
      return NextResponse.json(
        { error: `Error del servidor: ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Respuesta de n8n:', data)

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('Error en API Route:', error)
    return NextResponse.json(
      {
        error: 'Error al procesar la solicitud',
        details: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
