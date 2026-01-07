

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Dev<span className="text-indigo-500">Brand</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Modern websites crafted with passion and performance in mind.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 transition">Home</li>
            <li className="hover:text-indigo-400 transition">About</li>
            <li className="hover:text-indigo-400 transition">Services</li>
            <li className="hover:text-indigo-400 transition">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li className="hover:text-indigo-400 transition">Docs</li>
            <li className="hover:text-indigo-400 transition">Blog</li>
            <li className="hover:text-indigo-400 transition">Support</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <span className="hover:text-indigo-400 transition">🌐</span>
            <span className="hover:text-indigo-400 transition">🐦</span>
            <span className="hover:text-indigo-400 transition">💼</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center text-sm">
        © {new Date().getFullYear()} DevBrand. All rights reserved.
      </div>
    </footer>
  );
}
