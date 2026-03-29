"use client";

import React, { useState, useEffect, useRef } from "react";

interface HamburgerMenuProps {
  onBookAppointment: () => void;
}

const navItems = [
  {
    key: "services",
    label: "Services",
    sectionId: "Services",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    key: "testimonials",
    label: "Testimonials",
    sectionId: "Reviews",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    key: "about",
    label: "About",
    sectionId: "WhyUs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    key: "contact",
    label: "Contact",
    sectionId: "Contact",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const Hamburgermenu: React.FC<HamburgerMenuProps> = ({ onBookAppointment }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="
          relative flex items-center justify-center
          w-10 h-10 rounded-xl
          bg-blue-50 hover:bg-blue-100
          text-blue-900 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-300
        "
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`block h-0.5 rounded-full bg-blue-900 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 rounded-full bg-blue-900 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 rounded-full bg-blue-900 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </div>
      </button>

      {/* Dropdown Panel */}
      <div
        className={`
          absolute right-0 top-[calc(100%+10px)] z-50
          w-[72vw] max-w-[300px]
          bg-white rounded-2xl
          shadow-xl shadow-blue-900/15
          border border-gray-100
          overflow-hidden
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        {/* Top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-900 via-blue-700 to-orange-500" />

        {/* Nav Items */}
        <div className="px-2 py-3 space-y-0.5">
          {navItems.map((item, i) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.sectionId)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`
                group w-full flex items-center gap-3 px-4 py-3 rounded-xl
                text-gray-600 hover:text-blue-900 hover:bg-blue-50
                transition-all duration-200
                ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
              `}
            >
              <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200">
                {item.icon}
              </span>
              <span className="font-semibold text-[15px] tracking-wide">{item.label}</span>
              <svg
                className="w-4 h-4 ml-auto text-gray-300 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-200"
                fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-4 border-t border-gray-100" />

        {/* CTA Buttons */}
        <div className="px-3 py-3 space-y-2">
          <button
            onClick={() => { setOpen(false); onBookAppointment(); }}
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-3 rounded-xl
              bg-blue-900 hover:bg-blue-800
              text-white font-bold text-[15px] tracking-wide
              shadow-md shadow-blue-900/20
              active:scale-95 transition-all duration-200
            "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </button>

          <a
            href="tel:01793229730"
            onClick={() => setOpen(false)}
            className="
              w-full flex items-center justify-center gap-2
              px-4 py-3 rounded-xl
              border-2 border-orange-500 hover:bg-orange-50
              text-orange-600 font-bold text-[15px] tracking-wide
              active:scale-95 transition-all duration-200
            "
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
        </div>
        <div className="h-1" />
      </div>
    </div>
  );
};

export default Hamburgermenu;