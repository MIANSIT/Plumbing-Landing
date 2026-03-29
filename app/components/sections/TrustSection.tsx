"use client"

import TrustCustomerReview from "../ui/TrustCustomerReviwe";
import { Reviewdata } from "../data/Reviewdata";

export default function TrustSection() {
  return (
    <section id="Reviews" className="relative py-20 bg-white overflow-hidden">

      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-blue-600 to-orange-500" />

      {/* Soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#eff6ff_0%,_transparent_60%)]" />

      <div className="relative z-10">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12 px-4">
         

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 tracking-tight mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Trusted by hundreds of homeowners across Fresno, CA.
          </p>
        </div>

        {/* Scrolling strip — fade edges */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="slide-left flex flex-row gap-5 w-max px-8">
            {/* Duplicate for seamless loop */}
            {[...Reviewdata, ...Reviewdata].map((info, i) => (
              <TrustCustomerReview
                key={`${info.id}-${i}`}
                name={info.name}
                star={info.star}
                review={info.review}
                date={info.date}
              />
            ))}
          </div>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 px-4">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "20+", label: "Years of Trust" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-black text-blue-900">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}