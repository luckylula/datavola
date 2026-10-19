import type { Metadata } from 'next'
import { LegalPage } from '@/components/layout/LegalPage'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | DataVola',
  description: 'Politique de confidentialité et protection des données personnelles – DataVola',
}

export default function ConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        La présente politique décrit la manière dont Lula MARTINEZ PEREZ,
        exerçant sous le nom commercial Data Vola (ci-après «&nbsp;Data
        Vola&nbsp;»), traite les données personnelles collectées via le site{' '}
        <strong>datavola.net</strong>, conformément au Règlement (UE) 2016/679
        (RGPD) et à la loi Informatique et Libertés.
      </p>

      <h2>1. Responsable du traitement</h2>
      <ul>
        <li>Lula MARTINEZ PEREZ – Data Vola</li>
        <li>74 chemin de la Chenal, 73700 Bourg-Saint-Maurice, France</li>
        <li>
          E-mail&nbsp;:{' '}
          <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
            lula@datavola.net
          </a>
        </li>
        <li>SIRET&nbsp;: 130 706 435 00018</li>
      </ul>

      <h2>2. Données collectées</h2>
      <p>Selon les interactions avec le site, nous pouvons collecter&nbsp;:</p>
      <ul>
        <li>
          Données d&apos;identification et de contact (nom, prénom, adresse
          e-mail) lorsque vous nous contactez ;
        </li>
        <li>
          Données techniques de navigation (adresse IP, type de navigateur,
          pages consultées) via les logs serveur ou outils d&apos;audience, le
          cas échéant ;
        </li>
        <li>
          Toute information que vous choisissez de nous transmettre dans vos
          messages.
        </li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Répondre à vos demandes de contact</strong> — intérêt
          légitime / exécution de mesures précontractuelles ;
        </li>
        <li>
          <strong>Assurer le fonctionnement et la sécurité du site</strong>{' '}
          — intérêt légitime ;
        </li>
        <li>
          <strong>Respecter nos obligations légales</strong> — obligation
          légale.
        </li>
      </ul>

      <h2>4. Destinataires</h2>
      <p>
        Les données sont destinées à Data Vola. Elles peuvent être traitées par
        des prestataires techniques (hébergeur, outils de messagerie) dans la
        limite nécessaire à leurs missions, conformément au RGPD.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les données de contact sont conservées pendant la durée nécessaire au
        traitement de votre demande, puis archivées si besoin selon les délais
        légaux applicables. Les logs techniques sont conservés pour une durée
        limitée, compatible avec la sécurité du site.
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation, d&apos;opposition et de
        portabilité, dans les conditions prévues par la loi. Vous pouvez
        également introduire une réclamation auprès de la CNIL (
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#667eea] underline"
        >
          www.cnil.fr
        </a>
        ).
      </p>
      <p>
        Pour exercer vos droits&nbsp;:{' '}
        <a href="mailto:lula@datavola.net" className="text-[#667eea] underline">
          lula@datavola.net
        </a>
        .
      </p>

      <h2>7. Cookies</h2>
      <p>
        Le site peut utiliser des cookies techniques nécessaires à son
        fonctionnement. Le cas échéant, les cookies non essentiels feront
        l&apos;objet d&apos;une information et d&apos;un consentement
        conformes à la réglementation.
      </p>

      <h2>8. Mise à jour</h2>
      <p>
        La présente politique peut être mise à jour. La version en vigueur est
        celle publiée sur cette page. Dernière mise à jour&nbsp;: octobre 2026.
      </p>
    </LegalPage>
  )
}
