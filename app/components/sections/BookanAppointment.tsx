"use client";

import { useState } from "react";
import { Select, Button, Modal } from "antd";

export default function BookAnAppointment({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [service, setService] = useState("");

  const services = [
    "Emergency Repairs",
    "Drain Cleaning",
    "Water Heater Installation",
    "Leak Detection",
    "Bathroom Remodeling",
    "Commercial Plumbing",
  ];

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width="95%"
      centered
      styles={{ body: { padding: 0 } }}
      closeIcon={<span className="text-white text-2xl sm:text-3xl">✕</span>}
    >
      <div className="w-full overflow-hidden rounded-2xl bg-blue-900">
        <div className="border-b border-white/10 px-4 py-4 text-center sm:px-6 md:px-10 md:py-5">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Book an Appointment
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-300 sm:mt-3 sm:text-sm md:text-base">
            Complete your booking through our live calendar.
          </p>
        </div>

        <div className="space-y-4 p-3 sm:p-4 md:space-y-6 md:p-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:p-3">
            <iframe
              src="https://calendar.app.google/KgNG5EXAFQMzk7TE6"
              className="h-105 w-full rounded-xl sm:h-137.5 md:h-162.5"
              style={{ border: "none" }}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              onClick={() => setOpen(false)}
              className="h-11 w-full rounded-full! border-none! bg-cyan-400! px-8! font-bold! text-black! shadow-lg! hover:bg-cyan-600! sm:h-12 sm:w-auto sm:px-10!"
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}