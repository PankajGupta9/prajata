import { ChevronDown, Sparkles } from 'lucide-react'
import { faqs } from "../data/siteData"

export default function FaqSection(activeFaq, setActiveFaq) {
  return (
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
  )
}
