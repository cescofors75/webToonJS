'use client'

import { useI18n } from '@/components/I18nProvider'

interface BlogPost {
  id: string
  title: {
    es: string
    ca: string
    en: string
    fr: string
  }
  date: string
  author: string
  readTime: string
  content: {
    es: string
    ca: string
    en: string
    fr: string
  }
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const { language } = useI18n()

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">{post.title[language]}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime} min</span>
          </div>
        </header>

        <div 
          className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-6 prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:ml-6 prose-ul:mb-4 prose-li:mb-2 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-4 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-100 prose-td:border prose-td:border-gray-300 prose-td:p-2"
          dangerouslySetInnerHTML={{ __html: post.content[language] }} 
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/blog" 
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            ← Volver al blog
          </a>
        </div>
      </article>
    </div>
  )
}
