import { useState } from 'react'
import {
  Zap, Droplet, Droplets, Armchair, Gem, Car, CalendarClock, House, Sparkles,
  Leaf, ShieldCheck, CreditCard, Clock, MapPin, ChevronDown, ArrowRight, Star,
  Play, LocateFixed, Calendar, Check, ChevronLeft, ChevronRight, Menu, X,
  Pause, PartyPopper,
} from 'lucide-react'

const ICONS = {
  Zap, Droplet, Droplets, Armchair, Gem, Car, CalendarClock, House, Sparkles,
  Leaf, ShieldCheck, CreditCard, Clock, MapPin, ChevronDown, ArrowRight, Star,
  Play, LocateFixed, Calendar, Check, ChevronLeft, ChevronRight, Menu, X,
  Pause, PartyPopper,
}

export function Icon({ name, ...props }) {
  const C = ICONS[name] || Sparkles
  return <C {...props} />
}

/** Image with a dark gradient fallback if the remote URL fails. */
export function Img({ src, alt = '', className = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#161616] via-[#0d0d0d] to-[#3a2f05] ${className}`}
      />
    )
  }
  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} {...rest} />
  )
}

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 select-none">
      <span className="relative grid h-11 w-11 place-items-center">
        <span className="absolute inset-0 rounded-2xl bg-teal-brand/30 blur-lg" />
        <Droplet className="relative h-9 w-9 fill-teal-brand text-teal-glow" strokeWidth={1.6} />
      </span>
      <span className="text-[1.15rem] font-extrabold leading-[0.95] tracking-wide text-ink">
        QUICK
        <br />
        <span className="text-teal-brand">WASH</span>
      </span>
    </a>
  )
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`btn-shine relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-[#ffe066] to-teal-brand px-7 py-3.5 font-bold text-black shadow-[0_12px_30px_-8px_rgba(250,204,21,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(250,204,21,0.75)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 ${className}`}
    >
      {children}
    </button>
  )
}

export function GhostButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal-brand/50 hover:bg-white/10 ${className}`}
    >
      {children}
    </button>
  )
}

export const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')