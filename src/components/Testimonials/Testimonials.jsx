"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Meera K.",
    title: "Fashion Enthusiast",
    image: "/assets/user1.png",
    quote: "UrbanUptrend totally changed my wardrobe game!",
  },
  {
    name: "Aarav S.",
    title: "Content Creator",
    image: "/assets/user2.png",
    quote: "Super quick delivery and top-notch designs!",
  },
  {
    name: "Ishita V.",
    title: "Student",
    image: "/assets/user3.png",
    quote: "Amazing quality and smooth checkout experience!",
  },
  {
    name: "Rohit.D",
    title: "Model",
    image: "/assets/user4.png",
    quote: "Custom outfits that fit my vibe perfectly!",
  },
  {
    name: "Yashi P.",
    title: "Entrepreneur",
    image: "/assets/user5.png",
    quote: "Fast deliveries and quality products!",
  },
  {
    name: "Simson L.",
    title: "Designer",
    image: "/assets/user6.png",
    quote: "Refreshing styles and super affordable!",
  },
  {
    name: "Kiran T.",
    title: "Photographer",
    image: "/assets/user7.png",
    quote: "Looked amazing on camera💛💛💛💛💛💛!",
  },
  {
    name: "Ankit B.",
    title: "Influencer",
    image: "/assets/user8.png",
    quote: "Always trendy and on time!",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full mt-20 px-4 py-20 md:px-12 text-center overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
        Loved by <span className="text-yellow-500">Thousands</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
        Real voices. Real vibes. Real impact.
      </p>

      <div className="w-full mt-12 overflow-hidden">
        <div
          className="flex gap-8 animate-testimonials-scroll w-max"
          style={{ animation: "testimonialsScroll 60s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[250px] md:min-w-[300px] bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>
              <p className="text-gray-700 text-base md:text-lg font-semibold italic text-center leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes testimonialsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
