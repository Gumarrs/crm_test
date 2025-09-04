"use client";
import Image from "next/image";

export default function Facilities() {
  return (
<section id="facilities" className="relative w-full bg-white py-20 px-8 lg:px-32 font-poppins overflow-hidden">
  {/* Decorative Vector di belakang */}
  <div className="absolute left-[126px] top-[8px] opacity-80 z-0">
    <Image
      src="/GroupVektor.png"
      alt="Decorative vector"
      width={104}
      height={118}
    />
  </div>

    <div className="absolute left-[714px] top-[287px] opacity-80 z-0">
    <Image
      src="/GroupVektor.png"
      alt="Decorative vector"
      width={104}
      height={118}
    />
  </div>



  <div
    className="absolute z-0"
    style={{
      left: "1000px",
      top: "115px",
      width: "490px",
      height: "290px",
      backgroundColor: "#F1F6F6",
    }}
  ></div>


  {/* Container agar sejajar dengan About Villa */}
  <div className="w-full max-w-[1152px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
    {/* Left Content */}
    <div className="space-y-6">
      {/* Title */}
      <div className="justify-start">
        <span className="text-black text-4xl font-semibold font-['Poppins'] leading-10">
          Various{" "}
        </span>
        <span className="text-teal-700 text-4xl font-semibold font-['Poppins'] leading-10">
          facilities
        </span>
        <span className="text-black text-4xl font-semibold font-['Poppins'] leading-10">
          {" "}that
          <br />
          you can enjoy
        </span>
      </div>

      {/* Subtitle */}
      <div className="justify-start text-neutral-400 text-xl font-normal font-['Poppins'] leading-tight">
        We bring you together with your dream
        <br />
        holiday
      </div>

      {/* Button */}
      <button className="px-6 py-4 bg-teal-700 text-white text-lg rounded-md hover:bg-teal-800 transition">
        Explore
      </button>
    </div>

    {/* Right Content: Images */}
    <div className="grid grid-cols-2 gap-10">
      <div className="col-span-1">
        <Image
          src="/campfire.png"
          alt="Campfire facility"
          width={319}
          height={319}
          className=" object-cover w-full h-full"
        />
      </div>
      <div className="col-span-1">
        <Image
          src="/greenhouse.png"
          alt="Greenhouse facility"
          width={319}
          height={319}
          className=" object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</section>

  );
}
