"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo taille grande */}
            <Link href="/#accueil" className="relative group flex items-center py-2">
              <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              <div className="relative h-20 w-32 transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo La Plume Blanche"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>

            {/* Menu Desktop - Style moderne */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/#accueil"
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50/50 transition-all duration-200"
              >
                Accueil
              </Link>
              <Link
                href="/Gallery"
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50/50 transition-all duration-200"
              >
                La plume blanche
              </Link>
              
              {/* Bouton Contact moderne avec effet glassmorphism */}
              <Link
                href="/Contact"
                className="ml-4 relative group px-6 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Hamburger moderne */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Menu Mobile moderne avec animation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-100">
              <Link
                href="/#accueil"
                className="block px-4 py-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/Gallery"
                className="block px-4 py-3 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-red-50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                La plume blanche
              </Link>
              <Link
                href="/Contact"
                className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-xl shadow-lg shadow-red-500/30 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 100%;
        }
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        .bg-pos-100 {
          background-position: 100% 50%;
        }
      `}</style>
    </>
  );
}