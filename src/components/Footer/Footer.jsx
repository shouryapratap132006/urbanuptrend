import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-yellow-500">UrbanUptrend</h2>
          <p className="text-gray-400 text-sm">
            Your style journey starts here — Fresh vibes, fast deliveries, and unmatched support.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-yellow-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500 text-2xl"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-500 text-2xl"><FaYoutube /></a>
            <a href="#" className="hover:text-yellow-500 text-2xl"><FaLinkedin /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Shop</h3>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Men's Collection</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Women's Collection</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Footwear Collection</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Tumbler Collection</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Phone Case Collection</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">New Arrivals</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Best Sellers</a>
        </div>

        {/* Information Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Information</h3>
          <a href="#" className="text-gray-400 hover:text-white text-sm">How It Works</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2 text-yellow-500">Customer Service</h3>
          <a href="#" className="text-gray-400 hover:text-white text-sm">FAQs</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Shipping Information</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Returns & Exchanges</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Order Tracking</a>
        </div>

      </div>

      <div className="w-full border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UrbanUptrend. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
