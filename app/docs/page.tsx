'use client'

import { useI18n } from '@/components/I18nProvider'

export default function DocsPage() {
  const { t } = useI18n()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{t.docs.intro.title}</h1>
      
      <p className="text-lg text-gray-600 mb-6">
        {t.docs.intro.subtitle}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.intro.why}</h2>
      
      <div className="grid gap-4 mb-8">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">{t.home.features.performance.title}</h3>
          <p className="text-sm text-gray-600">
            {t.home.features.performance.desc}
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">{t.home.features.zero.title}</h3>
          <p className="text-sm text-gray-600">
            {t.home.features.zero.desc}
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">{t.home.features.typesafe.title}</h3>
          <p className="text-sm text-gray-600">
            {t.home.features.typesafe.desc}
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2">{t.home.features.llm.title}</h3>
          <p className="text-sm text-gray-600">
            {t.home.features.llm.desc}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.intro.quickExample}</h2>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`import { ToonFactory } from '@cescofors/toonjs';

const maridajes = ToonFactory.from(\`
  maridajes[3]{plato,vino,puntuacion}:
    Croquetas,Albariño,9.2
    Pulpo,Godello,8.9
    Jamón,Rioja,9.5
\`);

const topMaridajes = maridajes
  .filter(m => m.puntuacion > 9.0)
  .sortBy(['puntuacion'], ['desc'])
  .all();

console.log(topMaridajes);
// [{ plato: 'Jamón', vino: 'Rioja', puntuacion: 9.5 },
//  { plato: 'Croquetas', vino: 'Albariño', puntuacion: 9.2 }]`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.intro.keyFeatures}</h2>
      
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>{t.docs.intro.features.f1}</li>
        <li>{t.docs.intro.features.f2}</li>
        <li>{t.docs.intro.features.f3}</li>
        <li>{t.docs.intro.features.f4}</li>
        <li>{t.docs.intro.features.f5}</li>
        <li>{t.docs.intro.features.f6}</li>
        <li>{t.docs.intro.features.f7}</li>
      </ul>

      <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
        <p className="text-sm">
          <strong>{t.docs.intro.nextSteps}</strong>{' '}
          <a href="/docs/getting-started" className="text-emerald-600 hover:underline">
            {t.docs.intro.nextStepsLink}
          </a>{' '}
          {t.docs.intro.nextStepsEnd}
        </p>
      </div>
    </div>
  )
}
