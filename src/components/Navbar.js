"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg z-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#accueil"
          className="text-2xl font-extrabold bg-gradient-to-r from-red-600 via-rose-600 to-red-700 bg-clip-text text-transparent"
        >
          La Plume Blanche
        </a>

        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li>
            <a
              href="#accueil"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#mission"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Mission
            </a>
          </li>
          <li>
            <a
              href="#produits"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Produits
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden sm:inline-block px-5 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold rounded-full shadow-md hover:shadow-red-400/40 transition-all"
        >
          Nous Contacter
        </a>
      </div>
    </nav>
  );
}
