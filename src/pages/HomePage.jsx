import { useEffect, useState } from 'react'
import { ArrowRight, Check, X } from 'lucide-react'
import Header from '../components/layout/Header'
import ContactFooter from '../components/layout/ContactFooter'
import Footer from '../components/layout/Footer'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import CareAreasSection from '../sections/CareAreasSection'
import ProgramsSection from '../sections/ProgramsSection'
import CareAreasDetailSection from '../sections/CareAreasDetailSection'
import FollowUpSection from '../sections/FollowUpSection'
import CareExperienceSection from '../sections/CareExperienceSection'
import FaqSection from '../sections/FaqSection'
import ConsultationSection from '../sections/ConsultationSection'
import PrivacySection from '../sections/PrivacySection'
import { appointmentUrl } from '../data/siteData'

export default function HomePage() {
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
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <CareAreasSection />
        <ProgramsSection selectedProgram={selectedProgram} setSelectedProgram={setSelectedProgram} />
        <CareAreasDetailSection activeCare={activeCare} setActiveCare={setActiveCare} />
        <FollowUpSection />
        <CareExperienceSection />
        <FaqSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
        <ConsultationSection />
        <PrivacySection />
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
      <ContactFooter />
      <Footer />
    </div>
  )
}
