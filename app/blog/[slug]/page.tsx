import { notFound } from 'next/navigation'
import { allBlogPosts } from '@/lib/blog-posts'
import BlogPostClient from '@/app/blog/[slug]/BlogPostClient'

export function generateStaticParams() {
  return Object.keys(allBlogPosts).map((slug) => ({ slug }))
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = allBlogPosts[slug as keyof typeof allBlogPosts]

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
