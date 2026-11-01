import { ArrowRight, Check, ChevronRight, Sparkles } from 'lucide-react'
import { careAreas } from "../data/siteData"

export default function CareAreasDetailSection(activeCare, setActiveCare) {
  return (
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
  )
}
