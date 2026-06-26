import Link from 'next/link'
import { getPosts } from '../lib/posts'

export const revalidate = 0

const publishHighlights = [
  {
    title: 'Technical writing',
    description: 'Clear explanations of networking, communications, and adjacent systems that students can actually use.',
  },
  {
    title: 'Chapter updates',
    description: 'Short recaps from talks, workshops, and activities that make the chapter feel alive.',
  },
  {
    title: 'Student voices',
    description: 'Posts that sound like SSN students, not generic marketing copy.',
  },
]

const eventNotes = [
  {
    title: 'Talks and workshops',
    description: 'A place for speaker sessions, learning series, and practical sessions.',
  },
  {
    title: 'What is coming next',
    description: 'Use this section later for upcoming events, registrations, or chapter announcements.',
  },
]

export default async function Home() {
  const { posts, error } = await getPosts()
  const featuredPosts = posts.slice(0, 3)

  if (error) {
    return (
      <main className='mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='rounded-3xl border border-rose-400/20 bg-rose-500/10 p-8 text-rose-100'>
          <h1 className='text-3xl font-semibold'>Could not load posts</h1>
          <p className='mt-3 text-sm text-rose-100/80'>{error.message}</p>
        </div>
      </main>
    )
  }

  return (
    <main className='mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8'>
      <section className='grid gap-10 pb-16 pt-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-20 lg:pt-10'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300'>
            SSN IEEE ComSoc Blog
          </p>
          <h1 className='mt-5 font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl'>
            Signals from the student network.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
            A chapter space for technical posts, event recaps, and student writing from the SSN
            IEEE Communications Society community.
          </p>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Link
              href='/blog'
              className='inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Read the latest posts
            </Link>
            <Link
              href='/#events'
              className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10'
            >
              See chapter updates
            </Link>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]' />
          <div className='relative grid gap-4'>
            <div className='rounded-2xl border border-white/10 bg-slate-950/60 p-5'>
              <p className='text-xs uppercase tracking-[0.3em] text-cyan-300'>Chapter focus</p>
              <p className='mt-3 text-xl font-semibold text-white'>Communications, networking, and student-led ideas.</p>
            </div>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-2xl border border-white/10 bg-slate-950/60 p-5'>
                <p className='text-sm font-semibold text-white'>Writeups</p>
                <p className='mt-2 text-sm leading-6 text-slate-300'>Short technical reads with a clear student voice.</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-slate-950/60 p-5'>
                <p className='text-sm font-semibold text-white'>Events</p>
                <p className='mt-2 text-sm leading-6 text-slate-300'>Recaps and highlights from the chapter calendar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='featured' className='pb-20'>
        <div className='flex items-end justify-between gap-6'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              Latest posts
            </p>
            <h2 className='mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-white sm:text-4xl'>
              Fresh writing from the chapter team.
            </h2>
          </div>
          <Link href='/blog' className='hidden text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 md:inline-flex'>
            View all posts &rarr;
          </Link>
        </div>

        <div className='mt-8 grid gap-6 lg:grid-cols-3'>
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <Link
                href={`/blog/${post.id}`}
                key={post.id}
                className='group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]'
              >
                <div className='h-40 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.45),transparent_26%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(2,6,23,0.95))]' />
                <div className='p-6'>
                  <p className='text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300'>
                    Article
                  </p>
                  <h3 className='mt-4 text-2xl font-semibold text-white transition group-hover:text-cyan-200'>
                    {post.title}
                  </h3>
                  <p className='mt-4 line-clamp-4 text-sm leading-6 text-slate-300'>
                    {post.context}
                  </p>
                  <span className='mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200'>
                    Read article <span className='ml-2 transition group-hover:translate-x-1'>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-slate-300 lg:col-span-3'>
              No posts are published yet. Add the first ComSoc article and it will appear here.
            </div>
          )}
        </div>
      </section>

      <section className='grid gap-6 pb-20 md:grid-cols-3'>
        {publishHighlights.map((item) => (
          <div key={item.title} className='rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6'>
            <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
            <p className='mt-3 text-sm leading-6 text-slate-300'>{item.description}</p>
          </div>
        ))}
      </section>

      <section id='events' className='grid gap-6 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-8'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Events
          </p>
          <h2 className='mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold text-white'>
            Use this space for talks, workshops, and chapter announcements.
          </h2>
          <p className='mt-4 text-sm leading-6 text-slate-300'>
            Keep the blog focused on writing, and use the chapter sections for what is happening
            next.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          {eventNotes.map((item) => (
            <div key={item.title} className='rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-6'>
              <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
              <p className='mt-3 text-sm leading-6 text-slate-300'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id='gallery' className='rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(255,255,255,0.03))] p-8'>
        <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
          Gallery
        </p>
        <div className='mt-4 grid gap-6 lg:grid-cols-[1fr_0.8fr]'>
          <div>
            <h2 className='font-[family-name:var(--font-display)] text-3xl font-semibold text-white'>
              A visual archive for the chapter, ready when you want it.
            </h2>
            <p className='mt-4 max-w-2xl text-sm leading-6 text-slate-300'>
              This section can later hold speaker photos, workshop moments, and event snapshots
              without changing the overall blog structure.
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='rounded-2xl border border-white/10 bg-slate-950/60 p-5'>
              <p className='text-sm font-semibold text-white'>Speaker moments</p>
              <p className='mt-2 text-sm leading-6 text-slate-300'>Photos from guest talks and tech sessions.</p>
            </div>
            <div className='rounded-2xl border border-white/10 bg-slate-950/60 p-5'>
              <p className='text-sm font-semibold text-white'>Workshop snapshots</p>
              <p className='mt-2 text-sm leading-6 text-slate-300'>Builds, demos, and chapter activities.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
