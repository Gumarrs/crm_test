import Image from "next/image";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full bg-white py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-32 font-poppins overflow-hidden"
    >
      {/* Background vektor */}
      <div className="absolute right-[40px] sm:right-[80px] md:right-[120px] bottom-[40px] sm:bottom-[50px] md:bottom-[60px] opacity-80 z-0">
        <Image
          src="/GroupVektor.png"
          alt="Decorative vector"
          width={104}
          height={118}
          className="w-12 sm:w-16 md:w-[104px] h-auto"
        />
      </div>

      <div
        className="absolute z-0 hidden md:block"
        style={{
          right: "700px",
          bottom: "50px",
          width: "900px",
          height: "290px",
          backgroundColor: "#F1F6F6",
        }}
      ></div>

      {/* Container */}
      <div className="w-full max-w-[1152px] mx-auto relative z-10">
        {/* Judul */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 md:mb-16">
          <span className="text-black">Our </span>
          <span className="text-teal-700">Gallery</span>
        </h2>

        {/* Grid gallery */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Gambar besar kiri (span 2 baris) */}
          <Image
            src="/galeri1.png"
            alt="Gallery 1"
            width={564}
            height={515}
            className="rounded-lg object-cover w-full h-full row-span-2"
          />

          {/* Gambar kanan atas */}
          <Image
            src="/galeri2.png"
            alt="Gallery 2"
            width={564}
            height={248}
            className="rounded-lg object-cover w-full h-full"
          />

          {/* Gambar kanan bawah */}
          <div className="relative">
            <Image
              src="/galeri3.png"
              alt="Gallery 3"
              width={564}
              height={249}
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white underline text-sm sm:text-base">
                More photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
