import Link from 'next/link'
import { getPostById } from '../../../lib/posts'

export const revalidate = 0

export async function generateMetadata({ params }) {
  const { id } = params
  const { post } = await getPostById(id)

  return {
    title: post ? post.title : 'Post not found',
  }
}

export default async function BlogPostPage({ params }) {
  const { id } = params
  const { post, error } = await getPostById(id)

  if (!post) {
    return (
      <main className='mx-auto flex w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8'>
        <div className='w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Blog post
          </p>
          <h1 className='mt-4 text-3xl font-semibold text-white'>Post not found</h1>
          <p className='mt-3 text-sm leading-6 text-slate-300'>
            The requested article is not available right now.
            {error?.message ? ` ${error.message}` : ''}
          </p>
          <Link
            href='/blog'
            className='mt-8 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'
          >
            Back to blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='flex flex-wrap items-center gap-3 text-sm text-slate-300'>
        <Link href='/blog' className='font-semibold text-cyan-300 transition hover:text-cyan-200'>
          &larr; Back to blog
        </Link>
        <span className='hidden sm:inline'>/</span>
        <span>Post {post.id}</span>
      </div>

      <article className='mt-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20'>
        <div className='h-64 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.45),transparent_24%),radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.95))]' />
        <div className='p-8 sm:p-10'>
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            SSN IEEE ComSoc
          </p>
          <h1 className='mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            {post.title}
          </h1>
          <div className='mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-400'>
              Article text
            </p>
            <div className='mt-4 whitespace-pre-wrap text-base leading-8 text-slate-200'>
              {post.context}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
