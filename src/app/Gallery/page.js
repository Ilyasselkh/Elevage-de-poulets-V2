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

  // Liste de vos images
  const images = [
    {
      src: "/images/gallery/photo1.jpg",
      title: "Nos installations modernes",
      description: "Des fermes équipées pour le bien-être animal"
    },
    {
      src: "/images/gallery/photo2.jpg",
      title: "Élevage de qualité",
      description: "Des poussins en parfaite santé"
    },
    {
      src: "/images/gallery/photo3.jpg",
      title: "Alimentation naturelle",
      description: "Une nutrition équilibrée et saine"
    },
    {
      src: "/images/gallery/photo4.jpg",
      title: "Environnement contrôlé",
      description: "Température et hygiène optimales"
    },
    {
      src: "/images/gallery/photo5.jpg",
      title: "Équipe professionnelle",
      description: "Des experts dévoués à l'excellence"
    },
    {
      src: "/images/gallery/photo6.jpg",
      title: "Production locale",
      description: "Fraîcheur et qualité garanties"
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
              L&apos;excellence de l&apos;élevage de volailles au Maroc depuis 2009
            </p>
          </div>

          {/* Contenu principal avec image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Notre Histoire
              </h2>
              <p className="text-gray-700 leading-relaxed">
                La Plume Blanche est une entreprise spécialisée dans l&apos;élevage de volailles, offrant une production respectueuse des normes de qualité et de bien-être animal. Depuis notre création en 2009, nous nous engageons à fournir des produits d&apos;excellence issus d&apos;un élevage responsable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dès leur naissance, les poussins sont accueillis dans des fermes soigneusement aménagées pour leur garantir un climat optimal et des conditions idéales pour leur croissance. Grâce à une alimentation saine et équilibrée, associée à un suivi rigoureux, nos poussins grandissent dans un environnement contrôlé.
              </p>

              <ul className="space-y-4">
                {[
                  "Respect des normes de qualité et de bien-être animal",
                  "Fermes modernes avec climat contrôlé",
                  "Alimentation saine et équilibrée",
                  "Traçabilité complète de nos produits",
                  "Équipe d'experts vétérinaires et nutritionnistes"
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

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/0H9A0581.jpg"
                alt="La Plume Blanche - Présentation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Traçabilité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-700 font-medium">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Suivi qualité</div>
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

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Image précédente"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
            aria-label="Fermer"
          >
            <Close />
          </button>

          <div className="relative max-w-6xl w-full h-[80vh]">
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].title}
              fill
              className="object-contain"
            />

            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Image précédente"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Image suivante"
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{images[lightboxIndex].title}</h3>
              <p className="text-white/90">{images[lightboxIndex].description}</p>
              <p className="text-sm text-white/70 mt-2">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}