import React from "react";
import {
  ShieldCheck,
  Clock,
  Zap,
  Users,
  CreditCard,
  CheckCircle,
  Star,
  Car,
  Plane,
  Smile,
} from "lucide-react";

// ----------------- AboutHero -----------------
function AboutHero() {
  return (
    <section className="relative overflow-hidden text-black">
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-30 text-center">
        
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-black">
          Reliable Transfers, Anytime You Need
        </h1>
        <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed mb-8">
          At <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
          we’ve built our reputation on professionalism, trust, and comfort. 
          With licensed drivers, spotless vehicles, and a commitment to 
          stress-free travel, we ensure your journey is smooth from the moment 
          you book until you reach your destination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <div className="flex items-center text-black/70">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm">Top-Rated Service</span>
          </div>
          <div className="flex items-center text-black/70">
            <Users className="w-5 h-5 text-black mr-2" />
            <span className="text-sm">Thousands of Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------- Why Choose Us -----------------
function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Professional & Licensed",
      description: "Every driver is fully licensed, insured, and trained to provide safe, professional service.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Always On Time",
      description: "We track your flight and schedule to ensure punctual pick-ups and drop-offs.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "No Hidden Charges",
      description: "Clear, upfront pricing with no surprises — what you see is what you pay.",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Clean & Comfortable Cars",
      description: "Our vehicles are spotless, well-maintained, and always smell fresh for your comfort.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "VIP Service",
      description: "From meet-and-greet to door-to-door transfers, enjoy a premium travel experience.",
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Polite & Understanding Drivers",
      description: "Our courteous drivers make your journey stress-free, welcoming, and enjoyable.",
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
              Travel With Confidence
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white group-hover:bg-black/20 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">{reason.title}</h3>
                    <p className="text-black/70 leading-relaxed">{reason.description}</p>
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
                    Join our community of satisfied customers who trust us for 
                    reliable and stress-free transfers every day.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-black/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-black/60">Journeys Completed</div>
                  </div>
                  <div className="bg-black/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-sm text-black/60">Customer Rating</div>
                  </div>
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
    "Reliability",
    "Comfort",
    "Trust",
    "Customer Care",
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 text-center bg-white/40 text-black rounded-xl mt-10">
      <div className="inline-block px-4 py-2 bg-black/5 text-black rounded-full text-sm font-medium mb-6">
        Our Mission
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Driven by Excellence</h2>
      <p className="text-lg text-black/80 leading-relaxed mb-8">
        At <span className="font-semibold text-black">Premium Gatwick Cars</span>, our mission is
        simple: provide safe, reliable, and comfortable travel with no compromises. 
        We believe in clear pricing, dependable service, and creating stress-free 
        journeys for every passenger.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((val, i) => (
          <span
            key={i}
            className="px-6 py-3 bg-black/5 rounded-full text-sm font-medium text-black hover:text-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border border-neutral-200"
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
      label: "Transfers Completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Available Anytime",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Transparent Pricing",
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
