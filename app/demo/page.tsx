import { AnalysisForm } from '@/components/demo/AnalysisForm'
import { Container } from '@/components/layout/Container'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <Container>
        <AnalysisForm />
      </Container>
    </div>
  )
}
