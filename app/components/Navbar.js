"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false); // hamburger
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
    <div className="absolute top-0 left-0 w-full h-20 font-poppins flex items-center justify-between px-4 md:px-[174px] z-20">
      {/* Left side */}
      <div className="flex items-center gap-8 relative" ref={dropdownRef}>
        {/* Hamburger → dari kode pertama */}
        <button
          onClick={() => {
            setOpenDropdown((prev) => !prev);
            setOpenSubmenu(false);
          }}
          className="flex flex-col gap-[3px] justify-center items-center w-9 h-9"
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="w-7 h-[2px] bg-white rounded"></span>
          ))}
        </button>

        {/* Dropdown dari hamburger */}
        {openDropdown && (
          <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-md shadow-md text-black text-sm overflow-hidden z-30">
            <ul className="flex flex-col">
              <li className="px-3 py-2 hover:bg-slate-100 cursor-pointer border-b">
                About
              </li>

              {/* Villa Categories di hamburger */}
              <li className="px-3 py-2 border-b relative">
                {isMobile ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenSubmenu((prev) => !prev);
                    }}
                    className="flex items-center justify-between w-full"
                  >
                    Villa Category ▾
                  </button>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="text-black text-sm">Villa Category</div>
                    <div className="w-24 h-px bg-stone-300/50" />
                  </div>
                )}
              </li>

              <li className="px-3 py-2 hover:bg-slate-100 cursor-pointer">
                Gallery
              </li>
            </ul>
          </div>
        )}

        {/* Tombol Villa Category khusus desktop → submenu dari kode kedua */}
        {!isMobile && (
          <div className="relative">
            <button
              onClick={() => {
                setOpenSubmenu((prev) => !prev);
                setOpenDropdown(false);
              }}
              className="flex items-center gap-1 text-white text-base hover:text-teal-300 transition-colors"
            >
              Villa Category ▾
            </button>

            {openSubmenu && (
              <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-md text-black text-sm border rounded-md z-40">
                {submenuItems.map((item, idx, arr) => (
                  <li
                    key={item}
                    className={`px-3 py-2 hover:bg-slate-100 cursor-pointer ${
                      idx !== arr.length - 1 ? "border-b" : ""
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

      {/* Submenu khusus mobile (fixed position) */}
      {isMobile && openSubmenu && (
        <ul
          className="fixed bg-white shadow-md text-black text-sm border rounded-md z-40"
          style={{ left: "161px", top: "75px", width: "180px" }}
        >
          {submenuItems.map((item, idx, arr) => (
            <li
              key={item}
              className={`px-3 py-2 hover:bg-slate-100 cursor-pointer ${
                idx !== arr.length - 1 ? "border-b" : ""
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

      {/* Right side (desktop) */}
      <div className="hidden md:flex items-center gap-12">
        <Link
          href="#contact-us"
          className="text-white text-base hover:text-teal-300 transition-colors"
        >
          Contact us
        </Link>

        <button className="px-8 py-2 bg-teal-700 text-white border border-teal-700 hover:bg-white hover:text-teal-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
