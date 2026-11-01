import { HeartPulse, Sparkles } from 'lucide-react'

export default function AboutSection() {
  return (
<section id="about-dr" data-reveal className="site-reveal scroll-mt-[98px] bg-white px-5 py-[72px] md:py-[82px]">
          <div className="mx-auto grid max-w-[1126px] gap-[48px] md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div className="text-left">
              <p className="inline-flex items-center gap-[9px] rounded-full bg-[#F1EAFE] px-[13px] py-[7px] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8C43EE]">
                <Sparkles size={13} />
                About Dr. Swathi C
              </p>
              <h2 className="mt-[24px] max-w-[620px] font-serif text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-[#24175A] sm:text-[50px]">
                Personalized care grounded in experience and empathy.
              </h2>
              <p className="mt-[22px] max-w-[590px] text-[16px] leading-[27px] text-[#665A7B]">
                Dr. Swathi C offers specialized Ayurvedic fertility treatment for women and couples dealing with infertility, PCOS, endometriosis, and hormonal imbalance. With over 12 years of experience in Prasuti Tantra and Stri Roga, her approach combines classical Ayurveda with modern diagnostic understanding.
              </p>

              <div className="mt-[36px] grid gap-[14px] sm:grid-cols-[270px_1fr]">
                <div className="rounded-[14px] border border-[#E5DFEA] bg-[#FFFEFD] px-[20px] py-[18px] text-left">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Qualifications</p>
                  <p className="mt-[12px] text-[15px] leading-[24px] font-extrabold text-[#31216A]">
                    BAMS<br />MS in Prasuti Tantra &amp; Stri Roga
                  </p>
                </div>
                <div className="rounded-[14px] border border-[#E5DFEA] bg-[#FFFEFD] px-[20px] py-[18px] text-left">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Expertise</p>
                  <p className="mt-[12px] text-[14px] leading-[23px] text-[#665A7B]">
                    Infertility, PCOS, endometriosis, fibroids, menstrual, antenatal, postnatal, and gut health.
                  </p>
                </div>
              </div>

              <div className="mt-[24px]">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#9349EF]">Areas of expertise</p>
                <div className="mt-[12px] flex flex-wrap gap-[10px]">
                  {[
                    'Male & female fertility',
                    'PCOS / PCOD',
                    'Endometriosis & fibroids',
                    'Menstrual irregularities',
                    'Antenatal & postnatal care',
                    'Gut health & hormones',
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-[#EEE8F4] bg-[#FBFAFF] px-[14px] py-[9px] text-[13px] text-[#665A7B]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-[7px] min-h-[290px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1F1766] to-[#37339A] px-[40px] py-[38px] text-left text-white shadow-[0_14px_30px_rgba(53,38,112,0.12)]">
              <div className="absolute right-[-60px] top-[-70px] size-[220px] rounded-full border border-white/5" />
              <div className="absolute right-[16px] top-[18px] size-[150px] rounded-full border border-white/5" />
              <HeartPulse size={30} className="text-[#B887FF]" strokeWidth={1.7} />
              <blockquote className="mt-[28px] max-w-[420px] font-serif text-[24px] leading-[34px] font-bold">
                "My goal is to treat the root cause by understanding each patient&apos;s unique body constitution."
              </blockquote>
              <p className="mt-[28px] text-[13px] text-white/75">
                Don&apos;t ignore the early signs. Start your treatment at the right time.
              </p>
            </div>
          </div>
        </section>
  )
}
