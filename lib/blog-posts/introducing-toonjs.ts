export const introducingToonjs = {
  id: 'introducing-toonjs',
  title: {
    es: 'Presentando ToonJS',
    ca: 'Presentant ToonJS',
    en: 'Introducing ToonJS',
    fr: 'Présentation de ToonJS'
  },
  date: '2025-11-09',
  author: 'Francesc Fors',
  readTime: '5',
  content: {
    es: `<h1>Presentando ToonJS</h1>

<p>Estoy emocionado de anunciar <strong>ToonJS</strong> - una librería TypeScript de alto rendimiento para manipulación de datos tabulares, diseñada específicamente para aplicaciones JavaScript modernas y optimizada para interacciones con LLMs.</p>

<h2>¿Por qué ToonJS?</h2>

<p>Después de trabajar con datos en JavaScript durante años, seguía encontrándome con los mismos problemas:</p>

<ul>
<li><strong>Rendimiento</strong>: Las operaciones manuales de datos eran lentas con grandes conjuntos de datos</li>
<li><strong>Uso de Tokens LLM</strong>: Enviar datos a modelos de IA consumía demasiados tokens</li>
<li><strong>Diseño de API</strong>: Las librerías existentes se sentían torpes o sobre-ingenierizadas</li>
<li><strong>Seguridad de Tipos</strong>: La manipulación de datos en JavaScript carecía de soporte adecuado de TypeScript</li>
</ul>

<p>ToonJS resuelve todos estos problemas.</p>

<h2>El Formato TOON</h2>

<p>En el corazón de ToonJS está el <strong>formato TOON</strong> - una forma compacta y legible de representar datos tabulares:</p>

<pre><code>restaurantes[3]{nombre,ciudad,calificacion}:
  Can Cesco,Barcelona,4.8
  El Bulli,Girona,5.0
  Tickets,Barcelona,4.6</code></pre>

<p>Este formato es:</p>
<ul>
<li>✅ 50% más compacto que JSON para LLMs</li>
<li>✅ Legible por humanos y fácil de editar</li>
<li>✅ Optimizado para eficiencia de tokens</li>
<li>✅ Compatible con todos los LLMs principales</li>
</ul>

<h2>Rendimiento</h2>

<p>ToonJS es <strong>rápido</strong>. Realmente rápido.</p>

<p>A través de optimizaciones estilo DOOM (pre-asignación, cálculos inline, búsquedas basadas en conjuntos), logramos:</p>

<ul>
<li><strong>3.5x más rápido</strong> en cálculos de correlación</li>
<li><strong>3x más rápido</strong> en operaciones de ranking</li>
<li><strong>1.7x más rápido</strong> en normalización</li>
<li><strong>2x promedio</strong> de mejora de rendimiento</li>
</ul>

<h2>API Type-Safe</h2>

<p>Cada método en ToonJS está completamente tipado:</p>

<pre><code>import { ToonFactory } from '@cescofors/toonjs';

const data = ToonFactory.from(toonString);

const result = data
  .filter(r => r.calificacion > 4.5)
  .sortBy(['calificacion'], ['desc'])
  .select(['nombre', 'ciudad'])
  .all();</code></pre>

<h2>Más de 60 Métodos</h2>

<p>ToonJS incluye todo lo que necesitas para análisis de datos:</p>

<ul>
<li><strong>Acceso a Datos</strong>: all(), first(), last(), at(), find(), pluck()</li>
<li><strong>Filtrado</strong>: filter(), filterRange(), search(), distinct()</li>
<li><strong>Transformación</strong>: map(), select(), exclude(), addField()</li>
<li><strong>Agregación</strong>: groupBy(), countBy(), aggregate(), stats()</li>
<li><strong>Estadísticas</strong>: correlation(), covariance(), normalize(), standardize()</li>
<li><strong>Series Temporales</strong>: rolling(), lag(), lead(), diff(), pctChange()</li>
</ul>

<h2>Zero Dependencies</h2>

<p>ToonJS es TypeScript puro con <strong>cero dependencias en tiempo de ejecución</strong>.</p>

<p>Esto significa:</p>
<ul>
<li>Bundle más pequeño</li>
<li>Sin vulnerabilidades de cadena de suministro</li>
<li>Instalación más rápida</li>
<li>Control completo</li>
</ul>

<h2>Comienza Ahora</h2>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Consulta la <a href="/docs">documentación</a> o pruébalo en el <a href="/playground">playground</a>.</p>

<p>¡Gracias por leer y feliz codificación! 🚀</p>`,
    ca: `<h1>Presentant ToonJS</h1>

<p>Estic emocionat d'anunciar <strong>ToonJS</strong> - una llibreria TypeScript d'alt rendiment per a manipulació de dades tabulars, dissenyada específicament per a aplicacions JavaScript modernes i optimitzada per a interaccions amb LLMs.</p>

<h2>Per què ToonJS?</h2>

<p>Després de treballar amb dades en JavaScript durant anys, sempre em trobava amb els mateixos problemes:</p>

<ul>
<li><strong>Rendiment</strong>: Les operacions manuals de dades eren lentes amb grans conjunts de dades</li>
<li><strong>Ús de Tokens LLM</strong>: Enviar dades a models d'IA consumia massa tokens</li>
<li><strong>Disseny d'API</strong>: Les llibreries existents es sentien maldestres o sobre-enginyeritzades</li>
<li><strong>Seguretat de Tipus</strong>: La manipulació de dades en JavaScript mancava de suport adequat de TypeScript</li>
</ul>

<p>ToonJS resol tots aquests problemes.</p>

<h2>El Format TOON</h2>

<p>Al cor de ToonJS hi ha el <strong>format TOON</strong> - una manera compacta i llegible de representar dades tabulars:</p>

<pre><code>restaurantes[3]{nombre,ciudad,calificacion}:
  Can Cesco,Barcelona,4.8
  El Bulli,Girona,5.0
  Tickets,Barcelona,4.6</code></pre>

<p>Aquest format és:</p>
<ul>
<li>✅ 50% més compacte que JSON per a LLMs</li>
<li>✅ Llegible per humans i fàcil d'editar</li>
<li>✅ Optimitzat per a eficiència de tokens</li>
<li>✅ Compatible amb tots els LLMs principals</li>
</ul>

<h2>Comença Ara</h2>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Consulta la <a href="/docs">documentació</a> o prova-ho al <a href="/playground">playground</a>.</p>

<p>Gràcies per llegir i feliç codificació! 🚀</p>`,
    en: `<h1>Introducing ToonJS</h1>

<p>I'm excited to announce <strong>ToonJS</strong> - a high-performance TypeScript library for tabular data manipulation, designed specifically for modern JavaScript applications and optimized for LLM interactions.</p>

<h2>Why ToonJS?</h2>

<p>After working with data in JavaScript for years, I kept running into the same problems:</p>

<ul>
<li><strong>Performance</strong>: Manual data operations were slow on large datasets</li>
<li><strong>LLM Token Usage</strong>: Sending data to AI models consumed too many tokens</li>
<li><strong>API Design</strong>: Existing libraries felt clunky or over-engineered</li>
<li><strong>Type Safety</strong>: JavaScript data manipulation lacked proper TypeScript support</li>
</ul>

<p>ToonJS solves all of these problems.</p>

<h2>The TOON Format</h2>

<p>At the heart of ToonJS is the <strong>TOON format</strong> - a compact, human-readable way to represent tabular data:</p>

<pre><code>restaurantes[3]{nombre,ciudad,calificacion}:
  Can Cesco,Barcelona,4.8
  El Bulli,Girona,5.0
  Tickets,Barcelona,4.6</code></pre>

<p>This format is:</p>
<ul>
<li>✅ 50% more compact than JSON for LLMs</li>
<li>✅ Human-readable and easy to edit</li>
<li>✅ Optimized for token efficiency</li>
<li>✅ Compatible with all major LLMs</li>
</ul>

<h2>Get Started</h2>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Check out the <a href="/docs">documentation</a> or try it in the <a href="/playground">playground</a>.</p>

<p>Thanks for reading, and happy coding! 🚀</p>`,
    fr: `<h1>Présentation de ToonJS</h1>

<p>Je suis ravi d'annoncer <strong>ToonJS</strong> - une bibliothèque TypeScript haute performance pour la manipulation de données tabulaires, conçue spécifiquement pour les applications JavaScript modernes et optimisée pour les interactions avec les LLMs.</p>

<h2>Pourquoi ToonJS?</h2>

<p>Après avoir travaillé avec des données en JavaScript pendant des années, je rencontrais toujours les mêmes problèmes:</p>

<ul>
<li><strong>Performance</strong>: Les opérations de données manuelles étaient lentes sur de grands ensembles de données</li>
<li><strong>Utilisation de Tokens LLM</strong>: L'envoi de données aux modèles d'IA consommait trop de tokens</li>
<li><strong>Conception d'API</strong>: Les bibliothèques existantes semblaient maladroites ou sur-conçues</li>
<li><strong>Sécurité des Types</strong>: La manipulation de données JavaScript manquait de support TypeScript approprié</li>
</ul>

<p>ToonJS résout tous ces problèmes.</p>

<h2>Le Format TOON</h2>

<p>Au cœur de ToonJS se trouve le <strong>format TOON</strong> - une manière compacte et lisible de représenter des données tabulaires:</p>

<pre><code>restaurantes[3]{nombre,ciudad,calificacion}:
  Can Cesco,Barcelona,4.8
  El Bulli,Girona,5.0
  Tickets,Barcelona,4.6</code></pre>

<p>Ce format est:</p>
<ul>
<li>✅ 50% plus compact que JSON pour les LLMs</li>
<li>✅ Lisible par l'homme et facile à modifier</li>
<li>✅ Optimisé pour l'efficacité des tokens</li>
<li>✅ Compatible avec tous les LLMs majeurs</li>
</ul>

<h2>Commencer</h2>

<pre><code>npm install @cescofors/toonjs</code></pre>

<p>Consultez la <a href="/docs">documentation</a> ou essayez-le dans le <a href="/playground">playground</a>.</p>

<p>Merci d'avoir lu, et bon codage! 🚀</p>`
  }
}
