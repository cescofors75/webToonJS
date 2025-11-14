import { notFound } from 'next/navigation'
import { allBlogPosts } from '@/lib/blog-posts'
import BlogPostClient from '@/app/blog/[slug]/BlogPostClient'

export function generateStaticParams() {
  return Object.keys(allBlogPosts).map((slug) => ({ slug }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allBlogPosts[params.slug as keyof typeof allBlogPosts]

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
