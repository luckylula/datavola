import Link from 'next/link'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function Footer() {
  return (
    <footer className="bg-[#2d3748] text-white py-16 px-8">
      <Container>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-block">
                <video
                  className="h-[120px] w-[120px] object-cover rounded-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="DataVola"
                >
                  <source src="/images/logocirculo.mp4" type="video/mp4" />
                </video>
              </Link>
            </div>

            {/* Links - 3 Columns */}
            {copy.footer.links.map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-semibold mb-4 text-lg">
                  {column.title}
                </h4>
                <ul className="list-none space-y-3">
                  {column.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              {copy.footer.copyright}
            </p>
            <div className="flex items-center gap-4">
              {copy.footer.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:bg-[#cc0000] transition-all hover:-translate-y-1 shadow-md"
                  aria-label={social.name}
                >
                  {social.icon === 'youtube' ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-7 h-7"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
                    </svg>
                  ) : (
                    <span className="text-xl">{social.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
