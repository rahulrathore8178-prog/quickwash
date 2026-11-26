import { Icon, Img, inr } from './ui'
import { SERVICES, CARS } from '../data'

export default function Services({ booking, update }) {
  const car = CARS.find((c) => c.id === booking.carId)

  return (
    <section id="services" className="relative mx-auto max-w-[1480px] scroll-mt-24 px-5 pb-6 pt-10 lg:px-10">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Choose your wash</h2>
          <p className="mt-2 text-sm text-ink/60">
            Prices shown for <span className="font-semibold text-teal-brand">{car.label}</span> ({car.type})
          </p>
        </div>
        <a href="#booking" className="flex items-center gap-1.5 font-semibold text-teal-brand transition hover:gap-3">
          View all services <Icon name="ArrowRight" className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 pt-4 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((s) => {
          const selected = booking.serviceId === s.id
          return (
            <button
              key={s.id}
              onClick={() => update({ serviceId: s.id })}
              className={`group glass-strong relative overflow-visible rounded-2xl text-left transition duration-300 hover:-translate-y-1.5 ${selected
                  ? 'ring-2 ring-teal-brand shadow-[0_0_0_6px_rgba(250,204,21,0.12),0_25px_50px_-15px_rgba(250,204,21,0.45)]'
                  : s.popular
                    ? 'ring-1 ring-teal-brand/60'
                    : ''
                }`}
            >
              {s.popular && (
                <span className="absolute -top-3 right-6 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-b from-[#ffe066] to-teal-brand px-4 py-1 text-xs font-bold text-black shadow-lg">
                  <Icon name="Star" className="h-3.5 w-3.5 fill-black" /> Most popular
                </span>
              )}

              <div className="relative h-40 overflow-hidden rounded-t-2xl">
                <Img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="glass absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full">
                  <Icon name={s.icon} className="h-6 w-6 text-teal-brand" />
                </span>
                {selected && (
                  <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-teal-brand text-black shadow">
                    <Icon name="Check" className="h-4 w-4" strokeWidth={3} />
                  </span>
                )}
              </div>

              <div className="flex items-end justify-between gap-3 p-6">
                <div>
                  <h3 className="text-lg font-bold">{s.name}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-teal-brand">{inr(s.price * car.multiplier)}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-ink/60">
                      <Icon name="Clock" className="h-4 w-4" /> {s.duration} min
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.blurb}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-teal-brand group-hover:text-black">
                  <Icon name="ChevronRight" className="h-5 w-5" />
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}