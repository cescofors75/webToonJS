'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-500">High-Performance Data Manipulation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              ToonJS
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              Pandas for JavaScript
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            High-performance TypeScript library for tabular data manipulation.
            Average <span className="text-emerald-500 font-semibold">2.2x faster</span>. Zero dependencies. 
            Perfect for <span className="text-emerald-500 font-semibold">LLMs</span> and data analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/docs/getting-started"
              className="group px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-all flex items-center space-x-2 shadow-lg shadow-emerald-500/25"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/playground"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold hover:border-emerald-500 transition-colors flex items-center space-x-2"
            >
              <Code2 className="w-5 h-5" />
              <span>Try Playground</span>
            </Link>
          </div>

          {/* Install Command */}
          <div className="pt-8">
            <div className="inline-block bg-gray-100 dark:bg-gray-900 rounded-lg px-6 py-4 font-mono text-sm border border-gray-200 dark:border-gray-800">
              <span className="text-gray-500">$</span> npm install <span className="text-emerald-500">@cescofors/toonjs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
