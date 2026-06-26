import Link from 'next/link'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'

const bodyFont = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
})

const displayFont = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'SSN IEEE ComSoc',
    template: '%s | SSN IEEE ComSoc',
  },
  description: 'SSN IEEE ComSoc blog and chapter updates.',
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/#events', label: 'Events' },
  { href: '/#gallery', label: 'Gallery' },
]

function Header() {
  return (
    <header className='sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center gap-3 text-white'>
          <span className='flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]'>
            CS
          </span>
          <span className='text-sm font-semibold tracking-[0.22em] uppercase text-white/90'>
            IEEE ComSoc SSN
          </span>
        </Link>

        <nav className='hidden items-center gap-8 text-sm text-white/70 md:flex'>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='transition hover:text-cyan-300'>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href='/#events'
          className='rounded-full border border-cyan-300/40 bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300'
        >
          Join Chapter
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className='mt-20 border-t border-white/10 bg-slate-950/90'>
      <div className='mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8'>
        <div>
          <p className='font-[family-name:var(--font-display)] text-xl font-semibold tracking-wide text-white'>
            IEEE ComSoc SSN
          </p>
          <p className='mt-4 max-w-md text-sm leading-6 text-slate-300'>
            Student-written stories, event notes, and technical writing from the SSN IEEE
            Communications Society chapter.
          </p>
        </div>

        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300'>
            Navigation
          </p>
          <div className='mt-4 flex flex-col gap-3 text-sm text-slate-300'>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className='transition hover:text-white'>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300'>
            Contact
          </p>
          <div className='mt-4 space-y-3 text-sm text-slate-300'>
            <p>LinkedIn, Instagram, and chapter announcements can live here.</p>
            <p>SSN College of Engineering, Chennai</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className='min-h-full bg-slate-950 text-slate-100'>
        <div className='relative isolate flex min-h-screen flex-col overflow-hidden'>
          <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_24%),linear-gradient(180deg,#081019_0%,#020617_100%)]' />
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
