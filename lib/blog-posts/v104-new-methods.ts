export const v104NewMethods = {
  id: 'v104-new-methods',
  title: {
    es: 'ToonJS v1.0.4: 4 Nuevos Métodos Potentes',
    ca: 'ToonJS v1.0.4: 4 Nous Mètodes Potents',
    en: 'ToonJS v1.0.4: 4 Powerful New Methods',
    fr: 'ToonJS v1.0.4: 4 Nouvelles Méthodes Puissantes'
  },
  date: '2025-11-15',
  author: 'Francesc Fors',
  readTime: '6',
  content: {
    es: `<h1>ToonJS v1.0.4: 4 Nuevos Métodos Potentes</h1>

<p>Nos complace anunciar el lanzamiento de <strong>ToonJS v1.0.4</strong>, que añade 4 nuevos métodos a la librería, llevándonos a un total de <strong>64 métodos optimizados</strong> para manipulación de datos.</p>

<h2>🆕 Nuevos Métodos</h2>

<h3>1. findAll() - Encuentra Todas las Coincidencias</h3>

<p>A diferencia de <code>find()</code> que retorna solo la primera coincidencia, <code>findAll()</code> devuelve <strong>todas las filas</strong> que cumplen la condición.</p>

<pre><code>const data = ToonFactory.from(\`
  productos[5]{nombre,categoria,precio}:
    Laptop,Electrónica,1200
    Mouse,Electrónica,25
    Teclado,Electrónica,75
    Silla,Muebles,300
    Escritorio,Muebles,500
\`);

// Encuentra TODOS los productos de Electrónica
const electronics = data.findAll(p => p.categoria === 'Electrónica');
console.log(electronics);
// Retorna: [Laptop, Mouse, Teclado]

// Alternativa: usar filter().all()
const sameResult = data.filter(p => p.categoria === 'Electrónica').all();</code></pre>

<p><strong>¿Cuándo usar findAll()?</strong></p>
<ul>
<li>✅ Cuando quieres un array directo sin crear un nuevo Toon</li>
<li>✅ Para búsquedas simples donde no necesitas encadenar más operaciones</li>
<li>✅ Más eficiente que <code>filter().all()</code> para casos de uso simples</li>
</ul>

<h3>2. countBy() - Cuenta Ocurrencias por Valor</h3>

<p>Este método es perfecto para análisis de frecuencias y distribuciones de datos.</p>

<pre><code>const ventas = ToonFactory.from(\`
  ventas[8]{producto,ciudad,cantidad}:
    Laptop,Barcelona,2
    Mouse,Madrid,5
    Laptop,Barcelona,1
    Teclado,Madrid,3
    Laptop,Madrid,2
    Mouse,Barcelona,4
    Laptop,Barcelona,1
    Teclado,Barcelona,2
\`);

// Cuenta cuántas ventas hay por producto
const porProducto = ventas.countBy('producto');
console.log(porProducto);
// Output: {
//   Laptop: 4,
//   Mouse: 2,
//   Teclado: 2
// }

// Cuenta ventas por ciudad
const porCiudad = ventas.countBy('ciudad');
console.log(porCiudad);
// Output: {
//   Barcelona: 5,
//   Madrid: 3
// }</code></pre>

<p><strong>Casos de uso perfectos:</strong></p>
<ul>
<li>📊 Análisis de distribución de categorías</li>
<li>🎯 Identificar valores más/menos frecuentes</li>
<li>📈 Generar datos para gráficos de barras</li>
<li>🔍 Análisis de patrones en logs o eventos</li>
</ul>

<h3>3. getName() - Obtiene el Nombre del Dataset</h3>

<p>Método simple pero útil para obtener el nombre del dataset actual.</p>

<pre><code>const data = ToonFactory.from(\`
  usuarios[3]{nombre,edad}:
    Ana,25
    Luis,30
    María,28
\`);

console.log(data.getName());
// Output: "usuarios"

// Útil para logging y debugging
console.log(\`Procesando dataset: \${data.getName()}\`);
console.log(\`Total de filas: \${data.count()}\`);</code></pre>

<h3>4. setName() - Cambia el Nombre del Dataset</h3>

<p>Permite renombrar el dataset, útil en pipelines de transformación donde quieres documentar cada paso.</p>

<pre><code>const raw = ToonFactory.from(\`
  datos[4]{valor,estado}:
    100,activo
    200,inactivo
    150,activo
    300,activo
\`);

// Pipeline con nombres descriptivos
const filtered = raw
  .filter(r => r.estado === 'activo')
  .setName('datos_activos');

const normalized = filtered
  .map(r => ({ ...r, valor_norm: r.valor / 100 }))
  .setName('datos_normalizados');

console.log(filtered.getName());     // "datos_activos"
console.log(normalized.getName());   // "datos_normalizados"

// Útil al exportar
const toonStr = normalized.toToon();
// Incluye el nombre "datos_normalizados" en el formato TOON</code></pre>

<h2>📈 ToonJS Ahora Tiene 64 Métodos</h2>

<p>Con estos 4 nuevos métodos, ToonJS alcanza los <strong>64 métodos optimizados</strong>, cubriendo:</p>

<ul>
<li>🔍 <strong>Búsqueda y Filtrado</strong>: find, findAll, findIndex, filter, where, search</li>
<li>📊 <strong>Agregación</strong>: count, countBy, sum, avg, min, max, stats</li>
<li>📈 <strong>Estadísticas Avanzadas</strong>: correlation, covariance, stdDev, variance</li>
<li>⏱️ <strong>Series Temporales</strong>: rolling, lag, lead, diff, pctChange, cumsum</li>
<li>🔄 <strong>Transformaciones</strong>: map, reduce, sortBy, groupBy, pivot, transpose</li>
<li>🧮 <strong>Operaciones Matriciales</strong>: toMatrix, fromMatrix, dotProduct, normalize</li>
<li>💾 <strong>Exportación</strong>: toToon, toCSV, toJSON, toTable, toMarkdown</li>
<li>🎯 <strong>Utilidades</strong>: getName, setName, clone, distinct, unique</li>
</ul>

<h2>🚀 Instalación</h2>

<p>Actualiza a la última versión:</p>

<pre><code>npm install @cescofors/toonjs@latest</code></pre>

<h2>🔗 Más Información</h2>

<ul>
<li>📚 <a href="/docs/api-reference">Documentación API completa</a></li>
<li>🎮 <a href="/playground">Prueba el Playground</a></li>
<li>💻 <a href="https://github.com/cescofors75/toonjs">GitHub Repository</a></li>
<li>📦 <a href="https://www.npmjs.com/package/@cescofors/toonjs">NPM Package</a></li>
</ul>

<p><strong>¿Qué método nuevo te resulta más útil? Cuéntanos en GitHub!</strong></p>`,

    ca: \`<h1>ToonJS v1.0.4: 4 Nous Mètodes Potents</h1>

<p>Ens complau anunciar el llançament de <strong>ToonJS v1.0.4</strong>, que afegeix 4 nous mètodes a la llibreria, portant-nos a un total de <strong>64 mètodes optimitzats</strong> per manipulació de dades.</p>

<h2>🆕 Nous Mètodes</h2>

<h3>1. findAll() - Troba Totes les Coincidències</h3>

<p>A diferència de <code>find()</code> que retorna només la primera coincidència, <code>findAll()</code> retorna <strong>totes les files</strong> que compleixen la condició.</p>

<pre><code>const data = ToonFactory.from(\`
  productos[5]{nombre,categoria,precio}:
    Laptop,Electrónica,1200
    Mouse,Electrónica,25
    Teclado,Electrónica,75
    Silla,Muebles,300
    Escritorio,Muebles,500
\`);

// Troba TOTS els productes d'Electrònica
const electronics = data.findAll(p => p.categoria === 'Electrónica');
console.log(electronics);
// Retorna: [Laptop, Mouse, Teclado]

// Alternativa: usar filter().all()
const sameResult = data.filter(p => p.categoria === 'Electrónica').all();</code></pre>

<p><strong>Quan utilitzar findAll()?</strong></p>
<ul>
<li>✅ Quan vols un array directe sense crear un nou Toon</li>
<li>✅ Per a cerques simples on no necessites encadenar més operacions</li>
<li>✅ Més eficient que <code>filter().all()</code> per a casos d'ús simples</li>
</ul>

<h3>2. countBy() - Compta Ocurrències per Valor</h3>

<p>Aquest mètode és perfecte per anàlisis de freqüències i distribucions de dades.</p>

<pre><code>const ventas = ToonFactory.from(\`
  ventas[8]{producto,ciudad,cantidad}:
    Laptop,Barcelona,2
    Mouse,Madrid,5
    Laptop,Barcelona,1
    Teclado,Madrid,3
    Laptop,Madrid,2
    Mouse,Barcelona,4
    Laptop,Barcelona,1
    Teclado,Barcelona,2
\`);

// Compta quantes vendes hi ha per producte
const porProducto = ventas.countBy('producto');
console.log(porProducto);
// Output: {
//   Laptop: 4,
//   Mouse: 2,
//   Teclado: 2
// }

// Compta vendes per ciutat
const porCiudad = ventas.countBy('ciudad');
console.log(porCiudad);
// Output: {
//   Barcelona: 5,
//   Madrid: 3
// }</code></pre>

<p><strong>Casos d'ús perfectes:</strong></p>
<ul>
<li>📊 Anàlisi de distribució de categories</li>
<li>🎯 Identificar valors més/menys freqüents</li>
<li>📈 Generar dades per a gràfics de barres</li>
<li>🔍 Anàlisi de patrons en logs o esdeveniments</li>
</ul>

<h3>3. getName() - Obté el Nom del Dataset</h3>

<p>Mètode simple però útil per obtenir el nom del dataset actual.</p>

<pre><code>const data = ToonFactory.from(\`
  usuarios[3]{nombre,edad}:
    Ana,25
    Luis,30
    María,28
\`);

console.log(data.getName());
// Output: "usuarios"

// Útil per a logging i debugging
console.log(\`Processant dataset: \${data.getName()}\`);
console.log(\`Total de files: \${data.count()}\`);</code></pre>

<h3>4. setName() - Canvia el Nom del Dataset</h3>

<p>Permet renombrar el dataset, útil en pipelines de transformació on vols documentar cada pas.</p>

<pre><code>const raw = ToonFactory.from(\`
  datos[4]{valor,estado}:
    100,activo
    200,inactivo
    150,activo
    300,activo
\`);

// Pipeline amb noms descriptius
const filtered = raw
  .filter(r => r.estado === 'activo')
  .setName('datos_activos');

const normalized = filtered
  .map(r => ({ ...r, valor_norm: r.valor / 100 }))
  .setName('datos_normalizados');

console.log(filtered.getName());     // "datos_activos"
console.log(normalized.getName());   // "datos_normalizados"

// Útil en exportar
const toonStr = normalized.toToon();
// Inclou el nom "datos_normalizados" en el format TOON</code></pre>

<h2>📈 ToonJS Ara Té 64 Mètodes</h2>

<p>Amb aquests 4 nous mètodes, ToonJS assoleix els <strong>64 mètodes optimitzats</strong>, cobrint:</p>

<ul>
<li>🔍 <strong>Cerca i Filtratge</strong>: find, findAll, findIndex, filter, where, search</li>
<li>📊 <strong>Agregació</strong>: count, countBy, sum, avg, min, max, stats</li>
<li>📈 <strong>Estadístiques Avançades</strong>: correlation, covariance, stdDev, variance</li>
<li>⏱️ <strong>Sèries Temporals</strong>: rolling, lag, lead, diff, pctChange, cumsum</li>
<li>🔄 <strong>Transformacions</strong>: map, reduce, sortBy, groupBy, pivot, transpose</li>
<li>🧮 <strong>Operacions Matricials</strong>: toMatrix, fromMatrix, dotProduct, normalize</li>
<li>💾 <strong>Exportació</strong>: toToon, toCSV, toJSON, toTable, toMarkdown</li>
<li>🎯 <strong>Utilitats</strong>: getName, setName, clone, distinct, unique</li>
</ul>

<h2>🚀 Instal·lació</h2>

<p>Actualitza a l'última versió:</p>

<pre><code>npm install @cescofors/toonjs@latest</code></pre>

<h2>🔗 Més Informació</h2>

<ul>
<li>📚 <a href="/docs/api-reference">Documentació API completa</a></li>
<li>🎮 <a href="/playground">Prova el Playground</a></li>
<li>💻 <a href="https://github.com/cescofors75/toonjs">GitHub Repository</a></li>
<li>📦 <a href="https://www.npmjs.com/package/@cescofors/toonjs">NPM Package</a></li>
</ul>

<p><strong>Quin nou mètode et resulta més útil? Explica'ns-ho a GitHub!</strong></p>\`,

    en: \`<h1>ToonJS v1.0.4: 4 Powerful New Methods</h1>

<p>We're excited to announce the release of <strong>ToonJS v1.0.4</strong>, which adds 4 new methods to the library, bringing us to a total of <strong>64 optimized methods</strong> for data manipulation.</p>

<h2>🆕 New Methods</h2>

<h3>1. findAll() - Find All Matches</h3>

<p>Unlike <code>find()</code> which returns only the first match, <code>findAll()</code> returns <strong>all rows</strong> that meet the condition.</p>

<pre><code>const data = ToonFactory.from(\`
  products[5]{name,category,price}:
    Laptop,Electronics,1200
    Mouse,Electronics,25
    Keyboard,Electronics,75
    Chair,Furniture,300
    Desk,Furniture,500
\`);

// Find ALL electronics products
const electronics = data.findAll(p => p.category === 'Electronics');
console.log(electronics);
// Returns: [Laptop, Mouse, Keyboard]

// Alternative: using filter().all()
const sameResult = data.filter(p => p.category === 'Electronics').all();</code></pre>

<p><strong>When to use findAll()?</strong></p>
<ul>
<li>✅ When you want a direct array without creating a new Toon</li>
<li>✅ For simple searches where you don't need to chain more operations</li>
<li>✅ More efficient than <code>filter().all()</code> for simple use cases</li>
</ul>

<h3>2. countBy() - Count Occurrences by Value</h3>

<p>This method is perfect for frequency analysis and data distributions.</p>

<pre><code>const sales = ToonFactory.from(\`
  sales[8]{product,city,quantity}:
    Laptop,Barcelona,2
    Mouse,Madrid,5
    Laptop,Barcelona,1
    Keyboard,Madrid,3
    Laptop,Madrid,2
    Mouse,Barcelona,4
    Laptop,Barcelona,1
    Keyboard,Barcelona,2
\`);

// Count how many sales per product
const byProduct = sales.countBy('product');
console.log(byProduct);
// Output: {
//   Laptop: 4,
//   Mouse: 2,
//   Keyboard: 2
// }

// Count sales by city
const byCity = sales.countBy('city');
console.log(byCity);
// Output: {
//   Barcelona: 5,
//   Madrid: 3
// }</code></pre>

<p><strong>Perfect use cases:</strong></p>
<ul>
<li>📊 Category distribution analysis</li>
<li>🎯 Identify most/least frequent values</li>
<li>📈 Generate data for bar charts</li>
<li>🔍 Pattern analysis in logs or events</li>
</ul>

<h3>3. getName() - Get Dataset Name</h3>

<p>Simple but useful method to get the current dataset name.</p>

<pre><code>const data = ToonFactory.from(\`
  users[3]{name,age}:
    Ana,25
    Luis,30
    Maria,28
\`);

console.log(data.getName());
// Output: "users"

// Useful for logging and debugging
console.log(\`Processing dataset: \${data.getName()}\`);
console.log(\`Total rows: \${data.count()}\`);</code></pre>

<h3>4. setName() - Change Dataset Name</h3>

<p>Allows renaming the dataset, useful in transformation pipelines where you want to document each step.</p>

<pre><code>const raw = ToonFactory.from(\`
  data[4]{value,status}:
    100,active
    200,inactive
    150,active
    300,active
\`);

// Pipeline with descriptive names
const filtered = raw
  .filter(r => r.status === 'active')
  .setName('active_data');

const normalized = filtered
  .map(r => ({ ...r, norm_value: r.value / 100 }))
  .setName('normalized_data');

console.log(filtered.getName());     // "active_data"
console.log(normalized.getName());   // "normalized_data"

// Useful when exporting
const toonStr = normalized.toToon();
// Includes the name "normalized_data" in TOON format</code></pre>

<h2>📈 ToonJS Now Has 64 Methods</h2>

<p>With these 4 new methods, ToonJS reaches <strong>64 optimized methods</strong>, covering:</p>

<ul>
<li>🔍 <strong>Search & Filter</strong>: find, findAll, findIndex, filter, where, search</li>
<li>📊 <strong>Aggregation</strong>: count, countBy, sum, avg, min, max, stats</li>
<li>📈 <strong>Advanced Statistics</strong>: correlation, covariance, stdDev, variance</li>
<li>⏱️ <strong>Time Series</strong>: rolling, lag, lead, diff, pctChange, cumsum</li>
<li>🔄 <strong>Transformations</strong>: map, reduce, sortBy, groupBy, pivot, transpose</li>
<li>🧮 <strong>Matrix Operations</strong>: toMatrix, fromMatrix, dotProduct, normalize</li>
<li>💾 <strong>Export</strong>: toToon, toCSV, toJSON, toTable, toMarkdown</li>
<li>🎯 <strong>Utilities</strong>: getName, setName, clone, distinct, unique</li>
</ul>

<h2>🚀 Installation</h2>

<p>Update to the latest version:</p>

<pre><code>npm install @cescofors/toonjs@latest</code></pre>

<h2>🔗 More Information</h2>

<ul>
<li>📚 <a href="/docs/api-reference">Full API Documentation</a></li>
<li>🎮 <a href="/playground">Try the Playground</a></li>
<li>💻 <a href="https://github.com/cescofors75/toonjs">GitHub Repository</a></li>
<li>📦 <a href="https://www.npmjs.com/package/@cescofors/toonjs">NPM Package</a></li>
</ul>

<p><strong>Which new method do you find most useful? Let us know on GitHub!</strong></p>\`,

    fr: \`<h1>ToonJS v1.0.4: 4 Nouvelles Méthodes Puissantes</h1>

<p>Nous sommes ravis d'annoncer la sortie de <strong>ToonJS v1.0.4</strong>, qui ajoute 4 nouvelles méthodes à la bibliothèque, nous amenant à un total de <strong>64 méthodes optimisées</strong> pour la manipulation de données.</p>

<h2>🆕 Nouvelles Méthodes</h2>

<h3>1. findAll() - Trouve Toutes les Correspondances</h3>

<p>Contrairement à <code>find()</code> qui retourne seulement la première correspondance, <code>findAll()</code> retourne <strong>toutes les lignes</strong> qui remplissent la condition.</p>

<pre><code>const data = ToonFactory.from(\`
  productos[5]{nombre,categoria,precio}:
    Laptop,Electrónica,1200
    Mouse,Electrónica,25
    Teclado,Electrónica,75
    Silla,Muebles,300
    Escritorio,Muebles,500
\`);

// Trouve TOUS les produits d'Électronique
const electronics = data.findAll(p => p.categoria === 'Electrónica');
console.log(electronics);
// Retourne: [Laptop, Mouse, Teclado]

// Alternative: utiliser filter().all()
const sameResult = data.filter(p => p.categoria === 'Electrónica').all();</code></pre>

<p><strong>Quand utiliser findAll()?</strong></p>
<ul>
<li>✅ Quand vous voulez un tableau direct sans créer un nouveau Toon</li>
<li>✅ Pour des recherches simples où vous n'avez pas besoin d'enchaîner plus d'opérations</li>
<li>✅ Plus efficace que <code>filter().all()</code> pour des cas d'utilisation simples</li>
</ul>

<h3>2. countBy() - Compte les Occurrences par Valeur</h3>

<p>Cette méthode est parfaite pour l'analyse de fréquences et les distributions de données.</p>

<pre><code>const ventas = ToonFactory.from(\`
  ventas[8]{producto,ciudad,cantidad}:
    Laptop,Barcelona,2
    Mouse,Madrid,5
    Laptop,Barcelona,1
    Teclado,Madrid,3
    Laptop,Madrid,2
    Mouse,Barcelona,4
    Laptop,Barcelona,1
    Teclado,Barcelona,2
\`);

// Compte combien de ventes il y a par produit
const porProducto = ventas.countBy('producto');
console.log(porProducto);
// Output: {
//   Laptop: 4,
//   Mouse: 2,
//   Teclado: 2
// }

// Compte les ventes par ville
const porCiudad = ventas.countBy('ciudad');
console.log(porCiudad);
// Output: {
//   Barcelona: 5,
//   Madrid: 3
// }</code></pre>

<p><strong>Cas d'utilisation parfaits :</strong></p>
<ul>
<li>📊 Analyse de distribution de catégories</li>
<li>🎯 Identifier les valeurs les plus/moins fréquentes</li>
<li>📈 Générer des données pour des graphiques à barres</li>
<li>🔍 Analyse de modèles dans les logs ou événements</li>
</ul>

<h3>3. getName() - Obtient le Nom du Dataset</h3>

<p>Méthode simple mais utile pour obtenir le nom du dataset actuel.</p>

<pre><code>const data = ToonFactory.from(\`
  usuarios[3]{nombre,edad}:
    Ana,25
    Luis,30
    María,28
\`);

console.log(data.getName());
// Output: "usuarios"

// Utile pour le logging et le débogage
console.log(\`Traitement du dataset: \${data.getName()}\`);
console.log(\`Total de lignes: \${data.count()}\`);</code></pre>

<h3>4. setName() - Change le Nom du Dataset</h3>

<p>Permet de renommer le dataset, utile dans les pipelines de transformation où vous voulez documenter chaque étape.</p>

<pre><code>const raw = ToonFactory.from(\`
  datos[4]{valor,estado}:
    100,activo
    200,inactivo
    150,activo
    300,activo
\`);

// Pipeline avec des noms descriptifs
const filtered = raw
  .filter(r => r.estado === 'activo')
  .setName('datos_activos');

const normalized = filtered
  .map(r => ({ ...r, valor_norm: r.valor / 100 }))
  .setName('datos_normalizados');

console.log(filtered.getName());     // "datos_activos"
console.log(normalized.getName());   // "datos_normalizados"

// Utile lors de l'exportation
const toonStr = normalized.toToon();
// Inclut le nom "datos_normalizados" au format TOON</code></pre>

<h2>📈 ToonJS A Maintenant 64 Méthodes</h2>

<p>Avec ces 4 nouvelles méthodes, ToonJS atteint <strong>64 méthodes optimisées</strong>, couvrant :</p>

<ul>
<li>🔍 <strong>Recherche et Filtrage</strong>: find, findAll, findIndex, filter, where, search</li>
<li>📊 <strong>Agrégation</strong>: count, countBy, sum, avg, min, max, stats</li>
<li>📈 <strong>Statistiques Avancées</strong>: correlation, covariance, stdDev, variance</li>
<li>⏱️ <strong>Séries Temporelles</strong>: rolling, lag, lead, diff, pctChange, cumsum</li>
<li>🔄 <strong>Transformations</strong>: map, reduce, sortBy, groupBy, pivot, transpose</li>
<li>🧮 <strong>Opérations Matricielles</strong>: toMatrix, fromMatrix, dotProduct, normalize</li>
<li>💾 <strong>Exportation</strong>: toToon, toCSV, toJSON, toTable, toMarkdown</li>
<li>🎯 <strong>Utilitaires</strong>: getName, setName, clone, distinct, unique</li>
</ul>

<h2>🚀 Installation</h2>

<p>Mettez à jour vers la dernière version :</p>

<pre><code>npm install @cescofors/toonjs@latest</code></pre>

<h2>🔗 Plus d'Informations</h2>

<ul>
<li>📚 <a href="/docs/api-reference">Documentation API complète</a></li>
<li>🎮 <a href="/playground">Essayez le Playground</a></li>
<li>💻 <a href="https://github.com/cescofors75/toonjs">Dépôt GitHub</a></li>
<li>📦 <a href="https://www.npmjs.com/package/@cescofors/toonjs">Paquet NPM</a></li>
</ul>

<p><strong>Quelle nouvelle méthode trouvez-vous la plus utile ? Dites-le-nous sur GitHub !</strong></p>\`
  }
}
