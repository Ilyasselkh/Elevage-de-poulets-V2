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

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
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
    {
      icon: "🏆",
      title: "Normes de Qualité",
      desc: "Respect strict des standards de qualité et de bien-être animal"
    },
    {
      icon: "🏡",
      title: "Fermes Modernes",
      desc: "Infrastructures soigneusement aménagées avec climat contrôlé"
    },
    {
      icon: "🌱",
      title: "Alimentation Saine",
      desc: "Nutrition équilibrée pour une croissance optimale"
    }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience" },
    { number: "100%", label: "Traçabilité" },
    { number: "5000+", label: "Clients satisfaits" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Design Minimaliste Moderne */}
      <section id="accueil" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenu Texte */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide">
                  EXCELLENCE DEPUIS 2009
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                L&apos;élevage de
                <span className="block mt-2 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                  qualité supérieure
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                La Plume Blanche vous offre des produits d&apos;excellence issus d&apos;un élevage respectueux du bien-être animal et de l&apos;environnement.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#mission"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Découvrir notre mission
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-all duration-300"
                >
                  Nous contacter
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-red-600">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Hero */}
            <div className="relative lg:h-[600px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-50 rounded-3xl transform rotate-3"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/mission.jpg"
                  alt="La Plume Blanche"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Design Moderne avec Cards */}
      <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
              Notre Engagement
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Une mission d&apos;excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à fournir des produits de la plus haute qualité tout en respectant le bien-être animal et l&apos;environnement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Section Description Détaillée */}
          <div className="bg-gradient-to-br from-gray-50 to-red-50/30 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Un processus d&apos;élevage maîtrisé
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dès leur naissance, nos poussins sont accueillis dans des fermes soigneusement aménagées pour leur garantir un climat optimal et des conditions idéales pour leur croissance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Grâce à une alimentation saine et équilibrée, associée à un suivi rigoureux, nos poussins grandissent dans un environnement contrôlé, devenant de robustes poulets prêts à satisfaire les besoins de nos clients.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <Check />
                    </div>
                    <span className="text-gray-700">Contrôle qualité à chaque étape</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <Check />
                    </div>
                    <span className="text-gray-700">Suivi vétérinaire régulier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <Check />
                    </div>
                    <span className="text-gray-700">Certification et traçabilité complète</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mission.jpg"
                  alt="Processus d'élevage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits Section - Design Premium */}
      <section id="produits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
              Nos Produits
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Une qualité irréprochable
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🐣
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Environnement Naturel
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nos poussins grandissent dans un environnement naturel et contrôlé, garantissant des poulets frais, savoureux et en parfaite santé.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                    100% Naturel
                  </span>
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium">
                    Sans OGM
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🌾
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Alimentation de Qualité
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Une alimentation rigoureusement sélectionnée répondant à des exigences strictes pour garantir une viande tendre et savoureuse.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-medium">
                    Traçabilité
                  </span>
                  <span className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-medium">
                    Nutrition Équilibrée
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bannière Certification */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl p-12 text-center text-white shadow-xl">
            <div className="text-6xl mb-6">🏆</div>
            <h3 className="text-3xl font-bold mb-4">Certification & Bien-être Animal</h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Nous respectons les plus hauts standards de l&apos;industrie en matière de bien-être animal et de qualité des produits.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Design Élégant */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
              Contactez-nous
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-xl text-gray-600">
              Notre équipe est à votre écoute pour répondre à vos besoins
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Informations de contact */}
              <div className="lg:col-span-2 bg-gradient-to-br from-red-600 to-rose-600 p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Informations</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Adresse</div>
                      <div className="text-white/80">Rabat, Maroc</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-white/80">contact@laplumeblanche.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Téléphone</div>
                      <div className="text-white/80">+212 6 06 69 28 00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-3 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-100 transition-all text-gray-900"
                      placeholder="Nom et Prénom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-100 transition-all text-gray-900"
                      placeholder="nom@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Votre Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-red-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-100 transition-all resize-none text-gray-900"
                      placeholder="Décrivez votre demande..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}