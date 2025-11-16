'use client'

import Link from 'next/link'
import { useI18n } from '@/components/I18nProvider'

interface BlogPost {
  id: string
  title: {
    es: string
    ca: string
    en: string
    fr: string
  }
  description: {
    es: string
    ca: string
    en: string
    fr: string
  }
  date: string
  author: string
  readTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: 'v104-new-methods',
    title: {
      es: 'ToonJS v1.0.4: 4 Nuevos Métodos Potentes',
      ca: 'ToonJS v1.0.4: 4 Nous Mètodes Potents',
      en: 'ToonJS v1.0.4: 4 Powerful New Methods',
      fr: 'ToonJS v1.0.4: 4 Nouvelles Méthodes Puissantes'
    },
    description: {
      es: 'Descubre los 4 nuevos métodos añadidos en v1.0.4: findAll(), countBy(), getName() y setName(). ToonJS ahora tiene 64 métodos optimizados.',
      ca: 'Descobreix els 4 nous mètodes afegits a la v1.0.4: findAll(), countBy(), getName() i setName(). ToonJS ara té 64 mètodes optimitzats.',
      en: 'Discover the 4 new methods added in v1.0.4: findAll(), countBy(), getName(), and setName(). ToonJS now has 64 optimized methods.',
      fr: 'Découvrez les 4 nouvelles méthodes ajoutées dans v1.0.4: findAll(), countBy(), getName() et setName(). ToonJS a maintenant 64 méthodes optimisées.'
    },
    date: '2025-11-15',
    author: 'Francesc Fors',
    readTime: '6',
    tags: ['announcement', 'release', 'features']
  },
  {
    id: 'introducing-toonjs',
    title: {
      es: 'Presentando ToonJS',
      ca: 'Presentant ToonJS',
      en: 'Introducing ToonJS',
      fr: 'Présentation de ToonJS'
    },
    description: {
      es: 'Una librería TypeScript de alto rendimiento para manipulación de datos tabulares optimizada para interacciones con LLMs.',
      ca: 'Una llibreria TypeScript d\'alt rendiment per a manipulació de dades tabulars optimitzada per a interaccions amb LLMs.',
      en: 'A high-performance TypeScript library for tabular data manipulation optimized for LLM interactions.',
      fr: 'Une bibliothèque TypeScript haute performance pour la manipulation de données tabulaires optimisée pour les interactions LLM.'
    },
    date: '2025-11-09',
    author: 'Cesco Fors',
    readTime: '5',
    tags: ['announcement', 'getting-started']
  },
  {
    id: '50-percent-token-savings',
    title: {
      es: '50% de Ahorro en Tokens con Formato TOON',
      ca: '50% d\'Estalvi en Tokens amb Format TOON',
      en: '50% Token Savings with TOON Format',
      fr: '50% d\'Économie de Tokens avec le Format TOON'
    },
    description: {
      es: 'Cómo el formato TOON reduce el uso de tokens al trabajar con LLMs manteniendo la legibilidad.',
      ca: 'Com el format TOON redueix l\'ús de tokens quan es treballa amb LLMs mantenint la llegibilitat.',
      en: 'How the TOON format reduces token usage when working with LLMs while maintaining readability.',
      fr: 'Comment le format TOON réduit l\'utilisation de tokens avec les LLMs tout en maintenant la lisibilité.'
    },
    date: '2025-11-09',
    author: 'Cesco Fors',
    readTime: '7',
    tags: ['performance', 'llm', 'optimization']
  },
  {
    id: 'doom-optimization-techniques',
    title: {
      es: 'Optimizaciones Estilo DOOM en JavaScript',
      ca: 'Optimitzacions Estil DOOM en JavaScript',
      en: 'DOOM-Style Optimizations in JavaScript',
      fr: 'Optimisations Style DOOM en JavaScript'
    },
    description: {
      es: 'Aprende cómo las técnicas clásicas de motores de juegos hacen ToonJS un promedio de 2.2x más rápido, hasta 3.5x en operaciones como correlación.',
      ca: 'Aprèn com les tècniques clàssiques de motors de jocs fan ToonJS un promig de 2.2x més ràpid, fins a 3.5x en operacions com correlació.',
      en: 'Learn how classic game engine techniques make ToonJS average 2.2x faster, up to 3.5x in operations like correlation.',
      fr: 'Découvrez comment les techniques classiques des moteurs de jeu rendent ToonJS 2.2x plus rapide en moyenne, jusqu\'à 3.5x dans des opérations comme la corrélation.'
    },
    date: '2025-11-09',
    author: 'Cesco Fors',
    readTime: '10',
    tags: ['performance', 'optimization', 'technical']
  },
  {
    id: 'pandas-for-javascript',
    title: {
      es: 'ToonJS: Pandas para JavaScript',
      ca: 'ToonJS: Pandas per a JavaScript',
      en: 'ToonJS: Pandas for JavaScript',
      fr: 'ToonJS: Pandas pour JavaScript'
    },
    description: {
      es: 'Trayendo el poder de la manipulación de datos tipo Pandas al ecosistema JavaScript.',
      ca: 'Portant el poder de la manipulació de dades tipus Pandas a l\'ecosistema JavaScript.',
      en: 'Bringing the power of Pandas-like data manipulation to the JavaScript ecosystem.',
      fr: 'Apporter la puissance de la manipulation de données type Pandas à l\'écosystème JavaScript.'
    },
    date: '2025-11-10',
    author: 'Cesco Fors',
    readTime: '6',
    tags: ['comparison', 'data-science']
  },
  {
    id: 'real-world-data-analysis',
    title: {
      es: 'Análisis de Datos del Mundo Real con ToonJS',
      ca: 'Anàlisi de Dades del Món Real amb ToonJS',
      en: 'Real-World Data Analysis with ToonJS',
      fr: 'Analyse de Données Réelles avec ToonJS'
    },
    description: {
      es: 'Ejemplos prácticos de uso de ToonJS para analítica empresarial, desde datos de ventas hasta insights de clientes.',
      ca: 'Exemples pràctics d\'ús de ToonJS per a analítica empresarial, des de dades de vendes fins a insights de clients.',
      en: 'Practical examples of using ToonJS for business analytics, from sales data to customer insights.',
      fr: 'Exemples pratiques d\'utilisation de ToonJS pour l\'analyse commerciale, des données de ventes aux insights clients.'
    },
    date: '2025-11-10',
    author: 'Cesco Fors',
    readTime: '8',
    tags: ['tutorial', 'analytics', 'business']
  },
  {
    id: 'time-series-analysis',
    title: {
      es: 'Análisis de Series Temporales Simplificado',
      ca: 'Anàlisi de Sèries Temporals Simplificat',
      en: 'Time Series Analysis Made Easy',
      fr: 'Analyse de Séries Temporelles Simplifiée'
    },
    description: {
      es: 'Domina las operaciones de series temporales con ToonJS: ventanas móviles, lag, lead y cálculos de cambio porcentual.',
      ca: 'Domina les operacions de sèries temporals amb ToonJS: finestres mòbils, lag, lead i càlculs de canvi percentual.',
      en: 'Master time series operations with ToonJS: rolling windows, lag, lead, and percent change calculations.',
      fr: 'Maîtrisez les opérations de séries temporelles avec ToonJS: fenêtres glissantes, lag, lead et calculs de variation.'
    },
    date: '2025-11-10',
    author: 'Cesco Fors',
    readTime: '9',
    tags: ['tutorial', 'timeseries', 'advanced']
  },
  {
    id: 'statistical-methods',
    title: {
      es: 'Métodos Estadísticos en ToonJS',
      ca: 'Mètodes Estadístics en ToonJS',
      en: 'Statistical Methods in ToonJS',
      fr: 'Méthodes Statistiques dans ToonJS'
    },
    description: {
      es: 'Análisis profundo de correlación, covarianza, desviación estándar y otras operaciones estadísticas.',
      ca: 'Anàlisi profunda de correlació, covariància, desviació estàndard i altres operacions estadístiques.',
      en: 'Deep dive into correlation, covariance, standard deviation, and other statistical operations.',
      fr: 'Plongée profonde dans la corrélation, la covariance, l\'écart-type et autres opérations statistiques.'
    },
    date: '2025-11-16',
    author: 'Cesco Fors',
    readTime: '12',
    tags: ['statistics', 'tutorial', 'data-science']
  },
  {
    id: 'data-transformation-patterns',
    title: {
      es: 'Patrones Comunes de Transformación de Datos',
      ca: 'Patrons Comuns de Transformació de Dades',
      en: 'Common Data Transformation Patterns',
      fr: 'Modèles Courants de Transformation de Données'
    },
    description: {
      es: 'Aprende los patrones más útiles para limpiar, filtrar y transformar tus datos eficientemente.',
      ca: 'Aprèn els patrons més útils per netejar, filtrar i transformar les teves dades eficientment.',
      en: 'Learn the most useful patterns for cleaning, filtering, and transforming your data efficiently.',
      fr: 'Apprenez les modèles les plus utiles pour nettoyer, filtrer et transformer vos données efficacement.'
    },
    date: '2025-11-16',
    author: 'Cesco Fors',
    readTime: '7',
    tags: ['tutorial', 'patterns', 'best-practices']
  },
  {
    id: 'llm-integration-guide',
    title: {
      es: 'Integrando ToonJS con Aplicaciones de IA',
      ca: 'Integrant ToonJS amb Aplicacions d\'IA',
      en: 'Integrating ToonJS with AI Applications',
      fr: 'Intégration de ToonJS avec les Applications IA'
    },
    description: {
      es: 'Cómo usar ToonJS con ChatGPT, Claude y otros LLMs para un manejo eficiente de datos.',
      ca: 'Com utilitzar ToonJS amb ChatGPT, Claude i altres LLMs per a un maneig eficient de dades.',
      en: 'How to use ToonJS with ChatGPT, Claude, and other LLMs for efficient data handling.',
      fr: 'Comment utiliser ToonJS avec ChatGPT, Claude et autres LLMs pour une gestion efficace des données.'
    },
    date: '2025-11-16',
    author: 'Cesco Fors',
    readTime: '11',
    tags: ['llm', 'ai', 'integration', 'tutorial']
  },
  {
    id: 'performance-benchmarks',
    title: {
      es: 'Benchmarks de Rendimiento: ToonJS vs Alternativas',
      ca: 'Benchmarks de Rendiment: ToonJS vs Alternatives',
      en: 'Performance Benchmarks: ToonJS vs Alternatives',
      fr: 'Benchmarks de Performance: ToonJS vs Alternatives'
    },
    description: {
      es: 'Comparación exhaustiva de rendimiento con otras librerías de manipulación de datos en JavaScript.',
      ca: 'Comparació exhaustiva de rendiment amb altres llibreries de manipulació de dades en JavaScript.',
      en: 'Comprehensive performance comparison with other JavaScript data manipulation libraries.',
      fr: 'Comparaison complète des performances avec d\'autres bibliothèques de manipulation de données JavaScript.'
    },
    date: '2025-11-17',
    author: 'Cesco Fors',
    readTime: '6',
    tags: ['performance', 'benchmarks', 'comparison']
  },
  {
    id: 'v2-roadmap',
    title: {
      es: 'Hoja de Ruta de ToonJS v2.0',
      ca: 'Full de Ruta de ToonJS v2.0',
      en: 'ToonJS v2.0 Roadmap',
      fr: 'Feuille de Route ToonJS v2.0'
    },
    description: {
      es: 'Nuevas funciones emocionantes en la versión 2.0: soporte de streaming, optimizaciones WebAssembly y más.',
      ca: 'Noves funcions emocionants a la versió 2.0: suport de streaming, optimitzacions WebAssembly i més.',
      en: 'Exciting new features coming in version 2.0: streaming support, WebAssembly optimizations, and more.',
      fr: 'Nouvelles fonctionnalités passionnantes dans la version 2.0: support streaming, optimisations WebAssembly, etc.'
    },
    date: '2025-11-17',
    author: 'Cesco Fors',
    readTime: '5',
    tags: ['announcement', 'roadmap', 'future']
  },
  {
    id: 'building-data-dashboards',
    title: {
      es: 'Construyendo Dashboards de Datos Interactivos',
      ca: 'Construint Dashboards de Dades Interactius',
      en: 'Building Interactive Data Dashboards',
      fr: 'Création de Tableaux de Bord de Données Interactifs'
    },
    description: {
      es: 'Crea visualizaciones de datos en tiempo real usando ToonJS con React, Vue y JavaScript vanilla.',
      ca: 'Crea visualitzacions de dades en temps real utilitzant ToonJS amb React, Vue i JavaScript vanilla.',
      en: 'Create real-time data visualizations using ToonJS with React, Vue, and vanilla JavaScript.',
      fr: 'Créez des visualisations de données en temps réel avec ToonJS en utilisant React, Vue et JavaScript vanilla.'
    },
    date: '2025-11-17',
    author: 'Cesco Fors',
    readTime: '13',
    tags: ['tutorial', 'visualization', 'dashboard', 'react']
  }
]

export default function BlogPage() {
  const { t, language } = useI18n()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{t.blog.title}</h1>
        <p className="text-xl text-gray-600 mb-12">
          {t.blog.subtitle}
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-emerald-500 transition-colors"
            >
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-emerald-600 transition-colors">
                  {post.title[language]}
                </h2>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime} {t.blog.readTime}</span>
              </div>

              <p className="text-gray-600 mb-4">
                {post.description[language]}
              </p>

              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {t.blog.morePosts}
          </p>
        </div>
      </div>
    </div>
  )
}
