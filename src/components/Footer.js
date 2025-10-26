"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Effets de fond décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section Logo & Description */}
          <div className="lg:col-span-5">
            <Link href="/#accueil" className="inline-block mb-6 group">
              <div className="relative h-16 w-28 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo La Plume Blanche"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                La Plume Blanche
              </span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Spécialiste de l&apos;élevage de volailles au Maroc depuis 2007. Excellence, qualité et respect du bien-être animal au cœur de nos engagements.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-rose-500"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#accueil" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  → Accueil
                </Link>
              </li>
              <li>
                <Link href="/Gallery" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  → La plume blanche
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Nos Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-rose-500"></span>
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Élevage de volailles</li>
              <li className="text-gray-400">Distribution & expertise</li>
              <li className="text-gray-400">Certification qualité</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Nous Contacter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-500 to-rose-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="text-lg">📍</span>
                </div>
                <div className="pt-2">
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    Rabat, Maroc
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="text-lg">📧</span>
                </div>
                <div className="pt-2">
                  <a 
                    href="mailto:laplumeblanche60@gmail.com" 
                    className="text-gray-400 hover:text-white transition-colors break-all"
                  >
                    laplumeblanche60@gmail.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <span className="text-lg">📞</span>
                </div>
                <div className="pt-2">
                  <a 
                    href="tel:0537530289" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    05 37 53 02 89
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Séparateur avec gradient */}
      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Barre de copyright moderne */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} <span className="text-white font-semibold">La Plume Blanche</span>. Tous droits réservés.
          </p>
          
        </div>
      </div>
    </footer>
  );
}