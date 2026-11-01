import { Sparkles } from 'lucide-react'

export default function CareExperienceSection() {
  return (
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
  )
}
