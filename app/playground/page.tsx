'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { useTheme } from 'next-themes'
import { useI18n } from '@/components/I18nProvider'

// Mock ToonJS implementation for playground
type DataRow = Record<string, unknown>;

class MockToon {
  constructor(public data: DataRow[]) {}
  
  filter(fn: (row: DataRow) => boolean) { 
    return new MockToon(this.data.filter(fn)); 
  }
  
  sortBy(fields: string[], orders: string[]) { 
    const sorted = [...this.data].sort((a, b) => {
      const field = fields[0];
      return orders[0] === 'desc' ? b[field] as number - (a[field] as number) : (a[field] as number) - (b[field] as number);
    });
    return new MockToon(sorted);
  }
  
  all() { return this.data; }
  
  stats(field: string) {
    const values = this.data.map(r => r[field] as number);
    return {
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a,b) => a+b, 0) / values.length,
      sum: values.reduce((a,b) => a+b, 0),
      count: values.length
    };
  }
  
  rolling() { return this; }
  pctChange() { return this; }
  correlation() { return 0.95; }
}

const ToonFactory = {
  from: (str: string) => {
    const lines = str.trim().split('\n').filter(l => l.trim() && !l.includes('{'));
    const data = lines.map(line => {
      const [plato, vino, puntuacion] = line.trim().split(',');
      return { plato, vino, puntuacion: parseFloat(puntuacion) };
    });
    return new MockToon(data);
  }
};

// Make available globally for code execution
if (typeof window !== 'undefined') {
  (window as typeof window & { ToonFactory: typeof ToonFactory; MockToon: typeof MockToon }).ToonFactory = ToonFactory;
  (window as typeof window & { ToonFactory: typeof ToonFactory; MockToon: typeof MockToon }).MockToon = MockToon;
}

const defaultCode = `import { ToonFactory } from '@cescofors/toonjs';

// Create a dataset
const maridajes = ToonFactory.from(\`
  maridajes[5]{plato,vino,puntuacion}:
    Croquetas,Albariño,9.2
    Pulpo,Godello,8.9
    Jamón,Rioja,9.5
    Paella,Verdejo,8.7
    Tortilla,Ribera,9.0
\`);

// Filter and sort
const resultado = maridajes
  .filter(m => m.puntuacion > 8.8)
  .sortBy(['puntuacion'], ['desc'])
  .all();

console.log(resultado);

// Statistics
const stats = maridajes.stats('puntuacion');
console.log('Stats:', stats);
`

const examples = [
  {
    title: 'Basic Filtering',
    code: `const data = ToonFactory.from(\`
  restaurantes[3]{nombre,calificacion,precio}:
    Can Cesco,4.8,45
    El Bulli,5.0,120
    Tickets,4.6,65
\`);

const resultado = data
  .filter(r => r.calificacion >= 4.7)
  .all();

console.log(resultado);`
  },
  {
    title: 'Time Series',
    code: `const ventas = ToonFactory.from(\`
  ventas[6]{mes,ingresos}:
    Jan,15000
    Feb,18000
    Mar,16500
    Apr,19000
    May,21000
    Jun,23000
\`);

const analisis = ventas
  .rolling('ingresos', 3, 'avg')
  .pctChange('ingresos')
  .all();

console.log(analisis);`
  },
  {
    title: 'Statistics',
    code: `const datos = ToonFactory.from(\`
  datos[4]{x,y}:
    10,20
    20,40
    30,60
    40,80
\`);

const stats = datos.stats('y');
const corr = datos.correlation('x', 'y');

console.log('Stats:', stats);
console.log('Correlation:', corr);`
  }
]

export default function PlaygroundPage() {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState('')
  const { t } = useI18n()
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const runCode = () => {
    try {
      const logs: string[] = []
      
      // Custom console that captures logs
      const capturedConsole = {
        log: (...args: unknown[]) => {
          logs.push(args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '));
        }
      };
      
      // Replace console temporarily
      const originalConsole = console.log;
      console.log = capturedConsole.log;
      
      try {
        // Execute user code (remove import statement)
        const cleanCode = code.replace(/import.*from.*['"].*toonjs.*['"].*\n?/g, '');
        
        // Use indirect eval to run in global scope
        const indirectEval = eval;
        indirectEval(cleanCode);
        
        setOutput(logs.join('\n') || '✓ Code executed successfully (no console output)');
      } finally {
        // Restore original console
        console.log = originalConsole;
      }
    } catch (error: unknown) {
      setOutput(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{t.playground.title}</h1>
        <p className="text-gray-600">
          {t.playground.subtitle}
        </p>
      </div>

      {/* Examples */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {examples.map((example, i) => (
          <button
            key={i}
            onClick={() => setCode(example.code)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg whitespace-nowrap text-sm"
          >
            {i === 0 ? t.playground.examples.basic : i === 1 ? t.playground.examples.timeseries : t.playground.examples.stats}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Editor */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="text-sm font-medium">Code Editor</span>
            <button
              onClick={runCode}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-sm"
            >
              {t.playground.run}
            </button>
          </div>
          <Editor
            height="500px"
            defaultLanguage="typescript"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme={currentTheme === 'dark' ? 'vs-dark' : 'light'}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* Output */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium">{t.playground.output}</span>
          </div>
          <pre className="h-[500px] overflow-auto p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-sm font-mono">
            {output || `// ${t.playground.run}...`}
          </pre>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm">
          <strong>💡 Note:</strong> This playground is for demonstration. For full functionality, 
          install ToonJS locally: <code className="bg-gray-100 px-2 py-1 rounded">npm install @cescofors/toonjs</code>
        </p>
      </div>
    </div>
  )
}
