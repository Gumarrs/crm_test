"use client";
import Image from "next/image";

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative w-full bg-white py-20 px-6 sm:px-8 lg:px-32 font-poppins overflow-hidden"
    >
      {/* Decorative Vector */}
      <div className="absolute left-[126px] top-[8px] opacity-80 z-0 hidden md:block">
        <Image
          src="/GroupVektor.png"
          alt="Decorative vector"
          width={104}
          height={118}
        />
      </div>

      <div className="absolute left-[714px] top-[287px] opacity-80 z-0 hidden md:block">
        <Image
          src="/GroupVektor.png"
          alt="Decorative vector"
          width={104}
          height={118}
        />
      </div>

      <div
        className="absolute z-0 hidden md:block"
        style={{
          left: "1000px",
          top: "115px",
          width: "490px",
          height: "290px",
          backgroundColor: "#F1F6F6",
        }}
      ></div>

      {/* Container */}
      <div className="w-full max-w-[1152px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Title */}
          <div>
            <span className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              Various{" "}
            </span>
            <span className="text-teal-700 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              facilities
            </span>
            <span className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              {" "}
              that
              <br className="hidden sm:block" />
              you can enjoy
            </span>
          </div>

          {/* Subtitle */}
          <div className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed">
            We bring you together with your dream
            <br className="hidden sm:block" />
            holiday
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-teal-700 text-white text-base sm:text-lg rounded-md hover:bg-teal-800 transition">
            Explore
          </button>
        </div>

{/* Right Content: Images */}
<div className="grid grid-cols-2 gap-6 sm:gap-10 mt-10 lg:mt-0">
  <div className="relative w-full aspect-square">
    <Image
      src="/campfire.png"
      alt="Campfire facility"
      fill
      className="object-cover rounded-md"
    />
  </div>
  <div className="relative w-full aspect-square">
    <Image
      src="/greenhouse.png"
      alt="Greenhouse facility"
      fill
      className="object-cover rounded-md"
    />
  </div>
</div>


      </div>
    </section>
  );
}
