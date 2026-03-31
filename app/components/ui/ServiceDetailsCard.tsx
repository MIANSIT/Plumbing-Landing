"use client";

import Image from "next/image";
import { useState } from "react";

interface Service {
  id: string;
  image1: string;
  details1: string;
  image2: string;
  details2: string;
  image3: string;
  details3: string;
}

interface CardProps {
  service: Service;
}

export default function ServiceDetailsCard({ service }: CardProps) {
  if (!service) return null;

  const { image1, details1, image2, details2, image3, details3 } = service;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const parseContent = (content: string) => {
    const lines = content.split("\n");
    const title = lines[0];
    const description = lines.slice(1).join("\n");
    return { title, description };
  };

  const content1 = parseContent(details1);
  const content2 = parseContent(details2);
  const content3 = parseContent(details3);

  const cards = [
    {
      id: 1,
      image: image1,
      title: content1.title,
      description: content1.description,
      gradient: "from-blue-600 to-cyan-500",
      badge: "Why Fix It",
      icon: "🔍",
    },
    {
      id: 2,
      image: image2,
      title: content2.title,
      description: content2.description,
      gradient: "from-purple-600 to-pink-500",
      badge: "Our Services",
      icon: "⚡",
    },
    {
      id: 3,
      image: image3,
      title: content3.title,
      description: content3.description,
      gradient: "from-orange-500 to-red-500",
      badge: "How We Fix",
      icon: "🔧",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {cards.map((card, idx) => (
        <div
          key={card.id}
          className="group relative"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Animated background glow */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`}
          />

          {/* Card Container */}
          <div
            className={`relative flex flex-col lg:flex-row ${idx === 1 ? "lg:flex-row-reverse" : ""} 
              bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl 
              transition-all duration-500 overflow-hidden border border-white/20
              hover:scale-[1.02] transform`}
          >
            {/* Image Section with Overlay */}
            <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`object-cover transition-transform duration-700 
                  ${hoveredCard === card.id ? "scale-110" : "scale-100"}`}
              />

              {/* Floating badge on image */}
              <div className="absolute top-6 left-6 z-20">
                <div
                  className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${card.gradient} 
                    rounded-full text-white text-sm font-semibold shadow-lg`}
                >
                  <span className="text-lg">{card.icon}</span>
                  <span>{card.badge}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
              {/* Animated accent line */}
              <div
                className={`w-16 h-1 bg-gradient-to-r ${card.gradient} rounded-full mb-6 
                  group-hover:w-32 transition-all duration-500`}
              />

              {/* Title */}
              <h3
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 
                  group-hover:text-transparent group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 
                  transition-all duration-300"
              >
                {card.title}
              </h3>

              {/* Description */}
              <div className="text-gray-600 whitespace-pre-line text-base leading-relaxed space-y-3">
                {card.description.split("\n").map((paragraph, i) => (
                  <p key={i} className="hover:text-gray-900 transition-colors">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* Modern CTA Button */}
              <button
                onClick={() => (window.location.href = "tel:01793229730")}
                className="mt-8 inline-flex items-center justify-between gap-4 px-6 py-3 
                  bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-2xl
                  transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                  group/btn w-full sm:w-auto"
              >
                <span>Get Free Consultation</span>
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Decorative corner accent */}
            <div
              className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${card.gradient} 
                opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-tl-3xl`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}