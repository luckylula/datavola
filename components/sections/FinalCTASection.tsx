import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'

export function FinalCTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-pink-600">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {copy.finalCta.title}
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            {copy.finalCta.description}
          </p>
          <a
            href={copy.finalCta.cta.href}
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            {copy.finalCta.cta.label}
          </a>
        </div>
      </Container>
    </section>
  )
}
