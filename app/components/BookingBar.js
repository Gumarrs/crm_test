"use client";
import { useState } from "react";
import Image from "next/image";

export default function BookingBar() {
  const [room, setRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  // modal input
  const [activeField, setActiveField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleSubmit = () => {
    if (!room || !checkIn) {
      setIsAvailable(false);
      setShowModal(true);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkInDate = new Date(checkIn);
    checkInDate.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (checkInDate >= tomorrow) {
      setIsAvailable(true);
    } else {
      setIsAvailable(false);
    }

    setShowModal(true);
  };

  const handleSave = () => {
    if (activeField === "room") setRoom(tempValue);
    if (activeField === "checkin") setCheckIn(tempValue);
    if (activeField === "checkout") setCheckOut(tempValue);
    setActiveField(null);
    setTempValue("");
  };

  return (
    <div
      id="booking-bar"
      className="w-[1152px] h-28 bg-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center"
    >
      <div className="flex items-center gap-24">
        {/* Room */}
        <div
          className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950 cursor-pointer"
          onClick={() => {
            setActiveField("room");
            setTempValue(room);
          }}
        >
          <span>{room || "Room"}</span>
          <Image src="/vector.svg" alt="Room" width={20} height={20} />
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-400" />

        {/* Check in */}
        <div
          className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950 cursor-pointer"
          onClick={() => {
            setActiveField("checkin");
            setTempValue(checkIn);
          }}
        >
          <Image src="/Calendar.svg" alt="Check in" width={24} height={24} />
          <span>{checkIn || "Check in"}</span>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-400" />

        {/* Check out */}
        <div
          className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950 cursor-pointer"
          onClick={() => {
            setActiveField("checkout");
            setTempValue(checkOut);
          }}
        >
          <Image src="/Calendar.svg" alt="Check out" width={24} height={24} />
          <span>{checkOut || "Check out"}</span>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="flex items-center gap-[10px] 
                    bg-[#0F6A64] text-white font-poppins text-[20px] leading-[20px] tracking-[-0.012em] 
                    rounded-md px-6 py-3 
                    transition-colors duration-300
                    hover:bg-white hover:text-[#0F6A64] hover:border hover:border-[#0F6A64]"
        >
          Check availability
        </button>
      </div>

      {/* Modal Input */}
      {activeField && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-[500px] p-8 bg-white rounded-lg flex flex-col gap-6">
            <div className="text-xl font-semibold font-poppins text-center">
              {activeField === "room"
                ? "Select Room"
                : activeField === "checkin"
                ? "Select Check-in Date"
                : "Select Check-out Date"}
            </div>

            {activeField === "room" ? (
              <select
                className="border rounded-md px-3 py-2 text-[16px]"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              >
                <option value="">Select</option>
                <option value="4 Bedroom Villa">4 Bedroom Villa</option>
                <option value="Kudus House">Kudus House</option>
                <option value="Joglo House">Joglo House</option>
              </select>
            ) : (
              <input
                type="date"
                className="border rounded-md px-3 py-2 text-[16px]"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setActiveField(null)}
                className="flex-1 h-10 bg-gray-300 rounded-md text-sm font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 h-10 bg-[#0F6A64] text-white rounded-md text-sm font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Availability */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-[500px] p-8 bg-white rounded-lg flex flex-col items-center gap-6">
            <div className="text-black text-2xl font-semibold font-poppins">
              {isAvailable ? "Available" : "Not Available"}
            </div>
            <div className="text-center text-neutral-500 text-sm font-normal leading-snug">
              {room || "Room"} on {checkIn || "??"} until {checkOut || "??"}
              <br />
              {isAvailable ? "is available ✅" : "is not available ❌"}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="w-full h-10 px-4 py-2 bg-teal-700 rounded-[5px] text-white text-sm font-semibold font-poppins"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
