import { Icon, Img, Logo, PrimaryButton } from './ui'
import { IMAGES, REVIEWS } from '../data'

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto mt-32 max-w-[1300px] scroll-mt-24 px-5 lg:px-10">
      <div className="mb-12 text-center">
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-brand">
          Reviews
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Loved by 2,400+ car owners</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="glass-strong rounded-3xl p-7 transition hover:-translate-y-1">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="Star" className="h-4 w-4 fill-teal-brand text-teal-brand" />
              ))}
            </div>
            <blockquote className="mt-5 leading-relaxed text-ink/80">“{r.text}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-brand font-bold text-black">
                {r.name[0]}
              </span>
              <span>
                <span className="block text-sm font-bold">{r.name}</span>
                <span className="text-xs text-ink/60">{r.car}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function Banner() {
  return (
    <section className="mx-auto mt-28 max-w-[1480px] px-4 lg:px-5">
      <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-teal-brand/20 bg-black px-8 py-12 sm:flex-row sm:px-14">
        <Img src={IMAGES.banner} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-teal-brand/20 blur-3xl" />
        <h2 className="relative text-2xl font-extrabold text-white sm:text-4xl">
          Because your car deserves <span className="text-teal-brand">the best.</span>
        </h2>
        <a href="#booking" className="relative">
          <PrimaryButton>
            Book now <Icon name="ArrowRight" className="h-5 w-5" />
          </PrimaryButton>
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="help" className="mx-auto mt-24 max-w-[1480px] scroll-mt-24 px-5 pb-12 lg:px-10">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row">
        <Logo />
        <p className="text-sm text-ink/60">Questions? help@quickwash.example · 1800-000-0000</p>
        <p className="text-sm text-ink/40">© 2026 Quick Wash · Prototype</p>
      </div>
    </footer>
  )
}