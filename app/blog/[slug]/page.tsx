import { notFound } from 'next/navigation'

interface BlogPost {
  title: string
  date: string
  author: string
  content: string
}

const posts: Record<string, BlogPost> = {
  'introducing-toonjs': {
    title: 'Introducing ToonJS',
    date: '2024-11-14',
    author: 'Francesc Fors',
    content: `
# Introducing ToonJS

I'm excited to announce **ToonJS** - a high-performance TypeScript library for tabular data manipulation, designed specifically for modern JavaScript applications and optimized for LLM interactions.

## Why ToonJS?

After working with data in JavaScript for years, I kept running into the same problems:

- **Performance**: Manual data operations were slow on large datasets
- **LLM Token Usage**: Sending data to AI models consumed too many tokens
- **API Design**: Existing libraries felt clunky or over-engineered
- **Type Safety**: JavaScript data manipulation lacked proper TypeScript support

ToonJS solves all of these problems.

## The TOON Format

At the heart of ToonJS is the **TOON format** - a compact, human-readable way to represent tabular data:

\`\`\`
restaurantes[3]{nombre,ciudad,calificacion}:
  Can Cesco,Barcelona,4.8
  El Bulli,Girona,5.0
  Tickets,Barcelona,4.6
\`\`\`

This format is:
- ✅ 50% more compact than JSON for LLMs
- ✅ Human-readable and easy to edit
- ✅ Optimized for token efficiency
- ✅ Compatible with all major LLMs

## Performance

ToonJS is **fast**. Really fast.

Through DOOM-style optimizations (pre-allocation, inline calculations, set-based lookups), we achieved:

- **3.5x faster** correlation calculations
- **3x faster** ranking operations
- **1.7x faster** normalization
- **2x average** performance improvement

## Type-Safe API

Every method in ToonJS is fully typed:

\`\`\`typescript
import { ToonFactory } from '@cescofors/toonjs';

const data = ToonFactory.from(toonString);

const result = data
  .filter(r => r.calificacion > 4.5)  // ✅ Type-safe
  .sortBy(['calificacion'], ['desc']) // ✅ Autocomplete
  .select(['nombre', 'ciudad'])       // ✅ Validated
  .all();                             // ✅ Typed result
\`\`\`

## 60+ Methods

ToonJS includes everything you need for data analysis:

- **Data Access**: all(), first(), last(), at(), find(), pluck()
- **Filtering**: filter(), filterRange(), search(), distinct()
- **Transformation**: map(), select(), exclude(), addField()
- **Aggregation**: groupBy(), countBy(), aggregate(), stats()
- **Statistics**: correlation(), covariance(), normalize(), standardize()
- **Time Series**: rolling(), lag(), lead(), diff(), pctChange()
- **And much more...**

## Zero Dependencies

ToonJS is pure TypeScript with **zero runtime dependencies**. 

This means:
- Smaller bundle size
- No supply chain vulnerabilities
- Faster installation
- Complete control

## What's Next?

We're just getting started. Upcoming features include:

- 🔄 Streaming data support
- 🌐 WebWorker parallelization
- 📊 Built-in visualization
- 🔗 SQL-like query syntax
- 💾 Persistence layer

## Get Started

\`\`\`bash
npm install @cescofors/toonjs
\`\`\`

Check out the [documentation](/docs) or try it in the [playground](/playground).

## Feedback Welcome

This is v1.0, and I'd love to hear your thoughts:

- 📦 [NPM Package](https://www.npmjs.com/package/@cescofors/toonjs)
- 💻 [GitHub Repository](https://github.com/cescofors75/toonjs)
- 📧 Email: cesco@cesco.dev

Thanks for reading, and happy coding! 🚀
    `
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>
      </article>
    </div>
  )
}
