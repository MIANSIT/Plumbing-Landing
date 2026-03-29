"use client";

import { useState } from "react";
import BookAnAppointment from "../sections/BookanAppointment";

const values = [
  {
    title: "Fast Response",
    desc: "We arrive in 30–60 minutes. Every minute counts in a plumbing emergency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Licensed & Insured",
    desc: "Fully certified professionals you can trust with your home and family.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees. You'll always know what you're paying before we start.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
  },
  {
    title: "Local Experts",
    desc: "Born and raised in Fresno. We know this community and its plumbing inside out.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section id="About" className="relative bg-blue-950 overflow-hidden py-24">

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-900/40 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Headline -*/}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           

            <h2 className="text-xl sm:text-2xl lg:text-4xl font-black text-white tracking-tight leading-[1.05] mb-6">
              Fresno's Most
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                Trusted Plumbers
              </span>
            </h2>

            <p className="text-blue-200 text-lg leading-relaxed mb-4">
              For over <span className="text-white font-bold">20 years</span>,{" "}
              <span className="text-white font-bold">Need Plumber</span> has been the go-to emergency
              plumbing service for homeowners and businesses across Fresno, CA. We built our reputation
              one job at a time — showing up fast, fixing it right, and leaving your home better than
              we found it.
            </p>
           
          </div>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {values.map((v, i) => (
              <div
                key={i}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{v.title}</h3>
                  <p className="text-blue-300 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setOpenBooking(true)}
              className="
                w-full sm:w-auto flex items-center justify-center gap-2.5
                px-8 py-4 rounded-2xl
                bg-blue-600 hover:bg-blue-500
                text-white font-bold text-base lg:text-lg
                shadow-lg shadow-blue-600/30
                active:scale-95 transition-all duration-200
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
                bg-orange-500 hover:bg-orange-400
                text-white font-bold text-base lg:text-lg
                shadow-lg shadow-orange-500/25
                active:scale-95 transition-all duration-200
              "
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
          </div>

        </div>
      </section>

      <BookAnAppointment open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}