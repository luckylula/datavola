'use client'

import { Container } from '@/components/layout/Container'

const problems = [
  {
    gradient: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    text: "Vous répondez toujours aux mêmes emails",
  },
  {
    gradient: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="2" width="6" height="20" rx="2" />
        <path d="M17 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2" />
        <path d="M5 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2" />
        <line x1="12" y1="6" x2="12" y2="18" />
      </svg>
    ),
    text: "Vous recopiez des données d'un endroit à l'autre",
  },
  {
    gradient: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Vous oubliez de suivre vos clients",
  },
  {
    gradient: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: "Vous ne savez pas d'où viennent vos leads",
  },
  {
    gradient: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: "Publier sur les réseaux sociaux vous ennuie et vous le repoussez",
  },
  {
    gradient: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <path d="M7 7h10M7 12h10M7 17h5" />
      </svg>
    ),
    text: "Mon site web n'explique pas bien ce que je fais (ou je n'ai pas de site)",
  },
]

export function ProblemsCardsSection() {
  return (
    <section className="bg-[#f7fafc] py-20 px-8 w-full">
      <Container>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold text-[#2d3748] text-center mb-12 tracking-tight">
            Est-ce que ça vous arrive ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-md transition-all cursor-pointer border relative overflow-hidden ${
                  problem.gradient
                    ? 'bg-gradient-to-br from-[#667eea] via-[#764ba2] via-[#f093fb] via-[#f5576c] to-[#ff8c00] border-transparent text-white'
                    : 'bg-white border-black/5 hover:shadow-xl'
                } hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 mb-6 flex items-center justify-center ${
                  problem.gradient ? 'text-white' : 'text-[#4a5568]'
                }`}>
                  {problem.icon}
                </div>
                <p className={`text-lg font-medium leading-relaxed m-0 ${
                  problem.gradient ? 'text-white font-semibold' : 'text-[#2d3748]'
                }`}>
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
