"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 px-8 lg:px-32 font-poppins">
      {/* ====== Bagian Atas: Judul + Info ====== */}
    <div className="w-full max-w-[1152px] mx-auto grid lg:grid-cols-2 items-start mt-14 mb-14">
  {/* Title */}
  <div className="justify-start">
    <span className="text-neutral-950 text-4xl font-semibold font-['Poppins'] leading-10">
      About Villa{" "}
    </span>
    <span className="text-teal-700 text-4xl font-semibold font-['Poppins'] leading-10">
      Amadaha
    </span>
  </div>

  {/* Group Dots */}
  <div className="flex justify-end relative mr-20">
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
      <div className="w-full max-w-[1152px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image + border box */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute w-96 h-96 border-2 border-teal-700 translate-x-6 translate-y-6"></div>
          <Image
            src="/About1.png"
            alt="Villa Amadaha"
            width={382}
            height={382}
            className="relative z-10 object-cover rounded-md"
          />
        </div>

        {/* Text Content + Info Row */}
        <div>
          {/* Deskripsi */}
          <p className="text-lg text-neutral-950 leading-relaxed mb-36">
            Villa Amadaha consist of Two Luxury Villas and one <br />
            Traditional Javanese House surrounded by a <br />
            tranquil rain forest setting, traditional Indonesian <br />
            houses and a farm overlooking the area.
          </p>

          {/* Info Row */}
          <div className="flex gap-16 z-10">
            <div>
              <p className="text-4xl font-medium text-neutral-950">+6</p>
              <p className="text-2xl font-medium text-teal-700">/ Room</p>
              <p className="mt-2 text-neutral-700">Room options</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-neutral-950">+2</p>
              <p className="text-2xl font-medium text-teal-700">/ Facilities</p>
              <p className="mt-2 text-neutral-700">Facilities available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
