import Image from "next/image";

export default function BookingBar() {
  return (
    <div id="booking-bar" className="w-[1152px] h-28 bg-white rounded-md shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center">
      <div className="flex items-center gap-24">
        {/* Room */}
        <div className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950">
          <span>Room</span>
          <Image src="/vector.svg" alt="Room" width={20} height={20} />
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-400" />

        {/* Check in */}
        <div className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950">
          <Image src="/Calendar.svg" alt="Check in" width={24} height={24} />
          <span>Check in</span>
        </div>

        {/* Divider */}
        <div className="w-px h-8 bg-neutral-400" />

        {/* Check out */}
        <div className="flex items-center gap-2 font-poppins text-[20px] leading-[20px] tracking-[-0.012em] text-neutral-950">
          <Image src="/Calendar.svg" alt="Check out" width={24} height={24} />
          <span>Check out</span>
        </div>

        <button
          className="flex items-center gap-[10px] 
                    bg-[#0F6A64] text-white font-poppins text-[20px] leading-[20px] tracking-[-0.012em] 
                    rounded-md px-6 py-3 
                    transition-colors duration-300
                    hover:bg-white hover:text-[#0F6A64] hover:border hover:border-[#0F6A64]"
        >
          Check availability
        </button>

      </div>
    </div>
  );
}
