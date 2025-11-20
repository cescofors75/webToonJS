export const v110Release = {
  id: 'v110-release',
  title: {
    es: 'ToonJS v1.1: Velocidad Columnar y Robustez',
    ca: 'ToonJS v1.1: Velocitat Columnar i Robustesa',
    en: 'ToonJS v1.1: Columnar Speed & Robustness',
    fr: 'ToonJS v1.1: Vitesse Colonnaire et Robustesse'
  },
  date: '2025-11-20',
  author: 'Francesc Fors',
  readTime: '8',
  content: {
    en: `<h1>🚀 Announcing ToonJS v1.1: Columnar Speed & Robustness</h1>

<p>We are thrilled to announce the release of <strong>ToonJS v1.1</strong>, a major update that transforms our tabular data library into a high-performance engine for data analysis in TypeScript.</p>

<h2>⚡ The Need for Speed: Float64Array Columnar Architecture</h2>

<p>The biggest change in v1.1 is under the hood. We've refactored the core storage engine to use a <strong>Hybrid Columnar Architecture</strong>.</p>

<ul>
<li><strong>Numeric Data</strong>: Stored in <code>Float64Array</code> typed arrays. This allows the JavaScript engine to optimize memory usage and use SIMD instructions for math operations.</li>
<li><strong>Mixed Data</strong>: Stored in standard Arrays for flexibility.</li>
</ul>

<p><strong>The Result?</strong></p>
<ul>
<li><strong>10x Faster</strong> numeric aggregations.</li>
<li><strong>Zero-copy</strong> overhead for many statistical operations.</li>
<li><strong>Seamless</strong> backward compatibility.</li>
</ul>

<h2>🛡️ Battle-Tested Reliability</h2>

<p>Performance means nothing without correctness. For v1.1, we didn't just write tests; we engineered a testing fortress.</p>

<ul>
<li><strong>275+ Tests</strong>: Up from 102, covering every API surface.</li>
<li><strong>Fuzzing Suite</strong>: We now generate random datasets (empty, single-row, prime-sized, negative seeds) to ensure ToonJS never crashes on edge cases.</li>
<li><strong>Invariant Checking</strong>: We verify algebraic properties (e.g., <code>reverse(reverse(x)) == x</code>) to guarantee logical consistency.</li>
</ul>

<h2>📊 New Capabilities</h2>

<p>We've added over 25 new methods to turn ToonJS into a serious tool for data science in the browser or Node.js:</p>

<h3>1. Time Series Analysis</h3>
<p>Analyze trends effortlessly with window functions.</p>
<pre><code>const trends = stockData
  .sortBy({ field: 'date', order: 'asc' })
  .rolling('close', 7, 'avg')  // 7-day moving average
  .pctChange('close')          // Daily returns
  .lag('close', 1);            // Previous day values</code></pre>

<h3>2. Matrix & Vector Operations</h3>
<p>Perform linear algebra directly on your data frames.</p>
<pre><code>const magnitude = data.norm('l2', ['x', 'y', 'z']);
const dot = vecA.dotProduct(vecB);
const standardized = data.standardize(['age', 'income']); // Z-score</code></pre>

<h3>3. Advanced Statistics</h3>
<pre><code>const correlation = data.correlation('gdp', 'life_expectancy');
const percentiles = data.percentile('score'); // p50, p90, etc.</code></pre>

<h2>📦 Get It Now</h2>

<p>ToonJS v1.1 is available on NPM today.</p>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Check out the full documentation and interactive playground at <a href="https://toonjs.dev">toonjs.dev</a>.</p>`,
    es: `<h1>🚀 Anunciando ToonJS v1.1: Velocidad Columnar y Robustez</h1>

<p>Estamos encantados de anunciar el lanzamiento de <strong>ToonJS v1.1</strong>, una actualización importante que transforma nuestra biblioteca de datos tabulares en un motor de alto rendimiento para el análisis de datos en TypeScript.</p>

<h2>⚡ La Necesidad de Velocidad: Arquitectura Columnar Float64Array</h2>

<p>El mayor cambio en la v1.1 está bajo el capó. Hemos refactorizado el motor de almacenamiento principal para usar una <strong>Arquitectura Columnar Híbrida</strong>.</p>

<ul>
<li><strong>Datos Numéricos</strong>: Almacenados en arrays tipados <code>Float64Array</code>. Esto permite al motor JavaScript optimizar el uso de memoria y usar instrucciones SIMD para operaciones matemáticas.</li>
<li><strong>Datos Mixtos</strong>: Almacenados en Arrays estándar para flexibilidad.</li>
</ul>

<p><strong>¿El Resultado?</strong></p>
<ul>
<li><strong>10x Más Rápido</strong> en agregaciones numéricas.</li>
<li><strong>Cero copias</strong> en muchas operaciones estadísticas.</li>
<li><strong>Compatibilidad</strong> total hacia atrás.</li>
</ul>

<h2>🛡️ Fiabilidad Probada en Batalla</h2>

<p>El rendimiento no significa nada sin corrección. Para la v1.1, no solo escribimos pruebas; diseñamos una fortaleza de pruebas.</p>

<ul>
<li><strong>275+ Tests</strong>: Subiendo desde 102, cubriendo toda la superficie de la API.</li>
<li><strong>Suite de Fuzzing</strong>: Ahora generamos datasets aleatorios (vacíos, una fila, tamaños primos, semillas negativas) para asegurar que ToonJS nunca falle en casos límite.</li>
<li><strong>Verificación de Invariantes</strong>: Verificamos propiedades algebraicas (ej. <code>reverse(reverse(x)) == x</code>) para garantizar consistencia lógica.</li>
</ul>

<h2>📊 Nuevas Capacidades</h2>

<p>Hemos añadido más de 25 nuevos métodos para convertir ToonJS en una herramienta seria para ciencia de datos en el navegador o Node.js:</p>

<h3>1. Análisis de Series Temporales</h3>
<p>Analiza tendencias sin esfuerzo con funciones de ventana.</p>
<pre><code>const trends = stockData
  .sortBy({ field: 'date', order: 'asc' })
  .rolling('close', 7, 'avg')  // media móvil de 7 días
  .pctChange('close')          // retornos diarios
  .lag('close', 1);            // valores del día anterior</code></pre>

<h3>2. Operaciones Matriciales y Vectoriales</h3>
<p>Realiza álgebra lineal directamente en tus data frames.</p>
<pre><code>const magnitude = data.norm('l2', ['x', 'y', 'z']);
const dot = vecA.dotProduct(vecB);
const standardized = data.standardize(['age', 'income']); // Z-score</code></pre>

<h3>3. Estadísticas Avanzadas</h3>
<pre><code>const correlation = data.correlation('gdp', 'life_expectancy');
const percentiles = data.percentile('score'); // p50, p90, etc.</code></pre>

<h2>📦 Consíguelo Ahora</h2>

<p>ToonJS v1.1 está disponible en NPM hoy.</p>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Revisa la documentación completa y el playground interactivo en <a href="https://toonjs.dev">toonjs.dev</a>.</p>`,
    ca: `<h1>🚀 Anunciant ToonJS v1.1: Velocitat Columnar i Robustesa</h1>
<p>Estem encantats d'anunciar el llançament de <strong>ToonJS v1.1</strong>, una actualització important que transforma la nostra biblioteca de dades tabulars en un motor d'alt rendiment per a l'anàlisi de dades en TypeScript.</p>
<p>Consulteu la versió en anglès o espanyol per a més detalls.</p>`,
    fr: `<h1>🚀 Annonce de ToonJS v1.1: Vitesse Colonnaire et Robustesse</h1>
<p>Nous sommes ravis d'annoncer la sortie de <strong>ToonJS v1.1</strong>, une mise à jour majeure qui transforme notre bibliothèque de données tabulaires en un moteur haute performance pour l'analyse de données en TypeScript.</p>
<p>Veuillez consulter la version anglaise ou espagnole pour plus de détails.</p>`
  }
}
