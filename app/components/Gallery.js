export default function Gallery() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-300 rounded-lg">Image 1</div>
        <div className="h-48 bg-gray-300 rounded-lg">Image 2</div>
        <div className="h-48 bg-gray-300 rounded-lg">Image 3</div>
      </div>
    </section>
  );
}
