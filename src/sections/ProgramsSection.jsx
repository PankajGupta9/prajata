import { ChevronRight, Sparkles } from 'lucide-react'
import { programs } from "../data/siteData"

export default function ProgramsSection(selectedProgram, setSelectedProgram) {
  return (
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
  )
}
