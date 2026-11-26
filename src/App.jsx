import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import { StepsStrip, TrustStrip } from './components/Strips'
import HowItWorks from './components/HowItWorks'
import Booking from './components/Booking'
import { Reviews, Banner, Footer } from './components/Footer'

const INITIAL = {
  carId: 'creta',
  serviceId: 'deep',
  slotId: 's4', // 02:30 PM, as in the design
  address: '',
  step: 0,
  done: false,
}

export default function App() {
  const [city, setCity] = useState('Delhi NCR')
  const [booking, setBooking] = useState(INITIAL)

  const update = (patch) => setBooking((b) => ({ ...b, ...patch }))
  const reset = () => setBooking(INITIAL)

  return (
    <div className="relative overflow-x-hidden">
      <Navbar city={city} setCity={setCity} />
      <main>
        <Hero booking={booking} update={update} />
        <Services booking={booking} update={update} />
        <StepsStrip />
        <TrustStrip />
        <HowItWorks />
        <Booking booking={booking} update={update} reset={reset} />
        <Reviews />
        <Banner />
      </main>
      <Footer />
    </div>
  )
}
