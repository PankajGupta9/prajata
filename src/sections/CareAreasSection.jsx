import { BadgeCheck, Check } from 'lucide-react'

export default function CareAreasSection() {
  return (
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
  )
}
