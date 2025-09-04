import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact-us" className="w-full bg-gray-100 py-16">
      <div className="max-w-[1152px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-black text-3xl font-medium mb-6">Quick Links</h3>
          <ul className="space-y-4 text-xl text-black">
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
        <div>
          <h3 className="text-black text-3xl font-medium mb-6">Room Categories</h3>
          <ul className="space-y-4 text-xl text-black">
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
        <div>
          <h3 className="text-black text-3xl font-medium mb-6">Contact Us</h3>
          <ul className="space-y-4 text-xl text-black">
            <li>
              Jl. Bukit Pelangi, Gunung Geulis,<br />
              Sukaraja, Kab. Bogor,<br />
              Jawa Barat
            </li>
            <li>
              <a href="" className="hover:text-teal-700 transition-colors">
                +62 812345678
              </a>
            </li>
            <li>
              <a href="" className="hover:text-teal-700 transition-colors">
                example@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
