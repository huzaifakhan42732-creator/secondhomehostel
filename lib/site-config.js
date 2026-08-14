export const site = {
  name: "The Second Home Boys Hostel",
  shortName: "The Second Home Boys Hostel",
  tagline: "Your home away from home — near UVAS, GCU & UOE, Lahore",
  description:
    "A premium, safe, and affordable boys hostel in Gunj Baksh Town, Lahore — ideally located near UVAS, GCU, and UOE. Built for students and working professionals who want comfort without compromise.",
  location: {
    line1: "40-Rattigan Road, Gunj Baksh Town, Lahore",
    line2: "Near UVAS, GCU & UOE",
    full: "40-Rattigan Road, Gunj Baksh Town, Lahore — Near UVAS, GCU & UOE",
  },
  phoneDisplay: "+923032518181",
  phoneRaw: "+923032518181",
  phoneTel: "tel:+923032518181",
  whatsappNumber: "923032518181",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`
  },
  whatsappMessage:
    "Hi! I'm interested in booking a room at The Second Home Boys Hostel in Gunj Baksh Town, Lahore. Could you share details regarding room rates and availability?",
  get whatsappLinkWithMessage() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`
  },
}

// ─── MAIN / HEADER NAVIGATION ────────────────────────────────────────────────
// (Hostel Rules & FAQ are footer-only per user requirements)
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "#rooms-section" },
  { label: "Facilities", href: "#facilities-section" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// ─── FOOTER-ONLY IMPORTANT LINKS ─────────────────────────────────────────────
export const footerImportantLinks = [
  { label: "Hostel Rules", href: "/hostel-rules" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export const rooms = [
  {
    id: "three-seater",
    name: "Three Seater Room",
    pricingNote: "Starting from Affordable Monthly Rates",
    period: "Month",
    occupancy: "3 Students",
    bathroom: "Common Bathroom",
    image: "/IMG-20260806-WA0089.jpg",
    description:
      "A spacious shared room designed specifically for focus and comfort, making it ideal for university students who appreciate good company without giving up their personal study space. Enjoy a well-ventilated, fully furnished room with access to a clean common bathroom and all essential hostel amenities.",
    features: [
      "Well furnished interiors",
      "Common bathroom",
      "Comfortable beds with mattresses",
      "Dedicated study environment",
      "Personal wardrobes & storage",
      "High-Speed Wi-Fi",
      "Good ventilation & natural light",
      "Regular housekeeping",
    ],
  },
  {
    id: "two-seater",
    name: "Two Seater Room",
    pricingNote: "Starting from Affordable Monthly Rates",
    period: "Month",
    occupancy: "2 Students",
    bathroom: "Attached Bathroom",
    image: "/IMG-20260815-WA0002.jpg",
    description:
      "A quieter, more private setup for students and young professionals who prefer a peaceful environment with just one roommate. Features fully furnished interiors, an attached bathroom, comfortable bedding, and dedicated storage to give you a restful and productive living experience.",
    features: [
      "Well furnished interiors",
      "Attached bathroom",
      "Comfortable beds with mattresses",
      "Peaceful & quiet study environment",
      "Personal wardrobes & storage",
      "High-Speed Wi-Fi",
      "24/7 Security",
    ],
  },
]

export const securityFee = {
  title: "Refundable Security Deposit",
  note: "A one-time, refundable security deposit. Compulsory for all residents at the time of check-in and fully refundable upon check-out.",
}

// ─── EXACT GALLERY SEQUENCE AS SPECIFIED (1 to 8) ────────────────────────────
// 1. Office wali
// 2. Bed wali
// 3. Mattress wali
// 4. Galleries wali
// 5. Kitchen wali
// 6. Newspaper wali
// 7. Washing machine wali
// 8. Washrooms wali
export const galleryItems = [
  {
    id: 1,
    seq: 1,
    title: "Hostel Office & Administration",
    badge: "01. Office",
    category: "office",
    src: "/IMG-20260806-WA0092.jpg",
    alt: "Administration & Manager Office at The Second Home Boys Hostel Lahore",
    description:
      "Executive management desk and reception area equipped with comfortable visitor seating, dedicated for student onboarding, inquiries, and resident assistance.",
    highlights: ["Management Desk", "Visitor Leather Chairs", "Official Guidance", "24/7 Assistance"],
  },
  {
    id: 2,
    seq: 2,
    title: "Furnished Student Beds",
    badge: "02. Bed",
    category: "bed",
    src: "/IMG-20260815-WA0002.jpg",
    alt: "Furnished Single & Shared Beds at The Second Home Boys Hostel Lahore",
    description:
      "Solid, well-crafted beds designed for maximum comfort and durability, situated in clean, well-lit, and properly ventilated resident rooms.",
    highlights: ["Solid Headboard & Frame", "Quality Diamond Mattress", "Personal Wardrobe Setup", "Spacious Layout"],
    additionalSrcs: ["/IMG-20260806-WA0089.jpg", "/IMG-20260806-WA0080.jpg"],
  },
  {
    id: 3,
    seq: 3,
    title: "Quality Mattresses & Bedding",
    badge: "03. Mattress",
    category: "mattress",
    src: "/IMG-20260815-WA0006.jpg",
    alt: "Brand New Comfortable Mattresses at The Second Home Boys Hostel Lahore",
    description:
      "Brand-new, premium quality foam mattresses arranged to guarantee healthy back support and a restful night's sleep after long university hours.",
    highlights: ["High-Density Comfort Foam", "Hygienic Sealed Covering", "Carpeted Floor Layout", "Back Support"],
  },
  {
    id: 4,
    seq: 4,
    title: "Corridors & Building Galleries",
    badge: "04. Galleries",
    category: "galleries",
    src: "/IMG-20260815-WA0012.jpg",
    alt: "Clean Well-Lit Corridors & Galleries at The Second Home Boys Hostel Lahore",
    description:
      "Spacious and clean interior gallery passages with decorative recessed warm wall lighting, natural air ventilation, and polished tile flooring.",
    highlights: ["Warm Accent Wall Lighting", "Polished Tile Flooring", "Natural Ventilation", "Wide Hallways"],
    additionalSrcs: ["/IMG-20260806-WA0072.jpg"],
  },
  {
    id: 5,
    seq: 5,
    title: "Resident Kitchen Facility",
    badge: "05. Kitchen",
    category: "kitchen",
    src: "/IMG-20260806-WA0083.jpg",
    alt: "Kitchen Facility at The Second Home Boys Hostel Lahore",
    description:
      "Functional resident kitchen counter with gas cooking stove, stainless steel washing sink, tiled walls, and exterior window for ventilation.",
    highlights: ["Gas Cooking Stove", "Stainless Steel Sink", "Tiled Backsplash", "Ventilation Window"],
  },
  {
    id: 6,
    seq: 6,
    title: "Newspaper & Reading Corner",
    badge: "06. Newspaper",
    category: "newspaper",
    src: "/IMG-20260815-WA0011.jpg",
    alt: "Newspaper & Study Corner at The Second Home Boys Hostel Lahore",
    description:
      "Dedicated reading station in the common staircase lobby with daily national newspapers (DAWN) and seating for resident knowledge and current affairs.",
    highlights: ["Daily DAWN Newspapers", "Ergonomic Reading Stand", "Lobby Access", "Study-Friendly"],
    additionalSrcs: ["/IMG-20260815-WA0007.jpg"],
  },
  {
    id: 7,
    seq: 7,
    title: "Washing Machine & Laundry",
    badge: "07. Washing Machine",
    category: "washing-machine",
    src: "/IMG-20260815-WA0013.jpg",
    alt: "Washing Machine Laundry Area at The Second Home Boys Hostel Lahore",
    description:
      "On-site washing machine and amenities corner with stainless steel filtered drinking water dispenser and shared refrigerator for complete student convenience.",
    highlights: ["National Washing Machine", "Pure Drinking Water Cooler", "Shared Refrigerator", "On-site Laundry"],
    additionalSrcs: ["/IMG-20260815-WA0010.jpg"],
  },
  {
    id: 8,
    seq: 8,
    title: "Modern Clean Washrooms",
    badge: "08. Washrooms",
    category: "washrooms",
    src: "/IMG-20260806-WA0079.jpg",
    alt: "Clean Tiled Bathrooms & Washbasins at The Second Home Boys Hostel Lahore",
    description:
      "Hygienic, fully tiled washroom facilities with overhead shower, modern ceramic washbasin, vanity mirror, commode, and 24/7 clean water supply.",
    highlights: ["Full Ceramic Wall Tiles", "Overhead Shower & Taps", "Vanity Mirror & Sink", "Geyser Hot Water Access"],
    additionalSrcs: ["/IMG-20260806-WA0074.jpg"],
  },
]

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "office", label: "Office" },
  { id: "bed", label: "Beds & Rooms" },
  { id: "mattress", label: "Mattresses" },
  { id: "galleries", label: "Galleries & Corridors" },
  { id: "kitchen", label: "Kitchen" },
  { id: "newspaper", label: "Newspaper Corner" },
  { id: "washing-machine", label: "Laundry" },
  { id: "washrooms", label: "Washrooms" },
]

export const facilities = [
  { title: "High-Speed Wi-Fi", description: "Stay connected with reliable high-speed internet for studies, assignments, and downtime." },
  { title: "Attached & Common Bathroom Options", description: "Attached bathroom with 2-seater and clean common bathroom with 3-seater." },
  { title: "Well Furnished Rooms", description: "Quality furniture, comfortable beds with mattresses, ready to move in." },
  { title: "Study Environment", description: "Quiet hours and dedicated study-friendly spaces for academic focus." },
  { title: "24/7 Electricity", description: "Backup arrangements to keep the lights and fans running uninterrupted." },
  { title: "Uninterrupted Water Supply", description: "Clean running water available 24/7 for all residents." },
  { title: "Spotless Clean Rooms", description: "Regular housekeeping and maintenance for a hygienic living space." },
  { title: "Comfortable Beds", description: "Quality mattresses and solid beds for a proper night's sleep." },
  { title: "Wardrobes & Storage", description: "Dedicated personal storage space for every resident." },
  { title: "24/7 Security", description: "Round-the-clock security and secure premises for total peace of mind." },
  { title: "Prime Location", description: "Walking distance from UVAS, GCU, UOE and the Gunj Baksh Town, Lahore area." },
  { title: "Student Friendly", description: "Built around the real needs of students from UVAS, GCU, UOE, and young professionals." },
  { title: "Kitchen & Home Cooked Meals", description: "A fully equipped kitchen available for residents — enjoy fresh, home-style meals every day." },
  { title: "CCTV Surveillance", description: "Round-the-clock CCTV cameras covering common areas for resident safety." },
  { title: "Laundry Facility", description: "On-site laundry facility so you can keep your clothes fresh without the hassle." },
  { title: "Filtered Drinking Water", description: "Clean, safe, and purified drinking water available at all times." },
  { title: "Housekeeping Services", description: "Regular professional cleaning of rooms, corridors, and common bathrooms." },
  { title: "Refrigerator", description: "Shared refrigerator available to store food and beverages safely." },
  { title: "Geyser", description: "Hot water geyser available for a comfortable bathing experience in all seasons." },
]
