import { useEffect, useState } from 'react'
import { ArrowRight, BadgeCheck, CalendarDays, Check, ChevronDown, ChevronRight, Clock3, HeartPulse, Leaf, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, X } from 'lucide-react'
import heroImage from './assets/Hero-image.jpeg'
import websiteLogo from './assets/logo.png'
import fertilityLogo from './assets/logo_1.png'
import postnatalLogo from './assets/logo_2.png'
import digestiveLogo from './assets/logo_3.png'
import pregnancyLogo from './assets/logo_4.png'
import holisticLogo from './assets/logo_5.png'
import maleFertilityLogo from './assets/logo_6.png'

const navLinks = [
  { label: 'About Dr.', href: '#about-dr' },
  { label: 'Programs', href: '#programs' },
  { label: 'Care areas', href: '#care-areas-detail' },
  { label: 'FAQ', href: '#faq' },
]
const appointmentUrl = 'https://calendar.app.google/Z8Zk8mhcgnEkVxFw6'
const contactFormEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const programs = [
  {
    title: 'Fertility Reset',
    summary: 'A structured 3-month plan to improve natural conception chances.',
    detail: 'The Fertility Reset Program is a three-month, couple-friendly journey for people trying to conceive naturally or preparing for IUI or IVF support. Care begins with an Ayurvedic and modern review of your cycle, digestion, lifestyle, stress, and available reports. The plan then brings together cycle tracking, ovulation support, gut correction, fertility-supportive nutrition, and carefully selected protocols. Each month is reviewed so the plan can respond to your body rather than follow a fixed template.',
    duration: '3 months',
    includes: ['Prakriti, Dosha, Agni, and Ama assessment', 'Beeja, Kshetra, Ritu, and Ambu considerations', 'Cycle and ovulation support', 'Preconception detox and Rasayana planning'],
    icon: 'fertility',
    logo: fertilityLogo,
  },
  {
    title: 'PCOS Reversal',
    summary: 'Cycle regulation, metabolism correction, and lasting hormonal balance.',
    detail: 'A root-cause program for irregular cycles, acne, weight changes, and metabolic imbalance. Treatment adapts as your cycles and reports improve.',
    duration: '4-6 months',
    includes: ['Hormonal and lifestyle assessment', 'PCOS-friendly meal planning', 'Menstrual cycle support', 'Metabolic and stress management'],
    icon: 'cycle',
    logo: holisticLogo,
  },
  {
    title: 'Male Fertility',
    summary: 'Improving semen quality, motility, and reproductive strength.',
    detail: 'A couple-focused program designed to improve sperm health, energy, digestion, sleep, and reproductive resilience through practical, sustainable care.',
    duration: '3-4 months',
    includes: ['Partner health assessment', 'Semen-supportive nutrition', 'Lifestyle and stress correction', 'Repeat report comparison'],
    icon: 'male',
    logo: maleFertilityLogo,
  },
  {
    title: 'Pregnancy Care',
    summary: 'Safe, trimester-wise Ayurvedic support for a healthy pregnancy.',
    detail: 'Gentle trimester-wise care that supports digestion, energy, sleep, fetal development, emotional wellbeing, and a smoother postpartum transition.',
    duration: 'Trimester-based',
    includes: ['Trimester-wise care plan', 'Nausea and digestion support', 'Safe movement and rest guidance', 'Postpartum preparation'],
    icon: 'pregnancy',
    logo: pregnancyLogo,
  },
  {
    title: 'Postnatal & Lactation',
    summary: 'Restoring strength, nourishment, hormonal balance, and breastfeeding confidence.',
    detail: 'A gentle postpartum care program designed around the mother’s recovery, feeding goals, digestion, sleep, emotional wellbeing, and changing energy needs. The plan supports traditional nourishment and practical routines that make recovery sustainable.',
    duration: '6-12 weeks',
    includes: ['Postnatal nourishment plan', 'Lactation and breastfeeding support', 'Hormonal and sleep recovery', 'Gentle strength and digestion care'],
    icon: 'pregnancy',
    logo: postnatalLogo,
  },
  {
    title: 'Digestive & Metabolic Care',
    summary: 'Rebuilding digestion, metabolism, gut balance, and everyday vitality.',
    detail: 'A root-cause program for bloating, IBS, constipation, inflammatory patterns, weight changes, fatigue, and metabolic imbalance. Care brings together digestive correction, realistic meal planning, daily rhythm, and sustainable lifestyle support.',
    duration: '3-4 months',
    includes: ['Digestive and metabolic assessment', 'Personalized nutrition planning', 'Gut, Agni, and Ama support', 'Lifestyle and stress correction'],
    icon: 'cycle',
    logo: digestiveLogo,
  },
]

const careAreas = [
  {
    title: 'Fertility & preconception',
    description: 'Couple-based assessment, cycle tracking, ovulation support, endometrial protocols, and IUI/IVF support.',
    focus: 'A complete fertility review that looks beyond hormones at digestion, sleep, stress, ovulation, reproductive tissues, and the partner’s health.',
    support: ['Natural conception planning', 'Cycle and ovulation tracking', 'Preconception diet and lifestyle', 'IUI/IVF preparation and support'],
  },
  {
    title: "Women’s hormonal care",
    description: 'Personalized support for PCOS, irregular cycles, PMS, painful periods, thyroid imbalance, and hormonal acne.',
    focus: 'Care is individualized around the pattern behind irregular or painful cycles, helping restore metabolic, digestive, and reproductive balance over time.',
    support: ['PCOS and cycle regulation', 'PMS and painful periods', 'Thyroid and hormonal balance', 'Acne, weight, and stress support'],
  },
  {
    title: 'Pregnancy care',
    description: 'Trimester-wise guidance for nutrition, digestion, energy, sleep, emotional wellbeing, and a healthy pregnancy.',
    focus: 'Gentle, safe Ayurvedic guidance adapted to each trimester, with attention to maternal comfort, fetal nourishment, and everyday wellbeing.',
    support: ['Trimester-wise nutrition', 'Morning sickness and digestion', 'Sleep and anxiety support', 'Birth and postpartum preparation'],
  },
  {
    title: 'Postnatal & lactation',
    description: 'Gentle postpartum recovery support for nourishment, strength, lactation, digestion, and hormonal restoration.',
    focus: 'A supportive recovery plan that respects the physical and emotional changes after birth while rebuilding strength and restoring routine.',
    support: ['Postnatal nourishment', 'Lactation support', 'Hormone and sleep recovery', 'Gut strength and fatigue care'],
  },
  {
    title: 'Digestive & metabolic health',
    description: 'Root-cause care for bloating, IBS, constipation, metabolic imbalance, inflammation, and healthy weight.',
    focus: 'Digestive correction is addressed as the foundation of hormone health, immunity, energy, metabolism, and sustainable fertility care.',
    support: ['IBS and bloating care', 'Constipation management', 'Metabolic and inflammation support', 'Sustainable food and lifestyle planning'],
  },
  {
    title: 'Male reproductive health',
    description: 'Support for sperm quality, motility, count, stress, metabolic health, and reproductive strength.',
    focus: 'Partner-focused treatment considers semen reports, digestion, sleep, stress, medications, heat exposure, and metabolic health.',
    support: ['Semen quality and motility support', 'Strength and reproductive tissue care', 'Stress and sleep correction', 'Nutrition and supplement guidance'],
  },
  {
    title: 'Panchakarma & Shaniika Chikitsa',
    description: 'Classical cleansing and restorative therapies selected according to your constitution and current health needs.',
    focus: 'Therapy selection begins only after suitability, strength, health reports, and your current phase are carefully assessed.',
    support: ['Constitution-based therapy planning', 'External Ayurvedic therapies', 'Pre- and post-therapy care', 'Restoration and long-term maintenance'],
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

  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.href = window.location.origin + '/'

    const elements = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedProgram && !bookingSuccess) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProgram(null)
        setBookingSuccess(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProgram, bookingSuccess])

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-[#18211c]">
      <header className="sticky top-0 z-50 border-b border-[#38204f]/10 bg-white shadow-[0_1px_0_rgba(62,31,82,0.02)]">
        <nav className="mx-auto flex h-[78px] max-w-[1126px] items-center justify-between px-5 sm:h-[98px] md:px-8 xl:px-0" aria-label="Primary navigation">
          <a href="#" className="flex items-center gap-4" aria-label="Dr. Swathi Chandrasekar home">
            <span className="grid h-[54px] w-[70px] shrink-0 place-items-center overflow-hidden rounded-[8px]" aria-hidden="true">
              <img src={websiteLogo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="text-left">
              <span className="block font-serif text-[20px] leading-none font-bold tracking-[0.01em] text-[#351B63] sm:text-[25px]">Dr. Swathi C</span>
              <span className="mt-[8px] hidden text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#9B42D0] sm:block">Ayurvedic fertility care</span>
            </span>
          </a>

          <div className="hidden items-center gap-[34px] md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[16px] font-bold text-[#282228] transition-colors hover:text-[#783BEA]">
                {link.label}
              </a>
            ))}
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="ml-[4px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-[26px] py-[15px] text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.18)] transition-transform hover:-translate-y-0.5">
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
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-[#18211c]/10 py-3 text-lg font-semibold">
                  {link.label}
                </a>
              ))}
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-5 py-3 text-center text-sm font-extrabold text-white">
                Book consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section data-reveal className="site-reveal mx-auto grid max-w-[1126px] items-center gap-12 px-5 py-[74px] md:grid-cols-[1.08fr_0.92fr] md:px-8 md:py-[78px] xl:px-0">
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
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[24px] py-[15px] text-[14px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.18)] transition-transform hover:-translate-y-0.5">
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
            <div className="group h-[480px] overflow-hidden rounded-[23px] bg-[#D9D4E7] sm:h-[580px]">
              <img
                src={heroImage}
                alt="Dr. Swathi Chandrasekar"
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="absolute bottom-[24px] left-[12px] w-[205px] rounded-[14px] border border-white/70 bg-white p-[18px] text-left shadow-[0_12px_30px_rgba(48,33,73,0.13)] sm:left-[-18px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#9349EF]">Root cause care</p>
              <p className="mt-[10px] font-serif text-[16px] leading-[24px] font-bold text-[#321B68]">
                Your body can heal<br />with the right support.
              </p>
            </div>
          </div>
        </section>

        <section id="about-dr" data-reveal className="site-reveal scroll-mt-[98px] bg-white px-5 py-[72px] md:py-[82px]">
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

        <section id="care-areas" data-reveal className="site-reveal bg-[#FCFBF8] px-5 py-[70px] md:py-[88px]">
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

        <section id="programs" data-reveal className="site-reveal bg-white px-5 py-[72px] md:py-[82px]">
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

            <div className="mt-[48px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => {
                const isSelected = selectedProgram?.title === program.title
                return (
                  <article
                    key={program.title}
                    className={`interactive-card flex min-h-[292px] flex-col rounded-[18px] border bg-white p-[22px] text-left transition-all duration-300 ${
                      isSelected ? 'border-[#A873EF] shadow-[0_12px_28px_rgba(83,52,121,0.12)]' : 'border-[#E3DDE9] shadow-[0_7px_18px_rgba(54,34,81,0.07)]'
                    }`}
                  >
                    <div className="grid size-[72px] place-items-center overflow-hidden rounded-full border border-[#ECE4F4] bg-[#090718] shadow-[0_7px_18px_rgba(54,34,81,0.08)]">
                      <img
                        src={program.logo}
                        alt=""
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </div>
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

        <section id="care-areas-detail" data-reveal className="site-reveal bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
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

              <div key={careAreas[activeCare].title} className="care-detail-enter relative min-h-[430px] overflow-hidden rounded-[24px] border border-[#E3DDE8] bg-white shadow-[0_8px_22px_rgba(54,34,81,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8B2EB] hover:shadow-[0_18px_38px_rgba(54,34,81,0.12)]">
                <div className="px-7 pt-9 pb-[88px] sm:px-12 sm:pt-12 sm:pb-[100px]">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Specialized service</p>
                  <h3 className="mt-[22px] font-serif text-[30px] leading-[1.12] font-bold text-[#24175A] sm:text-[34px]">
                    {careAreas[activeCare].title}
                  </h3>
                  <p className="mt-[20px] max-w-[540px] text-[16px] leading-[26px] text-[#665A7B]">
                    {careAreas[activeCare].description}
                  </p>
                  <p className="mt-5 max-w-[540px] text-[14px] leading-[24px] text-[#665A7B]">
                    {careAreas[activeCare].focus}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {careAreas[activeCare].support.map((item) => (
                      <div key={item} className="flex items-start gap-[8px] rounded-[10px] bg-[#FBF9FF] px-3 py-[10px] text-[13px] font-bold leading-[20px] text-[#4E3D70]">
                        <Check size={15} className="mt-[2px] shrink-0 text-[#9951F4]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="#consultation"
                  className="absolute bottom-5 left-7 flex items-center gap-[8px] text-[13px] font-extrabold text-[#9540EF] sm:bottom-[28px] sm:left-12"
                >
                  Discuss this care area <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="follow-up-care" data-reveal className="site-reveal bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
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
                <article key={day} className="interactive-card min-h-[175px] rounded-[14px] border border-[#E3DEE7] bg-white px-[20px] py-[24px] shadow-[0_5px_14px_rgba(54,34,81,0.04)] transition-all duration-300">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#8C43EE]">{day}</p>
                  <p className="mt-[18px] text-[15px] leading-[24px] text-[#665A7B]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="patient-stories" data-reveal className="site-reveal bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto max-w-[1126px] text-left">
            <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
              <Sparkles size={13} />
              The care experience
            </p>
            <h2 className="mt-[24px] max-w-[720px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
              Care that makes space for your questions and your whole story.
            </h2>
            <p className="mt-[22px] max-w-[650px] text-[16px] leading-[26px] text-[#665A7B]">
              Every person&apos;s path is different. The goal is thoughtful guidance, practical support, and a plan you can follow with confidence.
            </p>

            <div className="mt-[46px] grid gap-[20px] md:grid-cols-3">
              {[
                ['A clear, thoughtful process', 'Consultations are designed to explain the assessment, treatment options, and the reasoning behind each plan in plain language.'],
                ['Personalized from day one', 'Care is considered alongside your reports, health history, current routine, priorities, and response over time.'],
                ['Consistent support', 'Follow-up check-ins help clarify next steps, monitor progress, and make practical adjustments when needed.'],
              ].map(([title, copy]) => (
                <article key={title} className="interactive-card min-h-[210px] rounded-[18px] border border-[#E2DDE8] bg-white px-[28px] py-[32px] shadow-[0_7px_18px_rgba(54,34,81,0.06)] transition-all duration-300">
                  <h3 className="mt-[20px] font-serif text-[21px] font-bold text-[#24175A]">{title}</h3>
                  <p className="mt-[14px] text-[15px] leading-[24px] text-[#665A7B]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" data-reveal className="site-reveal bg-[#FCFBF8] px-5 py-[72px] md:py-[82px]">
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
                    className={`interactive-card overflow-hidden rounded-[14px] border bg-white transition-all duration-300 ${
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

        <section id="consultation" data-reveal className="site-reveal bg-white px-5 py-[72px] md:py-[82px]">
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
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[28px] inline-flex items-center gap-[9px] rounded-full bg-[#9540EF] px-[24px] py-[14px] text-[14px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.16)] transition-transform hover:-translate-y-0.5"
              >
                Schedule appointment <ArrowRight size={15} />
              </a>
            </div>

            <form
              className="rounded-[24px] border border-[#E2DDE8] bg-[#FEFDFF] px-5 py-7 text-left shadow-[0_16px_40px_rgba(54,34,81,0.10)] sm:px-10 sm:py-10"
              action={contactFormEndpoint || undefined}
              method="POST"
              onSubmit={(event) => {
                if (!contactFormEndpoint) {
                  event.preventDefault()
                  window.alert('Online form submission is being configured. Please use the appointment booking link instead.')
                }
              }}
            >
              <input type="hidden" name="_subject" value="New consultation request" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?consultation=submitted`} />
              <div className="mb-6 border-b border-[#ECE7F1] pb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9951F4]">Consultation request</p>
                <h3 className="mt-2 font-serif text-[26px] font-bold text-[#24175A]">Tell us about yourself</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                  Your name
                  <input required autoComplete="name" name="name" placeholder="Full name" className="mt-2.5 w-full rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal text-[#31216A] outline-none transition-all placeholder:text-[#A39AAA] focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10" />
                </label>
                <label className="text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                  Phone number
                  <input required autoComplete="tel" name="phone" type="tel" placeholder="+91 00000 00000" className="mt-2.5 w-full rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal text-[#31216A] outline-none transition-all placeholder:text-[#A39AAA] focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10" />
                </label>
              </div>
              <label className="mt-5 block text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                Email address
                <input required autoComplete="email" name="email" type="email" placeholder="you@example.com" className="mt-2.5 w-full rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal text-[#31216A] outline-none transition-all placeholder:text-[#A39AAA] focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10" />
              </label>
              <label className="mt-5 block text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                Consultation type
                <select name="consultationType" className="mt-2.5 w-full rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal text-[#31216A] outline-none transition-all focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10">
                  <option>Fertility and preconception</option>
                  <option>PCOS and hormonal health</option>
                  <option>Pregnancy care</option>
                  <option>Postnatal and lactation</option>
                  <option>Digestive and metabolic health</option>
                  <option>Male reproductive health</option>
                </select>
              </label>
              <label className="mt-5 block text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                Preferred appointment date and time
                <input name="appointment" type="datetime-local" min={new Date().toISOString().slice(0, 16)} className="mt-2.5 w-full rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal text-[#31216A] outline-none transition-all focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10" />
              </label>
              <label className="mt-5 block text-[13px] font-bold tracking-[0.01em] text-[#31216A]">
                Message
                <textarea name="message" rows="4" placeholder="Briefly tell us what support you are looking for" className="mt-2.5 w-full resize-y rounded-xl border border-[#DDD6E7] bg-white px-4 py-[13px] text-[15px] font-normal leading-6 text-[#31216A] outline-none transition-all placeholder:text-[#A39AAA] focus:border-[#9951F4] focus:ring-4 focus:ring-[#9951F4]/10" />
              </label>
              <label className="mt-5 flex items-start gap-3 text-[13px] leading-[20px] text-[#665A7B]">
                <input required type="checkbox" name="consent" className="mt-1 size-4 rounded border-[#DDD6E7] accent-[#9540EF]" />
                <span>I consent to being contacted about this enquiry and have read the privacy information below.</span>
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

        <section id="privacy-disclaimer" className="bg-white px-5 py-[38px] md:py-[44px] scroll-mt-[98px]">
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
            <div className="popup-enter w-full max-w-[430px] rounded-[24px] bg-white px-7 py-9 text-center shadow-[0_24px_70px_rgba(35,20,54,0.24)] sm:px-10">
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
            <div className="program-modal-enter relative max-h-[calc(100vh-32px)] w-full max-w-[820px] overflow-y-auto rounded-[24px] bg-white px-6 py-6 text-left shadow-[0_24px_70px_rgba(35,20,54,0.24)] sm:rounded-[30px] sm:px-[64px] sm:py-[48px]">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="absolute right-4 top-4 grid size-[42px] place-items-center rounded-full border border-[#EEE8F4] bg-white text-[#A348F0] shadow-sm transition-all hover:rotate-90 hover:bg-[#F4ECFF] sm:right-7 sm:top-7"
                aria-label="Close program details"
              >
                <X size={21} />
              </button>

              <p className="pr-12 text-[11px] font-bold uppercase tracking-[0.16em] text-[#9349EF]">Personalized signature program</p>
              <h2 id="program-modal-title" className="mt-4 pr-12 font-serif text-[34px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[44px]">
                {selectedProgram.title}
              </h2>
              <div className="mt-5 inline-flex rounded-full bg-[#F4EEFC] px-4 py-2 text-[12px] font-bold text-[#70409D]">
                Duration: {selectedProgram.duration}
              </div>
              <p className="mt-6 max-w-[690px] border-l-[3px] border-[#B98AEF] pl-5 text-[16px] leading-[28px] text-[#604F78] sm:text-[17px] sm:leading-[30px]">
                {selectedProgram.detail}
              </p>

              <h3 className="mt-9 font-serif text-[23px] font-bold text-[#24175A]">What this program may include</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
                {(selectedProgram.includes.length > 4
                  ? selectedProgram.includes
                  : [...selectedProgram.includes, 'Long-term follow-up and plan adjustments']
                ).slice(0, 4).map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[12px] border border-[#EEE8F2] bg-[#FBFAFD] px-4 py-[14px] text-[14px] font-medium leading-[22px] text-[#625273] sm:text-[15px]">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#F1E7FC] text-[#9951F4]">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={appointmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedProgram(null)}
                className="mt-9 inline-flex w-full items-center justify-center gap-[9px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#9238F1] px-[26px] py-[16px] text-[15px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Book a consultation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </main>

      <footer id="contact" className="bg-[#784CF0] text-white">
        <div className="mx-auto grid max-w-[1126px] gap-[50px] px-5 py-[62px] text-left md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-[68px] xl:px-0">
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
              rel="noopener noreferrer"
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

      <footer className="bg-[#302A70] text-white">
        <div className="mx-auto max-w-[1126px] px-5 py-[38px] md:px-8 xl:px-0">
          <div className="grid gap-[34px] border-b border-white/10 pb-[34px] md:grid-cols-[1fr_0.55fr_0.75fr]">
            <div className="text-left">
              <h2 className="font-serif text-[24px] font-bold text-white">Dr. Swathi C</h2>
              <p className="mt-[12px] text-[14px] text-white/75">Ayurvedic Fertility &amp; Women&apos;s Health Specialist</p>
            </div>
            <div className="text-left">
              <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#DCC8FF]">Explore</h3>
              <nav className="mt-[16px] flex flex-col gap-[8px]" aria-label="Footer navigation">
                <a href="#about-dr" className="text-[14px] text-white/85 hover:text-white">About</a>
                <a href="#programs" className="text-[14px] text-white/85 hover:text-white">Signature programs</a>
                <a href="#faq" className="text-[14px] text-white/85 hover:text-white">FAQs</a>
                <a href="#privacy-disclaimer" className="text-[14px] text-white/85 hover:text-white">Privacy &amp; disclaimer</a>
              </nav>
            </div>
            <div className="text-left">
              <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#DCC8FF]">Connect</h3>
              <p className="mt-[16px] max-w-[300px] text-[14px] leading-[22px] text-white/85">
                For fertility, hormonal, digestive, pregnancy, and postnatal care.
              </p>
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="mt-[14px] inline-flex items-center gap-[7px] text-[14px] font-extrabold text-white">
                Book consultation <ArrowRight size={15} />
              </a>
            </div>
          </div>
          <p className="pt-[24px] text-left text-[13px] text-white/60">
            © {new Date().getFullYear()} Dr. Swathi C. Integrative + personalized Ayurvedic care.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
