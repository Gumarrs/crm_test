"use client";
import Image from "next/image";

const villas = [
  {
    id: 1,
    name: "4 Bedroom villa",
    facilities: "Wifi provide, TV & Karaoke, Kitchen, Swimming pool",
    beds: 4,
    persons: 8,
    price: "Rp 3.749.000",
    img: "/4bedroom.png",
  },
  {
    id: 2,
    name: "Joglo house",
    facilities: "Wifi provide, TV & Karaoke, Kitchen, Swimming pool",
    beds: 4,
    persons: 4,
    price: "Rp 3.749.000",
    img: "/joglo_vila.png",
  },
  {
    id: 3,
    name: "Kudus house",
    facilities: "Wifi provide, TV & Karaoke, Kitchen",
    beds: 4,
    persons: 4,
    price: "Rp 3.999.000",
    img: "/kudus_house.png",
  },
];

export default function VillaStudios() {
  return (
    <section
      id="villa-studios"
      className="w-full bg-white py-20 px-4 sm:px-8 lg:px-32 font-poppins relative"
    >
      {/* Title */}
      <div className="flex justify-start mb-20 text-left">
        <h2 className="text-neutral-700 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
          Our choise of{" "}
          <span className="text-teal-700">Villa Studios</span>
        </h2>
      </div>

      {/* Decorative Vector */}
      <Image
        src="/GroupVektor.png"
        alt="Decorative vector"
        width={104}
        height={118}
        className="absolute left-[126px] top-[143px] opacity-80 z-0"
      />

      {/* Grid Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-[1152px] mx-auto relative z-10">
        {villas.map((villa, index) => (
<div
  key={villa.id}
  className={`group w-full h-[420px] sm:h-[480px] lg:w-96 lg:h-[530px] relative 
              rounded-md border border-neutral-100 
              shadow-[2px_4px_15px_rgba(0,0,0,0.08)] overflow-hidden 
              transition-all duration-300 bg-white text-neutral-900 
              hover:bg-teal-700 hover:text-white hover:shadow-[4px_4px_25px_rgba(0,0,0,0.05)]
              ${index > 1 ? "hidden sm:block" : ""}`}
>

            {/* Gambar */}
            <div className="absolute top-4 sm:top-6 left-4 right-4 sm:left-6 sm:right-6">
              <Image
                src={villa.img}
                alt={villa.name}
                width={320}
                height={320}
                className="w-full h-40 sm:h-80 object-cover rounded-md mx-auto"
              />
            </div>

            {/* Nama + Info */}
            <div className="absolute left-4 right-4 sm:left-7 sm:right-7 top-[200px] sm:top-[362px]">
              <h3
                className="text-sm sm:text-base font-medium mb-2 sm:mb-4 
                           text-teal-700 group-hover:text-white"
              >
                {villa.name}
              </h3>

              {/* Grid Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs">
                <p className="font-medium">Main Facilities</p>
                <p className="text-left">{villa.facilities}</p>

                <p className="flex items-center gap-2 font-medium">
                  <Image
                    src="/Bed.png"
                    alt="Bed"
                    width={16}
                    height={16}
                    className="block group-hover:hidden"
                  />
                  <Image
                    src="/White Bed.png"
                    alt="White Bed"
                    width={16}
                    height={16}
                    className="hidden group-hover:block"
                  />
                  {villa.beds} Bed
                </p>

                <p className="flex items-center gap-2 font-medium">
                  <Image
                    src="/Max Capasity.png"
                    alt="Max Capacity"
                    width={16}
                    height={16}
                    className="block group-hover:hidden"
                  />
                  <Image
                    src="/White Max.png"
                    alt="White Max"
                    width={16}
                    height={16}
                    className="hidden group-hover:block"
                  />
                  {villa.persons} Persons
                </p>
              </div>
            </div>

            {/* Harga */}
            <div className="absolute left-4 sm:left-7 bottom-4 sm:bottom-6">
              <span className="text-base sm:text-xl font-medium text-[#106A64] group-hover:text-white">
                {villa.price}
              </span>
              <span className="text-xs sm:text-sm font-normal ml-1 group-hover:text-white">
                /night
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10 sm:mt-14">
        <button
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300
                     bg-[#F3F9F8] text-[#106A64]
                     hover:bg-[#106A64] hover:text-white text-sm sm:text-base"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
