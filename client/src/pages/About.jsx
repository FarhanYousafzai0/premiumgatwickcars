import React from "react";
import {
  ShieldCheck,
  Clock,
  Zap,
  Users,
  CreditCard,
  CheckCircle,
  Star,
  Globe,
  Phone,
} from "lucide-react";

// ----------------- AboutHero -----------------
function AboutHero() {
  return (
    <div className="relative overflow-hidden text-black">
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-black/5 text-black rounded-full text-sm font-medium mb-6">
          Premium Booking Experience
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-black">
          Revolutionizing the Way You Book
        </h1>
        <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
          the next-generation booking platform designed to simplify and elevate 
          the way you book travel, events, and services. Effortless, secure, and 
          transparent — every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="flex items-center text-black/70">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm">4.9/5 Customer Rating</span>
          </div>
          <div className="flex items-center text-black/70">
            <Users className="w-5 h-5 text-black mr-2" />
            <span className="text-sm">50,000+ Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------- Why Choose Us -----------------
function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "100% Secure Booking",
      description:
        "Advanced encryption and fraud protection keep your data safe at every step.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance from our dedicated support team whenever you need help.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Confirmation",
      description:
        "Get immediate booking confirmations with real-time availability updates.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Flexible Payment Options",
      description:
        "Multiple payment methods including credit cards, digital wallets, and installments.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description:
        "Access to premium services and partners worldwide for seamless travel experiences.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Optimized for all devices with our intuitive mobile app and responsive website.",
    },
  ];

  return (
    <section className="py-16 bg-white/40 text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Points */}
          <div>
            <div className="inline-block px-4 py-2 bg-black/5 text-black rounded-full text-sm font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-black">
              Experience the Premium Difference
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white group-hover:bg-black/20 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="relative">
            <div className="bg-white/80 rounded-2xl p-8 text-black relative overflow-hidden border border-neutral-200 shadow-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 " />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Trusted by Thousands</h3>
                  <p className="text-black/60">
                    Join our community of satisfied customers who've made Premium Gatwick Cars their go-to booking platform.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-black/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-black/60">Bookings Made</div>
                  </div>
                  <div className="bg-black/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm text-black/60">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Booking Confirmed</div>
                  <div className="text-xs text-black/50">2 minutes ago</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">Instant Processing</div>
                  <div className="text-xs text-black/50">Real-time updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------- Mission -----------------
function Mission() {
  const values = [
    "Transparency",
    "Innovation",
    "Security",
    "Inclusivity",
    "Reliability",
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 text-center bg-white/40 text-black rounded-xl mt-10">
      <div className="inline-block px-4 py-2 bg-black/5 text-black rounded-full text-sm font-medium mb-6">
        Our Mission
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Driven by Purpose</h2>
      <p className="text-lg text-black/80 leading-relaxed mb-8">
        At <span className="font-semibold text-black">Premium Gatwick Cars</span>, our mission is
        to make booking stress-free, accessible, and enjoyable for everyone.
        We're committed to transparency, innovation, and inclusivity —
        building a platform where every user feels secure and valued.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((val, i) => (
          <span
            key={i}
            className="px-6 py-3 bg-black/5  rounded-full text-sm font-medium text-black hover:text-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border border-neutral-200"
          >
            {val}
          </span>
        ))}
      </div>
    </div>
  );
}

// ----------------- Stats Section -----------------
function Stats() {
  const stats = [
    {
      number: "50,000+",
      label: "Happy Customers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100K+",
      label: "Bookings Completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white/40 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-black">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-black/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------- Main Page -----------------
export const About = () => {
  return (
    <section className="bg-white/40 text-black min-h-screen">
      <AboutHero />
      <WhyChooseUs />
      <Stats />
      <Mission />
    </section>
  );
};

export default About;