import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemsCardsSection } from '@/components/sections/ProblemsCardsSection'
import { ConnectionsDiagramSection } from '@/components/sections/ConnectionsDiagramSection'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemsCardsSection />
      <ConnectionsDiagramSection />
      <EcosystemSection />
      <div id="casos-uso">
        <UseCasesSection />
      </div>
      <BeforeAfterSection />
      <FinalCTASection />
    </>
  )
}
