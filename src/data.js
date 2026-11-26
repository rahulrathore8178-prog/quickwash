// ───────────────────────────────────────────────────────────────
// All hard-coded content lives here so it's easy to swap later.
// Image URLs are remote (Unsplash). Every <Img/> has a gradient
// fallback, so the page still looks good if a link ever breaks.
// ───────────────────────────────────────────────────────────────

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: u('photo-1520340356584-f9917d1eea6f', 2000),
  expressCard: u('photo-1601362840469-51e4d8d58785', 800),
  deepCard: u('photo-1607860108855-64acf2078ed9', 800),
  interiorCard: u('photo-1489824904134-891ab64532f1', 800),
  premiumCard: u('photo-1503376780353-7e6692767b70', 800),
  banner: u('photo-1492144534655-ae79c964c9d7', 1600),
  stepChoose: u('photo-1494976388531-d1058494cdd8', 1200),
  stepSlot: u('photo-1486262715619-67b85e0b08d3', 1200),
  stepArrive: u('photo-1558618666-fcd25c85cd64', 1200),
  stepGlow: u('photo-1552519507-da3b142c6e3d', 1200),
}

export const SERVICES = [
  {
    id: 'express',
    name: 'Express Exterior',
    price: 299,
    duration: 25,
    blurb: 'Exterior rinse + hand dry',
    includes: ['Foam exterior wash', 'Hand dry finish', 'Tyre rinse'],
    icon: 'Zap',
    image: IMAGES.expressCard,
  },
  {
    id: 'deep',
    name: 'Deep Clean',
    price: 799,
    duration: 60,
    blurb: 'Exterior, wheels, interior vacuum, dashboard',
    includes: ['Everything in Express', 'Wheel & arch scrub', 'Interior vacuum', 'Dashboard wipe'],
    icon: 'Droplet',
    image: IMAGES.deepCard,
    popular: true,
  },
  {
    id: 'interior',
    name: 'Interior Refresh',
    price: 499,
    duration: 40,
    blurb: 'Vacuum, surfaces, glass',
    includes: ['Deep vacuum', 'Surface wipe-down', 'Streak-free glass'],
    icon: 'Armchair',
    image: IMAGES.interiorCard,
  },
  {
    id: 'premium',
    name: 'Premium Detail',
    price: 1499,
    duration: 90,
    blurb: 'Full detailing, wax, tire shine',
    includes: ['Everything in Deep Clean', 'Hand wax finish', 'Tyre shine', 'Engine bay wipe'],
    icon: 'Gem',
    image: IMAGES.premiumCard,
  },
]

export const CARS = [
  { id: 'creta', label: 'Hyundai Creta', type: 'SUV', multiplier: 1.0 },
  { id: 'swift', label: 'Maruti Swift', type: 'Hatchback', multiplier: 0.85 },
  { id: 'city', label: 'Honda City', type: 'Sedan', multiplier: 0.95 },
  { id: 'fortuner', label: 'Toyota Fortuner', type: 'Large SUV', multiplier: 1.25 },
  { id: 'nexon', label: 'Tata Nexon EV', type: 'Compact SUV', multiplier: 0.95 },
]

export const TIME_SLOTS = [
  { id: 's1', label: '09:00 AM', taken: false },
  { id: 's2', label: '10:30 AM', taken: false },
  { id: 's3', label: '12:00 PM', taken: true },
  { id: 's4', label: '02:30 PM', taken: false },
  { id: 's5', label: '04:00 PM', taken: false },
  { id: 's6', label: '05:30 PM', taken: true },
  { id: 's7', label: '07:00 PM', taken: false },
]

export const CITIES = ['Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai']

export const HOW_IT_WORKS = [
  {
    id: 1,
    icon: 'Car',
    title: 'Choose your wash',
    text: 'Pick your car and the wash that suits it — from a quick exterior rinse to a full premium detail. Prices are shown upfront, no surprises.',
    points: ['Select car type & model', 'Four wash packages', 'Transparent pricing'],
    image: IMAGES.stepChoose,
  },
  {
    id: 2,
    icon: 'CalendarClock',
    title: 'Book a slot',
    text: 'See live availability near you and lock in a time that fits your day. Reschedule free up to 2 hours before.',
    points: ['Live slot availability', 'Same-day bookings', 'Free rescheduling'],
    image: IMAGES.stepSlot,
  },
  {
    id: 3,
    icon: 'House',
    title: 'We arrive at your doorstep',
    text: 'A verified, insured professional turns up with their own water tank and equipment. No hose, no plug, no hassle.',
    points: ['Verified professionals', 'Self-contained equipment', 'Live arrival tracking'],
    image: IMAGES.stepArrive,
  },
  {
    id: 4,
    icon: 'Sparkles',
    title: 'Relax. Enjoy the shine.',
    text: 'Go on with your day while we work. Pay cashless once you are happy, and rate the wash in a tap.',
    points: ['Cashless & secure', 'Photo proof of the job', 'Satisfaction guarantee'],
    image: IMAGES.stepGlow,
  },
]

export const FEATURES = [
  { icon: 'Leaf', title: 'Water-conscious wash', text: 'Low-flow, high-pressure equipment that uses a fraction of a garage wash.' },
  { icon: 'ShieldCheck', title: 'Verified partners', text: 'Background-checked, trained and insured professionals only.' },
  { icon: 'CreditCard', title: 'Cashless & secure', text: 'UPI, cards and wallets. Pay only after the job is done.' },
  { icon: 'Clock', title: 'On-time promise', text: 'Arrive within your slot or your next wash gets a discount.' },
]

export const REVIEWS = [
  { name: 'Aarav M.', car: 'Hyundai Creta', text: 'Car looked brand new, and I never left my desk. Absolute game changer.' },
  { name: 'Priya S.', car: 'Honda City', text: 'Slot booking took 20 seconds. The team was punctual and super polite.' },
  { name: 'Rohan K.', car: 'Toyota Fortuner', text: 'The Premium Detail is worth every rupee. The finish is unreal.' },
]
