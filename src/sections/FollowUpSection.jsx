import { CalendarDays } from 'lucide-react'

export default function FollowUpSection() {
  return (
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
  )
}
