// components/ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400); // Show after 300px scroll
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={handleClick}
          aria-label="Scroll to top"
          
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 40 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="
            fixed bottom-6 right-1/2 z-50
            inline-flex items-center cursor-pointer hover:scale-105 justify-center
            w-12 h-12 rounded-full
            bg-gray-900 text-white shadow-lg
            hover:bg-black transition
          "
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
