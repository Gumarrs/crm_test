import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full bg-white py-28 px-8 lg:px-32 font-poppins overflow-hidden">
      {/* Background vektor */}
      <div className="absolute right-[120px] bottom-[60px] opacity-80 z-0">
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
      right: "700px",
      bottom: "50px",
      width: "900px",
      height: "290px",
      backgroundColor: "#F1F6F6",
    }}
  ></div>

      {/* Container sama seperti Testimonials */}
      <div className="w-full max-w-[1152px] mx-auto relative z-10">
        {/* Judul */}
        <h2 className="text-center text-4xl font-semibold mb-16">
          <span className="text-black">Our </span>
          <span className="text-teal-700">Gallery</span>
        </h2>

        {/* Grid gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gambar besar kiri */}
          <Image
            src="/galeri1.png"
            alt="Gallery 1"
            width={564}
            height={515}
            className="rounded-lg object-cover w-full h-full"
          />

          <div className="grid grid-rows-2 gap-6">
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
                <button className="text-white underline text-base">
                  More photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
