import { useEffect, useState } from 'react'
import { Icon, Logo, PrimaryButton } from './ui'
import { CITIES } from '../data'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Help', href: '#help' },
]

export default function Navbar({ city, setCity }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [cityOpen, setCityOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight link of the section currently in view
  useEffect(() => {
    const els = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div
        className={`mx-auto flex max-w-[1480px] items-center justify-between gap-4 px-5 transition-all duration-300 lg:px-10 ${scrolled ? 'glass mx-3 rounded-full py-2 lg:mx-auto lg:max-w-[1400px]' : ''
          }`}
      >
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative py-2 text-[0.95rem] font-medium transition hover:text-teal-brand ${active === l.href ? 'text-teal-brand' : 'text-ink/75'
                }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-teal-brand shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative">
            <button
              onClick={() => setCityOpen((v) => !v)}
              className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition hover:border-teal-brand/50"
            >
              <Icon name="MapPin" className="h-4 w-4 text-teal-brand" />
              {city}
              <Icon name="ChevronDown" className={`h-4 w-4 transition ${cityOpen ? 'rotate-180' : ''}`} />
            </button>
            {cityOpen && (
              <div className="glass-strong absolute right-0 top-full mt-2 w-48 rounded-2xl p-1.5">
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCity(c)
                      setCityOpen(false)
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition hover:bg-teal-brand/10 ${c === city ? 'text-teal-brand' : ''
                      }`}
                  >
                    {c}
                    {c === city && <Icon name="Check" className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="h-6 w-px bg-white/15" />
          <button className="glass rounded-full px-6 py-2.5 text-sm font-semibold transition hover:border-teal-brand/50 hover:bg-white/10">
            Sign in
          </button>
          <a href="#booking">
            <PrimaryButton className="!px-5 !py-2.5 text-sm">
              Book a wash <Icon name="ArrowRight" className="h-4 w-4" />
            </PrimaryButton>
          </a>
        </div>

        <button
          className="glass grid h-11 w-11 place-items-center rounded-full lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-4 mt-2 rounded-3xl p-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 font-medium hover:bg-teal-brand/10 ${active === l.href ? 'text-teal-brand' : ''
                  }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#booking" onClick={() => setOpen(false)}>
            <PrimaryButton className="mt-3 w-full">
              Book a wash <Icon name="ArrowRight" className="h-4 w-4" />
            </PrimaryButton>
          </a>
        </div>
      )}
    </header>
  )
}