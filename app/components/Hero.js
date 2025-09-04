"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import BookingBar from "./BookingBar"; // ⬅️ import
import Link from "next/link";


export default function Hero() {
  return (
    <section className="relative h-screen w-full font-poppins">
      {/* Hero background */}
        <Image
        src="/bg-hero.png"
        alt="Villa background"
        fill
        priority
        className="object-cover -z-10"
        />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Navbar */}
      <Navbar />
 {/* Hero text */}
<div className="absolute left-[180px] top-[352px] z-10 ">
<h1 className="text-white font-bold text-heading">
  Make your comfort is <br /> our happiness
</h1>

<p className="mt-4 text-white font-body">
  Studio villa made of bamboo, located near the top of Mount Geulis <br />
  with a stunning 180 degree bird’s eye view.
</p>

    <Link
      href="#villa-studios"
      className="
        mt-6 font-button rounded-sm5 px-35 py-12 
        text-brandGreen bg-brandBg 
        transition-all duration-300
        hover:bg-brandGreen hover:text-white
        inline-block
      "
    >
      Explore Rooms
    </Link>


</div>
 {/* Booking Bar */}
      <div className="absolute bottom-[-56px] left-1/2 -translate-x-1/2 z-20">
        <BookingBar />
      </div>


    </section>
  );
}
