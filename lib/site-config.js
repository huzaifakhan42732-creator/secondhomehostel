export const site = {
  name: "The Second Home Hostel",
  shortName: "The Second Home",
  tagline: "Your home away from home — near UVAS, GCU & UOE",
  description:
    "A premium, safe, and affordable hostel in Gunj Bakhsh — ideally located near UVAS, GCU, and UOE. Built for students and working professionals who want comfort without compromise.",
  location: {
    line1: "Gunj Bakhsh",
    line2: "Near UVAS, GCU & UOE",
    full: "Gunj Bakhsh, Near UVAS, GCU & UOE",
  },
  phoneDisplay: "0303 2518181",
  phoneRaw: "03032518181",
  whatsappNumber: "923032518181",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}`
  },
  whatsappMessage:
    "Hi! I'm interested in booking a room at The Second Home Hostel. Could you share more details?",
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
    price: "7,500",
    period: "Month",
    occupancy: "3 Students",
    description:
      "A spacious shared room designed for focus and comfort, ideal for students who want good company without giving up their personal space.",
    features: [
      "Well furnished interiors",
      "Attached washroom",
      "Comfortable beds",
      "Dedicated study environment",
      "Ample storage space",
      "Good ventilation & natural light",
    ],
  },
  {
    id: "two-seater",
    name: "Two Seater Room",
    price: "6,000",
    period: "Month",
    occupancy: "2 Students",
    description:
      "A quieter, more private setup for those who prefer a peaceful room with just one roommate — without stretching the budget.",
    features: [
      "Well furnished interiors",
      "Comfortable beds",
      "Attached washroom",
      "Peaceful, calm environment",
    ],
  },
]

export const securityFee = {
  amount: "5,000",
  note: "One-time, refundable security fee. Compulsory for all residents at the time of check-in.",
}

export const facilities = [
  { title: "High-Speed WiFi", description: "Stay connected for classes, assignments, and downtime." },
  { title: "Attached Washroom", description: "Private washroom access in every room." },
  { title: "Well Furnished Rooms", description: "Quality furniture, ready to move in." },
  { title: "Study Environment", description: "Quiet hours and dedicated study-friendly spaces." },
  { title: "24/7 Electricity", description: "Backup arrangements to keep the lights on." },
  { title: "Uninterrupted Water Supply", description: "Clean water, all day, every day." },
  { title: "Spotless Clean Rooms", description: "Regular housekeeping and maintenance." },
  { title: "Comfortable Beds", description: "Quality mattresses for a proper night's sleep." },
  { title: "Wardrobes", description: "Dedicated storage space for every resident." },
  { title: "Safe Environment", description: "Secure premises with a watchful, caring management." },
  { title: "Prime Location", description: "Walking distance from UVAS, GCU, UOE and the Gunj Bakhsh area." },
  { title: "Student Friendly", description: "Built around the real needs of students from UVAS, GCU, UOE, and young professionals." },
]
