'use client'

import { useI18n } from '@/components/I18nProvider'

export default function GettingStartedPage() {
  const { t } = useI18n()
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{t.docs.gettingStarted.title}</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        {t.docs.gettingStarted.subtitle}
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.installation}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.installDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6">
        <code>npm install @cescofors/toonjs</code>
      </pre>
      
      <p className="text-sm text-gray-500 mb-6">or</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-8">
        <code>yarn add @cescofors/toonjs</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.basicUsage}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.basicDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`import { ToonFactory } from '@cescofors/toonjs';

// Create a dataset from TOON format
const restaurantes = ToonFactory.from(\`
  restaurantes[3]{nombre,ciudad,calificacion,precio}:
    Can Cesco,Barcelona,4.8,45
    El Bulli,Girona,5.0,120
    Tickets,Barcelona,4.6,65
\`);

// Get all data
console.log(restaurantes.all());`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.filtering}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.filteringDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`// Filter by condition
const topRated = restaurantes
  .filter(r => r.calificacion >= 4.7)
  .all();

console.log(topRated);
// Returns restaurants with rating >= 4.7`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.chaining}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.chainingDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`// Chain multiple operations
const result = restaurantes
  .filter(r => r.ciudad === 'Barcelona')
  .sortBy(['calificacion'], ['desc'])
  .select(['nombre', 'calificacion'])
  .take(5)
  .all();

console.log(result);
// Top 5 Barcelona restaurants by rating`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.statistics}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.statsDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`// Calculate statistics
const stats = restaurantes.stats('precio');

console.log(stats);
// { min: 45, max: 120, avg: 76.67, sum: 230, count: 3, median: 65 }

// Correlation between fields
const correlation = restaurantes.correlation('precio', 'calificacion');
console.log(correlation); // Correlation coefficient`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.timeSeries}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.timeSeriesDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
        <code>{`const ventas = ToonFactory.from(\`
  ventas[5]{fecha,ingresos}:
    2024-01,15000
    2024-02,18000
    2024-03,16500
    2024-04,19000
    2024-05,21000
\`);

// Calculate rolling average (3-month window)
const withMA = ventas.rolling('ingresos', 3, 'avg');

// Calculate percentage changes
const withPctChange = withMA.pctChange('ingresos');

console.log(withPctChange.all());`}</code>
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4">{t.docs.gettingStarted.exporting}</h2>
      
      <p className="mb-4">{t.docs.gettingStarted.exportDesc}</p>
      
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-8">
        <code>{`// Export to different formats
const csvData = restaurantes.toCSV();
const jsonData = restaurantes.toJSON();
const toonData = restaurantes.toToon();

// Display as ASCII table
console.log(restaurantes.toTable());`}</code>
      </pre>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm">
          <strong>💡 Tip:</strong> Check out the{' '}
          <a href="/playground" className="text-emerald-600 hover:underline">
            Playground
          </a>{' '}
          to try ToonJS interactively in your browser.
        </p>
      </div>
    </div>
  )
}
