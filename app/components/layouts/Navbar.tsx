"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import BookAnAppointment from "../sections/BookanAppointment";

export default function Navbar() {
  const [openBooking, setOpenBooking] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Services", href: "#Services" },
    { label: "Testimonials", href: "#Testimonials" },
    { label: "About", href: "#About" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 80;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10"
              : "bg-white shadow-sm"
          }
        `}
      >
        <nav className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-6'>
          <div className='flex items-center justify-between h-16 sm:h-18 lg:h-20'>
            {/* ── Logo + Brand ── */}
            <Link href='/' className='flex items-center gap-2.5 group'>
              <div className='relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-200'>
                <Image
                  src='/Navbar.png'
                  alt='Need Plumber Logo'
                  fill
                  className='object-cover'
                />
              </div>
              <span className='font-extrabold text-xl sm:text-2xl lg:text-3xl text-blue-900 tracking-tight leading-none'>
                Need<span className='text-orange-500'>Plumber</span>
              </span>
            </Link>

            {/* ── Desktop Nav Links + CTAs ── */}
            <div className='hidden lg:flex items-center gap-8'>
              <div className='flex items-center gap-6 xl:gap-8'>
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className='
                      relative text-gray-600 font-medium text-base
                      hover:text-blue-900 transition-colors duration-200
                      after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                      after:bg-orange-500 after:transition-all after:duration-200
                      hover:after:w-full
                    '
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className='h-6 w-px bg-gray-200' />

              <div className='flex items-center gap-3'>
                <a
                  href='tel:01793229730'
                  className='
                    flex items-center gap-2 px-4 py-2.5 rounded-xl
                    border-2 border-orange-500 text-orange-600 font-semibold text-sm
                    hover:bg-orange-50 transition-all duration-200 cursor-pointer
                    group
                  '
                >
                  <svg
                    className='w-4 h-4 group-hover:animate-pulse'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  Call Now
                </a>

                {/* <button
                  onClick={() => setOpenBooking(true)}
                  className='
                    flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-blue-900 text-white font-semibold text-sm
                    hover:bg-blue-800 active:scale-95
                    transition-all duration-200 shadow-md shadow-blue-900/25 cursor-pointer
                  '
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                  Book Appointment
                </button> */}
              </div>
            </div>

            {/* ── Mobile / Tablet Right Side ── */}
            <div className='flex lg:hidden items-center gap-2 sm:gap-3'>
              <a
                href='tel:01793229730'
                className='
                  hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg
                  border border-orange-400 text-orange-600 font-semibold text-sm
                  hover:bg-orange-50 transition-colors duration-200 cursor-pointer
                '
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                Call Now
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle menu'
                className='
                  p-2 rounded-lg text-blue-900
                  hover:bg-blue-50 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer
                '
              >
                <div className='w-5 h-5 flex flex-col justify-center gap-1.5'>
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                  />
                  <span
                    className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* ── Mobile Dropdown Menu ── */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className='bg-white border-t border-gray-100 px-4 sm:px-6 py-4 space-y-1'>
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className='
                  w-full block px-4 py-3 rounded-xl
                  text-gray-700 font-medium text-base
                  hover:bg-blue-50 hover:text-blue-900
                  transition-colors duration-150 cursor-pointer
                '
              >
                {label}
              </a>
            ))}

            {/* Mobile CTAs */}
            <div className='pt-3 pb-1 grid grid-cols-2 gap-3 sm:hidden'>
              <a
                href='tel:01793229730'
                className='
                  flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl
                  border-2 border-orange-500 text-orange-600 font-semibold text-sm
                  hover:bg-orange-50 transition-colors duration-200 cursor-pointer
                '
              >
                <svg
                  className='w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
                Call Now
              </a>
              {/* <button
                onClick={() => {
                  setOpenBooking(true);
                  setMenuOpen(false);
                }}
                className="
                  flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  bg-blue-900 text-white font-semibold text-sm
                  hover:bg-blue-800 transition-colors duration-200 cursor-pointer
                "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Appointment
              </button> */}
            </div>

            {/* sm: full-width Book button */}
            <div className='hidden sm:block pt-3 pb-1'>
              <button
                onClick={() => {
                  setOpenBooking(true);
                  setMenuOpen(false);
                }}
                className='
                  w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  bg-blue-900 text-white font-semibold text-sm
                  hover:bg-blue-800 transition-colors duration-200 cursor-pointer
                '
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className='h-16 sm:h-18 lg:h-20' />

      {/* Booking Modal */}
      <BookAnAppointment open={openBooking} setOpen={setOpenBooking} />
    </>
  );
}
