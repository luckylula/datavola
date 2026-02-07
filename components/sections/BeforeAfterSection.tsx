import { Container } from '@/components/layout/Container'
import { copy } from '@/content/copy'

export function BeforeAfterSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {copy.beforeAfter.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {copy.beforeAfter.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-600 text-center mb-6">
              AVANT
            </h3>
            {copy.beforeAfter.before.map((item, index) => (
              <div
                key={index}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* After Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
              APRÈS
            </h3>
            {copy.beforeAfter.after.map((item, index) => (
              <div
                key={index}
                className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
