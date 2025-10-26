"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// --- Icônes SVG ---
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
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Données des statistiques ---
const stats = [
  { number: "20+", label: "Années d'expérience" },
  { number: "100%", label: "Traçabilité" },
  { number: "1000+", label: "Clients satisfaits" },
];

// --- Composant Stat individuel ---
function StatItem({ number, label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const cleanNumber = parseInt(number.replace(/\D/g, ""));

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="text-3xl font-bold text-red-600">
        {inView ? (
          <>
            <CountUp end={cleanNumber} duration={2.5} separator=" " />
            {number.includes("+") && "+"}
            {number.includes("%") && "%"}
          </>
        ) : (
          "0"
        )}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const features = [
    {
      icon: "🏆",
      title: "Normes de Qualité",
      desc: "Respect strict des standards de qualité et de bien-être animal",
    },
    {
      icon: "🏡",
      title: "Fermes Modernes",
      desc: "Infrastructures soigneusement aménagées avec une informatisation de la conduite d'élevage",
    },
    {
      icon: "🌱",
      title: "Alimentation Saine",
      desc: "Nutrition équilibrée pour une croissance optimale",
    },
  ];

  const certifications = [
    {
      img: "/images/certification1.png",
      title: "Certification ISO 9001",
      desc: "Qualité et gestion conforme aux normes internationales",
    },
    {
      img: "/images/certification2.png",
      title: "Certification Halal",
      desc: "Respect des normes de production halal",
    },
    {
      img: "/images/certification3.png",
      title: "Certification HACCP",
      desc: "Sécurité alimentaire et hygiène irréprochable",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* === SECTION HERO === */}
      <section
        id="accueil"
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte principal */}
            <div className="space-y-8">
              <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold tracking-wide inline-block">
                EXCELLENCE DEPUIS 2007
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                L&apos;élevage au
                <span className="block mt-2 bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                  normes supérieures
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Depuis 2007, la Plume Blanche s&apos;engage à produire de la volaille de bonne qualité, dans des fermes modernes qui respectent la réglementation en vigueur.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#mission"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Découvrir notre mission
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>

              {/* Statistiques animées */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat, idx) => (
                  <StatItem key={idx} number={stat.number} label={stat.label} />
                ))}
              </div>
            </div>

            {/* Image Hero */}
            <div className="relative lg:h-[600px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-50 rounded-3xl transform rotate-3"></div>
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/0H9A0556.jpg"
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

      {/* === SECTION MISSION === */}
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
              Nous nous engageons à fournir des produits de la plus haute
              qualité tout en respectant le bien-être animal et
              l&apos;environnement.
            </p>
          </div>

          {/* Cartes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Image + texte */}
          <div className="bg-gradient-to-br from-gray-50 to-red-50/30 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Un processus d&apos;élevage maîtrisé
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dès leur naissance, nos poussins sont accueillis dans des
                  fermes soigneusement aménagées pour leur garantir un climat
                  optimal et des conditions idéales pour leur croissance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Grâce à une alimentation saine et équilibrée, associée à un
                  suivi rigoureux, nos poussins grandissent dans un environnement
                  idéal.
                </p>

                <ul className="space-y-4">
                  {[
                    "Certification et traçabilité complète",
                    "Contrôle qualité à chaque étape",
                    "Suivi vétérinaire régulier",
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

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/0H9A0567.jpg"
                  alt="Processus d'élevage"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION ÉQUIPE === */}
<section
  id="equipe"
  className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
>
  <div className="max-w-7xl mx-auto text-center">
    <span className="text-red-600 font-semibold text-sm tracking-wide uppercase">
      Notre Équipe
    </span>
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
      Gestionnaires administratifs chevronnés
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Une équipe dédiée et expérimentée, qui veille à ce que chaque produit
      réponde aux plus hauts standards de qualité et de bien-être animal.
    </p>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Texte sur l'équipe */}
      <div className="space-y-6 text-left">
        <p className="text-gray-700 leading-relaxed">
          Derrière chaque projet, il y a des personnes, des passions et des valeurs. Nous mettons l&apos;humain au centre de toutes nos initiatives, car nous croyons que l&apos;innovation ne peut exister sans collaboration et engagement.
        </p>
        <ul className="space-y-4">
          {[
            "Experts en alimentation et nutrition animale",
            "Vétérinaires qualifiés pour un suivi régulier",
            "Spécialistes en qualité et traçabilité",
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

      {/* Image de l'équipe */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="/images/equipe.jpg" // <-- Mets le nom de ton image ici
          alt="Notre Équipe"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}



