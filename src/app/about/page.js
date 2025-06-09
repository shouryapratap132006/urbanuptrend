"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "@/src/components/Footer/Footer";
import Testimonials from "@/src/components/Testimonials/Testimonials";

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
    instagram: "https://instagram.com/guharrasuli",
    twitter: "https://twitter.com/johndoe",
  },
  {
    name: "Harmione Granger",
    position: "CTO & Co-Founder",
    image: "/assets/emp3.png",
    description: "Tech wizard making magic happen behind the scenes.",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/harmionegranger",
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
    <div className="w-full min-h-screen bg-white">
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-0% via-yellow-100 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About us
        </motion.h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
          We create style experiences that empower you — from statement pieces to essentials curated for the bold and fearless.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {["/assets/hero1.jpg", "/assets/hero2.jpg", "/assets/hero3.jpg", "/assets/hero4.jpg"].map((src, i) => (
            <Image key={i} src={src} alt={`team-${i}`} width={300} height={200} className="rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We make sure your idea & creation delivered properly
            </h2>
            <p className="text-gray-700 mb-4">
              We believe in executing creative visions to perfection — ensuring every design aligns with quality, trend, and purpose.
            </p>
            <p className="text-gray-700">
              Our streamlined process and dedicated team bring each concept to life with accuracy, creativity, and passion.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/assets/impact.jpg"
              alt="Impact"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow text-gray-800">
              &quot;Making an impact, together&quot; — UrbanUptrend Founder
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-72 md:h-96 relative">
            <Image
              src="/assets/sme.jpg"
              alt="Empowerment"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We empower small business owners
            </h2>
            <p className="text-gray-700 mb-4">
              Our platform uplifts creative entrepreneurs, helping them bring bold fashion ideas into the spotlight through support and visibility.
            </p>
            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-600">
              &quot;UrbanUptrend helps me turn my style dreams into reality.&quot;
            </blockquote>
          </div>
        </div>
      </section>

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

      <section className="py-20 px-6 md:px-20 bg-yellow-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Our Journey</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          From a passionate team in a small studio to a nationwide movement in fashion, our journey has always been about authenticity, bold creativity, and community-driven growth.
        </p>
      </section>
      <Testimonials />  

      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className=" rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-3xl font-bold mb-2">50K+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className=" rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-3xl font-bold mb-2">100+</h3>
            <p className="text-gray-700">Designs Launched</p>
          </div>
          <div className=" rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-3xl font-bold mb-2">25</h3>
            <p className="text-gray-700">Team Members</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-yellow-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">We help businesses grow faster and bigger</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-16">
          From creative strategy to execution — our support ensures your brand’s growth journey stays strong and steady.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-2xl font-semibold mb-2">Professional Team</h3>
            <p className="text-gray-700">Experts dedicated to delivering high-quality results with creativity and precision.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-2xl font-semibold mb-2">Target Oriented</h3>
            <p className="text-gray-700">We align our strategies with your vision to ensure measurable success.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-yellow-500 text-2xl font-semibold mb-2">Success Guarantee</h3>
            <p className="text-gray-700">We’re committed to your growth with processes that drive results.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-gray-50 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          The passionate crew bringing fashion to life — one bold idea at a time.
        </p>
        <div className="mt-14 flex justify-center flex-wrap gap-10">
          {employees.map((employee, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 w-72 shadow-md hover:shadow-xl"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 mx-auto mb-4">
                <Image
                  src={employee.image}
                  alt={employee.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800">{employee.name}</h4>
              <p className="text-gray-500 mb-2">{employee.position}</p>
              <p className="text-sm text-gray-600 mb-4">{employee.description}</p>
              <div className="flex justify-center gap-4 text-yellow-500 text-xl">
                {employee.linkedin && <a href={employee.linkedin}><FaLinkedin /></a>}
                {employee.instagram && <a href={employee.instagram}><FaInstagram /></a>}
                {employee.twitter && <a href={employee.twitter}><FaTwitter /></a>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

