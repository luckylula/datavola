import Link from 'next/link'
import Image from 'next/image'
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
                <Image
                  src="/images/DataVola logo.png"
                  alt="DataVola"
                  width={60}
                  height={60}
                  className="h-[60px] w-auto object-contain"
                />
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
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-all hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
