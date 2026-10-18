"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Wrench, 
  Bike, 
  ShieldAlert, 
  User, 
  LayoutDashboard, 
  PhoneCall, 
  Menu, 
  X,
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold">BengkelMotor.com Live:</span>
            <span className="hidden sm:inline">Montir panggilan siap siaga 24/7 di area Jabodetabek & Bandung</span>
            <span className="sm:hidden">Montir siaga 24 Jam</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 opacity-90">
              <Clock className="w-3 h-3" /> Respon Darurat &lt; 30 Menit
            </span>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20BengkelMotor.com,%20saya%20butuh%20bantuan%20darurat%20motor" 
              target="_blank" 
              rel="noreferrer"
              className="font-bold underline hover:text-amber-200 transition"
            >
              WhatsApp Darurat
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-0.5 shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-orange-400 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">
                    Bengkel<span className="text-orange-500">Motor</span>
                  </span>
                  <span className="text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">
                    .com
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 tracking-wider">
                  BENGKEL DIGITAL & MONTIR PANGGILAN
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <Link 
                href="/" 
                className={`hover:text-orange-400 transition-colors ${pathname === "/" ? "text-orange-400 font-semibold" : ""}`}
              >
                Beranda
              </Link>
              <a href="/#layanan" className="hover:text-orange-400 transition-colors">
                Layanan Servis
              </a>
              <a href="/#montir-panggilan" className="hover:text-orange-400 transition-colors flex items-center gap-1.5 text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Montir Panggilan
              </a>
              <a href="/#estimator" className="hover:text-orange-400 transition-colors">
                Hitung Biaya
              </a>
              <a href="/#sparepart" className="hover:text-orange-400 transition-colors">
                Katalog Sparepart
              </a>
              <a href="/#testimoni" className="hover:text-orange-400 transition-colors">
                Ulasan
              </a>
            </nav>

            {/* Quick Portal Switcher & Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Role Switcher Pill (Helper for Reviewing All Pages) */}
              <div className="flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs text-slate-300">
                <Link
                  href="/"
                  className={`px-2.5 py-1 rounded-md transition ${
                    pathname === "/" ? "bg-orange-600 text-white font-semibold" : "hover:text-white"
                  }`}
                  title="Tampilan pengunjung umum"
                >
                  Guest
                </Link>
                <Link
                  href="/customer"
                  className={`px-2.5 py-1 rounded-md transition ${
                    pathname === "/customer" ? "bg-orange-600 text-white font-semibold" : "hover:text-white"
                  }`}
                  title="Simulasi portal customer motor"
                >
                  Customer
                </Link>
                <Link
                  href="/admin"
                  className={`px-2.5 py-1 rounded-md transition ${
                    pathname === "/admin" ? "bg-orange-600 text-white font-semibold" : "hover:text-white"
                  }`}
                  title="Halaman Admin Bengkel"
                >
                  Admin
                </Link>
              </div>

              {/* Login / Register Button */}
              <Link
                href="/auth"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition"
              >
                <User className="w-3.5 h-3.5 text-orange-400" />
                Masuk / Daftar
              </Link>

              {/* Emergency Booking CTA */}
              <a
                href="#booking"
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition active:scale-95"
              >
                <Bike className="w-4 h-4" />
                Booking Servis
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/auth"
                className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
              >
                <User className="w-5 h-5 text-orange-400" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900/90 rounded-lg border border-slate-800 text-center text-xs">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`py-1.5 rounded ${pathname === "/" ? "bg-orange-600 text-white font-bold" : "text-slate-300"}`}
              >
                Guest
              </Link>
              <Link
                href="/customer"
                onClick={() => setIsOpen(false)}
                className={`py-1.5 rounded ${pathname === "/customer" ? "bg-orange-600 text-white font-bold" : "text-slate-300"}`}
              >
                Customer
              </Link>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className={`py-1.5 rounded ${pathname === "/admin" ? "bg-orange-600 text-white font-bold" : "text-slate-300"}`}
              >
                Admin
              </Link>
            </div>

            <div className="space-y-1 pt-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
              >
                Beranda
              </Link>
              <a
                href="/#layanan"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
              >
                Layanan Bengkel
              </a>
              <a
                href="/#montir-panggilan"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-amber-400 hover:bg-slate-900 rounded-lg"
              >
                🚨 Montir Panggilan (24 Jam)
              </a>
              <a
                href="/#estimator"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
              >
                Estimasi Biaya Servis
              </a>
              <a
                href="/#sparepart"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 rounded-lg"
              >
                Katalog Sparepart Asli
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Link
                href="/auth"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 font-semibold text-sm bg-slate-900 border border-slate-700 text-slate-100 rounded-lg"
              >
                Masuk / Daftar Akun Customer
              </Link>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 font-semibold text-sm bg-slate-800 text-slate-200 rounded-lg"
              >
                Masuk Portal Admin Bengkel
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
