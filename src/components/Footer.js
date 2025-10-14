"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-rose-600 to-red-600 text-white py-12 px-6 mt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-extrabold mb-4">La Plume Blanche</h3>
          <p className="text-white/80 font-medium">
            L&apos;excellence de l&apos;élevage, la qualité dans vos assiettes.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Liens rapides</h4>
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#accueil" className="hover:text-yellow-200 transition-colors">Accueil</a>
            </li>
            <li>
              <a href="#mission" className="hover:text-yellow-200 transition-colors">Mission</a>
            </li>
            <li>
              <a href="#produits" className="hover:text-yellow-200 transition-colors">Produits</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-200 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <p className="text-white/80">📍 Rabat, Maroc</p>
          <p className="text-white/80">📧 contact@laplumeblanche.com</p>
          <p className="text-white/80">📞 +212 6 06 69 28 00</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70 font-semibold">
        © {new Date().getFullYear()} La Plume Blanche — Tous droits réservés.
      </div>
    </footer>
  );
}
