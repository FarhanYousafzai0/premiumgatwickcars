// components/Hero.jsx
import React, { useState } from "react";
import { Calendar, Clock, MapPin, Plus, ArrowRight } from "lucide-react";

function Field({ label, required, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-medium tracking-wide text-gray-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function Input({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
      )}
      <input
        {...props}
        className={
          "w-full rounded-xl border border-gray-200 bg-white/90 " +
          "pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
        }
      />
    </div>
  );
}

function SmallSelect(props) {
  return (
    <select
      {...props}
      className="w-full rounded-xl border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
    />
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex-1 py-3 text-xs font-semibold tracking-widest uppercase " +
        "transition rounded-t-xl " +
        (active
          ? "bg-white text-black shadow-sm"
          : "bg-white/70 text-gray-500 hover:text-black")
      }
    >
      {children}
    </button>
  );
}

function InstantForm() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <form className="space-y-4">
      <Field label="From" required>
        <Input icon={MapPin} placeholder="Enter pickup postcode, venue or place" />
      </Field>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium hover:bg-gray-50"
        >
          <Plus size={14} /> Via
        </button>
        <span className="ml-auto text-gray-400 select-none">⇅</span>
      </div>

      <Field label="To" required>
        <Input icon={MapPin} placeholder="Enter destination postcode, venue or place" />
      </Field>

      <div className="border-t border-gray-200" />

      {/* Trip type cards */}
      <div className="grid sm:grid-cols-2 gap-3">
        {/* One way */}
        <div
          className={
            "rounded-xl border p-3 transition " +
            (tripType === "oneway"
              ? "border-black shadow-sm"
              : "border-gray-200 hover:border-gray-300")
          }
        >
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="tripType"
              className="accent-black"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            <span className="font-medium text-sm">One way</span>
          </label>

          <div className="mt-3 grid grid-cols-[1fr,auto,auto] gap-2 items-center">
            <div>
              <Input type="date" icon={Calendar} />
            </div>
            <SmallSelect defaultValue="12">
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, "0")}</option>
              ))}
            </SmallSelect>
            <SmallSelect defaultValue="00">
              {["00", "15", "30", "45"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </SmallSelect>
          </div>
        </div>

        {/* Return */}
        <div
          className={
            "rounded-xl border p-3 transition " +
            (tripType === "return"
              ? "border-black shadow-sm"
              : "border-gray-200 hover:border-gray-300")
          }
        >
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="tripType"
              className="accent-black"
              checked={tripType === "return"}
              onChange={() => setTripType("return")}
            />
            <span className="font-medium text-sm">Return</span>
          </label>

          <div className="mt-3 grid grid-cols-[1fr,auto,auto] gap-2 items-center">
            <div>
              <Input type="date" icon={Calendar} />
            </div>
            <SmallSelect defaultValue="12">
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, "0")}</option>
              ))}
            </SmallSelect>
            <SmallSelect defaultValue="00">
              {["00", "15", "30", "45"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </SmallSelect>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-black text-white py-3 font-semibold tracking-wider flex items-center justify-center gap-2 hover:opacity-90"
      >
        CALCULATE PRICE <ArrowRight size={18} />
      </button>
    </form>
  );
}

function HourlyForm() {
  return (
    <form className="space-y-4">
      <Field label="Pickup Location" required>
        <Input icon={MapPin} placeholder="Pick address or postcode" />
      </Field>

      <Field label="Duration">
        <div className="rounded-xl border border-gray-200 bg-white/90 px-3 py-2 text-sm">
          4 Hrs
        </div>
      </Field>

      <Field label="Pick Up Date">
        <Input type="date" icon={Calendar} />
      </Field>

      <Field label="Time">
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
          <input
            type="time"
            className="w-full rounded-xl border border-gray-200 bg-white/90 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
            defaultValue="12:30"
          />
        </div>
      </Field>

      <button
        type="button"
        className="w-full rounded-xl bg-black text-white py-3 font-semibold tracking-wider flex items-center justify-center gap-2 hover:opacity-90"
      >
        CALCULATE PRICE <ArrowRight size={18} />
      </button>
    </form>
  );
}

export default function Hero() {
  const [tab, setTab] = useState("instant"); // 'instant' | 'hourly'

  return (
    <section className="relative overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), " +
            "linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-8xl  mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left — title/desc/cta */}
        <div className="flex flex-col ">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Instant Airport Taxi Quotes.
            <br />
            Simple. Transparent. 24/7.
          </h1>
          <p className="mt-4 text-gray-700 max-w-prose">
            Enter your route, choose your time, and get a price immediately. No hidden fees.
            Premium service in a clean, modern fleet.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#booking"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-3 font-medium border border-black/10 bg-white/70 backdrop-blur shadow-sm hover:shadow group"
            >
              <span
                className="pointer-events-none absolute inset-0 before:absolute before:inset-y-0 before:-left-1/3 before:w-1/3
                before:bg-gradient-to-r before:from-white/0 before:via-white/60 before:to-white/0 before:rounded-xl
                before:translate-x-[-150%] group-hover:before:translate-x-[250%] before:transition-transform before:duration-700"
              />
              <span className="relative z-10">Book Now</span>
            </a>

            <a
              href="#fleet"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              View Fleet
            </a>
          </div>
        </div>

        {/* Right — Form Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 md:p-3">
          {/* Tabs */}
          <div className="flex rounded-t-xl overflow-hidden">
            <TabButton active={tab === "instant"} onClick={() => setTab("instant")}>
              Instant Quote
            </TabButton>
            <TabButton active={tab === "hourly"} onClick={() => setTab("hourly")}>
              Hourly
            </TabButton>
          </div>

          <div className="rounded-b-xl bg-white p-4 md:p-5">
            {tab === "instant" ? <InstantForm /> : <HourlyForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
