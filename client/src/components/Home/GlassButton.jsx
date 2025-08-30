// components/GlassButton.jsx
import React from "react";

export default function GlassButton({
  as = "button",
  href,
  className = "",
  children,
  ...props
}) {
  const Comp = as === "a" ? "a" : "button";

  return (
    <Comp
      {...props}
      href={as === "a" ? href : undefined}
      className={
        "relative inline-flex items-center justify-center overflow-hidden " +
        "rounded-xl px-5 py-2.5 font-medium transition " +
        "border border-black/10 bg-white/70 backdrop-blur shadow-sm hover:shadow " +
        "text-black group " +
        className
      }
    >
      {/* Shine sweep */}
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
    </Comp>
  );
}
