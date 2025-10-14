"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#accueil" className="flex items-center space-x-3">
          <div className="w-12 h-12 relative">
            <Image
              src="/images/logo.jpg" // mets ton logo dans public/images/logo.png
              alt="Logo La Plume Blanche"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li>
            <a href="#accueil" className="text-gray-700 hover:text-red-600 transition-colors">
              Accueil
            </a>
          </li>
          <li>
            <a href="#mission" className="text-gray-700 hover:text-red-600 transition-colors">
              Mission
            </a>
          </li>
          <li>
            <a href="#produits" className="text-gray-700 hover:text-red-600 transition-colors">
              Produits
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Contact Button desktop */}
        <a
          href="#contact"
          className="hidden sm:inline-block px-5 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold rounded-full shadow-md hover:shadow-red-400/40 transition-all"
        >
          Nous Contacter
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-red-600 hover:text-red-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white/90 backdrop-blur-lg border-t border-red-100">
          <a href="#accueil" className="block text-gray-700 font-semibold hover:text-red-600 transition-colors">
            Accueil
          </a>
          <a href="#mission" className="block text-gray-700 font-semibold hover:text-red-600 transition-colors">
            Mission
          </a>
          <a href="#produits" className="block text-gray-700 font-semibold hover:text-red-600 transition-colors">
            Produits
          </a>
          <a href="#contact" className="block text-gray-700 font-semibold hover:text-red-600 transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="block text-center px-5 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold rounded-full shadow-md hover:shadow-red-400/40 transition-all"
          >
            Nous Contacter
          </a>
        </div>
      )}
    </nav>
  );
}
