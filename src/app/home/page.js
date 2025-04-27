"use client";

import Image from "next/image";

const Home = () => {
  const posters = [
    "/assets/p1.png",
    "/assets/p2.png",
    "/assets/p3.png",
    "/assets/p4.png",
    "/assets/p5.png",
    "/assets/p6.png",
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


    </div>
  );
};

export default Home;
