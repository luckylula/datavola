export const copy = {
  header: {
    logo: 'DataVola',
    navLinks: [
      { href: '#inicio', label: 'Accueil' },
      { href: '#servicios', label: 'Solutions' },
      { href: '#casos-uso', label: "Cas d'Usage" },
      { href: '#contacto', label: 'Contact' },
    ],
    cta: {
      label: 'Démarrer',
      href: '#contacto',
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
          { href: '#casos-uso', label: "Cas d'Usage" },
          { href: '#contacto', label: 'Contact' },
        ],
      },
      {
        title: 'Entreprise',
        items: [
          { href: '#', label: 'À propos' },
          { href: '#', label: 'Carrières' },
        ],
      },
      {
        title: 'Légal',
        items: [
          { href: '#', label: 'Mentions légales' },
          { href: '#', label: 'Confidentialité' },
          { href: '#', label: 'CGU' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} DataVola. Tous droits réservés.`,
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
      { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
      { name: 'YouTube', href: 'https://youtube.com', icon: '▶' },
    ],
  },
}
