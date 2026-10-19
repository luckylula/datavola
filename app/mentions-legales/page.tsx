import type { Metadata } from 'next'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'Mentions légales | DataVola',
  description: 'Mentions légales du site datavola.net',
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales">
      <p>
        Le site <strong>datavola.net</strong> est édité par Lula MARTINEZ PEREZ,
        entrepreneure individuelle exerçant sous le nom commercial Data Vola,
        immatriculée sous le numéro SIREN 130 706 435.
      </p>

      <h2>1. Éditeur du site</h2>
      <ul>
        <li>
          <strong>Raison sociale :</strong> Lula MARTINEZ PEREZ
        </li>
        <li>
          <strong>Nom commercial :</strong> Data Vola
        </li>
        <li>
          <strong>Forme juridique :</strong> Entreprise individuelle sous le
          régime de la micro-entreprise
        </li>
        <li>
          <strong>Adresse :</strong> 74 chemin de la Chenal, 73700
          Bourg-Saint-Maurice, France
        </li>
        <li>
          <strong>SIREN :</strong> 130 706 435
        </li>
        <li>
          <strong>SIRET :</strong> 130 706 435 00018
        </li>
        <li>
          <strong>Responsable / Directrice de la publication :</strong> Lula
          MARTINEZ PEREZ
        </li>
        <li>
          <strong>E-mail de contact :</strong>{' '}
          <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
            lula@datavola.net
          </a>
        </li>
      </ul>

      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par&nbsp;:
      </p>
      <ul>
        <li>
          <strong>OVH SAS</strong>
        </li>
        <li>2 rue Kellermann, 59100 Roubaix, France</li>
        <li>
          Site web&nbsp;:{' '}
          <a
            href="https://www.ovhcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#667eea] underline"
          >
            www.ovhcloud.com
          </a>
        </li>
      </ul>
      <p className="text-sm text-gray-500">
        (Si votre hébergeur diffère, contactez-nous pour mettre à jour cette
        section.)
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur le site datavola.net
        (textes, images, graphismes, logo, vidéos, etc.) est protégé par le droit
        de la propriété intellectuelle. Toute reproduction, représentation,
        modification ou exploitation non autorisée est interdite, sauf accord
        préalable écrit de Lula MARTINEZ PEREZ / Data Vola.
      </p>

      <h2>4. Données personnelles</h2>
      <p>
        Pour toute information relative au traitement des données personnelles,
        veuillez consulter notre{' '}
        <a href="/confidentialite" className="text-[#667eea] underline">
          Politique de confidentialité
        </a>
        .
      </p>

      <h2>5. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales&nbsp;:{' '}
        <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
          lula@datavola.net
        </a>
        .
      </p>
    </LegalPage>
  )
}
