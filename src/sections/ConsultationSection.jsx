import { ArrowRight, CalendarDays, Clock3, MessageCircle, ShieldCheck } from 'lucide-react'
import { appointmentUrl, contactFormEndpoint } from '../data/siteData'

export default function ConsultationSection() {
  return (
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
              action={contactFormEndpoint}
              method="POST"
            >
              <input type="hidden" name="_subject" value="New consultation request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
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
  )
}
