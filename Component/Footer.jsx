export default function Footer() {
  return (
      <footer className="bg-orange-500 text-white py-8">
          <div className="container mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-6">

              <div>
                  <ul className="space-y-2">
                      <li>
                          <a href="/" className="hover:text-orange-200 transition-colors duration-300">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="/products" className="hover:text-orange-200 transition-colors duration-300">
                              Products
                          </a>
                      </li>
                      <li>
                          <a href="/about" className="hover:text-orange-200 transition-colors duration-300">
                              About
                          </a>
                      </li>
                      <li>
                          <a href="/contact" className="hover:text-orange-200 transition-colors duration-300">
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>

              <div>
                  <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                  <p>Telepon: <a href="tel:+6281262794631" className="hover:text-orange-200 transition-colors duration-300">+62 123 4567 890</a></p>
                  <p>Alamat: Jl.Cicendo No. 08, Bandung, Indonesia</p>
                  <p>Email: <a href="mailto:Branded@gmail.com.id" className="hover:text-orange-200 transition-colors duration-300">Branded.com</a></p>
              </div>
          </div>

          <div className="mt-8 border-t border-orange-400 pt-4 text-center">
              <p className="text-orange-200">&copy; {new Date().getFullYear()}</p>
              <div className="flex justify-center space-x-6 mt-4">
              </div>
          </div>
      </footer>
  );
}
