"use client";

import { useState } from "react";
import ServiceCard from "../ui/ServicesCard";
import { Servicedata } from "../data/Servicedata";
import BookAnAppointment from "./BookanAppointment";

export default function Services() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section id="Services" className="relative py-20 bg-white overflow-hidden">

        {/* Subtle background accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#eff6ff_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 tracking-tight mb-4">
              Services We Provide
            </h2>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              From emergency repairs to full installations — we handle it all, fast and professionally.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {Servicedata.map((info) => (
              <ServiceCard
                key={info.id}
                icon={info.icon}
                heading={info.heading}
                details={info.deatils}
                more={info.more}
              />
            ))}
          </div>

          {/* CTA strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setOpenBooking(true)}
              className="
                w-full sm:w-auto flex items-center justify-center gap-2.5
                px-8 py-4 rounded-2xl
                bg-blue-900 hover:bg-blue-800
                text-white font-bold text-base lg:text-lg
                shadow-lg shadow-blue-900/20
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
                border-2 border-orange-500 hover:bg-orange-50
                text-orange-600 font-bold text-base lg:text-lg
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