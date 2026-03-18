"use client";

import { useState } from "react";
import { message, Select, Input, Button, Modal,Calendar } from "antd";
import dayjs from "dayjs";

const { Option } = Select;

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
  const bookedDates=["2026-03-18","2026-03-20"]

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

    const confirmbooking=window.confirm(
        `Please Confirm Your Booking Infomration:
          Booked Date:${date}
          Booked Time:${time}
          Name:${name}
          Phone:${phone}
          Email:${email}
          Location:${location}`
    );
    
    if(confirmbooking){
        message.success("Booked Successfuly");
        setOpen(false);
        resetForm();
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
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
                onSelect={(value) => setDate(value.format("YYYY-MM-DD"))}
              />
              
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
              >
                {timeslots.map((slot) => (
                  <Option key={slot} value={slot}>
                    {slot}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Service</label>
              <Select
                placeholder="Choose a service"
                className="w-full"
                size="large"
                value={service || undefined}
                onChange={(value) => setService(value)}
              >
                {services.map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
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
          <Button type="primary" size="large" onClick={book}
            className="bg-yellow-500! hover:bg-yellow-700! text-black! font-semibold! px-8! h-11! rounded-xl!">
            Book Now
          </Button>
        </div>
      </div>
    </Modal>
  );
}