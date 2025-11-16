'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'

export default function NpmDownloads() {
  const [downloads, setDownloads] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDownloads() {
      try {
        // NPM API para obtener descargas del último mes
        const response = await fetch(
          'https://api.npmjs.org/downloads/point/last-month/@cescofors/toonjs'
        )
        const data = await response.json()
        setDownloads(data.downloads || 0)
      } catch (error) {
        console.error('Error fetching NPM downloads:', error)
        setDownloads(0)
      } finally {
        setLoading(false)
      }
    }

    fetchDownloads()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Download className="w-5 h-5 animate-pulse" />
        <span className="text-sm">Loading...</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Download className="w-5 h-5 text-emerald-600" />
      <span className="text-2xl font-bold text-emerald-600">
        {downloads?.toLocaleString()}
      </span>
    </div>
  )
}
