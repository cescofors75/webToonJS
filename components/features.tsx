'use client'

import { Zap, Code, BarChart, Database, GitBranch, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast',
    description: 'Average 2.2x faster than manual operations, up to 3.5x in complex operations'
  },
  {
    icon: Code,
    title: 'Type-Safe',
    description: 'Full TypeScript support with comprehensive type definitions'
  },
  {
    icon: BarChart,
    title: '76 Methods',
    description: 'Complete API for filtering, aggregation, statistics, and more'
  },
  {
    icon: Database,
    title: 'TOON Format',
    description: 'Human-readable format optimized for LLMs and data exchange'
  },
  {
    icon: GitBranch,
    title: 'Chainable API',
    description: 'Fluent interface for elegant data transformation pipelines'
  },
  {
    icon: Shield,
    title: 'Zero Dependencies',
    description: 'Pure TypeScript with 100% test coverage and no external deps'
  }
]

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built for performance, designed for developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-500 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
