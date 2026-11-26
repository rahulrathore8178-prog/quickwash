import { useEffect, useState } from 'react'
import { Icon, Img } from './ui'
import { HOW_IT_WORKS } from '../data'

export default function HowItWorks() {
  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)
  const n = HOW_IT_WORKS.length
  const slide = HOW_IT_WORKS[i]

  // autoplay always on; only holds while the mouse is over the slider
  useEffect(() => {
    if (hover) return
    const t = setTimeout(() => setI((v) => (v + 1) % n), 5500)
    return () => clearTimeout(t)
  }, [i, hover, n])

  return (
    <section id="how" className="mx-auto mt-32 max-w-[1480px] scroll-mt-24 px-5 lg:px-10">
      <div className="mb-12 text-center">
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-brand">
          How it works
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">From tap to shine in four steps</h2>
      </div>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/60"
      >
        {HOW_IT_WORKS.map((s, idx) => (
          <Img
            key={s.id}
            src={s.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              idx === i ? 'opacity-60' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />

        <div className="relative grid min-h-[560px] items-center gap-10 p-6 pb-24 sm:p-10 sm:pb-24 lg:grid-cols-[1fr_0.8fr] lg:p-14 lg:pb-24">
          <div key={slide.id} className="animate-slide-in glass-dark rounded-3xl p-7 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-brand text-black shadow-lg shadow-teal-brand/40">
                <Icon name={slide.icon} className="h-7 w-7" />
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-teal-brand">
                Step {slide.id} of {n}
              </span>
            </div>
            <h3 className="mt-6 text-3xl font-extrabold sm:text-4xl">{slide.title}</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-white/75">{slide.text}</p>
            <ul className="mt-7 space-y-3">
              {slide.points.map((p) => (
                <li key={p} className="flex items-center gap-3 font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-brand text-black">
                    <Icon name="Check" className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden flex-col gap-3 lg:flex">
            {HOW_IT_WORKS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setI(idx)}
                className={`glass-dark flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition ${
                  idx === i ? 'border-teal-brand/70 ring-1 ring-teal-brand/60' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full font-bold ${
                    idx === i ? 'bg-teal-brand text-black' : 'bg-white/10'
                  }`}
                >
                  {s.id}
                </span>
                <span className="font-semibold">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Controls — prev / dots / next (no pause) */}
        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setI((i - 1 + n) % n)}
            className="glass-dark grid h-10 w-10 place-items-center rounded-full transition hover:border-teal-brand/60 hover:text-teal-brand"
            aria-label="Previous"
          >
            <Icon name="ChevronLeft" className="h-5 w-5" />
          </button>
          <div className="glass-dark flex items-center gap-2 rounded-full px-4 py-3">
            {HOW_IT_WORKS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setI(idx)}
                aria-label={`Go to step ${s.id}`}
                className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-teal-brand' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % n)}
            className="glass-dark grid h-10 w-10 place-items-center rounded-full transition hover:border-teal-brand/60 hover:text-teal-brand"
            aria-label="Next"
          >
            <Icon name="ChevronRight" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}