"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, Sparkles } from "lucide-react";

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-200 rounded-full blur-3xl animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl animate-float opacity-20 [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full blur-3xl animate-float opacity-10 [animation-delay:4s]"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 mb-4">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">Contactez-nous</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight">
              Restons en contact
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
              Partagez vos idées, posez vos questions. Nous sommes là pour vous aider.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-rose-400 to-red-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>

            {/* Card */}
            <div className="relative bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Partagez vos idées avec nous..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-red-600 via-rose-600 to-red-500 text-white rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Envoyer le message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Réponse sous 24-48 heures ⚡
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
