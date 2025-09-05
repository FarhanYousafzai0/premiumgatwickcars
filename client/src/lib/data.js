import {
    Clock3,  Car, CreditCard,  Headphones, 
  } from "lucide-react"
  import { FaPlaneDeparture, FaBriefcase, FaCity, FaBuilding } from "react-icons/fa";

export const data = [
    {
      title: "Instant Quotes",
      desc: "Get a live price for your journey in seconds—no sign-up required, no hidden fees, and no obligation. Our transparent pricing ensures you always know exactly what you'll pay before you book, making planning your trip fast and stress-free.",
      badge: "Live",
      icon: Clock3,
      deco: "chart",
    },
    {
      title: "Secure Online Payments",
      desc: "Pay securely with your card or digital wallet through our PCI-compliant platform. Receipts are sent automatically to your email, and your payment details are always protected with industry-leading encryption for total peace of mind.",
      badge: "PCI",
      icon: CreditCard,
      deco: "browser",
    },
    {
      title: "Modern Fleet",
      desc: "Choose from a wide range of vehicles including Saloon, Estate, Executive, and Minibus options—all with real, up-to-date photos. Our modern fleet is regularly maintained for comfort, safety, and reliability, ensuring the perfect ride for every occasion.",
      badge: "4–8 seats",
      icon: Car,
      deco: "fleet",
    },
    {
      title: "24/7 Support",
      desc: "Get help from real humans any time, any day—via phone, WhatsApp, or email. Our dedicated support team is always available to answer questions, assist with bookings, and resolve issues quickly, so you’re never left stranded.",
      badge: "Always On",
      icon: Headphones,
      deco: "support",
    },
  ];



// Choices
import {  ShieldCheck, BadgeCheck, Zap, Sparkles, Plane } from "lucide-react";

export const choices = [
  {
    id: 1,
    title: "Professional & Licensed",
    des: "Travel with confidence — all our drivers are fully licensed, experienced, and dedicated to your safety.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "No Hidden Charges",
    des: "Transparent, upfront pricing every time. What you see is exactly what you pay — no surprises.",
    icon: Zap,
  },
  {
    id: 3,
    title: "VIP Service",
    des: "From executive cars to door-to-door service, enjoy a premium travel experience tailored to you.",
    icon: Car,
  },
  {
    id: 4,
    title: "Clean & Fresh Cars",
    des: "Spotless vehicles with a fresh interior, ensuring every ride is comfortable and welcoming.",
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Flight Tracking",
    des: "We monitor your flight in real time to guarantee on-time pickups — even if your flight is delayed.",
    icon: Plane,
  },
  {
    id: 6,
    title: "Polite Drivers",
    des: "Courteous and understanding chauffeurs who make your journey stress-free and pleasant.",
    icon: BadgeCheck,
  },
];





// Services

  export const services = [
    {
      id: 1,
      title: "Airport Transfers",
      des: "Start or end your journey stress-free with our airport transfer services. We monitor flight schedules to ensure a seamless transition to and from the airport.",
      icon: FaPlaneDeparture,
    },
    {
      id: 2,
      title: "Business Travel",
      des: "Travel in comfort and style for your business meetings, conferences, and corporate events. Our executive vehicles and professional chauffeurs ensure you arrive on time and make the right impression.",
      icon: FaBriefcase,
    },
    {
      id: 3,
      title: "City Tours",
      des: "Explore the city’s top attractions with our tailored city tours. Enjoy a comfortable ride and local insights from our experienced drivers, making your sightseeing memorable and convenient.",
      icon: FaCity,
    },
    {
      id: 4,
      title: "Corporate Accounts",
      des: "Simplify your company's transportation needs with our corporate accounts. Streamline billing, track expenses, and enjoy priority service for your team and clients.",
      icon: FaBuilding,
    }
  ]


// Fleet

 export const fleet = [
    {
      name: "Economy Class",
      img: "/E.png",
      desc: "Affordable and comfortable rides for everyday journeys.",
    },
    {
      name: "First Class",
      img: "/F.png",
      desc: "Premium luxury vehicles for executives and special occasions.",
    },
    {
      name: "Executive Class",
      img: "/S.png",
      desc: "Executive sedans designed for style, space and comfort.",
    },
    {
      name: "Executive Van Class",
      img: "SS.png",
      desc: "Spacious vans for group transfers, family trips or events.",
    },
  ];







  export const fleets = [
    {
      title: "Executive Van Class",
      image: "/SS.png",
      description:
        "Mercedes V-Class, Mercedes Vito, VW Transporter or similar 7 Seater Car-Van. Free cancellation 3 hours prior to pick-up. Seats up to 7 passengers."
    },
    {
      title: "Economy Class",
      image: "/E.png",
      description:
        "Mercedes C-Class, Tesla Model 3, Toyota Prius, or similar saloon. Eco-friendly ride. Free cancellation 3 hours prior to pick-up."
    },
    {
      title: "First Class",
      image: "/F.png",
      description:
        "Mercedes S-Class, BMW 7 Series, Audi A8, Jaguar XJL or similar executive sedan. Includes chauffeur Meet & Greet service."
    },
    {
      title: "Business Class",
      image: "/S.png",
      description:
        "Mercedes E-Class, BMW 5 Series, Audi A6, Jaguar XF or similar. Free cancellation up to 3 hours prior to pick-up. Chauffeur Meet & Greet included."
    },
    {
      title: "Green Class",
      image: "/G.png",
      description:
        "Tesla Model X, Tesla Model S or similar executive electric car. Eco-luxury travel option."
    },
    {
      title: "Executive Van Class 8 Seater",
      image: "/S.png",
      description:
        "Mercedes Vito or similar executive van. Seats up to 8 passengers. Free cancellation 3 hours prior to pick-up."
    },
    {
      title: "Luxury Class",
      image: "/j.png",
      description:
        "Jaguar XF or similar luxury sedan. Free cancellation 3 hours prior. Advance booking required."
    },
    {
      title: "Executive Class",
      image: "/A.png",
      description:
        "Mercedes E-Class, BMW 5 Series, Audi A6, Jaguar XF or similar executive saloon. Free cancellation 3 hours prior. Chauffeur Meet & Greet included."
    }
  ];



  export const servicesData = [
    {
      id: "hourly",
      title: "Hourly Airport Taxi",
      path: "/services/hourly",
    },
    {
      id: "gatwick",
      title: "Gatwick Airport Taxi",
      path: "/services/gatwick",
    },
    {
      id: "redhill",
      title: "Redhill Airport Taxi",
      path: "/services/redhill",
    },
    {
      id: "luxury",
      title: "Luxury Business Transfer",
      path: "/services/luxury",
    },
  ];
  


  export const timeSlots = [
    '06:00', '06:30', '07:00', '07:30', '08:00', '08:30',
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00'
  ];


  export const locations = [
    
  
    // From spreadsheet
    'LGW - Gatwick Airport - South Terminal',
    'LGW - Gatwick Airport - North Terminal',
    'LHR - London Heathrow - T1',
    'LHR - London Heathrow - T2',
    'LHR - London Heathrow - T3',
    'LHR - London Heathrow - T4',
    'LHR - London Heathrow - T5',
    'STN - Stansted Airport',
    'LTN - Luton Airport',
    'LCY - City Airport',
    'BQH - Biggin Hill Airport',
    'BRS - Bristol Airport',
    'MAN - Manchester Airport',
    'BHX - Birmingham Airport',
    'SEN - Southend Airport',
    'CWL - Cardiff Airport',
    'LPL - Liverpool Airport',
    'BOH - Bournemouth Airport',
    'EXT - Exeter Airport',
    'NQY - Newquay Airport',
    'London',
    'London - East',
    'London - West',
    'London - North',
    'London - South',
    'Southampton Port',
    'Portsmouth Port',
    'Harwich Port'
  ];