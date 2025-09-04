"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import BookingBar from "./BookingBar";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full font-poppins">
      {/* Background Hero */}
      <Image
        src="/bg-hero.png"
        alt="Villa background"
        fill
        priority
        className="object-cover object-center -z-10"
        sizes="100vw"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <Navbar />

{/* Hero text */}
<div
  className="
    absolute z-10
    left-1/2 top-[40%] -translate-x-1/2 text-center px-4
    md:left-[180px] md:top-[352px] md:translate-x-0 md:text-left md:px-0
  "
>
  {/* Mobile heading */}
  <div className="block md:hidden text-center justify-start">
    <span className="text-white text-2xl font-bold font-poppins leading-tight">
      Make your comfort is
      <br />
      our{" "}
    </span>
    <span className="text-white text-2xl font-bold font-poppins leading-tight">
      happiness
    </span>
  </div>

  {/* Desktop heading */}
  <h1
    className="
      hidden md:block
      text-white font-bold leading-tight
      text-heading
    "
  >
    Make your comfort is <br /> our happiness
  </h1>

  {/* Mobile paragraph */}
  <div className="block md:hidden w-80 mx-auto mt-4 text-center text-white text-sm font-normal font-poppins">
    Studio villa made of bamboo, located near the top of Mount Geulis with a
    stunning 180 degree bird&apos;s eye view.
  </div>

  {/* Desktop paragraph */}
  <p
    className="
      hidden md:block
      mt-4 text-white font-body text-lg
    "
  >
    Studio villa made of bamboo, located near the top of Mount Geulis
    <br />
    with a stunning 180 degree bird’s eye view.
  </p>

  {/* Tombol */}
  <div
    className="
      mt-6 flex flex-col items-center gap-4
      md:flex-row md:gap-6
    "
  >
    {/* Book Now → hanya mobile */}
    <button
      className="
        w-48 h-10 px-8 py-2.5 bg-teal-700 
        text-white text-xs sm:text-sm font-normal
        inline-flex justify-center items-center gap-2.5 
        transition-all duration-300 border border-teal-700 
        hover:bg-white hover:text-teal-700
        md:hidden
      "
    >
      Book Now
    </button>

    {/* Explore Rooms */}
    <Link
      href="#villa-studios"
      className="
        w-48 h-10 px-8 py-2.5 bg-gray-100 
        text-teal-700 text-xs sm:text-sm font-normal
        inline-flex justify-center items-center gap-2.5 
        transition-all duration-300 border border-gray-200 
        hover:bg-teal-700 hover:text-white
        md:w-auto md:h-auto md:px-9 md:py-3 
        md:bg-brandBg md:text-brandGreen 
        md:hover:bg-brandGreen md:hover:text-white
      "
    >
      Explore Rooms
    </Link>
  </div>
</div>


      {/* Booking Bar */}
      <div className="absolute bottom-[-56px] left-1/2 -translate-x-1/2 z-20">
        <BookingBar />
      </div>
    </section>
  );
}
