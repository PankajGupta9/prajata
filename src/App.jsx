import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = ['Work', 'Services', 'About', 'Journal']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#18211c]">
      <header className="sticky top-0 z-50 border-b border-[#18211c]/10 bg-[#f5f3ed]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Primary navigation">
          <a href="#" className="font-serif text-2xl font-bold tracking-wide" aria-label="Prajata home">
            PRAJATA<span className="text-[#d65d42]">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold transition-colors hover:text-[#d65d42]">
                {link}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#18211c] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 md:flex">
            Start a project <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#18211c]/20 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#18211c]/10 bg-[#f5f3ed] px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-[#18211c]/10 py-3 text-lg font-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1fr_0.82fr] md:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d65d42]">
              <span className="h-px w-9 bg-[#d65d42]" /> Independent creative studio
            </p>
            <h1 className="font-serif text-6xl leading-[0.92] font-bold sm:text-7xl md:text-8xl">
              Ideas with<br />room to <em className="font-normal text-[#d65d42]">grow.</em>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-8 text-[#18211c]/70">
              We shape thoughtful brands, digital experiences, and visual stories for people building what comes next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="flex items-center gap-2 rounded-full bg-[#d65d42] px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                Explore our work <ArrowRight size={17} />
              </a>
              <a href="#about" className="rounded-full border border-[#18211c]/20 px-6 py-4 text-sm font-bold transition-colors hover:bg-white">
                About the studio
              </a>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-sm bg-[#b8c4ba] md:min-h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Bright creative studio interior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-sm bg-[#f5f3ed] p-5 md:left-auto md:w-[260px]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#18211c]/50">Featured</p>
                <p className="mt-1 font-serif text-xl font-bold">The Common Ground</p>
              </div>
              <ArrowRight size={20} />
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-[#18211c]/10 bg-white">
          <div className="mx-auto grid max-w-7xl md:grid-cols-3">
            {[
              ['01', 'Brand strategy', 'Positioning, identity systems, and the ideas that give brands lasting direction.'],
              ['02', 'Digital design', 'Useful, distinctive websites and products built around real human behavior.'],
              ['03', 'Creative direction', 'Campaigns and visual worlds that turn attention into meaningful connection.'],
            ].map(([number, title, copy], index) => (
              <article key={title} className={`p-8 md:min-h-64 md:p-10 ${index < 2 ? 'border-b border-[#18211c]/10 md:border-r md:border-b-0' : ''}`}>
                <span className="text-xs font-bold text-[#d65d42]">{number}</span>
                <h2 className="mt-8 font-serif text-3xl font-bold">{title}</h2>
                <p className="mt-4 leading-7 text-[#18211c]/60">{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#18211c] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9a89c]">Have a project in mind?</p>
              <a href="mailto:hello@prajata.studio" className="mt-3 block font-serif text-3xl font-bold sm:text-5xl">hello@prajata.studio</a>
            </div>
            <a href="#" className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#d65d42] transition-transform hover:-translate-y-1" aria-label="Back to top">
              <ArrowRight className="-rotate-45" size={22} />
            </a>
          </div>
          <div className="flex flex-col gap-6 pt-7 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Prajata Studio</p>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="font-bold hover:text-white">IG</a>
              <a href="#" aria-label="LinkedIn" className="font-bold hover:text-white">LI</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
