'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Zap, Shield, Cpu } from 'lucide-react'
import { useI18n } from '@/components/I18nProvider'

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            {t.home.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            ToonJS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
            {t.home.hero}
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.home.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/docs/getting-started"
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all transform hover:scale-105 flex items-center gap-2 text-lg font-medium"
            >
              {t.home.cta.started}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/docs"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all text-lg font-medium"
            >
              {t.home.cta.docs}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">60+</div>
              <div className="text-gray-600">{t.home.stats.methods}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">75</div>
              <div className="text-gray-600">{t.home.stats.tests}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 mb-2">3x</div>
              <div className="text-gray-600">{t.home.stats.faster}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg">
              <Zap className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.home.features.performance.title}</h3>
              <p className="text-gray-600">{t.home.features.performance.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg">
              <Shield className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.home.features.zero.title}</h3>
              <p className="text-gray-600">{t.home.features.zero.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg">
              <Code2 className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.home.features.typesafe.title}</h3>
              <p className="text-gray-600">{t.home.features.typesafe.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg">
              <Cpu className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t.home.features.llm.title}</h3>
              <p className="text-gray-600">{t.home.features.llm.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
