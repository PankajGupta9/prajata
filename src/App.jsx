import { useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, Leaf, Menu, X } from 'lucide-react'

const navLinks = ['About Dr.', 'Programs', 'Care areas', 'FAQ']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#18211c]">
      <header className="sticky top-0 z-50 border-b border-[#38204f]/10 bg-white shadow-[0_1px_0_rgba(62,31,82,0.02)]">
        <nav className="mx-auto flex h-[98px] max-w-[1126px] items-center justify-between px-5 md:px-0" aria-label="Primary navigation">
          <a href="#" className="flex items-center gap-4" aria-label="Dr. Swathi Chandrasekar home">
            <span className="grid size-[44px] shrink-0 place-items-center rounded-full" aria-hidden="true">
              <svg viewBox="0 0 52 52" className="size-[44px]" fill="none">
                <circle cx="26" cy="26" r="25.25" fill="#FBF8FF" stroke="#E7DCEF" strokeWidth="1.5"/>
                <path d="M26 10v32M19 15c2.2 1.7 4.4 3.8 7 6 2.6-2.2 4.8-4.3 7-6M20.5 17.5l-7 4.4 5.7 4.1-6.6 4.1 8.1 3.4-4.7 5.1M31.5 17.5l7 4.4-5.7 4.1 6.6 4.1-8.1 3.4 4.7 5.1" stroke="#8838A8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="26" cy="10" r="2.3" fill="#8838A8"/>
                <circle cx="26" cy="42" r="2.3" fill="#8838A8"/>
                <path d="M23.2 25.2h5.6M23.7 28h4.6M26 21v17" stroke="#8838A8" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-left">
              <span className="block font-serif text-[25px] leading-none font-bold tracking-[0.01em] text-[#351B63]">Dr. Swathi C</span>
              <span className="mt-[8px] block text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#9B42D0]">Ayurvedic fertility care</span>
            </span>
          </a>

          <div className="hidden items-center gap-[34px] md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="text-[16px] font-bold text-[#282228] transition-colors hover:text-[#783BEA]">
                {link}
              </a>
            ))}
            <a href="#consultation" className="ml-[4px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-[26px] py-[15px] text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.18)] transition-transform hover:-translate-y-0.5">
              Book consultation
            </a>
          </div>

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
              <a href="#consultation" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-5 py-3 text-center text-sm font-extrabold text-white">
                Book consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-[1126px] items-center gap-12 px-5 py-[74px] md:grid-cols-[1.08fr_0.92fr] md:px-0 md:py-[78px]">
          <div className="max-w-[520px] text-left">
            <p className="mb-[25px] flex items-center gap-[12px] text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#9349EF]">
              <Leaf size={15} strokeWidth={1.8} />
              Classical wisdom, modern care
            </p>
            <h1 className="font-serif text-[48px] leading-[0.94] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[60px] md:text-[64px]">
              Ayurvedic<br />
              Fertility &amp;<br />
              Women&apos;s Health<br />
              Care<br />
              <em className="font-normal text-[#913AFF]">personalized for<br />you.</em>
            </h1>
            <p className="mt-[28px] max-w-[520px] text-[16px] leading-[26px] text-[#584B78]">
              Supporting natural conception, hormonal balance, and healthy pregnancy through classical Ayurveda with a modern clinical approach.
            </p>
            <div className="mt-[34px] flex flex-wrap gap-[12px]">
              <a href="#consultation" className="flex items-center gap-[9px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[24px] py-[15px] text-[14px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.18)] transition-transform hover:-translate-y-0.5">
                Book consultation <ArrowRight size={16} />
              </a>
              <a href="#programs" className="rounded-full border border-[#DDD5EC] bg-white px-[24px] py-[15px] text-[14px] font-extrabold text-[#7A3BE8] transition-colors hover:border-[#9D73EC]">
                Explore programs
              </a>
            </div>
            <div className="mt-[38px] flex flex-wrap items-center gap-[28px] text-[13px] font-medium text-[#655A78]">
              <span className="flex items-center gap-[8px]">
                <BadgeCheck size={15} className="text-[#9550EF]" />
                12+ years clinical experience
              </span>
              <span className="flex items-center gap-[8px]">
                <CalendarDays size={15} className="text-[#9550EF]" />
                BAMS, MS
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] md:mx-0 md:ml-auto">
            <div className="h-[580px] overflow-hidden rounded-[23px] bg-[#D9D4E7]">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=88"
                alt="Dr. Swathi Chandrasekar"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute bottom-[24px] left-[-18px] w-[205px] rounded-[14px] border border-white/70 bg-white p-[18px] text-left shadow-[0_12px_30px_rgba(48,33,73,0.13)]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#9349EF]">Root cause care</p>
              <p className="mt-[10px] font-serif text-[16px] leading-[24px] font-bold text-[#321B68]">
                Your body can heal<br />with the right support.
              </p>
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
