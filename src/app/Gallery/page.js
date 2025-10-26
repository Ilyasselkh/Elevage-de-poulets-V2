"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Liste de vos images avec paragraphes détaillés
  const images = [
    {
      src: "/images/photo1.webp",
      title: "Nos installations modernes",
      description: "Des fermes équipées pour le bien-être animal",
      paragraph: "Des infrastructures solides et adaptées pour garantir le bien-être des animaux et l'efficacité de la production. Entre le silo de stockage des aliments et les bâtiments d'élevage, tout est pensé pour optimiser le travail des éleveurs. C'est dans ce cadre que débute le cycle de vie des volailles, un espace où tradition et modernité se rencontrent pour nourrir la population avec rigueur et passion."
    },
    {
      src: "/images/photo2.webp",
      title: "Élevage de qualité",
      description: "Des poussins en parfaite santé",
      paragraph: "Dans cet instant figé, on perçoit toute l'attention et le soin que l'éleveur porte à ses poussins. Observer, toucher, vérifier : chaque geste est un gage de qualité et de bien-être. L'élevage moderne ne se limite pas à la production, il repose sur une véritable relation entre l'homme et l'animal. Cette proximité est essentielle pour s'assurer du bon développement des volailles et de leur santé, garantissant ainsi une alimentation responsable et respectueuse."
    },
    {
      src: "/images/photo3.webp",
      title: "Alimentation naturelle",
      description: "Une nutrition équilibrée et saine",
      paragraph: "Dans ce grand espace baigné de lumière, des milliers de poussins évoluent dans un environnement conçu pour leur croissance optimale. L'aménagement de la ferme avicole répond à des critères stricts : température contrôlée, alimentation équilibrée et accès facilité à l'eau. Ce cadre reflète l'importance du bien-être animal dans les méthodes d'élevage actuelles, où la productivité va de pair avec le respect des normes sanitaires et environnementales."
    },
    {
      src: "/images/picture4.webp",
      title: "Environnement contrôlé 'Viper Touch'",
      description: "Température et hygiène optimales",
      paragraph: "Une unité de contrôle numérique, le \"Viper Touch\", qui permet de surveiller et d'ajuster en temps réel les différents paramètres environnementaux d'un élevage. On peut y voir les mesures de température, de ventilation, de taux de CO2 ainsi que d'autres indicateurs clés pour assurer le confort et la santé des poulets. Cette interface connectée illustre comment les nouvelles technologies permettent aux éleveurs de mieux maîtriser les conditions de vie de leurs animaux, conciliant ainsi productivité et bien-être animal, deux objectifs essentiels dans les pratiques d'élevage modernes."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section Présentation La Plume Blanche */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
              À propos de nous
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-3 mb-6">
              La Plume Blanche
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L&apos;excellence de l&apos;élevage de volailles au Maroc depuis 2007
            </p>
          </div>

          {/* Contenu principal avec image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Notre Histoire
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La Plume Blanche est une entreprise spécialisée dans l&apos;élevage de volailles, offrant une production respectueuse des normes de qualité et de bien-être animal. Depuis notre création en 2007, nous nous engageons à fournir des produits d&apos;excellence issus d&apos;un élevage responsable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dès leur naissance, les poussins sont accueillis dans des fermes soigneusement aménagées pour leur garantir un climat optimal et des conditions idéales pour leur croissance. Grâce à une alimentation saine et équilibrée, associée à un suivi rigoureux, nos poussins grandissent dans un environnement contrôlé.
              </p>

              <ul className="space-y-4">
                {[
                  "Respect des normes de qualité et de bien-être animal",
                  "Équipe d'experts vétérinaires et nutritionnistes",
                  "Fermes modernes avec climat contrôlé",
                  "Traçabilité complète de nos produits",
                  "Alimentation saine et équilibrée",
                  
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <Check />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/0H9A0564.jpg"
                alt="La Plume Blanche - Présentation"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Citation thème élevage avec design organique */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-10 md:p-12 shadow-xl">
            {/* Motif de fond subtil - plumes stylisées */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="feather-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M10,2 Q12,5 10,8 Q8,5 10,2 M10,8 L10,18" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-red-900"/>
                </pattern>
                <rect width="100" height="100" fill="url(#feather-pattern)"/>
              </svg>
            </div>

            <div className="relative">
              {/* En-tête avec icônes d'élevage */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-2xl">🐣</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform">
                  <span className="text-2xl">🐓</span>
                </div>
              </div>

              {/* Citation principale */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-3">
                  L&apos;excellence de l&apos;élevage
                </h3>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-400"></div>
                  <span className="text-red-600 text-xl">✦</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-400"></div>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-red-600">
                  La qualité dans vos assiettes
                </p>
              </div>

              {/* Badges de valeurs */}
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-red-100 text-sm font-semibold text-gray-700 hover:shadow-md transition-shadow">
                  <span className="text-green-500">✓</span> Bien-être animal
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-red-100 text-sm font-semibold text-gray-700 hover:shadow-md transition-shadow">
                  <span className="text-green-500">✓</span> Naturel & Sain
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-red-100 text-sm font-semibold text-gray-700 hover:shadow-md transition-shadow">
                  <span className="text-green-500">✓</span> Traçabilité totale
                </span>
              </div>

              {/* Signature */}
              <div className="text-center mt-6">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-red-600 to-rose-600 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-sm tracking-wide">LA PLUME BLANCHE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Galerie */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
            Notre Galerie
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Découvrez nos installations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu de nos fermes modernes et de notre engagement envers la qualité
          </p>
        </div>

        {/* Carrousel Principal */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-[500px] md:h-[600px]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{images[currentIndex].title}</h3>
                <p className="text-lg text-white/90">{images[currentIndex].description}</p>
              </div>

              {/* Boutons modifiés pour ajouter text-black */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-black"  // Ajout de text-black
                aria-label="Image précédente"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 text-black"  // Ajout de text-black
                aria-label="Image suivante"
              >
                <ChevronRight />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grille de miniatures */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explorez toutes nos photos
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox avec texte */}
      {lightboxOpen && (
  <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 overflow-y-auto">
    {/* Bouton de fermeture */}
    <button
      onClick={closeLightbox}
      className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
      aria-label="Fermer"
    >
      <Close />
    </button>

    <div className="relative w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start mt-12 sm:mt-0">
      {/* Image principale */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-auto lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={images[lightboxIndex].src}
          alt={images[lightboxIndex].title}
          fill
          className="object-contain object-center"  // Utilise object-contain pour afficher l'image entière sans cropping
          priority
        />
        
        {/* Boutons de navigation pour l'image (positionnés en bas pour mobile) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            onClick={prevLightboxImage}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Image précédente"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextLightboxImage}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Image suivante"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Contenu textuel */}
      <div className="text-white space-y-4 px-2 sm:px-4 max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
        {/* Numéro de l'image */}
        <div className="text-sm sm:text-base font-semibold text-red-400">
          {lightboxIndex + 1} / {images.length}
        </div>

        {/* Titre */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {images[lightboxIndex].title}
        </h3>

        {/* Séparateur */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-red-500 to-transparent"></div>
          <span className="text-red-500 text-base sm:text-xl">✦</span>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-red-500 to-transparent"></div>
        </div>

        {/* Description courte */}
        <p className="text-base sm:text-lg md:text-xl text-red-400 font-semibold">
          {images[lightboxIndex].description}
        </p>

        {/* Paragraphe détaillé */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-justify">
            {images[lightboxIndex].paragraph}
          </p>
        </div>

        {/* Boutons de navigation (texte) - Affichés en colonne sur mobile */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4">
          <button
            onClick={prevLightboxImage}
            className="w-full sm:w-auto flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all"
          >
            <ChevronLeft /> Précédent
          </button>
          <button
            onClick={nextLightboxImage}
            className="w-full sm:w-auto flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all"
          >
            Suivant <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
}