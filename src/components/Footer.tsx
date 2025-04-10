export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Brew & Bites</h3>
          <p>Artisanal coffee and homemade pastries</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-500">Menu</a></li>
            <li><a href="#" className="hover:text-amber-500">About</a></li>
            <li><a href="#" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500">Instagram</a>
            <a href="#" className="hover:text-amber-500">Facebook</a>
            <a href="#" className="hover:text-amber-500">Twitter</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
      </div>
    </footer>
  );
}