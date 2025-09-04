"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false); // hamburger dropdown
  const [openSubmenu, setOpenSubmenu] = useState(false); // submenu villa
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tutup semua kalau klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
        setOpenSubmenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const submenuItems = [
    "4 Bedroom villa",
    "2 Bedroom villa",
    "Joglo house",
    "Kudus house",
    "Bamboo house",
    "Bamboo studio",
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-20 font-poppins flex items-center justify-between px-[174px] z-20">
      {/* Left side */}
      <div className="flex items-center gap-16 relative" ref={dropdownRef}>
        {/* Hamburger custom 4 garis */}
        <button
          onClick={() => {
            setOpenDropdown((prev) => !prev);
            setOpenSubmenu(false); // tutup submenu kalau hamburger dibuka
          }}
          className="flex flex-col gap-[3px] justify-center items-center w-9 h-9"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="w-7 h-[2px] bg-white rounded"></span>
          ))}
        </button>

        {/* Dropdown dari hamburger */}
        {openDropdown && (
          <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-md shadow-md text-black text-xs overflow-hidden z-30">
            <ul className="flex flex-col">
              <li className="px-3 py-2 hover:bg-slate-300/30 cursor-pointer border-b border-stone-300/50">
                About
              </li>

              {/* Villa Categories di dropdown */}
              <li className="px-3 py-2 border-b border-stone-300/50 relative">
                {isMobile ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenSubmenu((prev) => !prev);
                    }}
                    className="flex items-center gap-2 text-black text-xs font-normal leading-tight w-full"
                  >
                    Villa Category ▾
                  </button>
                ) : (
                  <div className="flex flex-col justify-start items-start gap-2 cursor-pointer">
                    <div className="text-black text-xs font-normal leading-none">
                      Villa Categorys
                    </div>
                    <div className="w-24 h-px bg-stone-300/50" />
                  </div>
                )}
              </li>

              <li className="px-3 py-2 hover:bg-slate-300/30 cursor-pointer">
                Gallery
              </li>
            </ul>
          </div>
        )}

        {/* Tombol Villa Category di desktop */}
        {!isMobile && (
          <div className="relative">
                        <button
              onClick={() => {
                setOpenSubmenu((prev) => !prev);
                setOpenDropdown(false); // tutup dropdown kalau submenu dibuka
              }}
              className="flex items-center gap-2 text-white text-base font-normal leading-tight hover:text-teal-300 transition-colors"
            >
              Villa Category ▾
            </button>

            {openSubmenu && (
              <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-md text-black text-xs border border-stone-300 rounded-md z-40">
                {submenuItems.map((item, idx, arr) => (
                  <li
                    key={item}
                    className={`px-3 py-2 cursor-pointer transition-colors hover:bg-slate-300/30 hover:text-teal-700 ${
                      idx !== arr.length - 1 ? "border-b border-stone-300" : ""
                    }`}
                    onClick={() => {
                      console.log(`Klik submenu: ${item}`);
                      setOpenSubmenu(false);
                    }}
                  >
                    {item}
                  </li>

                ))}
              </ul>
            )}
          </div>
        )}

      
      </div>

      {/* Submenu mobile (fixed position) */}
      {isMobile && openSubmenu && (
        <ul
          className="fixed bg-white shadow-md text-black text-xs border border-stone-300 rounded-md z-40"
          style={{ left: "161px", top: "75px", width: "180px" }}
        >
          {submenuItems.map((item, idx, arr) => (
            <li
              key={item}
              className={`px-3 py-2 hover:bg-slate-300/30 cursor-pointer ${
                idx !== arr.length - 1 ? "border-b border-stone-300" : ""
              }`}
              onClick={() => {
                console.log(`Klik submenu: ${item}`);
                setOpenDropdown(false);
                setOpenSubmenu(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

{/* Right side */}
<div className="flex items-center gap-12">
  <Link
    href="#contact-us"
    className="text-white text-base font-normal leading-tight hover:text-teal-300 transition-colors"
  >
    Contact us
  </Link>

  <button
    className="
      px-8 py-2 bg-teal-700 
      inline-flex justify-center items-center gap-2.5
      text-white text-base font-normal
      transition-all duration-300 border border-teal-700
      hover:bg-white hover:text-teal-700
    "
  >
    Login
  </button>
</div>
    </div>
  );
}
