import { Menu, X } from 'lucide-react'
import websiteLogo from '../../assets/logo.png'
import { appointmentUrl, navLinks } from '../../data/siteData'

export default function Header({ menuOpen, setMenuOpen }) {
  return (
<header className="sticky top-0 z-50 border-b border-[#38204f]/10 bg-white shadow-[0_1px_0_rgba(62,31,82,0.02)]">
        <nav className="mx-auto flex h-[78px] max-w-[1126px] items-center justify-between px-5 sm:h-[98px] md:px-8 xl:px-0" aria-label="Primary navigation">
          <a href="#" className="flex items-center gap-4" aria-label="Dr. Swathi Chandrasekar home">
            <span className="grid h-[54px] w-[70px] shrink-0 place-items-center overflow-hidden rounded-[8px]" aria-hidden="true">
              <img src={websiteLogo} alt="" className="h-full w-full object-contain" />
            </span>
            <span className="text-left">
              <span className="block font-serif text-[20px] leading-none font-bold tracking-[0.01em] text-[#351B63] sm:text-[25px]">Dr. Swathi C</span>
              <span className="mt-[8px] hidden text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#9B42D0] sm:block">Ayurvedic fertility care</span>
            </span>
          </a>

          <div className="hidden items-center gap-[34px] md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[16px] font-bold text-[#282228] transition-colors hover:text-[#783BEA]">
                {link.label}
              </a>
            ))}
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="ml-[4px] rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-[26px] py-[15px] text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(112,67,240,0.18)] transition-transform hover:-translate-y-0.5">
              Book consultation
            </a>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-[#18211c]/20 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#18211c]/10 bg-[#f5f3ed] px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-[#18211c]/10 py-3 text-lg font-semibold">
                  {link.label}
                </a>
              ))}
              <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-gradient-to-r from-[#7C46F0] to-[#8B3BF0] px-5 py-3 text-center text-sm font-extrabold text-white">
                Book consultation
              </a>
            </div>
          </div>
        )}
      </header>
  )
}
