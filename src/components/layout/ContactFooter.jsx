import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

export default function ContactFooter() {
  return (
<footer id="contact" className="bg-[#784CF0] text-white">
        <div className="mx-auto grid max-w-[1126px] gap-[50px] px-5 py-[62px] text-left md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-[68px] xl:px-0">
          <div>
            <MessageCircle size={38} strokeWidth={1.7} className="text-white" />
            <h2 className="mt-[22px] max-w-[620px] font-serif text-[44px] leading-[1.08] font-bold sm:text-[50px]">
              Take the first step towards balanced health.
            </h2>
            <p className="mt-[18px] max-w-[620px] text-[16px] leading-[26px] text-white/90">
              Book a personalized consultation for fertility, hormonal, digestive, pregnancy, or postnatal care.
            </p>
          </div>
          <div className="space-y-[14px] md:pt-[10px]">
            <a href="tel:+919876543210" className="flex items-center gap-[12px] text-[15px] font-medium text-white">
              <Phone size={18} />
              +91 9876 543 210
            </a>
            <a href="mailto:dr.swathi@ayurveda.com" className="flex items-center gap-[12px] text-[15px] text-white">
              <Mail size={18} />
              dr.swathi@ayurveda.com
            </a>
            <a
              href="https://maps.google.com/?q=Keustupha+M2-0614+Brigade+Xanadu+Celeste+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-[12px] text-[15px] leading-[24px] text-white"
            >
              <MapPin size={19} className="mt-[3px] shrink-0" />
              <span>
                Keustupha M2-0614,<br />
                Brigade Xanadu - Celeste,<br />
                Channakya Main Road, Mogappair West,<br />
                Nolambur, Chennai, Tamil Nadu 600095
              </span>
            </a>
          </div>
        </div>
      </footer>
  )
}
