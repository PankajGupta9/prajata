import { useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, Check, ChevronDown, ChevronRight, Clock3, HeartPulse, Leaf, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, X } from 'lucide-react'

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

const careAreas = [
  {
    title: 'Fertility & preconception',
    description: 'Couple-based assessment, cycle tracking, ovulation support, endometrial protocols, and IUI/IVF support.',
  },
  {
    title: "Women’s hormonal care",
    description: 'Personalized support for PCOS, irregular cycles, PMS, painful periods, thyroid imbalance, and hormonal acne.',
  },
  {
    title: 'Pregnancy care',
    description: 'Trimester-wise guidance for nutrition, digestion, energy, sleep, emotional wellbeing, and a healthy pregnancy.',
  },
  {
    title: 'Postnatal & lactation',
    description: 'Gentle postpartum recovery support for nourishment, strength, lactation, digestion, and hormonal restoration.',
  },
  {
    title: 'Digestive & metabolic health',
    description: 'Root-cause care for bloating, IBS, constipation, metabolic imbalance, inflammation, and healthy weight.',
  },
  {
    title: 'Male reproductive health',
    description: 'Support for sperm quality, motility, count, stress, metabolic health, and reproductive strength.',
  },
  {
    title: 'Panchakarma & Shaniika Chikitsa',
    description: 'Classical cleansing and restorative therapies selected according to your constitution and current health needs.',
  },
]

const faqs = [
  {
    question: 'Can Ayurveda support IVF or IUI?',
    answer: 'Yes. Care can be coordinated alongside your fertility specialist to support digestion, cycle health, stress regulation, and recovery. Bring your current reports to the consultation.',
  },
  {
    question: 'Do I need to come as a couple?',
    answer: 'Not always. Individual consultations are available, but when fertility is being addressed together, including your partner can provide a more complete picture.',
  },
  {
    question: 'How long does a fertility program take?',
    answer: 'Program duration varies according to the condition, reports, and treatment response. Structured programs commonly range from three to six months, with regular reviews.',
  },
  {
    question: 'Can I consult for PCOS, IBS, or painful periods?',
    answer: 'Yes. The consultation may include menstrual health, digestion, hormones, lifestyle, nutrition, stress, and relevant report review to create a personalized plan.',
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
  const [activeCare, setActiveCare] = useState(0)
  const [activeFaq, setActiveFaq] = useState(0)
  const [bookingSuccess, setBookingSuccess] = useState(() => {
    const submitted = new URLSearchParams(window.location.search).get('consultation') === 'submitted'
    if (submitted) {
      const url = new URL(window.location.href)
      url.searchParams.delete('consultation')
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
    }
    return submitted
  })

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

        <section id="care-areas-detail" className="bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <Sparkles size={13} />
              Care areas
            </p>
            <h2 className="mt-[24px] max-w-[760px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              Integrative support for women, couples, and families.
            </h2>

            <div className="mt-[44px] grid items-stretch gap-[32px] md:grid-cols-[430px_1fr]">
              <div className="space-y-[10px]" role="tablist" aria-label="Care areas">
                {careAreas.map((area, index) => (
                  <button
                    key={area.title}
                    type="button"
                    role="tab"
                    aria-selected={activeCare === index}
                    onClick={() => setActiveCare(index)}
                    className={`flex w-full items-center justify-between rounded-[12px] px-[18px] py-[12px] text-left text-[14px] font-extrabold transition-all sm:text-[15px] ${
                      activeCare === index
                        ? 'bg-gradient-to-r from-[#8150E9] to-[#8D3FF0] text-white shadow-[0_8px_18px_rgba(112,67,240,0.12)]'
                        : 'border border-[#E7E1EC] bg-white text-[#31216A] hover:border-[#BCA2EC]'
                    }`}
                  >
                    <span>{index + 1}. {area.title}</span>
                    <ChevronRight size={16} className={activeCare === index ? 'opacity-100' : 'opacity-60'} />
                  </button>
                ))}
              </div>

              <div className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-[#E3DDE8] bg-white shadow-[0_8px_22px_rgba(54,34,81,0.06)]">
                <div className="px-[34px] pt-[48px] pr-[40px] sm:px-[48px] sm:pt-[52px]">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Specialized service</p>
                  <h3 className="mt-[22px] font-serif text-[30px] leading-[1.12] font-bold text-[#24175A] sm:text-[34px]">
                    {careAreas[activeCare].title}
                  </h3>
                  <p className="mt-[20px] max-w-[540px] text-[16px] leading-[26px] text-[#665A7B]">
                    {careAreas[activeCare].description}
                  </p>
                </div>
                <div className="absolute bottom-[34px] left-[34px] flex items-center gap-[10px] text-[13px] text-[#665A7B] sm:left-[48px]">
                  <Stethoscope size={20} className="text-[#9951F4]" />
                  <span>Ayurveda + modern diagnostic understanding</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-dr" className="bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto grid max-w-[1126px] gap-[48px] md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div className="text-left">
              <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
                <Sparkles size={13} />
                About Dr. Swathi C
              </p>
              <h2 className="mt-[24px] max-w-[620px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
                Personalized care grounded in experience and empathy.
              </h2>
              <p className="mt-[22px] max-w-[590px] text-[16px] leading-[27px] text-[#665A7B]">
                Dr. Swathi C offers specialized Ayurvedic fertility treatment for women and couples dealing with infertility, PCOS, endometriosis, and hormonal imbalance. With over 12 years of experience in Prasuti Tantra and Stri Roga, her approach combines classical Ayurveda with modern diagnostic understanding.
              </p>

              <div className="mt-[36px] grid gap-[14px] sm:grid-cols-[270px_1fr]">
                <div className="rounded-[14px] border border-[#E5DFEA] bg-[#FFFEFD] px-[20px] py-[18px] text-left">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Qualifications</p>
                  <p className="mt-[12px] text-[15px] leading-[24px] font-extrabold text-[#31216A]">
                    BAMS<br />MS in Prasuti Tantra &amp; Stri Roga
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5DFEA] bg-[#FFFEFD] px-[20px] py-[18px] text-left">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Expertise</p>
                  <p className="mt-[12px] text-[14px] leading-[23px] text-[#665A7B]">
                    Infertility, PCOS, endometriosis, fibroids, menstrual, antenatal, postnatal, and gut health.
                  </p>
                </div>
              </div>

              <div className="mt-[24px]">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Areas of expertise</p>
                <div className="mt-[12px] flex flex-wrap gap-[10px]">
                  {[
                    'Male & female fertility',
                    'PCOS / PCOD',
                    'Endometriosis & fibroids',
                    'Menstrual irregularities',
                    'Antenatal & postnatal care',
                    'Gut health & hormones',
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-[#EEE8F4] bg-[#FBFAFF] px-[14px] py-[9px] text-[13px] text-[#665A7B]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-[7px] min-h-[290px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1F1766] to-[#37339A] px-[40px] py-[38px] text-left text-white shadow-[0_14px_30px_rgba(53,38,112,0.12)]">
              <div className="absolute right-[-60px] top-[-70px] size-[220px] rounded-full border border-white/5" />
              <div className="absolute right-[16px] top-[18px] size-[150px] rounded-full border border-white/5" />
              <HeartPulse size={30} className="text-[#B887FF]" strokeWidth={1.7} />
              <blockquote className="mt-[28px] max-w-[420px] font-serif text-[24px] leading-[34px] font-bold">
                "My goal is to treat the root cause by understanding each patient&apos;s unique body constitution."
              </blockquote>
              <p className="mt-[28px] text-[13px] text-white/75">
                Don&apos;t ignore the early signs. Start your treatment at the right time.
              </p>
            </div>
          </div>
        </section>

        <section id="follow-up-care" className="bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <CalendarDays size={13} />
              Follow-up care
            </p>
            <h2 className="mt-[24px] max-w-[760px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              You are supported beyond the first consultation.
            </h2>
            <p className="mt-[22px] max-w-[650px] text-[16px] leading-[26px] text-[#665A7B]">
              A simple WhatsApp follow-up system keeps your treatment plan practical, consistent, and responsive.
            </p>

            <div className="mt-[48px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['DAY 1', 'Your treatment plan is shared. Follow the medicines and diet as advised.'],
                ['DAY 3', 'A gentle check-in to make sure you have started comfortably.'],
                ['DAY 7', 'Small adjustments are made if the diet or routine needs support.'],
                ['DAY 15', 'Continue consistently as the body begins responding internally.'],
                ['DAY 30', 'Progress is reviewed and a structured continuation plan is offered.'],
              ].map(([day, copy]) => (
                <article key={day} className="min-h-[175px] rounded-[14px] border border-[#E3DEE7] bg-white px-[20px] py-[24px] shadow-[0_5px_14px_rgba(54,34,81,0.04)]">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#8C43EE]">{day}</p>
                  <p className="mt-[18px] text-[15px] leading-[24px] text-[#665A7B]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="patient-stories" className="bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <Sparkles size={13} />
              Patient stories
            </p>
            <h2 className="mt-[24px] max-w-[720px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              Care that makes space for your questions and your whole story.
            </h2>
            <p className="mt-[22px] max-w-[650px] text-[16px] leading-[26px] text-[#665A7B]">
              Every person&apos;s path is different. The goal is thoughtful guidance, practical support, and a plan you can follow with confidence.
            </p>

            <div className="mt-[46px] grid gap-[20px] md:grid-cols-3">
              {[
                ['A calm, thoughtful process', 'Every step was explained with patience. I finally understood how digestion, stress, and my cycle were connected.'],
                ['Personalized from day one', 'The plan was built around my reports and routine instead of giving me a generic checklist.'],
                ['Consistent support', 'The follow-up messages helped me stay consistent and made it easy to ask questions between consultations.'],
              ].map(([title, copy]) => (
                <article key={title} className="min-h-[210px] rounded-[18px] border border-[#E2DDE8] bg-white px-[28px] py-[32px] shadow-[0_7px_18px_rgba(54,34,81,0.06)]">
                  <div className="text-[15px] tracking-[0.18em] text-[#A14CF4]" aria-label="5 out of 5 stars">
                    ★ ★ ★ ★ ★
                  </div>
                  <h3 className="mt-[20px] font-serif text-[21px] font-bold text-[#24175A]">{title}</h3>
                  <p className="mt-[14px] text-[15px] leading-[24px] text-[#665A7B]">&ldquo;{copy}&rdquo;</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <Sparkles size={13} />
              Questions answered
            </p>
            <h2 className="mt-[24px] max-w-[650px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              Start with clarity.
            </h2>
            <p className="mt-[22px] max-w-[650px] text-[16px] leading-[26px] text-[#665A7B]">
              Here are a few common questions about personalized Ayurvedic fertility and women&apos;s health care.
            </p>

            <div className="mt-[42px] space-y-[12px]">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index
                return (
                  <article
                    key={faq.question}
                    className={`overflow-hidden rounded-[14px] border bg-white transition-colors ${
                      isOpen ? 'border-[#CDB7F3]' : 'border-[#E4DFEA]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-[20px] py-[20px] text-left text-[15px] font-extrabold text-[#31216A]"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#9951F4] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-[20px] pb-[20px] pr-[50px] text-[15px] leading-[24px] text-[#665A7B]">
                        {faq.answer}
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="consultation" className="bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto grid max-w-[1126px] items-center gap-[52px] md:grid-cols-[0.8fr_1.2fr]">
            <div className="text-left">
              <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
                <CalendarDays size={13} />
                Book a consultation
              </p>
              <h2 className="mt-[24px] max-w-[500px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
                A first conversation can change the way you see your health.
              </h2>
              <p className="mt-[22px] max-w-[520px] text-[16px] leading-[26px] text-[#665A7B]">
                Share a few details and the clinic can help you take the next step. Please bring relevant reports to your consultation.
              </p>

              <div className="mt-[34px] space-y-[16px] text-[14px] text-[#665A7B]">
                <div className="flex items-center gap-[10px]"><Clock3 size={17} className="text-[#9951F4]" /> Consultations by appointment</div>
                <div className="flex items-center gap-[10px]"><MessageCircle size={17} className="text-[#9951F4]" /> WhatsApp follow-up support included</div>
                <div className="flex items-center gap-[10px]"><ShieldCheck size={17} className="text-[#9951F4]" /> Ayurveda with modern report review</div>
              </div>
              <a
                href="https://calendar.google.com/calendar/u/0/r/eventedit"
                target="_blank"
                rel="noreferrer"
                className="mt-[28px] inline-flex items-center gap-[7px] text-[14px] font-extrabold text-[#9540EF]"
              >
                Choose a time on Google Calendar <ArrowRight size={15} />
              </a>
            </div>

            <form
              className="rounded-[24px] border border-[#E2DDE8] bg-white px-[24px] py-[32px] text-left shadow-[0_10px_24px_rgba(54,34,81,0.08)] sm:px-[40px]"
              action="https://formsubmit.co/pankajgupta1468@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New consultation request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?consultation=submitted`} />
              <div className="grid gap-[18px] sm:grid-cols-2">
                <label className="text-[13px] font-extrabold text-[#31216A]">
                  Your name
                  <input required name="name" placeholder="Full name" className="mt-[8px] w-full rounded-[10px] border border-[#DED7E7] px-[15px] py-[12px] text-[14px] font-normal outline-none transition-colors placeholder:text-[#9A93A8] focus:border-[#9951F4]" />
                </label>
                <label className="text-[13px] font-extrabold text-[#31216A]">
                  Phone number
                  <input required name="phone" type="tel" placeholder="Your phone number" className="mt-[8px] w-full rounded-[10px] border border-[#DED7E7] px-[15px] py-[12px] text-[14px] font-normal outline-none transition-colors placeholder:text-[#9A93A8] focus:border-[#9951F4]" />
                </label>
              </div>
              <label className="mt-[18px] block text-[13px] font-extrabold text-[#31216A]">
                Email address
                <input required name="email" type="email" placeholder="Your email address" className="mt-[8px] w-full rounded-[10px] border border-[#DED7E7] px-[15px] py-[12px] text-[14px] font-normal outline-none transition-colors placeholder:text-[#9A93A8] focus:border-[#9951F4]" />
              </label>
              <label className="mt-[18px] block text-[13px] font-extrabold text-[#31216A]">
                Consultation type
                <select name="consultationType" className="mt-[8px] w-full rounded-[10px] border border-[#DED7E7] bg-white px-[15px] py-[12px] text-[14px] font-normal outline-none focus:border-[#9951F4]">
                  <option>Fertility and preconception</option>
                  <option>PCOS and hormonal health</option>
                  <option>Pregnancy care</option>
                  <option>Postnatal and lactation</option>
                  <option>Digestive and metabolic health</option>
                  <option>Male reproductive health</option>
                </select>
              </label>
              <label className="mt-[18px] block text-[13px] font-extrabold text-[#31216A]">
                Preferred appointment date and time
                <input name="appointment" type="datetime-local" className="mt-[8px] w-full rounded-[10px] border border-[#DED7E7] px-[15px] py-[12px] text-[14px] font-normal outline-none transition-colors focus:border-[#9951F4]" />
              </label>
              <label className="mt-[18px] block text-[13px] font-extrabold text-[#31216A]">
                Message
                <textarea name="message" rows="3" placeholder="Tell us briefly what support you are looking for" className="mt-[8px] w-full resize-y rounded-[10px] border border-[#DED7E7] px-[15px] py-[12px] text-[14px] font-normal outline-none transition-colors placeholder:text-[#9A93A8] focus:border-[#9951F4]" />
              </label>
              <button
                type="submit"
                className="mt-[22px] flex w-full items-center justify-center gap-[8px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[24px] py-[16px] text-[15px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.16)]"
              >
                Request consultation <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>

        <section className="bg-white px-5 py-[38px] md:py-[44px]">
          <div className="mx-auto grid max-w-[1126px] gap-[42px] md:grid-cols-2">
            <div className="text-left">
              <h2 className="font-serif text-[24px] font-bold text-[#24175A]">Your privacy matters</h2>
              <p className="mt-[12px] max-w-[520px] text-[14px] leading-[23px] text-[#665A7B]">
                Information submitted through this consultation form is used only to respond to your enquiry and coordinate care. Please do not share sensitive medical records in the form.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-serif text-[24px] font-bold text-[#24175A]">Medical disclaimer</h2>
              <p className="mt-[12px] max-w-[520px] text-[14px] leading-[23px] text-[#665A7B]">
                This website provides general information and is not a substitute for diagnosis or emergency care. Treatment decisions are made during a consultation. For urgent symptoms, contact local emergency services.
              </p>
            </div>
          </div>
        </section>

        {bookingSuccess && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#24152F]/45 px-4 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-success-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setBookingSuccess(false)
            }}
          >
            <div className="w-full max-w-[430px] rounded-[24px] bg-white px-7 py-9 text-center shadow-[0_24px_70px_rgba(35,20,54,0.24)] sm:px-10">
              <div className="mx-auto grid size-[58px] place-items-center rounded-full bg-[#F1EAFE] text-[#9540EF]">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <h2 id="booking-success-title" className="mt-[20px] font-serif text-[30px] font-bold text-[#24175A]">
                Request sent
              </h2>
              <p className="mt-[12px] text-[15px] leading-[24px] text-[#665A7B]">
                Thank you. Your consultation request has been submitted successfully. The clinic will contact you soon.
              </p>
              <button
                type="button"
                onClick={() => setBookingSuccess(false)}
                className="mt-[24px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[24px] py-[13px] text-[14px] font-extrabold text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

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

      <footer id="contact" className="bg-[#784CF0] text-white">
        <div className="mx-auto grid max-w-[1126px] gap-[50px] px-5 py-[62px] text-left md:grid-cols-[1.15fr_0.85fr] md:px-0 md:py-[68px]">
          <div>
            <MessageCircle size={38} strokeWidth={1.7} className="text-white" />
            <h2 className="mt-[22px] max-w-[620px] font-serif text-[44px] leading-[1.08] font-bold sm:text-[50px]">
              Take the first step towards balanced health.
            </h2>
            <p className="mt-[18px] max-w-[620px] text-[16px] leading-[26px] text-white/90">
              Book a personalized consultation for fertility, hormonal, digestive, pregnancy, or postnatal care.
            </p>
          </div>
          <div className="space-y-[14px] md:pt-[10px]">
            <a href="tel:+919876543210" className="flex items-center gap-[12px] text-[15px] font-medium text-white">
              <Phone size={18} />
              +91 9876 543 210
            </a>
            <a href="mailto:dr.swathi@ayurveda.com" className="flex items-center gap-[12px] text-[15px] text-white">
              <Mail size={18} />
              dr.swathi@ayurveda.com
            </a>
            <a
              href="https://maps.google.com/?q=Keustupha+M2-0614+Brigade+Xanadu+Celeste+Chennai"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-[12px] text-[15px] leading-[24px] text-white"
            >
              <MapPin size={19} className="mt-[3px] shrink-0" />
              <span>
                Keustupha M2-0614,<br />
                Brigade Xanadu - Celeste,<br />
                Channakya Main Road, Mogappair West,<br />
                Nolambur, Chennai, Tamil Nadu 600095
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
