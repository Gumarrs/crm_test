import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative w-full bg-white">
      {/* Background image full */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[520px]">
        <Image
          src="/cta-banner.png"
          alt="CTA Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1152px] mx-auto px-4 text-center md:text-left">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6">
              Make your comfort is
              <br />
              our happiness
            </h2>

            {/* Tombol anchor ke booking-bar */}
            <div className="flex justify-center md:justify-start">
              <a
                href="#booking-bar"
                className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-100 rounded-[5px] inline-flex justify-center items-center gap-2.5
                           text-teal-700 text-sm sm:text-base md:text-xl font-normal leading-tight
                           transition-colors duration-300 hover:bg-teal-700 hover:text-white"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
