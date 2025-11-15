'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Zap, Shield, Cpu, Leaf } from 'lucide-react'
import { useI18n } from '@/components/I18nProvider'
import NpmDownloads from '@/components/NpmDownloads'

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
            {t.home.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
            ToonJS
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
            {t.home.hero}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
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
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all text-lg font-medium"
            >
              {t.home.cta.docs}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">64+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.home.stats.methods}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">75</div>
              <div className="text-gray-600 dark:text-gray-400">{t.home.stats.tests}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">3x</div>
              <div className="text-gray-600 dark:text-gray-400">{t.home.stats.faster}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <NpmDownloads />
              <div className="text-gray-600 dark:text-gray-400 mt-2">{t.home.stats.downloads}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Methods */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">{t.home.methods.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            {t.home.methods.subtitle}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Method 1: filter + map */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">filter() + map()</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m1.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`data.filter(r => r.age > 25)
    .map(r => ({ ...r, senior: true }))`}</code>
              </pre>
            </div>

            {/* Method 2: groupBy */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">groupBy()</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m2.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`data.groupBy('category', 'sum', 'sales')
// { electronics: 15000, books: 8500 }`}</code>
              </pre>
            </div>

            {/* Method 3: correlation */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">correlation()</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m3.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`const corr = data.correlation('price', 'sales')
// 0.87 (strong positive correlation)`}</code>
              </pre>
            </div>

            {/* Method 4: rolling */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">rolling()</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m4.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`data.rolling('price', 7, 'avg')
// Moving average of last 7 days`}</code>
              </pre>
            </div>

            {/* Method 5: findAll */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">findAll() <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">NEW</span></h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m5.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`const matches = data.findAll(r => r.stock < 10)
// All products with low stock`}</code>
              </pre>
            </div>

            {/* Method 6: countBy */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2 font-mono">countBy() <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded">NEW</span></h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.home.methods.m6.desc}</p>
              <pre className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-x-auto text-sm">
                <code className="text-gray-800 dark:text-gray-300">{`data.countBy('status')
// { active: 42, pending: 15, closed: 8 }`}</code>
              </pre>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/docs/api-reference"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all"
            >
              {t.home.methods.viewAll}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
              <Zap className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{t.home.features.performance.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.home.features.performance.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
              <Shield className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{t.home.features.zero.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.home.features.zero.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
              <Code2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{t.home.features.typesafe.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.home.features.typesafe.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
              <Cpu className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{t.home.features.llm.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.home.features.llm.desc}</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-emerald-500 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
              <Leaf className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{t.home.features.eco.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t.home.features.eco.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
