"use client";

import Image from "next/image";
import { FaTshirt, FaTruck, FaHeadset, FaSearch, FaHeart, FaShoppingCart, FaBoxOpen, FaStar, FaPalette, FaRecycle } from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";
import { useRouter } from "next/navigation";

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
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Browse",
      description: "Explore thousands of fresh designs.",
      detail: "Find styles based on your vibe, trends, and seasons — from streetwear to minimal."
    },
    {
      icon: <FaTshirt className="text-3xl" />,
      title: "Customise",
      description: "Customise your perfect outfit.",
      detail: "Pick colors, sizes, fonts, and add personal touches to match your personality."
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Wishlist",
      description: "Save your favorites for later.",
      detail: "Shortlist looks you love and revisit them anytime — easy and organized."
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: "Checkout",
      description: "Easy and secure payments.",
      detail: "Seamless checkout with multiple payment options and smooth order tracking."
    },
    {
      icon: <FaBoxOpen className="text-3xl" />,
      title: "Delivered",
      description: "Get your style at your doorstep!",
      detail: "We ship quickly and safely — unbox happiness in just a few days."
    },
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };
  

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden relative">

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
      <button
      onClick={handleClick}
      className="px-8 py-3 bg-yellow-500 text-black text-lg font-bold rounded-md hover:bg-yellow-400 transition-all"
    >
      Shop Now
    </button>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

<div className="w-full bg-gradient-to-br from-yellow-50 via-white to-yellow-100 pt-20 pb-24 px-4 md:px-12 text-center">
  <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide relative inline-block">
    How <span className="text-yellow-500">UrbanUptrend</span> Works
    <span className="block w-24 h-1 bg-yellow-400 mt-3 mx-auto rounded-full"></span>
  </h2>

  <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
    From browsing to unboxing — here's how your perfect fit makes its way to you.
  </p>

  <div className="w-full mt-16 flex justify-center">
    <div className="flex flex-nowrap justify-start gap-8 md:gap-12 overflow-x-auto px-4 max-w-full">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-white rounded-2xl shadow-xl border border-yellow-100 p-6 min-w-[220px] max-w-[240px] transition-all duration-300 hover:shadow-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-500 rounded-full mb-4 text-3xl shadow-md">
            {step.icon}
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
          <p className="text-sm text-gray-600 mb-2 text-center leading-relaxed">
            {step.description}
          </p>
          <p className="text-xs text-gray-500 italic">
          {step.detail}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>


      <Testimonials />

      <div className="w-full bg-white pt-20 pb-28 px-4 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
          Why <span className="text-yellow-500">UrbanUptrend</span>?
          <span className="block w-24 h-1 bg-yellow-400 mt-3 mx-auto rounded-full"></span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Your style journey starts here — curated trends, fast deliveries, and unmatched support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[{
            icon: <FaTshirt className="text-3xl" />, title: "Trendy Collections", description: "Fresh, modern styles curated for every season and every vibe."
          }, {
            icon: <FaTruck className="text-3xl" />, title: "Quick Delivery", description: "Swift and safe delivery to bring fashion faster to your doorstep."
          }, {
            icon: <FaHeadset className="text-3xl" />, title: "24/7 Support", description: "Always here for you — any question, anytime, anywhere."
          }, {
            icon: <FaStar className="text-3xl" />, title: "Top-rated Quality", description: "Only premium fabrics and craftsmanship for a long-lasting impression."
          }, {
            icon: <FaPalette className="text-3xl" />, title: "Unique Designs", description: "Express yourself with hand-picked, bold, and diverse aesthetics."
          }, {
            icon: <FaRecycle className="text-3xl" />, title: "Eco-Friendly Fashion", description: "Style with responsibility — sustainable and conscious collections."
          }].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-yellow-100 text-yellow-500 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;