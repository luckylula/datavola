import Link from 'next/link'
import { Container } from './Container'

type LegalPageProps = {
  title: string
  children: React.ReactNode
}

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-white min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-[#667eea] hover:underline text-sm font-medium mb-8 inline-block"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
