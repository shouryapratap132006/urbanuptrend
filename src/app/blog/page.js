"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/src/components/Footer/Footer";

const blogPosts = [
    {
        title: "Top 10 Streetwear Trends for 2025",
        excerpt: "Dive into the must-have streetwear trends redefining fashion this year...",
        image: "/assets/blog1.jpg",
        date: "April 28, 2025",
        author: "UrbanUptrend Team",
    },
    {
        title: "Sustainable Fashion: Our Commitment",
        excerpt: "Learn how UrbanUptrend is contributing to a greener planet through sustainable fashion choices.",
        image: "/assets/blog2.jpg",
        date: "April 20, 2025",
        author: "UrbanUptrend Team",
    },
    {
        title: "Building Your Capsule Wardrobe",
        excerpt: "A simple guide to create a versatile, stylish wardrobe with minimal pieces.",
        image: "/assets/blog3.jpg",
        date: "April 12, 2025",
        author: "UrbanUptrend Stylists",
    },
    {
        title: "The Art of Layering: Tips and Tricks",
        excerpt: "Master the art of layering with our expert tips for a stylish look all year round.",
        image: "/assets/blog4.jpg",
        date: "April 5, 2025",
        author: "UrbanUptrend Team",
    },
    {
        title: "Why Minimalism Is Taking Over Fashion",
        excerpt: "Discover why simplicity is the ultimate sophistication in today's fashion world.",
        image: "/assets/blog5.jpg",
        date: "March 29, 2025",
        author: "UrbanUptrend Stylists",
    },
    {
        title: "Denim Diaries: Styling Jeans for Every Occasion",
        excerpt: "Denim is eternal — learn new ways to style your favorite jeans effortlessly.",
        image: "/assets/blog6.jpg",
        date: "March 22, 2025",
        author: "UrbanUptrend Team",
    },
    {
        title: "Color Theory in Fashion: What Works Best?",
        excerpt: "Understand how color choices can enhance your outfit and reflect your personality.",
        image: "/assets/blog7.jpg",
        date: "March 14, 2025",
        author: "UrbanUptrend Stylists",
    },
    {
        title: "Essential Accessories That Elevate Your Look",
        excerpt: "Small details make a big difference. Find out the must-have accessories of 2025.",
        image: "/assets/blog8.jpg",
        date: "March 7, 2025",
        author: "UrbanUptrend Team",
    },
    {
        title: "From Runway to Reality: How Trends Evolve",
        excerpt: "Explore how high-fashion trends make their way into everyday streetwear.",
        image: "/assets/blog9.jpg",
        date: "February 28, 2025",
        author: "UrbanUptrend Stylists",
    },

];

const BlogPage = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <div className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-12">
                <Image
                    src="/assets/blog-hero.jpg"
                    alt="UrbanUptrend Blog Background"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="relative z-10 max-w-3xl">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold text-gray-900"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        UrbanUptrend Journal
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-700 mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Fresh style tips, fashion insights, and the latest updates — all curated for you.
                    </motion.p>
                </div>
            </div>

            {/* Featured Article */}
            <section className="w-full py-20 px-4 md:px-12 bg-yellow-50">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/assets/featured-blog.jpg"
                            alt="Featured Blog"
                            width={600}
                            height={400}
                            className="rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Featured: The Rise of Personalized Fashion
                        </h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Discover how personal expression through fashion is shaping a new era of style,
                            with customizable options at UrbanUptrend leading the movement.
                        </p>
                        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all">
                            Read More
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Blog List Section */}
            <section className="w-full py-20 px-4 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-950">
                        Latest Articles
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Stay updated with our freshest drops and style inspirations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={300}
                                className="rounded-xl object-cover mb-6"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">{post.date} | {post.author}</p>
                            <p className="text-gray-600 mb-6">{post.excerpt}</p>
                            <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition-all">
                                Read More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
