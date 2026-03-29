"use client";

import React from "react";
import {
  BuildOutlined,
  StarOutlined,
  InfoCircleOutlined,
  MailOutlined,
  MenuOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Button } from "antd";

interface HamburgerMenuProps {
  onBookAppointment: () => void;
}

const Hamburgermenu: React.FC<HamburgerMenuProps> = ({ onBookAppointment }) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "services",
      icon: <BuildOutlined style={{ fontSize: "20px" }} />,
      label: <span className="text-lg font-semibold">Services</span>,
      onClick: () => scrollToSection("Services"),
    },
    {
      key: "reviews",
      icon: <StarOutlined style={{ fontSize: "20px" }} />,
      label: <span className="text-lg font-semibold">Testimonials</span>,
      onClick: () => scrollToSection("Reviews"),
    },
    {
      key: "whyus",
      icon: <InfoCircleOutlined style={{ fontSize: "20px" }} />,
      label: <span className="text-lg font-semibold">About</span>,
      onClick: () => scrollToSection("WhyUs"),
    },
    {
      key: "contact",
      icon: <MailOutlined style={{ fontSize: "20px" }} />,
      label: <span className="text-lg font-semibold">Contact</span>,
      onClick: () => scrollToSection("Contact"),
    },

    { type: "divider" },

    {
      key: "book",
      icon: <CalendarOutlined style={{ fontSize: "20px" }} />,
      label: (
        <button
          className="w-full text-lg font-semibold bg-blue-900 text-white py-2 px-3 rounded-lg hover:bg-blue-800 transition"
          onClick={onBookAppointment}
        >
          Book Appointment
        </button>
      ),
    },

    {
      key: "call",
      label: (
        <a href="tel:01793229730">
          <button className="w-full text-lg font-semibold bg-orange-600 text-white py-2 px-3 rounded-lg hover:bg-orange-700 transition">
            Call Now
          </button>
        </a>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items, style: { width: "60vw", maxWidth: "280px" } }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button
        type="text"
        className="flex items-center justify-center border-none p-2"
      >
        <MenuOutlined style={{ fontSize: "26px", color: "#1e3a5f" }} />
      </Button>
    </Dropdown>
  );
};

export default Hamburgermenu;