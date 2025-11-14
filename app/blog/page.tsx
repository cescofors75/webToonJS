'use client'

import Link from 'next/link'
import { useI18n } from '@/components/I18nProvider'

const blogPosts = [
  {
    id: 'introducing-toonjs',
    title: 'Introducing ToonJS',
    description: 'A high-performance TypeScript library for tabular data manipulation optimized for LLM interactions.',
    date: '2024-11-14',
    author: 'Francesc Fors',
    readTime: '5',
    tags: ['announcement', 'getting-started']
  },
  {
    id: '50-percent-token-savings',
    title: '50% Token Savings with TOON Format',
    description: 'How the TOON format reduces token usage when working with LLMs while maintaining readability.',
    date: '2024-11-14',
    author: 'Francesc Fors',
    readTime: '7',
    tags: ['performance', 'llm', 'optimization']
  },
  {
    id: 'doom-optimization-techniques',
    title: 'DOOM-Style Optimizations in JavaScript',
    description: 'Learn how classic game engine techniques make ToonJS up to 3x faster than manual operations.',
    date: '2024-11-13',
    author: 'Francesc Fors',
    readTime: '10',
    tags: ['performance', 'optimization', 'technical']
  },
  {
    id: 'pandas-for-javascript',
    title: 'ToonJS: Pandas for JavaScript',
    description: 'Bringing the power of Pandas-like data manipulation to the JavaScript ecosystem.',
    date: '2024-11-12',
    author: 'Francesc Fors',
    readTime: '6',
    tags: ['comparison', 'data-science']
  }
]

export default function BlogPage() {
  const { t } = useI18n()

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
                  {post.title}
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
                {post.description}
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
