import { ArrowRight } from 'lucide-react'
import { appointmentUrl } from '../../data/siteData'

export default function Footer() {
  return (
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
  )
}
