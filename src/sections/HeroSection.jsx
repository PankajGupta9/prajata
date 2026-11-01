import { ArrowRight, BadgeCheck, CalendarDays, Leaf } from 'lucide-react'
import heroImage from '../assets/Hero-image.jpeg'
import { appointmentUrl } from '../data/siteData'

export default function HeroSection() {
  return (
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
  )
}
