import { Container } from '@/components/layout/Container'
import { useCases } from '@/content/useCases'

export function UseCasesSection() {
  return (
    <section id="casos-uso" className="py-16 lg:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cas d'usage réels
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Voici comment nous procédons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
