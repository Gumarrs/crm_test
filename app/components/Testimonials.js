"use client";
import Image from "next/image";
import { useState } from "react";

const testimonialsData = [
  {
    quote:
      "The place is nice with a village atmosphere surrounded by trees, really cool",
    name: "Phillip Press",
    role: "Traveler",
    avatar: "/testimonial1.png",
  },
  {
    quote:
      "The rooms are okay, the breakfast is okay, new and traditional menus are added",
    name: "Tatiana Levin",
    role: "Travel Blogger",
    avatar: "/testimonial2.png",
  },
  {
    quote:
      "Strategic location, very pleasant at this villa. Next time will come back again to spend the night here",
    name: "Kaiya Vaccaro",
    role: "Digital Nomads",
    avatar: "/testimonial3.png",
  },
];

// 🔽 Arrow Reusable
const ArrowIcon = ({ direction = "right", active }) => {
  const color = active ? "#106A64" : "#9E9E9E";
  const width = active ? 60 : 28;
  const height = 24;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${
        direction === "left" ? "rotate-180" : ""
      } ${active ? "opacity-100" : "opacity-50"}`}
    >
      <line
        x1="0"
        y1="12"
        x2="60"
        y2="12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline
        points="50,4 60,12 50,20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const totalItems = testimonialsData.length;

  // Ambil 2 item utk desktop
  const visibleItems = testimonialsData.slice(current, current + 2);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < totalItems - 2) setCurrent(current + 1);
  };

  return (
    <section className="relative w-full bg-white py-28 px-6 lg:px-32 font-poppins overflow-hidden">
      {/* ===== Dekorasi umum ===== */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-teal-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-100 rounded-full blur-2xl opacity-40" />

      <div className="w-full max-w-[1152px] mx-auto relative z-10">
        {/* ===== Desktop layout ===== */}
        <div className="hidden md:block">
          {/* Title & Arrows */}
          <div className="flex items-center justify-between mb-28">
            <h2 className="text-4xl font-semibold text-black leading-tight">
              What Our <span className="text-teal-700">Customer</span> <br /> Are
              Saying
            </h2>

            <div className="flex items-center gap-4">
              <button onClick={prevSlide} aria-label="Previous">
                <ArrowIcon direction="left" active={current > 0} />
              </button>
              <button onClick={nextSlide} aria-label="Next">
                <ArrowIcon direction="right" active={current < totalItems - 2} />
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="relative w-full max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[280px]">
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="w-96 h-60 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)] rounded-lg p-6 flex flex-col justify-between mx-auto relative"
              >
                <p className="text-sm text-black font-normal tracking-tight leading-relaxed">
                  “{item.quote}”
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-xs text-teal-700 font-medium tracking-tight">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-neutral-400 tracking-tight">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Mobile layout (Figma export adapted) ===== */}
        <div className="block md:hidden relative">
          <h2 className="text-base font-semibold  text-black leading-tight mb-6">
            What Our{" "}
            <span className="text-teal-700">
              Customer <br />
            </span>
            Are Saying
          </h2>

          {/* Card */}
          <div className="w-full max-w-xs bg-white shadow-[0px_4.4px_13px_rgba(0,0,0,0.02),0px_22px_80px_rgba(0,0,0,0.04)] p-4 mx-auto relative rounded-md">
            <p className="text-sm text-black font-normal leading-tight mb-6">
              “{testimonialsData[current].quote}”
            </p>

            <div className="flex items-center gap-3">
              <img
                src={testimonialsData[current].avatar}
                alt={testimonialsData[current].name}
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="text-xs text-teal-700 font-medium">
                  {testimonialsData[current].name}
                </p>
                <p className="text-[10px] text-neutral-400">
                  {testimonialsData[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex justify-end gap-3 mt-4 pr-4">
            <button onClick={prevSlide} aria-label="Previous">
              <ArrowIcon direction="left" active={current > 0} />
            </button>
            <button onClick={nextSlide} aria-label="Next">
              <ArrowIcon direction="right" active={current < totalItems - 1} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
