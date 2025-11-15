'use client'

import { useI18n } from '@/components/I18nProvider'

export default function ApiReferencePage() {
  const { t, language } = useI18n()
  
  const methods = {
    filtering: [
      { name: 'filter', desc: { es: 'Filtra filas basadas en una condición', ca: 'Filtra files basades en una condició', en: 'Filter rows based on a condition', fr: 'Filtrer les lignes selon une condition' }, returns: 'Toon' },
      { name: 'where', desc: { es: 'Filtra por condiciones múltiples', ca: 'Filtra per condicions múltiples', en: 'Filter by multiple conditions', fr: 'Filtrer par plusieurs conditions' }, returns: 'Toon' },
      { name: 'find', desc: { es: 'Encuentra la primera fila que cumple la condición', ca: 'Troba la primera fila que compleix la condició', en: 'Find the first row matching condition', fr: 'Trouve la première ligne correspondante' }, returns: 'Row | undefined' },
      { name: 'findAll', desc: { es: 'Encuentra todas las filas que cumplen la condición', ca: 'Troba totes les files que compleixen la condició', en: 'Find all rows matching condition', fr: 'Trouve toutes les lignes correspondantes' }, returns: 'Row[]' },
      { name: 'unique', desc: { es: 'Obtiene valores únicos de una columna', ca: 'Obté valors únics d\'una columna', en: 'Get unique values from a column', fr: 'Obtenir les valeurs uniques d\'une colonne' }, returns: 'any[]' },
      { name: 'distinct', desc: { es: 'Elimina filas duplicadas', ca: 'Elimina files duplicades', en: 'Remove duplicate rows', fr: 'Supprimer les lignes dupliquées' }, returns: 'Toon' },
    ],
    selection: [
      { name: 'select', desc: { es: 'Selecciona columnas específicas', ca: 'Selecciona columnes específiques', en: 'Select specific columns', fr: 'Sélectionner des colonnes spécifiques' }, returns: 'Toon' },
      { name: 'drop', desc: { es: 'Elimina columnas específicas', ca: 'Elimina columnes específiques', en: 'Drop specific columns', fr: 'Supprimer des colonnes spécifiques' }, returns: 'Toon' },
      { name: 'head', desc: { es: 'Obtiene las primeras n filas', ca: 'Obté les primeres n files', en: 'Get first n rows', fr: 'Obtenir les n premières lignes' }, returns: 'Toon' },
      { name: 'tail', desc: { es: 'Obtiene las últimas n filas', ca: 'Obté les últimes n files', en: 'Get last n rows', fr: 'Obtenir les n dernières lignes' }, returns: 'Toon' },
      { name: 'take', desc: { es: 'Toma las primeras n filas', ca: 'Pren les primeres n files', en: 'Take first n rows', fr: 'Prendre les n premières lignes' }, returns: 'Toon' },
      { name: 'skip', desc: { es: 'Salta las primeras n filas', ca: 'Salta les primeres n files', en: 'Skip first n rows', fr: 'Sauter les n premières lignes' }, returns: 'Toon' },
      { name: 'slice', desc: { es: 'Obtiene un rango de filas', ca: 'Obté un rang de files', en: 'Get a range of rows', fr: 'Obtenir une plage de lignes' }, returns: 'Toon' },
    ],
    statistics: [
      { name: 'sum', desc: { es: 'Suma de una columna', ca: 'Suma d\'una columna', en: 'Sum of a column', fr: 'Somme d\'une colonne' }, returns: 'number' },
      { name: 'avg', desc: { es: 'Promedio de una columna', ca: 'Mitjana d\'una columna', en: 'Average of a column', fr: 'Moyenne d\'une colonne' }, returns: 'number' },
      { name: 'mean', desc: { es: 'Media de una columna', ca: 'Mitjana d\'una columna', en: 'Mean of a column', fr: 'Moyenne d\'une colonne' }, returns: 'number' },
      { name: 'median', desc: { es: 'Mediana de una columna', ca: 'Mediana d\'una columna', en: 'Median of a column', fr: 'Médiane d\'une colonne' }, returns: 'number' },
      { name: 'mode', desc: { es: 'Moda de una columna', ca: 'Moda d\'una columna', en: 'Mode of a column', fr: 'Mode d\'une colonne' }, returns: 'any' },
      { name: 'min', desc: { es: 'Valor mínimo de una columna', ca: 'Valor mínim d\'una columna', en: 'Minimum value of a column', fr: 'Valeur minimale d\'une colonne' }, returns: 'number' },
      { name: 'max', desc: { es: 'Valor máximo de una columna', ca: 'Valor màxim d\'una columna', en: 'Maximum value of a column', fr: 'Valeur maximale d\'une colonne' }, returns: 'number' },
      { name: 'count', desc: { es: 'Cuenta las filas', ca: 'Compta les files', en: 'Count rows', fr: 'Compter les lignes' }, returns: 'number' },
      { name: 'countBy', desc: { es: 'Cuenta frecuencias por categoría', ca: 'Compta freqüències per categoria', en: 'Count frequencies by category', fr: 'Compter les fréquences par catégorie' }, returns: 'Record<string, number>' },
      { name: 'stats', desc: { es: 'Estadísticas completas (min, max, avg, sum, count, median)', ca: 'Estadístiques completes', en: 'Complete statistics', fr: 'Statistiques complètes' }, returns: 'Stats' },
      { name: 'variance', desc: { es: 'Varianza de una columna', ca: 'Variància d\'una columna', en: 'Variance of a column', fr: 'Variance d\'une colonne' }, returns: 'number' },
      { name: 'stdDev', desc: { es: 'Desviación estándar', ca: 'Desviació estàndard', en: 'Standard deviation', fr: 'Écart type' }, returns: 'number' },
      { name: 'correlation', desc: { es: 'Correlación entre dos columnas', ca: 'Correlació entre dues columnes', en: 'Correlation between two columns', fr: 'Corrélation entre deux colonnes' }, returns: 'number' },
      { name: 'covariance', desc: { es: 'Covarianza entre dos columnas', ca: 'Covariància entre dues columnes', en: 'Covariance between two columns', fr: 'Covariance entre deux colonnes' }, returns: 'number' },
      { name: 'quantile', desc: { es: 'Cuantil de una columna', ca: 'Quantil d\'una columna', en: 'Quantile of a column', fr: 'Quantile d\'une colonne' }, returns: 'number' },
      { name: 'percentile', desc: { es: 'Percentil de una columna', ca: 'Percentil d\'una columna', en: 'Percentile of a column', fr: 'Percentile d\'une colonne' }, returns: 'number' },
    ],
    timeSeries: [
      { name: 'rolling', desc: { es: 'Ventana deslizante (avg, sum, min, max)', ca: 'Finestra lliscant', en: 'Rolling window operations', fr: 'Opérations de fenêtre glissante' }, returns: 'Toon' },
      { name: 'lag', desc: { es: 'Retrasa valores n períodos', ca: 'Retarda valors n períodes', en: 'Lag values by n periods', fr: 'Décaler les valeurs de n périodes' }, returns: 'Toon' },
      { name: 'lead', desc: { es: 'Adelanta valores n períodos', ca: 'Avança valors n períodes', en: 'Lead values by n periods', fr: 'Avancer les valeurs de n périodes' }, returns: 'Toon' },
      { name: 'diff', desc: { es: 'Diferencia entre valores consecutivos', ca: 'Diferència entre valors consecutius', en: 'Difference between consecutive values', fr: 'Différence entre valeurs consécutives' }, returns: 'Toon' },
      { name: 'pctChange', desc: { es: 'Cambio porcentual entre valores', ca: 'Canvi percentual entre valors', en: 'Percentage change between values', fr: 'Changement en pourcentage' }, returns: 'Toon' },
      { name: 'cumSum', desc: { es: 'Suma acumulativa', ca: 'Suma acumulativa', en: 'Cumulative sum', fr: 'Somme cumulative' }, returns: 'Toon' },
      { name: 'cumProd', desc: { es: 'Producto acumulativo', ca: 'Producte acumulatiu', en: 'Cumulative product', fr: 'Produit cumulatif' }, returns: 'Toon' },
      { name: 'ewm', desc: { es: 'Media móvil exponencial', ca: 'Mitjana mòbil exponencial', en: 'Exponential weighted moving average', fr: 'Moyenne mobile exponentielle' }, returns: 'Toon' },
    ],
    transformation: [
      { name: 'sortBy', desc: { es: 'Ordena por columnas', ca: 'Ordena per columnes', en: 'Sort by columns', fr: 'Trier par colonnes' }, returns: 'Toon' },
      { name: 'groupBy', desc: { es: 'Agrupa por columnas', ca: 'Agrupa per columnes', en: 'Group by columns', fr: 'Grouper par colonnes' }, returns: 'Toon' },
      { name: 'map', desc: { es: 'Transforma cada fila', ca: 'Transforma cada fila', en: 'Transform each row', fr: 'Transformer chaque ligne' }, returns: 'Toon' },
      { name: 'apply', desc: { es: 'Aplica función a una columna', ca: 'Aplica funció a una columna', en: 'Apply function to a column', fr: 'Appliquer une fonction à une colonne' }, returns: 'Toon' },
      { name: 'fillna', desc: { es: 'Rellena valores nulos', ca: 'Omple valors nuls', en: 'Fill null values', fr: 'Remplir les valeurs nulles' }, returns: 'Toon' },
      { name: 'dropna', desc: { es: 'Elimina filas con nulos', ca: 'Elimina files amb nuls', en: 'Drop rows with nulls', fr: 'Supprimer les lignes avec nulls' }, returns: 'Toon' },
      { name: 'rename', desc: { es: 'Renombra columnas', ca: 'Renombra columnes', en: 'Rename columns', fr: 'Renommer les colonnes' }, returns: 'Toon' },
      { name: 'pivot', desc: { es: 'Tabla pivote', ca: 'Taula pivotant', en: 'Pivot table', fr: 'Tableau croisé dynamique' }, returns: 'Toon' },
      { name: 'melt', desc: { es: 'Unpivot de tabla pivote', ca: 'Unpivot de taula pivotant', en: 'Unpivot pivot table', fr: 'Dé-pivoter tableau' }, returns: 'Toon' },
      { name: 'rank', desc: { es: 'Rankea valores', ca: 'Rankeja valors', en: 'Rank values', fr: 'Classer les valeurs' }, returns: 'Toon' },
      { name: 'percentRank', desc: { es: 'Ranking percentual', ca: 'Ranking percentual', en: 'Percent ranking', fr: 'Classement en pourcentage' }, returns: 'Toon' },
    ],
    matrix: [
      { name: 'transpose', desc: { es: 'Transpone la matriz', ca: 'Transposa la matriu', en: 'Transpose matrix', fr: 'Transposer la matrice' }, returns: 'Toon' },
      { name: 'join', desc: { es: 'Une con otro dataset', ca: 'Uneix amb un altre dataset', en: 'Join with another dataset', fr: 'Joindre avec un autre dataset' }, returns: 'Toon' },
      { name: 'concat', desc: { es: 'Concatena datasets', ca: 'Concatena datasets', en: 'Concatenate datasets', fr: 'Concaténer les datasets' }, returns: 'Toon' },
      { name: 'merge', desc: { es: 'Combina datasets', ca: 'Combina datasets', en: 'Merge datasets', fr: 'Fusionner les datasets' }, returns: 'Toon' },
    ],
    export: [
      { name: 'all', desc: { es: 'Obtiene todos los datos como array', ca: 'Obté totes les dades com array', en: 'Get all data as array', fr: 'Obtenir toutes les données en tableau' }, returns: 'Row[]' },
      { name: 'toJSON', desc: { es: 'Exporta a JSON', ca: 'Exporta a JSON', en: 'Export to JSON', fr: 'Exporter en JSON' }, returns: 'string' },
      { name: 'toCSV', desc: { es: 'Exporta a CSV', ca: 'Exporta a CSV', en: 'Export to CSV', fr: 'Exporter en CSV' }, returns: 'string' },
      { name: 'toToon', desc: { es: 'Exporta a formato TOON', ca: 'Exporta a format TOON', en: 'Export to TOON format', fr: 'Exporter au format TOON' }, returns: 'string' },
      { name: 'toTable', desc: { es: 'Muestra como tabla ASCII', ca: 'Mostra com taula ASCII', en: 'Display as ASCII table', fr: 'Afficher en tableau ASCII' }, returns: 'string' },
      { name: 'toMarkdown', desc: { es: 'Exporta a tabla Markdown', ca: 'Exporta a taula Markdown', en: 'Export to Markdown table', fr: 'Exporter en tableau Markdown' }, returns: 'string' },
    ],
    utilities: [
      { name: 'getName', desc: { es: 'Obtiene el nombre del dataset', ca: 'Obté el nom del dataset', en: 'Get dataset name', fr: 'Obtenir le nom du dataset' }, returns: 'string' },
      { name: 'setName', desc: { es: 'Establece el nombre del dataset', ca: 'Estableix el nom del dataset', en: 'Set dataset name', fr: 'Définir le nom du dataset' }, returns: 'Toon' },
    ],
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{t.docs.apiReference.title}</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        {t.docs.apiReference.subtitle}
      </p>

      {/* Filtering Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.filtering}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.filtering.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Selection Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.selection}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.selection.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Statistics Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.statistics}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.statistics.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Time Series Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.timeSeries}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.timeSeries.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Transformation Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.transformation}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.transformation.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Matrix Operations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.matrix}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.matrix.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Export Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.export}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.export.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Utility Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">{t.docs.apiReference.utilities}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodName}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodDesc}</th>
                <th className="px-4 py-2 border-b text-left">{t.docs.apiReference.methodReturn}</th>
              </tr>
            </thead>
            <tbody>
              {methods.utilities.map((method, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b font-mono text-sm text-emerald-600">{method.name}</td>
                  <td className="px-4 py-2 border-b">{method.desc[language]}</td>
                  <td className="px-4 py-2 border-b font-mono text-sm">{method.returns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
