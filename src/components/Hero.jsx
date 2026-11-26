import { useEffect, useRef, useState } from 'react'
import { Icon, Img, PrimaryButton, GhostButton } from './ui'
import { CARS, IMAGES, TIME_SLOTS } from '../data'

function Dropdown({ icon, value, options, onChange, renderValue }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // close when clicking outside
  useEffect(() => {
    const onDoc = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-left text-[0.95rem] font-medium transition hover:border-teal-brand/50"
      >
        <Icon name={icon} className="h-5 w-5 shrink-0 text-teal-brand" />
        <span className="flex-1 truncate">{renderValue(value)}</span>
        <Icon name="ChevronDown" className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="glass-strong absolute inset-x-0 top-full z-30 mt-2 max-h-60 overflow-auto rounded-2xl p-1.5">
          {options.map((o) => (
            <button
              key={o.key}
              disabled={o.disabled}
              onClick={() => {
                onChange(o.value)
                setOpen(false)
              }}
              className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition hover:bg-teal-brand/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {o.label}
              {o.selected && <Icon name="Check" className="h-4 w-4 text-teal-brand" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero({ booking, update }) {
  const car = CARS.find((c) => c.id === booking.carId)
  const slot = TIME_SLOTS.find((s) => s.id === booking.slotId)

  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden pb-20 pt-32 lg:min-h-[840px]">
      <div className="absolute inset-0 -z-10">
        <Img src={IMAGES.hero} alt="" className="h-full w-full object-cover object-[70%_center] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-[#070707]/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#070707] to-transparent" />
        <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-teal-brand/15 blur-3xl" />
      </div>

      <span className="animate-floaty absolute left-[48%] top-40 h-5 w-5 rounded-full border border-teal-brand/50 bg-teal-brand/10 backdrop-blur" />
      <span className="animate-floaty absolute left-[55%] top-72 h-3 w-3 rounded-full border border-teal-brand/50 bg-teal-brand/10 backdrop-blur [animation-delay:1.2s]" />
      <span className="animate-floaty absolute left-[40%] top-[28rem] h-7 w-7 rounded-full border border-white/30 bg-white/5 backdrop-blur [animation-delay:2.4s]" />

      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-5 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
        <div className="animate-fade-up">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-brand">
            <Icon name="Sparkles" className="h-4 w-4" /> Doorstep car care
          </span>
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            A spotless car.
            <br />
            Without leaving{' '}
            <span className="relative inline-block text-teal-brand">
              home.
              <svg
                viewBox="0 0 200 14"
                className="absolute -bottom-2 left-0 w-full text-teal-brand"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 9 C 50 2, 120 2, 198 8" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/70">
            Premium car care, right at your doorstep. Pick your wash, choose a time, and relax.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#booking">
              <PrimaryButton className="px-8">
                Book your wash <Icon name="ArrowRight" className="h-5 w-5" />
              </PrimaryButton>
            </a>
            <a href="#services">
              <GhostButton>
                <Icon name="Play" className="h-4 w-4 fill-teal-brand text-teal-brand" /> Explore services
              </GhostButton>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-ink/80">
            <span className="flex items-center gap-2">
              <Icon name="Star" className="h-5 w-5 fill-teal-brand text-teal-brand" />
              <b className="text-ink">4.9</b> from 2,400+ washes
            </span>
            <span className="hidden h-5 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2">
              <Icon name="ShieldCheck" className="h-5 w-5 text-teal-brand" />
              Insured professionals
            </span>
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="glass-strong animate-fade-up absolute -top-14 right-0 hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold [animation-delay:0.25s] lg:flex">
            <Icon name="House" className="h-5 w-5 text-teal-brand" /> Your wash, at home
          </div>

          <div className="glass-strong animate-fade-up w-full rounded-3xl p-5 [animation-delay:0.15s] lg:w-[420px]">
            <h2 className="mb-4 px-1 text-lg font-bold">Quick booking</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 transition focus-within:border-teal-brand/60">
                <Icon name="MapPin" className="h-5 w-5 text-teal-brand" />
                <input
                  value={booking.address}
                  onChange={(e) => update({ address: e.target.value })}
                  placeholder="Enter your location"
                  className="w-full bg-transparent text-[0.95rem] font-medium outline-none placeholder:text-ink/40"
                />
                <button
                  type="button"
                  title="Use my location (demo)"
                  onClick={() => update({ address: 'Sector 62, Noida' })}
                >
                  <Icon name="LocateFixed" className="h-5 w-5 text-ink/60 transition hover:text-teal-brand" />
                </button>
              </label>

              <Dropdown
                icon="Calendar"
                value={slot}
                renderValue={(s) => `Today, ${s ? s.label : 'Pick a time'}`}
                options={TIME_SLOTS.map((s) => ({
                  key: s.id,
                  value: s.id,
                  label: s.taken ? `${s.label} — Full` : s.label,
                  disabled: s.taken,
                  selected: s.id === booking.slotId,
                }))}
                onChange={(id) => update({ slotId: id })}
              />

              <Dropdown
                icon="Car"
                value={car}
                renderValue={(c) => `${c.type} • ${c.label}`}
                options={CARS.map((c) => ({
                  key: c.id,
                  value: c.id,
                  label: `${c.type} • ${c.label}`,
                  selected: c.id === booking.carId,
                }))}
                onChange={(id) => update({ carId: id })}
              />

              <a href="#booking" onClick={() => update({ step: booking.serviceId ? 2 : 1 })} className="block pt-1">
                <PrimaryButton className="w-full">
                  Find available slots <Icon name="ArrowRight" className="h-5 w-5" />
                </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}