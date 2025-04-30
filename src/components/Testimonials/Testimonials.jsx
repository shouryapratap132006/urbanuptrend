"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Meera K.",
    title: "Fashion Enthusiast",
    image: "/assets/user1.png",
    quote:
      "UrbanUptrend totally transformed how I dress. Their styles are always fresh, bold, and unique. I love how confident and put-together I feel every time I step out in their outfits. It's become my go-to brand for self-expression through fashion. The quality and design speak volumes, and I’ve never felt more in touch with my personal style.",
  },
  {
    name: "Aarav S.",
    title: "Content Creator",
    image: "/assets/user2.png",
    quote:
      "Super quick delivery and top-notch designs. As someone constantly filming and posting online, I need my clothes to be on point and delivered on time — and UrbanUptrend nails it every time. The attention to detail is unmatched and the styles help me create high-impact content effortlessly.",
  },
  {
    name: "Ishita V.",
    title: "Student",
    image: "/assets/user3.png",
    quote:
      "Shopping with UrbanUptrend is always such a smooth experience. The quality of the fabrics, the fit of the clothes, and the checkout process — everything feels curated for someone who values both style and convenience. I always feel confident and stylish, even during busy campus days.",
  },
  
  {
    name: "Yashi P.",
    title: "Entrepreneur",
    image: "/assets/user5.png",
    quote:
      "Being on the go constantly, I need fashion that keeps up. UrbanUptrend has redefined comfort with style for me — I can transition from meetings to events effortlessly. Their pieces really boost my confidence and presence, allowing me to express myself with ease and class.",
  },
  {
    name: "Simson L.",
    title: "Designer",
    image: "/assets/user6.png",
    quote:
      "The designs are incredibly well-thought-out and speak to modern trends while keeping things timeless. As a designer myself, I admire the craftsmanship and originality in every piece. It’s clear that UrbanUptrend values quality and understands modern aesthetic.",
  },
 
  
];

export default function Testimonials() {
  return (
    <div className="w-full mt-20 px-4 py-20 md:px-12 text-center overflow-hidden bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-950 tracking-wide">
        Loved by <span className="text-yellow-500">Thousands</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto mb-20">
        Real voices. Real vibes. Real impact.
      </p>

      <div className="w-full mt-16 ">
        <div
          className="flex gap-8 animate-testimonials-scroll w-max"
          style={{ animation: "testimonialsScroll 40s linear infinite" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[320px] md:w-[420px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col items-center pt-20 pb-6 px-6 text-center relative overflow-visible"
            >
              <div className="absolute -top-12 w-30 h - 30 rounded-full border-4 border-white shadow-md overflow-hidden bg-white mt-2">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-contained rounded-full shadow-md"
                />
              </div>
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-[1.9] font-medium italic mb-4 mt-2">
                <span className="text-yellow-500 text-2xl font-bold">“</span>
                {testimonial.quote}
                <span className="text-yellow-500 text-2xl font-bold">”</span>
              </p>
              <h3 className="text-md md:text-lg font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
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
