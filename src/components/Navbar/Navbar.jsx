"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaUserCircle, FaBars, FaTimes, FaLock } from "react-icons/fa";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUserName(formData.name);
    setShowAuthForm(false);
    setFormData({ name: "", email: "", password: "" });
  };

  const openAuthForm = (signup) => {
    setIsSignup(signup);
    setShowAuthForm(true);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setMenuOpen(false);
    setShowDropdown(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white text-yellow-500 sticky top-0 z-40">

        <div className="text-3xl font-extrabold tracking-wide text-black">
          Urban<span className="text-yellow-500">Up</span>trend
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-3xl text-yellow-500" />
            ) : (
              <FaBars className="text-3xl text-yellow-500" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-10 text-lg text-gray-950">
          <Link href="/home" className="hover:text-yellow-500 transition-all duration-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 transition-all duration-300">About</Link>
          <Link href="/products" className="hover:text-yellow-500 transition-all duration-300">Products</Link>
          <Link href="/blog" className="hover:text-yellow-500 transition-all duration-300">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-6 relative">
          <button><FaHeart className="text-2xl text-amber-300 hover:text-yellow-500 transition-all" /></button>
          <button><FaShoppingCart className="text-2xl text-amber-300 hover:text-yellow-500 transition-all" /></button>

          {isLoggedIn ? (
            <div ref={dropdownRef} className="relative">
              <button onClick={toggleDropdown} className="flex items-center gap-2">
                <FaUserCircle className="text-3xl text-yellow-500" />
                <span className="hidden sm:inline font-semibold text-gray-950">{userName}</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 flex flex-col bg-white text-gray-900 border border-gray-300 w-48 py-2 shadow-md z-50">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => openAuthForm(false)}
              className="px-6 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all"
            >
              Login
            </button>
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-6 bg-white text-gray-950 text-lg font-semibold shadow-md md:hidden w-full">
          <Link href="/" className="hover:text-yellow-500" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="hover:text-yellow-500" onClick={toggleMenu}>About</Link>
          <Link href="/products" className="hover:text-yellow-500" onClick={toggleMenu}>Products</Link>
          <Link href="/blog" className="hover:text-yellow-500" onClick={toggleMenu}>Blog</Link>
          <div className="flex gap-4">
            <FaHeart className="text-2xl hover:text-red-400" />
            <FaShoppingCart className="text-2xl hover:text-blue-500" />
          </div>
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold">{userName}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => openAuthForm(false)}
              className="px-6 py-2 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all"
            >
              Login
            </button>
          )}
        </div>
      )}
      {showAuthForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 border border-gray-300 rounded-xl shadow-2xl w-96 space-y-6 animate-fade-in text-gray-900">
            <h2 className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
              {isSignup ? (
                <>
                  <FaUserCircle className="text-yellow-500" /> Sign Up
                </>
              ) : (
                <>
                  <FaUserCircle className="text-yellow-500" /> Log In
                </>
              )}
            </h2>
            <p className="text-center text-gray-500 text-sm">
              {isSignup
                ? "Create an account to enjoy exclusive offers!"
                : "Welcome back! Please log in to continue."}
            </p>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isSignup && (
                <div className="relative">
                  <FaUserCircle className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              )}
              <div className="relative">
                <FaUserCircle className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-2 font-bold hover:bg-yellow-400 transition-all rounded-lg"
              >
                {isSignup ? "Create Account" : "Login"}
              </button>
            </form>

            <div className="flex justify-between items-center pt-2 text-sm">
              <button
                onClick={() => setShowAuthForm(false)}
                className="text-gray-500 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={() => openAuthForm(!isSignup)}
                className="text-yellow-500 hover:underline font-semibold"
              >
                {isSignup ? "Already have an account?" : "Create new account"}
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Navbar;
