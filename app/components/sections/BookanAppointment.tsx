"use client";

import { useState } from "react";
import { message, Select, Input, Button, Modal, Calendar } from "antd";
import dayjs from "dayjs";

export default function BookAnAppointment({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // Dynamically tracks booked dates — grows as users confirm bookings
  const [bookedDates, setBookedDates] = useState<string[]>([]);

  const services = [
    "Emergency Repairs",
    "Drain Cleaning",
    "Water Heater Installation",
    "Leak Detection",
    "Bathroom Remodeling",
    "Commercial Plumbing",
  ];

  const timeslots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const resetForm = () => {
    setDate("");
    setTime("");
    setService("");
    setName("");
    setPhone("");
    setEmail("");
    setLocation("");
  };

  const book = () => {
    if (!date || !time || !service || !name || !phone || !email || !location) {
      message.error("Please fill up all the required fields");
      return;
    }

    Modal.confirm({
      title: "Confirm Your Booking",
      content: (
        <div className="space-y-1 text-sm mt-2">
          <p>
            <b>Date:</b> {date}
          </p>
          <p>
            <b>Time:</b> {time}
          </p>
          <p>
            <b>Service:</b> {service}
          </p>
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Phone:</b> {phone}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Location:</b> {location}
          </p>
        </div>
      ),
      okText: "Confirm Booking",
      cancelText: "Go Back",
      onOk() {
        // Add the selected date to bookedDates so it gets disabled on the calendar
        // Only add if not already in the list (avoid duplicates)
        setBookedDates((prev) =>
          prev.includes(date) ? prev : [...prev, date],
        );

        message.success("Booked Successfully!");
        setOpen(false);
        resetForm();
      },
    });
  };

  return (
    <Modal
      open={open}
      onCancel={() => {
        setOpen(false);
        resetForm();
      }}
      footer={null}
      width={850}
      centered
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center py-5 text-slate-800">
          Book an Appointment
        </h2>


        <div className="bg-blue-900 text-amber-300 p-6 rounded-2xl w-full space-y-6">
          <div className="text-lg w-full px-2 md:px-8 space-y-4">
            <div>
              <label className="block mb-2 font-medium">Select Date</label>
              <Calendar
                fullscreen={false}
                disabledDate={(current) =>
                  // Disable past dates
                  current.isBefore(dayjs().startOf("day")) ||
                  // Disable dates that have already been booked
                  bookedDates.includes(current.format("YYYY-MM-DD"))
                }
                onSelect={(value) => setDate(value.format("YYYY-MM-DD"))}
              />
              {date && (
                <p className="text-sm text-amber-200 mt-1">
                  ✓ Selected Date: <span className="font-semibold">{date}</span>
                </p>
              )}
            </div>

            <iframe
             src="https://calendar.app.google/KgNG5EXAFQMzk7TE6"
             width={30}
             height={30}/>
            

            <div>
              <label className="block mb-2 font-medium">Select Time</label>
              <Select
                placeholder="Choose Time"
                className="w-full"
                size="large"
                value={time || undefined}
                onChange={(value) => setTime(value)}
                options={timeslots.map((slot) => ({
                  label: slot,
                  value: slot,
                }))}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Service</label>
              <Select
                placeholder="Choose a service"
                className="w-full"
                size="large"
                value={service || undefined}
                onChange={(value) => setService(value)}
                options={services.map((item) => ({ label: item, value: item }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-lg w-full px-2 md:px-8 gap-5">
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <Input
                size="large"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Phone</label>
              <Input
                size="large"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Email</label>
              <Input
                size="large"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Location</label>
              <Input
                size="large"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            type="primary"
            size="large"
            onClick={book}
            className="bg-yellow-500! hover:bg-yellow-700! text-black! font-semibold! px-8! h-11! rounded-xl!"
          >
            Book Now
          </Button>
        </div>
      </div>
    </Modal>
  );
}
