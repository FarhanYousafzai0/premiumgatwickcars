// components/AcceptTerms.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { y: 80, opacity: 0, filter: "blur(2px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  exit: { y: 80, opacity: 0, filter: "blur(2px)" },
};

export default function AcceptTerms({
  storageKey = "site:termsAccepted",
  message = "By using this website, you agree to our Terms and Conditions. Please read them carefully before continuing.",
  acceptLabel = "I Agree",
  readMoreLabel = "Read Terms",
  readMoreHref = "/terms-and-conditions",
  onAccept,
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(storageKey) === "1";
      if (!accepted) setShow(true);
    } catch {
      setShow(true);
    }
  }, [storageKey]);

  const handleAccept = () => {
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
    setShow(false);
    onAccept?.();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="dialog"
          aria-live="polite"
          aria-label="Terms & Conditions notice"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`
            fixed bottom-0 left-0 right-0 z-[60]
            w-full px-2 sm:px-0
            flex justify-center
            pointer-events-none
          `}
        >
          <div
            className={`
              pointer-events-auto
              w-full sm:w-auto
              max-w-full sm:max-w-lg
              m-2 sm:m-4
              rounded-xl sm:rounded-2xl
              border border-gray-200 bg-white/95 backdrop-blur
              shadow-xl
            `}
          >
            <div className="p-3 sm:p-5">
              <p className="text-xs sm:text-sm text-gray-700 leading-5 sm:leading-6 max-w-full sm:max-w-lg">
                {message}{" "}
                {readMoreHref && (
                  <a
                    href={readMoreHref}
                    className="underline underline-offset-2 hover:no-underline text-gray-900"
                  >
                    {readMoreLabel}
                  </a>
                )}
              </p>

              <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <button
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs sm:text-sm font-medium cursor-pointer bg-gray-900 text-white hover:bg-black transition w-full sm:w-auto"
                >
                  {acceptLabel}
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
