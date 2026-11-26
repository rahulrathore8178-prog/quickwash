import { Icon } from './ui'
import { FEATURES } from '../data'

export function StepsStrip() {
  const steps = [
    { n: 1, icon: 'Car', label: 'Choose wash' },
    { n: 2, icon: 'Calendar', label: 'Pick a time' },
    { n: 3, icon: 'House', label: 'We arrive' },
  ]
  return (
    <div className="mx-auto mt-14 flex max-w-[1100px] flex-col items-center justify-center gap-5 px-5 sm:flex-row sm:gap-0">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-brand font-bold text-black shadow-lg shadow-teal-brand/30">
              {s.n}
            </span>
            <Icon name={s.icon} className="h-6 w-6 text-teal-brand" />
            <span className="font-semibold">{s.label}</span>
          </div>
          {i < steps.length - 1 && <span className="mx-5 hidden h-px w-32 bg-white/20 sm:block lg:w-56" />}
        </div>
      ))}
    </div>
  )
}

export function TrustStrip() {
  const items = FEATURES.slice(0, 3)
  return (
    <div className="mx-auto mt-10 max-w-[1050px] px-5">
      <div className="glass grid gap-4 rounded-full px-8 py-5 sm:grid-cols-3 max-sm:rounded-3xl">
        {items.map((f, i) => (
          <div
            key={f.title}
            className={`flex items-center justify-center gap-3 text-sm font-semibold ${i > 0 ? 'sm:border-l sm:border-white/15' : ''
              }`}
          >
            <Icon name={f.icon} className="h-6 w-6 text-teal-brand" />
            {f.title}
          </div>
        ))}
      </div>
    </div>
  )
}