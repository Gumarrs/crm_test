"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-16 px-6 lg:py-20 lg:px-32 font-poppins"
    >
      {/* ====== Bagian Atas: Judul + Info ====== */}
      <div className="w-full max-w-[1152px] mx-auto grid lg:grid-cols-2 items-start mt-8 lg:mt-14 mb-10 lg:mb-14">
        {/* Title */}
        <div className="text-left">
          <span className="text-neutral-950 text-2xl lg:text-4xl font-semibold leading-snug">
            About Villa{" "}
          </span>
          <span className="text-teal-700 text-2xl lg:text-4xl font-semibold leading-snug">
            Amadaha
          </span>
        </div>

        {/* Group Dots (hide on mobile) */}
        <div className="hidden lg:flex justify-end relative mr-20">
          <Image
            src="/GroupVektor.png"
            alt="Decorative dots"
            width={120}
            height={120}
            className="opacity-80"
          />
        </div>
      </div>

      {/* ====== Bagian Bawah: Gambar + Deskripsi ====== */}
      <div className="w-full max-w-[1152px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image + border box */}
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Border hanya untuk desktop */}
          <div className="hidden lg:block absolute w-96 h-96 border-2 border-teal-700 translate-x-6 translate-y-6"></div>
          <Image
            src="/About1.png"
            alt="Villa Amadaha"
            width={800}
            height={500}
            className="relative z-10 object-cover rounded-md w-full h-auto lg:w-[382px] lg:h-[382px]"
          />
        </div>

        {/* Text Content + Info Row */}
        <div className="text-left">
          {/* Deskripsi */}
          <p className="text-sm lg:text-lg text-neutral-950 leading-relaxed mb-8 lg:mb-36 text-justify">
            Villa Amadaha consist of Two Luxury Villas and one Traditional
            Javanese House surrounded by a tranquil rain forest setting,
            traditional Indonesian houses and a farm overlooking the area.
          </p>

          {/* Info Row */}
          <div className="grid grid-cols-2 gap-8 lg:flex lg:gap-16">
            <div className="text-left">
              <p className="text-xl lg:text-4xl font-medium text-neutral-950">
                +6
              </p>
              <p className="text-sm lg:text-2xl font-medium text-teal-700">
                / Room
              </p>
              <p className="mt-1 lg:mt-2 text-neutral-700 text-xs lg:text-base">
                Room options
              </p>
            </div>
            <div className="text-left">
              <p className="text-xl lg:text-4xl font-medium text-neutral-950">
                +2
              </p>
              <p className="text-sm lg:text-2xl font-medium text-teal-700">
                / Facilities
              </p>
              <p className="mt-1 lg:mt-2 text-neutral-700 text-xs lg:text-base">
                Facilities available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
