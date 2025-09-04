import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact-us" className="w-full bg-gray-100 py-10 sm:py-16">
      <div className="max-w-[1152px] mx-auto px-4 grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-12">
        
        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-black text-base sm:text-lg md:text-3xl font-medium mb-4 md:mb-6">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-xl text-black">
            <li>
              <Link href="#about" className="hover:text-teal-700 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#facilities" className="hover:text-teal-700 transition-colors">
                Facility
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-teal-700 transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Room Categories */}
        <div className="col-span-1 text-center md:text-left">
          <h3 className="text-black text-base sm:text-lg md:text-3xl font-medium mb-4 md:mb-6">
            Room Categories
          </h3>
          <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-xl text-black">
            <li>
              <Link href="" className="hover:text-teal-700 transition-colors">
                4 Bedroom Villa
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-teal-700 transition-colors">
                2 Bedroom Villa
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-teal-700 transition-colors">
                Joglo House
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-teal-700 transition-colors">
                Bamboo Studio
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-teal-700 transition-colors">
                Bamboo House
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">


{/* Contact Us */}
<div className="flex flex-col sm:flex-row items-start gap-3">
  {/* Teks Contact Us */}
  <span className="text-gray-900 font-semibold text-base">
    Contact Us
  </span>

  {/* Icon list */}
  <div className="flex flex-row gap-2 mt-1">
    <Image src="/icon1.png" alt="icon1" width={20} height={20} />
    <Image src="/icon2.png" alt="icon2" width={20} height={20} />
    <Image src="/icon3.png" alt="icon3" width={20} height={20} />
  </div>
</div>

</div>


      </div>
    </footer>
  );
}
