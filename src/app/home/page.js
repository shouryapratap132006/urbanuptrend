"use client";

import Image from "next/image";
import { FaTshirt, FaTruck, FaHeadset } from "react-icons/fa";
import { FaSearch, FaHeart, FaShoppingCart, FaBoxOpen } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  const posters = [
    "/assets/p1.png",
    "/assets/p2.png",
    "/assets/p3.png",
    "/assets/p4.png",
    "/assets/p5.png",
    "/assets/p6.png",
  ];

  const steps = [
    { icon: <FaSearch className="text-3xl" />, title: "Browse", description: "Explore thousands of fresh designs." },
    { icon: <FaTshirt className="text-3xl" />, title: "Select", description: "Pick your perfect outfit." },
    { icon: <FaHeart className="text-3xl" />, title: "Wishlist", description: "Save your favorites for later." },
    { icon: <FaShoppingCart className="text-3xl" />, title: "Checkout", description: "Easy and secure payments." },
    { icon: <FaBoxOpen className="text-3xl" />, title: "Delivered", description: "Get your style at your doorstep!" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">

      <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 text-center mt-10 tracking-wide">
        Create Your Own Vibe
      </h1>

      <div className="w-full mt-10 px-4 md:px-12">
        <div className="relative w-full aspect-[3/2] md:aspect-[16/6] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/hero.png"
            alt="Hero UrbanUptrend"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="w-full mt-12 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
          Explore Our Collection
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Discover the latest trends and styles in our curated collection.
        </p>
      </div>

      <div className="w-full mt-12 px-4 md:px-12 overflow-hidden">
        <div
          className="flex gap-6 animate-scroll w-max"
          style={{ animation: "scroll 50s linear infinite" }}
        >
          {[...posters, ...posters].map((poster, index) => (
            <div key={index} className="min-w-[200px] md:min-w-[300px]">
              <Image
                src={poster}
                alt={`Poster ${index + 1}`}
                width={300}
                height={450}
                className="rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 mb-16">
        <button className="px-8 py-3 bg-yellow-500 text-black text-lg font-bold rounded-md hover:bg-yellow-400 transition-all">
          Shop Now
        </button>
      </div>

      <style jsx>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`}</style>

<div className="w-full mt-20 px-4 md:px-12 text-center">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
    Why <span className="text-yellow-500">UrbanUptrend</span>?
  </h2>
  <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
    Your style journey starts here — curated trends, fast deliveries, and unmatched support.
  </p>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

    {/* Card 1 */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-yellow-100 text-yellow-500 rounded-full">
        <FaTshirt className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">Trendy Collections</h3>
      <p className="text-gray-600 text-sm">
        Fresh, modern styles curated for every season and every vibe.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-yellow-100 text-yellow-500 rounded-full">
        <FaTruck className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">Quick Delivery</h3>
      <p className="text-gray-600 text-sm">
        Swift and safe delivery to bring fashion faster to your doorstep.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-yellow-100 text-yellow-500 rounded-full">
        <FaHeadset className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">24/7 Support</h3>
      <p className="text-gray-600 text-sm">
        Always here for you — any question, anytime, anywhere.
      </p>
    </motion.div>

  </div>
</div>



    <div className="w-full bg-white mt-20 px-4 md:px-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
        How It Works
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        Your dream style delivered to your doorstep — simple, fast, and delightful.
      </p>

      {/* Steps Section */}
      <div className="w-full mt-16 flex justify-center">
        <div className="flex flex-nowrap justify-start gap-10 md:gap-16 max-w-full overflow-x-auto px-4">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center min-w-[150px] md:min-w-[200px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-500 rounded-full mb-4">
                {step.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </div>




    </div>
  );
};

export default Home;
