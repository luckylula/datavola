'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Container } from './Container'
import { copy } from '@/content/copy'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-black/95 backdrop-blur-md shadow-lg">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/DataVola logo.png"
              alt="DataVola"
              width={70}
              height={70}
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {copy.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium text-lg hover:text-[#667eea] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={copy.header.cta.href}
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              {copy.header.cta.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="w-6 h-0.5 bg-white rounded transition-all" />
            <span className="w-6 h-0.5 bg-white rounded transition-all" />
            <span className="w-6 h-0.5 bg-white rounded transition-all" />
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 right-0 bg-white flex flex-col p-8 shadow-xl transform transition-transform z-[999]">
            {copy.header.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium text-lg py-4 border-b border-gray-200 hover:text-[#667eea] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={copy.header.cta.href}
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {copy.header.cta.label}
            </Link>
          </div>
        )}
      </Container>
    </header>
  )
}
