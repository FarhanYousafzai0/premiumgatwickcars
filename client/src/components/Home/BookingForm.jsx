import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Plus, ArrowRight } from 'lucide-react';

/** ---------- Small UI helpers (compact) ---------- */
function Field({ label, required, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] sm:text-xs font-medium tracking-wide text-gray-800 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function Input({ icon: Icon, className = '', ...props }) {
  const hasIcon = !!Icon;
  return (
    <div className="relative">
      {hasIcon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2" size={14} />
      )}
      <input
        {...props}
        className={
          'w-full rounded-xl border border-gray-200 bg-white/90 pr-2 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-black/20 ' +
          (hasIcon ? 'pl-8 ' : 'pl-3 ') +
          className
        }
      />
    </div>
  );
}

function SmallSelect({ className = '', ...props }) {
  return (
    <select
      {...props}
      className={
        'w-full rounded-xl border border-gray-200 bg-white/90 px-3 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-black/20 ' +
        className
      }
    />
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'flex-1 py-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition rounded-t-xl cursor-pointer ' +
        (active
          ? 'bg-black text-white shadow-sm'
          : 'bg-white/70 text-gray-500 hover:text-black hover:bg-gray-100')
      }
    >
      {children}
    </button>
  );
}

/** ---------- Instant form (compact) ---------- */
function InstantForm() {
  const [tripType, setTripType] = useState('oneway');
  const [showVia, setShowVia] = useState(false);

  return (
    <form className="space-y-3 sm:space-y-4 w-full ">
      <Field label="From" required>
        <Input icon={MapPin} placeholder="Enter pickup location" />
      </Field>

      {/* Via toggle */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowVia((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2 py-1 text-[11px] sm:text-xs font-medium hover:bg-gray-50"
        >
          <Plus size={12} /> Via
        </button>
        <span className="ml-auto text-gray-400 select-none text-xs">⇅</span>
      </div>

      {showVia && (
        <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Input icon={MapPin} placeholder="Enter via address" />
          <Input icon={Clock} placeholder="Waiting time (minutes)" type="number" />
        </div>
      )}

      <Field label="To" required>
        <Input icon={MapPin} placeholder="Enter destination" />
      </Field>

      <div className="border-t border-gray-200" />

      {/* Trip type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* One way */}
        <div
          className={
            'rounded-xl border p-2.5 transition ' +
            (tripType === 'oneway'
              ? 'border-black shadow-sm'
              : 'border-gray-200 hover:border-gray-300')
          }
        >
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
              className="accent-black"
            />
            <span className="font-medium text-xs sm:text-sm">One way</span>
          </label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr,auto,auto] gap-2 items-center">
            <div className="min-w-0">
              <Input type="date" icon={Calendar} className="w-full" style={{ minWidth: 0 }} />
            </div>
            <SmallSelect defaultValue="12">
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, '0')}</option>
              ))}
            </SmallSelect>
            <SmallSelect defaultValue="00">
              {['00', '15', '30', '45'].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </SmallSelect>
          </div>
        </div>

        {/* Return */}
        <div
          className={
            'rounded-xl border p-2.5 transition ' +
            (tripType === 'return'
              ? 'border-black shadow-sm'
              : 'border-gray-200 hover:border-gray-300')
          }
        >
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={tripType === 'return'}
              onChange={() => setTripType('return')}
              className="accent-black"
            />
            <span className="font-medium text-xs sm:text-sm">Return</span>
          </label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr,auto,auto] gap-2 items-center">
            <div className="min-w-0">
              <Input type="date" icon={Calendar} className="w-full" style={{ minWidth: 0 }} />
            </div>
            <SmallSelect defaultValue="12">
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i}>{String(i).padStart(2, '0')}</option>
              ))}
            </SmallSelect>
            <SmallSelect defaultValue="00">
              {['00', '15', '30', '45'].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </SmallSelect>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-black cursor-pointer text-white py-2 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-90"
      >
        CALCULATE PRICE <ArrowRight size={16} />
      </button>
    </form>
  );
}

/** ---------- Hourly form (compact) ---------- */
function HourlyForm() {
  return (
    <form className="space-y-3 sm:space-y-4 w-full">
      <Field label="Pickup Location" required>
        <Input icon={MapPin} placeholder="Pick address or postcode" />
      </Field>

      <Field label="Duration">
        <div className="rounded-xl border border-gray-200 bg-white/90 px-3 py-2 text-xs">
          4 Hrs
        </div>
      </Field>

      <Field label="Pick Up Date">
        <Input type="date" icon={Calendar} />
      </Field>

      <Field label="Time">
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 -translate-y-1/2" size={14} />
          <input
            type="time"
            className="w-full rounded-xl border border-gray-200 bg-white/90 pl-8 pr-2 py-2 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-black/20"
            defaultValue="12:30"
          />
        </div>
      </Field>

      <button
        type="button"
        className="w-full rounded-xl bg-black text-white py-2 text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-90"
      >
        CALCULATE PRICE <ArrowRight size={16} />
      </button>
    </form>
  );
}

/** ---------- BookingForm (exported, compact) ---------- */
export default function BookingForm({ className = '', defaultTab = 'instant' }) {
  const [tab, setTab] = useState(defaultTab);

  return (
    <div
      id="booking"
      className={
        'bg-white rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 transition-transform duration-300 hover:scale-[1.01] w-full max-w-sm ' +
        className
      }
    >
      <div className="flex rounded-t-xl overflow-hidden">
        <TabButton active={tab === 'instant'} onClick={() => setTab('instant')}>
          Instant Quote
        </TabButton>
        <TabButton active={tab === 'hourly'} onClick={() => setTab('hourly')}>
          Hourly
        </TabButton>
      </div>

      <div className="rounded-b-xl bg-white p-3 sm:p-4 min-h-[240px] sm:min-h-[280px] flex flex-col justify-center">
        {tab === 'instant' ? <InstantForm /> : <HourlyForm />}
      </div>
    </div>
  );
}
