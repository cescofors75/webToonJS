'use client'

import { TrendingUp, Star, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Stats() {
  const [stats, setStats] = useState({
    stars: '0',
    downloads: '0',
    performance: '3x'
  })

  useEffect(() => {
    // Fetch real stats from GitHub API
    fetch('https://api.github.com/repos/cescofors75/toonjs')
      .then(res => res.json())
      .then(data => {
        setStats(prev => ({ ...prev, stars: data.stargazers_count.toString() }))
      })
      .catch(() => {})
  }, [])

  const statItems = [
    {
      icon: Star,
      value: stats.stars,
      label: 'GitHub Stars',
      color: 'text-yellow-500'
    },
    {
      icon: Download,
      value: stats.downloads,
      label: 'NPM Downloads',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      value: stats.performance,
      label: 'Faster',
      color: 'text-emerald-500'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
              <div className="text-4xl font-bold mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
