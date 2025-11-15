'use client'

import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { useI18n } from './I18nProvider'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="font-bold">ToonJS</span>
            </div>
            <p className="text-sm text-gray-600">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/docs" className="hover:text-emerald-500">{t.nav.docs}</Link></li>
              <li><Link href="/playground" className="hover:text-emerald-500">{t.nav.playground}</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-500">{t.nav.blog}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.resources}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="https://github.com/cescofors75/toonjs" className="hover:text-emerald-500">GitHub</Link></li>
              <li><Link href="https://www.npmjs.com/package/@cescofors/toonjs" className="hover:text-emerald-500">NPM</Link></li>
              <li><Link href="https://github.com/cescofors75/toonjs/blob/main/CHANGELOG.md" className="hover:text-emerald-500">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.community}</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/cescofors75" className="hover:text-emerald-500">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/cescofors" className="hover:text-emerald-500">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 ToonJS. {t.footer.rights}. Built by <Link href="https://cesco.dev" className="text-emerald-500 hover:underline">Francesc Fors</Link></p>
        </div>
      </div>
    </footer>
  )
}
