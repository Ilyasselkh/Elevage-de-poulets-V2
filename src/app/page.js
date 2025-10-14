"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const ChevronRight = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  const features = [
    "Respect des normes de qualité et de bien-être animal",
    "Élevage en fermes soigneusement aménagées",
    "Alimentation saine et équilibrée",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="accueil"
        className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
              Bienvenue chez{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 blur-2xl opacity-30"></span>
                <span className="relative bg-gradient-to-r from-red-600 via-rose-600 to-red-700 bg-clip-text text-transparent">
                  La Plume Blanche
                </span>
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 max-w-4xl mx-auto font-semibold leading-relaxed">
              L&apos;excellence de l&apos;élevage, la qualité dans vos assiettes
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a
                href="#mission"
                className="group px-10 py-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                En savoir plus
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-white text-red-600 rounded-2xl font-black text-lg shadow-2xl hover:shadow-red-500/30 border-4 border-red-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Notre Mission
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                La Plume Blanche est une entreprise spécialisée dans l&apos;élevage
                de volailles, offrant une production respectueuse des normes de
                qualité et de bien-être animal. Dès leur naissance, les poussins
                sont accueillis dans des fermes soigneusement aménagées pour
                leur garantir un climat optimal et des conditions idéales pour
                leur croissance.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Grâce à une alimentation saine et équilibrée, associée à un
                suivi rigoureux, les poussins grandissent dans un environnement
                contrôlé, devenant de robustes poulets prêts à satisfaire les
                besoins de nos clients.
              </p>

              <div className="space-y-5 pt-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-600 rounded-xl transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-800 font-bold text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>


<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl transform rotate-6 opacity-20"></div>
  <div className="relative bg-white p-10 rounded-3xl shadow-2xl transform hover:rotate-0 rotate-3 transition-transform duration-500 border-4 border-red-100">
    <div className="aspect-square bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center overflow-hidden">
      <Image
        src="/images/mission.jpg" // chemin dans le dossier public
        alt="Notre Mission"
        width={400}               // largeur souhaitée
        height={400}              // hauteur souhaitée
        className="object-cover rounded-2xl"
        priority                  // pour précharger l'image et améliorer le LCP
      />
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Produits Section */}
      <section
        id="produits"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-red-50 to-rose-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Nos Produits
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200 to-rose-200 rounded-full blur-3xl opacity-30"></div>

            <div className="grid md:grid-cols-2 relative">
              <div className="p-12 space-y-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-5xl">🐣</span>
                  </div>
                  <h3 className="text-4xl font-black text-gray-900">
                    Environnement Naturel
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Nos poussins grandissent dans un environnement naturel,
                    garantissant des poulets frais et savoureux.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent my-8"></div>

                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-5xl">🌾</span>
                  </div>
                  <h3 className="text-4xl font-black text-gray-900">
                    Alimentation de Qualité
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    L&apos;alimentation de nos poulets répond à des exigences
                    strictes afin de garantir une viande tendre et savoureuse.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-red-100 to-rose-100 p-12 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="text-9xl animate-bounce">🐓</div>
                  <p className="text-2xl font-black text-red-900">
                    Qualité Supérieure
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="px-6 py-3 bg-white rounded-full font-bold text-red-600 shadow-lg">
                      100% Naturel
                    </span>
                    <span className="px-6 py-3 bg-white rounded-full font-bold text-red-600 shadow-lg">
                      Traçabilité
                    </span>
                    <span className="px-6 py-3 bg-white rounded-full font-bold text-red-600 shadow-lg">
                      Bien-être Animal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-red-700"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Nous Contacter
            </h2>
            <div className="w-32 h-2 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-white/90 text-xl font-semibold">
              Remplissez ce formulaire pour entrer en contact avec nous
            </p>
          </div>

          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/50 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-red-300 to-rose-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-red-300 to-rose-300 rounded-full blur-3xl opacity-20"></div>

            <div className="space-y-6 relative">
              <div>
                <label className="block text-gray-900 font-black text-sm mb-2 ml-4 uppercase tracking-wider">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-gray-900 font-semibold"
                  placeholder="Nom et Prénom"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-black text-sm mb-2 ml-4 uppercase tracking-wider">
                  Adresse Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-100 transition-all text-gray-900 font-semibold"
                  placeholder="nom@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-black text-sm mb-2 ml-4 uppercase tracking-wider">
                  Votre Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-red-100 transition-all resize-none text-gray-900 font-semibold"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-5 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
