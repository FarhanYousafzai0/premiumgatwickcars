// components/GlassButton.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function GlassButton({
  as = "button",
  to,
  className = "",
  children,
  ...props
}) {
  let Comp;
  let compProps = {
    ...props,
    className:
      "relative inline-flex items-center justify-center overflow-hidden " +
      "rounded-xl px-5 py-2.5 font-normal transition  " +
      "border border-neutral-200 bg-black  backdrop-blur shadow-sm hover:shadow " +
      "text-white group " +
      className,
    style: { WebkitTapHighlightColor: "transparent", ...(props.style || {}) },
  };

  if (as === "a" && to) {
    Comp = Link;
    compProps.to = to;
  } else {
    Comp = "button";
  }

  return (
    <Comp {...compProps}>
      {/* Gooey effect overlay */}
      <span
        className="pointer-events-none absolute left-0 top-0 w-full h-full z-0"
        style={{}}
      >
        <span
          className={
            "absolute left-0 w-full h-full rounded-xl " +
            "bg-white/60 blur-[6px] opacity-70 " +
            "transition-transform duration-500 ease-in-out " +
            "transform translate-y-full group-hover:translate-y-0"
          }
          style={{
            transitionProperty: "transform, opacity",
            willChange: "transform, opacity",
          }}
        />
      </span>
      {/* Shine sweep (optional, keep for extra effect) */}
      <span
        className={
          "pointer-events-none absolute inset-0 " +
          "before:absolute before:inset-y-0 before:-left-1/3 before:w-1/3 " +
          "before:bg-gradient-to-r before:from-white/0 before:via-white/60 before:to-white/0 " +
          "before:rounded-xl before:translate-x-[-150%] " +
          "group-hover:before:translate-x-[250%] before:transition-transform before:duration-700"
        }
      />
      <span className="relative z-10">{children}</span>
      {/* Add a filter for gooey effect if desired */}
      <style>{`
        .group:hover .group-gooey {
          transform: translateY(0);
        }
        .group .group-gooey {
          transform: translateY(100%);
        }
      `}</style>
    </Comp>
  );
}
