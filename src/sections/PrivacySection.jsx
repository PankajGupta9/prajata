export default function PrivacySection() {
  return (
<section id="privacy-disclaimer" className="bg-white px-5 py-[38px] md:py-[44px] scroll-mt-[98px]">
          <div className="mx-auto grid max-w-[1126px] gap-[42px] md:grid-cols-2">
            <div className="text-left">
              <h2 className="font-serif text-[24px] font-bold text-[#24175A]">Your privacy matters</h2>
              <p className="mt-[12px] max-w-[520px] text-[14px] leading-[23px] text-[#665A7B]">
                Information submitted through this consultation form is used only to respond to your enquiry and coordinate care. Please do not share sensitive medical records in the form.
              </p>
            </div>
            <div className="text-left">
              <h2 className="font-serif text-[24px] font-bold text-[#24175A]">Medical disclaimer</h2>
              <p className="mt-[12px] max-w-[520px] text-[14px] leading-[23px] text-[#665A7B]">
                This website provides general information and is not a substitute for diagnosis or emergency care. Treatment decisions are made during a consultation. For urgent symptoms, contact local emergency services.
              </p>
            </div>
          </div>
        </section>
  )
}
