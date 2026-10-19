import type { Metadata } from 'next'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'À propos | DataVola',
  description: 'À propos de Data Vola – Lula MARTINEZ PEREZ',
}

export default function AProposPage() {
  return (
    <LegalPage title="À propos">
      <p>
        <strong>Data Vola</strong> est le nom commercial sous lequel Lula
        MARTINEZ PEREZ accompagne les professionnels et les entreprises dans
        l&apos;automatisation, la création digitale et l&apos;intégration
        utile de l&apos;intelligence artificielle au quotidien.
      </p>
      <p>
        L&apos;objectif&nbsp;: simplifier les tâches répétitives, gagner du
        temps et mettre en place des outils adaptés à votre façon de
        travailler — sites, automatisations, newsletters, chatbots et
        assistants IA.
      </p>
      <p>
        Pour échanger sur votre projet&nbsp;:{' '}
        <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
          lula@datavola.net
        </a>
        .
      </p>
    </LegalPage>
  )
}
