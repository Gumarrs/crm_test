export default function CtaBanner() {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center text-white mt-12"
      style={{
        backgroundImage: "url('/cta-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Make your comfort is our happiness
        </h2>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium">
          Book Now
        </button>
      </div>
    </section>
  );
}
