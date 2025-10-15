import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🧠 --- METADATA MODIFIÉE ---
export const metadata = {
  title: "La Plume Blanche - Élevage de Qualité",
  description:
    "Site de La Plume Blanche, société d'élevage spécialisée dans la qualité, la traçabilité et le bien-être animal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
