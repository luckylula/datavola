import type { Metadata } from 'next'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | DataVola",
  description: "Conditions générales d'utilisation du site datavola.net",
}

export default function CguPage() {
  return (
    <LegalPage title="Conditions générales d'utilisation (CGU)">
      <p>
        Les présentes conditions générales d&apos;utilisation régissent
        l&apos;accès et l&apos;utilisation du site{' '}
        <strong>datavola.net</strong>, édité par Lula MARTINEZ PEREZ, exerçant
        sous le nom commercial Data Vola.
      </p>

      <h2>1. Objet</h2>
      <p>
        Le site présente les activités et services de Data Vola
        (automatisation, création digitale, accompagnement lié à
        l&apos;intelligence artificielle et outils numériques). L&apos;accès au
        site est gratuit, hors coûts de connexion à Internet.
      </p>

      <h2>2. Acceptation</h2>
      <p>
        En naviguant sur le site, vous acceptez les présentes CGU. Si vous
        n&apos;acceptez pas ces conditions, merci de ne pas utiliser le site.
      </p>

      <h2>3. Accès au site</h2>
      <p>
        Data Vola s&apos;efforce d&apos;assurer un accès continu au site, sans
        toutefois garantir une disponibilité sans interruption. Des
        maintenances ou incidents techniques peuvent survenir.
      </p>

      <h2>4. Contenu et responsabilité</h2>
      <p>
        Les informations publiées sur le site le sont à titre indicatif. Data
        Vola met tout en œuvre pour en assurer l&apos;exactitude, sans
        garantie d&apos;exhaustivité. Data Vola ne saurait être tenue
        responsable des dommages indirects liés à l&apos;utilisation du site
        ou à l&apos;impossibilité d&apos;y accéder.
      </p>

      <h2>5. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Data Vola
        n&apos;exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu ou à leurs pratiques.
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        Tous les éléments du site restent la propriété de Lula MARTINEZ PEREZ /
        Data Vola, sauf mention contraire. Toute utilisation non autorisée est
        interdite.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est décrit dans la{' '}
        <a href="/confidentialite" className="text-[#667eea] underline">
          Politique de confidentialité
        </a>
        .
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige, et
        à défaut d&apos;accord amiable, les tribunaux français compétents
        seront saisis.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question relative aux CGU&nbsp;:{' '}
        <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
          lula@datavola.net
        </a>
        .
      </p>
    </LegalPage>
  )
}
