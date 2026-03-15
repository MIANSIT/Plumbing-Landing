"use client";

import React from "react";
import {
  BuildOutlined,
  StarOutlined,
  InfoCircleOutlined,
  MailOutlined,
  MenuOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Button } from "antd";

const Hamburgermenu: React.FC = () => {

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

  const items: MenuProps["items"] = [
    {
      key: "services",
      icon: <BuildOutlined style={{fontSize:"20px"}}/>,
      label: <span className="text-lg md:text-xl  font-david hover:text-amber-500">Services</span>,
      onClick: () => scrollToSection("Services"),
    },
    {
      key: "reviews",
      icon: <StarOutlined  style={{fontSize:"20px"}}/>,
      label: <span className=" text-lg md:text-xl font-david hover:text-amber-500">Reviews</span>,
      onClick: () => scrollToSection("Reviews"),
    },
    {
      key: "whyus",
      icon: <InfoCircleOutlined style={{fontSize:"20px"}} />,
      label: <span className="text-lg md:text-xl  font-david hover:text-amber-500">Why Us</span>,
      onClick: () => scrollToSection("WhyUs"),
    },
    {
      key: "contact",
      icon: <MailOutlined style={{fontSize:"20px"}} />,
      label: <span className="text-lg md:text-xl  font-david hover:text-amber-500">Contact</span>,
      onClick: () => scrollToSection("Contact"),
    },

    { type: "divider" },

    {
      key: "call",
      label: (
        <a href="tel:01793229730">
          <button className="w-full text-lg md:text-xl  font-david bg-orange-700 text-white py-2 rounded-md hover:hover:translate-y-2 transition">
            Call Now
          </button>
        </a>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items, style: { width: "50vw" } }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button
        type="text"
        className="flex items-center justify-center border-none p-5 "
      >
        <MenuOutlined style={{ fontSize: "28px", color: "#44403C" }} />
      </Button>
    </Dropdown>
  );
};

export default Hamburgermenu;