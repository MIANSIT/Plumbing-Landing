"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import BookAnAppointment from "../sections/BookanAppointment";
import Hamburgermenu from "../ui/HamburgerMenu";

export default function Navbar() {
  const [openBooking, setOpenBooking] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Services", "Testimonials", "About"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10"
            : "bg-white shadow-sm"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            {/* ── Logo + Brand ── */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-200">
                <Image
                  src="/Navbar.png"
                  alt="Need Plumber Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-blue-900 tracking-tight leading-none">
                Need<span className="text-orange-500">Plumber</span>
              </span>
            </a>

            {/* ── Desktop Nav Links + CTAs ── */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Links */}
              <div className="flex items-center gap-6 xl:gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className="
                      relative text-gray-600 font-medium text-base
                      hover:text-blue-900 transition-colors duration-200
                      after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                      after:bg-orange-500 after:transition-all after:duration-200
                      hover:after:w-full
                    "
                  >
                    {link}
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-200" />

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:01793229730"
                  className="
                    flex items-center gap-2 px-4 py-2.5 rounded-xl
                    border-2 border-orange-500 text-orange-600 font-semibold text-sm
                    hover:bg-orange-50 transition-all duration-200
                    group
                  "
                >
                  <svg className="w-4 h-4 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>

                <button
                  onClick={() => setOpenBooking(true)}
                  className="
                    flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-blue-900 text-white font-semibold text-sm
                    hover:bg-blue-800 active:scale-95
                    transition-all duration-200 shadow-md shadow-blue-900/25
                  "
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </button>
              </div>
            </div>

            {/* ── Mobile / Tablet Right Side ── */}
            <div className="flex lg:hidden items-center gap-1">
              <Hamburgermenu onBookAppointment={() => setOpenBooking(true)} />
            </div>

          </div>
        </nav>
      </header>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16 sm:h-18 lg:h-20" />

      {/* Booking Modal */}
      <BookAnAppointment open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}