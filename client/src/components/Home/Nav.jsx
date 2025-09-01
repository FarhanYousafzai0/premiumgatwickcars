// components/HeaderNav.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import GlassButton from "./GlassButton";
import { servicesData } from "../../lib/data";

function useScrollDirection({ threshold = 10 } = {}) {
  const [dir, setDir] = useState("up");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    let scrollTimeout;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) >= threshold) {
        setDir(delta > 0 ? "down" : "up");
        lastY = y;
      }
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      ticking = false;
    };

    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });

    return () => {
      window.removeEventListener("scroll", handler);
      clearTimeout(scrollTimeout);
    };
  }, [threshold]);

  return { dir, isScrolling };
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/fleet", label: "Fleet" },
  { to: "/services", label: "Our Services", submenu: servicesData },
  { to: "/contact", label: "Contact Us" },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const { dir } = useScrollDirection({ threshold: 10 });
  const [scrollY, setScrollY] = useState(0);

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeout = useRef(null);
  const servicesRef = useRef(null);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", updateScrollY, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollY);
  }, []);

  const shouldHide = dir === "down" && scrollY > 100;

  // close desktop dropdown on outside click
  useEffect(() => {
    if (!servicesOpen) return;
    function handleClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [servicesOpen]);

  return (
    <>
      {/* Desktop / Tablet Header */}
      <motion.header
        initial={false}
        animate={{ y: shouldHide ? -100 : 0, opacity: shouldHide ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 max-w-[90%] mx-auto backdrop-blur border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center select-none"
            aria-label="Home"
          >
            <svg
              data-logo="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 171 42"
              className="h-8 w-auto"
            >
              <g style={{ opacity: 1 }} id="logogram" transform="translate(0, 1) rotate(0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.3333 0C23.7194 0 24.1033 0.00932962 24.4847 0.0280265C24.4924 0.0284028 24.4989 0.0222809 24.4989 0.0145938V0.0145938C24.4989 0.00716838 24.5049 0.0011489 24.5123 0.0011489H45.8418C46.2974 0.00137965 46.6667 0.373466 46.6667 0.83295C46.6666 1.05356 46.5798 1.26515 46.4251 1.42119L40.8322 7.05882H52.7444C53.5415 7.05882 54.27 7.52957 54.5456 8.27757C55.4857 10.829 56 13.5892 56 16.4706C56 29.4655 45.5533 40 32.6667 40C32.2808 40 31.8971 39.9896 31.5158 39.9709C31.5078 39.9705 31.5011 39.9768 31.5011 39.9848V39.9848C31.5011 39.9926 31.4949 39.9989 31.4871 39.9989H10.1582C9.7026 39.9986 9.33333 39.6265 9.33333 39.1671C9.33336 38.9464 9.42022 38.7348 9.57487 38.5788L15.1655 32.9412H3.25562C2.45846 32.9412 1.73002 32.4704 1.4544 31.7224C0.514256 29.171 0 26.4109 0 23.5294C0 10.5345 10.4467 0 23.3333 0ZM31.3177 16.6556C29.3919 14.383 26.5301 12.9412 23.3333 12.9412C17.5343 12.9412 12.8333 17.6817 12.8333 23.5294C12.8333 24.7672 13.0456 25.9547 13.4326 27.0588H20.9989L24.6823 23.3444C26.6081 25.617 29.4699 27.0588 32.6667 27.0588C38.4657 27.0588 43.1667 22.3183 43.1667 16.4706C43.1667 15.2328 42.9544 14.0453 42.5674 12.9412H35.0011L31.3177 16.6556Z"
                  fill="#000000"
                />
              </g>
              <g style={{ opacity: 1 }} id="logotype" transform="translate(62, 8)">
                <path
                  fill="#000000"
                  d="M15.03 26L8.03 26L8.03 1.15L22.66 1.15Q27.67 1.15 30.41 3.30Q33.16 5.45 33.16 9.72L33.16 9.72Q33.16 13.85 30.41 15.99Q27.67 18.13 22.66 18.13L22.66 18.13L15.03 18.13L15.03 26ZM22.31 6.33L22.31 6.33L15.03 6.33L15.03 13.12L22.31 13.12Q24.38 13.12 25.32 12.33Q26.27 11.54 26.27 10.04L26.27 10.04L26.27 9.62Q26.27 7.94 25.32 7.13Q24.38 6.33 22.31 6.33ZM49.82 26L41.46 26L32.95 1.15L40.55 1.15L45.90 19.45L52.20 1.15L59.38 1.15L65.68 19.45L71.03 1.15L78.28 1.15L69.77 26L61.30 26L55.56 9.13L49.82 26ZM93.50 26.45L93.50 26.45Q89.02 26.45 85.54 24.86Q82.06 23.27 80.08 20.38Q78.10 17.49 78.10 13.57L78.10 13.57Q78.10 9.65 80.08 6.78Q82.06 3.91 85.54 2.34Q89.02 0.76 93.50 0.76L93.50 0.76Q97.42 0.76 100.40 1.88Q103.37 3.00 105.30 4.95Q107.22 6.89 107.89 9.30L107.89 9.30L101.62 10.81Q100.89 8.99 99.66 7.96Q98.44 6.92 96.88 6.50Q95.32 6.08 93.61 6.08L93.61 6.08Q91.30 6.08 89.37 6.87Q87.45 7.66 86.31 9.23Q85.17 10.81 85.17 13.22L85.17 13.22L85.17 13.92Q85.17 16.30 86.31 17.90Q87.45 19.49 89.37 20.28Q91.30 21.06 93.61 21.06L93.61 21.06Q95.32 21.06 96.88 20.64Q98.44 20.23 99.66 19.19Q100.89 18.16 101.62 16.34L101.62 16.34L107.89 17.84Q107.22 20.26 105.30 22.20Q103.37 24.14 100.40 25.30Q97.42 26.45 93.50 26.45Z"
                />
              </g>
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {navLinks.map((item) => {
              if (!item.submenu) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="px-3 py-2 rounded-md text-[16px] uppercase font-medium transition text-gray-700 hover:text-black"
                  >
                    {item.label}
                  </NavLink>
                );
              }
              return (
                <div
                  key={item.to}
                  className="relative"
                  ref={servicesRef}
                  onMouseEnter={() => {
                    clearTimeout(servicesTimeout.current);
                    setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 120);
                  }}
                >
                  <button
                    className="px-3 py-2 rounded-md text-[16px] capitalize font-medium flex items-center gap-1 text-gray-700 hover:text-black"
                    type="button"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 min-w-[210px] bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                      >
                        {item.submenu.map((sub) => (
                          <NavLink
                            key={sub.id}
                            to={`/services/${sub.id}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-md text-[15px] font-normal text-gray-800 hover:bg-gray-100"
                            onClick={() => setServicesOpen(false)}
                          >
                            <ChevronRight size={16} className="opacity-60" />
                            {sub.title}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CTA Button */}
            <GlassButton as="a" to="/booking">
              <span className="inline-flex items-center gap-2">
                <Phone size={16} /> Book Now
              </span>
            </GlassButton>
          </nav>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MoreHorizontal size={20} />
          </button>
        </div>
      </motion.header>

      <div className="h-16" />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] md:hidden bg-white border-l border-gray-200 shadow-xl"
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <Link
            to="/"
            className="flex items-center select-none"
            aria-label="Home"
          >
            <svg
              data-logo="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 171 42"
              className="h-8 w-auto"
            >
              <g style={{ opacity: 1 }} id="logogram" transform="translate(0, 1) rotate(0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.3333 0C23.7194 0 24.1033 0.00932962 24.4847 0.0280265C24.4924 0.0284028 24.4989 0.0222809 24.4989 0.0145938V0.0145938C24.4989 0.00716838 24.5049 0.0011489 24.5123 0.0011489H45.8418C46.2974 0.00137965 46.6667 0.373466 46.6667 0.83295C46.6666 1.05356 46.5798 1.26515 46.4251 1.42119L40.8322 7.05882H52.7444C53.5415 7.05882 54.27 7.52957 54.5456 8.27757C55.4857 10.829 56 13.5892 56 16.4706C56 29.4655 45.5533 40 32.6667 40C32.2808 40 31.8971 39.9896 31.5158 39.9709C31.5078 39.9705 31.5011 39.9768 31.5011 39.9848V39.9848C31.5011 39.9926 31.4949 39.9989 31.4871 39.9989H10.1582C9.7026 39.9986 9.33333 39.6265 9.33333 39.1671C9.33336 38.9464 9.42022 38.7348 9.57487 38.5788L15.1655 32.9412H3.25562C2.45846 32.9412 1.73002 32.4704 1.4544 31.7224C0.514256 29.171 0 26.4109 0 23.5294C0 10.5345 10.4467 0 23.3333 0ZM31.3177 16.6556C29.3919 14.383 26.5301 12.9412 23.3333 12.9412C17.5343 12.9412 12.8333 17.6817 12.8333 23.5294C12.8333 24.7672 13.0456 25.9547 13.4326 27.0588H20.9989L24.6823 23.3444C26.6081 25.617 29.4699 27.0588 32.6667 27.0588C38.4657 27.0588 43.1667 22.3183 43.1667 16.4706C43.1667 15.2328 42.9544 14.0453 42.5674 12.9412H35.0011L31.3177 16.6556Z"
                  fill="#000000"
                />
              </g>
              <g style={{ opacity: 1 }} id="logotype" transform="translate(62, 8)">
                <path
                  fill="#000000"
                  d="M15.03 26L8.03 26L8.03 1.15L22.66 1.15Q27.67 1.15 30.41 3.30Q33.16 5.45 33.16 9.72L33.16 9.72Q33.16 13.85 30.41 15.99Q27.67 18.13 22.66 18.13L22.66 18.13L15.03 18.13L15.03 26ZM22.31 6.33L22.31 6.33L15.03 6.33L15.03 13.12L22.31 13.12Q24.38 13.12 25.32 12.33Q26.27 11.54 26.27 10.04L26.27 10.04L26.27 9.62Q26.27 7.94 25.32 7.13Q24.38 6.33 22.31 6.33ZM49.82 26L41.46 26L32.95 1.15L40.55 1.15L45.90 19.45L52.20 1.15L59.38 1.15L65.68 19.45L71.03 1.15L78.28 1.15L69.77 26L61.30 26L55.56 9.13L49.82 26ZM93.50 26.45L93.50 26.45Q89.02 26.45 85.54 24.86Q82.06 23.27 80.08 20.38Q78.10 17.49 78.10 13.57L78.10 13.57Q78.10 9.65 80.08 6.78Q82.06 3.91 85.54 2.34Q89.02 0.76 93.50 0.76L93.50 0.76Q97.42 0.76 100.40 1.88Q103.37 3.00 105.30 4.95Q107.22 6.89 107.89 9.30L107.89 9.30L101.62 10.81Q100.89 8.99 99.66 7.96Q98.44 6.92 96.88 6.50Q95.32 6.08 93.61 6.08L93.61 6.08Q91.30 6.08 89.37 6.87Q87.45 7.66 86.31 9.23Q85.17 10.81 85.17 13.22L85.17 13.22L85.17 13.92Q85.17 16.30 86.31 17.90Q87.45 19.49 89.37 20.28Q91.30 21.06 93.61 21.06L93.61 21.06Q95.32 21.06 96.88 20.64Q98.44 20.23 99.66 19.19Q100.89 18.16 101.62 16.34L101.62 16.34L107.89 17.84Q107.22 20.26 105.30 22.20Q103.37 24.14 100.40 25.30Q97.42 26.45 93.50 26.45Z"
                />
              </g>
            </svg>
          </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-3 py-3">
                {navLinks.map((item) => {
                  if (!item.submenu) {
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-3 py-3 rounded-lg text-base font-medium mb-1 text-gray-800 hover:bg-gray-100"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  }
                  return (
                    <div key={item.to} className="mb-1">
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-gray-800 hover:bg-gray-100"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        <span className="flex items-center gap-2">
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18 }}
                            className="pl-4"
                          >
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.id}
                                to={`/services/${sub.id}`}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-[15px] text-gray-800 hover:bg-gray-100"
                                onClick={() => {
                                  setOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                <ChevronRight size={15} className="opacity-60" />
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="mt-4 px-3">
                  <GlassButton as="a" to="/booking" onClick={() => setOpen(false)}>
                    <span className="inline-flex items-center justify-center gap-2">
                      <Phone size={16} /> Book Now
                    </span>
                  </GlassButton>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
