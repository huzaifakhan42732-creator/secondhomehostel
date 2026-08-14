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

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "#rooms-section" },
  { label: "Facilities", href: "#facilities-section" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const rooms = [
  {
    id: "three-seater",
    name: "Three Seater Room",
    pricingNote: "Starting from Affordable Monthly Rates",
    period: "Month",
    occupancy: "3 Students",
    bathroom: "Common Bathroom",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
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
