'use client'

import { useI18n } from '@/components/I18nProvider'

export default function MethodsGuidePage() {
  const { t } = useI18n()
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{t.docs.methods.title}</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        {t.docs.methods.subtitle}
      </p>

      {/* Filtering and Selection */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-emerald-600">{t.docs.methods.filteringTitle}</h2>
        <p className="text-gray-600 mb-6">{t.docs.methods.filteringDesc}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">filter()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`const data = ToonFactory.from(\`
  productos[5]{nombre,categoria,precio,stock}:
    Laptop,Electrónica,1200,15
    Mouse,Electrónica,25,50
    Teclado,Electrónica,75,30
    Silla,Muebles,300,10
    Escritorio,Muebles,500,5
\`);

// Filter products over $100
const expensive = data.filter(p => p.precio > 100);
console.log(expensive.all());

// Chain filters
const electronics = data
  .filter(p => p.categoria === 'Electrónica')
  .filter(p => p.stock > 20);`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">select() & drop()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Select specific columns
const names = data.select(['nombre', 'precio']);

// Drop columns
const withoutStock = data.drop(['stock']);`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">head(), tail(), slice()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// First 3 rows
const first = data.head(3);

// Last 2 rows
const last = data.tail(2);

// Rows 2-4
const middle = data.slice(1, 4);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Statistical Operations */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-emerald-600">{t.docs.methods.statsTitle}</h2>
        <p className="text-gray-600 mb-6">{t.docs.methods.statsDesc}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">stats()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Complete statistics
const priceStats = data.stats('precio');
console.log(priceStats);
// Output: {
//   min: 25,
//   max: 1200,
//   avg: 420,
//   sum: 2100,
//   count: 5,
//   median: 300
// }`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">sum(), avg(), min(), max()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Individual statistics
const totalStock = data.sum('stock');        // 110
const avgPrice = data.avg('precio');         // 420
const minPrice = data.min('precio');         // 25
const maxPrice = data.max('precio');         // 1200`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">correlation() & covariance()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Correlation between price and stock
const corr = data.correlation('precio', 'stock');
console.log(corr);  // -0.78 (negative correlation)

// Covariance
const cov = data.covariance('precio', 'stock');
console.log(cov);`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">variance() & stdDev()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Variance
const variance = data.variance('precio');

// Standard deviation
const stdDev = data.stdDev('precio');
console.log(\`σ = \${stdDev.toFixed(2)}\`);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Time Series */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-emerald-600">{t.docs.methods.timeSeriesTitle}</h2>
        <p className="text-gray-600 mb-6">{t.docs.methods.timeSeriesDesc}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">rolling()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`const ventas = ToonFactory.from(\`
  ventas[7]{mes,ingresos}:
    Ene,15000
    Feb,18000
    Mar,16500
    Abr,19000
    May,21000
    Jun,20500
    Jul,22000
\`);

// 3-month moving average
const ma3 = ventas.rolling('ingresos', 3, 'avg');

// 3-month rolling sum
const sum3 = ventas.rolling('ingresos', 3, 'sum');

// 3-month rolling max
const max3 = ventas.rolling('ingresos', 3, 'max');`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">pctChange() & diff()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Percentage change
const pctChange = ventas.pctChange('ingresos');
console.log(pctChange.all());
// Shows % change month over month

// Absolute difference
const diff = ventas.diff('ingresos');
console.log(diff.all());
// Shows absolute difference month over month`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">lag() & lead()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Lag by 1 period (previous month)
const lagged = ventas.lag('ingresos', 1);

// Lead by 1 period (next month)
const led = ventas.lead('ingresos', 1);

// Compare with previous month
const comparison = ventas
  .lag('ingresos', 1)
  .map(row => ({
    ...row,
    crecimiento: row.ingresos - (row.ingresos_lag1 || 0)
  }));`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">cumSum() & cumProd()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Cumulative sum (YTD)
const ytd = ventas.cumSum('ingresos');
console.log(ytd.all());
// Shows year-to-date totals

// Cumulative product
const cumProd = ventas.cumProd('ingresos');`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-emerald-600">{t.docs.methods.transformTitle}</h2>
        <p className="text-gray-600 mb-6">{t.docs.methods.transformDesc}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">sortBy()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Sort by single column (descending)
const byPrice = data.sortBy(['precio'], ['desc']);

// Sort by multiple columns
const sorted = data.sortBy(
  ['categoria', 'precio'],
  ['asc', 'desc']
);`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">groupBy()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Group by category and calculate stats
const byCategory = data.groupBy(['categoria'], {
  precio: ['avg', 'min', 'max'],
  stock: ['sum']
});

console.log(byCategory.all());
// Returns aggregated data by category`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">map() & apply()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Transform each row
const withDiscount = data.map(row => ({
  ...row,
  precio_descuento: row.precio * 0.9
}));

// Apply function to column
const withTax = data.apply('precio', price => price * 1.21);`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">rank() & percentRank()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Rank by price
const ranked = data.rank('precio', 'desc');

// Percent rank (0-1 scale)
const percentRanked = data.percentRank('precio');

console.log(ranked.all());
// Shows rank for each product`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">fillna() & dropna()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`// Fill null values with 0
const filled = data.fillna({ stock: 0, precio: 0 });

// Drop rows with nulls
const clean = data.dropna();

// Drop rows with nulls in specific columns
const cleanPrice = data.dropna(['precio']);`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
