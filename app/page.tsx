import { HeroSection } from '@/components/sections/HeroSection'
import { EcosystemSection } from '@/components/sections/EcosystemSection'
import { UseCasesSection } from '@/components/sections/UseCasesSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <div id="casos-uso">
        <UseCasesSection />
      </div>
      <FinalCTASection />
    </>
  )
}
