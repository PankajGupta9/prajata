import { useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, Check, ChevronRight, Leaf, Menu, Sparkles, X } from 'lucide-react'

const navLinks = ['About Dr.', 'Programs', 'Care areas', 'FAQ']

const programs = [
  {
    title: 'Fertility Reset',
    summary: 'A structured 3-month plan to improve natural conception chances.',
    detail: 'The Fertility Reset Program is a three-month, couple-friendly journey for people trying to conceive naturally or preparing for IUI or IVF support. Care begins with an Ayurvedic and modern review of your cycle, digestion, lifestyle, stress, and available reports. The plan then brings together cycle tracking, ovulation support, gut correction, fertility-supportive nutrition, and carefully selected protocols. Each month is reviewed so the plan can respond to your body rather than follow a fixed template.',
    duration: '3 months',
    includes: ['Prakriti, Dosha, Agni, and Ama assessment', 'Beeja, Kshetra, Ritu, and Ambu considerations', 'Cycle and ovulation support', 'Preconception detox and Rasayana planning'],
    icon: 'fertility',
  },
  {
    title: 'PCOS Reversal',
    summary: 'Cycle regulation, metabolism correction, and lasting hormonal balance.',
    detail: 'A root-cause program for irregular cycles, acne, weight changes, and metabolic imbalance. Treatment adapts as your cycles and reports improve.',
    duration: '4-6 months',
    includes: ['Hormonal and lifestyle assessment', 'PCOS-friendly meal planning', 'Menstrual cycle support', 'Metabolic and stress management'],
    icon: 'cycle',
  },
  {
    title: 'Male Fertility',
    summary: 'Improving semen quality, motility, and reproductive strength.',
    detail: 'A couple-focused program designed to improve sperm health, energy, digestion, sleep, and reproductive resilience through practical, sustainable care.',
    duration: '3-4 months',
    includes: ['Partner health assessment', 'Semen-supportive nutrition', 'Lifestyle and stress correction', 'Repeat report comparison'],
    icon: 'male',
  },
  {
    title: 'Pregnancy Care',
    summary: 'Safe, trimester-wise Ayurvedic support for a healthy pregnancy.',
    detail: 'Gentle trimester-wise care that supports digestion, energy, sleep, fetal development, emotional wellbeing, and a smoother postpartum transition.',
    duration: 'Trimester-based',
    includes: ['Trimester-wise care plan', 'Nausea and digestion support', 'Safe movement and rest guidance', 'Postpartum preparation'],
    icon: 'pregnancy',
  },
]

function ProgramIcon({ type }) {
  const common = { viewBox: '0 0 64 64', className: 'size-[54px]', fill: 'none', 'aria-hidden': true }
  const color = '#8A38C8'

  if (type === 'male') {
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="28" fill="#F3EAFE" />
        <path d="M21 42c3-8 8-12 14-12 5 0 8 3 9 8 1 6-3 11-9 12-6 1-12-2-14-8Z" fill="#63248C" />
        <path d="M25 30c-1-6 2-11 7-13 4-2 9 0 11 4 2 5 0 10-5 13" stroke={color} strokeWidth="4" strokeLinecap="round" />
        <path d="M38 31l8-8M42 23h4v4" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="39" r="3" fill="#B970E0" />
      </svg>
    )
  }
  if (type === 'pregnancy') {
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="28" fill="#F3EAFE" />
        <circle cx="32" cy="17" r="5" fill="#D99BE8" stroke={color} strokeWidth="2" />
        <path d="M29 23c-7 4-10 12-7 20 2 6 8 10 14 8 7-2 10-10 7-16-3-7-8-12-14-12Z" fill="#FFF" stroke={color} strokeWidth="3" />
        <path d="M33 27c-4 7-4 13 1 18M38 32c-2 4-2 9 2 13" stroke="#B36BD0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="32" cy="32" r="28" fill="#F3EAFE" />
      <circle cx="32" cy="32" r="21" fill="#FFF" stroke="#B56CD5" strokeWidth="2" />
      <circle cx="25" cy="18" r="4" fill="#D99BE8" stroke={color} strokeWidth="2" />
      <circle cx="38" cy="21" r="4" fill="#D99BE8" stroke={color} strokeWidth="2" />
      <path d="M26 24c-8 4-10 13-5 19 6 8 17 8 23 1 5-6 3-14-3-18" fill={type === 'cycle' ? '#F4E1FF' : '#C77AD9'} stroke={color} strokeWidth="3" />
      {type === 'cycle' && (
        <>
          <path d="M25 32c5-4 13-4 18 1M27 39c4 3 9 3 13 0" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="35" r="4" fill="#FFF" />
        </>
      )}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(null)

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

        <section id="care-areas" className="bg-[#FCFBF8] px-5 py-[70px] md:py-[88px]">
          <div className="mx-auto grid max-w-[1126px] items-start gap-12 md:grid-cols-[0.88fr_1.12fr]">
            <div className="text-left">
              <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
                <BadgeCheck size={14} />
                Who I help
              </p>
              <h2 className="mt-[24px] max-w-[520px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
                A thoughtful place to<br />begin your healing<br />journey.
              </h2>
              <p className="mt-[22px] text-[16px] leading-[24px] text-[#5A4B79]">
                If you are facing any of the following, you are in the right place.
              </p>
              <ul className="mt-[42px] space-y-[20px] text-[15px] text-[#5E5477]">
                {[
                  'Trying to conceive but not getting pregnant',
                  'Irregular periods, PCOS, or painful cycles',
                  'Endometriosis, fibroids, or implantation concerns',
                  'Male infertility, low count, or motility issues',
                  'IBS, constipation, or digestion affecting hormones',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-[12px]">
                    <span className="mt-[1px] grid size-[18px] shrink-0 place-items-center rounded-full bg-[#9653F4] text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-[#DDD6E8] bg-white px-[38px] py-[38px] text-left shadow-[0_10px_24px_rgba(54,34,81,0.08)]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">My approach</p>
              <h3 className="mt-[16px] max-w-[470px] font-serif text-[30px] leading-[1.12] font-bold text-[#24175A]">
                Treat the root cause, not just the symptom.
              </h3>
              <p className="mt-[18px] max-w-[510px] text-[15px] leading-[24px] text-[#665A7B]">
                Diet and lifestyle play a key role. Each plan is tailored to your body, including fertility-supportive foods, traditional grains, and gut-friendly nutrition.
              </p>
              <div className="mt-[28px] grid gap-[12px] sm:grid-cols-2">
                {[
                  ['Prakriti & Dosha', 'Understanding your unique constitution and imbalance.'],
                  ['Agni & Ama', 'Correcting digestion and clearing the root burden.'],
                  ['Hormonal balance', 'Supporting the body’s natural rhythm with care.'],
                  ['Shukra Dhatu', 'Strengthening reproductive health for both partners.'],
                  ['Cycle-based care', 'Personalized treatment that evolves with your cycle.'],
                ].map(([title, copy], index) => (
                  <article
                    key={title}
                    className={`rounded-[13px] border-l-2 border-[#CBB1FA] bg-[#FBFAFF] px-[16px] py-[14px] ${
                      index === 4 ? 'sm:col-span-2 sm:max-w-[238px]' : ''
                    }`}
                  >
                    <h4 className="text-[15px] font-extrabold text-[#31216A]">{title}</h4>
                    <p className="mt-[7px] text-[13px] leading-[20px] text-[#665A7B]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <Sparkles size={13} />
              Signature programs
            </p>
            <h2 className="mt-[24px] max-w-[690px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              Structured care for every stage of your fertility journey.
            </h2>
            <p className="mt-[18px] max-w-[650px] text-[16px] leading-[26px] text-[#665A7B]">
              Personalized programs that bring together classical Ayurveda, modern reports, and consistent support.
            </p>

            <div className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => {
                const isSelected = selectedProgram?.title === program.title
                return (
                  <article
                    key={program.title}
                    className={`flex min-h-[292px] flex-col rounded-[18px] border bg-white p-[22px] text-left transition-all ${
                      isSelected ? 'border-[#A873EF] shadow-[0_12px_28px_rgba(83,52,121,0.12)]' : 'border-[#E3DDE9] shadow-[0_7px_18px_rgba(54,34,81,0.07)]'
                    }`}
                  >
                    <ProgramIcon type={program.icon} />
                    <h3 className="mt-[22px] font-serif text-[20px] font-bold text-[#24175A]">{program.title}</h3>
                    <p className="mt-[12px] flex-1 text-[14px] leading-[21px] text-[#665A7B]">{program.summary}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedProgram(isSelected ? null : program)}
                      className="mt-[18px] flex items-center gap-[5px] text-[13px] font-extrabold text-[#9540EF]"
                      aria-expanded={isSelected}
                    >
                      {isSelected ? 'Show less' : 'Learn more'}
                      <ChevronRight size={15} className={`transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </button>
                  </article>
                )
              })}
            </div>

          </div>
        </section>

        {selectedProgram && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24152F]/45 px-4 py-6 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-modal-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProgram(null)
            }}
          >
            <div className="relative max-h-[calc(100vh-48px)] w-full max-w-[820px] overflow-y-auto rounded-[30px] bg-white px-7 py-7 text-left shadow-[0_24px_70px_rgba(35,20,54,0.24)] sm:px-[68px] sm:py-[46px]">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="absolute right-[28px] top-[28px] grid size-[38px] place-items-center rounded-full text-[#A348F0] transition-colors hover:bg-[#F4ECFF]"
                aria-label="Close program details"
              >
                <X size={21} />
              </button>

              <p className="text-[12px] font-extrabold uppercase tracking-[0.17em] text-[#9349EF]">Program journal</p>
              <h2 id="program-modal-title" className="mt-[18px] pr-12 font-serif text-[38px] leading-[1.05] font-bold text-[#24175A] sm:text-[42px]">
                {selectedProgram.title}
              </h2>
              <p className="mt-[22px] max-w-[690px] text-[17px] leading-[31px] text-[#665A7B] sm:text-[18px] sm:leading-[32px]">
                {selectedProgram.detail}
              </p>

              <h3 className="mt-[34px] font-serif text-[22px] font-bold text-[#24175A]">What this program may include</h3>
              <div className="mt-[20px] grid gap-x-[30px] gap-y-[16px] sm:grid-cols-2">
                {(selectedProgram.includes.length > 4
                  ? selectedProgram.includes
                  : [...selectedProgram.includes, 'Long-term follow-up and plan adjustments']
                ).slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-[10px] text-[14px] leading-[22px] text-[#665A7B] sm:text-[15px]">
                    <Check size={17} className="mt-[2px] shrink-0 text-[#9951F4]" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#consultation"
                onClick={() => setSelectedProgram(null)}
                className="mt-[38px] inline-flex items-center gap-[9px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[26px] py-[16px] text-[15px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.16)]"
              >
                Book a consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
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
