import { Icon, PrimaryButton, inr } from './ui'
import { CARS, SERVICES, TIME_SLOTS } from '../data'

const STEPS = ['Car', 'Service', 'Slot', 'Confirm']

const optionCls = (active) =>
  `flex items-center gap-4 rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${active
    ? 'border-teal-brand bg-teal-brand/10 shadow-lg shadow-teal-brand/15'
    : 'border-white/10 bg-white/5 hover:border-teal-brand/40 hover:bg-white/10'
  }`

export default function Booking({ booking, update, reset }) {
  const { step, carId, serviceId, slotId, address, done } = booking
  const car = CARS.find((c) => c.id === carId)
  const service = SERVICES.find((s) => s.id === serviceId)
  const slot = TIME_SLOTS.find((s) => s.id === slotId)
  const price = service ? service.price * car.multiplier : 0
  const fee = service ? 49 : 0
  const total = price + fee

  const canNext =
    (step === 0 && carId) ||
    (step === 1 && serviceId) ||
    (step === 2 && slotId && address.trim().length > 2) ||
    step === 3

  return (
    <section id="booking" className="relative mx-auto mt-32 max-w-[1200px] scroll-mt-24 px-5 lg:px-10">
      <div className="pointer-events-none absolute -left-10 top-10 -z-10 h-72 w-72 rounded-full bg-teal-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 -z-10 h-80 w-80 rounded-full bg-teal-brand/10 blur-3xl" />

      <div className="mb-12 text-center">
        <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-brand">
          Slot booking
        </span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Book your wash</h2>
        <p className="mt-3 text-ink/60">Demo flow — everything here is hard-coded.</p>
      </div>

      <div className="glass-strong rounded-[2rem] p-6 sm:p-10">
        {done ? (
          <div className="animate-fade-up py-12 text-center">
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-teal-brand text-black shadow-xl shadow-teal-brand/40">
              <Icon name="PartyPopper" className="h-10 w-10" />
            </span>
            <h3 className="mt-6 text-3xl font-extrabold">You're booked!</h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/70">
              {service.name} for your {car.label} today at {slot.label}, at {address}. Total{' '}
              <b className="text-teal-brand">{inr(total)}</b>.
            </p>
            <p className="mt-2 text-sm text-ink/50">Booking ID QW-{(2400 + (total % 97)).toFixed(0)}</p>
            <PrimaryButton className="mt-8" onClick={reset}>
              Book another wash
            </PrimaryButton>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              {/* Stepper */}
              <ol className="mb-10 flex items-center">
                {STEPS.map((label, i) => (
                  <li key={label} className="flex flex-1 items-center last:flex-none">
                    <button onClick={() => i < step && update({ step: i })} className="flex items-center gap-2">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition ${i <= step
                            ? 'bg-teal-brand text-black shadow-lg shadow-teal-brand/30'
                            : 'border border-white/15 bg-white/5 text-ink/50'
                          }`}
                      >
                        {i < step ? <Icon name="Check" className="h-4 w-4" strokeWidth={3} /> : i + 1}
                      </span>
                      <span className={`hidden text-sm font-semibold sm:block ${i <= step ? '' : 'text-ink/50'}`}>
                        {label}
                      </span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <span className={`mx-3 h-0.5 flex-1 rounded ${i < step ? 'bg-teal-brand' : 'bg-white/10'}`} />
                    )}
                  </li>
                ))}
              </ol>

              <div key={step} className="animate-slide-in min-h-[300px]">
                {step === 0 && (
                  <>
                    <h3 className="mb-5 text-xl font-bold">Which car are we washing?</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {CARS.map((c) => (
                        <button key={c.id} onClick={() => update({ carId: c.id })} className={optionCls(carId === c.id)}>
                          <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10">
                            <Icon name="Car" className="h-6 w-6 text-teal-brand" />
                          </span>
                          <span className="flex-1">
                            <span className="block font-bold">{c.label}</span>
                            <span className="text-sm text-ink/60">{c.type}</span>
                          </span>
                          {carId === c.id && <Icon name="Check" className="h-5 w-5 text-teal-brand" />}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <h3 className="mb-5 text-xl font-bold">Pick a wash package</h3>
                    <div className="grid gap-4">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => update({ serviceId: s.id })}
                          className={optionCls(serviceId === s.id)}
                        >
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10">
                            <Icon name={s.icon} className="h-6 w-6 text-teal-brand" />
                          </span>
                          <span className="flex-1">
                            <span className="flex items-center gap-2 font-bold">
                              {s.name}
                              {s.popular && (
                                <span className="rounded-full bg-teal-brand px-2 py-0.5 text-[10px] font-bold uppercase text-black">
                                  Popular
                                </span>
                              )}
                            </span>
                            <span className="text-sm text-ink/60">{s.includes.join(' · ')}</span>
                          </span>
                          <span className="text-right">
                            <span className="block text-lg font-extrabold text-teal-brand">
                              {inr(s.price * car.multiplier)}
                            </span>
                            <span className="text-xs text-ink/60">{s.duration} min</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className="mb-5 text-xl font-bold">Where and when?</h3>
                    <label className="mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 focus-within:border-teal-brand/60">
                      <Icon name="MapPin" className="h-5 w-5 text-teal-brand" />
                      <input
                        value={address}
                        onChange={(e) => update({ address: e.target.value })}
                        placeholder="Society / street, area"
                        className="w-full bg-transparent font-medium outline-none placeholder:text-ink/40"
                      />
                    </label>
                    <p className="mb-3 text-sm font-semibold text-ink/60">Today's slots</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {TIME_SLOTS.map((s) => (
                        <button
                          key={s.id}
                          disabled={s.taken}
                          onClick={() => update({ slotId: s.id })}
                          className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${s.taken
                              ? 'cursor-not-allowed border-transparent bg-white/5 text-ink/25 line-through'
                              : slotId === s.id
                                ? 'border-teal-brand bg-teal-brand text-black shadow-lg shadow-teal-brand/30'
                                : 'border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-teal-brand/40 hover:bg-white/10'
                            }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className="mb-5 text-xl font-bold">Review & confirm</h3>
                    <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                      {[
                        ['Car', `${car.label} (${car.type})`],
                        ['Service', service?.name],
                        ['When', `Today, ${slot?.label}`],
                        ['Where', address],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-6 text-sm">
                          <span className="text-ink/60">{k}</span>
                          <span className="text-right font-semibold">{v}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-ink/60">
                      Payment is collected after the wash (prototype — no real payment).
                    </p>
                  </>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => update({ step: step - 1 })}
                  disabled={step === 0}
                  className="rounded-full px-5 py-2.5 font-semibold text-ink/70 transition hover:bg-white/10 disabled:invisible"
                >
                  Back
                </button>
                <PrimaryButton
                  disabled={!canNext}
                  onClick={() => (step === 3 ? update({ done: true }) : update({ step: step + 1 }))}
                >
                  {step === 3 ? 'Confirm booking' : 'Continue'} <Icon name="ArrowRight" className="h-5 w-5" />
                </PrimaryButton>
              </div>
            </div>

            {/* Summary */}
            <aside className="glass h-fit rounded-3xl p-6 lg:sticky lg:top-28">
              <h4 className="font-bold">Your wash</h4>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-ink/60">Car</span><span className="font-semibold">{car.label}</span></div>
                <div className="flex justify-between"><span className="text-ink/60">Service</span><span className="font-semibold">{service?.name ?? '—'}</span></div>
                <div className="flex justify-between"><span className="text-ink/60">Time</span><span className="font-semibold">{slot ? `Today, ${slot.label}` : '—'}</span></div>
                <div className="flex justify-between"><span className="text-ink/60">Duration</span><span className="font-semibold">{service ? `${service.duration} min` : '—'}</span></div>
              </div>
              <div className="my-5 h-px bg-white/10" />
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between"><span className="text-ink/60">Wash</span><span>{service ? inr(price) : '—'}</span></div>
                <div className="flex justify-between"><span className="text-ink/60">Doorstep fee</span><span>{service ? inr(fee) : '—'}</span></div>
                <div className="flex justify-between pt-1 text-lg font-extrabold"><span>Total</span><span className="text-teal-brand">{service ? inr(total) : '—'}</span></div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}