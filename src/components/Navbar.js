"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/#accueil" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 relative transition-transform group-hover:scale-110">
              <Image
                src="/images/logo.jpg"
                alt="Logo La Plume Blanche"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link
                href="/#accueil"
                className={`font-medium transition-colors hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-gray-900"
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/Gallery"
                className={`font-medium transition-colors hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-gray-900"
                }`}
              >
                La plume blanche
              </Link>
            </li>
            <li>
              <Link
                href="/#produits"
                className={`font-medium transition-colors hover:text-red-600 ${
                  scrolled ? "text-gray-700" : "text-gray-900"
                }`}
              >
                Produits
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Mobile */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-900 hover:text-red-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-gray-200 space-y-4 animate-fadeIn">
            <Link
              href="/#accueil"
              className="block text-gray-700 font-medium hover:text-red-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/#mission"
              className="block text-gray-700 font-medium hover:text-red-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Mission
            </Link>
            <Link
              href="/#produits"
              className="block text-gray-700 font-medium hover:text-red-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/#contact"
              className="block text-center px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
