import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "BengkelMotor.com | Servis Motor Modern & Montir Panggilan 24/7",
  description: "Platform servis motor digital modern di Indonesia. Booking servis berkala tanpa antre, panggil montir darurat 24 jam ke lokasi, serta katalog sparepart original bergaransi.",
  keywords: ["bengkel motor online", "montir panggilan", "servis motor matic", "bengkel motor 24 jam", "sparepart motor original", "bengkelmotor.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
