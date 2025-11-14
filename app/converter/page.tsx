'use client'

import { useState, useCallback } from 'react'
import { useI18n } from '@/components/I18nProvider'
import { Upload, FileJson, FileSpreadsheet, Copy, Download, Trash2 } from 'lucide-react'

export default function ConverterPage() {
  const { t } = useI18n()
  const [inputData, setInputData] = useState('')
  const [toonOutput, setToonOutput] = useState('')
  const [inputFormat, setInputFormat] = useState<'json' | 'csv'>('json')
  const [tokensSaved, setTokensSaved] = useState(0)

  const exampleJSON = `[
  {"name": "Paella", "rating": 9.5, "price": 25},
  {"name": "Gazpacho", "rating": 8.7, "price": 12},
  {"name": "Tortilla", "rating": 9.2, "price": 15}
]`

  const exampleCSV = `name,rating,price
Paella,9.5,25
Gazpacho,8.7,12
Tortilla,9.2,15`

  const parseCSV = (csv: string): Record<string, unknown>[] => {
    const lines = csv.trim().split('\n')
    if (lines.length < 2) return []
    
    const headers = lines[0].split(',').map(h => h.trim())
    const data: Record<string, unknown>[] = []
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim())
      const row: Record<string, unknown> = {}
      
      headers.forEach((header, index) => {
        const value = values[index]
        // Try to convert to number if possible
        row[header] = isNaN(Number(value)) ? value : Number(value)
      })
      
      data.push(row)
    }
    
    return data
  }

  const convertToTOON = useCallback(() => {
    try {
      let data: Record<string, unknown>[]
      
      if (inputFormat === 'json') {
        data = JSON.parse(inputData)
      } else {
        data = parseCSV(inputData)
      }

      if (!Array.isArray(data) || data.length === 0) {
        setToonOutput('Error: Data must be a non-empty array')
        return
      }

      // Extract field names from first object
      const fields = Object.keys(data[0])
      const dataName = 'data'
      const count = data.length

      // Build TOON format
      let toon = `${dataName}[${count}]{${fields.join(',')}}:\n`
      
      data.forEach(row => {
        const values = fields.map(field => {
          const value = row[field]
          return typeof value === 'string' ? value : String(value)
        })
        toon += `  ${values.join(',')}\n`
      })

      setToonOutput(toon.trim())

      // Calculate tokens saved (approximate)
      const originalSize = inputData.length
      const toonSize = toon.length
      const saved = Math.round(((originalSize - toonSize) / originalSize) * 100)
      setTokensSaved(saved > 0 ? saved : 0)

    } catch (error) {
      setToonOutput(`Error: ${error instanceof Error ? error.message : 'Invalid data format'}`)
      setTokensSaved(0)
    }
  }, [inputData, inputFormat])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      setInputData(content)
      
      // Auto-detect format
      if (file.name.endsWith('.json')) {
        setInputFormat('json')
      } else if (file.name.endsWith('.csv')) {
        setInputFormat('csv')
      }
    }
    reader.readAsText(file)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(toonOutput)
  }

  const downloadTOON = () => {
    const blob = new Blob([toonOutput], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.toon'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{t.converter.title}</h1>
          <p className="text-gray-600">{t.converter.subtitle}</p>
        </div>

        {/* Examples */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => {
              setInputData(exampleJSON)
              setInputFormat('json')
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center gap-2"
          >
            <FileJson className="w-4 h-4" />
            {t.converter.exampleJSON}
          </button>
          <button
            onClick={() => {
              setInputData(exampleCSV)
              setInputFormat('csv')
            }}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm flex items-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4" />
            {t.converter.exampleCSV}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition-colors">
              <input
                type="file"
                accept=".json,.csv"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">{t.converter.uploadFile}</p>
                <p className="text-xs text-gray-400">{t.converter.uploadDesc}</p>
              </label>
            </div>

            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setInputFormat('json')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  inputFormat === 'json'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t.converter.formats.json}
              </button>
              <button
                onClick={() => setInputFormat('csv')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  inputFormat === 'csv'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t.converter.formats.csv}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.converter.pasteData}</label>
              <textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder={t.converter.pasteDesc}
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={convertToTOON}
              disabled={!inputData}
              className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              {t.converter.convert} →
            </button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium">{t.converter.result}</label>
              {tokensSaved > 0 && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {t.converter.tokensSaved}: {tokensSaved}%
                </span>
              )}
            </div>

            <textarea
              value={toonOutput}
              readOnly
              placeholder="// TOON format will appear here..."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm bg-gray-50"
            />

            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                disabled={!toonOutput}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {t.converter.copy}
              </button>
              <button
                onClick={downloadTOON}
                disabled={!toonOutput}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.converter.download}
              </button>
              <button
                onClick={() => {
                  setInputData('')
                  setToonOutput('')
                  setTokensSaved(0)
                }}
                className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                {t.converter.clear}
              </button>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-2">💡 {t.converter.title}</h3>
          <p className="text-sm text-gray-700 mb-2">
            El formato TOON reduce el uso de tokens hasta en un 50% comparado con JSON tradicional, 
            ideal para trabajar con LLMs manteniendo la legibilidad.
          </p>
          <p className="text-xs text-gray-600">
            <strong>Ejemplo:</strong> En lugar de repetir nombres de campos en cada fila, 
            TOON los declara una vez en el encabezado, ahorrando tokens valiosos.
          </p>
        </div>
      </div>
    </div>
  )
}
