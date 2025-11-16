'use client'

import Link from 'next/link'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { LanguageSelector } from './LanguageSelector'
import { useI18n } from './I18nProvider'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold">ToonJS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/docs" className="hover:text-emerald-500 transition-colors">{t.nav.docs}</Link>
            <Link href="/playground" className="hover:text-emerald-500 transition-colors">{t.nav.playground}</Link>
            <Link href="/converter" className="hover:text-emerald-500 transition-colors">{t.nav.converter}</Link>
            <Link href="/blog" className="hover:text-emerald-500 transition-colors">{t.nav.blog}</Link>
            <Link href="https://github.com/cescofors75/toonjs" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-emerald-500 transition-colors" />
            </Link>
            <LanguageSelector />
            <Link 
              href="/docs/getting-started"
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              {t.home.cta.started}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

          {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/docs" className="block hover:text-emerald-500">{t.nav.docs}</Link>
            <Link href="/playground" className="block hover:text-emerald-500">{t.nav.playground}</Link>
            <Link href="/converter" className="block hover:text-emerald-500">{t.nav.converter}</Link>
            <Link href="/blog" className="block hover:text-emerald-500">{t.nav.blog}</Link>
            <div className="flex items-center gap-2">
              <LanguageSelector />
            </div>
            <Link 
              href="/docs/getting-started"
              className="block px-4 py-2 bg-emerald-500 text-white rounded-lg text-center"
            >
              {t.home.cta.started}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
