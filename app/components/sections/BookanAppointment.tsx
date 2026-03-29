"use client";

import { Button, Modal } from "antd";

export default function BookAnAppointment({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
 return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width="90%"
      centered
      // closable={false}
    >
      <div className=" py-4 text-center sm:px-6 md:px-10 md:py-5">
        <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl md:text-4xl">
          Book an Appointment
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-600 sm:mt-3 sm:text-sm md:text-base">
          Complete your booking through our live calendar.
        </p>
      </div>

      <div className="space-y-4 py-3 px-0 md:px-5 md:space-y-6 md:py-8">
        <div className="overflow-hidden rounded-2xl  bg-gray-200 shadow-xl ">
          <iframe
            src="https://calendar.app.google/KgNG5EXAFQMzk7TE6"
            className="h-105 w-full rounded-xl sm:h-137.5 md:h-162.5"
            style={{ border: "none" }}
            title="Booking Calendar"
          />
        </div>
        
        <div className="flex justify-center ">
          <Button
            type="primary"
            size="large"
            className="bg-red-600!"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          
        </div>
      </div>
    </Modal>
  );
}