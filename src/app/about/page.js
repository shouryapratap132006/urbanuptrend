"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter ,FaAward } from "react-icons/fa";
import Footer from "@/src/components/Footer/Footer";

// Example Employees
const employees = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    image: "/assets/emp2.png",
    description: "Visionary leader with a passion for fashion and innovation.",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Guhar Rasuli",
    position: "Creative Director",
    image: "/assets/emp1.png",
    description: "Leading our creative vision with innovation and passion.",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Harmione Granger",
    position: "CTO & Co-Founder",
    image: "/assets/emp3.png",
    description: "Tech wizard making magic happen behind the scenes.",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Jane Smith",
    position: "Marketing Specialist",
    image: "/assets/emp4.png",
    description: "Crafting marketing magic that connects with hearts.",
    linkedin: "https://linkedin.com/in/janesmith",
    instagram: "https://instagram.com/janesmith",
    twitter: "",
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">

      <div className="relative w-full h-screen flex items-center justify-start px-4 md:px-12">
  <Image
    src="/assets/about-hero.jpg" 
    alt="UrbanUptrend Background"
    fill
    className="object-cover opacity-100"
  />
  <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center">
    <motion.h1
      className="text-4xl md:text-7xl font-extrabold text-gray-900 tracking-wide"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      UrbanUptrend
    </motion.h1>
    <motion.p
      className="text-lg md:text-2xl text-gray-700 mt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      "Fashion is the armor to survive the reality of everyday life."
    </motion.p>
    <motion.p
      className="text-base md:text-xl text-gray-600 mt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      At UrbanUptrend, we believe in creating style experiences that empower you. 
      From trendy essentials to statement pieces, our collections are curated for 
      the bold, the passionate, and the fearless.
    </motion.p>
  </div>
</div>

      <div className="w-full bg-white py-24 px-4 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Journey
        </motion.h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          From a small dream to a global trendsetter — UrbanUptrend started as a passion project to redefine modern fashion. Today, we’re proud to style thousands across the world, blending creativity, quality, and culture.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="w-full bg-gray-50 py-24 px-4 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Vision & Mission
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            className="p-8 bg-white rounded-3xl shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become the global symbol of innovation and individuality in fashion, inspiring self-expression everywhere.
            </p>
          </motion.div>
          <motion.div
            className="p-8 bg-white rounded-3xl shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-500">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To deliver trend-driven designs with uncompromised quality, empowering our community to wear their confidence boldly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="relative w-full bg-white py-28 px-4 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          The heart and soul behind every stitch and story.
        </p>

        <div className="mt-16 flex justify-center gap-12 flex-wrap">
          {employees.map((employee, index) => (
            <motion.div
              key={index}
              className="w-72 bg-gray-50 rounded-3xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-500"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xl font-bold text-gray-900">{employee.name}</p>
              <p className="text-gray-500 mb-2">{employee.position}</p>
              <p className="text-sm text-gray-600 mt-2 mb-4 text-center">
                {employee.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 text-yellow-500 text-2xl">
                {employee.linkedin && (
                  <a href={employee.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {employee.instagram && (
                  <a href={employee.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {employee.twitter && (
                  <a href={employee.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
       <div className="w-full bg-gray-100 py-20 px-4 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At UrbanUptrend, we value creativity, sustainability, and integrity. Our goal is to constantly innovate while being mindful of our environmental impact. We aim to offer our customers not just high-quality products but also an experience that aligns with their values.
        </motion.p>
      </div>

      <div className="w-full bg-white py-20 px-4 md:px-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Achievements
        </motion.h2>
        <div className="flex justify-center gap-16 mt-12">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FaAward className="text-6xl text-yellow-500 mb-4" />
            <p className="text-lg font-semibold text-gray-900 mb-4">Global Recognition</p>
            <p className="text-sm text-gray-600 text-center">
              We've been featured in numerous fashion magazines and online platforms for our innovative designs and fast-growing customer base.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
          

    </div>
  );
};

export default About;
