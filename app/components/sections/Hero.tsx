"use client";

import { useState } from "react";
import BookAnAppointment from "../sections/BookanAppointment";

export default function Hero() {
  const [openBooking, setOpenBooking] = useState(false);

  const badges = [
    { label: "Licensed", icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )},
    { label: "Insured", icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )},
    { label: "20+ Years", icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )},
    { label: "Serving Fresno, CA", icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    )},
  ];

  const stats = [
    { value: "24/7", label: "Emergency Service" },
    { value: "30–60", label: "Min Arrival Time" },
    { value: "500+", label: "Jobs Completed" },
  ];

  return (
    <>
      <section
        id="Hero"
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-950"
      >
        {/* Background GIF */}
        <img
          src="/HeroSectionBG.gif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.35)" }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/60 via-transparent to-gray-950/90" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/30 via-transparent to-blue-950/30" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24 pb-16">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">
              Available Now — 24 / 7
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Fast, Reliable
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Plumbing
            </span>{" "}
            Service
          </h1>

          {/* Subheadline */}
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mb-10 leading-relaxed">
            Emergency plumbing at your door in{" "}
            <span className="text-white font-bold">30–60 minutes</span>.
            Licensed, insured, and trusted for over{" "}
            <span className="text-white font-bold">20 years</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
            <button
              onClick={() => setOpenBooking(true)}
              className="
                w-full sm:w-auto flex items-center justify-center gap-2.5
                px-8 py-4 rounded-2xl
                bg-blue-600 hover:bg-blue-500
                text-white font-bold text-lg
                shadow-lg shadow-blue-600/30
                active:scale-95 transition-all duration-200 cursor-pointer
              "
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book an Appointment
            </button>

            <a
              href="tel:01793229730"
              className="
                w-full sm:w-auto flex items-center justify-center gap-2.5
                px-8 py-4 rounded-2xl
                border-2 border-orange-500 hover:bg-orange-500/10
                text-orange-400 hover:text-orange-300 font-bold text-lg
                active:scale-95 transition-all duration-200 cursor-pointer
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-px rounded-2xl overflow-hidden border border-white/10 mb-12 w-full max-w-xl">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex-1 min-w-25 flex flex-col items-center py-4 px-3 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-2xl sm:text-3xl font-black text-white">{stat.value}</span>
                <span className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="
                  inline-flex items-center gap-1.5
                  px-4 py-2 rounded-full
                  bg-white/8 border border-white/15
                  text-gray-200 text-sm font-semibold
                  backdrop-blur-sm
                "
              >
                <span className="text-blue-400">{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        
      </section>

      <BookAnAppointment open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}