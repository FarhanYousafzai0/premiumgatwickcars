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
  export const choices = [


    {
      id:1,
        title: "Easy Booking",
        des: "Simple and easy steps to book your ride securely and reliably.",
        icon: Car,
    },
    {
      id:2,
        title: "Unbeatable Rates",
        des: "Enjoy competitive, transparent pricing with no hidden fees. Get the best value for your journey every time.",
        icon: CreditCard,
    },
    {
      id:3,
        title: "24/7 Availability",
        des: "Book and travel any time, day or night. Our service is available around the clock to fit your schedule.",
        icon: Headphones,
    }
  ]




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
  