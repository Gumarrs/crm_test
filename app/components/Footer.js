export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12 mt-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Facility</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Room Categories</h4>
          <ul>
            <li>4 Bedroom Villa</li>
            <li>2 Bedroom Villa</li>
            <li>Joglo House</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Us</h4>
          <p>Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa Barat</p>
          <p>📞 62812345678</p>
          <p>📧 example@gmail.com</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Villa Amadaha. All rights reserved.
      </div>
    </footer>
  );
}
