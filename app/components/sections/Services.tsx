"use client";

import { useState } from "react";
import { Button } from "antd";
import ServiceCard from "../ui/ServicesCard";
import { Servicedata } from "../data/Servicedata";
import BookAnAppointment from "./BookanAppointment"; 
export default function Services() {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <div id="Services" className="flex flex-col py-10 bg-blue-50">
      <div>
        <h1 className="font-david py-5 lg:py-5 font-bold text-2xl lg:text-4xl text-blue-900 text-center">
          Services We Provide
        </h1>
      </div>

      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
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

      {/* Action buttons — Call Now and Book an Appointment */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6">
        <Button
          type="primary"
          size="large"
          href="tel:01793229730"
          className="w-full sm:w-auto bg-red-600! hover:bg-red-900! text-white text-lg md:text-xl px-6 h-11 rounded-lg shadow-md transition"
        >
          Call Now
        </Button>

        <Button
          type="primary"
          size="large"
          onClick={() => setOpenBooking(true)}
          className="w-full sm:w-auto bg-red-600! hover:bg-red-900! text-white text-lg md:text-xl px-6 h-11 rounded-lg shadow-md transition"
        >
          Book an Appointment
        </Button>
      </div>

      {/* Booking modal — rendered outside the button row to avoid layout issues */}
      <BookAnAppointment open={openBooking} setOpen={setOpenBooking} />
    </div>
  );
}
