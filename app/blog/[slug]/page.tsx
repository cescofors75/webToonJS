import { notFound } from 'next/navigation'
import { allBlogPosts } from '@/lib/blog-posts'
import BlogPostClient from '@/app/blog/[slug]/BlogPostClient'

export async function generateStaticParams() {
  return Object.keys(allBlogPosts).map((slug) => ({ slug }))
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const post = allBlogPosts[params.slug as keyof typeof allBlogPosts]

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
