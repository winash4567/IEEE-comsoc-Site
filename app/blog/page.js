import Link from 'next/link'
import { getPosts } from '../../lib/posts'

export const revalidate = 0

export const metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const { posts, error } = await getPosts()

  if (error) {
    return (
      <main className='mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='rounded-3xl border border-rose-400/20 bg-rose-500/10 p-8 text-rose-100'>
          <h1 className='text-3xl font-semibold'>Could not load blog posts</h1>
          <p className='mt-3 text-sm text-rose-100/80'>{error.message}</p>
        </div>
      </main>
    )
  }

  return (
    <main className='mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <section className='text-center'>
        <p className='text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300'>
          Blog
        </p>
        <h1 className='mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-white sm:text-6xl'>
          Writing from the SSN IEEE ComSoc chapter.
        </h1>
        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300'>
          Long-form posts, student commentary, and technical writeups that keep the blog focused
          on communications, networking, and chapter life.
        </p>
      </section>

      <section className='mt-14 grid gap-6'>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className='group grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07] lg:grid-cols-[320px_1fr]'
            >
              <div className='min-h-64 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.45),transparent_24%),radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.95))]' />
              <div className='p-7 lg:p-8'>
                <div className='flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300'>
                  <span className='rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-[0.65rem] tracking-[0.25em]'>
                    ComSoc
                  </span>
                  <span>Post {post.id}</span>
                </div>
                <h2 className='mt-5 text-3xl font-semibold text-white transition group-hover:text-cyan-200'>
                  {post.title}
                </h2>
                <p className='mt-4 max-w-3xl text-sm leading-7 text-slate-300'>
                  {post.context}
                </p>
                <span className='mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200'>
                  Read transmission <span className='ml-2 transition group-hover:translate-x-1'>&rarr;</span>
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-10 text-center text-slate-300'>
            No posts are published yet. Add your first article in Supabase and it will show up
            here.
          </div>
        )}
      </section>

      <section className='mt-16 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8'>
        <h2 className='font-[family-name:var(--font-display)] text-2xl font-semibold text-white'>
          What belongs here
        </h2>
        <p className='mt-3 max-w-3xl text-sm leading-6 text-slate-300'>
          Keep the blog focused on article-style content. Event recaps, technical explainers, and
          student perspectives all fit well here.
        </p>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {[
            'Technical articles that explain a topic clearly',
            'Chapter stories and recap posts from events',
            'Student viewpoints that sound like SSN',
          ].map((item) => (
            <div key={item} className='rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200'>
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
