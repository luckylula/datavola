export const copy = {
  header: {
    logo: 'DataVola',
    navLinks: [
      { href: '#inicio', label: 'Accueil' },
      { href: '#servicios', label: 'Solutions' },
      { href: '#casos-uso', label: 'Créations' },
      { href: '#contacto', label: 'Contact' },
    ],
    cta: {
      label: 'Démarrer',
      href: 'mailto:lula@datavola.net',
    },
  },
  hero: {
    title: "Libérez votre temps en automatisant les tâches répétitives",
    subtitle: "Vous n'avez pas besoin de maîtriser la technologie.",
  },
  ecosystem: {
    title: 'Connectez vos outils, automatisez vos processus',
    description:
      "DataVola s'intègre avec vos applications préférées pour fluidifier votre travail.",
  },
  beforeAfter: {
    title: 'Avant et après DataVola',
    description:
      "Découvrez la transformation que l'automatisation peut apporter à votre quotidien.",
    before: [
      { icon: '⏱️', text: 'Heures perdues en tâches manuelles répétitives' },
      { icon: '📧', text: 'Emails et rapports créés un par un' },
      { icon: '😓', text: 'Le stress des délais et des oublis' },
    ],
    after: [
      { icon: '🚀', text: 'Processus automatisés qui tournent en arrière-plan' },
      { icon: '✨', text: 'Données mises à jour automatiquement' },
      { icon: '😌', text: 'Plus de temps pour ce qui compte vraiment' },
    ],
  },
  finalCta: {
    title: 'Prêt à automatiser ?',
    description:
      "Démarrons ensemble. Dites-nous ce que vous voulez automatiser et nous vous proposons une solution sur mesure.",
    email: 'lula@datavola.net',
    cta: {
      label: 'Nous contacter',
      href: 'mailto:lula@datavola.net',
    },
  },
  footer: {
    links: [
      {
        title: 'Produit',
        items: [
          { href: '#servicios', label: 'Solutions' },
          { href: '#casos-uso', label: 'Créations' },
          { href: '#contacto', label: 'Contact' },
        ],
      },
      {
        title: 'Entreprise',
        items: [
          { href: '/a-propos', label: 'À propos' },
          { href: 'mailto:lula@datavola.net', label: 'Contact' },
        ],
      },
      {
        title: 'Légal',
        items: [
          { href: '/mentions-legales', label: 'Mentions légales' },
          { href: '/confidentialite', label: 'Confidentialité' },
          { href: '/cgu', label: 'CGU' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} DataVola. Tous droits réservés.`,
    social: [
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@datavolanet',
        icon: 'youtube',
      },
    ],
  },
}
