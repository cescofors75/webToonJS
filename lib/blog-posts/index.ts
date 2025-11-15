import { introducingToonjs } from './introducing-toonjs'
import { tokenSavings } from './50-percent-token-savings'
import { v104NewMethods } from './v104-new-methods'

// Simplified content for remaining posts
export const allBlogPosts = {
  'v104-new-methods': v104NewMethods,
  'introducing-toonjs': introducingToonjs,
  '50-percent-token-savings': tokenSavings,
  'doom-optimization-techniques': {
    id: 'doom-optimization-techniques',
    title: {
      es: 'Optimizaciones Estilo DOOM en JavaScript',
      ca: 'Optimitzacions Estil DOOM en JavaScript',
      en: 'DOOM-Style Optimizations in JavaScript',
      fr: 'Optimisations Style DOOM en JavaScript'
    },
    date: '2025-11-09',
    author: 'Francesc Fors',
    readTime: '10',
    content: {
      es: '<h1>Optimizaciones Estilo DOOM en JavaScript</h1><p>Aprende cómo las técnicas clásicas de motores de juegos como DOOM hacen ToonJS hasta 3x más rápido.</p><h2>Técnicas Clave</h2><ul><li><strong>Pre-asignación de Memoria</strong>: Evitar realocaciones costosas</li><li><strong>Cálculos Inline</strong>: Eliminar llamadas de función innecesarias</li><li><strong>Búsquedas Basadas en Sets</strong>: O(1) en lugar de O(n)</li><li><strong>Cache-Friendly</strong>: Maximizar localidad de datos</li></ul><p>Estos principios de los 90s siguen siendo relevantes hoy.</p>',
      ca: '<h1>Optimitzacions Estil DOOM en JavaScript</h1><p>Aprèn com les tècniques clàssiques de motors de jocs com DOOM fan ToonJS fins a 3x més ràpid.</p>',
      en: '<h1>DOOM-Style Optimizations in JavaScript</h1><p>Learn how classic game engine techniques like DOOM make ToonJS up to 3x faster.</p><h2>Key Techniques</h2><ul><li><strong>Memory Pre-allocation</strong>: Avoid costly reallocations</li><li><strong>Inline Calculations</strong>: Eliminate unnecessary function calls</li><li><strong>Set-Based Lookups</strong>: O(1) instead of O(n)</li><li><strong>Cache-Friendly</strong>: Maximize data locality</li></ul>',
      fr: '<h1>Optimisations Style DOOM en JavaScript</h1><p>Découvrez comment les techniques classiques des moteurs de jeu comme DOOM rendent ToonJS jusqu\'à 3x plus rapide.</p>'
    }
  },
  'pandas-for-javascript': {
    id: 'pandas-for-javascript',
    title: {
      es: 'ToonJS: Pandas para JavaScript',
      ca: 'ToonJS: Pandas per a JavaScript',
      en: 'ToonJS: Pandas for JavaScript',
      fr: 'ToonJS: Pandas pour JavaScript'
    },
    date: '2025-11-10',
    author: 'Francesc Fors',
    readTime: '6',
    content: {
      es: '<h1>ToonJS: Pandas para JavaScript</h1><p>Si vienes de Python y Pandas, ToonJS te resultará familiar pero optimizado para JavaScript.</p><h2>Comparación de APIs</h2><table><tr><th>Pandas (Python)</th><th>ToonJS (JavaScript)</th></tr><tr><td>df.head()</td><td>data.first()</td></tr><tr><td>df.tail()</td><td>data.last()</td></tr><tr><td>df.groupby()</td><td>data.groupBy()</td></tr><tr><td>df.sort_values()</td><td>data.sortBy()</td></tr></table><p>Sintaxis familiar, rendimiento superior.</p>',
      ca: '<h1>ToonJS: Pandas per a JavaScript</h1><p>Si vens de Python i Pandas, ToonJS et resultarà familiar però optimitzat per a JavaScript.</p>',
      en: '<h1>ToonJS: Pandas for JavaScript</h1><p>If you come from Python and Pandas, ToonJS will feel familiar but optimized for JavaScript.</p><h2>API Comparison</h2><table><tr><th>Pandas (Python)</th><th>ToonJS (JavaScript)</th></tr><tr><td>df.head()</td><td>data.first()</td></tr><tr><td>df.tail()</td><td>data.last()</td></tr><tr><td>df.groupby()</td><td>data.groupBy()</td></tr><tr><td>df.sort_values()</td><td>data.sortBy()</td></tr></table>',
      fr: '<h1>ToonJS: Pandas pour JavaScript</h1><p>Si vous venez de Python et Pandas, ToonJS vous semblera familier mais optimisé pour JavaScript.</p>'
    }
  },
  'real-world-data-analysis': {
    id: 'real-world-data-analysis',
    title: {
      es: 'Análisis de Datos del Mundo Real con ToonJS',
      ca: 'Anàlisi de Dades del Món Real amb ToonJS',
      en: 'Real-World Data Analysis with ToonJS',
      fr: 'Analyse de Données Réelles avec ToonJS'
    },
    date: '2025-11-10',
    author: 'Francesc Fors',
    readTime: '8',
    content: {
      es: '<h1>Análisis de Datos del Mundo Real con ToonJS</h1><p>Ejemplos prácticos de uso de ToonJS para analítica empresarial.</p><h2>Caso 1: Análisis de Ventas</h2><pre><code>const ventas = ToonFactory.from(data);\nconst topProductos = ventas\n  .groupBy(["producto"])\n  .aggregate({"total": "sum"})\n  .sortBy(["total"], ["desc"])\n  .first(10);</code></pre><h2>Caso 2: Segmentación de Clientes</h2><pre><code>const segmentos = clientes\n  .addField("valor_vida", r => r.compras * r.ticket_medio)\n  .groupBy(["edad_grupo"])\n  .stats(["valor_vida"]);</code></pre>',
      ca: '<h1>Anàlisi de Dades del Món Real amb ToonJS</h1><p>Exemples pràctics d\'ús de ToonJS per a analítica empresarial.</p>',
      en: '<h1>Real-World Data Analysis with ToonJS</h1><p>Practical examples of using ToonJS for business analytics.</p><h2>Case 1: Sales Analysis</h2><pre><code>const sales = ToonFactory.from(data);\nconst topProducts = sales\n  .groupBy(["product"])\n  .aggregate({"total": "sum"})\n  .sortBy(["total"], ["desc"])\n  .first(10);</code></pre>',
      fr: '<h1>Analyse de Données Réelles avec ToonJS</h1><p>Exemples pratiques d\'utilisation de ToonJS pour l\'analyse commerciale.</p>'
    }
  },
  'time-series-analysis': {
    id: 'time-series-analysis',
    title: {
      es: 'Análisis de Series Temporales Simplificado',
      ca: 'Anàlisi de Sèries Temporals Simplificat',
      en: 'Time Series Analysis Made Easy',
      fr: 'Analyse de Séries Temporelles Simplifiée'
    },
    date: '2025-11-10',
    author: 'Francesc Fors',
    readTime: '9',
    content: {
      es: '<h1>Análisis de Series Temporales Simplificado</h1><p>Domina las operaciones de series temporales con ToonJS.</p><h2>Operaciones Clave</h2><ul><li><strong>rolling()</strong>: Ventanas móviles para promedios y estadísticas</li><li><strong>lag()</strong>: Desplazar valores hacia adelante</li><li><strong>lead()</strong>: Desplazar valores hacia atrás</li><li><strong>diff()</strong>: Diferencias entre valores consecutivos</li><li><strong>pctChange()</strong>: Cambios porcentuales</li></ul><h2>Ejemplo: Análisis de Acciones</h2><pre><code>const acciones = ToonFactory.from(data);\n\nconst analisis = acciones\n  .rolling("precio", 7, "mean") // MA de 7 días\n  .pctChange("precio") // Cambio diario\n  .addField("señal", r => r.precio > r.precio_ma7 ? "COMPRA" : "VENTA");</code></pre>',
      ca: '<h1>Anàlisi de Sèries Temporals Simplificat</h1><p>Domina les operacions de sèries temporals amb ToonJS.</p>',
      en: '<h1>Time Series Analysis Made Easy</h1><p>Master time series operations with ToonJS.</p><h2>Key Operations</h2><ul><li><strong>rolling()</strong>: Moving windows for averages and stats</li><li><strong>lag()</strong>: Shift values forward</li><li><strong>lead()</strong>: Shift values backward</li><li><strong>diff()</strong>: Differences between consecutive values</li><li><strong>pctChange()</strong>: Percentage changes</li></ul>',
      fr: '<h1>Analyse de Séries Temporelles Simplifiée</h1><p>Maîtrisez les opérations de séries temporelles avec ToonJS.</p>'
    }
  },
  'statistical-methods': {
    id: 'statistical-methods',
    title: {
      es: 'Métodos Estadísticos en ToonJS',
      ca: 'Mètodes Estadístics en ToonJS',
      en: 'Statistical Methods in ToonJS',
      fr: 'Méthodes Statistiques dans ToonJS'
    },
    date: '2025-11-16',
    author: 'Francesc Fors',
    readTime: '12',
    content: {
      es: '<h1>Métodos Estadísticos en ToonJS</h1><p>Análisis profundo de las capacidades estadísticas de ToonJS.</p><h2>Estadísticas Descriptivas</h2><pre><code>const stats = data.stats(["ventas", "costos"]);\n// { mean, median, std, min, max, q1, q3 }</code></pre><h2>Correlación y Covarianza</h2><pre><code>const corr = data.correlation("ventas", "marketing");\nconst cov = data.covariance("precio", "demanda");</code></pre><h2>Normalización</h2><pre><code>const normalized = data.normalize("precio"); // 0-1\nconst standardized = data.standardize("ventas"); // z-score</code></pre>',
      ca: '<h1>Mètodes Estadístics en ToonJS</h1><p>Anàlisi profunda de les capacitats estadístiques de ToonJS.</p>',
      en: '<h1>Statistical Methods in ToonJS</h1><p>Deep dive into ToonJS statistical capabilities.</p><h2>Descriptive Statistics</h2><pre><code>const stats = data.stats(["sales", "costs"]);\n// { mean, median, std, min, max, q1, q3 }</code></pre>',
      fr: '<h1>Méthodes Statistiques dans ToonJS</h1><p>Plongée profonde dans les capacités statistiques de ToonJS.</p>'
    }
  },
  'data-transformation-patterns': {
    id: 'data-transformation-patterns',
    title: {
      es: 'Patrones Comunes de Transformación de Datos',
      ca: 'Patrons Comuns de Transformació de Dades',
      en: 'Common Data Transformation Patterns',
      fr: 'Modèles Courants de Transformation de Données'
    },
    date: '2025-11-16',
    author: 'Francesc Fors',
    readTime: '7',
    content: {
      es: '<h1>Patrones Comunes de Transformación de Datos</h1><p>Los patrones más útiles para trabajar con datos.</p><h2>1. Filtrar y Seleccionar</h2><pre><code>data.filter(r => r.activo)\n    .select(["nombre", "email", "fecha"])</code></pre><h2>2. Agrupar y Agregar</h2><pre><code>data.groupBy(["categoria"])\n    .aggregate({"ventas": "sum", "precio": "mean"})</code></pre><h2>3. Ordenar y Limitar</h2><pre><code>data.sortBy(["fecha"], ["desc"]).first(100)</code></pre>',
      ca: '<h1>Patrons Comuns de Transformació de Dades</h1><p>Els patrons més útils per treballar amb dades.</p>',
      en: '<h1>Common Data Transformation Patterns</h1><p>The most useful patterns for working with data.</p><h2>1. Filter and Select</h2><pre><code>data.filter(r => r.active)\n    .select(["name", "email", "date"])</code></pre>',
      fr: '<h1>Modèles Courants de Transformation de Données</h1><p>Les modèles les plus utiles pour travailler avec des données.</p>'
    }
  },
  'llm-integration-guide': {
    id: 'llm-integration-guide',
    title: {
      es: 'Integrando ToonJS con Aplicaciones de IA',
      ca: 'Integrant ToonJS amb Aplicacions d\'IA',
      en: 'Integrating ToonJS with AI Applications',
      fr: 'Intégration de ToonJS avec les Applications IA'
    },
    date: '2025-11-16',
    author: 'Francesc Fors',
    readTime: '11',
    content: {
      es: '<h1>Integrando ToonJS con Aplicaciones de IA</h1><p>Cómo usar ToonJS con ChatGPT, Claude y otros LLMs.</p><h2>Ejemplo con OpenAI</h2><pre><code>import { ToonFactory } from "@cescofors/toonjs";\nimport OpenAI from "openai";\n\nconst data = ToonFactory.from(toonString);\nconst prompt = `Analiza estos datos:\\n${data.toToon()}`;\n\nconst response = await openai.chat.completions.create({\n  model: "gpt-4",\n  messages: [{ role: "user", content: prompt }]\n});</code></pre><p>El formato TOON reduce tokens en un 50% comparado con JSON.</p>',
      ca: '<h1>Integrant ToonJS amb Aplicacions d\'IA</h1><p>Com utilitzar ToonJS amb ChatGPT, Claude i altres LLMs.</p>',
      en: '<h1>Integrating ToonJS with AI Applications</h1><p>How to use ToonJS with ChatGPT, Claude, and other LLMs.</p><h2>Example with OpenAI</h2><pre><code>import { ToonFactory } from "@cescofors/toonjs";\nimport OpenAI from "openai";\n\nconst data = ToonFactory.from(toonString);\nconst prompt = `Analyze this data:\\n${data.toToon()}`;\n\nconst response = await openai.chat.completions.create({\n  model: "gpt-4",\n  messages: [{ role: "user", content: prompt }]\n});</code></pre>',
      fr: '<h1>Intégration de ToonJS avec les Applications IA</h1><p>Comment utiliser ToonJS avec ChatGPT, Claude et autres LLMs.</p>'
    }
  },
  'performance-benchmarks': {
    id: 'performance-benchmarks',
    title: {
      es: 'Benchmarks de Rendimiento: ToonJS vs Alternativas',
      ca: 'Benchmarks de Rendiment: ToonJS vs Alternatives',
      en: 'Performance Benchmarks: ToonJS vs Alternatives',
      fr: 'Benchmarks de Performance: ToonJS vs Alternatives'
    },
    date: '2025-11-17',
    author: 'Francesc Fors',
    readTime: '6',
    content: {
      es: '<h1>Benchmarks de Rendimiento</h1><p>Comparación exhaustiva de ToonJS con otras librerías.</p><h2>Resultados</h2><table><tr><th>Operación</th><th>Manual</th><th>ToonJS</th><th>Mejora</th></tr><tr><td>Correlación</td><td>245ms</td><td>70ms</td><td>3.5x</td></tr><tr><td>Ranking</td><td>180ms</td><td>60ms</td><td>3x</td></tr><tr><td>Normalización</td><td>85ms</td><td>50ms</td><td>1.7x</td></tr><tr><td>GroupBy</td><td>320ms</td><td>140ms</td><td>2.3x</td></tr></table><p>Todos los benchmarks con datasets de 10,000 filas.</p>',
      ca: '<h1>Benchmarks de Rendiment</h1><p>Comparació exhaustiva de ToonJS amb altres llibreries.</p>',
      en: '<h1>Performance Benchmarks</h1><p>Comprehensive comparison of ToonJS with other libraries.</p><h2>Results</h2><table><tr><th>Operation</th><th>Manual</th><th>ToonJS</th><th>Improvement</th></tr><tr><td>Correlation</td><td>245ms</td><td>70ms</td><td>3.5x</td></tr><tr><td>Ranking</td><td>180ms</td><td>60ms</td><td>3x</td></tr><tr><td>Normalization</td><td>85ms</td><td>50ms</td><td>1.7x</td></tr><tr><td>GroupBy</td><td>320ms</td><td>140ms</td><td>2.3x</td></tr></table>',
      fr: '<h1>Benchmarks de Performance</h1><p>Comparaison complète de ToonJS avec d\'autres bibliothèques.</p>'
    }
  },
  'v2-roadmap': {
    id: 'v2-roadmap',
    title: {
      es: 'Hoja de Ruta de ToonJS v2.0',
      ca: 'Full de Ruta de ToonJS v2.0',
      en: 'ToonJS v2.0 Roadmap',
      fr: 'Feuille de Route ToonJS v2.0'
    },
    date: '2025-11-17',
    author: 'Francesc Fors',
    readTime: '5',
    content: {
      es: '<h1>Hoja de Ruta de ToonJS v2.0</h1><p>Nuevas funciones emocionantes en desarrollo.</p><h2>Próximas Características</h2><ul><li>🔄 <strong>Streaming</strong>: Procesamiento de datos en tiempo real</li><li>🌐 <strong>WebWorker</strong>: Paralelización automática</li><li>📊 <strong>Visualización</strong>: Gráficos integrados</li><li>🔗 <strong>SQL Syntax</strong>: Consultas tipo SQL</li><li>💾 <strong>Persistencia</strong>: Guardado y carga optimizados</li><li>🚀 <strong>WASM</strong>: Operaciones críticas en WebAssembly</li></ul><p>Fecha estimada: Q2 2026</p>',
      ca: '<h1>Full de Ruta de ToonJS v2.0</h1><p>Noves funcions emocionants en desenvolupament.</p>',
      en: '<h1>ToonJS v2.0 Roadmap</h1><p>Exciting new features in development.</p><h2>Upcoming Features</h2><ul><li>🔄 <strong>Streaming</strong>: Real-time data processing</li><li>🌐 <strong>WebWorker</strong>: Automatic parallelization</li><li>📊 <strong>Visualization</strong>: Built-in charts</li><li>🔗 <strong>SQL Syntax</strong>: SQL-like queries</li><li>💾 <strong>Persistence</strong>: Optimized save/load</li><li>🚀 <strong>WASM</strong>: Critical ops in WebAssembly</li></ul>',
      fr: '<h1>Feuille de Route ToonJS v2.0</h1><p>Nouvelles fonctionnalités passionnantes en développement.</p>'
    }
  },
  'building-data-dashboards': {
    id: 'building-data-dashboards',
    title: {
      es: 'Construyendo Dashboards de Datos Interactivos',
      ca: 'Construint Dashboards de Dades Interactius',
      en: 'Building Interactive Data Dashboards',
      fr: 'Création de Tableaux de Bord de Données Interactifs'
    },
    date: '2025-11-17',
    author: 'Francesc Fors',
    readTime: '13',
    content: {
      es: '<h1>Construyendo Dashboards de Datos Interactivos</h1><p>Crea visualizaciones usando ToonJS con React.</p><h2>Ejemplo con Chart.js</h2><pre><code>import { ToonFactory } from "@cescofors/toonjs";\nimport { Line } from "react-chartjs-2";\n\nconst Dashboard = () => {\n  const data = ToonFactory.from(toonString);\n  const ventas = data.pluck("ventas");\n  const fechas = data.pluck("fecha");\n  \n  return (\n    &lt;Line\n      data={{\n        labels: fechas,\n        datasets: [{ label: "Ventas", data: ventas }]\n      }}\n    /&gt;\n  );\n};</code></pre><p>ToonJS se integra perfectamente con cualquier librería de visualización.</p>',
      ca: '<h1>Construint Dashboards de Dades Interactius</h1><p>Crea visualitzacions utilitzant ToonJS amb React.</p>',
      en: '<h1>Building Interactive Data Dashboards</h1><p>Create visualizations using ToonJS with React.</p><h2>Example with Chart.js</h2><pre><code>import { ToonFactory } from "@cescofors/toonjs";\nimport { Line } from "react-chartjs-2";\n\nconst Dashboard = () => {\n  const data = ToonFactory.from(toonString);\n  const sales = data.pluck("sales");\n  const dates = data.pluck("date");\n  \n  return (\n    &lt;Line\n      data={{\n        labels: dates,\n        datasets: [{ label: "Sales", data: sales }]\n      }}\n    /&gt;\n  );\n};</code></pre>',
      fr: '<h1>Création de Tableaux de Bord de Données Interactifs</h1><p>Créez des visualisations avec ToonJS et React.</p>'
    }
  }
}
