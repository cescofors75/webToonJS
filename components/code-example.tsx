'use client'

import { useState } from 'react'

const codeExample = `import { ToonFactory } from '@cescofors/toonjs'

const maridajes = ToonFactory.from(\`
  maridajes[3]{plato,vino,puntuacion}:
    Croquetas,Albariño,9.2
    Pulpo,Godello,8.9
    Jamón,Rioja,9.5
\`)

const topMaridajes = maridajes
  .filter(m => m.puntuacion > 9.0)
  .sortBy(['puntuacion'], ['desc'])
  .all()

console.log(topMaridajes)
// [{ plato: 'Jamón', vino: 'Rioja', puntuacion: 9.5 }, 
//  { plato: 'Croquetas', vino: 'Albariño', puntuacion: 9.2 }]`

export function CodeExample() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple & Powerful
          </h2>
          <p className="text-xl text-gray-600">
            Clean syntax, powerful results
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={copyCode}
              className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-8 rounded-xl overflow-x-auto border border-gray-800">
            <code>{codeExample}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
